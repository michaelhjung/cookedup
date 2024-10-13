export interface RecipeData {
  from: number;
  to: number;
  count: number;
  _links?: Links;
  hits: Hit[];
}

export interface Links {
  next?: {
    href: string;
    title: string;
  };
}

export interface Hit {
  recipe: Recipe;
  _links: SelfLink;
}

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  images: Images;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalCO2Emissions: number;
  co2EmissionsClass: string;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: { [key: string]: NutrientInfo };
  totalDaily: { [key: string]: NutrientInfo };
  digest: Digest[];
}

export interface SelfLink {
  self: {
    title: string;
    href: string;
  };
}

export interface Images {
  THUMBNAIL: ImageDetail;
  SMALL: ImageDetail;
  REGULAR: ImageDetail;
  LARGE?: ImageDetail;
}

export interface ImageDetail {
  url: string;
  width: number;
  height: number;
}

export interface Ingredient {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image?: string;
}

export interface NutrientInfo {
  label: string;
  quantity: number;
  unit: string;
}

export interface Digest {
  label: string;
  tag: string;
  schemaOrgTag?: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
  sub?: Digest[];
}
