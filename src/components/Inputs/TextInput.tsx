import type { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextInput = ({
  type = "text",
  label,
  id,
  className = "",
  ...props
}: TextInputProps) => {
  return (
    <div className="flex flex-col gap-1.5 w-full py-1">
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-medium text-neutral-300 select-none"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={[
          "w-full px-3.5 py-2 rounded-xl text-sm",
          "bg-neutral-950/40 text-neutral-100 placeholder:text-neutral-500",
          "border border-white/10 hover:border-white/20 focus:border-white/30",
          "focus:outline-none focus:ring-1 focus:ring-white/20",
          "transition-all duration-150",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    </div>
  );
};

export default TextInput;
