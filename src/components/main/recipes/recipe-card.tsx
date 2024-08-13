import React from "react";
import { Hit } from "@interfaces/edamam";
import Image from "next/image";
import Icon from "@components/icon";

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
        className="group relative flex cursor-pointer gap-8 rounded p-4 hover:bg-slate-100"
      >
        <Icon
          type="link-arrow"
          className="absolute right-4 top-4 text-xl text-pastel-orange transition-transform ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-bittersweet md:right-2 md:top-2 md:text-3xl"
        />
        <div className="flex flex-col items-center text-xs md:text-sm">
          <div className="size-24 md:size-36">
            <Image
              src={recipe.images.SMALL.url}
              width={150}
              height={150}
              alt={recipe.label}
              className="rounded object-cover"
            />
          </div>
          <div className="mt-2 flex max-w-24 flex-col items-center text-center md:max-w-36">
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
            {recipe.totalTime > 0 ?
              <span>{recipe.totalTime} minutes</span>
            : <span>Unable to determine</span>}
          </p>

          <span className="text-xs font-semibold md:text-base">
            Ingredients:
          </span>
          <ul className="text-[0.7rem] md:text-sm">
            {recipe.ingredientLines.map((ingr, index) => (
              <li
                key={index}
                className="ml-5 list-disc"
              >
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
