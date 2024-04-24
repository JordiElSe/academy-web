// DashboardIcon.tsx
import React from "react";

interface DashboardIconProps {
  color?: string;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({ color = "#818181" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.75 9.9375V21C3.75 21.1989 3.82902 21.3897 3.96967 21.5303C4.11032 21.671 4.30109 21.75 4.5 21.75H9V15.375C9 15.0766 9.11853 14.7905 9.3295 14.5795C9.54048 14.3685 9.82663 14.25 10.125 14.25H13.875C14.1734 14.25 14.4595 14.3685 14.6705 14.5795C14.8815 14.7905 15 15.0766 15 15.375V21.75H19.5C19.6989 21.75 19.8897 21.671 20.0303 21.5303C20.171 21.3897 20.25 21.1989 20.25 21V9.9375"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.5 12.0002L12.5105 2.43766C12.2761 2.19016 11.7281 2.18735 11.4895 2.43766L1.5 12.0002M18.75 8.39078V3.00016H16.5V6.23453"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DashboardIcon;
