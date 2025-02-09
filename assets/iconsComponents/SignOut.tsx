import * as React from "react";
import type { SVGProps } from "react";
const SvgSignOut = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M21.043 10.043a1 1 0 0 1 1.414 0l5.25 5.25a1 1 0 0 1 0 1.414l-5.25 5.25a1 1 0 0 1-1.414-1.414L25.586 16l-4.543-4.543a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 16a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.586 4.586A2 2 0 0 1 6 4h7a1 1 0 1 1 0 2H6v20h7a1 1 0 1 1 0 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 .586-1.414"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSignOut;
