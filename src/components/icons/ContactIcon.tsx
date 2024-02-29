import React from "react";

interface ContactIconProps {
  color?: string;
}

const ContactIcon: React.FC<ContactIconProps> = ({ color = "#818181" }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6H6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6Z"
      stroke={color}
      stroke-width="1.75"
    />
    <path
      d="M4 9L11.106 12.553C11.3836 12.6917 11.6897 12.7639 12 12.7639C12.3103 12.7639 12.6164 12.6917 12.894 12.553L20 9"
      stroke={color}
      stroke-width="1.75"
    />
  </svg>
);

export default ContactIcon;
