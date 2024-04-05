import React from "react";
import { Hit } from "@/interfaces/edamam";
import Image from "next/image";
import Icon from "@/components/icon";

interface RecipeCardProps {
  hit: Hit;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ hit }) => {
  const { recipe, _links } = hit;

  return (
    <div className="w-full">
      <a
        href={recipe.url}
        rel="noopener noreferrer"
        target="_blank"
        className="relative flex gap-8 p-4 rounded cursor-pointer hover:bg-slate-100 group"
      >
        <Icon
          type="link-arrow"
          className="absolute top-4 right-4 md:top-2 md:right-2 text-xl md:text-3xl text-pastel-orange group-hover:text-bittersweet group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ease-in-out"
        />
        <div className="flex flex-col items-center text-xs md:text-sm">
          <div className="w-24 md:w-36 h-24 md:h-36">
            <Image
              src={recipe.images.SMALL.url}
              width={150}
              height={150}
              alt={recipe.label}
              className="rounded object-cover"
            />
          </div>
          <div className="max-w-24 md:max-w-36 flex flex-col items-center text-center mt-2">
            <p className="font-semibold">{recipe.label}</p>
            <p>({recipe.calories.toFixed(0)} calories)</p>
            <div className="mt-1">
              <p className="italic">Source:</p>
              <p className="break-all">{recipe.source}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs md:text-base">
            <span className="font-semibold">Est. cook time: </span>
            {recipe.totalTime > 0 ? (
              <span>{recipe.totalTime} minutes</span>
            ) : (
              <span>Unable to determine</span>
            )}
          </p>

          <span className="font-semibold text-xs md:text-base">Ingredients:</span>
          <ul className="text-[0.7rem] md:text-sm">
            {recipe.ingredientLines.map((ingr, index) => (
              <li key={index} className="list-disc ml-5">
                {ingr}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </div>
  );
};

export default RecipeCard;
