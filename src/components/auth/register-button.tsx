import Link from "next/link";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { RegisterForm } from "@/components/auth/register-form";

interface RegisterButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const RegisterButton = ({
  children,
  mode = "redirect",
  asChild,
}: RegisterButtonProps) => {
  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <RegisterForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Link href="/auth/register" className="cursor-pointer">
      {children}
    </Link>
  );
};
