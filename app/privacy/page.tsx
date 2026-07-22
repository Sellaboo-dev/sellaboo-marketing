import ReactMarkdown from "react-markdown";

import { readLegalDocument } from "@/lib/legal";

export default async function PrivacyPage() {
  const content = await readLegalDocument("privacy-policy.md");

  return (
    <main className="mx-auto w-[min(900px,calc(100%-48px))] py-20 sm:py-24">
      <article className="text-[var(--color-body)]">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="font-[var(--font-heading)] text-4xl font-extrabold tracking-[-0.035em] text-[var(--color-heading)] sm:text-5xl">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="mt-12 font-[var(--font-heading)] text-2xl font-bold tracking-[-0.025em] text-[var(--color-heading)]">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-8 font-[var(--font-heading)] text-xl font-bold text-[var(--color-heading)]">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="mt-5 text-base leading-8 sm:text-[17px]">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="mt-5 list-disc space-y-3 pl-6 leading-8">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="mt-5 list-decimal space-y-3 pl-6 leading-8">
                {children}
              </ol>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(63,58,100,0.35)] underline-offset-4 transition-colors hover:text-[#342F57]"
              >
                {children}
              </a>
            ),
            strong: ({ children }) => (
              <strong className="font-bold text-[var(--color-heading)]">
                {children}
              </strong>
            ),
            hr: () => (
              <hr className="my-10 border-0 border-t border-[var(--color-border)]" />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
