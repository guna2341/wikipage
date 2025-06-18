import * as React from "react"
export const DownArrow = ({
    width = 16,
    height = 16
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
    >
        <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="m13.28 5.967-4.347 4.346a1.324 1.324 0 0 1-1.866 0L2.72 5.967"
        />
    </svg>
)
