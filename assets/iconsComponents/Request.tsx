import * as React from "react";
import type { SVGProps } from "react";
const SvgRequest = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.875 3.75A8.25 8.25 0 1 1 4.625 12v-1.5a.75.75 0 0 0-1.5 0V12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75h-1.5v1.5zM10.625 3c0 .414.336.75.75.75v-1.5a.75.75 0 0 0-.75.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.875 6a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-1.5 0v1.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06L5.815 6z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M12.875 6a.75.75 0 0 1 .75.75v.75h1.5a.75.75 0 0 1 0 1.5H11.75a1.125 1.125 0 0 0 0 2.25H14a2.625 2.625 0 0 1 0 5.25h-.375v.75a.75.75 0 0 1-1.5 0v-.75h-1.5a.75.75 0 0 1 0-1.5H14a1.125 1.125 0 1 0 0-2.25h-2.25a2.625 2.625 0 0 1 0-5.25h.375v-.75a.75.75 0 0 1 .75-.75"
    />
  </svg>
);
export default SvgRequest;
