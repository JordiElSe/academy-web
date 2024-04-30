import { cn } from "@/lib/utils";
import { ManageSubButton } from "@/components/manage-sub-button";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";
import { ExtendedUser } from "@next-auth";

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("w-6 h-6", className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default async function PricingTable() {
  const user = await currentUser();
  async function fetchPlans() {
    "use server";
    const products = await stripe.products.list({
      limit: 2,
      expand: ["data.default_price", "data.default_price.currency_options"],
    });
    return products.data.reverse();
  }

  async function getUserSubscriptionPlan(user: ExtendedUser | undefined) {
    "use server";
    // const user = await currentUser();

    if (!user) {
      return null;
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
      subscription.stripeCurrentPeriodEnd?.getTime()! + 86_400_000 > Date.now();

    if (!isValid) {
      return null;
    }

    return {
      ...subscription,
    };
  }

  const plans = await fetchPlans();

  let currentUserPlan = null;
  currentUserPlan = await getUserSubscriptionPlan(user);

  function stringToBool(str: string) {
    return str === "true";
  }

  //   const bannerText = "";

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full lg:w-auto mx-auto max-w-4xl lg:text-center">
            <h1 className="text-black dark:text-white text-2xl font-semibold max-w-xs sm:max-w-none md:text-4xl !leading-tight">
              Choose Your Plan
            </h1>
            <p className="text-black dark:text-white mt-6 md:text-xl lg:text-center max-w-prose">
              Find the Perfect Membership Package for Your Language Learning
              Journey
            </p>
          </div>

          <div className="mt-12" aria-hidden="true"></div>

          <div
            className={cn(
              "isolate mx-auto mt-4 mb-28 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none",
              plans.length === 2 ? "lg:grid-cols-2" : "",
              plans.length === 3 ? "lg:grid-cols-3" : ""
            )}
          >
            {plans.map((plan) => {
              const isFeatured = stringToBool(plan.metadata.featured);
              const isHighlighted = stringToBool(plan.metadata.highlighted);
              return (
                <div
                  key={plan.id}
                  className={cn(
                    isFeatured
                      ? "!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100"
                      : "bg-white dark:bg-gray-900/80 ring-gray-300/70 dark:ring-gray-700",
                    "max-w-xs ring-1 rounded-3xl p-8 xl:p-10",
                    isHighlighted ? "" : ""
                  )}
                >
                  <h3
                    className={cn(
                      isFeatured
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white",
                      "text-2xl font-bold tracking-tight"
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={cn(
                      isFeatured
                        ? "text-gray-300 dark:text-gray-500"
                        : "text-gray-600 dark:text-gray-400",
                      "mt-4 text-sm leading-6"
                    )}
                  >
                    {plan.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span
                      className={cn(
                        isFeatured
                          ? "text-white dark:text-black"
                          : "text-black dark:text-white",
                        "text-4xl font-bold tracking-tight"
                        // plan.discountPrice ? "line-through" : ""
                      )}
                    >
                      {(plan.default_price as Stripe.Price)?.unit_amount
                        ? (plan.default_price as Stripe.Price).unit_amount! /
                          100
                        : ""}
                    </span>
                    <span
                      className={cn(
                        isFeatured
                          ? "text-gray-300 dark:text-gray-500"
                          : "dark:text-gray-400 text-gray-600",
                        "text-sm font-semibold leading-6"
                      )}
                    >
                      €/month
                    </span>
                    <span
                      className={cn(
                        isFeatured
                          ? "text-white dark:text-black"
                          : "text-black dark:text-white"
                      )}
                    >
                      {/* {plan.discountPrice} */}
                    </span>
                  </p>
                  <ManageSubButton
                    isFeatured={isFeatured}
                    isHighlighted={isHighlighted}
                    text={
                      (plan.default_price as Stripe.Price)?.id ===
                      currentUserPlan?.stripePriceId
                        ? "Manage Your Plan"
                        : "Choose Plan"
                    }
                    stripePriceId={
                      (plan.default_price as Stripe.Price)?.id
                        ? (plan.default_price as Stripe.Price).id
                        : ""
                    }
                  />

                  {/* <a
                  href={plan.url ?? "/pricing"}
                  aria-describedby={plan.id}
                  className={cn("flex mt-6 shadow-sm")}
                >
                  
                </a> */}

                  <ul
                    className={cn(
                      isFeatured
                        ? "text-gray-300 dark:text-gray-500"
                        : "text-gray-700 dark:text-gray-400",
                      "mt-8 space-y-3 text-sm leading-6 xl:mt-10"
                    )}
                  >
                    {Object.entries(plan.metadata).map(([key, value]) => {
                      if (key.startsWith("features")) {
                        return (
                          <li key={key} className="flex gap-x-3">
                            <CheckIcon
                              className={cn(
                                isFeatured ? "text-white dark:text-black" : "",
                                isHighlighted
                                  ? "text-slate-500"
                                  : "text-gray-500",
                                "h-6 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                            {value}
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
