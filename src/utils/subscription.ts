import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const getUserSubscriptionPlans = async () => {
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
};
