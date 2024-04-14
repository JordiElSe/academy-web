import React from "react";

interface DoubleArrowLeftProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const DoubleArrowLeft: React.FC<DoubleArrowLeftProps> = ({
  color = "#818181",
  ...props
}) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.64209 14.0003L12.8836 21.2418L14.5333 19.5921L8.94142 14.0003L14.5333 8.40846L12.8836 6.75879L5.64209 14.0003ZM12.2338 14.0003L19.4753 21.2418L21.1249 19.5921L15.5331 14.0003L21.1249 8.40846L19.4753 6.75879L12.2338 14.0003Z"
      fill={color}
    />
  </svg>
);

export default DoubleArrowLeft;
