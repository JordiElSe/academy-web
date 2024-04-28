"use client";

import React, { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { manageSubscription } from "@/actions/subscribe";
import { useCurrentUser } from "@hooks/use-current-user";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";

interface ManageSubButtonProps {
  isFeatured: boolean;
  isHighlighted: boolean;
  text: string;
  stripePriceId: string;
}

export const ManageSubButton = ({
  isFeatured,
  isHighlighted,
  text,
  stripePriceId,
}: ManageSubButtonProps) => {
  const user = useCurrentUser();
  const [isPending, startTransition] = useTransition();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const response = await manageSubscription(stripePriceId);
        if (response) {
          window.location.href = response.url ?? "/profile/billing";
        }
      } catch (err) {
        console.error((err as Error).message);
        toast({ description: "Something went wrong, please try again later." });
      }
    });
  };

  return user ? (
    <form onSubmit={handleSubmit}>
      <Button
        size="lg"
        disabled={isPending}
        className={cn(
          "w-full text-black dark:text-white",
          !isHighlighted && !isFeatured
            ? "bg-gray-100 dark:bg-gray-600"
            : "bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-700",
          isFeatured
            ? "bg-white dark:bg-neutral-900 hover:bg-gray-200 dark:hover:bg-black"
            : "hover:opacity-80 transition-opacity"
        )}
        variant={isHighlighted ? "default" : "outline"}
      >
        {text}
      </Button>
    </form>
  ) : (
    <Button
      size="lg"
      className={cn(
        "w-full text-black dark:text-white",
        !isHighlighted && !isFeatured
          ? "bg-gray-100 dark:bg-gray-600"
          : "bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-700",
        isFeatured
          ? "bg-white dark:bg-neutral-900 hover:bg-gray-200 dark:hover:bg-black"
          : "hover:opacity-80 transition-opacity"
      )}
      variant={isHighlighted ? "default" : "outline"}
    >
      <Link href="/profile/billing">Choose Plan</Link>
    </Button>
  );
};
