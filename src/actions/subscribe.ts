"use server";

import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

interface checkoutSubscriptionProps {
  stripePriceId: string;
  email: string;
  userId: string;
}

export const checkoutSubscription = async ({
  stripePriceId,
  email,
  userId,
}: checkoutSubscriptionProps) => {
  const billingUrl = absoluteUrl("/billing");
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: stripePriceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      customer_email: email,
      success_url: `${billingUrl}/?success=true`,
      cancel_url: `${billingUrl}/?canceled=true`,
      metadata: {
        userId,
      },
    });
    return { url: session.url };
  } catch (err) {
    console.error(err);
    return { error: "Something went wrong. Please try again." };
  }
};
