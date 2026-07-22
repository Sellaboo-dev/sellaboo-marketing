import { WhySellabooFeature as Feature } from "./WhySellabooData";

type Props = {
    feature: Feature;
    reverse?: boolean;
};

export function WhySellabooFeature({
    feature,
    reverse = false,
}: Props) {
    return (
        <article
            className={[
                "grid items-center gap-12 lg:grid-cols-2",
                reverse ? "lg:[&>*:first-child]:order-2" : "",
            ].join(" ")}
        >
            <div
                className="flex aspect-[4/3] items-center justify-center rounded-[22px] border border-[#E7EBF3] bg-gradient-to-br from-white to-[#F7F8FC] shadow-sm"
                aria-hidden="true"
            >
                <div className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-[#E7EBF3] bg-white p-6 shadow-sm">
                    <div className="h-3 w-32 rounded-full bg-[#ECEAF7]" />

                    <div className="h-12 rounded-xl border border-dashed border-[#D7DCE8]" />

                    <div className="flex justify-center">
                        <div className="rounded-xl bg-[#3F3A64] px-8 py-3 text-sm font-semibold text-white">
                            Enroll Lead
                        </div>
                    </div>

                    <div className="rounded-xl bg-[#F3FBF8] px-4 py-3 text-center text-sm font-medium text-[#18B67E]">
                        ✓ Follow-Up Started
                    </div>
                </div>
            </div>

            <div className="max-w-xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#18B67E]">
                    {feature.eyebrow}
                </p>

                <h3 className="font-[family:var(--font-manrope)] text-4xl font-bold tracking-[-0.03em] text-[#181A24]">
                    {feature.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-[#5F6678]">
                    {feature.description}
                </p>
            </div>
        </article>
    );
}
