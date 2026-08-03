interface CalendlyEmbedProps {
  url: string;
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#E7EBF3] bg-white shadow-[0_24px_70px_rgba(42,45,76,0.12)]">
      <iframe
        src={url}
        title="Book a Live Sellaboo Demo"
        className="h-[820px] w-full"
        frameBorder="0"
      />
    </div>
  );
}
