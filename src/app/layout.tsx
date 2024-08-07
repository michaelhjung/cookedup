/* eslint-disable camelcase */
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import React from "react";
import "@/app/globals.css";
import { AuthProvider } from "@/context/AuthContext";

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
        href="/favicon.ico"
        sizes="any"
      />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
        type="image/.png"
        sizes="any"
      />
    </head>
    <body className={montserrat.className}>
      <AuthProvider>{children}</AuthProvider>
    </body>
  </html>
);

export default RootLayout;
