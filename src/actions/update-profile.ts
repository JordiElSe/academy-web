"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { update } from "@/auth";
import { db } from "@/lib/db";
import { UpdateSchema } from "@/schemas";
import { getUserByEmail, getUserById } from "@/utils/user";
import { currentUser } from "@/lib/auth";
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/mail";

export const updateProfile = async (values: z.infer<typeof UpdateSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const validatedFields = UpdateSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid inputs!" };
  }

  try {
    const dbUser = await getUserById(user.id);

    if (!dbUser) {
      return { error: "Unauthorized" };
    }

    if (user.isOAuth) {
      values.email = undefined;
      values.password = undefined;
      values.newPassword = undefined;
      values.isTwoFactorEnabled = undefined;
    }

    if (
      validatedFields.data.email &&
      validatedFields.data.email !== user.email
    ) {
      const existingUser = await getUserByEmail(validatedFields.data.email);

      if (existingUser && existingUser.id !== user.id) {
        return { error: "Email already in use!" };
      }

      const verificationToken = await generateVerificationToken(
        validatedFields.data.email
      );

      await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
      );

      return {
        success: "We have sent you an email to verify your new address!",
      };
    }

    if (
      validatedFields.data.password &&
      validatedFields.data.newPassword &&
      dbUser.password
    ) {
      const passwordsMatch = await bcrypt.compare(
        validatedFields.data.password,
        dbUser.password
      );

      if (!passwordsMatch) {
        return { error: "Incorrect password!" };
      }

      const hashedPassword = await bcrypt.hash(
        validatedFields.data.newPassword,
        10
      );
      validatedFields.data.password = hashedPassword;
      validatedFields.data.newPassword = undefined;
    }

    const updatedUser = await db.user.update({
      where: { id: dbUser.id },
      data: { ...validatedFields.data },
    });

    update({
      user: {
        name: updatedUser.name,
        email: updatedUser.email,
        isTwoFactorEnabled: updatedUser.isTwoFactorEnabled,
      },
    });

    return { success: "Your profile has been updated!" };
  } catch (error) {
    console.error("Internal server error", error);
    return { error: "Something went wrong. Please try again." };
  }
};
