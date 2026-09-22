import type { Metadata } from "next";

import Footer from "@components/Footer";
import Header from "@components/Header";
import UserRecipesPage from "@components/UserRecipes";

export const metadata: Metadata = {
  title: "Recipes | Cooked Up!",
  description:
    "Write down your own recipes, keep them private or share them with your household, and browse what other people have published.",
};

const Page = () => (
  <div className="flex min-h-dvh flex-col p-4 md:p-6 lg:p-8">
    <Header />

    <main
      id="main"
      className="flex grow flex-col pt-5"
    >
      <UserRecipesPage />
    </main>

    <Footer />
  </div>
);

export default Page;
