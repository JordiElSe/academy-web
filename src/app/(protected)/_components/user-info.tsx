"use client";
import { ExtendedUser } from "@/next-auth";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getUserSubscriptionPlan } from "@/actions/subscription";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PricingTable from "@components/pricing-table";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  const [name, setName] = useState<string>("Free");
  const [showPricing, setShowPricing] = useState(false);

  const handleClick = () => {
    setShowPricing(!showPricing);
  };

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const plan = await getUserSubscriptionPlan();
        if (plan && plan.name) {
          setName(plan.name);
        }
      } catch (error) {
        setName("Error fetching plan");
        console.error(error);
      }
    };

    fetchPlan();
  }, []);

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.id}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Name</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.name}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Email</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.email}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Two Factor Authentication</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Subscription Plan</p>
            <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
              {name}
            </p>
            <Button variant="outline" size="sm" onClick={handleClick}>
              Manage Subscription
            </Button>
          </div>
          <div>{showPricing && <PricingTable />}</div>
        </div>
      </CardContent>
    </Card>
  );
};
