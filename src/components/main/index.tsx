"use client";

import Search from "@/components/main/search";
import Recipes from "@/components/main/recipes";
import { useState } from "react";

const Main = () => {
  const [recipesData, _setRecipesData] = useState([]);
  // TODO: add logic to fetch recipe data and set it

  return (
    <main className="w-full h-full flex flex-col lg:flex-row flex-grow-0 lg:justify-between items-center mt-4 overflow-auto">
      <Search />

      <Recipes recipesData={recipesData} />
    </main>
  );
};

export default Main;
