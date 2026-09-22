import type { Metadata } from "next";

import Footer from "@components/Footer";
import Header from "@components/Header";
import EditRecipe from "@components/RecipeEditor/EditRecipe";

export const metadata: Metadata = {
  title: "Edit recipe | Cooked Up!",
  robots: { index: false },
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div className="flex min-h-dvh flex-col p-4 md:p-6 lg:p-8">
      <Header />

      <main
        id="main"
        className="flex grow flex-col pt-5"
      >
        <EditRecipe id={id} />
      </main>

      <Footer />
    </div>
  );
};

export default Page;
