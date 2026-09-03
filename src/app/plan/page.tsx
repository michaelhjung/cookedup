import type { Metadata } from "next";

import Footer from "@components/Footer";
import Header from "@components/Header";
import MealPlanner from "@components/MealPlan";

export const metadata: Metadata = {
  title: "Meal Plan | Cooked Up!",
  description:
    "Plan your week of meals, subscribe to it from any calendar app, and share it with whoever you cook for.",
};

const PlanPage = () => (
  <div
    className={`
      flex h-screen flex-col
      overflow-hidden
      p-4 md:p-6 lg:p-8
    `}
  >
    <Header />

    <main className="mt-4 flex min-h-0 grow flex-col">
      <MealPlanner />
    </main>

    <Footer />
  </div>
);

export default PlanPage;
