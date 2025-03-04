import * as React from "react";
import type { SVGProps } from "react";
const SvgCardholder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M26 6H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3M5 12h22v2h-7a1 1 0 0 0-1 1 3 3 0 0 1-6 0 1 1 0 0 0-1-1H5zm1-4h20a1 1 0 0 1 1 1v1H5V9a1 1 0 0 1 1-1m20 16H6a1 1 0 0 1-1-1v-7h6.1a5 5 0 0 0 9.8 0H27v7a1 1 0 0 1-1 1"
    />
  </svg>
);
export default SvgCardholder;
