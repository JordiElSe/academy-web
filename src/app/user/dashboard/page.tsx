"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/use-current-user";

const Dashboard = () => {
  const user = useCurrentUser();

  return (
    <Card className="w-[50rem]">
      <CardHeader>
        <CardTitle>Hi {user?.name ?? ""}! 👋</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Embark on your linguistic journey here.
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
