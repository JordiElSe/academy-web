import React from "react";

interface MenuOpenIconProps {
  color?: string;
}

const MenuOpenIcon: React.FC<MenuOpenIconProps> = ({ color = "#818181" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_249_9495)">
      <path
        d="M20 18C20.2549 18.0003 20.5 18.0979 20.6854 18.2728C20.8707 18.4478 20.9822 18.687 20.9972 18.9414C21.0121 19.1958 20.9293 19.4464 20.7657 19.6418C20.6021 19.8373 20.3701 19.9629 20.117 19.993L20 20H4C3.74512 19.9997 3.49997 19.9021 3.31463 19.7272C3.1293 19.5522 3.01777 19.313 3.00283 19.0586C2.98789 18.8042 3.07067 18.5536 3.23426 18.3582C3.39786 18.1627 3.6299 18.0371 3.883 18.007L4 18H20ZM20 11C20.2652 11 20.5196 11.1054 20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12C21 12.2652 20.8946 12.5196 20.7071 12.7071C20.5196 12.8946 20.2652 13 20 13H4C3.73478 13 3.48043 12.8946 3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11H20ZM20 4C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5C21 5.26522 20.8946 5.51957 20.7071 5.70711C20.5196 5.89464 20.2652 6 20 6H4C3.73478 6 3.48043 5.89464 3.29289 5.70711C3.10536 5.51957 3 5.26522 3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H20Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_249_9495">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default MenuOpenIcon;
