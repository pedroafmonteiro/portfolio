import type { ButtonHTMLAttributes } from "react";
import { Check, Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  baseText?: string;
  loadingText?: string;
  successText?: string;
  errorText?: string;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}

const Button = ({
  type = "button",
  width = "w-full",
  baseText = "Send message",
  loadingText = "Sending...",
  successText = "Message sent",
  errorText = "Couldn't send — try again",
  isLoading,
  isSuccess,
  isError,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const baseClass = `flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-150 select-none ${width}`;

  let stateClass =
    "bg-white text-neutral-950 hover:bg-neutral-200 active:scale-[0.99] cursor-pointer shadow-sm";

  if (isSuccess) {
    stateClass =
      "bg-white/10 text-neutral-200 border border-white/15 cursor-default";
  } else if (isError) {
    stateClass =
      "bg-white/5 text-neutral-300 border border-red-500/30 hover:border-red-500/50 cursor-pointer";
  } else if (isLoading) {
    stateClass =
      "bg-white/5 text-neutral-400 border border-white/10 cursor-wait";
  }

  const isDisabled = disabled || isLoading || isSuccess;

  return (
    <button
      type={type}
      className={`${baseClass} ${stateClass} ${className}`.trim()}
      disabled={isDisabled}
      {...props}
    >
      {isSuccess ? (
        <>
          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>{successText}</span>
        </>
      ) : isError ? (
        <span>{errorText}</span>
      ) : isLoading ? (
        <>
          <Loader2 className="w-3.5 h-3.5 animate-spin text-neutral-400" />
          <span>{loadingText}</span>
        </>
      ) : (
        children || <span>{baseText}</span>
      )}
    </button>
  );
};

export default Button;
