import * as React from "react"
export const FileEdit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <rect width={31} height={31} x={0.5} y={0.5} fill="#FEFEFE" rx={3.5} />
    <rect width={31} height={31} x={0.5} y={0.5} stroke="#EBEDEC" rx={3.5} />
    <path
      fill="#000"
      d="M13 20.675v-6.35a.75.75 0 0 1 1.136-.644l5.291 3.175a.75.75 0 0 1 0 1.287l-5.291 3.176A.751.751 0 0 1 13 20.674v.001Z"
    />
    <path
      fill="#000"
      d="M10 4h8.25v1.5H10A1.5 1.5 0 0 0 8.5 7v18a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5V10.75H25V25a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
    />
    <path
      fill="#000"
      d="M18.25 8.5V4L25 10.75h-4.5a2.25 2.25 0 0 1-2.25-2.25Z"
    />
  </svg>
)

