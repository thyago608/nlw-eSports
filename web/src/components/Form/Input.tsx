import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { FieldErrorsImpl } from "react-hook-form";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error: FieldErrorsImpl;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, ...rest },
  ref
) => {
  const invalidInput =
    !!rest.name && error[rest.name]
      ? "border-x-2 border-y-2 border-violet-500"
      : "";

  const classes = `bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 placeholder:text-[13px] md:placeholder:text-sm ${invalidInput}
  ${!!rest.className ? rest.className : ""}`;

  return <input {...rest} className={classes} ref={ref} />;
};

export const Input = forwardRef(InputBase);
