import type { Metadata } from "next";

import Footer from "@components/Footer";
import Header from "@components/Header";
import RecipeEditor from "@components/RecipeEditor";

export const metadata: Metadata = {
  title: "New recipe | Cooked Up!",
  description: "Write down a recipe of your own.",
  robots: { index: false },
};

const Page = () => (
  <div className="flex min-h-dvh flex-col p-4 md:p-6 lg:p-8">
    <Header />

    <main
      id="main"
      className="flex grow flex-col pt-5"
    >
      <RecipeEditor />
    </main>

    <Footer />
  </div>
);

export default Page;
