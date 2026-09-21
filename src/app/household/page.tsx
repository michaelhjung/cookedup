import type { Metadata } from "next";

import Footer from "@components/Footer";
import Header from "@components/Header";
import HouseholdPanel from "@components/Household";

export const metadata: Metadata = {
  title: "Household | Cooked Up!",
  description:
    "Group the people you cook with so you all see the same meal plans, pantry and grocery lists.",
  robots: { index: false, follow: false },
};

const HouseholdPage = () => (
  <div className="flex min-h-dvh flex-col p-4 md:p-6 lg:p-8">
    <Header />

    <main
      id="main"
      className="flex grow flex-col pt-5"
    >
      <HouseholdPanel />
    </main>

    <Footer />
  </div>
);

export default HouseholdPage;
