import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

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
    default: "Sellaboo | How to Stop Losing Good Leads to Your Competition",
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
    title: "Sellaboo | How to Stop Losing Good Leads to Your Competition",
    description:
      "Keep every opportunity moving with consistent, organized follow-up built for home service businesses.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sellaboo | How to Stop Losing Good Leads to Your Competition",
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

    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "xwdoa10jh4");
      `}
    </Script>
    
    <Script
      id="hubspot-tracking"
      src="//js-na2.hs-scripts.com/245967329.js"
      strategy="afterInteractive"
    />

    <GoogleAnalytics gaId="G-EGX90HBKG2" />
  </body>
</html>
  );
}
