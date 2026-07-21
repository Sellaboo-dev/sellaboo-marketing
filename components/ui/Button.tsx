import { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const variantStyles =
    variant === "primary"
      ? [
          "bg-[var(--color-primary)]",
          "!text-white",
          "shadow-[0_14px_30px_rgba(63,58,100,0.22)]",
          "hover:bg-[var(--color-primary-hover)]",
          "hover:shadow-[0_18px_36px_rgba(63,58,100,0.28)]",
        ].join(" ")
      : [
          "bg-white",
          "border",
          "border-[rgba(63,58,100,0.14)]",
          "text-[var(--color-primary)]",
          "hover:border-[rgba(63,58,100,0.28)]",
          "hover:bg-[var(--color-primary-light)]",
        ].join(" ");

  return (
    <a
      {...props}
      className={[
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded-[16px]",
        "px-6",
        "py-4",
        "font-semibold",
        "no-underline",
        "transition-all",
        "duration-200",
        "hover:-translate-y-0.5",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[var(--color-primary)]",
        "focus-visible:ring-offset-2",
        variantStyles,
        className,
      ].join(" ")}
    />
  );
}
