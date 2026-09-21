import type { Metadata } from "next";
import { Suspense } from "react";

import Footer from "@components/Footer";
import GroceryIndex from "@components/Grocery";
import Header from "@components/Header";

export const metadata: Metadata = {
  title: "Grocery lists | Cooked Up!",
  description:
    "Build a grocery list per store from what's low in your pantry and what your meal plan needs, then check it off in the aisle.",
};

const GroceryPage = () => (
  <div className="flex min-h-dvh flex-col p-4 md:p-6 lg:p-8">
    <Header />

    <main
      id="main"
      className="flex grow flex-col pt-5"
    >
      {/* useSearchParams needs a Suspense boundary for static rendering. */}
      <Suspense>
        <GroceryIndex />
      </Suspense>
    </main>

    <Footer />
  </div>
);

export default GroceryPage;
