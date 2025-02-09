import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { Icon?: React.ReactNode }
>(({ className, type, Icon, ...props }, ref) => {
  return (
    <div className="w-full relative">
      <input
        type={type}
        className={cn(
          "flex w-full rounded-[20px] border placeholder:text-gray-30 text-xs bg-gray-10 px-4 h-[38px] ring-offset-background outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />

      {Icon}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
