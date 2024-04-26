interface SubscriptionPlan {
  name: string;
  id: string;
  href: string;
  discountPrice: string;
  stripePriceId: string;
  description: string | React.ReactNode;
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: "Basic",
    id: "0",
    href: "/subscribe",
    stripePriceId: process.env.STRIPE_BASIC_PLAN_PRICE_ID!,
    discountPrice: "",
    description: `Get all goodies for free, no credit card required.`,
    features: [
      `Multi-platform compatibility`,
      `Real-time notification system`,
      `Advanced user permissions`,
    ],
    featured: false,
    highlighted: false,
    cta: `Get started`,
  },
  {
    name: "Pro",
    id: "1",
    href: "/subscribe",
    stripePriceId: process.env.STRIPE_PRO_PLAN_PRICE_ID!,
    discountPrice: "",
    description: `When you grow, need more power and flexibility.`,
    features: [
      `All in the free plan plus`,
      `Customizable templates`,
      `Integration with third-party apps`,
    ],
    featured: false,
    highlighted: true,
    cta: `Get started`,
  },
];
