import { SvgIcon } from "@material-ui/core";
import React from "react";

export function CartIcon(props) {
  return (
    <SvgIcon {...props} style={{ verticalAlign: "middle" }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 2L3.75 2.55797L6.775 16.2283H20.8"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.45105 5.06348H23.0001L20.8178 13.816H6.36189"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse
          cx="10.0753"
          cy="19.2971"
          rx="1.925"
          ry="1.9529"
          fill="white"
        />
        <ellipse cx="17.225" cy="19.2971" rx="1.925" ry="1.9529" fill="white" />
      </svg>
    </SvgIcon>
  );
}
