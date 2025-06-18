import * as React from "react"
export const BigArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#4A494A"
        d="m9.55 12 7.35 7.35c.25.25.371.542.363.875a1.246 1.246 0 0 1-.388.875 1.2 1.2 0 0 1-.875.375 1.2 1.2 0 0 1-.875-.375l-7.7-7.675c-.2-.2-.35-.425-.45-.675-.1-.25-.15-.5-.15-.75s.05-.5.15-.75c.1-.25.25-.475.45-.675l7.7-7.7c.25-.25.546-.37.888-.362.341.008.637.137.887.387s.375.542.375.875a1.2 1.2 0 0 1-.375.875L9.55 12Z"
      />
    </g>
  </svg>
)
