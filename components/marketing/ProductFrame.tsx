import type { ReactNode } from "react";

type ProductFrameProps = {
  children: ReactNode;
  className?: string;
};

export function ProductFrame({
  children,
  className = "",
}: ProductFrameProps) {
  return (
    <div
      className={[
        "overflow-hidden rounded-[22px] border border-[#E7EBF3]",
        "bg-gradient-to-br from-white to-[#F7F8FC]",
        "p-3 shadow-[0_20px_60px_-32px_rgba(24,26,36,0.32)]",
        className,
      ].join(" ")}
    >
      <div className="overflow-hidden rounded-2xl border border-[#E7EBF3] bg-white">
        {children}
      </div>
    </div>
  );
}
