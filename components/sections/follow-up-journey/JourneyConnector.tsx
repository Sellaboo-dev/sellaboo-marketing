type Props = {
  orientation?: "horizontal" | "vertical";
};

export function JourneyConnector({
  orientation = "horizontal",
}: Props) {
  if (orientation === "vertical") {
    return (
      <div
        className="flex h-16 items-center justify-center"
        aria-hidden="true"
      >
        <div className="relative h-full w-px bg-[#D8DDEA]">
          <div className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b border-r border-[#AEB5C5]" />
        </div>
      </div>
    );
  }

  return (
    <div
      className="hidden min-w-10 items-center lg:flex"
      aria-hidden="true"
    >
      <div className="relative h-px w-full bg-[#D8DDEA]">
        <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r border-t border-[#AEB5C5]" />
      </div>
    </div>
  );
}
