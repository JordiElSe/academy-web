"use server";

import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

export const manageSubscription = async (stripePriceId: string) => {
  const profileUrl = absoluteUrl("/profile/billing");
  const user = await currentUser();

  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const userSubscription = await db.subscription.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (userSubscription && userSubscription.stripeCustomerId) {
    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: userSubscription.stripeCustomerId,
      return_url: profileUrl,
    });

    return { url: stripeSession.url };
  }
  // Create Checkout Sessions from body params.
  const stripeSession = await stripe.checkout.sessions.create({
    success_url: `${profileUrl}/?success=true`,
    cancel_url: `${profileUrl}/?canceled=true`,
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: stripePriceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    customer_email: user.email ?? "",
    metadata: {
      userId: user.id,
    },
  });
  return { url: stripeSession.url };
};
