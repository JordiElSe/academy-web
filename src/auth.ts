import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@auth.config";
import { db } from "@lib/db";
import { getUserById } from "@utils/user";
import { getAccountByUserId } from "@utils/account";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  update,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow social login without email verification
      if (account?.provider !== "credentials") return true;

      try {
        const existingUser = await getUserById(user.id);

        // Prevent sign in without email verification
        if (!existingUser?.emailVerified) return false;

        if (existingUser.isTwoFactorEnabled) {
          if (!existingUser.twoFactorConfirmation) return false;

          // Set two factor confirmation to false for next sign in
          await db.user.update({
            where: { id: existingUser.id },
            data: { twoFactorConfirmation: false },
          });
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback", error);
        return false;
      }
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.isOAuth = token.isOAuth as boolean;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    },
  },
  adapter: PrismaAdapter(db) as any,
  session: { strategy: "jwt" },
  ...authConfig,
});
