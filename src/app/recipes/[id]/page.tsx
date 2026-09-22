// src/app/recipes/[id]/page.tsx
//
// A user-authored recipe's own page. Server-rendered as whoever is
// signed in, so a pasted link previews with the recipe's title and
// photo, and RLS (not this page) decides who may see what.

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@components/Footer";
import Header from "@components/Header";
import RecipeDetail from "@components/RecipeDetail";
import { loadRecipeForViewer } from "@lib/userRecipes/server";

interface RecipePageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async (
  props: RecipePageProps,
): Promise<Metadata> => {
  const { id } = await props.params;
  const loaded = await loadRecipeForViewer(id);
  if (!loaded)
    return { title: "Recipe | Cooked Up!", robots: { index: false } };

  const { recipe } = loaded;
  const description =
    recipe.description ??
    `A recipe by ${recipe.hit.recipe.source}. Serves ${recipe.servings}.`;

  return {
    title: `${recipe.title} | Cooked Up!`,
    description,
    // Private and household recipes render for their people, but a
    // crawler should never index a page that was only briefly public.
    robots: recipe.visibility === "public" ? undefined : { index: false },
    openGraph: {
      title: recipe.title,
      description,
      type: "article",
      ...(recipe.imageUrl && { images: [{ url: recipe.imageUrl }] }),
    },
  };
};

const Page = async (props: RecipePageProps) => {
  const { id } = await props.params;
  const loaded = await loadRecipeForViewer(id);
  if (!loaded) notFound();

  return (
    <div className="flex min-h-dvh flex-col p-4 md:p-6 lg:p-8">
      <Header />

      <main
        id="main"
        className="flex grow flex-col pt-5"
      >
        <RecipeDetail
          recipe={loaded.recipe}
          viewerId={loaded.viewerId}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Page;
