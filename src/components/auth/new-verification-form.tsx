"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { PuffLoader } from "react-spinners";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { newVerification } from "@/actions/new-verification";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(async () => {
    // To prevent errors in react stric mode
    if (success || error) return;

    setError("");
    setSuccess("");

    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token).then((data) => {
      setSuccess(data.success);
      setError(data.error);
    });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Authentication"
      cardDescription="Verifying your account"
      footerButtonLabel="Back to login"
      footerButtonHref="/auth/login"
    >
      <div className="flex items-center w-full justify-center">
        {error || success ? null : <PuffLoader size={45} />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
