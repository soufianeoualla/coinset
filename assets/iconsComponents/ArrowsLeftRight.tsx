import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsLeftRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    stroke="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      d="m26.708 22.708-4 4a1.001 1.001 0 0 1-1.415-1.415L23.586 23H6a1 1 0 1 1 0-2h17.586l-2.293-2.293a1 1 0 1 1 1.415-1.415l4 4a1 1 0 0 1 0 1.415m-17.415-8a1 1 0 0 0 1.415-1.415L8.414 11H26a1 1 0 0 0 0-2H8.414l2.294-2.292a1 1 0 0 0-1.415-1.415l-4 4a1 1 0 0 0 0 1.415z"
    />
  </svg>
);
export default SvgArrowsLeftRight;
