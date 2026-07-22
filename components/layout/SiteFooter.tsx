import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="border-t border-[#E7EBF3] bg-[#FBFCFE]">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
                <div className="max-w-sm">
                    <h3 className="font-manrope text-xl font-bold text-[#181A24]">
                        Sellaboo
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[#5F6678]">
                        The Lead Follow-Up System
                        <br />
                        for Home Service Businesses.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                    <div>
                        <h4 className="mb-3 font-manrope font-semibold text-[#181A24]">
                            Product
                        </h4>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/#how-sellaboo-works"
                                    className="text-[#5F6678] transition-colors hover:text-[#3F3A64]"
                                >
                                    How It Works
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="https://app.sellaboo.com/pricing"
                                    className="text-[#5F6678] transition-colors hover:text-[#3F3A64]"
                                >
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-3 font-manrope font-semibold text-[#181A24]">
                            Company
                        </h4>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="https://app.sellaboo.com/login"
                                    className="text-[#5F6678] transition-colors hover:text-[#3F3A64]"
                                >
                                    Login
                                </Link>
                            </li>

                            <li>
                                <a
                                    href="mailto:contact@sellaboo.com"
                                    className="text-[#5F6678] transition-colors hover:text-[#3F3A64]"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="mailto:support@sellaboo.com"
                                    className="text-[#5F6678] transition-colors hover:text-[#3F3A64]"
                                >
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-3 font-manrope font-semibold text-[#181A24]">
                            Follow Us
                        </h4>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/sellaboohq/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 text-[#5F6678] transition-colors hover:text-[#3F3A64]"
                                    aria-label="Follow Sellaboo on LinkedIn"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5 shrink-0"
                                        aria-hidden="true"
                                    >
                                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
                                    </svg>

                                    <span>LinkedIn</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-3 font-manrope font-semibold text-[#181A24]">
                            Legal
                        </h4>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-[#5F6678] transition-colors hover:text-[#3F3A64]"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/terms"
                                    className="text-[#5F6678] transition-colors hover:text-[#3F3A64]"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#E7EBF3] px-6 py-5">
                <p className="text-center text-sm text-[#5F6678]">
                    © 2026 Sellaboo, LLC. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
