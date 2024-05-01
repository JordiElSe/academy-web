import React, { FC } from "react";
import MenuOpenIcon from "@components/icons/menu-open-icon";
import { UserButton } from "@components/auth/user-button";
import ThemeSwitch from "@components/theme-switch";
import { useCurrentUser } from "@hooks/use-current-user";

interface Props {
  onMenuButtonClick: () => void;
}

const Navbar: FC<Props> = ({ onMenuButtonClick }) => {
  const user = useCurrentUser();
  return (
    <nav className="fixed top-0 left-0 h-12 w-full flex justify-end bg-white z-40">
      <div className="flex items-center justify-between gap-4 h-full px-10">
        <ThemeSwitch />
        <UserButton />
        <div className="flex flex-col items-start text-xs">
          <span className="text-ml font-bold">{user?.name}</span>
          <span className="text-ml">{user?.email}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
