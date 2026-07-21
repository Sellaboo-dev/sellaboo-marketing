import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"section">;

export function Section({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <section
      {...props}
      className={[
        "py-24",
        "lg:py-32",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}
