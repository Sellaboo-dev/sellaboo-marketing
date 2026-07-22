import { Button } from "../ui/Button";

import { FOUNDING_CUSTOMER_URL } from "@/lib/marketing-links";

function SellabooLogo() {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        aria-hidden="true"
        className="inline-flex size-10 shrink-0 items-center justify-center"
      >
        <svg
          viewBox="0 0 42 42"
          className="size-full"
          aria-hidden="true"
        >
          <rect
            x="1"
            y="1"
            width="40"
            height="40"
            rx="13"
            fill="var(--color-primary)"
          />

          <path
            fill="white"
            d="M12.7 14.4h13.1c2.4 0 4 1.3 4 3.3 0 1.5-.9 2.6-2.4 3.2 1.8.5 2.9 1.8 2.9 3.6 0 2.4-1.9 4-4.8 4H12.7v-4.2h12c.8 0 1.3-.4 1.3-1s-.5-1-1.3-1h-7.8c-2.9 0-4.8-1.6-4.8-3.9 0-1.8 1.1-3.1 2.8-3.6h-2.2v-4.4Z"
          />
        </svg>
      </span>

      <span className="font-[var(--font-heading)] text-[23px] font-extrabold tracking-[-0.045em] text-[var(--color-heading)]">
        Sellaboo
      </span>
    </span>
  );
}

export function MarketingHeader() {
  return (
    <header className="relative z-50 border-b border-[rgba(231,235,243,0.78)] bg-[rgba(251,252,254,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[84px] w-[min(1320px,calc(100%-48px))] items-center justify-between gap-7 max-sm:min-h-[72px] max-sm:w-[calc(100%-30px)]">
        <a href="/" aria-label="Sellaboo home">
          <SellabooLogo />
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-9 lg:flex"
        >
          <a
            href="#how-it-works"
            className="text-sm font-semibold text-[#555d70] transition-colors hover:text-[var(--color-primary)]"
          >
            How it works
          </a>

          <a
            href="#who-its-for"
            className="text-sm font-semibold text-[#555d70] transition-colors hover:text-[var(--color-primary)]"
          >
            Who it’s for
          </a>

          <a
            href="#founding-customers"
            className="text-sm font-semibold text-[#555d70] transition-colors hover:text-[var(--color-primary)]"
          >
            Founding Customers
          </a>
        </nav>

        <Button
          href={FOUNDING_CUSTOMER_URL}
          className="min-h-12 px-5 py-3 text-sm font-bold max-sm:hidden"
        >
          Become a Founding Customer
        </Button>
      </div>
    </header>
  );
}
