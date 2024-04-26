import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getSubscriptionPrice } from "@/actions/get-sub-price";
import { checkoutSubscription } from "@/actions/subscribe";
import { subscriptionPlans } from "@/lib/subscription";
import { getUserSubscriptionPlan } from "@actions/fetch-subscription";

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
  const currentUserSub = await getUserSubscriptionPlan();

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
              subscriptionPlans.length === 2 ? "lg:grid-cols-2" : "",
              subscriptionPlans.length === 3 ? "lg:grid-cols-3" : ""
            )}
          >
            {subscriptionPlans.map((sub) => (
              <div
                key={sub.id}
                className={cn(
                  sub.featured
                    ? "!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100"
                    : "bg-white dark:bg-gray-900/80 ring-gray-300/70 dark:ring-gray-700",
                  "max-w-xs ring-1 rounded-3xl p-8 xl:p-10",
                  sub.highlighted ? "" : ""
                )}
              >
                <h3
                  id={sub.id}
                  className={cn(
                    sub.featured
                      ? "text-white dark:text-black"
                      : "text-black dark:text-white",
                    "text-2xl font-bold tracking-tight"
                  )}
                >
                  {sub.name}
                </h3>
                <p
                  className={cn(
                    sub.featured
                      ? "text-gray-300 dark:text-gray-500"
                      : "text-gray-600 dark:text-gray-400",
                    "mt-4 text-sm leading-6"
                  )}
                >
                  {sub.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={cn(
                      sub.featured
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white",
                      "text-4xl font-bold tracking-tight",
                      sub.discountPrice ? "line-through" : ""
                    )}
                  >
                    {sub.stripePriceId}
                  </span>

                  <span
                    className={cn(
                      sub.featured
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white"
                    )}
                  >
                    {sub.discountPrice}
                  </span>
                </p>
                <a
                  href={sub.href}
                  aria-describedby={sub.id}
                  className={cn("flex mt-6 shadow-sm")}
                >
                  <Button
                    size="lg"
                    className={cn(
                      "w-full text-black dark:text-white",
                      !sub.highlighted && !sub.featured
                        ? "bg-gray-100 dark:bg-gray-600"
                        : "bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-700",
                      sub.featured
                        ? "bg-white dark:bg-neutral-900 hover:bg-gray-200 dark:hover:bg-black"
                        : "hover:opacity-80 transition-opacity"
                    )}
                    variant={sub.highlighted ? "default" : "outline"}
                  >
                    {sub.stripePriceId === currentUserSub?.stripePriceId
                      ? "Your Plan"
                      : sub.cta}
                  </Button>
                </a>

                <ul
                  className={cn(
                    sub.featured
                      ? "text-gray-300 dark:text-gray-500"
                      : "text-gray-700 dark:text-gray-400",
                    "mt-8 space-y-3 text-sm leading-6 xl:mt-10"
                  )}
                >
                  {sub.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className={cn(
                          sub.featured ? "text-white dark:text-black" : "",
                          sub.highlighted ? "text-slate-500" : "text-gray-500",

                          "h-6 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
