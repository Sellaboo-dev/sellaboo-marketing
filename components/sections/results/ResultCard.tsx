import { ResultOutcome } from "./ResultsSectionData";

type ResultCardProps = {
  outcome: ResultOutcome;
};

export function ResultCard({ outcome }: ResultCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[22px] border border-[#E7EBF3] bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#18B67E]">
        {outcome.eyebrow}
      </p>

      <h3 className="mb-4 font-[family:var(--font-manrope)] text-2xl font-bold text-[#181A24]">
        {outcome.title}
      </h3>

      <p className="mb-6 flex-1 leading-7 text-[#5F6678]">
        {outcome.description}
      </p>

      <ul className="space-y-3">
        {outcome.supportingPoints.map((point) => (
          <li
            key={point}
            className="flex items-center gap-3 text-sm font-medium text-[#181A24]"
          >
            <span
              className="h-2.5 w-2.5 rounded-full bg-[#18B67E]"
              aria-hidden="true"
            />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
