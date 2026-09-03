import type { Metadata } from "next";

import Footer from "@components/Footer";
import Header from "@components/Header";
import AcceptInvite from "@components/MealPlan/AcceptInvite";

export const metadata: Metadata = {
  title: "Meal plan invite | Cooked Up!",
  robots: { index: false, follow: false },
};

const InvitePage = async (props: PageProps<"/invite/[token]">) => {
  const { token } = await props.params;

  return (
    <div className="flex min-h-screen flex-col p-4 md:p-6 lg:p-8">
      <Header />

      <main className="mt-4 flex grow items-center justify-center">
        <AcceptInvite token={token} />
      </main>

      <Footer />
    </div>
  );
};

export default InvitePage;
