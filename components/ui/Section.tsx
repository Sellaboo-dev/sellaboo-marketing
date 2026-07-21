import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Section({
  children,
  className = "",
}: Props) {
  return (
    <section
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
