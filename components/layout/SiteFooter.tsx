import Link from "next/link";

const footerLinkClass =
  "text-sm text-[#667085] transition-colors duration-200 hover:text-[#5147A8]";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#E7E9F2] bg-[#FBFCFE]">
      {/* Subtle brand glow */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7867E8]/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 py-14 lg:grid-cols-[1.35fr_2fr] lg:gap-20 lg:py-16">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Sellaboo home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7867E8] to-[#58DDB4] shadow-sm">
                <span className="font-manrope text-base font-extrabold text-white">
                  S
                </span>
              </span>

              <span className="font-manrope text-xl font-extrabold tracking-[-0.02em] text-[#181A24]">
                Sellaboo
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-[15px] leading-7 text-[#667085]">
              Effortless lead nurture for busy businesses. Keep your CRM.
              Sellaboo keeps good leads moving until they&apos;re ready for the
              next step.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E2E4EF] bg-white px-3.5 py-2 text-xs font-semibold text-[#52586A] shadow-[0_4px_18px_rgba(31,35,48,0.04)]">
              <span
                className="h-2 w-2 rounded-full bg-[#59DDB5]"
                aria-hidden="true"
              />
              One lead. One click. Nurture handled.
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            <div>
              <h4 className="mb-4 font-manrope text-sm font-bold text-[#242632]">
                Product
              </h4>

              <ul className="space-y-3">
                <li>
                  <Link
                    href="/#how-sellaboo-works"
                    className={footerLinkClass}
                  >
                    How It Works
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://app.sellaboo.com/pricing"
                    className={footerLinkClass}
                  >
                    Pricing
                  </Link>
                </li>

                <li>
                  <Link href="/demo" className={footerLinkClass}>
                    Demo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-manrope text-sm font-bold text-[#242632]">
                Company
              </h4>

              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://app.sellaboo.com/login"
                    className={footerLinkClass}
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <a
                    href="mailto:contact@sellaboo.com"
                    className={footerLinkClass}
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:support@sellaboo.com"
                    className={footerLinkClass}
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-manrope text-sm font-bold text-[#242632]">
                Follow Us
              </h4>

              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.linkedin.com/company/sellaboohq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-sm text-[#667085] transition-colors duration-200 hover:text-[#5147A8]"
                    aria-label="Follow Sellaboo on LinkedIn"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E2E4EF] bg-white transition-all duration-200 group-hover:border-[#CFCBF1] group-hover:bg-[#F6F4FF]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
                      </svg>
                    </span>

                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-manrope text-sm font-bold text-[#242632]">
                Legal
              </h4>

              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className={footerLinkClass}>
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="/terms" className={footerLinkClass}>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-[#E7E9F2] py-6 text-sm text-[#7A8192] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sellaboo, LLC. All rights reserved.</p>

          <p className="text-xs font-medium tracking-wide text-[#9298A8]">
            Built for businesses that have better things to remember.
          </p>
        </div>
      </div>
    </footer>
  );
}
