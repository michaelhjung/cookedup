import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { AuthProvider } from "@context/AuthContext";
import "@styles/tailwind.css";
/* eslint-disable-next-line import/order */
import "@styles/main.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

const SITE_URL = "https://www.cookedup.app";
const TITLE = "Cooked Up!";
const DESCRIPTION =
  "Cook up ideas for your next meal based on ingredients you already have at home!";

export const metadata: Metadata = {
  // Resolves the relative URLs below (and the generated opengraph-image) to
  // absolute ones, which link previews require.
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
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
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
        />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="cookedup"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />

        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={`${process.env.NEXT_PUBLIC_UMAMI_ID}`}
        />
      </head>
      <body className={montserrat.className}>
        <ThemeProvider
          storageKey="theme"
          defaultTheme="system"
          enableSystem={true}
          enableColorScheme={true}
          attribute="data-theme"
        >
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
