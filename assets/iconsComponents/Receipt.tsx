import * as React from "react";
import type { SVGProps } from "react";
const SvgReceipt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 13a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H10a1 1 0 0 1-1-1m1 5h12a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2M29 7v19a1 1 0 0 1-1.448.894L24 25.118l-3.552 1.776a1 1 0 0 1-.896 0L16 25.118l-3.552 1.776a1 1 0 0 1-.896 0L8 25.118l-3.552 1.776A1 1 0 0 1 3 26V7a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2m-2 0H5v17.383l2.553-1.278a1 1 0 0 1 .894 0L12 24.882l3.553-1.777a1 1 0 0 1 .895 0L20 24.882l3.552-1.777a1 1 0 0 1 .896 0L27 24.382z"
    />
  </svg>
);
export default SvgReceipt;
