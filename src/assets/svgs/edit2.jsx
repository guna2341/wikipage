import * as React from "react"
export const Edit2 = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        fill="none"
        className="cursor-pointer"
        {...props}
    >
        <g
            stroke="#624DE3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            clipPath="url(#a)"
        >
            <path d="M10.083 3.667H3.667A1.833 1.833 0 0 0 1.833 5.5v12.833a1.833 1.833 0 0 0 1.834 1.834H16.5a1.833 1.833 0 0 0 1.833-1.834v-6.416" />
            <path d="M16.958 2.292a1.944 1.944 0 1 1 2.75 2.75L11 13.75l-3.667.917L8.25 11l8.708-8.708Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h22v22H0z" />
            </clipPath>
        </defs>
    </svg>
)
