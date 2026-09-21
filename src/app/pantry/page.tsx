import type { Metadata } from "next";

import Footer from "@components/Footer";
import Header from "@components/Header";
import PantryPage from "@components/Pantry";

export const metadata: Metadata = {
  title: "Pantry | Cooked Up!",
  description:
    "Keep track of what's in your kitchen, mark things low or out with one tap, and turn them into a grocery list.",
};

const Page = () => (
  <div className="flex min-h-dvh flex-col p-4 md:p-6 lg:p-8">
    <Header />

    <main
      id="main"
      className="flex grow flex-col pt-5"
    >
      <PantryPage />
    </main>

    <Footer />
  </div>
);

export default Page;
