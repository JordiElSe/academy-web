import { db } from "@/lib/db";

export const getPasswordResetTokenByToken = async (token: string) => {
  const passwordResetToken = await db.passwordResetToken.findUnique({
    where: { token },
  });

  return passwordResetToken;
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  const passwordResetToken = await db.passwordResetToken.findFirst({
    where: { email },
  });

  return passwordResetToken;
};
