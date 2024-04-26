"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { subscriptionPlans } from "@/lib/subscription";

const DAY_IN_MS = 86_400_000;

export const getUserSubscriptionPlan = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    throw new Error("User not found");
  }

  const subscription = await db.subscription.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (!subscription) return null;

  const isSubscribed =
    subscription.stripePriceId &&
    subscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();

  const plan = isSubscribed
    ? subscriptionPlans.find(
        (p) => p.stripePriceId === subscription.stripePriceId
      )
    : null;

  let isCanceled = false;
  if (isSubscribed && subscription.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      subscription.stripeSubscriptionId
    );
    isCanceled = stripePlan.cancel_at_period_end;
  }

  return {
    ...plan,
    stripeSubscriptionId: subscription.stripeSubscriptionId,
    stripeCurrentPeriodEnd: subscription.stripeCurrentPeriodEnd,
    stripeCustomerId: subscription.stripeCustomerId,
    isSubscribed,
    isCanceled,
  };
};
