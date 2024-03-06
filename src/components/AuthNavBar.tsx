import React, { FC } from "react";
import { useTheme } from "next-themes";
import MenuOpenIcon from "./icons/MenuOpenIcon";
import UserIcon from "./icons/UserIcon";
import ThemeSwitch from "./ThemeSwitch";

interface Props {
  onMenuButtonClick: () => void;
}

const AuthNavbar: FC<Props> = ({ onMenuButtonClick }) => {
  const { theme } = useTheme();
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
        <UserIcon color={theme === "dark" ? "white" : "#818181"} />
        <div className="flex flex-col items-start">
          <span className="text-ml font-bold">John Doe</span>
          <span className="text-ml">johndoe@gmail.com</span>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar;
