// src/app/admin/page.tsx
//
// The moderation page: recipes waiting for approval and open reports.
// Admins only; everyone else gets the 404 page, decided on the server.

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AdminPage from "@components/Admin";
import Footer from "@components/Footer";
import Header from "@components/Header";
import { loadIsAdmin } from "@lib/admin/server";

export const metadata: Metadata = {
  title: "Admin | Cooked Up!",
  robots: { index: false, follow: false },
};

const Page = async () => {
  if (!(await loadIsAdmin())) notFound();

  return (
    <div className="flex min-h-dvh flex-col p-4 md:p-6 lg:p-8">
      <Header />

      <main
        id="main"
        className="flex grow flex-col pt-5"
      >
        <AdminPage />
      </main>

      <Footer />
    </div>
  );
};

export default Page;
