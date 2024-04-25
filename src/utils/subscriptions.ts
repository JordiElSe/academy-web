export interface SubscriptionPlan {
  id: string;
  name: string;
  stripePriceId: string;
}

export const subscriptionPlans: SubscriptionPlan[] = [
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
