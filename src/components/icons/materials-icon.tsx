import React from "react";

interface MaterialsIconProps {
  color?: string;
}

const MaterialsIcon: React.FC<MaterialsIconProps> = ({ color = "#818181" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5.88889L9.55556 1L23 5.88889M1 5.88889V12L14.4444 16.8889L23 12V5.88889M1 5.88889L14.4444 10.7778L23 5.88889"
      stroke={color}
      stroke-width="1.75"
      stroke-linejoin="round"
    />
    <path
      d="M1 12V18.1111L14.4444 23L23 18.1111V12"
      stroke={color}
      stroke-width="1.75"
      stroke-linejoin="round"
    />
  </svg>
);

export default MaterialsIcon;
