import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sellaboo.com"),

  title: {
    default: "Sellaboo | Lead Follow-Up for Home Service Businesses",
    template: "%s | Sellaboo",
  },

  description:
    "Sellaboo helps home service businesses keep leads engaged through consistent, organized follow-up while owners stay focused on running their business.",

  applicationName: "Sellaboo",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sellaboo.com",
    siteName: "Sellaboo",
    title: "Sellaboo | Lead Follow-Up for Home Service Businesses",
    description:
      "Keep every opportunity moving with consistent, organized follow-up built for home service businesses.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sellaboo | Lead Follow-Up for Home Service Businesses",
    description:
      "Keep every opportunity moving with consistent, organized follow-up built for home service businesses.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable}`}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
