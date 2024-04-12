"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/utils/user";
import { getVerificationTokenByToken } from "@/utils/verification-token";
import { validate as uuidValidate } from "uuid";
import { version as uuidVersion } from "uuid";

export const newVerification = async (token: string) => {
  if (!(uuidValidate(token) && uuidVersion(token) === 4)) {
    return { error: "Invalid token!" };
  }
  try {
    const existingToken = await getVerificationTokenByToken(token);

    if (!existingToken) {
      return { error: "Invalid token!" };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
      return { error: "Token has expired!" };
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser) {
      return { error: "User not found!" };
    }

    await db.user.update({
      where: { id: existingUser.id },
      data: {
        emailVerified: new Date(), // Used for verifying email
        email: existingToken.email, //Used for udpating email
      },
    });

    await db.verificationToken.delete({
      where: { id: existingToken.id },
    });

    return { success: "Email verified!" };
  } catch (error) {
    console.error("Internal server error", error);
    return { error: "Something went wrong. Please try again." };
  }
};
