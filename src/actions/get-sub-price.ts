import { stripe } from "@/lib/stripe";

export const getSubscriptionPrice = async (priceId: string) => {
  const price = await stripe.prices.retrieve(priceId, {
    expand: ["currency_options"],
  });
  return price;
};
