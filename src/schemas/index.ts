import * as z from "zod";
import zxcvbn from "zxcvbn";

export const UpdateSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    email: z.optional(z.string().email()),
    password: z.optional(
      z.string().min(1, { message: "Password is required" })
    ),
    newPassword: z.optional(
      z
        .string()
        .min(1, { message: "New password is required" })
        .max(100, { message: "Maximum 100 characters allowed" })
        .refine((password) => zxcvbn(password.substring(0, 100)).score >= 2, {
          message: "New password is too weak",
        })
    ),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required!",
    }
  );

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .max(100, { message: "Maximum 100 characters allowed" }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .max(100, { message: "Maximum 100 characters allowed" })
    .refine((password) => zxcvbn(password.substring(0, 100)).score >= 2, {
      message: "Password is too weak",
    }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Minimum 6 characters required" })
    .max(100, { message: "Maximum 100 characters allowed" })
    .refine((password) => zxcvbn(password.substring(0, 100)).score >= 2, {
      message: "Password is too weak",
    }),
});
