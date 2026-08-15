"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { FOUNDING_CUSTOMER_URL } from "@/lib/marketing-links";

const LOGIN_URL = "https://app.sellaboo.com/login";
const PRICING_URL = "https://app.sellaboo.com/pricing";

function SellabooLogo() {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        aria-hidden="true"
        className="inline-flex size-10 shrink-0 items-center justify-center"
      >
        <svg viewBox="0 0 42 42" className="size-full" aria-hidden="true">
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50 border-b border-[rgba(231,235,243,0.78)] bg-[rgba(251,252,254,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[84px] w-[min(1320px,calc(100%-48px))] items-center justify-between gap-7 max-sm:min-h-[72px] max-sm:w-[calc(100%-30px)]">
        <a href="/" aria-label="Sellaboo home" onClick={closeMobileMenu}>
          <SellabooLogo />
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-9 lg:flex"
        >
          <a
            href="/#how-it-works"
            className="text-sm font-semibold text-[#555d70] transition-colors hover:text-[var(--color-primary)]"
          >
            How it works
          </a>

          <a
            href="/#who-its-for"
            className="text-sm font-semibold text-[#555d70] transition-colors hover:text-[var(--color-primary)]"
          >
            Who it&apos;s for
          </a>

          <a
            href="/#founding-customers"
            className="text-sm font-semibold text-[#555d70] transition-colors hover:text-[var(--color-primary)]"
          >
            Founding Customers
          </a>

          <a
            href={PRICING_URL}
            className="text-sm font-semibold text-[#555d70] transition-colors hover:text-[var(--color-primary)]"
          >
            Pricing
          </a>

          <a
            href={LOGIN_URL}
            className="text-sm font-semibold text-[#555d70] transition-colors hover:text-[var(--color-primary)]"
          >
            Log in
          </a>
        </nav>

        <div className="hidden items-center lg:flex">
          <Button
            href={FOUNDING_CUSTOMER_URL}
            className="min-h-12 px-5 py-3 text-sm font-bold"
          >
            Become a Founding Customer
          </Button>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-xl border border-[#e3e6ed] bg-white text-[var(--color-heading)] shadow-sm transition hover:border-[#d5d9e2] lg:hidden"
        >
          <span className="sr-only">
            {mobileMenuOpen ? "Close menu" : "Open menu"}
          </span>

          {mobileMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[rgba(231,235,243,0.9)] bg-[rgba(251,252,254,0.98)] lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex w-[calc(100%-30px)] flex-col py-4"
          >
            <a
              href="/#how-it-works"
              onClick={closeMobileMenu}
              className="border-b border-[#edf0f5] px-1 py-4 text-base font-semibold text-[#555d70] transition-colors hover:text-[var(--color-primary)]"
            >
              How it works
            </a>

            <a
              href="/#who-its-for"
              onClick={closeMobileMenu}
              className="border-b border-[#edf0f5] px-1 py-4 text-base font-semibold text-[#555d70] transition-colors hover:text-[var(--color-primary)]"
            >
              Who it&apos;s for
            </a>

            <a
              href="/#founding-customers"
              onClick={closeMobileMenu}
              className="border-b border-[#edf0f5] px-1 py-4 text-base font-semibold text-[#555d70] transition-colors hover:text-[var(--color-primary)]"
            >
              Founding Customers
            </a>

            <a
              href={PRICING_URL}
              onClick={closeMobileMenu}
              className="border-b border-[#edf0f5] px-1 py-4 text-base font-semibold text-[#555d70] transition-colors hover:text-[var(--color-primary)]"
            >
              Pricing
            </a>

            <a
              href={LOGIN_URL}
              onClick={closeMobileMenu}
              className="px-1 py-4 text-base font-semibold text-[#555d70] transition-colors hover:text-[var(--color-primary)]"
            >
              Log in
            </a>

            <Button
              href={FOUNDING_CUSTOMER_URL}
              className="mt-3 min-h-12 w-full px-5 py-3 text-sm font-bold"
            >
              Become a Founding Customer
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
