import { NextRequest, NextResponse } from "next/server";

const { EDAMAM_APP_ID, EDAMAM_API_KEY } = process.env;
const apiBaseUrl = "https://api.edamam.com";
const getEdamamApiUrl = (ingredientsQuery: string) =>
  `${apiBaseUrl}/api/recipes/v2?type=public&q=${ingredientsQuery}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_API_KEY}`;

export async function GET(req: NextRequest, _res: NextResponse) {
  const ingredients = req.nextUrl.searchParams.get("ingredients");
  if (!ingredients)
    return NextResponse.json({
      message: "At least one ingredient is required.",
    });

  const ingredientsQuery =
    Array.isArray(ingredients) ? ingredients.join(",") : ingredients;

  try {
    const response = await fetch(getEdamamApiUrl(ingredientsQuery));
    if (!response.ok) throw new Error("Failed to get recipes.");

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
