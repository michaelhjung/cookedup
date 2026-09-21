import type { Metadata } from "next";
import { Suspense } from "react";

import Footer from "@components/Footer";
import ListView from "@components/Grocery/ListView";
import Header from "@components/Header";

export const metadata: Metadata = {
  title: "Grocery list | Cooked Up!",
  robots: { index: false, follow: false },
};

const GroceryListPage = async (props: PageProps<"/grocery/[id]">) => {
  const { id } = await props.params;

  return (
    <div className="flex min-h-dvh flex-col p-4 md:p-6 lg:p-8">
      <Header />

      <main
        id="main"
        className="flex grow flex-col pt-5"
      >
        <Suspense>
          <ListView listId={id} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default GroceryListPage;
