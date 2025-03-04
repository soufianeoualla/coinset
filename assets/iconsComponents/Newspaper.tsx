import * as React from "react";
import type { SVGProps } from "react";
const SvgNewspaper = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 14a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1m1 5h10a1 1 0 0 0 0-2H12a1 1 0 0 0 0 2M29 8v15a3 3 0 0 1-3 3H4a3 3 0 0 1-3-2.986V11a1 1 0 1 1 2 0v12a1 1 0 1 0 2 0V8a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2m-2 0H7v15c0 .34-.057.679-.171 1H26a1 1 0 0 0 1-1z"
    />
  </svg>
);
export default SvgNewspaper;
