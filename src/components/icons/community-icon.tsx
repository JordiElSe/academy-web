import React from "react";

interface CommunityIconProps {
  color?: string;
}

const CommunityIcon: React.FC<CommunityIconProps> = ({ color = "#818181" }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18V17C7 15.6739 7.52678 14.4021 8.46447 13.4645C9.40215 12.5268 10.6739 12 12 12M12 12C13.3261 12 14.5979 12.5268 15.5355 13.4645C16.4732 14.4021 17 15.6739 17 17V18M12 12C12.7956 12 13.5587 11.6839 14.1213 11.1213C14.6839 10.5587 15 9.79565 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7956 6 12 6C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.31607 7.44129 9 8.20435 9 9C9 9.79565 9.31607 10.5587 9.87868 11.1213C10.4413 11.6839 11.2044 12 12 12ZM1 18V17C1 16.2044 1.31607 15.4413 1.87868 14.8787C2.44129 14.3161 3.20435 14 4 14M4 14C4.53043 14 5.03914 13.7893 5.41421 13.4142C5.78929 13.0391 6 12.5304 6 12C6 11.4696 5.78929 10.9609 5.41421 10.5858C5.03914 10.2107 4.53043 10 4 10C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14ZM23 18V17C23 16.2044 22.6839 15.4413 22.1213 14.8787C21.5587 14.3161 20.7956 14 20 14M20 14C20.5304 14 21.0391 13.7893 21.4142 13.4142C21.7893 13.0391 22 12.5304 22 12C22 11.4696 21.7893 10.9609 21.4142 10.5858C21.0391 10.2107 20.5304 10 20 10C19.4696 10 18.9609 10.2107 18.5858 10.5858C18.2107 10.9609 18 11.4696 18 12C18 12.5304 18.2107 13.0391 18.5858 13.4142C18.9609 13.7893 19.4696 14 20 14Z"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CommunityIcon;
