import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";

const DAY_IN_MS = 86_400_000;

export interface SubscriptionPlan {
  id: string;
  name: string;
  stripePriceId: string;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "basic",
    name: "Basic",
    stripePriceId: process.env.STRIPE_BASIC_PLAN_PRICE_ID!,
  },
  {
    id: "pro",
    name: "Pro",
    stripePriceId: process.env.STRIPE_PRO_PLAN_PRICE_ID!,
  },
];

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

  const isSubscribed =
    dbUser.stripePriceId &&
    dbUser.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();

  const plan = isSubscribed
    ? subscriptionPlans.find((p) => p.stripePriceId === dbUser.stripePriceId)
    : null;

  let isCanceled = false;
  if (isSubscribed && dbUser.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      dbUser.stripeSubscriptionId
    );
    isCanceled = stripePlan.cancel_at_period_end;
  }

  return {
    ...plan,
    stripeSubscriptionId: dbUser.stripeSubscriptionId,
    stripeCurrentPeriodEnd: dbUser.stripeCurrentPeriodEnd,
    stripeCustomerId: dbUser.stripeCustomerId,
    isSubscribed,
    isCanceled,
  };
};
