const ALCOHOL = "alcohol";
const BAKING = "baking";
const BEVERAGES = "beverages";
const BREAD = "bread";
const CEREALS = "cereals";
const CHEESES = "cheeses";
const CONDIMENTS = "condiments";
const DAIRY_AND_EGGS = "dairy & eggs";
const DRESSINGS = "dressings";
const FROZEN_FOOD = "frozen food";
const FRUITS = "fruits";
const GRAINS = "grains";
const HERBS_AND_SPICES = "herbs & spices";
const INTERNATIONAL = "international";
const LEGUMES = "legumes";
const MISCELLANEOUS = "miscellaneous";
const MEATS = "meats";
const NOODLES = "noodles";
const NUTS_AND_SEEDS = "nuts & seeds";
const OILS_AND_FATS = "oils & fats";
const PANTRY_ESSENTIALS = "pantry essentials";
const PASTA = "pasta";
const SAUCES = "sauces";
const SEAFOOD = "seafood";
const SNACKS = "snacks";
const SOUPS_AND_BROTHS = "soups & broths";
const SWEETS = "sweets";
const TEA_AND_COFFEE = "tea & coffee";
const VEGGIES = "vegetables";

export type category =
  | typeof ALCOHOL
  | typeof BAKING
  | typeof BEVERAGES
  | typeof BREAD
  | typeof CEREALS
  | typeof CHEESES
  | typeof CONDIMENTS
  | typeof DAIRY_AND_EGGS
  | typeof DRESSINGS
  | typeof FROZEN_FOOD
  | typeof FRUITS
  | typeof GRAINS
  | typeof HERBS_AND_SPICES
  | typeof INTERNATIONAL
  | typeof LEGUMES
  | typeof MEATS
  | typeof MISCELLANEOUS
  | typeof NOODLES
  | typeof NUTS_AND_SEEDS
  | typeof OILS_AND_FATS
  | typeof PANTRY_ESSENTIALS
  | typeof PASTA
  | typeof SAUCES
  | typeof SEAFOOD
  | typeof SNACKS
  | typeof SOUPS_AND_BROTHS
  | typeof SWEETS
  | typeof TEA_AND_COFFEE
  | typeof VEGGIES;

export interface Ingredient {
  name: string;
  categories: category[] | [];
}

export const Categories = {
  ALCOHOL,
  BAKING,
  BEVERAGES,
  BREAD,
  CEREALS,
  CHEESES,
  CONDIMENTS,
  DAIRY_AND_EGGS,
  DRESSINGS,
  FROZEN_FOOD,
  FRUITS,
  GRAINS,
  HERBS_AND_SPICES,
  INTERNATIONAL,
  LEGUMES,
  MEATS,
  MISCELLANEOUS,
  NOODLES,
  NUTS_AND_SEEDS,
  OILS_AND_FATS,
  PANTRY_ESSENTIALS,
  PASTA,
  SAUCES,
  SEAFOOD,
  SNACKS,
  SOUPS_AND_BROTHS,
  SWEETS,
  TEA_AND_COFFEE,
  VEGGIES,
};
