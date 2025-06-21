import * as React from "react"
export const LeftArrow = ({
    color = "currentColor"
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={22}
    height={22}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M11.707 4.293a1 1 0 0 1 0 1.414L6.414 11H20a1 1 0 1 1 0 2H6.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
)
