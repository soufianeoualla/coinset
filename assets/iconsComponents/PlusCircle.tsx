import * as React from "react";
import type { SVGProps } from "react";
const SvgPlusCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.875 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.375 7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.625 7.5c0-2.9 2.35-5.25 5.25-5.25h9c2.9 0 5.25 2.35 5.25 5.25v9c0 2.9-2.35 5.25-5.25 5.25h-9a5.25 5.25 0 0 1-5.25-5.25zm5.25-3.75a3.75 3.75 0 0 0-3.75 3.75v9a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75v-9a3.75 3.75 0 0 0-3.75-3.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlusCircle;
