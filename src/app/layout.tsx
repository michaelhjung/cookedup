/* eslint-disable camelcase */
import { Montserrat } from "next/font/google";
import React from "react";

import "@app/globals.css";
import { AuthProvider } from "@context/AuthContext";

import type { Metadata } from "next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cooked Up!",
  description:
    "Cook up ideas for your next meal based on ingredients you already have at home!",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <head>
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
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
      <AuthProvider>{children}</AuthProvider>
    </body>
  </html>
);

export default RootLayout;
