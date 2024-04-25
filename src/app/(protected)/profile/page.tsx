"use client";

import { UserInfo } from "../_components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
  const user = useCurrentUser();

  return (
    <div className="pt-20 w-full">
      <UserInfo label="📱 Client component" user={user} />
    </div>
  );
};

export default ClientPage;
