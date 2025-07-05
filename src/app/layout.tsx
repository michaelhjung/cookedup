import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { AuthProvider } from "@context/AuthContext";
import "@styles/tailwind.css";
/* eslint-disable-next-line import/order */
import "@styles/main.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cooked Up!",
  description:
    "Cook up ideas for your next meal based on ingredients you already have at home!",
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
