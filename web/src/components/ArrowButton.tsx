import { ReactElement, ButtonHTMLAttributes } from "react";

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement;
  position: "left" | "right";
}

export function ArrowButton({ children, position, ...rest }: ArrowButtonProps) {
  return (
    <button
      type="button"
      className={`absolute h-[100%] z-[2] p-3 disabled:opacity-50 top-0 ${position}-0 invisible lg:visible`}
      {...rest}
    >
      {children}
    </button>
  );
}
