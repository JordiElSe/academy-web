import React, { FC } from "react";
import { useTheme } from "next-themes";
import MenuOpenIcon from "@components/icons/menu-open-icon";
import { UserButton } from "@components/auth/user-button";
import ThemeSwitch from "@components/theme-switch";

interface Props {
  onMenuButtonClick: () => void;
}

const Navbar: FC<Props> = ({ onMenuButtonClick }) => {
  // const { theme } = useTheme();
  return (
    <nav className="sticky top-0 left-0 h-20 w-full flex justify-between">
      <div
        onClick={onMenuButtonClick}
        className="md:invisible cursor-pointer pl-12 flex items-center"
      >
        <MenuOpenIcon />
      </div>
      <div className="flex items-center justify-between gap-4 h-full px-10">
        <ThemeSwitch />
        <UserButton />
        <div className="flex flex-col items-start">
          <span className="text-ml font-bold">John Doe</span>
          <span className="text-ml">johndoe@gmail.com</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
