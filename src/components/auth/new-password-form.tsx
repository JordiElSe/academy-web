"use client";

import * as z from "zod";
import zxcvbn from "zxcvbn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useMemo, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { NewPasswordSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { newPassword } from "@/actions/new-password";

export const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Authentication"
      cardDescription="Enter a new password"
      footerButtonLabel="Back to login"
      footerButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                const result = useMemo(
                  () => zxcvbn(field.value.substring(0, 100)),
                  [field.value]
                );
                const quality = [
                  "Poor",
                  "Weak",
                  "Good",
                  "Strong",
                  "Very Strong",
                ][result.score];
                const isWeak = result.score < 2;

                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="******"
                        type="password"
                      />
                    </FormControl>
                    <Progress value={result.score * 25} />
                    <div
                      className={`text-xs font-medium ${
                        isWeak ? "text-destructive" : "text-[rgb(16,185,129)]"
                      }`}
                    >
                      Password quality: {quality}
                    </div>
                    {result.feedback.warning && result.score < 2 && (
                      <div className="text-xs text-destructive">
                        Warning: {result.feedback.warning}
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" disabled={isPending} className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
