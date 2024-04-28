"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

const DAY_IN_MS = 86_400_000;

export const getUserSubscriptionPlan = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const subscription = await db.subscription.findUnique({
    where: {
      userId: user.id,
    },
    select: {
      stripeSubscriptionId: true,
      stripePriceId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
    },
  });

  if (!subscription) return null;

  const isValid =
    subscription.stripePriceId &&
    subscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();

  if (!isValid) {
    return null;
  }

  /* let isCanceled = false;
  if (isValid && subscription.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      subscription.stripeSubscriptionId
    );
    isCanceled = stripePlan.cancel_at_period_end;
  } */

  return {
    ...subscription,
    // isCanceled,
  };
};
