/* eslint-disable import/prefer-default-export */
import { category, Categories, Ingredient } from "@/config";

const {
  // BAKING,
  // BEVERAGES,
  // BREAD,
  // CHEESES,
  // CONDIMENTS,
  DAIRY_AND_EGGS,
  // FROZEN_FOOD,
  FRUITS,
  GRAINS,
  // HERBS_AND_SPICES,
  // INTERNATIONAL,
  LEGUMES,
  MEATS,
  NUTS_AND_SEEDS,
  OILS_AND_FATS,
  PANTRY_ESSENTIALS,
  // PASTA,
  SEAFOOD,
  SOUPS_AND_BROTHS,
  SWEETS,
  TEA_AND_COFFEE,
  VEGGIES,
} = Categories;

export const INGREDIENTS: Ingredient[] = [
  {
    name: "BUTTER,WITH SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BUTTER,WHIPPED,W/ SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BUTTER OIL,ANHYDROUS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,BLUE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,BRICK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,BRIE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,CAMEMBERT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,CARAWAY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,CHEDDAR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,CHESHIRE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,COLBY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,COTTAGE,CRMD,LRG OR SML CURD",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,COTTAGE,CRMD,W/FRUIT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,COTTAGE,NONFAT,UNCRMD,DRY,LRG OR SML CURD",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,COTTAGE,LOWFAT,2% MILKFAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,COTTAGE,LOWFAT,1% MILKFAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,CREAM",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,EDAM",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,FETA",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,FONTINA",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,GJETOST",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,GOUDA",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,GRUYERE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,LIMBURGER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,MONTEREY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,MOZZARELLA,WHL MILK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,MOZZARELLA,WHL MILK,LO MOIST",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,MOZZARELLA,PART SKIM MILK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,MOZZARELLA,LO MOIST,PART-SKIM",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,MUENSTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,NEUFCHATEL",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,PARMESAN,GRATED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,PARMESAN,HARD",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,PORT DE SALUT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,PROVOLONE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,RICOTTA,WHOLE MILK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,RICOTTA,PART SKIM MILK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,ROMANO",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,ROQUEFORT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,SWISS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,TILSIT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,PAST PROCESS,AMERICAN,FORT W/ VITAMIN D",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,PAST PROCESS,PIMENTO",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,PAST PROCESS,SWISS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE FD,COLD PK,AMERICAN",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE FD,PAST PROCESS,AMERICAN,VITAMIN D FORT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE FD,PAST PROCESS,SWISS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE SPRD,PAST PROCESS,AMERICAN",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CREAM,FLUID,HALF AND HALF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CREAM,FLUID,LT (COFFEE CRM OR TABLE CRM)",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "CREAM,FLUID,LT WHIPPING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CREAM,FLUID,HVY WHIPPING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CREAM,WHIPPED,CRM TOPPING,PRESSURIZED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CREAM,SOUR,RED FAT,CULTURED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CREAM,SOUR,CULTURED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EGGNOG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SOUR DRSNG,NON-BUTTERFAT,CULTURED,FILLED CREAM-TYPE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MILK,FILLED,FLUID,W/BLEND OF HYDR VEG OILS",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MILK,FILLED,FLUID,W/LAURIC ACID OIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHEESE,AMERICAN,NONFAT OR FAT FREE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CREAM SUB,LIQ,W/HYDR VEG OIL&SOY PROT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CREAM SUB,LIQ,W/LAURIC ACID OIL&NA CASEINATE",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CREAM SUBSTITUTE,POWDERED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DESSERT TOPPING,POWDERED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DESSERT TOPPING,PDR,1.5 OZ PREP W/1/2 CUP MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DESSERT TOPPING,PRESSURIZED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DESSERT TOPPING,SEMI SOLID,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUR CRM,IMITN,CULTURED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK SUBSTITUTES,FLUID,W/LAURIC ACID OIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MILK,WHL,3.25% MILKFAT,W/ ADDED VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,PRODUCER,FLUID,3.7% MILKFAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,RED FAT,FLUID,2% MILKFAT,W/ ADDED VIT A & VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,RED FAT,FLUID,2% MILKFAT,W/ ADDED NFMS, VIT A & VIT D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,RED FAT,FLUID,2% MILKFAT,PROT FORT,W/ ADDED VIT A & D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,LOWFAT,FLUID,1% MILKFAT,W/ ADDED VIT A & VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,LOWFAT,FLUID,1% MILKFAT,W/ ADD NONFAT MILK SOL,VIT A/ D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,LOWFAT,FLUID,1% MILKFAT,PROT FORT,W/ ADDED VIT A & D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,NONFAT,FLUID,W/ ADDED VIT A & VIT D (FAT FREE OR SKIM)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,NONFAT,FLUID,W/ ADDED NONFAT MILK SOL,VIT A & VIT D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,NONFAT,FLUID,PROT FORT,W/ ADD VIT A & D (FAT FREE/SKIM)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,BTTRMLK,FLUID,CULTURED,LOWFAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,LO NA,FLUID",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,DRY,WHL,W/ ADDED VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,DRY,NONFAT,REG,WO/ ADDED VIT A & VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,DRY,NONFAT,INST,W/ ADDED VIT A & VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,DRY,NONFAT,CA RED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,BUTTERMILK,DRIED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MILK,CND,COND,SWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,CND,EVAP,W/ ADDED VITAMIN D & WO/ ADDED VIT A",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,CND,EVAP,NONFAT,W/ ADDED VIT A & VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,CHOC,FLUID,COMM,WHL,W/ ADDED VIT A & VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,CHOC,FLUID,COMM,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,CHOC,LOWFAT,W/ ADDED VIT A & VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,CHOC BEV,HOT COCOA,HOMEMADE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,GOAT,FLUID,W/ ADDED VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,HUMAN,MATURE,FLUID",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,INDIAN BUFFALO,FLUID",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,SHEEP,FLUID",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK SHAKES,THICK CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK SHAKES,THICK VANILLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEY,ACID,FLUID",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEY,ACID,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEY,SWEET,FLUID",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEY,SWEET,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,PLN,WHL MILK,8 GRAMS PROT PER 8 OZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,PLN,LOFAT,12 GRAMS PROT PER 8 OZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,PLN,SKIM MILK,13 GRAMS PROT PER 8 OZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,VANILLA,LOFAT,11 GRAMS PROT PER 8 OZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,FRUIT,LOFAT,9 GRAMS PROT PER 8 OZ",
    categories: [FRUITS as category],
  },
  {
    name: "YOGURT,FRUIT,LOFAT,10 GRAMS PROT PER 8 OZ",
    categories: [FRUITS as category],
  },
  {
    name: "YOGURT,FRUIT,LOFAT,11 GRAMS PROT PER 8 OZ",
    categories: [FRUITS as category],
  },
  {
    name: "EGG,WHL,RAW,FRSH",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,WHITE,RAW,FRESH",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,YOLK,RAW,FRSH",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,YOLK,RAW,FRZ,PAST",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,YOLK,RAW,FRZ,SUGARED,PAST",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,WHL,CKD,FRIED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,WHL,CKD,HARD-BOILED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,WHOLE,COOKED,OMELET",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,WHL,CKD,POACHED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,WHL,CKD,SCRMBLD",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,WHL,DRIED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,WHL,DRIED,STABILIZED,GLUCOSE RED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,WHITE,DRIED,FLAKES,STABILIZED,GLUCOSE RED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,WHITE,DRIED,PDR,STABILIZED,GLUCOSE RED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,YOLK,DRIED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,DUCK,WHOLE,FRESH,RAW",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,GOOSE,WHOLE,FRESH,RAW",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,QUAIL,WHOLE,FRESH,RAW",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,TURKEY,WHL,FRSH,RAW",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG SUBSTITUTE,POWDER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BUTTER,WITHOUT SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,PARMESAN,SHREDDED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MILK,NONFAT,FLUID,WO/ ADDED VIT A & VIT D (FAT FREE OR SKIM)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,RED FAT,FLUID,2% MILKFAT,W/ NONFAT MILK SOL,WO/ VIT A",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,CND,EVAP,W/ VIT A",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,DRY,NONFAT,REG,W/ ADDED VIT A & VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,DRY,NONFAT,INST,WO/ ADDED VIT A & VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEESE,GOAT,HARD TYPE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,GOAT,SEMISOFT TYPE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,GOAT,SOFT TYPE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,YOLK,RAW,FRZ,SALTED,PAST",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE SUB,MOZZARELLA",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE SAU,PREP FROM RECIPE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,MEXICAN,QUESO ANEJO",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,MEXICAN,QUESO ASADERO",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,MEXICAN,QUESO CHIHUAHUA",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,LOFAT,CHEDDAR OR COLBY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,LOW-SODIUM,CHEDDAR OR COLBY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,WHL,RAW,FRZ,PAST",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,WHITE,RAW,FRZ,PAST",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,WHITE,DRIED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MILK,RED FAT,FLUID,2% MILKFAT,WO/ ADDED VIT A & VIT D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,FLUID,1% FAT,WO/ ADDED VIT A & VIT D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUR CREAM,REDUCED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUR CREAM,LIGHT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUR CREAM,FAT FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA COMMODITY,CHS,CHEDDAR,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,VAN OR LEM FLAV,NONFAT MILK,SWTND W/LOW-CALORIE SWTNR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PARMESAN CHS TOPPING,FAT FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEESE,CREAM,FAT FREE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "YOGURT,CHOC,NONFAT MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KRAFT CHEEZ WHIZ PAST PROCESS CHS SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KRAFT CHEEZ WHIZ LT PAST PROCESS CHS PRODUCT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KRAFT FREE SINGLES AMERICAN NONFAT PAST PROCESS CHS PRODUCT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KRAFT VELVEETA PAST PROCESS CHS SPRD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KRAFT VELVEETA LT RED FAT PAST PROCESS CHS PRODUCT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KRAFT BREAKSTONE'S RED FAT SOUR CRM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KRAFT BREAKSTONE'S FREE FAT FREE SOUR CRM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CREAM,HALF & HALF,FAT FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "REDDI WIP FAT FREE WHIPPED TOPPING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,CHOC,FLUID,COMM,RED FAT,W/ ADDED CA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,FRUIT,LOFAT,W/LO CAL SWEETENER",
    categories: [FRUITS as category],
  },
  {
    name: "CHEESE,PARMESAN,DRY GRATED,RED FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CREAM SUB,FLAV,LIQ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CREAM SUB,FLAV,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEESE,PROVOLONE,RED FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,MEXICAN,BLEND,RED FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG MIX,USDA CMDTY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MILK,WHL,3.25% MILKFAT,WO/ ADDED VIT A & VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,DRY,WHL,WO/ ADDED VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,CND,EVAP,WO/ ADDED VIT A & VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEESE PRODUCT,PAST PROCESS,AMERICAN,RED FAT,FORT W/ VIT D",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "YOGURT,FRUIT,LOFAT,9 GRAMS PROT PER 8 OZ,FORT W/ VITAMIN D",
    categories: [FRUITS as category],
  },
  {
    name: "YOGURT,FRUIT,LOFAT,10 GRAMS PROT PER 8 OZ,FORT W/ VITAMIN D",
    categories: [FRUITS as category],
  },
  {
    name: "YOGURT,FRUIT VAR,NONFAT,FORT W/ VITAMIN D",
    categories: [FRUITS as category],
  },
  {
    name: "YOGURT,FRUIT,LOWFAT,W/ LO CAL SWTNR,FORT W/ VITAMIN D",
    categories: [FRUITS as category],
  },
  {
    name: "YOGURT,VANILLA,LOFAT,11 GRAMS PROT PER 8 OZ,FORT W/ VIT D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,VAN/LEM FLAV,NONFAT MILK,W/ LO-CAL SWTNR,FORT W/VIT D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,CHOC,NONFAT MILK,FORT W/ VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PROTEIN SUPP,MILK BSD,MUSCLE MILK,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PROTEIN SUPP,MILK BSD,MUSCLE MILK LT,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DULCE DE LECHE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EGG SUB,LIQ OR FRZ,FAT FREE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,DRY WHITE,QUESO SECO",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,FRSH,QUESO FRESCO",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,WHITE,QUESO BLANCO",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MILK,BTTRMLK,FLUID,WHL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,VANILLA FLAVOR,LOWFAT MILK,SWTND W/ LO CAL SWTNR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,FRZ,FLAVORS NOT CHOC,NONFAT MILK,W/ LOW-CALORIE SWTNR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CRM,SOFT SERVE,CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CRM,BAR OR STK,CHOC COVERED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CRM SNDWCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CRM COOKIE SNDWCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CRM CONE,CHOC COVERED,W/ NUTS,FLAVORS OTHER THAN CHOC",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "ICE CRM SNDWCH,MADE W/ LT ICE CRM,VANILLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CRM SNDWCH,VANILLA,LT,NO SUGAR ADDED",
    categories: [SWEETS as category],
  },
  {
    name: "FAT FREE ICE CRM,NO SUGAR ADDED,FLAVORS OTHER THAN CHOC",
    categories: [SWEETS as category],
  },
  {
    name: "MILK DSSRT BAR,FRZ,MADE FROM LOWFAT MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NUTRITIONAL SUPP FOR PEOPLE W/ DIABETES,LIQ",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHEESE,MEXICAN BLEND",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE PRODUCT,PAST PROCESS,AMERICAN,VITAMIN D FORT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,PAST PROCESS,AMERICAN,WO/ ADDED VITAMIN D",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE FD,PAST PROCESS,AMERICAN,WO/ ADDED VITAMIN D",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG,WHL,RAW,FRZ,SALTED,PAST",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "YOGURT,GREEK,PLN,NONFAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EGG,WHITE,DRIED,STABILIZED,GLUCOSE RED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE SPRD,AMERICAN OR CHEDDAR CHS BASE,RED FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,CHEDDAR,RED FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "ICE CRM,LT,SOFT SERVE,CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CRM BAR,STK OR NUGGET,W/ CRUNCH COATING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEESE,CHEDDAR,NONFAT OR FAT FREE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,SWISS,NONFAT OR FAT FREE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,MEXICAN,QUESO COTIJA",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,CHEDDAR,SHARP,SLICED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,MOZZARELLA,LO MOIST,PART-SKIM,SHREDDED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "YOGURT,GREEK,NONFAT,VANILLA,CHOBANI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,GREEK,STRAWBERRY,DANNON OIKOS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,GREEK,NONFAT,VANILLA,DANNON OIKOS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,GREEK,NONFAT,STRAWBERRY,DANNON OIKOS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,GREEK,NONFAT,STRAWBERRY,CHOBANI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,GREEK,STRAWBERRY,LOWFAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,GREEK,STRAWBERRY,NONFAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,GREEK,VANILLA,NONFAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,GREEK,PLN,LOWFAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEFIR,LOWFAT,PLN,LIFEWAY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEFIR,LOWFAT,STRAWBERRY,LIFEWAY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,CND,EVAP,WO/ VIT A",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,CHOC,FAT FREE,W/ ADDED VIT A & VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,GREEK,PLN,WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,GREEK,FRUIT,WHL MILK",
    categories: [FRUITS as category],
  },
  {
    name: "YOGURT,VANILLA,NON-FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,GREEK,VANILLA,LOWFAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,FRZ,FLAVORS OTHER THAN CHOC,LOWFAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CRM BAR,COVERED W/ CHOC & NUTS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "ICE CRM SUNDAE CONE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LIGHT ICE CRM,CREAMSICLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CREAM,HALF & HALF,LOWFAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,CHOC,LOWFAT,RED SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "ICE CRM,LOWFAT,NO SUGAR ADDED,CONE,ADDED PNUTS & CHOC SAU",
    categories: [SWEETS as category],
  },
  {
    name: "ALLSPICE,GROUND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ANISE SEED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SPICES,BASIL,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPICES,BAY LEAF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARAWAY SEED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SPICES,CARDAMOM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CELERY SEED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHERVIL,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHILI POWDER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CINNAMON,GROUND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CLOVES,GROUND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORIANDER LEAF,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORIANDER SEED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CUMIN SEED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CURRY POWDER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DILL SEED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "DILL WEED,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FENNEL SEED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "FENUGREEK SEED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "GARLIC POWDER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GINGER,GROUND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACE,GROUND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARJORAM,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPICES,MUSTARD SD,GROUND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NUTMEG,GROUND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "ONION POWDER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPICES,OREGANO,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PAPRIKA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PARSLEY,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPER,BLACK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPER,RED OR CAYENNE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPER,WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POPPY SEED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "POULTRY SEASONING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMPKIN PIE SPICE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROSEMARY,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAFFRON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAGE,GROUND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAVORY,GROUND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPICES,TARRAGON,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPICES,THYME,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURMERIC,GROUND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BASIL,FRESH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DILL WEED,FRSH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSTARD,PREPARED,YELLOW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALT,TABLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VINEGAR,CIDER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "THYME,FRSH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VANILLA EXTRACT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VANILLA EXTRACT,IMITN,ALCOHOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VANILLA EXTRACT,IMITN,NO ALCOHOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VINEGAR,DISTILLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAPERS,CANNED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HORSERADISH,PREPARED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROSEMARY,FRESH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERMINT,FRESH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPEARMINT,FRESH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPEARMINT,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VINEGAR,RED WINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VINEGAR,BALSAMIC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,DRY TACO SEAS MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEASONING MIX,DRY,SAZON,CORIANDER & ANNATTO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEASONING MIX,DRY,TACO,ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEASONING MIX,DRY,CHILI,ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CLIF Z BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,JUC TREATS,FRUIT MEDLEY,TODD",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,MEAT,BF,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,MEAT,BF,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,MEAT,VEAL,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,MEAT,PORK,STR",
    categories: [MEATS as category],
  },
  {
    name: "BABYFOOD,MEAT,HAM,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,MEAT,HAM,JUNIOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,MEAT,LAMB,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,MEAT,LAMB,JUNIOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,MEAT,CHICK,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,MEAT,CHICK,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,MEAT,CHICK STKS,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,MEAT,TURKEY,STR",
    categories: [MEATS as category],
  },
  {
    name: "BABYFOOD,MEAT,TURKEY,JR",
    categories: [MEATS as category],
  },
  {
    name: "Babyfood, meat, turkey sticks, junior",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,SNACK,GERBER GRADUATE FRUIT STRIPS,REAL FRUIT BARS",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,MEAT,MEAT STKS,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,GERBER,2ND FOODS,APPL,CARROT & SQUASH,ORGANIC",
    categories: [VEGGIES as category],
  },
  {
    name: "BABYFOOD,FINGER SNACKS,GERBER,GRADUATES,PUFFS,APPL & CINN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,H2O,BTLD,GERBER,WO/ ADDED FLUORIDE.",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,GERBER,3RD FOODS,APPL,MANGO & KIWI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,TROPICAL FRUIT MEDLEY",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG&DUMPLINGS&BF,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG&DUMPLINGS&BF,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,BF LASAGNA,TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,MACARONI&TOMATO&BF,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,MACARONI&TOMATO&BF,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,RAVIOLI,CHS FILLED,W/TOMATO SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,BF NOODLE,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,MACARONI&CHS,TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,BF&RICE,TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,SPAGHETTI&TOMATO&MEAT,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,SPAGHETTI&TOMATO&MEAT,TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,BF STEW,TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG&BF,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG&BF,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,BF W/VEG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG&BACON,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG&HAM,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG&HAM,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG&LAMB,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG&LAMB,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,CHICK NOODLE,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,CHICK NOODLE,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,CHICK SOUP,STR",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "BABYFOOD  DINNER  CHICK STEW  TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG CHICK,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG,NOODLES&CHICK,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG,NOODLES&CHICK,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,PASTA W/VEG",
    categories: [GRAINS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG&NOODLES&TURKEY,STR",
    categories: [MEATS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG&NOODLES&TURKEY,JR",
    categories: [MEATS as category],
  },
  {
    name: "BABYFOOD,DINNER,TURKEY&RICE,STR",
    categories: [MEATS as category],
  },
  {
    name: "BABYFOOD,DINNER,TURKEY & RICE,JR",
    categories: [MEATS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG&TURKEY,STR",
    categories: [MEATS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG&TURKEY,JR",
    categories: [MEATS as category],
  },
  {
    name: "BABYFOOD,DINNER,MACARONI&CHS,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,MACARONI&CHS,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG,GRN BNS,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG,GRN BNS,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,GRN BNS,DICES,TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG,GRN BNS&POTATOES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG,BEETS,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG,CARROTS,STR",
    categories: [VEGGIES as category],
  },
  {
    name: "BABYFOOD,VEG,CARROTS,JR",
    categories: [VEGGIES as category],
  },
  {
    name: "BABYFOOD,VEG,SQUASH,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG,SQUASH,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG,SWT POTATOES,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG,SWT POTATOES,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,POTATOES,TODDLER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG,BUTTERNUT SQUASH&CORN",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BABYFOOD,APPLS,DICES,TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APPLSAUC,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APPLSAUC,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APRICOT W/TAPIOCA,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,VEG,CORN,CRMD,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG,CORN,CRMD,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG,PEAS,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,PEAS,DICES,TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG,SPINACH,CRMD,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APRICOT W/TAPIOCA,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,BANANAS W/TAPIOCA,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,PEACHES,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,PEACHES,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,PEARS,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,PEARS,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,PLUMS W/TAPIOCA,WO/VIT C,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,PLUMS W/TAPIOCA,WO/VIT C,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,PRUNES W/TAPIOCA,WO/VIT C,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,PRUNES W/TAPIOCA,WO/VIT C,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,PRUNES,WO/VIT C,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,FRUIT DSSRT,MANGO W/ TAPIOCA",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,PEARS,DICES,TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APPLSAUC&APRICOTS,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APPLSAUC&APRICOTS,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APPLSAUC&CHERRIES,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APPLSAUC & CHERRIES,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APPLSAUC W/BANANA,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APPLSAUC&PNAPPL,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APPLSAUC&PNAPPL,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APPL & RASPBERRY,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APPL & RASPBERRY,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT & VEG,APPL & SWT POTATO",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,BANANAS&PNAPPL W/TAPIOCA,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,BANANAS&PNAPPL W/TAPIOCA,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,PEARS&PNAPPL,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,PEARS&PNAPPL,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,GUAVA&PAPAYA W/TAPIOCA,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,PEACHES,DICES,TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,FRUIT,PAPAYA&APPLSAUC W/TAPIOCA,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,BANANAS W/APPLS&PEARS,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APPL&BLUEBERRY,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,APPL&BLUEBERRY,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,JUICE,APPLE",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,APPLE-BANANA JUC",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,JUC,APPL&PEACH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,APPLE-CRANBERRY JUC",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,JUC,APPL&PLUM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,JUC,APPL&PRUNE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,JUICE,ORANGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,JUC,ORANGE&APPL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,JUC,ORANGE&APPL&BANANA",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,JUC,ORANGE&APRICOT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,JUC,ORANGE&BANANA",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,JUC,ORANGE&PNAPPL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,JUC,PRUNE&ORANGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,JUC,MXD FRUIT",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,CRL,BARLEY,DRY FORT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,WHL WHEAT,W/ APPLS,DRY FORT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,MXD,DRY FORT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,MXD,W/ BANANAS,DRY",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,CRL,MXD,W/ APPLSAUC & BANANAS,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,CRL,MXD,W/ APPLSAUC & BANANAS,JR,FORT",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,CRL,OATMEAL,DRY FORT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,OATMEAL,W/ BANANAS,DRY",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,CRL,OATMEAL,W/ APPLSAUC & BANANAS,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,CRL,OATMEAL,W/ APPLSAUC & BANANAS,JR,FORT",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,CRL,OATMEAL,W/HONEY,DRY",
    categories: [SWEETS as category],
  },
  {
    name: "BABYFOOD,CRL,RICE,DRY,FORT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,RICE,W/ APPLSAUC & BANANAS,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,CRL,W/EGG YOLKS,STR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BABYFOOD,CRL,W/EGG YOLKS,JR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BABYFOOD,CRL,W/EGGS,STR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BABYFOOD,CRL,EGG YOLKS&BACON,JR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BABYFOOD,OATMEAL CRL W/ FRUIT,DRY,INST,TODD FORT",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,COOKIE,BABY,FRUIT",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,CRACKERS,VEG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,HI PROT,W/APPL&ORANGE,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,RICE,W/ BANANAS,DRY",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,COOKIES,ARROWROOT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,PRETZELS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,TEETHING BISCUITS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ZWIEBACK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DSSRT,DUTCH APPL,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DSSRT,DUTCH APPL,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CHERRY COBBLER,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DSSRT,CHERRY VANILLA PUDD,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DSSRT,CHERRY VANILLA PUDD,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DSSRT,FRUIT PUDD,ORANGE,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,DSSRT,PEACH COBBLER,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DSSRT,PEACH COBBLER,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DSSRT,PEACH MELBA,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DSSRT,PEACH MELBA,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DSSRT,FRUIT PUDD,PNAPPL,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,DSSRT,FRUIT DSSRT,WO/VIT C,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,DSSRT,FRUIT DSSRT,WO/VIT C,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,DSSRT,TROPICAL FRUIT,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,DSSRT,CUSTARD PUDD,VANILLA,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DSSRT,CUSTARD PUDD,VANILLA,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,JUC,APPL&GRAPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,JUC,FRUIT PUNCH,W/CA",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,JUC,APPL&CHERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,JUC,APPL,W/CA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,VEG&CHICK,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,MXD VEG,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,MXD VEG,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,FRUIT,BANANAS W/TAPIOCA,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,VEG,MIX VEG JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG,GARDEN VEG,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG,MIX VEG STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,BF NOODLE,JR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,APPLS W/HAM,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CARROTS&BF,STR",
    categories: [VEGGIES as category],
  },
  {
    name: "BABYFOOD,PLUMS,BANANAS&RICE,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,TURKEY,RICE&VEG,TODD",
    categories: [MEATS as category],
  },
  {
    name: "BABYFOOD,DINNER,APPLS&CHICK,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,BROCCOLI & CHICK,JR",
    categories: [VEGGIES as category],
  },
  {
    name: "Babyfood, beverage, GERBER GRADUATE FRUIT SPLASHERS",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,SNACK,GERBER,GRADUATES,YOGURT MELTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,SWT POTATOES&CHICK,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,POTATOES W/CHS&HAM,TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,BARLEY,PREP W/WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,HI PROT,PREP W/WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,MXD,PREP W/WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,MXD,W/BANANAS,PREP W/WHL MILK",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,CRL,OATMEAL,PREP W/WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,OATMEAL,W/BANANAS,PREP W/WHL MILK",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,CRL,OATMEAL,W/HONEY,PREP W/WHL MILK",
    categories: [SWEETS as category],
  },
  {
    name: "BABYFOOD,CRL,RICE,PREP W/WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,RICE,W/HONEY,PREP W/WHL MILK",
    categories: [SWEETS as category],
  },
  {
    name: "BABYFOOD,CRL,MXD,W/HONEY,PREP W/WHL MILK",
    categories: [SWEETS as category],
  },
  {
    name: "BABYFOOD,CRL,HI PROT,W/APPL&ORANGE,PREP W/WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,RICE,W/BANANAS,PREP W/WHL MILK",
    categories: [FRUITS as category],
  },
  {
    name: "INF FORMULA,NESTLE,GOOD START SUPREME,W/ IRON,RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,NES,G START SUPR,W/ IRON,LIQ CONC,NOT RECON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,NESTLE,GOOD START SUPREME,W/ IRON,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, MEAD JOHNSON, ENFAMIL, W/IRON, RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMIL,W/ IRON,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INFANT FORMULA,MEAD JOHNSON,ENFAMIL,LO IRON,RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMILLIPIL,W/IRN,PDR,W/ ARA & DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, MEAD JOHNSON, ENFAMIL, LO IRON, POWD, NOT RECON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMU,MEAD JOHNS,ENFA,LIPIL,W/ IRO,LIQ CONC,W/ ARA & DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMIL,NUTRAMIGEN,W/ IRON,RTF",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORM,MEAD JOHNSON,ENFAMIL,NUTRAMIGEN,W/IRON,PDR,NOTRECN",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, MEAD JOHN, ENFAMIL LIPIL,W/ IRON,RTF,W/ AR & DH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORM,MEAD JOHNSON,ENFAMIL,NUTRAMIGEN,W/IRON,LC,NOT RECON",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORM,ME JOHNS,ENFAM,LIP,LO IRON,LIQ CONC,W/ ARA & DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHILD FORMULA,MEAD JOHNSON,PORTAGEN,W/ IRON,PDR,NOT RECON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHILD FORMULA,MEAD JOHNSON,PORTAGEN,W/ IRON,PREP FROM PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA. MEAD JOHNSON, PREGESTIMIL, W/IRON, PDR,NO RECON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, MEAD JOHNSON, PREGESTIMIL, W/IRON, PREP FRO PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,PROSOBEE,W/ IRON,RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, MEAD JOHNSON, PROSOBEE,W/IRON ,LIQ CNC, NOT REC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FOR,ME JOHN,ENFAM,LIPIL,LO IRON,READY TO FE,W/ ARA & DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMIL,PROSOBEE,IRON,PDR,NOT RECON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, ME JOHN, ENFA, LACF LIP, W/IRO, POW, W/AR AN DH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMU, ME JOH, ENF, LAC, LI, W/ IR,LI CO,N RE,W/ AR & DH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMIL,LIPIL,RTF,W/ ARA & DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, ABBOTT NUTR, SIMILAC, PM 60/40, PDR NOT RECON",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FOR,ME JOH,ENF,NUTR LIPIL,W/ IRO,PDR,NOT RE,W/ ARA & DHA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, ABB NUT,SIMI,NAT CA,AD,RTF,W/ ARA & DHA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, AB NUT, SIM, SP CA, ADV 24,W/ IR, RT,W/ AR & DH",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, ABBO NUTR, SIMIL,ISOMI,W/ IRON,RTF",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, ABBOTT NUTR, SIMILAC, ISOMIL,W/ IRON,LIQ CONC",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, ABBO NUTR, SIMILA, ISOMI, W/ IRON,PDR,NOT RECON",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FO,ME JO,ENF,NUTR,LIPIL,W/ IR,LIQ CO NOT RE,W/ ARA & DHA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMU,ME JOHNS,ENFAM,NUTRA,LIPI,W/ IRO,RTF,W/ ARA & DHA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, ABBOTT NUTR, SIMILAC, ALIMENTUM, W/ IRON,RTF",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMU, ME JOHNS, ENFAM, ENFA LIP, W/IRO, POW, W/AR/AN DH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, ABBOTT NUTR, SIMILAC, W/ IRON, RTF",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORM, AB NUTR, SIMILAC, W/ IRON, LIQ CONC, NOT RECON",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, MEA JOH,EN,PR LIPI,W/ IRO,PD,NO RE,W/ ARA & DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, ABBOTT NUTR, SIMILAC, W/ IRON, PDR, NOT RECON",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INFFORMULA, MEAD JOHNS,ENFAMIL,PROSOB,LIPI,LC,NOTREC,ARA&DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, ABBOTT NUTR, SIMILAC, LO IRON, RTF",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, ABBOTT NUTR, SIMILAC, LO IRON,LIQ CONC,NOT RECO",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA,MEJOHN,PROSOBE LIPI,W/ IRO,RE TO FE,W/ ARA & DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, ABBOTT NUTR, SIMILAC, LO IRON, PDR,NOT RECON",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA,NESTLE,GOOD START SOY,W/ DHA & ARA,RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHILD FORMULA,ABBOTT NUTR,PEDIASURE,RTF (FORMERLY ROSS)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORM,MEAD JOHN,NEXT STEP,PROS LIPIL,PDR,W/ ARA & DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORM,ME JO,NEXT STEP,PROSO,LIPIL,REATO FEED,W/ ARA & DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,NESTLE,GOOD START SOY,W/ ARA & DHA,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, MEAD JOHNSON, ENFAMIL, LACTOFREE, RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMIL,LACTOFREE,W/ IRN,PDR,NOTREC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHI FORMU,ABBT NUTR,PEDIASU,RTF,W/ IRON & FIB (FORMER ROSS)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA,NESTLE,GOOD START 2 ESSENTIALS,W/ IRON,RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, NE,GOO STAR 2 ESSENT,W/ IRON,LIQ CONC,NOT RECON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,NESTLE,GOOD START 2 ESSENTIALS,W/ IRON,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,NESTLE,GOOD START ESSENTIALS SOY,W/ IRON,RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORM,NEST,GOOD START ESSENT SOY,W/ IRON,LIQ CON,NOT RECO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,NESTLE,GOOD START ESSENTIALS SOY,W/ IRON,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, MEAD JOHNSON,NEXT STEP PROSOBEE,PDR,NOT RECON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,NEXT STEP PROSOBEE,PREP FROM PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CORN & SWT POTATOES,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORM, ABBO NUTR, SIMIL, ALIMENT, ADVAN, RTF,W/ ARA & DHA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA,PBM PRODUC,STO BRA,RTF (FORMERLY WYETH-AYERST)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORM,PBM PROD,STORE BRAND,LC,NOT REC (FORM WYETH-AYERST)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,PBM PRODUCTS,STORE BRAND,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,PBM PRODUCTS,STORE BRAND,SOY,RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMU,PBM PRODU,STORE BR,SOY,LIQ CONC,NOT RECON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,PBM PRODUCTS,STORE BRAND,SOY,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, MEAD JOHNS, ENFAMI, AR LIPIL, RTF,W/ ARA & DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, MEA JOHNSO, ENFAMI, AR LIPIL, PDR, W/ ARA & DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORM,ABBOT NUT,SIMIL NEOSU,RTF,W/ ARA & DHA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, ABBOTT, SIMILAC, NEOSURE, PDR, W/ ARA & DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, ABB NUTR, SIMI,SENS (LACT FRE) RTF,W/ ARA & DHA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, ABB NUT,SIMIL,SENS,(LACT FR),LIQ CON,W/ AR & DH",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, ABB NUTR,SIMIL,SENS,(LACTO FR), PD, W/ ARA & DH",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, ABBOTT NUTR, SIMILAC, ADVANCE, W/ IRON, RTF",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA,ABBOTT NUTR,SIMILAC,ADVANC,W/ IRON,PDR,NOT RECON",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMU,ABBO NUTR,SIMILAC,ADVAN,W/ IRON,LIQ CONC,NOT RECON",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, ABB NUTR, SIMIL, ISOMIL, ADVA W/ IRON,LIQ CONC",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, ABBO NUTR,SIMIL,ISOMIL, ADVANCE W/ IRON,RTF",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, ABB NUTR, SIMI, ISOMI, ADVAN W/ IRO ,PD,NOT REC",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMIL,ENFACARE LIPIL,RTF, ARA&DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,YOG,WHL MILK,W/ FRUIT,MULTIG CRL & ADD DHA FORT",
    categories: [FRUITS as category],
  },
  {
    name: "INF FORM,ABBOTT,ALIMENTUM ADVANCE,IRON,PDR,NOTREC,DHA&ARA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,MSHD CHEDDAR POTATOES&BROCCOLI,TODDLER",
    categories: [VEGGIES as category],
  },
  {
    name: "INF FORMULA,NESTLE,GOOD START SUPREME,W/ IRON,DHA & ARA,RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORM,NESTLE,GOOD START SUPREME,IRON,DHA&ARA,PRP FR LC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INFFORM,MEADJOHNSON,ENFAMIL GENTLEASE LIPIL,W/IRON,PREPFRPDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,FORT CRL BAR,FRUIT FILLING",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,YOGU,WHL MILK,W/ FRUI,MULTIGRA CRL & ADD IRON FORT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,NESTLE,GOOD START SOY,W/ DHA & ARA,LIQ CONC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TODDL FORM,ME JOHN,ENFA,PREM (FORME ENL,LIPIL,NEXT STEP),PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TODDLER FORMULA, MEAD JOHNSON, ENFAGROW PREMIUM, RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMIL,GENTLEASE,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, MEAD JOHNS, ENFAMIL, ENFAGROW, GENTLEA,TOD, RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, MEAD JOHNSON, ENFAMIL, ENFAGROW, SOY, TODD RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMIL,NUTRAMIGEN AA,RTF",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMIL,PREMATURE,20 CAL RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMIL,PREMATURE,24 CALO RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMIL,PREMIUM,NEWBORN,RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, GERBER, GOOD START 2 SOY,W/ IRON,RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,GERBER,GOOD START,PROTECT PLUS,RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,GERBER GOOD START 2,GENTLE PLUS,RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, GERBER, GOOD START 2,PROTECT PLUS, RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, ABBO NU,SIMIL,GO & GR,RTF,W/ ARA & DHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMU, ABBO NUTR, SIMIL, EXPERT CARE, DIARRH RT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, ABBO NUTR, SIMIL, FOR SPIT UP, RTF,W/ ARA & DHA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BABYFD,FRU,BAN AND STRAW, JU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOO,BAN WI MIX BERR,ST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Babyfood, Multigrain whole grain cereal, dry fortified",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,BABY MUM MUM RICE BISCUITS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFD,SNK,GE,GRAD,LIL CRUNCH,BKD,WHLGRN,CORN SNK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, ABBOTT NUTRIT, SIMILAC, FOR SPIT UP, POW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "FAT,BEEF TALLOW",
    categories: [MEATS as category],
  },
  {
    name: "LARD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,KRAFT MAYO LT MAYO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,KRAFT MAYO FAT FREE MAYO DRSNG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,KRAFT MIRACLE WHIP FREE NONFAT DRSNG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,RUSSIAN DRSNG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,SESAME SD DRSNG,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,1000 ISLAND,COMM,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,MAYO TYPE,REG,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,FRENCH DRSNG,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,ITALIAN DRSNG,COMM,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,RUSSIAN DRSNG,LO CAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,1000 ISLAND DRSNG,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,MAYO,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,MAYO,SOYBN&SAFFLOWER OIL,W/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SALAD DRSNG,MAYO,IMITN,SOYBN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,MAYO,IMITN,MILK CRM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,MAYO,IMITN,SOYBN WO/CHOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SANDWICH SPRD,W/CHOPD PICKLE,REG,UNSPEC OILS",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SHORTENING,HOUSEHOLD,PARTIALLY HYDROG SOYBN -COTTONSEED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "OIL,SOYBN,SALAD OR COOKING,(PARTIALLY HYDROGENATED)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,RICE BRAN",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,WHEAT GERM",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,PNUT,SALAD OR COOKING",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,SOYBN,SALAD OR COOKING",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,COCNT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,OLIVE,SALAD OR COOKING",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,PALM",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,SESAME,SALAD OR COOKING",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,SUNFLOWER,LINOLEIC (LESS THAN 60%)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE,REG,HARD,SOYBN (HYDR)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,ITALIAN DRSNG,COMM,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,FRENCH DRSNG,COMM,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEG OIL SPRD,UNSPEC OILS,APPROX 37% FAT,W/ SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SALAD DRSNG,FRENCH,HOME RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,HOME RECIPE,VINEGAR&OIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SALAD DRSNG,FRENCH DRSNG,COMM,REG,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,FRENCH DRSNG,RED FAT,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,ITALIAN DRSNG,COMM,REG,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,ITALIAN DRSNG,RED FAT,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,MAYO,SOYBN OIL,WO/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SALAD DRSNG,FRENCH,CTTNSD,OIL,HOME RECIPE",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SALAD DRSNG,FRENCH DRSNG,FAT-FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,COCOA BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "OIL,CTTNSD,SALAD OR COOKING",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,SUNFLOWER,LINOLEIC,(APPROX. 65%)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,SAFFLOWER,SALAD OR COOKING,LINOLEIC,(OVER 70%)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,SAFFLOWER,SALAD OR COOKING,HI OLEIC",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "VEGETABLE OIL,PALM KERNEL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,POPPYSEED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,TOMATOSEED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,TEASEED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,GRAPESEED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,CORN,INDUSTRIAL & RTL,ALLPURP SALAD OR COOKING",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FAT,MUTTON TALLOW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,WALNUT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,ALMOND",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,APRICOT KERNEL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,SOYBN LECITHIN",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,HAZELNUT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,BABASSU",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,SHEANUT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SALAD DRSNG,BLUE OR ROQUEFORT CHS DRSNG,COMM,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,CUPU ASSU",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FAT,CHICKEN",
    categories: [MEATS as category],
  },
  {
    name: "OIL,SOYBN,SALAD OR COOKING,(PARTIALLY HYDROGENATED) & CTTNSD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SHORTENING,HOUSEHOLD,LARD&VEG OIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,SUNFLOWER,LINOLEIC,(PARTIALLY HYDROGENATED)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SHORTENING BREAD,SOYBN (HYDR)&CTTNSD",
    categories: [GRAINS as category],
  },
  {
    name: "SHORTENING CAKE MIX,SOYBN (HYDR)&CTTNSD (HYDR)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHORTENING INDUSTRIAL,LARD&VEG OIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SHORTENING FRYING (HVY DUTY),BF TALLOW&CTTNSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHORTENING CONFECTIONERY,COCNT (HYDR)&OR PALM KERNEL (HYDR)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHORTENING INDUSTRIAL,SOYBN (HYDR)&CTTNSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHORTENING FRYING (HVY DUTY),PALM (HYDR)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHORTENING HOUSEHOLD SOYBN (HYDR)&PALM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHORTENING FRYING HVY DUTY,SOYBN HYDR,LINOLEIC (LESS THAN 1%",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHORTENING,CONFECTIONERY,FRACTIONATED PALM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,NUTMEG BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "OIL,UCUHUBA BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAT,DUCK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAT,TURKEY",
    categories: [MEATS as category],
  },
  {
    name: "FAT,GOOSE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,AVOCADO",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,CANOLA",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,MUSTARD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,SUNFLOWER,HI OLEIC (70% & OVER)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE-LIKE,MARGARINE-BUTTER BLEND,SOYBN OIL & BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SHORTENING,SPL PURPOSE FOR CAKES&FROSTINGS,SOYBN (HYDR)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHORTENING,SPL PURPOSE FOR BAKING,SOYBN (HYDR) PALM&CTTNSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,OAT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FISH OIL,COD LIVER",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FISH OIL,HERRING",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FISH OIL,MENHADEN",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FISH OIL,MENHADEN,FULLY HYDR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FISH OIL,SALMON",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FISH OIL,SARDINE",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SHORTENING,MULTIPURPOSE,SOYBN (HYDR)&PALM (HYDR)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARGARINE-LIKE,VEG OIL-BUTTER SPRD,TUB,W/ SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BUTTER,LT,STK,W/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BUTTER,LT,STK,WO/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MEAT DRIPPINGS (LARD,BF TALLOW,MUTTON TALLOW)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ANIMAL FAT,BACON GREASE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARGARINE,REG,80% FAT,COMP,STK,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARGARINE,REG,80% FAT,COMP,TUB,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARGARINE-LIKE,VEG OIL SPRD,60% FAT,STK,W/ SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE-LIKE,VEG OIL SPRD,60% FAT,TUB,W/ SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE-LIKE,VEG OIL SPRD,60% FAT,STICK/TUB/BOTTLE,W/ SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SHORTENING,VEG,HOUSEHOLD,COMP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARGARINE,REG,80% FAT,COMP,STK,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARGARINE,REG,80% FAT,COMP,TUB,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEG OIL SPRD,60% FAT,STICK/TUB/BOTTLE,WO/ SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE-LIKE,VEG OIL SPRD,FAT FREE,LIQ,W/ SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE-LIKE SPRD W/ YOGURT,70% FAT,STK,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARGARINE-LIKE SPRD W/ YOGURT,APPROX 40% FAT,TUB,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARGARINE,80% FAT,STK,INCL REG & HYDR CORN & SOYBN OILS",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE, VEG OIL SPRD,70% FAT,SOYBN & PART HYDR SOYBN,STK",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE SPRD,APPROX 48% FAT,TUB",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARGARINE-LIKE,VEG OIL SPRD,FAT-FREE,TUB",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE-LIKE,VEG OIL SPRD,20% FAT,W/ SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE-LIKE,VEG OIL SPRD,20% FAT,WO/ SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SALAD DRSNG,1000 ISLAND DRSNG,FAT-FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,ITALIAN DRSNG,FAT-FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,RANCH DRSNG,FAT-FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,RANCH DRSNG,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,RANCH DRSNG,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,MAYO,LT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,INDUSTRIAL,MID-OLEIC,SUNFLOWER",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,CANOLA W/ ANTIFOAMING AGENT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,CANOLA FOR SALADS,WOKS & LT FRYING",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUS,CANOLA (PART HYDROG) OIL FOR DEEP FAT FRYING",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,COCNT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,SOY (PART HYDR),FOR POPCORN & FLAVORING VEG",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SHORTENING,INDUS,SOY (PART HYDROG),POURABLE LIQ FRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,INDUSTRIAL,SOY,REFINED,FOR WOKS & LT FRYING",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,SOY (PART HYDR),FOR NON-DAIRY BUTTER FLAVOR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "OIL,INDUSTRIAL,SOY ( PART HYDROGENATED),ALLPURP",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,SOY (PART HYDR ) & SOY,POURABLE FRY",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUS,SOY (PART HYDROG) & CTTNSD,TORTILLA SHORTENING",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE-LIKE SHORTENING,INDUS,SOY(PART  HYDR),CTTNSD,& SOY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,INDUSTRIAL,PALM KERNEL,CONFECTION FAT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,PALM KERNEL (HYDROGENATED),CONFECTION FAT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,PALM KERNEL (HYDROGENATED),CONFECTION FAT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,COCNT,CONFECTION FAT,ICE CRM COATINGS",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,PALM KERNEL (HYDROG) FOR WHIPPED TOPPINGS",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,COCNT (HYDROGENATED),FOR TOPPINGS & WHITENERS",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,PALM & PALM KERNEL,FILLING FAT (NON-HYDROG)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,PALM KERNEL (HYDROGENATED),FILLING FAT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,SOY (PARTHYDR ),PALM, ICINGS & FILLINGS",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE,INDUS,NON-DAIRY,CTTNSD,SOY OIL (PART HYDR )",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SHORTENING,INDUSTRIAL,SOY (PARTIALLY HYDR )&CORN FOR FRYING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHORTENING,INDUS,SOY (PART HYDR ) FOR BAKING & CONFECTIONS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARGARINE,INDUS,SOY & PART HYDR SOY OIL,BAKING,SAUCES,CANDY",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "USDA CMDTY FD,OIL,VEG,SOYBN,REFINED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "USDA CMDTY FD,OIL,VEG,LO SATURATED FAT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE-LIKE SPRD,SMART BALANCE REG BUTTERY SPRD",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MARGARINE-LIKE SPRD,SMART BALANCE LT BUTTERY SPRD",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MARGARINE-LIKE SPRD,SMART BEAT SUPER LT WO/ SATURATED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARGARINE-LIKE SPRD,SMART BEAT SMART SQUEEZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARGARINE-LIKE SPRD,SMART BALANCE OMEGA PLUS SPRD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,VEG,NATREON CANOLA,HI STABILITY,NON TRANS,HI OLEIC (70%)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,PAM COOKING SPRAY,ORIGINAL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE,MARGARINE-LIKE VEG OIL SPRD,67-70% FAT,TUB",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE,80% FAT,TUB,CANOLA HARVEST SOFT SPRD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,COOKING & SALAD,ENOVA,80% DIGLYCERIDES",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SALAD DRSNG,HONEY MUSTARD DRSNG,RED CAL",
    categories: [SWEETS as category],
  },
  {
    name: "MARGARINE-LIKE SPRD,BENECOL LT SPRD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,SPRAY-STYLE DRSNG,ASSORTED FLAVORS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,MAYO,LT,SMART BALANCE,OMEGA PLUS LT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEG OIL SPRD,37% FAT,UNSPEC OILS,W/ SALT,W/ ADDED VITAMIN D",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE,REG,80% FAT,COMP,STK,W/ SALT,W/ ADDED VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARGARINE,REG,80% FAT,COMP,TUB,W/ SALT,W/ ADDED VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEG OIL SPRD,60% FAT,STK,W/ SALT,W/ ADDED VITAMIN D",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "VEG OIL SPRD,60% FAT,TUB,W/ SALT,W/ ADDED VITAMIN D",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "VEG-OIL SPRD,STICK/TUB/BOTTLE,60% FAT,W/ ADDED VITAMIN D",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MARGARINE,REG,80% FAT,COMP,STK,WO/ SALT,W/ ADDED VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEG OIL SPRD,60% FAT,STICK/TUB/BOTTLE,WO/ SALT,W/VIT D",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,CANOLA,HI OLEIC",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,SOY,LO LINOLENIC",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,SOY,ULTRA LO LINOLENIC",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,SOY,FULLY HYDR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OIL,INDUSTRIAL,CTTNSD,FULLY HYDR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SALAD DRSNG,HONEY MUSTARD,REG",
    categories: [SWEETS as category],
  },
  {
    name: "SALAD DRSNG,POPPYSEED,CREAMY",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SALAD DRSNG,CAESAR,FAT-FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DRESSING,HONEY MUSTARD,FAT-FREE",
    categories: [SWEETS as category],
  },
  {
    name: "OIL,FLAXSEED,CONTAINS ADDED SLICED FLAXSEED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MAYONNAISE,RED FAT,W/ OLIVE OIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SALAD DRSNG,MAYONNAISE-TYPE,LT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHICKEN,BROILER,ROTISSERIE,BBQ,BREAST MEAT ONLY",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN&GIBLETS&NECK,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILER OR FRYER,MEAT&SKN&GIBLETS&NECK,FRIED,BATTER",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN&GIBLETS&NECK,FRIED,FLR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN&GIBLETS&NECK,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN&GIBLETS&NECK,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,MEAT & SKN,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN,CKD,FRIED,BATTER",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN,CKD,FRIED,FLR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,MEAT&SKN,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,MEAT ONLY,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,MEAT ONLY,CKD,FRIED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,MEAT ONLY,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,MEAT ONLY,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,SKN ONLY,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,SKN ONLY,CKD,FRIED,BATTER",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,SKN ONLY,CKD,FRIED,FLR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,SKN ONLY,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,SKN ONLY,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,GIBLETS,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,GIBLETS,CKD,FRIED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,GIBLETS,CKD,SIMMRD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,GIZZARD,ALL CLASSES,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,GIZZARD,ALL CLASSES,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,HEART,ALL CLASSES,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,HEART,ALL CLASSES,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,LIVER,ALL CLASSES,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,LIVER,ALL CLASSES,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT & SKN,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT&SKN,CKD,FRIED,BATTER",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT&SKN,CKD,FRIED,FLR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT&SKN,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT&SKN,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT & SKN,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT&SKN,CKD,FRIED,BATTER",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT&SKN,CKD,FRIED,FLR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT&SKN,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT&SKN,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT ONLY,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT ONLY,CKD,FRIED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT ONLY,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LT MEAT,MEAT ONLY,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT ONLY,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT ONLY,CKD,FRIED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT ONLY,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,MEAT ONLY,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,FAT,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT&SKN,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT&SKN,CKD,FRIED,BATTER",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT&SKN,CKD,FRIED,FLR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT&SKN,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT&SKN,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT ONLY,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT ONLY,CKD,FRIED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT ONLY,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT ONLY,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT&SKN,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT&SKN,CKD,FRIED,BATTER",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT&SKN,CKD,FRIED,FLR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT&SKN,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT&SKN,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILER OR FRYERS,BRST,SKINLESS,BNLESS,MEAT ONLY,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT ONLY,CKD,FRIED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT ONLY,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT ONLY,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT&SKN,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT&SKN,CKD,FRIED,BATTER",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT&SKN,CKD,FRIED,FLR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT&SKN,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT&SKN,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,DRUMSTK,MEAT ONLY,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT ONLY,CKD,FRIED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,DRUMSTK,MEAT ONLY,CKD,RST",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT ONLY,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT&SKN,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT&SKN,CKD,FRIED,BATTER",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT&SKN,CKD,FRIED,FLR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT&SKN,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT&SKN,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT ONLY,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT ONLY,CKD,FRIED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT ONLY,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,LEG,MEAT ONLY,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,NECK,MEAT&SKN,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,NECK,MEAT&SKN,CKD,FRIED,BATTER",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,NECK,MEAT&SKN,CKD,FRIED,FLR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,NECK,MEAT&SKN,CKD SIMMRD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,NECK,MEAT ONLY,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,NECK,MEAT ONLY,CKD,FRIED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,NECK,MEAT ONLY,CKD,SIMMRD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT&SKN,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT&SKN,CKD,FRIED,BATTER",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT&SKN,CKD,FRIED,FLR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT&SKN,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT&SKN,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,THIGH,MEAT ONLY,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT ONLY,CKD,FRIED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT ONLY,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT ONLY,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,WING,MEAT&SKN,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,WING,MEAT&SKN,CKD,FRIED,BATTER",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,WING,MEAT&SKN,CKD,FRIED,FLR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,WING,MEAT&SKN,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,WING,MEAT&SKN,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,WING,MEAT ONLY,RAW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,WING,MEAT ONLY,CKD,FRIED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,WING,MEAT ONLY,CKD,RSTD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,WING,MEAT ONLY,CKD,STWD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,ROASTING,MEAT&SKN&GIBLETS&NECK,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,ROASTING,MEAT&SKN&GIBLETS&NECK,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CANADA GOOSE,BREAST MEAT,SKINLESS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHICKEN,ROASTING,MEAT&SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,ROASTING,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,ROASTING,MEAT ONLY,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,ROASTING,GIBLETS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,ROASTING,GIBLETS,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,ROASTING,LT MEAT,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,ROASTING,LT MEAT,MEAT ONLY,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,ROASTING,DK MEAT,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,ROASTING,DK MEAT,MEAT ONLY,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,STEWING,MEAT&SKN,&GIBLETS&NECK,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,STEWING,MEAT & SKN,& GIBLETS & NECK,CKD,STWD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,STEWING,MEAT&SKN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,STEWING,MEAT&SKN,CKD,STWD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,STEWING,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,STEWING,MEAT ONLY,CKD,STWD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,STEWING,GIBLETS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,STEWING,GIBLETS,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,STEWING,LT MEAT,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,STEWING,LT MEAT,MEAT ONLY,CKD,STWD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,STEWING,DK MEAT,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,STEWING,DK MEAT,MEAT ONLY,CKD,STWD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,CAPONS,MEAT&SKN&GIBLETS&NECK,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,CAPONS,MEAT&SKN&GIBLETS&NECK,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,CAPONS,MEAT&SKN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,CAPONS,MEAT&SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,CAPONS,GIBLETS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,CAPONS,GIBLETS,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "DUCK,DOMESTICATED,MEAT&SKN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DUCK,DOMESTICATED,MEAT&SKN,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DUCK,DOMESTICATED,MEAT ONLY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DUCK,DOMESTICATED,MEAT ONLY,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DUCK,DOMESTICATED,LIVER,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DUCK,WILD,MEAT&SKN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DUCK,WILD,BREAST,MEAT ONLY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GOOSE,DOMESTICATED,MEAT&SKN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GOOSE,DOMESTICATED,MEAT&SKN,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GOOSE,DOMESTICATED,MEAT ONLY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GOOSE,DOMESTICATED,MEAT ONLY,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GOOSE,LIVER,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GUINEA HEN,MEAT&SKN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GUINEA HEN,MEAT ONLY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PHEASANT,RAW,MEAT&SKN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PHEASANT,RAW,MEAT ONLY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PHEASANT,BREAST,MEAT ONLY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PHEASANT,LEG,MEAT ONLY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "QUAIL,MEAT AND SKIN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "QUAIL,MEAT ONLY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "QUAIL,BREAST,MEAT ONLY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUAB,(PIGEON),MEAT&SKN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUAB,(PIGEON),MEAT ONLY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUAB,(PIGEON),LT MEAT WO/SKN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURKEY,WHL,MEAT & SKN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,WHL,MEAT & SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,WHL,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,WHL,MEAT ONLY,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,SKN FROM WHL,(LIGHT & DARK),RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,SKN FROM WHL (LIGHT & DARK),RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,WHL,GIBLETS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,WHL,GIBLETS,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,GIZZARD,ALL CLASSES,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,GIZZARD,ALL CLASSES,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,HEART,ALL CLASSES,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,HEART,ALL CLASSES,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,LIVER,ALL CLASSES,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,LIVER,ALL CLASSES,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY FROM WHL,NECK,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY FROM WHL,NECK,MEAT ONLY,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY FROM WHL,LT MEAT,MEAT & SKN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY FROM WHL,LT MEAT,MEAT & SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,DK MEAT,MEAT & SKN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,DK MEAT FROM WHL,MEAT & SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY FROM WHL,LT MEAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,ALL CLASSES,LT MEAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "Turkey from whole, dark meat, meat only, raw",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURKEY,FROM WHL,DK MEAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,ALL CLASSES,BACK,MEAT&SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,ALL CLASSES,BREAST,MEAT&SKN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,ALL CLASSES,BREAST,MEAT&SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,ALL CLASSES,LEG,MEAT&SKN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,ALL CLASSES,LEG,MEAT&SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,ALL CLASSES,WING,MEAT&SKN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,ALL CLASSES,WING,MEAT&SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,FRYER-ROASTERS,MEAT&SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,BACK FROM WHL BIRD,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,BACK,FROM WHL BIRD,MEAT ONLY,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,BREAST,FROM WHL BIRD,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,BREAST,FROM WHL BIRD,MEAT ONLY,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,WING,FROM WHL BIRD,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,WING,FROM WHL BIRD,MEAT ONLY,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,YOUNG HEN,SKN ONLY,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,CND,MEAT ONLY,W/BROTH",
    categories: [MEATS as category],
  },
  {
    name: "PATE DE FOIE GRAS,CND (GOOSE LIVER PATE),SMOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURKEY,CND,MEAT ONLY,W/BROTH",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,DICED,LT&DK MEAT,SEASONED",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY AND GRAVY,FROZEN",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY BREAST,PRE-BASTED,MEAT&SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY THIGH,PRE-BASTED,MEAT&SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY RST,BNLESS,FRZ,SEASONED,LT&DK MEAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY STKS,BREADED,BATTERED,FRIED",
    categories: [MEATS as category],
  },
  {
    name: "POULTRY,MECHANICALLY DEBONED,FROM BACKS&NECKS W/SKN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POULTRY,MECHANICALLY DEBONED,FROM BACKS&NECKS WO/SKN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POULTRY,MECHANICALLY DEBONED,FROM MATURE HENS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURKEY,MECHANICALLY DEBONED,FROM TURKEY FRAMES,RAW",
    categories: [MEATS as category],
  },
  {
    name: "GROUND TURKEY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "GROUND TURKEY,CKD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,CORNISH GAME HENS,MEAT&SKN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,CORNISH GAME HENS,MEAT&SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,CORNISH GAME HENS,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,CORNISH GAME HENS,MEAT ONLY,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,CANNED,NO BROTH",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,WING,FRZ,GLAZED,BARBECUE FLAV",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,WING,FRZ,GLAZED,BARBECUE FLAV,HTD (MICROWAVE)",
    categories: [MEATS as category],
  },
  {
    name: "CKN,BROILERS/FRYERS,BRST,SKNLS,BNLS,MEAT ONLY,W ADDED SLN,RW",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "DUCK,YNG DUCKLING,DOM,WH PEKIN,BRST,MEAT&SKN,BNLESS,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DUCK,YNG DUCKL,DOM,WH PEKIN,BRST,MEAT,BNLESS,CKD WO/SKN,BRLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DUCK,YNG DUCKLING,DOM,WH PEKIN,LEG,MEAT&SKN,BONE IN,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DUCK,YNG DUCKL,DOM,WH PEKIN,LEG,MEAT,BONE IN,CKD WO/SKN,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHICKEN,BROILER,ROTISSERIE,BBQ,DRUMSTK,MEAT ONLY",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,WING,FRZ,GLAZED,BBQ FLAV,HTD (CONVENTIONAL OVEN)",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN PATTY,FRZ,UNCKD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN PATTY,FRZ,CKD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN BREAST TENDERS,BREADED,CKD,MICROWAVED",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN BREAST TENDERS,BREADED,UNCKD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,GROUND,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,GROUND,CRUMBLES,CKD,PAN-BROWNED",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,BROILER,ROTISSERIE,BBQ,THIGH,MEAT ONLY",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICK,FEET,BOILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "USDA CMDTY CHICK,CND,MEAT ONLY,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA CMDTY,CHICK,CND,MEAT ONLY,W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA CMDTY,CHICK,CND,MEAT ONLY,W/ BROTH",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CHICKEN,BROILER,ROTISSERIE,BBQ,WING,MEAT ONLY",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT ONLY,CKD,ROTISSERIE,ORI",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CKN,BRLERS/FRYERS,BRST,MT ONLY,CKD,ROTISSERIE,ORIG SEASONING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT ONLY,CKD,ROTISSERIE,",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,SKN ONLY,CKD,ROTISSERIE,ORIGINAL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT ONLY,CKD,ROTISSERIE,OR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,WING,MEAT ONLY,CKD,ROTISSERIE,ORI",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BACK,MEAT & SKN,CKD,ROTISSERIE,OR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,BREAST,MEAT & SKN,CKD,ROTISSERIE,",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DRUMSTK,MEAT & SKN,CKD,ROTISSERIE",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,THIGH,MEAT & SKN,CKD,ROTISSERIE,O",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,WING,MEAT & SKN,CKD,ROTISSERIE,OR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "USDA CMDTY,CHICK FAJITA STRIPS,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA CMDTY,TURKEY TACO MEAT,FRZ,CKD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,BROILER,ROTISSERIE,BBQ,SKIN",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILER,ROTISSERIE,BBQ,BACK MEAT & SKN",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILER,ROTISSERIE,BBQ,BREAST MEAT & SKN",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILER,ROTISSERIE,BBQ,DRUMSTK MEAT & SKN",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILER,ROTISSERIE,BBQ,THIGH MEAT & SKN",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILER,ROTISSERIE,BBQ,WING MEAT & SKN",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "RUFFED GROUSE,BREAST MEAT,SKINLESS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA COMMODITY,TURKEY HAM,DK MEAT,SMOKED,FRZ",
    categories: [MEATS as category],
  },
  {
    name: "EMU,GROUND,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EMU,GROUND,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "EMU,FAN FILLET,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EMU,FAN FILLET,CKD,BRLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EMU,FLAT FILLET,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EMU,FULL RUMP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EMU,FULL RUMP,CKD,BRLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EMU,INSIDE DRUM,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EMU,INSIDE DRUMS,CKD,BRLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EMU,OUTSIDE DRUM,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EMU,OYSTER,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EMU,TOP LOIN,CKD,BRLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,GROUND,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,GROUND,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OSTRICH,FAN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,INSIDE LEG,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,INSIDE LEG,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,INSIDE STRIP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,INSIDE STRIP,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,OUTSIDE LEG,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,OUTSIDE STRIP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,OUTSIDE STRIP,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,OYSTER,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,OYSTER,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,RND,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,TENDERLOIN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,TIP RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,TIP CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,TOP LOIN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSTRICH,TOP LOIN,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHICKEN,LIVER,ALL CLASSES,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "GROUND TURKEY,FAT FREE,RAW",
    categories: [MEATS as category],
  },
  {
    name: "GROUND TURKEY,FAT FREE,PAN-BROILED CRUMBLES",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "GROUND TURKEY,FAT FREE,PATTIES,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "GROUND TURKEY,93% LN,7% FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "GROUND TURKEY,93% LN,7% FAT,PAN-BROILED CRUMBLES",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "GROUND TURKEY,93% LN,7% FAT,PATTIES,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "GROUND TURKEY,85% LN,15% FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "GROUND TURKEY,85% LN,15% FAT,PAN-BROILED CRUMBLES",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "GROUND TURKEY,85% LN,15% FAT,PATTIES,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,DRUMSTK,MEAT OLY,CKD,BRSD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,THIGH,MEAT ONLY,CKD,BRSD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,SKN (DRUMSTICKS & THIGHS),CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,SKN (DRUMSTICKS & THIGHS),RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,SKN (DRUMSTICKS & THIGHS),CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,DRUMSTK,MT & SKN,CKD,BRSD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,BROILERS OR FRYERS,DK MEAT,THIGH,MEAT & SKN,CKD,BRSD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHICKEN,DK MEAT,DRUMSTK,MEAT ONLY,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,DK MEAT,DRUMSTK,MEAT ONLY,W/ ADDED SOLN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,DK MEAT,DRUMSTK,MEAT ONLY,W/ ADDED SOLN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,DK MEAT,THIGH,MEAT ONLY,W/ ADDED SOLN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,DK MEAT,THIGH,MEAT ONLY,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,DK MEAT,THIGH,MEAT ONLY,W/ ADDED SOLN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,SKN (DRUMSTICKS & THIGHS),W/ ADDED SOLN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,SKN (DRUMSTICKS & THIGHS),W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,SKN (DRUMSTICKS & THIGHS),W/ ADDED SOLN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,DK MEAT,DRUMSTK,MEAT & SKN,W/ ADDED SOLN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,DK MEAT,DRUMSTK,MEAT & SKN,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,DK MEAT,DRUMSTK,MEAT & SKN,W/ ADDED SOLN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,DK MEAT,THIGH,MEAT & SKN,W/ ADDED SOLN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,DK MEAT,THIGH,MEAT & SKN,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,DK MEAT,THIGH,MEAT & SKN,W/ ADDED SOLN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,BROILER,ROTISSERIE,BBQ,BACK MEAT ONLY",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "TURKEY,DK MEAT FROM WHL,MEAT ONLY,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,DK MEAT,MEAT ONLY,W/ ADDED SOLN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY FROM WHL,LT MEAT,MEAT ONLY,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY FROM WHL,LT MEAT,MEAT ONLY,W/ ADDED SOLN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,SKN FROM WHL (LIGHT & DARK),W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,SKN FROM WHL,(LIGHT & DARK),W/ ADDED SOLN,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,DK MEAT FROM WHL,MEAT & SKN,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,DK MEAT FROM WHL,MEAT & SKN,W/ ADDED SOLN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY FROM WHL,LT MEAT,MEAT & SKN,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY FROM WHL,LT MEAT,MEAT & SKN,W/ ADDED SOLN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,WHL,MEAT ONLY,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,WHL,MEAT ONLY,W/ ADDED SOLN,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,WHL,MEAT & SKN,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,WHL,MEAT & SKN,W/ ADDED SOLN,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,BREAST,MEAT ONLY,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,BREAST,MEAT ONLY,W/ ADDED SOLN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,BREAST,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,BREAST,MEAT ONLY,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,WING,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,WING,MEAT ONLY,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,SKN,FROM RTL PARTS,FROM DK MEAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,SKN,FROM RTL PARTS,FROM DK MEAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,DRUMSTK,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,THIGH,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,BREAST,FROM WHL BIRD,MEAT ONLY,W/ ADDED SOLN,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,BACK,FROM WHL BIRD,MEAT ONLY,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,BACK,FROM WHL BIRD,MEAT ONLY,W/ ADDED SOLN,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,BREAST,FROM WHL BIRD,MEAT ONLY,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,THIGH,MEAT ONLY,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,DRUMSTK,MEAT ONLY,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,DRUMSTK,FROM WHL BIRD,MEAT ONLY,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,DRUMSTK,FROM WHL BIRD,MEAT ONLY,W/ ADDED SOLN,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,THIGH,FROM WHL BIRD,MEAT ONLY,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,BREAST,MEAT & SKN,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,THIGH,FROM WHL BIRD,MEAT ONLY,W/ ADDED SOLN,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,WING,FROM WHL BIRD,MEAT ONLY,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,WING,FROM WHL BIRD,MEAT ONLY,W/ ADDED SOLN,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,BREAST,MEAT & SKN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,BREAST,MEAT & SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,WING,MEAT & SKN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,WING,MEAT & SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,DRUMSTK,MEAT & SKN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,DRUMSTK,MEAT & SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,DRUMSTK,FROM WHL BIRD,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,DRUMSTK,FROM WHL BIRD,MEAT ONLY,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,THIGH,FROM WHL BIRD,MEAT ONLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,THIGH,FROM WHL BIRD,MEAT ONLY,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,THIGH,MEAT & SKN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,RTL PARTS,THIGH,MEAT & SKN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,BACK,FROM WHL BIRD,MEAT & SKN,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,BACK,FROM WHL BIRD,MEAT & SKN,W/ ADDED SOLN,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICkN,BROILR OR FRYRS,BRST,SKNLSS,BNLESS,MEAT ONLY,CKD,BRSD",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHCKN,BROLR OR FRYRS,BRST,SKNLSS,BNLESS,MEAT ONLY,CKD,GRILLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CKN,BRLER OR FRYERS,BRST,SKNLS,BNLS,MT ONLY,W ADDED SLN,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CKN,BRLER/FRYERS,BRST,SKNLS,BNLS,MT ONLY,W ADDED SLN,GRILLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,CRM OF ASPARAGUS,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BLACK BEAN,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,BEEFY MUSHROOM SOUP,COND",
    categories: [MEATS as category],
  },
  {
    name: "SOUP,BEAN W/ PORK,CND,COND",
    categories: [MEATS as category],
  },
  {
    name: "SOUP,BEAN W/ FRANKFURTERS,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BEAN W/ HAM,CND,CHUNKY,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BF BROTH OR BOUILLON CND,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BF NOODLE,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF CELERY,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHS,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK BROTH,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,BROCCOLI CHS SOUP,COND",
    categories: [VEGGIES as category],
  },
  {
    name: "SOUP,CHICK,CND,CHUNKY,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF CHICK,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK GUMBO,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHUNKY CHICK NOODLE,CND,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK NOODLE,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK RICE,CND,CHUNKY,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK W/ RICE,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK & VEG,CND,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK VEG,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHILI BF,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CLAM CHOWDER,MANHATTAN STYLE,CND,CHUNKY,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CLAM CHOWDER,MANHATTAN,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,HEALTHY REQUEST,CHICK W/ RICE,COND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,CLAM CHOWDER,NEW ENGLAND,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BF BROTH BOUILLON & CONSOMME,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,LENTIL W/HAM,CND,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,CHEDDAR CHS SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,MINESTRONE,CND,CHUNKY,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,MINESTRONE,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED&WHITE,CHICK & DUMPLINGS SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,MUSHROOM BARLEY,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF MUSHROOM,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,MUSHROOM W/ BF STOCK,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,ONION,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF ONION,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,CHICK & STARS SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,OYSTER STEW,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,PEA,GRN,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,PEA,SPLIT W/HAM,CND,CHUNKY,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,PEA,SPLIT W/ HAM,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF POTATO,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,CHICK ALPHABET SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF SHRIMP,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED&WHITE,CHICK BROTH,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,CHICK GUMBO SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,TOMATO BF W/ NOODLE,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,RED & WHITE,CHICK NOODLE SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,TOMATO RICE,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,TURKEY,CHUNKY,CND,RTS",
    categories: [MEATS as category],
  },
  {
    name: "SOUP,CHUNKY VEG,CND,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,VEGETARIAN VEG,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHUNKY BF,CND,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,VEG BF,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,VEG W/ BF BROTH,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BF BROTH OR BOUILLON,PDR,DRY",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BEEF BROTH,CUBED,DRY",
    categories: [MEATS as category],
  },
  {
    name: "SOUP,CHICK BROTH OR BOUILLON,DRY",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK BROTH CUBES,DRY",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,CHICK NOODLEO'S SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,CHICK VEG SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,BF BROTH,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,ONION,DRY,MIX",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELLS RED & WHITE,BF CONSOMME,COND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,CRM OF VEG,DRY,PDR",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SAUCE,TERIYAKI,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,AU JUS,CANNED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,AU JUS,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,BF,CND,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,BEAN W/ BACON SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "GRAVY,BROWN,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRVY, CHCKN, CNND BTTLD, RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,CHICKEN,DRY",
    categories: [MEATS as category],
  },
  {
    name: "GRAVY,MUSHROOM,CANNED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,MUSHROOM,DRY,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,ONION,DRY,MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,PORK,DRY,PDR",
    categories: [MEATS as category],
  },
  {
    name: "GRAVY,TURKEY,CND,RTS",
    categories: [MEATS as category],
  },
  {
    name: "GRAVY,TURKEY,DRY",
    categories: [MEATS as category],
  },
  {
    name: "GRAVY,UNSPEC TYPE,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,CHICK NOODLE,DRY,MIX",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SAUCE,SOFRITO,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA COMMODITY,SPAGHETTI SAU,MEATLESS,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,BF NOODLE SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,BF W/ VEG & BARLEY SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BF MUSHROOM,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK MUSHROOM,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SAUCE,BARBECUE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,PLUM,READY-TO-SERVE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,PIZZA,CND,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,TOMATO BISQUE,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,TOMATO,CND,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SAUCE,SALSA,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,HOMEMADE,WHITE,THIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,HOMEMADE,WHITE,MED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,HOMEMADE,WHITE,THICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,RTS,PEPPER OR HOT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,RTS,PEPPER,TABASCO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,STOCK,BEEF,HOME-PREPARED",
    categories: [MEATS as category],
  },
  {
    name: "SOUP,STOCK,CHICK,HOME-PREPARED",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,STOCK,FISH,HOME-PREPARED",
    categories: [SEAFOOD as category],
  },
  {
    name: "SAUCE,HOISIN,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,OYSTER,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,MINESTRONE,CND,RED NA,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "USDA COMMODITY,SALSA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,FISH,READY-TO-SERVE",
    categories: [SEAFOOD as category],
  },
  {
    name: "SOUP,SHARK FIN,REST-PREP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF MUSHROOM,CND,COND,RED NA",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK BROTH,LESS/REDUCED NA,READY TO SERVE",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BF BROTH,LESS/REDUCED NA,READY TO SERVE",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SAUCE,TERIYAKI,RTS,RED NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,BEAN&HAM,CND,RED NA,PREP W/H2O OR RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SPLIT PEA SOUP,CND,RED NA,PREP W/ H2O OR READY-TO SERVE",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SPLIT PEA W/ HAM SOUP,CND,RED NA,PREP W/ H2O OR RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK BROTH,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,HEALTHY REQUEST,CRM OF CHICK SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF ASPARAGUS,CND,PREP W/ EQ VOLUME MILK",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK VEG W/POTATO&CHS,CHUNKY,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,98% FAT FREE CRM OF BROCCOLI SOUP,COND",
    categories: [VEGGIES as category],
  },
  {
    name: "SOUP,CRM OF CELERY,CND,PREP W/ EQ VOLUME MILK",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHS,CND,PREP W/ EQ VOLUME MILK",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,25% LESS NA CHICK NOODLE SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED&WHITE,25% LESS NA TOMATO SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,25% LESS NA CRM OF MUSHROOM SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,98% FAT FREE BROCCOLI CHS SOUP,COND",
    categories: [VEGGIES as category],
  },
  {
    name: "SOUP,CRM OF CHICK,CND,PREP W/ EQ VOLUME MILK",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,VEG,CND,LO NA,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,98% FAT FREE CRM OF CELERY SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,98% FAT FREE CRM OF CHICK SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "PREGO PASTA,CHNKY GRD MSHRM & GRN PPPR ITAL SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,CHUNKY GARDEN MUSHROOM ITALIAN SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,DICED ONION & GARLIC ITAL SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,FLAV W/ MEAT ITAL SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,FRSH MUSHROOM ITAL SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,GARLIC SUPREME ITAL SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,ITAL SAUSGE & GARLIC ITAL SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,MINI MEATBALL ITAL SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,MUSHRM & GRLIC ITAL SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "SOUP,CLAM CHOWDER,NEW ENG,CND,PREP W/ EQ VLM LOFAT (2%) MILK",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "PREGO PASTA,MUSHRM & PARMESAN ITALIAN SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,ORGANIC MUSHROOM ITALIAN SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,ORGNIC TOMATO & BASIL ITAL SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,HEART SMRT- RICOTTA PMESAN ITLN SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,RSTD GARLIC & HERB ITAL SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,RSTD GARLIC PARMESAN ITAL SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,H ST- RSTD RED PR GRLIC ITLIAN SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,TOMATO,BASIL & GARLIC ITAL SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,ZESTY MUSHROOM ITALIAN SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "CAMPBELL'S,CHNKY MICRO BOWLS,BF W/ CONTRY VEG,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY MICROWAVABLE BWLS,CHCK DMPLINGS SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF MUSHROOM,CND,PREP W/ EQ VOLUME LOFAT (2%) MILK",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S, CHNKY MICRO BOWLS,CLSSC CHIC NOODL,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S, CHNKY MICRO BOWL,GRLLD CHIC&SAUS GMBO,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,CRM OF ONION,CND,PREP W/ EQ VOLUME MILK",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,OYSTER STEW,CND,PREP W/ EQ VOLUME MILK",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,PEA,GRN,CND,PREP W/ EQ VOLUME MILK",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S, CHNKY MICRO BOWL,NEW ENGL CLM CHOW,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S,CHUNKY MICRO BOWLS,OLD FASH VEG BF,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S,CHUNKY MICRO BOWLS,SIRL BRGER W/CNTRY VEG,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,CRM OF POTATO,CND,PREP W/ EQ VOLUME MILK",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF SHRIMP,CND,PREP W/ EQ VOLUME LOFAT (2%) MILK",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SAUCE,WHITE,THIN,PREPARED-FROM-RECIPE,W/ BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SAUCE,SWT & SOUR,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,BARBECUE,KRAFT,ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S,CHICK W/ RICE SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED&WHITE,CHICK WON TON SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,CRM OF ASPARAGUS SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,HEALTHY CHOIC CHICK NOODLE SOUP,CND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,HEALTHY CHOIC CHICK & RICE SOUP,CND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,HEALTHY CHOIC GARDEN VEG SOUP,CND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,BF,FAT FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,COUNTRY STYLE CRM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,COUNTRY STYLE SAUSAGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,CHICK,FAT FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,GOLDEN PORK",
    categories: [MEATS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,MUSHROOM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,TURKEY,FAT FREE",
    categories: [MEATS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,BF,MICROWAVABLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,CHICK,MICROWAVABLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,TURKEY",
    categories: [MEATS as category],
  },
  {
    name: "GRAVY,FRANCO-AMERICAN,BF,SLOW RST,FAT FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,FRANCO-AMERICAN,CHICK,SLOW RST,FAT FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,FRANCO-AMERICAN,BF,SLOW RST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,FRANCO-AMERICAN,CHICK,SLOW RST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,FRANCO-AMERICAN,TURKEY,SLOW RST",
    categories: [MEATS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,TURKEY,MICROWAVABLE",
    categories: [MEATS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,CRM OF BROCCOLI SOUP,COND",
    categories: [VEGGIES as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,CRM OF CELERY SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,CRM OF CHICK SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,CRM OF CHICK W/ HERBS SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,CRM OF MUSHROOM SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,CRM OF MUSHROOM W/ RSTD GARLIC SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,CRM OF ONION SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,CRM OF POTATO SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,CRM OF SHRIMP SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED&WHITE,CREAMY CHICK NOODLE SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,SCOOBY-DOO SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,DOUBLE NOODLE IN CHICK BROTH SOP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,OLD FASHIONED TOMATO RICE SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,FIESTA NACHO CHS SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,FRENCH ONION SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,GOLDEN MUSHROOM SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,GOLDFISH PASTA W/ CHICK",
    categories: [SEAFOOD as category],
  },
  {
    name: "SOUP,TOMATO BISQUE,CND,PREP W/ EQ VOLUME MILK",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,TOMATO,CND,PREP W/ EQ VOLUME LOFAT (2%) MILK",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,GRN PEA SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,HOMESTYLE CHICK NOODLE SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,MANHATTAN CLAM CHOWDER,COND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,MEGA NOODLE IN CHICK BROTH,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,MINESTRONE SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,NEW ENGLAND CLAM CHOWDER,COND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,VEGETARIAN VEG SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,VEG SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,VEG BF SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S,TOMATO SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,TOMATO BISQUE,COND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,SPLIT PEA W/ HAM & BACON SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,BKD POTATO CHEDDAR BACON BITS SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,BKD POTATO W/ STEAK & CHS SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,BF RIB RST POTATOES HERBS SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,BF W/ COUNTRY VEG SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,BF W/ WHITE & WILD RICE SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY,CREAMY CHICK & DUMPLINGS SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,CHICK BROCCOLI CHS & POTATO SOUP",
    categories: [VEGGIES as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,CHICK CORN CHOWDER",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY,CLASSIC CHICK NOODLE SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,FAJITA CHICK W/ RICE & BNS SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,FIREHOUSE - HOT SPICY BF BEAN CHILI",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,GRILLED CHICK SAUSAGE GUMBO SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,GRILLED CHICK VEG & PASTA SOUP",
    categories: [GRAINS as category],
  },
  {
    name: "SOUP,CRM OF ASPARAGUS,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BLACK BEAN,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,GRILLED SIRLOIN STEAK HEARTY VEG SP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BEAN W/ PORK,CND,PREP W/ EQ VOLUME H2O",
    categories: [MEATS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY,HEALTHY REQUEST CHICK NOODLE SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BEAN W/ FRANKFURTERS,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,HEALTHY REQUEST VEG SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BF NOODLE,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF CELERY,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHS,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK BROTH,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,HEARTY BEAN 'N' HAM SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,HEARTY BF BARLEY SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF CHICK,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK GUMBO,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,HEARTY CHICK W/ VEG SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK NOODLE,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK W/ RICE,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHILI BF,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CLAM CHOWDER,MANHATTAN,CND,PREP W/EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,MANHATTAN CLAM CHOWDER",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CLAM CHOWDER,NEW ENGLAND,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY,NEW ENGLAND CLAM CHOWDER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,BF BROTH,BOUILLON,CONSOMME,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,OLD FASHIONED POTATO HAM CHOWDER",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,OLD FASHIONED VEG BF SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,ROADHOUSE - BF BEAN CHILI",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,SALISBURY STEAK MUSHRMS ONIONS SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,SAVORY CHICK WHITE WILD RICE SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,MINESTRONE,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,SAVORY POT RST SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,MUSHROOM BARLEY,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF MUSHROOM,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,MUSHROOM W/ BF STOCK,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF ONION,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,SAVORY VEG SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,OYSTER STEW,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,PEA,GRN,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,PEA,SPLIT W/ HAM,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF POTATO,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,GRILLED STEAK- STEAK CHILI W/ BNS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF SHRIMP,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,SLOW RSTD BF W/ MUSHROOMS SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,SPLIT PEA 'N' HAM SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,TOMATO BF W/ NOODLE,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,STEAK 'N' POTATO SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,TOMATO RICE,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,TURKEY NOODLE,CND,PREP W/ EQ VOLUME H2O",
    categories: [MEATS as category],
  },
  {
    name: "SOUP,TURKEY VEG,CND,PREP W/ EQ VOLUME H2O",
    categories: [MEATS as category],
  },
  {
    name: "SOUP,VEGETARIAN VEG,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S LO NA SOUPS,CHICK BROTH",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,VEG BF,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,VEG W/ BF BROTH,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BF BROTH OR BOUILLON,PDR,PREP W/H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BF BROTH,CUBED,PREP W/H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK BROTH OR BOUILLON,DRY,PREP W/ H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK BROTH CUBES,DRY,PREP W/ H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S LO NA SOUPS,CHICK W/ NOODLES SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF CHICK,DRY,MIX,PREP W/ H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S LO NA SOUPS,CRM OF MUSHROOM SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,ONION,DRY,MIX,PREP W/ H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE - MCRWVEABLE BOWLS,CHICK NOODLE SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,TOMATO,DRY,MIX,PREP W/ H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE - MICROWAVEABLE BOWLS,CHICK RICE SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE - MCRWVEABLE BOWLS,CREAMY TOMATO SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE - MICROWAVEABLE BOWLS,TOMATO SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE - MICROWAVEABLE BOWLS,VEG BF SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE BUTTERNUT SQUASH BISQUE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SOUP,CHICK NOODLE,DRY,MIX,PREP W/ H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE LT NEW ENGLAND CLAM CHOWDER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE HR MEXICAN STYLE CHICK TORTILLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE ITALIAN-STYLE WEDDING SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE MEXICAN STYLE CHICK TORTILLA SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE MINESTRONE SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE NEW ENGLAND CLAM CHOWDER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE POTATO BROCCOLI CHS SOUP",
    categories: [VEGGIES as category],
  },
  {
    name: "SOUP,BF MUSHROOM,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE CHICK W/ WHITE & WILD RICE SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK MUSHROOM,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,TOMATO BISQUE,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,TOMATO,CND,PREP W/EQ VOLUME H2O,COMM",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE VEG MEDLEY SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,RAMEN NOODLE,ANY FLAVOR,DRY",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BROCCOLI CHS,CND,COND,COMM",
    categories: [VEGGIES as category],
  },
  {
    name: "CAMPBELL'S SOUP ON THE GO,VEG W/ MINI RND NOODLES SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S SOUP ON THE GO,CHICK & STARS SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S SOUP ON THE GO,CHICK W/ MINI NOODLES SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S SOUP ON THE GO,CLASSIC TOMATO SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S SOUP ON THE GO,CREAMY BROCCOLI SOUP",
    categories: [VEGGIES as category],
  },
  {
    name: "CAMPBELL'S SOUP ON THE GO,CREAMY CHICK SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S SOUP ON THE GO,CREAMY TOMATO SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S SOUP ON THE GO,NEW ENGLAND CLAM CHOWDER",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S SOUP ON THE GO,VEG BF SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S SOUP ON THE GO,CHEESY POTATO W/ BACON FLAVOR SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "PACE,CHIPOTLE CHUNKY SALSA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,CILANTRO CHUNKY SALSA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,ENCHILADA SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,GRN TACO SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,LIME & GARLIC CHUNKY SALSA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,ORGANIC PICANTE SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,PICANTE SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,RED TACO SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,THICK & CHUNKY SALSA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWANSON BROTH,CERT ORGANIC VEG BROTH",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,SWANSON,BF BROTH,LOWER NA",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,SWANSON,VEG BROTH",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE LT ITALIAN-STYLE WEDDING SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SAUCE,PNUT,MADE FROM COCNT,H2O,SUGAR,PNUTS",
    categories: [SWEETS as category],
  },
  {
    name: "SMART SOUP,SANTA FE CORN CHOWDER",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SMART SOUP,FRENCH LENTIL",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SMART SOUP,GREEK MINESTRONE",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SMART SOUP,INDIAN BEAN MASALA",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SMART SOUP,MOROCCAN CHICK PEA",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SMART SOUP,THAI COCNT CURRY",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SMART SOUP,VIETNAMESE CARROT LEMONGRASS",
    categories: [VEGGIES as category],
  },
  {
    name: "SAUCE,PESTO,RTS,REFR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,PESTO,RTS,SHELF STABLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,PESTO,BUITONI,PESTO W/ BASIL,RTS,REFR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,PESTO,CLASSICO,BASIL PESTO,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,PESTO,MEZZETTA,NAPA VALLEY BISTRO,BASIL PESTO,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,HOT CHILE,SRIRACHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,HOT CHILE,SRIRACHA,CHA! BY TEXAS PETE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,HOT CHILE,SRIRACHA,TUONG OT SRIRACHA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,VEG BROTH,READY TO SERVE",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SAUCE,CHS SAU MIX,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,CHICK CORN CHOWDER,CHUNKY,RTS,SINGLE BRAND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK MUSHROOM CHOWDER,CHUNKY,RTS,SINGLE BRAND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,POTATO HAM CHOWDER,CHUNKY,RTS,SINGLE BRAND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,SIRLOIN BURGER W/VEG,RTS,SINGLE BRAND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,SPLIT PEA W/ HAM,CHUNKY,RED FAT,RED NA,RTS,SINGLE BRAND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BEAN W/BACON,COND,SINGLE BRAND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BF W/VEG&BARLEY,CND,COND,SINGLE BRAND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK W/STAR-SHAPED PASTA,CND,COND,SINGLE BRAND",
    categories: [GRAINS as category],
  },
  {
    name: "SOUP,CRM OF CHICK,CND,COND,SINGLE BRAND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,SPLIT PEA W/HAM&BACON,CND,COND,SINGLE BRAND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,VEG BF,CND,COND,SINGLE BRAND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK VEG,CHUNKY,RED FAT,RED NA,RTS,SINGLE BRAND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,VEG BF,MICROWAVABLE,RTS,SINGLE BRAND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,PROGRESSO,BF BARLEY,TRADITIONAL,READY TO SERVE",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BF & VEG,CND,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SAUCE,CHS,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,PASTA,SPAGHETTI/MARINARA,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,TRADITIONAL ITALIAN SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "SOUP,CRM OF CHICK,CND,COND,RED NA",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,TOMATO,CND,COND,RED NA",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "GRAVY,BROWN INST,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,INST BF,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,INST TURKEY,DRY",
    categories: [MEATS as category],
  },
  {
    name: "SAUCE,ALFREDO MIX,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,PEPPERS,HOT,CHILI,MATURE RED,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,CHILI,PEPPERS,HOT,IMMAT GRN,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH BROTH",
    categories: [SEAFOOD as category],
  },
  {
    name: "SOUP,TOMATO,LO NA,W/H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,PEA,LO NA,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK NOODLE,LO NA,CND,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,VEG SOUP,COND,LO NA,PREP W/ EQ VOLUME H2O",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CRM OF MUSHROOM,LO NA,RTS,CND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "POTATO SOUP,INST,DRY MIX",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK BROTH,LO NA,CND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SAUCE,WORCESTERSHIRE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,TOMATO CHILI SAU,BTLD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,VEG CHICK,CND,PREP W/ H2O,LO NA",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SAUCE,PASTA,SPAGHETTI/MARINARA,RTS,LO NA",
    categories: [GRAINS as category],
  },
  {
    name: "GRAVY,MEAT OR POULTRY,LO NA,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,BF & MUSHROOM,LO NA,CHUNK STYLE",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BF STROGANOFF,CND,CHUNKY STYLE,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BOUILLON CUBES&GRANULES,LO NA,DRY",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,RAMEN NOODLE,BF FLAVOR,DRY",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,RAMEN NOODLE,CHICK FLAVOR,DRY",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,SWANSON CHICK BROTH 99% FAT FREE",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "GRAVY,HEINZ HOME STYLE,SAVORY BF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S HEALTHY REQUEST,CHICK NOODLE SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "HEALTHY REQUEST,CRM OF CELERY,COND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S HEALTHY REQUEST,CRM OF MUSHROOM SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S HEALTHY REQUEST,HOMESTYLE CHICK NOODLE SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "HEALTHY REQUEST,MINESTRONE SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "HEALTHY REQUEST,TOMATO SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "HEALTHY REQUEST,VEG SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "PREGO PASTA,CHUNKY GARDEN COMB ITALIAN SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "PREGO PASTA,CHNKY GRDN TMTO,ON & GRLIC ITAL SAU,RTS",
    categories: [GRAINS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,AU JUS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,BF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,BROWN W/ ONIONS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAVY,CAMPBELL'S,CHICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BARBECUE LOAF,PORK,BEEF",
    categories: [MEATS as category],
  },
  {
    name: "BEERWURST,BEER SALAMI,PORK & BF",
    categories: [MEATS as category],
  },
  {
    name: "BEERWURST,BEER SALAMI,PORK",
    categories: [MEATS as category],
  },
  {
    name: "SAUSAGE  BERLINER  PORK  BF",
    categories: [MEATS as category],
  },
  {
    name: "BLOOD SAUSAGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BOCKWURST  PORK  VEAL  RAW",
    categories: [MEATS as category],
  },
  {
    name: "BOLOGNA,BF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BOLOGNA,BF & PORK",
    categories: [MEATS as category],
  },
  {
    name: "BOLOGNA,PORK",
    categories: [MEATS as category],
  },
  {
    name: "BOLOGNA  TURKEY",
    categories: [MEATS as category],
  },
  {
    name: "BRATWURST,PORK,CKD",
    categories: [MEATS as category],
  },
  {
    name: "BRAUNSCHWEIGER (A LIVER SAUSAGE),PORK",
    categories: [MEATS as category],
  },
  {
    name: "BROTWURST,PORK,BF,LINK",
    categories: [MEATS as category],
  },
  {
    name: "CHEESEFURTER,CHS SMOKIE,PORK,BF",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHICKEN SPRD",
    categories: [MEATS as category],
  },
  {
    name: "CHORIZO,PORK AND BEEF",
    categories: [MEATS as category],
  },
  {
    name: "CORNED BEEF LOAF,JELLIED",
    categories: [MEATS as category],
  },
  {
    name: "DUTCH BRAND LOAF,CHICK,PORK & BF",
    categories: [MEATS as category],
  },
  {
    name: "FRANKFURTER,BF,UNHTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRANKFURTER,CHICKEN",
    categories: [MEATS as category],
  },
  {
    name: "FRANKFURTER,TURKEY",
    categories: [MEATS as category],
  },
  {
    name: "HAM,CHOPPED,CANNED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HAM,CHOPPED,NOT CANNED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HAM,SLICED,PRE-PACKAGED,DELI MEAT (96%FAT FREE,H2O ADDED)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HAM,SLICED,REG (APPROX 11% FAT)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HAM,MINCED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HAM SALAD SPREAD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HAM&CHS LOAF OR ROLL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HAM AND CHEESE SPREAD",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "HEADCHEESE,PORK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SAUSAGE,ITALIAN,PORK,RAW",
    categories: [MEATS as category],
  },
  {
    name: "KNACKWURST  KNOCKWURST  PORK  BF",
    categories: [MEATS as category],
  },
  {
    name: "LEBANON BOLOGNA  BF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LIVER CHEESE,PORK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "LIVER SAUSAGE,LIVERWURST,PORK",
    categories: [MEATS as category],
  },
  {
    name: "ROAST BF,DELI STYLE,PREPACKAGED,SLICED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA CMDTY,LUNCHEON MEAT,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LUNCHEON MEAT,PORK,CANNED",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY BREAST,LO SALT,PREPACKAGED OR DELI,LUNCHEON MEAT",
    categories: [MEATS as category],
  },
  {
    name: "MORTADELLA,BEEF,PORK",
    categories: [MEATS as category],
  },
  {
    name: "OLIVE LOAF,PORK",
    categories: [MEATS as category],
  },
  {
    name: "PASTRAMI,TURKEY",
    categories: [MEATS as category],
  },
  {
    name: "PATE,CHICKEN LIVER,CANNED",
    categories: [MEATS as category],
  },
  {
    name: "PATE,GOOSE LIVER,SMOKED,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PATE,LIVER,NOT SPECIFIED,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERED LOAF  PORK  BF",
    categories: [MEATS as category],
  },
  {
    name: "PEPPERONI,BF & PORK,SLICED",
    categories: [MEATS as category],
  },
  {
    name: "PICKLE&PIMIENTO LOAF,PORK",
    categories: [MEATS as category],
  },
  {
    name: "POLISH SAUSAGE,PORK",
    categories: [MEATS as category],
  },
  {
    name: "LUXURY LOAF,PORK",
    categories: [MEATS as category],
  },
  {
    name: "MOTHER'S LOAF,PORK",
    categories: [MEATS as category],
  },
  {
    name: "PICNIC LOAF,PORK,BEEF",
    categories: [MEATS as category],
  },
  {
    name: "PORK SAUSAGE,LINK/PATTY,UNPREP",
    categories: [MEATS as category],
  },
  {
    name: "PORK SAUSAGE,LINK/PATTY,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "PORK&BF SAUSAGE,FRSH,CKD",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY SAUSAGE,RED FAT,BROWN&SERVE,CKD",
    categories: [MEATS as category],
  },
  {
    name: "POULTRY SALAD SNDWCH SPRD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAMI  CKD  BF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAMI,CKD,BF&PORK",
    categories: [MEATS as category],
  },
  {
    name: "SALAMI,COOKED,TURKEY",
    categories: [MEATS as category],
  },
  {
    name: "SALAMI,DRY OR HARD,PORK",
    categories: [MEATS as category],
  },
  {
    name: "SALAMI,DRY OR HARD,PORK,BF",
    categories: [MEATS as category],
  },
  {
    name: "SANDWICH SPREAD,PORK,BEEF",
    categories: [MEATS as category],
  },
  {
    name: "SMOKED LINK SAUSAGE,PORK",
    categories: [MEATS as category],
  },
  {
    name: "SAUSAGE,SMOKED LINK SAUSAGE,PORK & BF",
    categories: [MEATS as category],
  },
  {
    name: "SMOKED LINK SAUSAGE,PORK&BF,NONFAT DRY MILK",
    categories: [MEATS as category],
  },
  {
    name: "THURINGER,CERVELAT,SMMR SAUSAGE,BF,PORK",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY BREAST,SLICED,PREPACKAGED",
    categories: [MEATS as category],
  },
  {
    name: "SAUSAGE,VIENNA,CND,CHICK,BF,PORK",
    categories: [MEATS as category],
  },
  {
    name: "HONEY ROLL SAUSAGE,BEEF",
    categories: [MEATS as category],
  },
  {
    name: "SAUSAGE,ITALIAN,PORK,CKD",
    categories: [MEATS as category],
  },
  {
    name: "LUNCHEON SAUSAGE,PORK&BF",
    categories: [MEATS as category],
  },
  {
    name: "NEW ENGLAND BRAND SAUSAGE,PORK,BF",
    categories: [MEATS as category],
  },
  {
    name: "OSCAR MAYER,BOLOGNA (BEEF)",
    categories: [MEATS as category],
  },
  {
    name: "OSCAR MAYER,BRAUNSCHWEIGER LIVER SAUSAGE (SLICED)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSCAR MAYER  CHICKEN BREAST (HONEY GLAZED)",
    categories: [MEATS as category],
  },
  {
    name: "OSCAR MAYER,HAM (CHOPPED W/ NAT JUICE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSCAR MAYER,SALAMI (HARD)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OSCAR MAYER,SMOKIES SAUSAGE LITTLE CHS (PORK,TURKEY)",
    categories: [MEATS as category],
  },
  {
    name: "OSCAR MAYER,WIENERS (BEEF FRANKS)",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY BACON,UNPREP",
    categories: [MEATS as category],
  },
  {
    name: "HORMEL PILLOW PAK SLICED TURKEY PEPPERONI",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,PORK,&BF SAUSAGE,LOFAT,SMOKED",
    categories: [MEATS as category],
  },
  {
    name: "USDA COMMODITY,PORK,SAUSAGE,BULK/LINKS/PATTIES,FRZ,CKD",
    categories: [MEATS as category],
  },
  {
    name: "FRANKFURTER,BF,PORK,& TURKEY,FAT FREE",
    categories: [MEATS as category],
  },
  {
    name: "LUNCHEON MEAT,PORK,HAM,&CHICK,MINCD,CND,RED NA,VIT C, (SPAM)",
    categories: [MEATS as category],
  },
  {
    name: "USDA COMMODITY,PORK SAUSAGE,BULK/LINKS/PATTIES,FRZ,RAW",
    categories: [MEATS as category],
  },
  {
    name: "LUNCHEON MEAT,PORK W/HAM,MINCED,CND,INCL SPAM (HORMEL)",
    categories: [MEATS as category],
  },
  {
    name: "LUNCHEON MEAT,PORK&CHICK,MINCED,CND,INCL SPAM LITE",
    categories: [MEATS as category],
  },
  {
    name: "BRATWURST  VEAL  CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LIVERWURST SPRD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROAST BF SPRD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAMI  PORK  BF  LESS NA",
    categories: [MEATS as category],
  },
  {
    name: "SAUSAGE  ITALIAN  SWT  LINKS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUSAGE  POLISH  BF W/ CHICK  HOT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUSAGE  POLISH  PORK & BF  SMOKED",
    categories: [MEATS as category],
  },
  {
    name: "SAUSAGE  PORK & BF  W/ CHEDDAR CHS  SMOKED",
    categories: [MEATS as category],
  },
  {
    name: "SAUSAGE  SMMR  PORK & BF  STKS  W/ CHEDDAR CHS",
    categories: [MEATS as category],
  },
  {
    name: "SAUSAGE  TURKEY  BRKFST LINKS  MILD",
    categories: [MEATS as category],
  },
  {
    name: "SWISSWURST  PORK & BF  W/ SWISS CHS  SMOKED",
    categories: [MEATS as category],
  },
  {
    name: "BACON & BF STKS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BRATWURST  BF & PORK  SMOKED",
    categories: [MEATS as category],
  },
  {
    name: "BRATWURST,CHICK,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BRATWURST  PORK  BF & TURKEY  LITE  SMOKED",
    categories: [MEATS as category],
  },
  {
    name: "PASTRAMI  BF  98% FAT-FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAMI  ITALIAN  PORK",
    categories: [MEATS as category],
  },
  {
    name: "SAUSAGE  ITALIAN  TURKEY  SMOKED",
    categories: [MEATS as category],
  },
  {
    name: "SAUSAGE  CHICK  BF  PORK  SKINLESS  SMOKED",
    categories: [MEATS as category],
  },
  {
    name: "SAUSAGE  TURKEY  HOT  SMOKED",
    categories: [MEATS as category],
  },
  {
    name: "YACHTWURST,W/ PISTACHIO NUTS,CKD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEERWURST  PORK & BF",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN BREAST  FAT-FREE  MESQ FLAVOR  SLICED",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN BREAST  OVEN-ROASTED  FAT-FREE  SLICED",
    categories: [MEATS as category],
  },
  {
    name: "KIELBASA,POLISH,TURKEY & BF,SMOKED",
    categories: [MEATS as category],
  },
  {
    name: "OVEN-ROASTED CHICK BREAST ROLL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BOLOGNA  PORK & TURKEY  LITE",
    categories: [MEATS as category],
  },
  {
    name: "BOLOGNA  PORK  TURKEY & BF",
    categories: [MEATS as category],
  },
  {
    name: "HAM  HONEY  SMOKED  CKD",
    categories: [SWEETS as category],
  },
  {
    name: "FRANKFURTER,PORK",
    categories: [MEATS as category],
  },
  {
    name: "MACARONI & CHS LOAF  CHICK  PORK & BF",
    categories: [MEATS as category],
  },
  {
    name: "SALAMI  ITALIAN  PORK & BF  DRY  SLICED  50% LESS NA",
    categories: [MEATS as category],
  },
  {
    name: "PATE  TRUFFLE FLAVOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURKEY,BREAST,SMOKED,LEMON PEPPER FLAVOR,97% FAT-FREE",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY  WHITE  ROTISSERIE  DELI CUT",
    categories: [MEATS as category],
  },
  {
    name: "FRANKFURTER  BF  HTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRANKFURTER  MEAT  HTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRANKFURTER  MEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCRAPPLE,PORK",
    categories: [MEATS as category],
  },
  {
    name: "BOLOGNA,CHICK,TURKEY,PORK",
    categories: [MEATS as category],
  },
  {
    name: "PORK SAUSAGE,LINK/PATTY,FULLY CKD,MICROWAVED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF SAUSAGE,PRE-COOKED",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY SAUSAGE,FRSH,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF SAUSAGE,FRSH,CKD",
    categories: [MEATS as category],
  },
  {
    name: "PORK & TURKEY SAUSAGE,PRE-COOKED",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY SAUSAGE,FRSH,CKD",
    categories: [MEATS as category],
  },
  {
    name: "BOLOGNA,CHICK,PORK,BF",
    categories: [MEATS as category],
  },
  {
    name: "BOLOGNA,CHICK,PORK",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN BREAST,DELI,ROTISSERIE SEASONED,SLICED,PREPACKAGED",
    categories: [MEATS as category],
  },
  {
    name: "Frankfurter, meat and poultry, unheated",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Frankfurter, meat and poultry, cooked, boiled",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Frankfurter, meat and poultry, cooked, grilled",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PORK SAUSAGE,LINK/PATTY,RED FAT,UNPREP",
    categories: [MEATS as category],
  },
  {
    name: "PORK SAUSAGE,LINK/PATTY,RED FAT,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "PORK SAUSAGE,LINK/PATTY,FULLY CKD,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "KIELBASA,FULLY CKD,GRILLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KIELBASA,FULLY CKD,PAN-FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KIELBASA,FULLY CKD,UNHTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BOLOGNA,MEAT & POULTRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MEATBALLS,FRZ,ITALIAN STYLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURKEY BACON,MICROWAVED",
    categories: [MEATS as category],
  },
  {
    name: "BACON,TURKEY,LO NA",
    categories: [MEATS as category],
  },
  {
    name: "SAUSAGE,CHICK OR TURKEY,ITALIAN STYLE,LOWER NA",
    categories: [MEATS as category],
  },
  {
    name: "HAM,SMOKED,EX LN,LO NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PORK SAUSAGE,RED NA,CKD",
    categories: [MEATS as category],
  },
  {
    name: "SAUSAGE,PORK,TURKEY,& BF,RED NA",
    categories: [MEATS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S ALL-BRAN ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,ALPHA-BITS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S APPL JACKS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S ALL-BRAN BRAN BUDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,CAP'N CRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,CAP'N CRUNCH W/ CRUNCHBERRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,CAP'N CRUNCH'S PNUT BUTTER CRUNCH",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,CHEERIOS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S COCOA KRISPIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,COCOA PEBBLES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,COOKIE CRISP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,QUAKER CRUNCHY BRAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,CORN CHEX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S CORN FLAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S CRACKLIN' OAT BRAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,RALSTON CRISP RICE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S ALL-BRAN COMPLETE WHEAT FLAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST BRAN FLAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S FROOT LOOPS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S FRSTD MINI-WHEATS,BIG BITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S FRSTD RICE KRISPIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,FRUITY PEBBLES",
    categories: [FRUITS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,GOLDEN GRAHAMS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GRANOLA,HOMEMADE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,GRAPE-NUTS CRL",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS RTE,POST,GRAPE-NUTS FLAKES",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,HONEY NUT CHEERIOS",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,POST,HONEYCOMB CRL",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,KING VITAMAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,KIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,QUAKER OAT LIFE,PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,LUCKY CHARMS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,100% NAT GRANOLA,OATS,WHEAT & HONEY",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,HONEY NUT CHEX",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S PRODUCT 19",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,SWT CRUNCH/QUISP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S RAISIN BRAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST RAISIN BRAN CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,RICE CHEX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S RICE KRISPIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,QUAKER PUFFED RICE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S SPL K",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S CORN POPS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S FRSTD FLAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S HONEY SMACKS",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,POST,GOLDEN CRISP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,RALSTON TASTEEOS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,WHL GRAIN TOTAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,TRIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,HONEY NUT SHREDDED WHEAT",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,WHEAT CHEX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,CORN BURSTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,WHEAT GERM,TSTD,PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,SUN COUNTRY,KRETSCHMER HONEY CRUNCH WHEAT GERM",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,MULTI-GRAIN CHEERIOS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,WHEATIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CORN GRITS,WHITE,REG & QUICK,ENR,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CORN GRITS,WHITE,REG & QUICK,ENR,CKD W/ H2O,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,CORN GRITS,INST,PLN,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,CORN GRITS,INST,PLN,PREP,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,CORN GRITS,INST,CHEDDAR CHS FLAVOR,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,INST GRITS,COUNTRY BACON FLAVOR,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CRM OF RICE,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CRM OF RICE,CKD W/H2O,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CRM OF WHEAT,REG,10 MINUTE COOKING,DRY",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS,CRM OF WHEAT,REG (10 MINUTE),CKD W/ H2O,WO/ SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS,FARINA,ENR,ASSORTED BRANDS,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,FARINA,ENR,ASSORTED BRANDS,QUICK,CKD W/ H2O,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CREAM OF WHEAT,INST,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CREAM OF WHEAT,INST,PREP W/ H2O,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,FARINA,ENR,CKD W/ H2O,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,MALT-O-MEAL,ORIGINAL,PLN,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,OATS,REG & QUICK,NOT FORT,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,OATS,REG & QUICK,UNENR,CKD W/ H2O,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,OATS,INST,FORT,PLN,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,OATS,INST,FORT,PLN,PREP W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,INST OATMEAL,APPLS & CINN,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,OATS,INST,FORT,W/ CINN & SPICE,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,OATS,INST,FORT,W/ CINN & SPICE,PREP W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,INST OATMEAL,MAPLE & BROWN SUGAR,DRY",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS,OATS,INST,FORT,W/ RAISINS & SPICE,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,OATS,INST,FORT,W/ RAISINS & SPICE,PREP W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,MARSHMLLW MATEYS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,WHEATENA,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,WHEATENA,CKD W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,WHL WHEAT HOT NAT CRL,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,WHL WHEAT HOT NAT CRL,CKD W/ H2O,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,QUAKER PUFFED WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,SHREDDED WHEAT,ORIGINAL BIG BISCUIT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,SHREDDED WHEAT,ORIGINAL SPOON-SIZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,RICE,PUFFED,FORT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,WHEAT,PUFFED,FORT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CORN GRITS,YEL,REG & QUICK,ENR,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CORN GRITS,YEL,REG & QUICK,UNENR,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CORN GRITS,WHITE,REG & QUICK,ENR,CKD W/ H2O,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CORN GRITS,YEL,REG & QUICK,ENR,CKD W/ H2O,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CORN GRITS,YEL,REG,QUICK,ENR,CKD W/ H2O,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CREAM OF RICE,CKD W/ H2O,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CRM OF WHEAT,REG (10 MINUTE),CKD W/ H2O,W/ SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS,FARINA,UNENR,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,FARINA,ENR,CKD W/ H2O,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,MALT-O-MEAL,CHOC,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,OATS,REG & QUICK & INST,UNENR,CKD W/ H2O,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,WHEATENA,CKD W/ H2O,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,WHL WHEAT HOT NAT CRL,CKD W/ H2O,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S LOFAT GRANOLA WO/ RAISINS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,SHREDDED WHEAT,LIGHTLY FRSTD,SPOON-SIZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST SELECTS BLUEBERRY MORNING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,REESE'S PUFFS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,QUAKER MULTIGRAIN OATMEAL,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,OATMEAL CRISP,CRUNCHY ALMOND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,CHOCOLATE-FLAVORED FRSTD PUFFED CORN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,COCO-ROOS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,QUAKER OAT CINN LIFE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,HONEY GRAHAM OH!S",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,OATMEAL SQUARES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,OATMEAL SQUARES,CINN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,TSTD MULTIGRAIN CRISPS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,QUAKER GRANOLA W/ OATS,WHEAT& RAISINS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,LOFAT 100% NAT GRANOLA W/ RAISINS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,INST GRITS,BUTTER FLAVOR,DRY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CEREALS,QUAKER,INST OATMEAL,FRUIT & CRM VAR,DRY",
    categories: [FRUITS as category],
  },
  {
    name: "CEREALS,QUAKER,INST OATMEAL,RAISINS,DATES & WALNUTS,DRY",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS,QUAKER,OAT BRAN,QUAKER/MOTHER'S OAT BRAN,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QKR,OAT BRAN,PREP W/H2O,NO SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,BERRY BURST CHEERIOS,TRIPLE BERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,OAT BRAN,QKR,QKR/MOTHER'S OAT BRAN,PREP W/H2O,SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,HONEY NUT CLUSTERS",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,FIBER ONE BRAN CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,OATMEAL CRISP,HEARTY RAISIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,TOTAL RAISIN BRAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,QUAKER MULTIGRAIN OATMEAL,PREP W/H2O,NO SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,QUAKER MULTIGRAIN OATMEAL,PREP W/H2O,SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S CRISPIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,RAISIN NUT BRAN",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,BASIC 4",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,APPL CINN CHEERIOS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,FRSTD CHEERIOS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,FRANKENBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,COUNT CHOCULA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,COCOA PUFFS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,CINN TOAST CRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,BOO BERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,BERRY BERRY KIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,NATURE VALLEY LOFAT FRUIT GRANOLA",
    categories: [FRUITS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S LOFAT GRANOLA W/ RAISINS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S MUESLIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S RICE KRISPIES TREATS CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,HEALTH VALLEY,FIBER 7 FLAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,WAFFLE CRISP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S HONEY CRUNCH CORN FLAKES",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS,QUAKER,HOMINY GRITS,WHITE,QUICK,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,HOMINY GRITS,WHITE,REG,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S SMART START ANTIOXIDANTS CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S FRSTD MINI-WHEATS,BITE SIZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,COLOSSAL CRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,BERRY COLOSSAL CRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,CRISPY RICE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,TOOTIE FRUITIES",
    categories: [FRUITS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,MOTHER'S PNUT BUTTER BUMPERS CRL",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,MOTHER'S TSTD OAT BRAN CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,MOTHER'S CINN OAT CRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,MOTHER'S GRAHAM BUMPERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,MOTHER'S COCOA BUMPERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,SUN COUNTRY,KRETSCHMER TSTD WHEAT BRAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,SHREDDED WHEAT,BAGGED CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,SUN COUNTRY,KRETSCHMER WHEAT GERM,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,RICE CRUNCHINS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S MARSHMLLW FROOT LOOPS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S,RAISIN BRAN CRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S SPL K RED BERRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S MINI-WHEATS,UNFROSTED BITE SZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI GOLEAN CRUNCH!",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI HEART TO HEART,HONEY TSTD OAT",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KASHI 7 WHL GRAIN PUFFS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI 7 WHL GRAIN HONEY PUFFS",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KASHI GOOD FRIENDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI GOLEAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,QUICK OATS,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,FRSTD FLAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,INST OATMEAL,CINNAMON-SPICE,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,INST OATMEAL,DINOSAUR EGGS,BROWN SUGAR,DRY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CEREALS,QUAKER,INST OATMEAL,BANANA BREAD,DRY",
    categories: [FRUITS as category],
  },
  {
    name: "CEREALS RTE,UNCLE SAM CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,INST OATMEAL,RAISIN & SPICE,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,INST GRITS,REDEYE GRVY COUNTRY HAM FLAVOR,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,INST GRITS PRODUCT W/ AMERICAN CHS FLAVOR,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,INST GRITS,HAM 'N' CHS FLAVOR,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,QUICK OATS W/ IRON,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,WHL WHEAT NAT CRL,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S SPL K CHOCOLATEY STRAWBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLG'S,FRSTD MINI-WHTS,MPLE & BRWN SGR,BTE SZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI,ORGANIC PROMISE AUTUMN WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI ORGANIC PROMISE,STRAWBERRY FIELDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S,RED SUGAR FRSTD FLAKES CRL",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S,SPL K PROT PLUS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,HONEY BUZZERS",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,GOLDEN PUFFS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,HONEY GRAHAM SQUARES",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,RAISIN BRAN CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,BLUEBERRY MUFFIN TOPS CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,MALT-O-MEAL,FARINA HOT WHEAT CRL,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,MALT-O-MEAL,MAPLE & BROWN SUGAR HOT WHEAT CRL,DRY",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,MOM'S BEST,HONEY NUT TOASTY O'S",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,APPL ZINGS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,CINN TOASTERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,COCOA DYNO-BITES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,FRSTD MINI SPOONERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,FRUITY DYNO-BITES",
    categories: [FRUITS as category],
  },
  {
    name: "CEREALS RTE,RALSTON ENR WHEAT BRAN FLAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,RALSTON CORN BISCUITS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,RALSTON CORN FLAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,RALSTON CRISPY HEXAGONS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,USDA CMDTY CORN & RICE (INCLUDES ALL  BRANDS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,USDA CMDTY RICE CRISPS (INCLUDES ALL  BRANDS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK & CRL BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,MALT-O-MEAL,ORIGINAL,PLN,PREP W/ H2O,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,MALT-O-MEAL,CHOC,PREP W/ H2O,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,CHOC LUCKY CHARMS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,SPL K,FRUIT & YOGURT",
    categories: [FRUITS as category],
  },
  {
    name: "CEREALS RTE,KASHI 7 WHL GRAIN FLAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI,HEART TO HEART,OAT FLAKES & BLUEBRY CLSTRS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI ORGANIC PROMISE,CINN HARVEST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S,FRSTD MINI-WHEATS BITE SIZE STRAWB DEL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S,SPL K VANILLA ALMOND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST GREAT GRAINS CRANBERRY ALMOND CRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE & WHEAT CRL BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,QUAKER HONEY GRAHAM LIFE CRL",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,CHRISTMAS CRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,CHEERIOS,YOGURT BURST,STRAWBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST SELECTS MAPLE PECAN CRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI GO LN CRUNCH!,HONEY ALMOND FLAX",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS,KASHI GO LN HOT CRL,HEARTY HONEY & CINN,DRY",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS,KASHI GO LN HOT CRL,CREAMY TRULY VANILLA,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI 7 WHL GRAIN NUGGETS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,KASHI HEART TO HEART,INST OATMEAL,APPL CINN,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,KASHI HEART TO HEART,INST OATMEAL,GLDN BRWN MPLE,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,NATURE'S PATH,ORGANIC FLAX PLUS,PUMPKIN GRANOLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CRM OF WHEAT,2 1/2 MINUTE COOK TIME,DRY",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS,CRM OF WHT,2 1/2 MIN CK,CKD W/H2O,STOVE-TOP,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CRM OF WHT,2 1/2 MIN COOK TIME,CKD W/H2O,MW,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,CRM OF WHEAT,1 MINUTE COOK TIME,DRY",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS,CRM OF WHEAT,1 MINUTE,CKD W/ H2O,STOVE-TOP,WO/ SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS,CRM OF WHEAT,1 MINUTE,CKD W/ H2O,MICROWAVED,WO/ SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,25% LESS SUGAR CINN TOAST CRUNCH",
    categories: [SWEETS as category],
  },
  {
    name: "INCAPARINA,DRY MIX (CORN & SOY FLOURS),UNPREP",
    categories: [GRAINS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,DORA THE EXPLORER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,FRUITY CHEERIOS",
    categories: [FRUITS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S SPL K CHOCOLATEY DELIGHT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,25% LESS SUGAR TRIX",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S SPL K LOFAT GRANOLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S CINNABON CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI GOLEAN CRISP TSTD BERRY CRUMBLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI HEART TO HEART,WARM CINN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI ORGANIC PROMISE,ISLAND VANILLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,CHEERIOS,BANANA NUT",
    categories: [FRUITS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,CHEERIOS,CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,CHOC CHEX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,CINN CHEX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,FIBER ONE,CARAMEL DELIGHT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,FIBER ONE,HONEY CLUSTERS",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,FIBER ONE,RAISIN BRAN CLUSTERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S SPL K,CINN PECAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S SPL K BLUEBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI BERRY BLOSSOM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI HONEY SUNSHINE",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S SPL K MULTIGRAIN OATS & HONEY",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S CRUNCHY NUT GOLDEN HONEY NUT FLAKES",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S FRSTD MINI-WHEATS BITE SZ BLUEB MUFFIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,CAP'N CRUNCH'S HALLOWEEN CRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,NAT GRANOLA APPL CRANBERRY ALMOND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,MAPLE BROWN SUGAR LIFE CRL",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,QUAKER,CAP'N CRUNCH'S OOPS! ALL BERRIES CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S FRSTD MINI-WHEATS LITTLE BITES,CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,QUAKER OATMEAL SQUARES,GOLDEN MAPLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,HONEY BUNCHES OF OATS W/ VANILLA BUNCHES",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,PNUT BUTTER TOAST CRUNCH",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,COCOA PUFFS,25% RED SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,OAT CLUSTER CHEERIOS CRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,INST OATMEAL,CINN SPICE,RED SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS,QUAKER,INST OATMEAL ORGANIC,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,INST OATMEAL,FRUIT & CRM,RED SUGAR",
    categories: [FRUITS as category],
  },
  {
    name: "CEREALS,QUAKER,INST OATMEAL,APPL & CINN,RED SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,HONEY KIX",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KASHI INDIGO MORNING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI SIMPLY MAIZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI GOLEAN CRISP CINN CRUMBLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,FIBER ONE 80 CAL,HONEY SQUARES",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S KRAVE CHOC CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S RICE KRISPIES,GLUTEN FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,HONEY BUNCHES OF OATS,PECAN BUNCHES",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,NATURE'S PATH,ORGANIC FLAX PLUS FLAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,BARBARA'S PUFFINS,ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S KRAVE DOUBLE CHOC CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S FRSTD FLAKES,CHOCO ZUCARITAS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S APPL JACKS W/ MARSHMALLOWS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S CINN JACKS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,HONEY BUNCHES OF OATS,W/ REAL STRAWBERRIES",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KASHI ORGANIC PROMISE,BERRY FRUITFUL",
    categories: [FRUITS as category],
  },
  {
    name: "CEREALS RTE,POST HONEY BUNCHES OF OATS W/ CINN BUNCHES",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,CINN BURST CHEERIOS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,FIBER ONE,NUTTY CLUSTERS & ALMONDS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,FIBER ONE 80 CAL,CHOC SQUARES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,HONEY NUT CHEERIOS,MEDLEY CRUNCH",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,DULCE DE LECHE CHEERIOS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,CHOC MARSHMLLW MATEYS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,RTE,MALT-O-MEAL,BLUEBERRY MINI SPOONERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,OAT BLENDERS W/ HONEY",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,OAT BLENDERS W/ HONEY & ALMONDS",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,MALT-O-MEAL,HONEY NUT SCOOTERS",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S FRSTD MINI-WHEATS TOUCH FRUIT MDL,RASP",
    categories: [FRUITS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,APPL CINN CHEX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,FRSTD TOAST CRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,OATS,INST,FORT,MAPLE & BROWN SUGAR,DRY",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,CASCADIAN FARM,CINN CRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,GENERAL MILLS,MULTI GRAIN CHEERIOS,PNUT BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CEREALS RTE,CASCADIAN FARM,MULTI-GRAIN SQUARES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,CASCADIAN FARM,HONEY NUT O'S",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,QUAKER WHL HEARTS OAT CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,WT CONTROL INST OATMEAL,MAPLE & BROWN SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS,QUAKER,WEIGHT CONTROL INST OATMEAL,BANANA BREAD",
    categories: [FRUITS as category],
  },
  {
    name: "CEREALS,QUAKER,INST OATMEAL,CINN SWIRL,HI FIBER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,OATMEAL,REAL MEDLEYS,BLUEBERRY HAZELNUT,DRY",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS,QUAKER,OATMEAL,REAL MEDLEYS,APPL WALNUT,DRY",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS,QUAKER,OATMEAL,REAL MEDLEYS,SMMR BERRY,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,OATMEAL,REAL MEDLEYS,PEACH ALMOND,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,OATMEAL,REAL MEDLEYS,CHERRY PISTACHIO,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,QUAKER,INST OATMEAL,WEIGHT CONTROL,CINN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S FRSTD MINI-WHEATS,LITTLE BITES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S RAISIN BRAN,CINN ALMOND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KASHI ORGANIC PROMISE,RAISIN VINEYARD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S KRAVE SMORES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG RAISIN BRAN W/ OMEGA-3 FROM FLAXSEED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S SPL K MULTI-GRAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,KELLOGG'S SPL K NOURISH,CINN RAISIN PECAN,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,KELLOGG'S SPL K NOURISH,CRANBERRY ALMOND,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS,KELLOGG'S SPL K NOURISH,MAPLE BROWN SUGAR CRUNCH,DRY",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KASHI GOLEAN VANILLA GRAHAM CLUSTERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG SCOOBY-DOO! CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S SPL K CHOC ALMOND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S FRSTD MINI-WHTS TCH FRT IN MDLE,RASN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,MOM'S BEST,SWTND WHEAT-FULS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S,SPL K GLUTEN FREE,TOUCH OF BROWN SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG'S,SPL K PROT,CINN BROWN SUGAR CRUNCH",
    categories: [SWEETS as category],
  },
  {
    name: "CEREALS RTE,KELLOGG,KELLOGG'S RAISIN BRAN W/ CRANBERRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ACEROLA,(WEST INDIAN CHERRY),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ACEROLA JUICE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APPLES,RAW,WITH SKIN",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,RAW,WITHOUT SKIN",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,RAW,WO/SKN,CKD,BLD",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,RAW,WO/ SKN,CKD,MICROWAVE",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,CND,SWTND,SLICED,DRND,UNHTD",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,CND,SWTND,SLICED,DRND,HTD",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,DEHYD (LO MOIST),SULFURED,UNCKD",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,DEHYD (LO MOIST),SULFURED,STWD",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,DRIED,SULFURED,UNCKD",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,DRIED,SULFURED,STWD,WO/ SUGAR",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,DRIED,SULFURED,STWD,W/ SUGAR",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,FRZ,UNSWTND,UNHTD",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,FRZ,UNSWTND,HTD",
    categories: [FRUITS as category],
  },
  {
    name: "APPLE JUC,CND OR BTLD,UNSWTND,WO/ ADDED VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "APPLE JUC,FRZ CONC,UNSWTND,UNDIL,WO/ VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "APPLE JUC,FRZ CONC,UNSWTND,DIL W/3 VOLUME H2O WO/ VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "APPLESAUCE,CND,UNSWTND,WO/ADDED VIT C (INCLUDES USDA COMMOD)",
    categories: [FRUITS as category],
  },
  {
    name: "APPLESAUCE,CND,SWTND,WO/ SALT (INCLUDES USDA COMMODITY)",
    categories: [FRUITS as category],
  },
  {
    name: "APRICOTS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APRICOTS,CND,H2O PK,W/SKN,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APRICOTS,CND,H2O PK,WO/SKN,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APRICOTS,CND,JUC PK,W/SKN,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APRICOTS,CND,EX LT SYRUP PK,W/SKN,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APRICOTS,CND,LT SYRUP PK,W/SKN,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APRICOTS,CND,HVY SYRUP PK,W/SKN,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APRICOTS,CND,HVY SYRUP PK,WO/SKN,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APRICOTS,CND,EX HVY SYRUP PK,WO/SKN,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APRICOTS,DEHYD (LOW-MOISTURE),SULFURED,UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APRICOTS,DEHYD (LOW-MOISTURE),SULFURED,STWD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APRICOTS,DRIED,SULFURED,UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APRICOTS,DRIED,SULFURED,STWD,WO/ SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "APRICOTS,DRIED,SULFURED,STWD,W/ SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "APRICOTS,FROZEN,SWEETENED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APRICOT NECTAR,CND,WO/ VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AVOCADOS,RAW,ALL COMM VAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AVOCADOS,RAW,CALIFORNIA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AVOCADOS,RAW,FLORIDA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BANANAS,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "BANANAS,DEHYD,OR BANANA PDR",
    categories: [FRUITS as category],
  },
  {
    name: "BLACKBERRIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BLACKBERRY JUC,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,TART,DRIED,SWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BLACKBERRIES,CND,HVY SYRUP,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BLACKBERRIES,FRZ,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BLUEBERRIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BLUEBERRIES,CND,HVY SYRUP,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BLUEBERRIES,WILD,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BLUEBERRIES,FRZ,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BLUEBERRIES,FRZ,SWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BOYSENBERRIES,CND,HVY SYRUP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BOYSENBERRIES,FRZ,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREADFRUIT,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "CARAMBOLA,(STARFRUIT),RAW",
    categories: [FRUITS as category],
  },
  {
    name: "CARISSA,(NATAL-PLUM),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERIMOYA,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SOUR,RED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SOUR,RED,CND,H2O PK,SOL&LIQUIDS (INCL USDA CMDTY)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SOUR,RED,CND,LT SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SOUR,RED,CND,HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SOUR,RED,CND,EX HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SOUR,RED,FRZ,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SWEET,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SWT,CND,H2O PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SWT,CND,JUC PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SWT,CND,LT SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SWT,CND,PITTED,HVY SYRUP PK,SOL & LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SWT,CND,EX HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SWT,FRZ,SWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRABAPPLES,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "CRANBERRIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRANBERRIES,DRIED,SWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRANBERRY SAU,CND,SWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRANBERRY-ORANGE RELISH,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CURRANTS,EUROPEAN BLACK,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CURRANTS,RED&WHITE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CURRANTS,ZANTE,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CUSTARD-APPLE,(BULLOCK'S-HEART),RAW",
    categories: [FRUITS as category],
  },
  {
    name: "DATES,DEGLET NOOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ELDERBERRIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FIGS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FIGS,CND,H2O PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FIGS,CND,LT SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FIGS,CND,HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FIGS,CND,EX HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FIGS,DRIED,UNCOOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FIGS,DRIED,STEWED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRUIT COCKTAIL,CND,H2O PK,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT COCKTAIL,CND,JUC PK,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT COCKTAIL,CND,EX LT SYRUP,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT COCKTAIL,CND,LT SYRUP,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT COCKTAIL,CND,HVY SYRUP,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT COCKTAIL,CND,EX HVY SYRUP,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT SALAD,CND,H2O PK,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT SALAD,CND,JUC PK,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT SALAD,CND,LT SYRUP,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT SALAD,CND,HVY SYRUP,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT SALAD,CND,EX HVY SYRUP,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "GOOSEBERRIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GOOSEBERRIES,CND,LT SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GOJI BERRIES,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAPEFRUIT,RAW,PINK&RED&WHITE,ALL AREAS",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT,RAW,PINK&RED,ALL AREAS",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT,RAW,PINK&RED,CALIFORNIA&ARIZONA",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT,RAW,PINK & RED,FLORIDA",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT,RAW,WHITE,ALL AREAS",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT,RAW,WHITE,CALIFORNIA",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT,RAW,WHITE,FLORIDA",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT,SECTIONS,CND,H2O PK,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT,SECTIONS,CND,JUC PK,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT,SECTIONS,CND,LT SYRUP PK,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT JUC,WHITE,CND OR BTLD,UNSWTND",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT JUC,WHITE,CND,SWTND",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT JUC,WHITE,FRZ CONC,UNSWTND,UNDIL",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT JUC,WHITE,FRZ CONC,UNSWTND,DIL W/ 3 VOLUME H2O",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT JUC,PINK OR RED,W/ ADDED CA",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPEFRUIT JUC,WHITE,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "Grapes, muscadine, raw",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAPE JUC,CND OR BTLD,UNSWTND,W/ ADDED VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAPES,AMERICAN TYPE (SLIP SKN),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAPES,RED OR GRN (EURO TYPE,SUCH AS THOMPSON SEEDLESS),RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "GRAPES,CND,THOMPSON SEEDLESS,H2O PK,SOL&LIQUIDS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "GRAPES,CND,THOMPSON SEEDLESS,HVY SYRUP PK,SOL&LIQUIDS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "GRAPE JUC,CND OR BTLD,UNSWTND,WO/ ADDED VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GROUNDCHERRIES,(CAPE-GOOSEBERRIES OR POHA),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GUAVAS,COMMON,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GUAVAS,STRAWBERRY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GUAVA SAUCE,COOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "JACKFRUIT,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "JAVA-PLUM,(JAMBOLAN),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "JUJUBE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "JUJUBE,CHINESE,FRSH,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KIWIFRUIT,GRN,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "KUMQUATS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEMONS,RAW,WITHOUT PEEL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEMON JUICE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEMON JUC FROM CONC,CND OR BTLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEMON JUC,FRZ,UNSWTND,SINGLE STRENGTH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEMON PEEL,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LIMES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LIME JUICE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LIME JUC,CND OR BTLD,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BLUEBERRIES,DRIED,SWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LITCHIS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LITCHIS,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LOGANBERRIES,FROZEN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LONGANS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LONGANS,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LOQUATS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MAMMY-APPLE,(MAMEY),RAW",
    categories: [FRUITS as category],
  },
  {
    name: "MANGOS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MANGOSTEEN,CND,SYRUP PK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MANGO,DRIED,SWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MELONS,CANTALOUPE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MELONS,CASABA,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MELONS,HONEYDEW,RAW",
    categories: [SWEETS as category],
  },
  {
    name: "MELON BALLS,FROZEN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MULBERRIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NECTARINES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OHELOBERRIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OLIVES,RIPE,CND (SMALL-EXTRA LRG)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OLIVES,RIPE,CND (JUMBO-SUPER COLOSSAL)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OLIVES,PICKLED,CND OR BTLD,GRN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGES,RAW,ALL COMM VAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGES,RAW,CALIFORNIA,VALENCIAS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGES,RAW,NAVELS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGES,RAW,FLORIDA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGES,RAW,WITH PEEL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGE JUICE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGE JUC,CND,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGE JUC,CHILLED,INCL FROM CONC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGE JUC,CHILLED,INCL FROM CONC,W/ ADDED CA & VITAMIN D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGE JUC,CHILLED,INCL FROM CONC,W/ ADDED CA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGE JUC,FRZ CONC,UNSWTND,DIL W/ 3 VOLUME H2O,W/ ADDED CA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGE JUC,FRZ CONC,UNSWTND,UNDIL,W/ ADDED CA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGE JUC,FRZ CONC,UNSWTND,UNDIL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGE JUC,FRZ CONC,UNSWTND,DIL W/3 VOLUME H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGE PEEL,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGE-GRAPEFRUIT JUC,CND OR BTLD,UNSWTND",
    categories: [FRUITS as category],
  },
  {
    name: "TANGERINES,(MANDARIN ORANGES),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TANGERINES,(MANDARIN ORANGES),CND,JUC PK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TANGERINES,(MANDARIN ORANGES),CND,LT SYRUP PK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TANGERINE JUICE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TANGERINE JUC,CND,SWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PAPAYAS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PAPAYA,CND,HVY SYRUP,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PAPAYA NECTAR,CANNED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PASSION-FRUIT,(GRANADILLA),PURPLE,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "PASSION-FRUIT JUC,PURPLE,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "PASSION-FRUIT JUC,YEL,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "PEACHES,YEL,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEACHES,CND,H2O PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEACHES,CND,JUC PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEACHES,CND,EX LT SYRUP,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEACHES,CND,LT SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEACHES,CND,HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEACHES,CND,EX HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEACHES,SPICED,CND,HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEACHES,DEHYD (LOW-MOISTURE),SULFURED,UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEACHES,DEHYD (LOW-MOISTURE),SULFURED,STWD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEACHES,DRIED,SULFURED,UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEACHES,DRIED,SULFURED,STWD,WO/ SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "PEACHES,DRIED,SULFURED,STWD,W/ SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "PEACHES,FRZ,SLICED,SWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEACH NECTAR,CND,WO/ VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEARS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEARS,CND,H2O PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEARS,CND,JUC PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEARS,CND,EX LT SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEARS,CND,LT SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEARS,CND,HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEARS,CND,EX HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEARS,DRIED,SULFURED,UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEARS,DRIED,SULFURED,STWD,WO/ SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "PEARS,DRIED,SULFURED,STWD,W/ SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "PEAR NECTAR,CND,WO/ VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PERSIMMONS,JAPANESE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PERSIMMONS,JAPANESE,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PERSIMMONS,NATIVE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PINEAPPLE,RAW,ALL VAR",
    categories: [FRUITS as category],
  },
  {
    name: "PINEAPPLE,CND,H2O PK,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "PINEAPPLE,CND,JUC PK,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "PINEAPPLE,CND,LT SYRUP PK,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "PINEAPPLE,CND,HVY SYRUP PK,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "PINEAPPLE,CND,EX HVY SYRUP PK,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "PINEAPPLE,FRZ,CHUNKS,SWTND",
    categories: [FRUITS as category],
  },
  {
    name: "PINEAPPLE JUC,CND OR BTLD,UNSWTND,WO/ ADDED VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "PINEAPPLE JUC,FRZ CONC,UNSWTND,UNDIL",
    categories: [FRUITS as category],
  },
  {
    name: "PINEAPPLE JUC,FRZ CONC,UNSWTND,DIL W/3 VOLUME H2O",
    categories: [FRUITS as category],
  },
  {
    name: "PITANGA,(SURINAM-CHERRY),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PLANTAINS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PLANTAINS,COOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PLUMS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PLUMS,CND,PURPLE,H2O PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PLUMS,CND,PURPLE,JUC PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PLUMS,CND,PURPLE,LT SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PLUMS,CND,PURPLE,HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PLUMS,CND,PURPLE,EX HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POMEGRANATES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PRICKLY PEARS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PRUNES,CND,HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PRUNES,DEHYD (LOW-MOISTURE),UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PRUNES,DEHYD (LOW-MOISTURE),STWD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PLUMS,DRIED (PRUNES),UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PLUMS,DRIED (PRUNES),STWD,WO/ ADDED SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "PLUMS,DRIED (PRUNES),STWD,W/ ADDED SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "PRUNE JUICE,CANNED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMMELO,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "QUINCES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RAISINS,GOLDEN SEEDLESS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "RAISINS,SEEDLESS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "RAISINS,SEEDED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "RAMBUTAN,CND,SYRUP PK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RASPBERRIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RASPBERRIES,CND,RED,HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RASPBERRIES,FRZ,RED,SWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RHUBARB,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RHUBARB,FROZEN,UNCOOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RHUBARB,FRZ,CKD,W/SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "ROSELLE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROSE-APPLES,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "SAPODILLA,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAPOTE,MAMEY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOURSOP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STRAWBERRIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STRAWBERRIES,CND,HVY SYRUP PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STRAWBERRIES,FRZ,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STRAWBERRIES,FRZ,SWTND,WHL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STRAWBERRIES,FRZ,SWTND,SLICED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUGAR-APPLES,(SWEETSOP),RAW",
    categories: [FRUITS as category],
  },
  {
    name: "TAMARINDS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRUIT SALAD,TROPICAL,CND,HVY SYRUP,SOL&LIQUIDS",
    categories: [FRUITS as category],
  },
  {
    name: "WATERMELON,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARASCHINO CHERRIES,CND,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FEIJOA,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEARS,ASIAN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRUIT COCKTAIL,CND,HVY SYRUP,DRND",
    categories: [FRUITS as category],
  },
  {
    name: "BLUEBERRIES,CND,LT SYRUP,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BLUEBERRIES,WILD,CND,HVY SYRUP,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PINEAPPLE,CND,JUC PK,DRND",
    categories: [FRUITS as category],
  },
  {
    name: "APRICOTS,CND,HVY SYRUP,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SOUR,CND,H2O PK,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHERRIES,SWT,CND,PITTED,HVY SYRUP,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEACHES,CND,HVY SYRUP,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEARS,CND,HVY SYRUP,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PLUMS,CND,HVY SYRUP,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TANGERINES,(MANDARIN ORANGES),CND,JUC PK,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APPLE JUC,CND OR BTLD,UNSWTND,W/ ADDED VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "APPLESAUCE,CND,UNSWTND,W/ VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "APPLESAUCE,CND,SWTND,W/SALT",
    categories: [FRUITS as category],
  },
  {
    name: "APRICOT NECTAR,CND,W/ VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAPEFRUIT JUICE,PINK,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "PEACH NECTAR,CND,W/ VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAR NECTAR,CND,W/ VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PINEAPPLE JUC,CND OR BTLD,UNSWTND,W/ ADDED VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "APPLE JUC,FRZ CONC,UNSWTND,UNDIL,W/ VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "APPLE JUC,FRZ CONC,UNSWTND,DIL W/3 VOLUME H2O,W/ VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "PEARS,RAW,BARTLETT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEARS,RAW,RED ANJOU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEARS,RAW,BOSC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEARS,RAW,GRN ANJOU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAPEFRUIT JUC,WHITE,BTLD,UNSWTND,OCEAN SPRAY",
    categories: [FRUITS as category],
  },
  {
    name: "JACKFRUIT,CND,SYRUP PK",
    categories: [FRUITS as category],
  },
  {
    name: "DATES,MEDJOOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DURIAN,RAW OR FROZEN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PRUNE PUREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIED FRUIT",
    categories: [FRUITS as category],
  },
  {
    name: "ABIYUCH,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROWAL,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PINEAPPLE,RAW,TRADITIONAL VAR",
    categories: [FRUITS as category],
  },
  {
    name: "PINEAPPLE,RAW,EX SWT VAR",
    categories: [FRUITS as category],
  },
  {
    name: "USDA CMDTY,MXD FRUIT (PEACH,PEARS,GRAPES),CND,LT SYRUP,DRND",
    categories: [FRUITS as category],
  },
  {
    name: "USDA CMDTY,MXD FRUIT (PEACH,PEAR,GRAPE),CND,LT SYR,SOL & LIQ",
    categories: [FRUITS as category],
  },
  {
    name: "CLEMENTINES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GUANABANA NECTAR,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GUAVA NECTAR,CND,W/ ADDED VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MANGO NECTAR,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TAMARIND NECTAR,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA CMDTY PEACHES,CND,LT SYRUP,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA CMDTY PEARS,CND,JUC PK,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA CMDTY PEARS,CND,LT SYRUP,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POMEGRANATE JUC,BTLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "JUICE,APPL & GRAPE BLEND,W/ ADDED VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "JUICE,APPL,GRAPE & PEAR BLEND,W/ ADDED VIT C & CA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PLANTAINS,GRN,FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PLANTAINS,YEL,FRIED,LATINO RESTAURANT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NANCE,CND,SYRUP,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NANCE,FRZ,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NARANJILLA (LULO) PULP,FRZ,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HORNED MELON (KIWANO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ORANGE PNAPPL JUC BLEND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APPLES,RAW,RED DELICIOUS,W/ SKN",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,RAW,GOLDEN DELICIOUS,W/ SKN",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,RAW,GRANNY SMITH,W/ SKN",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,RAW,GALA,W/ SKN",
    categories: [FRUITS as category],
  },
  {
    name: "APPLES,RAW,FUJI,W/ SKN",
    categories: [FRUITS as category],
  },
  {
    name: "ORANGE JUC,CHILLED,INCL FROM CONC,W/ ADD CA & VITAMINS A,D,E",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRUIT JUC SMOOTHIE,NAKED JUC,MIGHTY MANGO",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT JUC SMOOTHIE,NAKED JUC,GRN MACHINE",
    categories: [FRUITS as category],
  },
  {
    name: "PINEAPPLE JUC,CND,NOT FROM CONC,UNSWTND,W/ ADD VIT A,C & E",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT JUC SMOOTHIE,NAKED JUC,BLUE MACHINE",
    categories: [FRUITS as category],
  },
  {
    name: "GRAPE JUC,CND OR BTLD,UNSWTND,W/ ADDED VIT C & CA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRUIT JUC SMOOTHIE,ODWALLA,ORIGINAL SUPERFOOD",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT JUC SMOOTHIE,BOLTHOUSE FARMS,BERRY BOOST",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT JUC SMOOTHIE,BOLTHOUSE FARMS,GRN GOODNESS",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT JUC SMOOTHIE,BOLTHOUSE FARMS,STRAWBERRY BANANA",
    categories: [FRUITS as category],
  },
  {
    name: "APPLE JUC,CND OR BTLD,UNSWTND,W/ ADDED VIT C,CA,& K",
    categories: [FRUITS as category],
  },
  {
    name: "RASPBERRIES,FRZ,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GUAVA NECTAR,W/ SUCRALOSE,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KIWIFRUIT,ZESPRI SUNGOLD,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "CRANBERRY JUC BLEND,100% JUC,BTLD,W/ ADDED VIT C & CA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEMON JUC FROM CONC,BTLD,CONCORD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEMON JUC FROM CONC,BTLD,REAL LEMON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRANBERRY SAU,WHL,CND,OCEAN SPRAY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRANBERRY SAU,JELLIED,CND,OCEAN SPRAY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RUBY RED GRPFRT JUC BLND (GRPFRT,GRP,APL),OCEAN SPRY,W/VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRUIT JUC SMOOTHIE,ODWALLA,STRAWBERRY BANANA",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT JUC SMOOTHIE,NAKED JUC,STRAWBERRY BANANA",
    categories: [FRUITS as category],
  },
  {
    name: "PORK,FRSH,COMP OF FAT,W/ ADDED SOLN,CKD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,CARCASS,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,COMP OF RTL CUTS (LEG,LOIN,SHLDR),LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,COMP OF LEG,LOIN,SHLDR,& SPARERIBS,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRESH,BACKFAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,BELLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,FAT,CKD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LEG (HAM),WHL,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LEG (HAM),WHL,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LEG (HAM),WHL,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LEG (HAM),WHL,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LEG (HAM),RUMP HALF,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LEG (HAM),RUMP HALF,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LEG (HAM),RUMP HALF,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LEG (HAM),RUMP HALF,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LEG (HAM),SHANK HALF,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LEG (HAM),SHANK HALF,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LEG (HAM),SHANK HALF,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LEG (HAM),SHANK HALF,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,WHL,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,WHL,LN&FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,WHL,LN&FAT,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,WHL,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,WHL,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,WHL,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,WHL,LN,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,WHL,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLADE (CHOPS OR ROASTS),BONE-IN,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLADE (CHOPS),BONE-IN,LN&FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLADE (CHOPS),BONE-IN,LN&FAT,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLADE (ROASTS),BONE-IN,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLADE (CHOPS OR ROASTS),BONE-IN,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLADE (CHOPS),BONE-IN,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLADE (CHOPS),BONE-IN,LN,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLADE (ROASTS),BONE-IN,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BONE-IN,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BONE-IN,LN&FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BONE-IN,LN&FAT,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR LOIN (ROASTS),BONE-IN,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BONE-IN,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BONE-IN,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BONE-IN,LN,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR LOIN (ROASTS),BONE-IN,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS OR ROASTS),BONE-IN,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BONE-IN,LN&FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BONE-IN,LN&FAT,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (ROASTS),BONE-IN,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS OR ROASTS),BONE-IN,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BONE-IN,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BONE-IN,LN,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (ROASTS),BONE-IN,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (CHOPS OR ROASTS),BONE-IN,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BONE-IN,LN&FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BONE-IN,LN&FAT,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (ROASTS),BONE-IN,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (CHOPS OR ROASTS),BONE-IN,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BONE-IN,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BONE-IN,LN,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (ROASTS),BONE-IN,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK  FRSH  LOIN  TENDERLOIN   LN ONLY  RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TENDERLOIN,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN & FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN & FAT,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TOP LOIN (ROASTS),BNLESS,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TOP LOIN (ROASTS),BNLESS,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,WHL,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,WHL,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,WHL,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,WHL,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,ARM PICNIC,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,ARM PICNIC,LN&FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,ARM PICNIC,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,ARM PICNIC,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,ARM PICNIC,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,ARM PICNIC,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,(BOSTON BUTT),BLADE (STEAKS),LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,(BOSTON BUTT),BLADE (STKS),LN & FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,BLADE,BOSTON (STEAKS),LN&FAT,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,BLADE,BOSTON (ROASTS),LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,(BOSTON BUTT),BLADE (STEAKS),LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,(BOSTON BUTT),BLADE (STEAKS),LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,BLADE,BOSTON (STEAKS),LN,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,BLADE,BOSTON (ROASTS),LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SPARERIBS,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SPARERIBS,LN&FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,COMP OF RTL CUTS (LEG,LOIN,&SHLDR),LN,CKD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BNLESS,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,BRAIN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,BRAIN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,CHITTERLINGS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,CHITTERLINGS,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,EARS,FRZ,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,EARS,FRZ,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,FEET,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,HEART,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,HEART,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,JOWL,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,KIDNEYS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,KIDNEYS,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,LEAF FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,LIVER,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,LIVER,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,LUNGS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,LUNGS,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,MECHANICALLY SEPARATED,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,PANCREAS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,PANCREAS,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,SPLEEN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,SPLEEN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,STOMACH,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLADE (CHOPS),BONE-IN,LN,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,TONGUE,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,TONGUE,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,BACON,UNPREP",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,BRKFST STRIPS,RAW OR UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "CANADIAN BACON,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PORK,CURED,FEET,PICKLED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,BNLESS,EX LN (APPROX 5% FAT),RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,BNLESS,REG (APPROX 11% FAT),RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,EX LN (APPROX 4% FAT),CND,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,EX LN (APPROX 4% FAT),CND,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,REG (APPROX 13% FAT),CND,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,CNTR SLICE,COUNTRY-STYLE,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,CNTR SLICE,LN&FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,PATTIES,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,STEAK,BNLESS,EX LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,WHL,LN&FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,WHL,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,WHL,LN,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "USDA CMDTY,PORK,CND",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BNLESS,LN,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BNLESS,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,SALT PORK,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,FAT (FROM HAM&ARM PICNIC),UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,FAT (FROM HAM&ARM PICNIC),RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,SHLDR,ARM PICNIC,LN&FAT,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,SHLDR,ARM PICNIC,LN,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,SHLDR,BLADE ROLL,LN&FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,SHLDR,BLADE ROLL,LN&FAT,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,FEET,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,TAIL,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS&BY-PRODUCTS,TAIL,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR LOIN (CHOPS),BONE-IN,LN,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BONE-IN,LN,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLADE (CHOPS),BONE-IN,LN&FAT,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR LOIN CHOPS,BONE-IN,LN&FAT,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BONE-IN,LN&FAT,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,BNLESS,EX LN&REG,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,BNLESS,EX LN&REG,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,EX LN&REG,CND,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,EX LN&REG,CND,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TOP LOIN (CHOPS),BNLESS,LN&FAT,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,COMP (LEG,LOIN,SHLDR,&SPARERIBS),LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,COMP (LEG,LOIN,SHLDR,&SPARERIBS),LN&FAT,CKD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR LON (CHPS),BNLESS,LN & FAT,CKD,PAN-BRLED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,BACKRIBS,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,BACKRIBS,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS OR ROASTS),BNLESS,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BNLESS,LN&FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BNLESS,LN&FAT,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BNLESS,LN&FAT,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (ROASTS),BNLESS,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS OR ROASTS),BNLESS,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BNLESS,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BNLESS,LN,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (CHOPS),BNLESS,LN,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,CNTR RIB (ROASTS),BNLESS,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN&FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN & FAT,BONE-IN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN,BONE-IN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (CHOPS OR ROASTS),BNLESS,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BNLESS,LN&FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BNLESS,LN&FAT,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (ROASTS),BNLESS,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (CHOPS OR ROASTS),BNLESS,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BNLESS,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (CHOPS),BNLESS,LN,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,SIRLOIN (ROASTS),BNLESS,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TENDERLOIN,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRESH,GROUND,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRESH,GROUND,COOKED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TENDERLOIN,LN&FAT,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TENDERLOIN,LN&FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TENDERLOIN,LN,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TOP LOIN (ROASTS),BNLESS,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TOP LOIN (ROASTS),BNLESS,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,COMP OF RTL CUTS (LOIN & SHLDR BLADE),LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,COMP OF RTL CUTS (LOIN&SHLDR BLADE),LN&FAT,CKD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,COMP OF RTL CUTS (LOIN&SHLDR BLADE),LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,COMP OF RTL CUTS (LOIN&SHLDR BLADE),LN,CKD",
    categories: [MEATS as category],
  },
  {
    name: "USDA COMMODITY,PORK,CURED,HAM,BNLESS,CKD,HTD",
    categories: [MEATS as category],
  },
  {
    name: "USDA COMMODITY,PORK,GROUND,FINE/COARSE,FRZ,CKD",
    categories: [MEATS as category],
  },
  {
    name: "USDA COMMODITY,PORK,CURED,HAM,BNLESS,CKD,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "USDA COMMODITY,PORK,GROUND,FINE/COARSE,FRZ,RAW",
    categories: [MEATS as category],
  },
  {
    name: "HORMEL,CURE 81 HAM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HORMEL ALWAYS TENDER,PORK TENDERLOIN,TERIYAKI-FLAVORED",
    categories: [MEATS as category],
  },
  {
    name: "HORMEL ALWAYS TENDER,PORK TENDERLOIN,PEPPERCORN-FLAVORED",
    categories: [MEATS as category],
  },
  {
    name: "HORMEL ALWAYS TENDER,PORK LOIN FILETS,LEMON GARLIC-FLAVORED",
    categories: [MEATS as category],
  },
  {
    name: "HORMEL ALWAYS TENDER,CNTR CUT CHOPS,FRSH PORK",
    categories: [MEATS as category],
  },
  {
    name: "HORMEL ALWAYS TENDER,BNLESS PORK LOIN,FRSH PORK",
    categories: [MEATS as category],
  },
  {
    name: "HORMEL CANADIAN STYLE BACON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PORK,FRSH,LN,TP LN (CHPS),BNLESS,LN,W/ ADDED SLN,CKD,PN-BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LN,TPLN(CHPS),BNLS,LN & FT,W/ADDED SLN,CKD,PN-BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,BACON,CKD,BKD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,BACON,CKD,MICROWAVED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,BACON,PRE-SLICED,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,VAR MEATS & BY-PRODUCTS,STOMACH,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,BACON,RENDERED FAT,CKD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,RUMP,BONE-IN,LN,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,RUMP,BONE-IN,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,SHANK,BONE-IN,LN,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,SLICE,BONE-IN,LN,HTD,PAN-BROIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,SLICE,BONE-IN,LN,HTD,PAN-BROIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,SLICE,BNLESS,LN,HTD,PAN-BROIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,WHL,BNLESS,LN,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,WHL,BNLESS,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,RUMP,BONE-IN,LN,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,SHANK,BONE-IN,LN,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,SLICE,BONE-IN,LN,HTD,PAN-BROIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PRK,CRD,HAM W/ NAT JUCS,SPRL SLC,MEAT ONLY,BNLES,LN,HTD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,RUMP,BONE-IN,LN,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,SLICE,BNLESS,LN,HTD,PAN-BROIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,WHL,BNLESS,LN,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,WHL,BNLESS,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,SHANK,BONE-IN,LN,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,SLICE,BNLESS,LN,HTD,PAN-BROIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,WHL,BNLESS,LN,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,WHL,BNLESS,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,SHANK,BONE-IN,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,SLICE,BONE-IN,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,RUMP,BONE-IN,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,SLICE,BONE-IN,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,SHANK,BONE-IN,UNHTD,LN",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,RUMP,BONE-IN,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,SHANK,BONE-IN,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,SLICE,BONE-IN,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,SPIRAL SLICE,BNLESS,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,FAT,BNLESS,HTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,FAT,BNLESS,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,PICKLED PORK HOCKS",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,SLICE,BONE-IN,LN,HTD,PAN-BROIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,WHL,BNLESS,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,SPIRL SLCE,BNLES,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,SLICE,BONE-IN,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,SHANK,BONE-IN,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,RUMP,BONE-IN,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,WHL,BNLESS,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,SLICE,BONE-IN,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,SHANK,BONE-IN,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,RUMP,BONE-IN,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,WHL,BNLESS,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,SLICE,BONE-IN,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,SHANK,BONE-IN,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,RUMP,BONE-IN,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,RUMP,BONE-IN,LN & FAT,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,SHANK,BONE-IN,LN & FAT,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,SLCE,BNE-IN,LN & FAT,HTD,PAN-BRL",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,SLCE,BNLESS,LN & FAT,HTD,PAN-BRL",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM -- H2O ADDED,WHL,BNLESS,LN & FAT,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,RUMP,BONE-IN,LN & FAT,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,SHANK,BONE-IN,LN & FAT,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRDCT,SLCE,BNE-IN,LN & FAT,HTD,PAN-BRL",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRDCT,SLICE,BNLESS,LN & FAT,HTD,PAN-BRL",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM & H2O PRODUCT,WHL,BNLESS,LN & FAT,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,RUMP,BONE-IN,LN & FAT,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,SHANK,BONE-IN,LN & FAT,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICS,SLCE,BNE-IN,LN & FAT,HTD,PAN-BRL",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICS,SLICE,BNLES,LN & FAT,HTD,PAN-BRL",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUCS,SPRL SLCE,BNLES,LN & FAT,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM W/ NAT JUICES,WHL,BNLESS,LN & FAT,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,RUMP,BONE-IN,LN & FAT,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,RUMP,BONE-IN,LN,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,RUMP,BONE-IN,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,SHANK,BONE-IN,LN,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,SHANK,BONE-IN,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,SHANK,BONE-IN,LN & FAT,HTD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,SHANK,BONE-IN,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,SLICE,BONE-IN,LN & FAT,HTD,PAN-BROIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PORK,CURED,HAM,SLICE,BONE-IN,LN,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,SLICE,BONE-IN,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SPARERIBS,LN & FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,COMP OF FAT,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TNDERLN,LN,W/ ADDED SLN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,ENHANCED,LOIN,TENDERLOIN,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,(BSTN BTT),BLDE (STKS),LN,W/ADDEDSLNCKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHLDR,(BSTN BUTT),BLDE (STKS),LN,W/ ADDED SOLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LN,TOP LN (CHPS),BNLESS,LN,W/ ADDED SLN,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LN,TOP LIN (CHOPS),BNLSS,LN,W/ ADDED SLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TP LN (CHPS),BNLSS,LN & FT,W/ ADDED SLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LN,TP LN (CHPS),BNLSS,LN & FT,W/ADDED SLN,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TENDERLOIN,LN & FAT,W/ ADDED SLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,TNDERLN,LN & FT,W/ ADDED SLN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHDR,(BSTN BTT),BLDE(STKS),LN & FT,W/ADDED SLN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,SHDR,(BSTN BT),BLDE(STKS),LN&FT,WADDEDSLN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,RUMP,BONE-IN,LN & FAT,UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,LOIN,LEG CAP STEAK,BNLESS,LN & FAT,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,LEG CAP STEAK,BNLESS,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,SHLDR BREAST,BNLESS,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,SHLDR BREAST,BNLESS,LN & FAT,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,SHLDR,PETITE TENDER,BNLESS,LN & FAT,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,SHLDR PETITE TENDER,BNLESS,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,LEG SIRLOIN TIP RST,BNLESS,LN & FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,LEG SIRLOIN TIP RST,BNLESS,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,GROUND,84% LN / 16% FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,GROUND,96% LN / 4% FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,GROUND,72% LN / 28% FAT,CKD,CRUMBLES",
    categories: [MEATS as category],
  },
  {
    name: "PORK,GROUND,84% LN / 16% FAT,CKD,CRUMBLES",
    categories: [MEATS as category],
  },
  {
    name: "PORK,GROUND,96% LN / 4% FAT,CKD,CRUMBLES",
    categories: [MEATS as category],
  },
  {
    name: "PORK,GROUND,72% LN / 28% FAT,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PORK,GROUND,84% LN / 16% FAT,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PORK,GROUND,96% LN / 4% FAT,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PORK LOIN,FRSH,BACKRIBS,BONE-IN,RAW,LN",
    categories: [MEATS as category],
  },
  {
    name: "PORK LOIN,FRSH,BACKRIBS,BONE-IN,COOKED-ROASTED,LN",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLADE (CHOPS OR ROASTS),BNLESS,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLADE (ROASTS),BNLESS,LN,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLADE (CHOPS),BNLESS,LN,BNLESS,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN,BNLESS,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN,BONE-IN,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN,BNLESS,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,BLADE,(CHOPS),BNLESS,LN & FAT,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLDE (CHOPS OR ROAST),BNLESS,LN & FAT OLY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,BLADE (ROASTS),BNLESS,LN & FAT,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN & FAT,BNLESS,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN & FAT,BONE-IN,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,FRSH,LOIN,COUNTRY-STYLE RIBS,LN & FAT,BNLESS,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "BACON,PRE-SLICED,REDUCED/LOW NA,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANADIAN BACON,CKD,PAN-FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALFALFA SEEDS,SPROUTED,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "AMARANTH LEAVES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AMARANTH LEAVES,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARROWHEAD,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARROWHEAD,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARTICHOKES,(GLOBE OR FRENCH),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARTICHOKES,(GLOBE OR FRENCH),CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARTICHOKES,(GLOBE OR FRENCH),FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARTICHOKES,(GLOBE OR FRENCH),FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ASPARAGUS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ASPARAGUS,CKD,BLD,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ASPARAGUS,CND,REG PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ASPARAGUS,CND,DRND SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ASPARAGUS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ASPARAGUS,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BALSAM-PEAR (BITTER GOURD),LEAFY TIPS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BALSAM-PEAR (BITTER GOURD),LEAFY TIPS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BALSAM-PEAR (BITTER GOURD),PODS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BALSAM-PEAR (BITTER GOURD),PODS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAMBOO SHOOTS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAMBOO SHOOTS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAMBOO SHOOTS,CND,DRND SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEANS,KIDNEY,MATURE SEEDS,SPROUTED,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,IMMAT SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,IMMAT SEEDS,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,IMMAT SEEDS,CND,REG PK,SOL & LIQUIDS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,IMMAT SEEDS,FRZ,FORDHOOK,UNPREP",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,IMMAT SEEDS,FRZ,FORDHOOK,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,IMMAT SEEDS,FRZ,BABY,UNPREP",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,IMMAT SEEDS,FRZ,BABY,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MUNG BNS,MATURE SEEDS,SPROUTED,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MUNG BNS,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MUNG BNS,MATURE SEEDS,SPROUTED,CKD,STIR-FRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,NAVY,MATURE SEEDS,SPROUTED,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,NAVY,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINTO,IMMAT SEEDS,FRZ,UNPREP",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINTO,IMMAT SEEDS,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,SHELLIE,CND,SOL & LIQUIDS",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,GREEN,RAW",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,GRN,CKD,BLD,DRND,WO/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,GRN,CND,REG PK,SOL & LIQUIDS",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,GRN,CND,REG PK,DRND SOL",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,CND,ALL STYLES,SEASONED,SOL&LIQUIDS",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,GRN,FRZ,ALL STYLES,UNPREP",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,GRN,FRZ,CKD,BLD,DRND WO/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,GRN,FRZ,ALL STYLES,MICROWAVED",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,GRN,MICROWAVED",
    categories: [LEGUMES as category],
  },
  {
    name: "BEETS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEETS,CKD,BLD,DRND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEETS,CND,REG PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEETS,CND,DRND SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEET GREENS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEET GRNS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BROADBEANS,IMMAT SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BROADBEANS,IMMAT SEEDS,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BROCCOLI,RAW",
    categories: [VEGGIES as category],
  },
  {
    name: "BROCCOLI,CKD,BLD,DRND,WO/SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "BROCCOLI,FRZ,CHOPD,UNPREP",
    categories: [VEGGIES as category],
  },
  {
    name: "BROCCOLI,FRZ,CHOPD,CKD,BLD,DRND,WO/SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "BROCCOLI,FRZ,SPEARS,UNPREP",
    categories: [VEGGIES as category],
  },
  {
    name: "BROCCOLI,FRZ,SPEARS,CKD,BLD,DRND,WO/SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "BROCCOLI RAAB,RAW",
    categories: [VEGGIES as category],
  },
  {
    name: "BROCCOLI RAAB,CKD",
    categories: [VEGGIES as category],
  },
  {
    name: "BRUSSELS SPROUTS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BRUSSELS SPROUTS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BRUSSELS SPROUTS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BRUSSELS SPROUTS,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURDOCK ROOT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURDOCK ROOT,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BUTTERBUR,(FUKI),RAW",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BUTTERBUR,CKD,BLD,DRND,WO/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BUTTERBUR,CANNED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CABBAGE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,RED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,RED,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,SAVOY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,SAVOY,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,CHINESE (PAK-CHOI),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,CHINESE (PAK-CHOI),CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,KIMCHI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,CHINESE (PE-TSAI),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,CHINESE (PE-TSAI),CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARDOON,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARDOON,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARROTS,RAW",
    categories: [VEGGIES as category],
  },
  {
    name: "CARROTS,CKD,BLD,DRND,WO/SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "CARROTS,CND,REG PK,SOL&LIQUIDS",
    categories: [VEGGIES as category],
  },
  {
    name: "CARROTS,CND,REG PK,DRND SOL",
    categories: [VEGGIES as category],
  },
  {
    name: "CARROTS,FROZEN,UNPREPARED",
    categories: [VEGGIES as category],
  },
  {
    name: "CARROTS,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "CASSAVA,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAULIFLOWER,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAULIFLOWER,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAULIFLOWER,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAULIFLOWER,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CELERIAC,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CELERIAC,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CELERY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CELERY,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CELTUCE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHARD,SWISS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHARD,SWISS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHAYOTE,FRUIT,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "CHAYOTE,FRUIT,CKD,BLD,DRND,WO/SALT",
    categories: [FRUITS as category],
  },
  {
    name: "CHICORY,WITLOOF,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHICORY GREENS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHICORY ROOTS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHIVES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHRYSANTHEMUM,GARLAND,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHRYSANTHEMUM,GARLAND,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COLLARDS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COLLARDS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COLLARDS,FRZ,CHOPD,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COLLARDS,FRZ,CHOPD,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORIANDER (CILANTRO) LEAVES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,CND,BRINE PK,REG PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,CND,WHL KERNEL,DRND SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,CND,CRM STYLE,REG PK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,CND,VACUUM PK,REG PK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,CND,DRND SOL,RINSED W/ TAP H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,FRZ,KRNLS CUT OFF COB,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,FRZ,KRNLS CUT OFF COB,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,FRZ,KRNLS ON COB,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,FRZ,KRNLS ON COB,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,YEL,WHL KERNEL,FRZ,MICROWAVED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN W/RED&GRN PEPPERS,CND,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORNSALAD,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COWPEAS (BLACKEYES),IMMAT SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COWPEAS (BLACKEYES),IMMAT SEEDS,CKD,BLD,DRND,WO/ SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COWPEAS (BLACKEYES),IMMAT SEEDS,FRZ,UNPREP",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COWPEAS (BLACKEYES),IMMTRE SEEDS,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COWPEAS,YOUNG PODS W/SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COWPEAS,YOUNG PODS W/SEEDS,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "YARDLONG BEAN,RAW",
    categories: [LEGUMES as category],
  },
  {
    name: "YARDLONG BEAN,CKD,BLD,DRND,WO/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "COWPEAS,LEAFY TIPS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COWPEAS,LEAFY TIPS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRESS,GARDEN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRESS,GARDEN,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CUCUMBER,WITH PEEL,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CUCUMBER,PEELED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DANDELION GREENS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DANDELION GRNS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EGGPLANT,RAW",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGGPLANT,CKD,BLD,DRND,WO/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EDAMAME,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EDAMAME,FRZ,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ENDIVE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ESCAROLE,CKD,BLD,DRND,NO SALT ADDED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GARLIC,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GINGER ROOT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GOURD,WHITE-FLOWERED (CALABASH),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GOURD,WHITE-FLOWERED (CALABASH),CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GOURD,DISHCLOTH (TOWELGOURD),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GOURD,DISHCLOTH (TOWELGOURD),CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DRUMSTICK LEAVES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DRUMSTICK LEAVES,CKD,BLD,DRND,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HYACINTH-BEANS,IMMAT SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "HYACINTH-BEANS,IMMAT SEEDS,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "JERUSALEM-ARTICHOKES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "JEW'S EAR,(PEPEAO),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPEAO,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "JUTE,POTHERB,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "JUTE,POTHERB,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KALE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KALE,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KALE,FROZEN,UNPREPARED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KALE,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KANPYO,(DRIED GOURD STRIPS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,SHIITAKE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,CHANTERELLE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,MOREL,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KOHLRABI,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KOHLRABI,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,PORTABELLA,GRILLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMBSQUARTERS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMBSQUARTERS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEEKS,(BULB&LOWER LEAF-PORTION),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEEKS,(BULB&LOWER LEAF-PORTION),CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LENTILS,SPROUTED,RAW",
    categories: [LEGUMES as category],
  },
  {
    name: "LENTILS,SPROUTED,CKD,STIR-FRIED,WO/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "LETTUCE,BUTTERHEAD (INCL BOSTON&BIBB TYPES),RAW",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "LETTUCE,COS OR ROMAINE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LETTUCE,ICEBERG (INCL CRISPHEAD TYPES),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LETTUCE,GRN LEAF,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LOTUS ROOT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LOTUS ROOT,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LETTUCE,RED LEAF,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOUNTAIN YAM,HAWAII,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOUNTAIN YAM,HAWAII,CKD,STMD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,WHITE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,WHITE,CKD,BLD,DRND,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,WHITE,STIR-FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,CND,DRND SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,PORTABELLA,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,BROWN,ITALIAN,OR CRIMINI,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,SHIITAKE,STIR-FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,SHIITAKE,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,SHIITAKE,CKD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSTARD GREENS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSTARD GRNS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSTARD GRNS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSTARD GRNS,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSTARD SPINACH,(TENDERGREEN),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSTARD SPINACH,(TENDERGREEN),CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NEW ZEALAND SPINACH,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NEW ZEALAND SPINACH,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OKRA,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OKRA,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OKRA,FROZEN,UNPREPARED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OKRA,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,DEHYDRATED FLAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,CND,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,YEL,SAUTEED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,FRZ,CHOPD,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,FRZ,CHOPD,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,FRZ,WHL,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,FRZ,WHL,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,SPRING OR SCALLIONS (INCL TOPS&BULB),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,YOUNG GRN,TOPS ONLY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,WELSH,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,SWT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONION RINGS,BREADED,PAR FR,FRZ,UNPREP",
    categories: [GRAINS as category],
  },
  {
    name: "ONION RINGS,BREADED,PAR FR,FRZ,PREP,HTD IN OVEN",
    categories: [GRAINS as category],
  },
  {
    name: "PARSLEY,FRSH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PARSNIPS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PARSNIPS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,EDIBLE-PODDED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,EDIBLE-PODDED,BLD,DRND,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,EDIBLE-PODDED,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,EDIBLE-PODDED,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,GREEN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,GRN,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,GRN,CND,REG PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,GRN (INCLUDES BABY & LESUER TYPES),CND,DRND SOL,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,GRN,CND,SEASONED,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,GRN,CND,DRND SOL,RINSED IN TAP H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,GRN,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,GRN,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,MATURE SEEDS,SPROUTED,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEAS,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEAS&CARROTS,CND,REG PK,SOL&LIQUIDS",
    categories: [VEGGIES as category],
  },
  {
    name: "PEAS&CARROTS,FRZ,UNPREP",
    categories: [VEGGIES as category],
  },
  {
    name: "PEAS&CARROTS,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "PEAS&ONIONS,CND,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS&ONIONS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS&ONIONS,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,HOT CHILI,GRN,CND,PODS,EXCLUDING SEEDS,SOL&LIQUIDS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEPPERS,SWT,GRN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,GRN,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,GRN,CND,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,GRN,FRZ,CHOPD,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,GRN,FRZ,CHOPD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,GRN,SAUTEED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIGEONPEAS,IMMAT SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PIGEONPEAS,IMMAT SEEDS,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "POI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POKEBERRY SHOOTS,(POKE),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POKEBERRY SHOOTS,(POKE),CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FLESH & SKN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,RUSSET,FLESH & SKN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,WHITE,FLESH & SKN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,RED,FLESH & SKN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,RUSSET,FLESH & SKN,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,WHITE,FLESH & SKN,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,RED,FLESH & SKN,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FR FR,CRNKL OR REG,SALT ADDED IN PROC,FRZ,AS PURCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FR FR,CRNKL/REG CUT,SALT ADDED IN PROC,FRZ,OVEN-HTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,RSTD,SALT ADDED IN PROCESSING,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,RAW,SKIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,BKD,FLESH,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,BKD,SKN,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,BLD,CKD IN SKN,FLESH,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,BLD,CKD IN SKN,SKN,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,BLD,CKD WO/ SKN,FLESH,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MICROWAVED,CKD IN SKN,FLESH,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MICROWAVED,CKD IN SKN,SKN,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,HASH BROWN,HOME-PREPARED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MSHD,HOME-PREPARED,WHL MILK & MARGARINE ADDED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,SCALLPD,HOME-PREPARED W/BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "POTATOES,AU GRATIN,HOME-PREPARED FROM RECIPE USING BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "POTATOES,CND,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,CND,DRND SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MSHD,DEHYD,FLAKES WO/MILK,DRY FORM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MSHD,DEHYD,PREP FROM FLAKES WO/ MILK,WHL MILK & BUT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MSHD,DEHYD,GRANULES WO/MILK,DRY FORM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MSHD,DEHYD,PREP FR GRNLS WO/MILK,WHL MILK&BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "POTATOES,MSHD,DEHYD,GRANULES W/MILK,DRY FORM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MSHD,DEHYD,PREP FROM GRAN W/ MILK,H2O & MARG ADDED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,AU GRATIN,DRY MIX,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,AU GRATIN,DRY MIX,PREP W/H2O,WHL MILK&BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "POTATOES,SCALLPD,DRY MIX,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,SCALLPD,DRY MIX,PREP W/H2O,WHL MILK&BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "POTATOES,HASH BROWN,FRZ,PLN,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,HASH BROWN,FRZ,PLN,PREP,PAN FRIED IN CANOLA OIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "POTATOES,HASH BROWN,FRZ,W/ BUTTER SAU,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "POTATOES,HASH BROWN,FRZ,W/ BUTTER SAU,PREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "POTATOES,FRENCH FR,SHOESTRING,SALT ADDED IN PROC,FRZ,AS PRCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRENCH FR,SHOESTRNG,SALT ADDED IN PROC,FRZ,OVEN-HTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,O'BRIEN,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,O'BRIEN,FRZ,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATO PUFFS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATO PUFFS,FRZ,OVEN-HEATED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRZ,WHL,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRZ,WHL,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRENCH FR,ALL TYPES,SALT ADDED IN PROC,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRENCH FR,ALL TYPES,SALT ADDED IN PROC,FRZ,OVEN HTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRNCH FR,CTTG-CUT,SALT NOT ADDED,FRZ,AS PRCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRENCH FR,COTTAGE-CUT,SALT NOT ADDED,FRZ,OVEN-HTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRZ,FRENCH FR,PAR FR,EXTRUDED,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRZ,FRCH FR,PAR FR,EXTRUDED,PREP,HTD OVEN,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA COMMODITY,POTATO WEDGES,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRENCH FR,STK FRIES,SALT ADDED IN PROC,FRZ,AS PRCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRENCH FR,STK FRIES,SALT ADDED IN PROC,FRZ,OVEN-HTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATO FLOUR",
    categories: [GRAINS as category],
  },
  {
    name: "POTATO SALAD,HOME-PREPARED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMPKIN FLOWERS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMPKIN FLOWERS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMPKIN LEAVES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMPKIN LEAVES,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMPKIN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMPKIN,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMPKIN,CND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMPKIN PIE MIX,CANNED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PURSLANE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PURSLANE,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RADISHES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RADISHES,ORIENTAL,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RADISHES,ORIENTAL,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RADISHES,ORIENTAL,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RUTABAGAS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RUTABAGAS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALSIFY,(VEG OYSTER),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALSIFY,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUERKRAUT,CND,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAWEED,AGAR,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAWEED,IRISHMOSS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAWEED,KELP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAWEED,LAVER,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SESBANIA FLOWER,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SESBANIA FLOWER,CKD,STMD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYBEANS,GREEN,RAW",
    categories: [LEGUMES as category],
  },
  {
    name: "SOYBEANS,GRN,CKD,BLD,DRND,WO/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "SOYBEANS,MATURE SEEDS,SPROUTED,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SOYBEANS,MATURE SEEDS,SPROUTED,CKD,STMD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SOYBEANS,MATURE SEEDS,SPROUTED,CKD,STIR-FRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SPINACH,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPINACH,CKD,BLD,DRND,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPINACH,CND,REG PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPINACH,CND,REG PK,DRND SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPINACH,FRZ,CHOPD OR LEAF,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPINACH,FRZ,CHOPD OR LEAF,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,CROOKNECK&STRAIGHTNECK,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,CROOKNECK & STRAIGHTNECK,CKD,BLD,DRND,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,CROOKNECK&STRAIGHTNECK,CND,DRND,SOLID,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,CROOKNECK&STRAIGHTNECK,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,CROOKNECK&STRAIGHTNECK,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SUMMER,SCALLOP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,SCALLOP,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,ZUCCHINI,INCL SKN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,ZUCCHINI,INCL SKN,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,ZUCCHINI,INCL SKN,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,ZUCCHINI,INCL SKN,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,ZUCCHINI,ITALIAN STYLE,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WINTER,ACORN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,ACORN,CKD,BKD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,ACORN,CKD,BLD,MSHD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,BUTTERNUT,RAW",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SQUASH,WNTR,BUTTERNUT,CKD,BKD,WO/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SQUASH,WNTR,BUTTERNUT,FRZ,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SQUASH,WNTR,BUTTERNUT,FRZ,CKD,BLD,WO/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SQUASH,WINTER,HUBBARD,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,HUBBARD,BKD,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,HUBBARD,CKD,BLD,MSHD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,SPAGHETTI,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,SPAGHETTI,CKD,BLD,DRND,OR BKD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUCCOTASH,(CORN&LIMAS),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUCCOTASH,(CORN&LIMAS),CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUCCOTASH,(CORN&LIMAS),CND,W/CRM STYLE CORN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUCCOTASH,(CORN&LIMAS),CND,W/WHL KERNEL CORN,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUCCOTASH,(CORN&LIMAS),FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUCCOTASH,(CORN&LIMAS),FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWAMP CABBAGE,(SKUNK CABBAGE),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWAMP CABBAGE (SKUNK CABBAGE),CKD,BLD,DRND,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO LEAVES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO LEAVES,CKD,STMD,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO,RAW,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO,CKD,BKD IN SKN,FLESH,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO,CKD,BLD,WO/ SKN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEETPOTATO,CND,VACUUM PK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO,CND,MSHD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO,FRZ,CKD,BKD,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TARO,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TARO,COOKED,WITHOUT SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TARO LEAVES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TARO LEAVES,CKD,STMD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TARO SHOOTS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TARO SHOOTS,CKD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TARO,TAHITIAN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TARO,TAHITIAN,CKD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATOES,GREEN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATOES,RED,RIPE,RAW,YEAR RND AVERAGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATOES,RED,RIPE,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATOES,RED,RIPE,CND,PACKED IN TOMATO JUC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATOES,RED,RIPE,CND,STWD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATOES,RED,RIPE,CND,W/GRN CHILIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO JUC,CND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO PRODUCTS,CND,PASTE,WO/ SALT ADDED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO PRODUCTS,CND,PUREE,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO POWDER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO PRODUCTS,CND,SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO PRODUCTS,CND,SAU,W/MUSHROOMS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO PRODUCTS,CND,SAU,W/ONIONS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO PRODUCTS,CND,SAU,W/HERBS&CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO PRODUCTS,CND,SAU,W/ONIONS,GRN PEPPERS,&CELERY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO PRODUCTS,CND,SAU,W/TOMATO TIDBITS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TREE FERN,CKD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIPS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIPS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIPS,FROZEN,UNPREPARED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIPS,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIP GREENS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIP GRNS,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIP GRNS,CND,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIP GRNS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIP GRNS,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIP GRNS&TURNIPS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIP GRNS&TURNIPS,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEGETABLE JUC COCKTAIL,CND",
    categories: [VEGGIES as category],
  },
  {
    name: "VEGETABLES,MXD,CND,SOL&LIQUIDS",
    categories: [VEGGIES as category],
  },
  {
    name: "VEGETABLES,MXD,CND,DRND SOL",
    categories: [VEGGIES as category],
  },
  {
    name: "VEGETABLES,MXD,FRZ,UNPREP",
    categories: [VEGGIES as category],
  },
  {
    name: "VEGETABLES,MXD,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "VEGETABLE JUC COCKTAIL,LO NA,CND",
    categories: [VEGGIES as category],
  },
  {
    name: "VINESPINACH,(BASELLA),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WATERCHESTNUTS,CHINESE,(MATAI),RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "WATERCHESTNUTS,CHINESE,CND,SOL&LIQUIDS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "WATERCRESS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WAXGOURD,(CHINESE PRESERVING MELON),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WAXGOURD,(CHINESE PRESERVING MELON),CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WINGED BNS,IMMAT SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "WINGED BNS,IMMAT SEEDS,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "WINGED BEAN LEAVES,RAW",
    categories: [LEGUMES as category],
  },
  {
    name: "WINGED BEAN TUBER,RAW",
    categories: [LEGUMES as category],
  },
  {
    name: "YAM,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YAM,CKD,BLD,DRND,OR BKD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YAMBEAN (JICAMA),RAW",
    categories: [LEGUMES as category],
  },
  {
    name: "YAMBEAN (JICAMA),CKD,BLD,DRND,WO/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "BEETS,HARVARD,CND,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEETS,PICKLED,CND,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BORAGE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BORAGE,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHIVES,FREEZE-DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DOCK,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DOCK,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EPPAW,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DRUMSTICK PODS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DRUMSTICK PODS,CKD,BLD,DRND,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KALE,SCOTCH,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KALE,SCOTCH,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEEKS,(BULB&LOWER-LEAF PORTION),FREEZE-DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PARSLEY,FREEZE-DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEANS,MUNG,MATURE SEEDS,SPROUTED,CND,DRND SOL",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEPPERS,JALAPENO,CND,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,GRN,FREEZE-DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RADISHES,WHITE ICICLE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHALLOTS,FREEZE-DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,ALL VAR,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,ALL VAR,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,ALL VAR,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,ALL VAR,CKD,BKD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO,CND,SYRUP PK,SOL & LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO,CND,SYRUP PK,DRND SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO PRODUCTS,CND,SAU,SPANISH STYLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEANS,PINTO,MATURE SEEDS,SPROUTED,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINTO,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CARROT JUICE,CANNED",
    categories: [VEGGIES as category],
  },
  {
    name: "CORN PUDD,HOME PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MSHD,HOME-PREPARED,WHL MILK ADDED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPINACH SOUFFLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO,CKD,CANDIED,HOME-PREPARED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATOES,RED,RIPE,CKD,STWD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAWEED,AGAR,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAWEED,SPIRULINA,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAWEED,SPIRULINA,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAWEED,WAKAME,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,HOT CHILI,GRN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,O'BRIEN,HOME-PREPARED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATO PANCAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,BKD,FLESH & SKN,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MICROWAVED,CKD IN SKN,FLESH&SKN,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RADISH SEEDS,SPROUTED,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SHALLOTS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARROT,DEHYDRATED",
    categories: [VEGGIES as category],
  },
  {
    name: "TOMATOES,CRUSHED,CANNED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATOES,ORANGE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATOES,YELLOW,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARROWROOT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHRYSANTHEMUM LEAVES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AMARANTH LEAVES,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARROWHEAD,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARTICHOKES,(GLOBE OR FRENCH),CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARTICHOKES,(GLOBE OR FRENCH),FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ASPARAGUS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ASPARAGUS,CND,NO SALT,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ASPARAGUS,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BALSAM-PEAR (BITTER GOURD),LEAFY TIPS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BALSAM-PEAR (BITTER GOURD),PODS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAMBOO SHOOTS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEANS,KIDNEY,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,IMMAT SEEDS,CKD,BLD,DRND,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,IMMAT SEEDS,CND,NO SALT,SOL&LIQUIDS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,IMMAT SEEDS,FRZ,BABY,CKD,BLD,DRND,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,IMMAT SEEDS,FRZ,FORDHOOK,CKD,BLD,DRND,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MUNG BNS,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,NAVY,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINTO,IMMAT SEEDS,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINTO,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,SNAP,YELLOW,RAW",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,GRN,CKD,BLD,DRND,W/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,YEL,CKD,BLD,DRND,WO/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,YEL,CKD,BLD,DRND,W/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,GRN,CND,NO SALT,SOL&LIQUIDS",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,YEL,CND,REG PK,SOL&LIQUIDS",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,YEL,CND,NO SALT,SOL&LIQUIDS",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,GRN,CND,NO SALT,DRND SOL",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,YEL,FRZ,ALL STYLES,UNPREP",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,GRN,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,YEL,FRZ,CKD,BLD,DRND,WO/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,YEL,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "BEETS,CKD,BOILED. DRND,W/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "BEETS,CND,NO SALT,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEET GRNS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BORAGE,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BROADBEANS,IMMAT SEEDS,CKD,BLD,DRND,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BROCCOLI,LEAVES,RAW",
    categories: [VEGGIES as category],
  },
  {
    name: "BROCCOLI,FLOWER CLUSTERS,RAW",
    categories: [VEGGIES as category],
  },
  {
    name: "BROCCOLI,STALKS,RAW",
    categories: [VEGGIES as category],
  },
  {
    name: "BROCCOLI,CKD,BLD,DRND,W/SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "BROCCOLI,FRZ,CHOPD,CKD,BLD,DRND,W/SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "BROCCOLI,FRZ,SPEARS,CKD,BLD,DRND,W/SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "BRUSSELS SPROUTS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BRUSSELS SPROUTS,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURDOCK ROOT,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BUTTERBUR,CKD,BLD,DRND,W/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CABBAGE,COMMON,FRESHLY HARVEST,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,COMMON (DANISH,DOMESTIC,&POINTED TYPES),STORED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,COMMON,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,RED,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,SAVOY,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,CHINESE (PAK-CHOI),CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,CHINESE (PE-TSAI),CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARDOON,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARROTS,CKD,BLD,DRND,W/SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "CARROTS,CND,NO SALT,SOL&LIQUIDS",
    categories: [VEGGIES as category],
  },
  {
    name: "CARROTS,CND,NO SALT ,DRND SOL",
    categories: [VEGGIES as category],
  },
  {
    name: "CARROTS,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "CAULIFLOWER,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAULIFLOWER,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CELERIAC,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CELERY,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHARD,SWISS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHAYOTE,FRUIT,CKD,BLD,DRND,W/SALT",
    categories: [FRUITS as category],
  },
  {
    name: "CHRYSANTHEMUM,GARLAND,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COLLARDS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COLLARDS,FRZ,CHOPD,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,CND,NO SALT,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,CND,CRM STYLE,NO SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,CND,VACUUM PK,NO SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,FRZ,KRNLS,CUT OFF COB,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,YEL,FRZ,KRNLS ON COB,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COWPEAS (BLACKEYES),IMMAT SEEDS,CKD,BLD,DRND,W/ SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COWPEAS (BLACKEYES),IMMAT SEEDS,FRZ,CKD,BLD,DRND,W/ SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COWPEAS,YOUNG PODS W/SEEDS,CKD,BLD,DRND,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COWPEAS,LEAFY TIPS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRESS,GARDEN,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DANDELION GRNS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EGGPLANT,CKD,BLD,DRND,W/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "GOURD,WHITE-FLOWERED (CALABASH),CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GOURD,DISHCLOTH (TOWELGOURD),CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DRUMSTICK LEAVES,CKD,BLD,DRND,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DRUMSTICK PODS,CKD,BLD,DRND,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HYACINTH-BEANS,IMMAT SEEDS,CKD,BLD,DRND,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "JUTE,POTHERB,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KALE,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KALE,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KALE,SCOTCH,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KOHLRABI,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMBSQUARTERS,CKD,BLD,DRND,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEEKS,(BULB&LOWER LEAF-PORTION),CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LOTUS ROOT,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,WHITE,CKD,BLD,DRND,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,SHIITAKE,CKD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSTARD GRNS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSTARD GRNS,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSTARD SPINACH,(TENDERGREEN),CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NEW ZEALAND SPINACH,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OKRA,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OKRA,FRZ,CKD,BLD,DRND,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,FRZ,CHOPD,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ONIONS,FRZ,WHL,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PARSNIPS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,EDIBLE-PODDED,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,EDIBLE-PODDED,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,GRN,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,GRN,CND,NO SALT,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,GRN,CND,NO SALT,DRND SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,GRN,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEAS,MATURE SEEDS,SPROUTED,CKD,BLD,DRND,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEAS&CARROTS,CND,NO SALT,SOL&LIQUIDS",
    categories: [VEGGIES as category],
  },
  {
    name: "PEAS&CARROTS,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "PEAS&ONIONS,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,HOT CHILI,RED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,HOT CHILI,RED,CND,EXCLUDING SEEDS,SOL&LIQUIDS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEPPERS,SWT,RED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,GRN,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,RED,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,RED,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,GRN,FRZ,CHOPD,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIGEONPEAS,IMMAT SEEDS,CKD,BLD,DRND,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "POKEBERRY SHOOTS,(POKE),CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,BKD,FLESH & SKN,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,BKD,FLESH,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,BKD,SKN ONLY,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,BLD,CKD IN SKN,FLESH,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,BLD,CKD IN SKN,SKN,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,BLD,CKD WO/ SKN,FLESH,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MICROWAVED,CKD,IN SKN,FLESH&SKN,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MICROWAVED,CKD IN SKN,FLESH,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MICROWAVED,CKD,IN SKN,SKN W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRZ,WHL,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRZ,FRCH FR,PAR FR,CTTGE-CUT,PREP,HTD OVEN,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FR FR,ALL TYPES,SALT NOT ADDED IN PROC,FRZ,OVN-HTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FR FR,ALL TYPES,SALT NOT ADDED IN PROC,FRZ,AS PURCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,AU GRATIN,HOME-PREPARED FROM RECIPE USING MARGARINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,SCALLPD,HOME-PREPARED W/MARGARINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMPKIN,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMPKIN,CANNED,WITH SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMPKIN,FLOWERS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMPKIN LEAVES,CKD,BLD,DRND,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PURSLANE,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RADISHES,ORIENTAL,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RUTABAGAS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALSIFY,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYBEANS,GRN,CKD,BLD,DRND,W/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "SPINACH,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPINACH,CND,NO SALT,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPINACH,FRZ,CHOPD OR LEAF,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,ALL VAR,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,CROOKNECK&STRAIGHTNECK,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,CROOKNECK&STRAIGHTNECK,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,SCALLOP,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,ZUCCHINI,INCL SKN,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,SMMR,ZUCCHINI,INCL SKN,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,ALL VAR,CKD,BKD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,ACORN,CKD,BKD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,ACORN,CKD,BLD,MSHD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,BUTTERNUT,CKD,BKD,W/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SQUASH,WNTR,BUTTERNUT,FRZ,CKD,BLD,W/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SQUASH,WNTR,HUBBARD,BKD,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,HUBBARD,CKD,BLD,MSHD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,WNTR,SPAGHETTI,CKD,BLD,DRND,OR BKD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUCCOTASH,(CORN&LIMAS),CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUCCOTASH,(CORN&LIMAS),FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWAMP CABBAGE (SKUNK CABBAGE),CKD,BLD,DRND,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO LEAVES,CKD,STMD,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO,CKD,BKD IN SKN,FLESH,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO,CKD,BLD,WO/ SKN,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO,FRZ,CKD,BKD,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TARO,COOKED,WITH SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TARO,LEAVES,CKD,STMD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TARO,SHOOTS,CKD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TARO,TAHITIAN,CKD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATOES,RED,RIPE,CKD,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATOES,RED,RIPE,CND,PACKED IN TOMATO JUC,NO SALT ADDED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO JUC,CND,WO/ SALT ADDED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO PRODUCTS,CND,PUREE,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIPS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIPS,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIP GRNS,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIP GRNS,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNIP GRNS&TURNIPS,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEGETABLES,MXD,FRZ,CKD,BLD,DRND,W/SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "WAXGOURD,(CHINESE PRESERVING MELON),CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WINGED BEAN,IMMAT SEEDS,CKD,BLD,DRND,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "YAM,CKD,BLD,DRND,OR BKD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YAMBEAN (JICAMA),CKD,BLD,DRND,W/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "YARDLONG BEAN,CKD,BLD,DRND,W/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "CORN,SWEET,WHITE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,CND,WHL KERNEL,REG PK,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,CND,WHL KERNEL,NO SALT,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,CND,WHL KERNEL,DRND SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,CND,CRM STYLE,REG PK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,CND,CRM STYLE,NO SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,CND,VACUUM PK,REG PK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,CND,VACUUM PK,NO SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,FRZ,KRNLS CUT OFF COB,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,FRZ,KRNLS CUT OFF COB,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,FRZ,KRNLS CUT OFF COB,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,FRZ,KRNLS ON COB,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,FRZ,KRNLS ON COB,CKD,BLD,DRND,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,SWT,WHITE,FRZ,KRNLS ON COB,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,RED,CND,SOL&LIQUIDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,RED,FRZ,CHOPD,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,RED,FRZ,CHOPD,BLD,DRND,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,RED,FRZ,CHOPD,BLD,DRND,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,RED,SAUTEED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SESBANIA FLOWER,CKD,STMD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYBEANS,MATURE SEEDS,SPROUTED,CKD,STMD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SOYBEANS,MATURE SEEDS,SPROUTED,CKD,STIR-FRIED,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "DOCK,CKD,BLD,DRND,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LENTILS,SPROUTED,CKD,STIR-FRIED,W/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "MOUNTAIN YAM,HAWAII,CKD,STMD,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TREE FERN,CKD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MSHD,PREP FROM GRANULES,WO/MILK,WHL MILK&MARGARINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,MSHD,DEHYD,PREP FRM FLKS WO/ MILK,WHL MILK&MARG ADD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWT,RED,FREEZE-DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEANS,SNAP,YEL,CND,REG PK,DRND SOL",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,SNAP,YEL,CND,NO SALT,DRND SOL",
    categories: [LEGUMES as category],
  },
  {
    name: "POTATOES,MSHD,HOME-PREPARED,WHL MILK & BUTTER ADDED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "Catsup",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,BROWN,ITALIAN,OR CRIMINI,EXPOSED TO UV LT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PICKLES,CUCUMBER,DILL OR KOSHER DILL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOM,WHITE,EXPOSED TO UV LT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,PORTABELLA,EXPOSED TO UV LT,GRILLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PICKLES,CUCUMBER,SWT (INCLUDES BREAD & BUTTER PICKLES)",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PICKLES,CUCUMBER,SOUR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIMENTO,CANNED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PICKLE RELISH,HOT DOG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PICKLE RELISH,SWEET",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PICKLES,CUCUMBER,SOUR,LO NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PICKLES,CUCUMBER,DILL,RED NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PICKLES,CUCUMBER,SWT,LO NA (INCLUDES BREAD & BUTTER PICKLES)",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CATSUP,LOW SODIUM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,ENOKI,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,SWEET,YELLOW,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RADICCHIO,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,ZUCCHINI,BABY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATILLOS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATOES,SUN-DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATOES,SUN-DRIED,PACKED IN OIL,DRND",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FENNEL,BULB,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PICKLE RELISH,HAMBURGER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARUGULA,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARROTS,BABY,RAW",
    categories: [VEGGIES as category],
  },
  {
    name: "HEARTS OF PALM,CANNED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,HOT CHILE,SUN-DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NOPALES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NOPALES,CKD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAULIFLOWER,GREEN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAULIFLOWER,GRN,CKD,NO SALT ADDED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAULIFLOWER,GRN,CKD,W/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BROCCOLI,CHINESE,COOKED",
    categories: [VEGGIES as category],
  },
  {
    name: "CABBAGE,NAPA,COOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEMON GRASS (CITRONELLA),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEANS,FAVA,IN POD,RAW",
    categories: [LEGUMES as category],
  },
  {
    name: "GRAPE LEAVES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRAPE LEAVES,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPER,BANANA,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "PEPPERS,SERRANO,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,ANCHO,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,JALAPENO,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,CHILI,GRN,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,HUNGARIAN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,PASILLA,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PICKLES,CHOWCHOW,W/CAULIFLOWER ONION MUSTARD,SWT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EPAZOTE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FIREWEED,LEAVES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MALABAR SPINACH,COOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,OYSTER,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FUNGI,CLOUD EARS,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,STRAW,CND,DRND SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WASABI,ROOT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YAUTIA (TANNIER),RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,WHITE,MICROWAVED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,MAITAKE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BROCCOLI,CHINESE,RAW",
    categories: [VEGGIES as category],
  },
  {
    name: "FIDDLEHEAD FERNS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FIDDLEHEAD FERNS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSHROOMS,PORTABELLA,EXPOSED TO UV LT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREADFRUIT SEEDS,RAW",
    categories: [FRUITS as category],
  },
  {
    name: "BREADFRUIT SEEDS,BOILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SEEDS,BREADNUT TREE SEEDS,RAW",
    categories: [GRAINS as category],
  },
  {
    name: "SEEDS,BREADNUT TREE SEEDS,DRIED",
    categories: [GRAINS as category],
  },
  {
    name: "CHIA SEEDS,DRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COTTONSEED FLR,PART DEFATTED (GLANDLESS)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COTTONSEED FLR,LOFAT (GLANDLESS)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COTTONSEED MEAL,PART DEFATTED (GLANDLESS)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SEEDS,HEMP SD,HULLED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LOTUS SEEDS,DRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PUMPKIN&SQUASH SD KRNLS,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUMPKIN&SQUASH SD KRNLS,RSTD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAFFLOWER SD KRNLS,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAFFLOWER SD MEAL,PART DEFATTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SESAME SEEDS,WHOLE,DRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SESAME SEEDS,WHL,RSTD&TSTD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SESAME SD KRNLS,TSTD,WO/SALT (DECORT)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SESAME FLR,PART DEFATTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SESAME FLOUR,LOW-FAT",
    categories: [GRAINS as category],
  },
  {
    name: "SESAME MEAL,PART DEFATTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNFLOWER SD KRNLS,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNFLOWER SD KRNLS,DRY RSTD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNFLOWER SD KRNLS,OIL RSTD,WO/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SUNFLOWER SD KRNLS,TSTD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNFLOWER SD BUTTER,WO/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SUNFLOWER SD FLR,PART DEFATTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ACORNS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ACORNS,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ACORN FLOUR,FULL FAT",
    categories: [GRAINS as category],
  },
  {
    name: "ALMONDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALMONDS,BLANCHED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALMONDS,DRY RSTD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALMONDS,OIL RSTD,WO/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "ALMOND PASTE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEECHNUTS,DRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BRAZILNUTS,DRIED,UNBLANCHED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BUTTERNUTS,DRIED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CASHEW NUTS,DRY RSTD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CASHEW NUTS,OIL RSTD,WO/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "NUTS,CASHEW NUTS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CASHEW BUTTER,PLN,WO/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHESTNUTS,CHINESE,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHESTNUTS,CHINESE,DRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHESTNUTS,CHINESE,BLD&STMD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHESTNUTS,CHINESE,ROASTED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHESTNUTS,EUROPEAN,RAW,UNPEELED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHESTNUTS,EUROPEAN,RAW,PEELED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHESTNUTS,EUROPEAN,DRIED,UNPEELED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHESTNUTS,EUROPEAN,DRIED,PEELED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHESTNUTS,EUROPEAN,BLD&STMD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COCONUT MEAT,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COCONUT MEAT,DRIED (DESICCATED),NOT SWTND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COCONUT MEAT,DRIED (DESICCATED),SWTND,FLAKED,PACKAGED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COCONUT MEAT,DRIED (DESICCATED),SWTND,FLAKED,CND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COCONUT MEAT,DRIED (DESICCATED),TSTD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COCONUT CRM,RAW (LIQ EXPRESSED FROM GRATED MEAT)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "NUTS,COCNT CRM,CND,SWTND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COCONUT MILK,RAW (LIQ EXPRESSED FROM GRATED MEAT&H2O)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COCONUT MILK,CND (LIQ EXPRESSED FROM GRATED MEAT&H2O)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COCONUT H2O (LIQ FROM COCONUTS)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "HAZELNUTS OR FILBERTS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "HAZELNUTS OR FILBERTS,BLANCHED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "HAZELNUTS OR FILBERTS,DRY RSTD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "GINKGO NUTS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "GINKGO NUTS,DRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "GINKGO NUTS,CANNED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "HICKORYNUTS,DRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MACADAMIA NUTS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MACADAMIA NUTS,DRY RSTD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MIXED NUTS,DRY RSTD,W/PNUTS,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "NUTS,MXD NUTS,DRY RSTD,W/PNUTS,SALT ADD,PLANTERS PSTACH BLND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MIXED NUTS,OIL RSTD,W/PNUTS,WO/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MIXED NUTS,OIL RSTD,WO/PNUTS,WO/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FORMULATED,WHEAT-BASED,UNFLAVORED,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NUTS,MXD NUTS,DRY RSTD,W/ PNUTS,SALT ADDED,CHOSEN ROASTER",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PECANS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PECANS,DRY RSTD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PECANS,OIL RSTD,WO/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "NUTS,PILINUTS,DRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "NUTS,PINE NUTS,DRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PINE NUTS,PINYON,DRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PISTACHIO NUTS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PISTACHIO NUTS,DRY RSTD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "WALNUTS,BLACK,DRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "WALNUTS,ENGLISH",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "NUTS,WALNUTS,GLAZED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "NUTS,WALNUTS,DRY RSTD,W/ SALT ADDED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BREADFRUIT SEEDS,ROASTED",
    categories: [FRUITS as category],
  },
  {
    name: "COTTONSEED KRNLS,RSTD (GLANDLESS)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PUMPKIN&SQUASH SEEDS,WHL,RSTD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SESAME BUTTER,TAHINI,FROM RSTD&TSTD KRNLS (MOST COMMON TYPE)",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHESTNUTS,EUROPEAN,RSTD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SESAME BUTTER,PASTE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SESAME FLOUR,HIGH-FAT",
    categories: [GRAINS as category],
  },
  {
    name: "SESAME BUTTER,TAHINI,FROM UNROASTED KRNLS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "WATERMELON SD KRNLS,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHESTNUTS,JAPANESE,DRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COCONUT MILK,FRZ (LIQ EXPRESSED FROM GRATED MEAT&H2O)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COCONUT MEAT,DRIED (DESICCATED),CRMD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COCONUT MEAT,DRIED (DESICCATED),SWTND,SHREDDED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SISYMBRIUM SP. SEEDS,WHL,DRIED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "ALMOND BUTTER,PLN,WO/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SESAME BUTTER,TAHINI,FROM RAW&STONE GROUND KRNLS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FORMULATED,WHEAT-BASED,ALL FLAVORS XCPT MACADAMIA,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SESAME SD KRNLS,DRIED (DECORT)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHESTNUTS,JAPANESE,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHESTNUTS,JAPANESE,BLD&STMD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHESTNUTS,JAPANESE,RSTD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LOTUS SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "ALMONDS,HONEY RSTD,UNBLANCHED",
    categories: [SWEETS as category],
  },
  {
    name: "SEEDS,FLAXSEED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PUMPKIN&SQUASH SD KRNLS,RSTD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SESAME SD KRNLS,TSTD,W/SALT (DECORT)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEEDS,SUNFLOWER SD KRNLS FROM SHELL,DRY RSTD,W/ SALT ADDED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SUNFLOWER SD KRNLS,DRY RSTD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNFLOWER SD KRNLS,OIL RSTD,W/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SUNFLOWER SD KRNLS,TSTD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNFLOWER SD BUTTER,W/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "ALMONDS,DRY RSTD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALMONDS,OIL RSTD,W/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "NUTS,ALMONDS,OIL RSTD,W/ SALT ADDED,SMOKE FLAVOR",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CASHEW NUTS,DRY RSTD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CASHEW NUTS,OIL RSTD,W/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CASHEW BUTTER,PLN,W/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MACADAMIA NUTS,DRY RSTD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MIXED NUTS,DRY RSTD,W/PNUTS,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "NUTS,MXD NUTS,OIL RSTD,W/ PNUTS,W/ SALT ADDED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "NUTS,MXD NUTS,OIL RSTD,WO/ PNUTS,W/ SALT ADDED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PECANS,DRY RSTD,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PECANS,OIL RSTD,W/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PISTACHIO NUTS,DRY RSTD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PUMPKIN&SQUASH SEEDS,WHL,RSTD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "NUTS,ALMONDS,OIL RSTD,LIGHTLY SALTED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "ALMOND BUTTER,PLN,W/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SESAME BUTTER,TAHINI,KRNLS UNSPEC",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "NUTS,MXD NUTS,OIL RSTD,W/ PNUTS,LIGHTLY SALTED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "NUTS,MXD NUTS,OIL RSTD,WO/ PNUTS,LIGHTLY SALTED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "BEEF,GRASS-FED,STRIP STEAKS,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CARCASS,LN&FAT,CHOIC,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CARCASS,LN&FAT,SEL,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,RTL CUTS,FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,RTL CUTS,FAT,CKD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,BRISKET,WHL,LN,ALL GRDS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GRASS-FED,GROUND,RAW",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN & FAT,1/8" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,FLANK,STEAK,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,FLANK,STEAK,LN & FAT,0" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,FLANK,STEAK,LN & FAT,0" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,FLANK,STEAK,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,FLANK,STEAK,LN,0" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,FLANK,STEAK,LN,0" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,EYE,SML END (RIBS 10-12),LN&FAT,0"FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BF,RIB,EYE,SML END (RIB 10-12),LN & FT,0" FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,RIB,EYE,SML END (RIBS 10-12),LN,0"FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,EYE,SML END (RIBS 10-12),LN,0"FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,RIB,SHORTRIBS,LN&FAT,CHOIC,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,RIB,SHORTRIBS,LN&FAT,CHOIC,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,RIB,SHORTRIBS,LN ONLY,CHOIC,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,RIB,SHORTRIBS,LN,CHOIC,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,FULL CUT,LN,1/4"FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,FULL CUT,LN,1/4"FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN & FAT,0" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: "USDA CMDTY,BF,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,SHANK CROSSCUTS,LN,1/4"FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHANK CROSSCUTS,LN,1/4"FAT,CHOIC,CKD,SIMMRD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STEAK,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STEAK,LN,1/8" FAT,CHOIC,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,T-BONE STEAK,BONE-IN,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LN,T-BONE STK,BN-IN,LN,1/8" FAT,CHOIC,CKD,GRILLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE,SML END (RIBS 10-12),LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,UND BL POT RST,BNLESS,LN,0" FAT,ALL GRDS,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UND BL POT RST,BNLESS,LN,0" FAT,ALL GRDS,CKD, BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHCK,UND BL POT RST OR STEAK,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,PATTIES,FRZ,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,BRAIN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,BRAIN,CKD,PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,BRAIN,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,HEART,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,HEART,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,KIDNEYS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,KIDNEYS,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,LIVER,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS & BY-PRODUCTS,LIVER,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF, VAR MEATS&BY-PRODUCTS, LIVER, CKD, PAN-FRIED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,LUNGS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,LUNGS,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,MECHANICALLY SEPARATED BF,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,PANCREAS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,PANCREAS,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,SPLEEN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,SPLEEN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS & BY-PRODUCTS,SUET,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,THYMUS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,THYMUS,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,TONGUE,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,TONGUE,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS&BY-PRODUCTS,TRIPE,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,SNDWCH STEAKS,FLAKED,CHOPD,FORMED & THINLY SLICED,RAW",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN,0" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CURED,BRKFST STRIPS,RAW OR UNHTD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CURED,BRKFST STRIPS,CKD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CURED,CORNED BF,BRISKET,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CURED,CORNED BF,BRISKET,CKD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CURED,CORNED BF,CND",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UND BLADE POT RST OR STK,BNLESS,LN,0" FAT,SEL, RAW',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CURED,DRIED",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,UNDER BLADE CNTR STEAK,BNLESS,DENVER CUT,LN,0" FA',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,UNDER BLADE CNTR STEAK,BNLESS,DENVER CUT,LN,0" FA',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CURED,LUNCHEON MEAT,JELLIED",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UND BL CNTR STK,BNLESS,DEN CUT,LN,0" FA, SEL, CKD',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CURED,PASTRAMI",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UNDBL CNTR STK,BNLESS,DENCUT,LN,0" FA, ALL GRD, RAW',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CURED,SAUSAGE,CKD,SMOKED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CURED,SMOKED,CHOPD BF",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UND BLCNTR STK,BNLESS,DEN CUT,LN,0" FA, CHOICE, RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN&FAT,0"FAT,ALL GRDS,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN&FAT,0"FAT,CHOIC,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN&FAT,0"FAT,SEL,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN,0" FAT,ALL GRDS,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN,0"FAT,CHOIC,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN,0"FAT,SEL,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,WHL,LN&FAT,0"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,WHL,LN,0"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN&FAT,0"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN,0"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,POINT HALF,LN&FAT,0"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,POINT HALF,LN,0"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN&FAT,0"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN & FAT,0" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN,0"FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN,0"FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,BLADE RST,LN&FAT,0"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHCK,UNDR BLDE POT RST,BNLS,LN & FAT,0",CHC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHCK,UNDR BLDE POT RST,BNLS,LN & FAT,0",SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,BLADE RST,LN,0"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UNDER BLADE POT RST,BNLESS,LN,0" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,UNDER BLADE POT RST,BNLESS,LN,0" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,0"FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,0"FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN,0"FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN,0"FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN,0"FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,0"FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,0"FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,0"FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN,0"FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN,0"FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN,0"FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN & FAT,0" FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,RST,LN & FAT,0" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN & FAT,0" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,RST,LN & FAT,0" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN & FAT,0" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,RST,LN & FAT,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN,0" FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,RST,LN,0" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN,0" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'Beef, bottom round, roast,lean only, 0" fat, choice, roasted',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN,0" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND RST,LN,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND RST,BNLESS,L & F,0" FAT,A GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND RST,BNLESS,LN & FT,0" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND RST,BNLESS,LN & FAT,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND RST,BNLESS,LN,0" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND RST,BNLESS,LN,0" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND RST,BNLESS,LN,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN & FAT,0" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN & FAT,0" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN & FAT,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN,0" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN,0" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,LN&FAT,0"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,LN&FAT,0"FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,LN&FAT,0"FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,LN,0"FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,LN,0"FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TNDRLN STEAK,BNLESS,L & F,0" F,A GRDS,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN STK,BNLESS,L & F,0" F,CHOIC,CKD,GRLLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN STK,BNLESS,L & F,0" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN STK,BNLESS,L,0" F,ALL GRDS,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN STEAK,BNLESS,LN,0" FAT,CHOIC,CKD,GRLLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN STEAK,BNLESS,LN,0" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOPLOINSTK,BNLS,LIPOFF,LN FT,0" FT,ALLGRD,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOPLOINSTK,BNLS,LIP OFF,LN FT,0" FT,CHC,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOPLOINSTK,BNLS,LIP OFF,LN FAT,0" FT,SEL,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOPLOINSTK,BNLS,LIP OFF,LN,0" FT,ALL GRD,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP LOIN STK,BNLS,LIP OFF,LN,0" FAT,CHOIC,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP LOIN STK,BNLS,LIP OFF,LN,0" FAT,SEL,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN & FAT,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN & FAT,0" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN & FAT,0" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN,0" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN,0" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STK,LN & FAT,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,PRTRHS STK,LN & FAT,0" FAT,USDA CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STK,LN & FAT,0" FAT,USDA SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STEAK,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STEAK,LN,1/8" FAT,ALL GRDS,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STEAK,LN,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STEAK,LN,0" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STEAK,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STEAK,LN,1/8" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STEAK,LN,0" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,T-BONE STK,LN & FAT,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,T-BONE STEAK,LN & FAT,0" FAT,USDA CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,T-BONE STK,LN & FAT,0" FAT,USDA SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,T-BONE STEAK,BONE-IN,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LN,T-BN STK,BN-IN,LN,1/8" FAT,ALL GRDS,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,T-BONE STEAK,LN,0" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,T-BONE STEAK,BONE-IN,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LN,T-BONE STK,BONE-IN,LN,1/8" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,T-BONE STEAK,LN,0" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN,0" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,EYE,SML END (RIBS 10- 12) LN,0" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND STEAK,BNLESS,LN,0" FAT,ALL GRDS,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND STEAK,BNLESS,LN,0" FAT,CHOIC,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND STEAK,BNLESS,LN,0" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,70% LN MEAT / 30% FAT,CRUMBLES,CKD,PAN-BROWNED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,70% LN MEAT / 30% FAT,LOAF,CKD,BKD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,70% LN MEAT / 30% FAT,PATTY CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "BEEF,GROUND,70% LN MEAT / 30% FAT,PATTY,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,70% LN MEAT / 30% FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UND BL CNTR STK,BNLESS,DEN CUT,LN,0" FA, SEL, RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN,0" FAT,ALL GRDS,CKD,GRI',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN,0" FAT,CHOIC,CKD,GRILLE',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN,0" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,BNLESS LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,BNLESS LN,0" FAT,ALL CHOICE,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR TOP BLADE STK,BNLES,LN & FAT,0" ,ALL GRDS,CKD,G',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR POT RST OR STEAK,BNLESS,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR POT RST OR STEAK,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR POT RST OR STEAK,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR TOP BLDE STK,BNS,LN & FAT,0" FAT,CHOIC,CKD,G',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE RST,BNLESS,A BF RST,LN & FAT,0",ALL G,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE RST,BNLS,A BF RST,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE RST,BNLS,A BF RST,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN&FAT,1/8"FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN&FAT,1/8"FAT,ALL GRDS,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN&FAT,1/8"FAT,CHOIC,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN&FAT,1/8"FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN&FAT,1/8"FAT,SEL,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,WHL,LN&FAT,1/8"FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,WHL,LN&FAT,1/8"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN&FAT,1/8"FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN&FAT,1/8"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,POINT HALF,LN&FAT,1/8"FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,POINT HALF,LN&FAT,1/8"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN&FAT,1/8"FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN&FAT,1/8"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN&FAT,1/8"FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN&FAT,1/8"FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN&FAT,1/8"FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,BLADE RST,LN&FAT,1/8"FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,BLADE RST,LN&FAT,1/8"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,BLADE RST,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,BLADE RST,LN&FAT,1/8"FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,BLADE RST,LN&FAT,1/8"FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,BLADE RST,LN&FAT,1/8"FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CHK EYE RST,BNL,AMERICA'S BF RST,LN,0\" FAT,ALL GRD, CKD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CHK EYE RST,BNLESS,AMERICA'S BF RST,LN,0\" FAT,CHOIC,CKD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CHUCK EYE RST,BNLESS,AMERICA'S BF RST,LN,0\" FAT,SEL,CKD",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8"FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8"FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8"FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8"FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8"FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8"FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8"FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8"FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8"FAT,PRIME,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8"FAT,PRIME,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,WHL (RIBS 6-12),LN&FAT,1/8"FAT,PRIME,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8"FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8"FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8"FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8"FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8"FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8"FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8"FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8"FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8"FAT,PRIME,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8"FAT,PRIME,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,LRG END (RIBS 6-9),LN&FAT,1/8"FAT,PRIME,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8"FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8"FAT,ALL GRDS,CKD,BR',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8"FAT,ALL GRDS,CKD,RS',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8"FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8"FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8"FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8"FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8"FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8"FAT,PRIME,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8"FAT,PRIME,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN&FAT,1/8"FAT,PRIME,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR TOP BLDE STK,BNLS,LN & FAT,0" FAT,SEL,CKD,G',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR TOP BLADE STEAK,BNLS,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,FULL CUT,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,FULL CUT,LN&FAT,1/8"FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,FULL CUT,LN&FAT,1/8"FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,FULL CUT,LN&FAT,1/8"FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN & FAT,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN & FAT,1/8" FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,RST,LN & FAT,1/8" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN & FAT,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN & FAT,1/8" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,RST,LN & FAT,1/8" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN & FAT,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN & FAT,1/8" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,RST,LN & FAT,1/8" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND,RST,LN & FAT,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND,RST,LN & FAT,1/8" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND,RST,LN & FAT,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND,RST,LN & FAT,1/8" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND,RST,LN & FAT,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND,RST,LN & FAT,1/8" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,LN&FAT,1/8"FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN & FAT,1/8" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN & FAT,1/8" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,LN&FAT,1/8"FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN & FAT,1/8" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,LN,1/8" FAT,CHOIC,CKD,PAN-FRIED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,STEAK,LN & FAT,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,LN&FAT,1/8"FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND STEAK,LN & FAT,1/8" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,STEAK,LN & FAT,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,LN&FAT,1/8"FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,STEAK,LN & FAT,1/8" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,LN&FAT,1/8"FAT,CHOIC,CKD,PAN-FRIED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,STEAK,LN & FAT,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,LN&FAT,1/8"FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,STEAK,LN & FAT,1/8" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,LN&FAT,1/8"FAT,PRIME,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,STEAK,LN & FAT,1/8" FAT,PRIME,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR TOP BLADE STEAK,BNLESS,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,BNLESS,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STEAK,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STK,LN & FAT,1/8" FAT,CHOIC,CKD,GRILLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,T-BONE STEAK,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LN,T-BONE STK,L & F,1/8" FAT,CHOIC,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,TOP LOIN,STEAK,LN & FAT,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP LOIN,LN & FAT,1/8" FAT,ALL GRDS,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP LOIN,LN & FAT,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,TOP LN,STK,LN & FAT,1/8" FAT,CHOIC,CKD,GRLLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP LOIN,LN & FAT,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP LOIN,LN & FAT,1/8" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,TOP LOIN,STEAK,LN & FAT,1/8" FAT,PRIME,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,TOP LOIN,LN&FAT,1/8"FAT,PRIME,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,STEAK,LN & FAT,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,STEAK,LN & FAT,1/8" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,RST,LN & FAT,1/8" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,STEAK,LN & FAT,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,STEAK,LN & FAT,1/8" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,RST,LN & FAT,1/8" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,STEAK,LN & FAT,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,STEAK,LN & FAT,1/8" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,RST,LN & FAT,1/8" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,LN&FAT,1/8"FAT,PRIME,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,STEAK,LN & FAT,1/8" FAT,PRIME,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,RST,LN & FAT,1/8" FAT,PRIME,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN & FAT,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN & FAT,1/8" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN & FAT,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN & FAT,1/8" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN & FAT,1/8" FAT,CHOIC,CKD,PAN-FRIED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN & FAT,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN & FAT,1/8" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,CLOD RST,LN,0" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,CLOD RST,LN,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'Beef, shoulder steak, boneless, lean only, 0", choice, grill',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,SHLDR STEAK,BNLESS,LN,0" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,FLANK,STEAK,LN & FAT,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,FLANK,STEAK,LN & FAT,0" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN & FAT,0" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE,SML END (RIBS 10-12),LN & FAT,0",SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE,SML END(RIBS 10-12),LN&FAT,0",ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BF,BTTM SRLOIN,TRI-TIP RST,LN & FAT,0" FAT,ALL GRDS,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,BTTM SIRLOIN,TRI-TIP RST,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BTTM SIRLOIN,TRI-TIP RST,LN & FAT,0" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BTTM SIRLOIN,TRI-TIP RST,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BTTM SIRLOIN,TRI-TIP RST,LN & FAT,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BTTM SIRLOIN,TRI-TIP RST,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND STK,BNLS,LN & FAT,0" FAT,ALL GRDS,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,MOCK TENDER STEAK,LN,0" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,MOCK TENDER STEAK,LN,0" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,TOP BLADE,LN,0" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,TOP BLADE,LN,0" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND STK,BNLS,LN & FAT,0" FAT,CHOIC,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND STEAK,BNLS,LN & FAT,0" FAT,SEL,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,FLANK,STEAK,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,FLANK,STEAK,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CHK EYE RST,BNL,AMERICA'S BF RST,LN,0\" FAT,ALL GRD, RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CHK EYE RST,BNL,AMERICA'S BF RST,LN,0\" FAT,CHOIC,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CHUCK EYE RST,BNLESS,AMERICA'S BF RST,LN,0\" FAT,SEL,RAW",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,BNLESS,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE,INSIDE SKIRT STEAK,LN,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE,OUTSIDE SKIRT STEAK,LN,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF, CHUCK, SHORT RIBS, BNL, 0" FAT, CHOICE, CKED, BR',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,SHRT RIBS,BNLESS,LN,0" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,SHRT RIBS,BNLESS,LN,0" FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,BNLESS,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BF,LOIN,BTTM SIRLOIN BUTT,TRI-TIP,LN,0" FAT,ALL GRD,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,BEER,REG,ALL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,BEER,REG,BUDWEISER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,BEER,LT,BUDWEISER SEL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,BEER,LT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,BEER,LT,BUD LT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,DAIQUIRI,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,DAIQUIRI,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,BEER,LT,LO CARB",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,PINA COLADA,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ALMOND MILK,SWTND,VANILLA FLAVOR,RTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,PINA COLADA,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,TEQUILA SUNRISE,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ENERGY DRK,CITRUS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,MONSTER ENERGY DRK,LO CARB",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,WHISKEY SOUR MIX,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WHISKEY SOUR,PREP W/ H2O,WHISKEY & PDR MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEV, COCA-COLA COMY,NOS 0,ENEY DRK,SUG-FRE, GUANA,  B6 & B12",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WHISKEY SOUR,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,WHISKEY SOUR MIX,BTLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WHISKEY SOUR,PREP FROM ITEM 14028",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEV,COCA-COLA CO,NOS ENGY ,OGN,GRPE,CHERY,CITR, VIT B6 & B12",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEV,H2O,BTLD,YUMBERRY,POMEGRANATE W/ ANTI-OXIDANTS, 0 CAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ABBOTT,EAS WHEY PROT PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,CREME DE MENTHE,72 PROOF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ABBOTT,EAS SOY PROT PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CYTOSPORT,MUSCLE MILK,RTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,DISTILLED,ALL (GIN,RUM,VODKA,WHISKEY) 80 PROOF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,OCEAN SPRAY,CRAN-ENERGY,CRANBERRY ENERGY JUC DRK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,NESTLE,BOOST PLUS,NUTRITIONAL DRK,RTD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEVERAGES,SLIMFAST,MEAL REPLCMNT,HI PROT SHAKE,RTD,3-2-1",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,UNILEVER,SLIMFAST,MEAL REPLCMNT,REG,RTD,3-2-1 PLAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,UNILEVER,SLIMFAST SHAKE MIX,PDR,3-2-1 PLAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,FUZE,ORANGE MANGO,FORT W/ VITAMINS A,C,E,B6",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,DISTILLED,GIN,90 PROOF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,DISTILLED,RUM,80 PROOF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,DISTILLED,VODKA,80 PROOF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,DISTILLED,WHISKEY,86 PROOF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ALMOND MILK,CHOC,RTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAG,UNILEV,SLIMFAST SHAKE ,HI PROT,WHEY PDR,3-2-1 PLAN,",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ACAI BERRY DRK,FORT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,DSSRT,SWT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,WHEY PROT PDR ISOLATE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,KELLOGG'S,SPL K PROT SHAKE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ENERGY DRK W/ CARB H2O & HI FRUCTOSE CORN SYRUP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ENERGY DRK,SUGAR FREE",
    categories: [SWEETS as category],
  },
  {
    name: "BEVERAGES,ABBOTT,ENSURE,NUTRITIONAL SHAKE,RTD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEVERAGES,CHOC PDR,NO SUGAR ADDED",
    categories: [SWEETS as category],
  },
  {
    name: "BEVERAGES,ORANGE JUC,LT,NO PULP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,THE COCA-COLA COMPANY,HI-C FLASHIN' FRUIT PUNCH",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,PROT PDR WHEY BSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,PROT PDR SOY BSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,KELLOGG'S SPL K20 PROT PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ZEVIA,COLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ZEVIA,COLA,CAFFEINE FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGE,GMBH & CO. KG,GEROLSTEINER NATURALLY SPARK MIN H2O,",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ICELANDIC,GLACIAL NAT SPRING H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,YEL GRN COLORED CITRUS SOFT DRK W/ CAFFEINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,RICH CHOC,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEV,GEROLSTEINER BRUNNEN,NATURALLY SPARKLING,MIN BTLD H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CHOC MALT,PDR,PREP W/ FAT FREE MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,ALL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH SMOOTHIES,PEACH MANGO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH SMOOTHIES,STRAWBERRY BANANA",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH SMOOTHIES,TROPICAL COLADA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,COCNT H2O,RTD,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ALMOND MILK,UNSWTND,SHELF STABLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEV,CHOC ALMOND MILK,UNSWTND,SHELF-STABLE,FORT W/ VIT D2 & E",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGE, COCA-COLA CO,GLACEAU VIT H2O,REVIVE FRT PUNCH,FORT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,MINUTE MAID,LEMONADA,LIMEADE",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,CABERNET SAUVIGNON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,CABERNET FRANC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,PINOT NOIR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,SYRAH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,BARBERA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,ZINFANDEL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,PETITE SIRAH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,CLARET",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,LEMBERGER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,SANGIOVESE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,CARIGNANE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,WHITE,PINOT GRIS (GRIGIO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,WHITE,CHENIN BLANC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,WHITE,FUME BLANC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,MXD VEG & FRUIT JUC DRK,W/ ADDED NUTR",
    categories: [FRUITS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,WHITE,MULLER THURGAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CARB,CLUB SODA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,WHITE,GEWURZTRAMINER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,WHITE,LATE HARVEST,GEWURZTRAMINER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,WHITE,SEMILLON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARBONATED BEV,CRM SODA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,WHITE,RIESLING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,WHITE,SAUVIGNON BLANC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,WHITE,LATE HARVEST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CARB,GINGER ALE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,NESTEA,TEA,BLACK,RTD,LEMON",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,WHITE,PINOT BLANC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,WHITE,MUSCAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CARB,GRAPE SODA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CARB,LO CAL,OTHER THAN COLA OR PEPPER,WO/ CAFFEINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CARB,LEMON-LIME SODA,NO CAFFEINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CARB,SPRITE,LEMON-LIME,WO/ CAFFEINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CARB,LO CAL,COLA OR PEPPER-TYPE,W/ ASPRT,WO/ CAF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CARB,COLA,WO/ CAFFEINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CARB,COLA,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CARB,RED SUGAR,COLA,CONTAINS CAFFEINE & SWEETENERS",
    categories: [SWEETS as category],
  },
  {
    name: "BEVERAGES,CARB,ORANGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEV,CARB,LO CAL,OTHER THAN COLA OR PEPPER,W/ ASPRT, CAFFEINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,BURGUNDY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CARB,PEPPER-TYPE,CONTAINS CAFFEINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ENERGY DRK,RED BULL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CARB,TONIC H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ENERGY DRK,RED BULL,SUGAR FREE,W/ ADDED CAFFEINE,",
    categories: [SWEETS as category],
  },
  {
    name: "BEVERAGES,CARB,ROOT BEER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,GAMAY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,MOUVEDRE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,WHITE,CHARDONNAY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,KIWI STRAWBERRY JUC DRK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,APPL JUC DRK,LT,FORT W/ VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CHOC DRK,MILK & SOY BSD,READY TO DRK,FORT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CHOC MALT PDR,PREP W/ 1% MILK,FORT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CARB,LIMEADE,HI CAFFEINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEV,CARB,LO CAL,COLA OR PEPER-TYPE,W/ NA SACCHARIN, CAFFEINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,POWERADE,ZERO,MXD BERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CAROB-FLAVOR BEV MIX,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CAROB-FLAVOR BEV MIX,PDR,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,COCNT MILK,SWTND,FORT W/ CA,VITAMINS A,B12,D2",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,COFFEE,READY TO DRK,VANILLA,LT,MILK BSD,SWTND",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVE,LEMONADE FRUIT JUC DRK LT,FORT W/ VIT E & C",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,CHOCOLATE-FLAVOR BEV MIX,PDR,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,COFFEE,READY TO DRK,MILK BSD,SWTND",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,COFFEE,BREWED,BRKFST BLEND",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,CHOC SYRUP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CHOC SYRUP,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,COFFEE,READY TO DRK,ICED,MOCHA,MILK BSD",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,OOLONG,BREWED",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,CLAM & TOMATO JUC,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,TEA,GRN,READY TO DRK,GINSENG & HONEY,SWTND",
    categories: [SWEETS as category],
  },
  {
    name: "BEVERAGES,THE COCA-COLA COMPANY,MINUTE MAID,LEMONADE",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEVERAGES,TEA,GRN,RTD,DIET",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,GRN,RTD,CITRUS,DIET,FORT W/ VIT C",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,COCOA MIX,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,COCOA MIX,PDR,PREP W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEV,COCOA MIX,NESTLE,HOT COCOA MIX RICH CHOC W/ MARSHMALLOWS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,COCOA MIX,NO SUGAR ADDED,PDR",
    categories: [SWEETS as category],
  },
  {
    name: "COCOA MIX,NESTLE,RICH CHOC HOT COCOA MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,TEA,BLACK,RTD,LEMON,SWTND",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,COFFEE,BREWED,PREP W/ TAP H2O,DECAFFEINATED",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,COFFEE,BREWED,ESPRESSO,REST-PREP,DECAFFEINATED",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,COFFEE,INST,REG,HALF THE CAFFEINE",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,COFFEE&COCOA,INST,DECAFFEINATED,W/WHTNR&LOCALSWTNR",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,GRN,RTD,SWTND",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,RTD,LEMON,DIET",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,COFFEE,BREWED,PREP W/ TAP H2O",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,COFFEE,BREWED,ESPRESSO,REST-PREP",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,BLACK,RTD,LEMON,DIET",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,COFFEE,INST,REG,PDR",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,COFFEE,INST,REG,PREP W/ H2O",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,ALOE VERA JUC DRK,FORT W/ VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,OCEAN SPRAY,CRAN GRAPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,COFFEE,INST,DECAFFEINATED,PDR",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,COFFEE,INST,DECAFFEINATED,PREP W/ H2O",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "Beverages, OCEAN SPRAY, Cranberry-Apple Juice Drink, bottled",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,OCEAN SPRAY,DIET CRANBERRY JUC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,COFFEE,INST,W/ CHICORY",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,COFFEE,INST,CHICORY",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,COFFEE,INST,MOCHA,SWTND",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,OCEAN SPRAY,LT CRANBERRY & RASPBERRY FLAV JUC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,OCEAN SPRAYWHITE CRANBERRY STRAWBERRY FLAV JUC DRK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,KRAFT,COFFEE,INST,FRENCH VANILLA CAFE",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "Beverages, OCEAN SPRAY, Cran Raspberry Juice Drink",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,OCEAN SPRAY,CRAN LEMONADE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEV, OCEAN SPRAY, CRAN CHERRY DIET",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,COFFEE SUB,CRL GRAIN BEV,PDR",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,COFFEE SUB,CRL GRAIN BEV,PREP W/ H2O",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,CRANBERRY-APPLE JUC DRK,BTLD",
    categories: [FRUITS as category],
  },
  {
    name: "ALCOHOLIC BEV,MALT BEER,HARD LEMONADE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CRANBERRY-APRICOT JUC DRK,BTLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CRANBERRY-GRAPE JUC DRK,BTLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRANBERRY JUC COCKTAIL,BTLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRANBERRY JUC COCKTAIL,BTLD,LO CAL,W/CA,SACCHARIN&CORN SWTNR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,EGGNOG-FLAVOR MIX,PDR,PREP W/ WHL MILK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BEVERAGES,TEA,GRN,INST,DECAFFEI,LEMON,UNSWTND,FORT W/ VIT C",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,BLACK,READY TO DRK",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "ALCOHOLIC BEV,BEER,LT,HIGHER ALCOHOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,AMBER,HARD CIDER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEVERAGES,BEER,HIGHER ALCOHOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,MALT LIQUOR BEV",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEVERAGES,WINE,ROSE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,OCEAN SPRAY,CRAN POMEGRANATE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,OCEAN SPRAY,CRAN CHERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,OCEAN SPRAY,LT CRANBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Beverages, OCEAN SPRAY, White Cranberry Peach",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,OCEAN SPRAY,LT CRANBERRY,CONCORD GRAPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,TEA,GRN,BREWED,DECAFFEINATED",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,GRN,READY TO DRK,UNSWTND",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,CITRUS FRUIT JUC DRK,FRZ CONC",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,CITRUS FRUIT JUC DRK,FRZ CONC,PREP W/ H2O",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,FRUIT PUNCH DRK,WO/ ADDED NUTR,CND",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,FRUIT PUNCH DRK,W/ ADDED NUTR,CND",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,FRUIT PUNCH DRK,FRZ CONC",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,FRUIT PUNCH DRK,FRZ CONC,PREP W/ H2O",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,COFFEE,INST,VANILA,SWTND,DECAFF,W/ NON DAIRY CREAM",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TROPICAL PUNCH,RTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,GRAPE DRK,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,TEA,GRN,BREWED,REG",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,BLACK,RTD,PEACH,DIET",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,BLACK,READY TO DRK,DECAFFEINATED,DIET",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,BLACK,READY TO DRK,DECAFFEINATED",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,GRAPE JUC DRK,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CRANBERRY JUC COCKTAIL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,OCEAN SPRAY,RUBY RED CRANBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,MOTTS,APPL JUC LT,FORT W/ VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,LEMONADE,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEMONADE,PDR,PREP W/H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,SNAPPLE,TEA,BLACK & GRN,READY TO DRK,PEACH,DIET",
    categories: [FRUITS as category],
  },
  {
    name: "LEMONADE,FRZ CONC,WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEMONADE,FRZ CONC,WHITE,PREP W/H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,SNAPPLE,TEA,BLACK & GRN,READY TO DRK,LEMON,DIET",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,LEMONADE-FLAVOR DRK,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,LEMONADE-FLAVOR DRK,PDR,PREP W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LIMEADE,FRZ CONC,PREP W/H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MALT BEV,INCL NON-ALCOHOLIC BEER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,OVALTINE,CLASSIC MALT PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERA,MALTED DRK MIX,NAT,W/ ADD NUTR,PDR,PREP W/ WHL MILK",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEVERAGES,MALTED DRK MIX,NAT,PDR,DAIRY BASED.",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,MALTED DRK MIX,NAT,PDR,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,OVALTINE,CHOC MALT PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAG,MALT DRK MIX,CHOC,W/ ADDED NUTR,PDR,PREP W/ WHL MILK",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEVERAGES,MALTED DRK MIX,CHOC,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,MALTED DRK MIX,CHOC,PDR,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ORANGE DRK,CND,W/ ADDED VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ORANGE & APRICOT JUC DRK,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,PNAPPL & GRAPEFRUIT JUC DRK,CND",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,PNAPPL & ORANGE JUC DRK,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHAKE,FAST FOOD,VANILLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STRAWBERRY-FLAVOR BEV MIX,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,STRAWBERRY-FLAVOR BEV MIX,PDR,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,TEA,BLACK,BREWED,PREP W/ TAP H2O,DECAFFEINATED",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,INST,DECAFFEINATED,UNSWTND",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,BLACK,BREWED,PREP W/ TAP H2O",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,INST,DECAFFEINATED,LEMON,DIET",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,INST,DECAFFEINATED,LEMON,SWTND",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,INST,UNSWTND,PDR",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,INST,UNSWTND,PREP W/ H2O",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,INST,LEMON,UNSWTND",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,INST,LEMON,SWTND,PDR",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,INST,LEMON,SWTND,PREP W/ H2O",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,INST,SWTND W/ NA SACCHARIN,LEMON-FLAVORED,PDR",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,INST,LEMON,DIET",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,HERB,OTHER THAN CHAMOMILE,BREWED",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,H2O,BTLD,PERRIER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,H2O,BTLD,POLAND SPRING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,COCOA MIX,W/ ASPRT,PDR,PREP W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,CARB,COLA,FAST-FOOD COLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,FRUIT PUNCH JUC DRK,FRZ CONC",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,FRUIT PUNCH JUC DRK,FRZ CONC,PREP W/ H2O",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,ORANGE-FLAVOR DRK,BRKFST TYPE,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ORANGE-FLAVOR DRK,BRKFST TYPE,PDR,PREP W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ORANGE-FLAVOR DRK,BRKFST TYPE,LO CAL,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,H2O,TAP,DRINKING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,H2O,TAP,WELL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,LIQUEUR,COFFEE,53 PROOF",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "ALCOHOLIC BEV,LIQUEUR,COFFEE W/ CRM,34 PROOF",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,CARB,LO CAL,COLA OR PEPPER-TYPE,W/ ASPRT, CAFFEINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,COFFEE SUB,CRL GRAIN BEV,PDR,PREP W/ WHL MILK",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEV,DAIRY DRK MIX,CHOC,RED CAL,W/ LOW-CAL SWEETENERS,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVE,DARY DRK MIX,CHC,RED CAL,W/ ASPRT,PDR,PREP W/ H2O & ICE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEV,ORANGE-FLAVO DRK,BRKFST TYPE,W/ PULP,FRZ CON. NOT MANUF.",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVE,ORANGE-FLAV DRK,BRKFST TYPE,W/ PULP,FRZ CONC,PRE W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ORANGE DRK,BRKFST TYPE,W/ JUC & PULP,FRZ CONC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEV,ORANGE DRK,BRKFST TYPE,W/ JUC & PULP,FRZ CONC,PRE W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,SHAKE,FAST FD,STRAWBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,H2O,TAP,MUNICIPAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRANBERRY JUC COCKTAIL,FRZ CONC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRANBERRY JUC COCKTAIL,FRZ CONC,PREP W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,H2O,BTLD,NON-CARBONATED,DANNON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,H2O,BTLD,NON-CARBONATED,PEPSI,AQUAFINA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,THE COCA-COLA COMP,DASANI,H2O,BTLD,NON-CARBONATED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ORANGE BRKFST DRK,RTD,W/ ADDED NUTR",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEVERAGES,H2O,BTLD,NON-CARBONATED,CALISTOGA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,H2O,BTLD,NON-CARBONATED,CRYSTAL GEYSER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WATER,BTLD,NON-CARBONATED,NAYA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,H2O,BTLD,NON-CARBONATED,DANNON FLUORIDE TO GO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,DRK MIX,QUAKER OATS,GATORADE,ORANGE FLAVOR,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,PEPSICO QUAKER,GATORADE,G PERFORMANCE O 2,RTD.",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,COCA-COLA,POWERADE,LEMON-LIME FLAV,RTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,PROPEL ZERO,FRUIT-FLAVORED,NON-CARBONATED",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,ARIZONA,TEA,RTD,LEMON",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,LIPTON BRISK,TEA,BLACK,RTD,LEMON",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "WHISKEY SOUR MIX,BTLD,W/ K&NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WHISKEY SOUR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,DISTILLED,ALL (GIN,RUM,VODKA,WHISKEY) 94 PROOF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV DISTILLED,ALL (GIN,RUM,VODKA,WHISKEY) 100PROOF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,LIQUEUR,COFFEE,63 PROOF",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,DSSRT,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARBONATED BEV,LOCAL,OTHR THAN COLA OR PEP,W/ NA SAC,WO/ CAF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVE,COCA MIX,LO CAL,PDR,W/ ADD CA,P,ASPRT,WO/ ADD NA, VIT A",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGE,FRUIT PUNCH-FLAVOR DRK,PDR,WO/ ADDED NA,PREP W/ H2O",
    categories: [FRUITS as category],
  },
  {
    name: "LEMONADE,FRZ CONC,PINK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,LEMONADE,FRZ CONC,PINK,PREP W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,TEA,BLACK,BREWED,PREP W/ DISTILLED H2O",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,HERB,BREWED,CHAMOMILE",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,TEA,INST,LEMON,W/ ADDED VIT C",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "ALCOHOLIC BEV,DISTILLED,ALL (GIN,RUM,VODKA,WHISKEY) 86 PROOF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,DISTILLED,ALL (GIN,RUM,VODKA,WHISKEY) 90 PROOF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARBONATED BEV,CHOCOLATE-FLAVORED SODA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,WINE,NON-ALCOHOLIC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WATER,BTLD,GENERIC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGE,CHOCOLATE-FLAVOR BEV MIX FOR MILK,PDR,W/ ADDED NUTR",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEV,CHOCO-FLA BEV MIX , MLK,PDR,W/ ADD NUTR,PREP W/ WHL MILK",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEVERAGES,H2O,BTLD,NON-CARBONATED,EVIAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,POWERADE ZERO ION4,CALORIE-FREE,ASSORTED FLAVORS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,WENDY'S,TEA,RTD,UNSWTND",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,TABLE,RED,MERLOT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WATER,NON-CARBONATED,FRUIT FLAVORS,SWTND W/ LO CAL SWTNR",
    categories: [FRUITS as category],
  },
  {
    name: "BEV,H2O W/ ADDED VIT & MIN,BOTTLES,SWTND,AST FRUIT FLAVORS",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH JUC DRINKS,DIET BERRY BLEND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH JUC DRINKS,DIET FRUIT MEDLEY",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH JUC DRINKS,DIET STRAWBERRY KIWI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH JUC DRINKS,DIET TROPICAL BLEND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH JUC DRINKS,BERRY BLEND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH JUC DRINKS,FRUIT MEDLEY",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH JUC DRINKS,GUAVA PASSION FRUIT",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH JUC DRINKS,MANGO PEACH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH JUC DRINKS,ORANGE PNAPPL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH JUC DRINKS,ORCHARD BLEND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH JUC DRINKS,STRAWBERRY BANANA",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH JUC DRINKS,STRAWBERRY KIWI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,V8 SPLASH JUC DRINKS,TROPICAL BLEND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,V8 V-FUSION JUICES,PEACH MANGO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,V8 V-FUSION JUICES,STRAWBERRY BANANA",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,V8 V-FUSION JUICES,TROPICAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,V8 V- FUSION JUICES,ACAI BERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ENERGY DRK,AMP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ENERGY DRK,FULL THROTTLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ENERGY DRK,MONSTER,FORT W/ VITAMINS C,B2,B3,B6,B12",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ENERGY DRK,AMP,SUGAR FREE",
    categories: [SWEETS as category],
  },
  {
    name: "BEVERAGES,ENERGY DRK,ROCKSTAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ENERGY DRK,ROCKSTAR,SUGAR FREE",
    categories: [SWEETS as category],
  },
  {
    name: "BEVE,HORCHATA,DRY MIX,UNPREP,VAR  BRANDS,ALL W/ MORRO SEEDS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEVERAGES,MEAL SUPP DRK,CND,PNUT FLAVOR",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEVER,VEG & FRUIT JUC DRK,RED CAL,W/ LOW-CAL SWTNR,ADD VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "BEV,MILK BEV,RED FAT,FLAV & SWTND,RTD,ADDED CA,VIT A &  D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,VEG & FRUIT JUC BLEND,W/ ADDED VITAMINS A,C,E",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,FRUIT JUC DRK,RED SUGAR,W/ VITAMIN E ADDED",
    categories: [FRUITS as category],
  },
  {
    name: "WATER,W/ CORN SYRUP AND/OR SUGAR & LO CAL SWTNR,FRUIT FLAV",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,HORCHATA,AS SERVED IN RESTAURANT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,RICE MILK,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ENERGY DRK,VAULT,CITRUS FLAVOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,ENERGY DRK,VAULT ZERO,SUGAR-FREE,CITRUS FLAVOR",
    categories: [SWEETS as category],
  },
  {
    name: "BEVERAGES,PEPSICO QUAKER,GATORADE G2,LO CAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,FRUIT FLAV DRK,LESS THAN 3% JUC,NOT FORT W/ VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "BEV,FRUIT FLAV DRK CONTAINING , 3% FRUIT JUC,W/ HI VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "BEV,FRUIT FLAV DRK,RED SUGAR, > 3% FRUIT JUC,HI VIT C,ADD CA",
    categories: [FRUITS as category],
  },
  {
    name: "BEV,FRUIT JUC DRK, MORE  3% FRUIT JUC,HI VIT C & ADD THIAMIN",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,TEA,HIBISCUS,BREWED",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,FRUIT JUC DRK,GREATER THAN 3% JUC,HI VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,NUTRITIONAL SHAKE MIX,HI PROT,PDR",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "ANCHOVY,EUROPEAN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ANCHOVY,EUROPEAN,CND IN OIL,DRND SOL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "BASS,FRSH H2O,MXD SP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BASS,STRIPED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BLUEFISH,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "BURBOT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BUTTERFISH,RAW",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CARP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARP,COOKED,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CATFISH,CHANNEL,WILD,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "CATFISH,CHANNEL,CKD,BREADED&FRIED",
    categories: [SEAFOOD as category],
  },
  {
    name: "CAVIAR,BLACK&RED,GRANULAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CISCO,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CISCO,SMOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COD,ATLANTIC,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COD,ATLANTIC,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COD,ATLANTIC,CND,SOL&LIQ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COD,ATLANTIC,DRIED&SALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH,COD,PACIFIC,RAW (MAY HAVE BEEN PREVIOUSLY FROZEN)",
    categories: [SEAFOOD as category],
  },
  {
    name: "CROAKER,ATLANTIC,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CROAKER,ATLANTIC,CKD,BREADED&FRIED",
    categories: [GRAINS as category],
  },
  {
    name: "CUSK,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH,MAHIMAHI,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "DRUM,FRESHWATER,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EEL,MIXED SPECIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EEL,MXD SP,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH,FISH STKS,FRZ,PREP",
    categories: [SEAFOOD as category],
  },
  {
    name: "FLATFISH (FLOUNDER&SOLE SP),RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "FLATFISH (FLOUNDER&SOLE SP),CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "GEFILTEFISH,COMM,SWT RECIPE",
    categories: [SEAFOOD as category],
  },
  {
    name: "GROUPER,MIXED SPECIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GROUPER,MXD SP,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HADDOCK,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HADDOCK,COOKED,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HADDOCK,SMOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HALIBUT,ATLANTIC&PACIFIC,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HALIBUT,ATLANTIC&PACIFIC,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HALIBUT,GREENLAND,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HERRING,ATLANTIC,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HERRING,ATLANTIC,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HERRING,ATLANTIC,PICKLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HERRING,ATLANTIC,KIPPERED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HERRING,PACIFIC,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LING,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LINGCOD,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACKEREL,ATLANTIC,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACKEREL,ATLANTIC,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACKEREL,JACK,CND,DRND SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACKEREL,KING,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACKEREL,PACIFIC&JACK,MXD SP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACKEREL,SPANISH,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACKEREL,SPANISH,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILKFISH,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "MONKFISH,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "MULLET,STRIPED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MULLET,STRIPED,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OCEAN PERCH,ATLANTIC,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OCEAN PERCH,ATLANTIC,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POUT,OCEAN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PERCH,MIXED SPECIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PERCH,MXD SP,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIKE,NORTHERN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIKE,NORTHERN,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIKE,WALLEYE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POLLOCK,ATLANTIC,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH,POLLOCK,ALASKA,RAW (MAY HAVE BEEN PREVIOUSLY FROZEN)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,POLLOCK,ALASKA,CKD,DRY HEAT (MAYBE PREVIOUSLY FROZEN)",
    categories: [SEAFOOD as category],
  },
  {
    name: "POMPANO,FLORIDA,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POMPANO,FLORIDA,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROCKFISH,PACIFIC,MXD SP,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "ROCKFISH,PACIFIC,MXD SP,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "ROE,MIXED SPECIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROUGHY,ORANGE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SABLEFISH,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "SABLEFISH,SMOKED",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,ATLANTIC,WILD,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,CHINOOK,SMOKED",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,CHINOOK,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,CHUM,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,CHUM,DRND SOL W/BONE",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,COHO,WILD,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,COHO,WILD,CKD,MOIST HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,PINK,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,PINK,CND,TOTAL CAN CONTENTS",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,SOCKEYE,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,SOCKEYE,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,SOCKEYE,CND,DRND SOL",
    categories: [SEAFOOD as category],
  },
  {
    name: "SARDINE,ATLANTIC,CND IN OIL,DRND SOL W/BONE",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SARDINE,PACIFIC,CND IN TOMATO SAU,DRND SOL W/BONE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCUP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEA BASS,MXD SP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEA BASS,MXD SP,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEATROUT,MXD SP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHAD,AMERICAN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHARK,MIXED SPECIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHARK,MXD SP,CKD,BATTER-DIPPED&FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHEEPSHEAD,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHEEPSHEAD,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SMELT,RAINBOW,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SMELT,RAINBOW,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNAPPER,MIXED SPECIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNAPPER,MXD SP,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPOT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STURGEON,MXD SP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STURGEON,MXD SP,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STURGEON,MXD SP,SMOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUCKER,WHITE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNFISH,PUMPKIN SEED,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "SURIMI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWORDFISH,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "SWORDFISH,COOKED,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "TILEFISH,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "TILEFISH,COOKED,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "TROUT,MIXED SPECIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TROUT,RAINBOW,WILD,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TROUT,RAINBOW,WILD,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TUNA,FRESH,BLUEFIN,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "TUNA,FRSH,BLUEFIN,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "TUNA,LT,CND IN OIL,DRND SOL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FISH,TUNA,LT,CND IN H2O,DRND SOL",
    categories: [SEAFOOD as category],
  },
  {
    name: "TUNA,FRESH,SKIPJACK,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "TUNA,WHITE,CND IN OIL,DRND SOL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "TUNA,WHITE,CND IN H2O,DRND SOL",
    categories: [SEAFOOD as category],
  },
  {
    name: "TUNA,FRESH,YELLOWFIN,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "TUNA SALAD",
    categories: [SEAFOOD as category],
  },
  {
    name: "TURBOT,EUROPEAN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHITEFISH,MXD SP,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "WHITEFISH,MXD SP,SMOKED",
    categories: [SEAFOOD as category],
  },
  {
    name: "WHITING,MIXED SPECIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHITING,MXD SP,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WOLFFISH,ATLANTIC,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "YELLOWTAIL,MXD SP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRAB,ALASKA KING,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRAB,ALASKA KING,CKD,MOIST HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRAB,ALASKA KING,IMITN,MADE FROM SURIMI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRAB,BLUE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRAB,BLUE,CKD,MOIST HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRAB,BLUE,CANNED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRUSTACEANS,CRAB,BLUE,CRAB CAKES,HOME RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRAB,DUNGENESS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRAB,QUEEN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRAYFISH,MXD SP,WILD,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "CRAYFISH,MXD SP,WILD,CKD,MOIST HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "LOBSTER,NORTHERN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LOBSTER,NORTHERN,CKD,MOIST HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRUSTACEANS,SHRIMP,MXD SP,RAW (MAYBE PREVIOUSLY FROZEN)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHRIMP,MXD SP,CKD,BREADED&FRIED",
    categories: [GRAINS as category],
  },
  {
    name: "CRUSTACEANS,SHRIMP,MXD SP,CKD,MST HT (MAYBE PREVIOUSLY FRZ)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHRIMP,MXD SP,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHRIMP,MXD SP,IMITN,MADE FROM SURIMI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPINY LOBSTER,MXD SP,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ABALONE,MIXED SPECIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ABALONE,MXD SP,CKD,FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CLAM,MIXED SPECIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CLAM,MXD SP,CKD,BREADED&FRIED",
    categories: [GRAINS as category],
  },
  {
    name: "CLAM,MXD SP,CKD,MOIST HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CLAM,MXD SP,CND,DRND SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CLAM,MXD SP,CND,LIQ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CUTTLEFISH,MXD SP,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "MUSSEL,BLUE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSSEL,BLUE,CKD,MOIST HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OCTOPUS,COMMON,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OYSTER,EASTERN,WILD,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OYSTER,EASTERN,CKD,BREADED&FRIED",
    categories: [GRAINS as category],
  },
  {
    name: "OYSTER,EASTERN,WILD,CKD,MOIST HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OYSTER,EASTERN,CANNED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OYSTER,PACIFIC,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCALLOP,MIXED SPECIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCALLOP,MXD SP,CKD,BREADED&FRIED",
    categories: [GRAINS as category],
  },
  {
    name: "SCALLOP,MXD SP,IMITN,MADE FROM SURIMI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUID,MIXED SPECIES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUID,MXD SP,CKD,FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHELK,UNSPECIFIED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHELK,UNSPEC,CKD,MOIST HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALMON,CHINOOK,SMOKED,(LOX),REG",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,CHUM,CND,WO/SALT,DRND SOL W/BONE",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,PINK,CND,WO/SALT,SOL W/BONE&LIQ",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,SOCKEYE,CND,WO/SALT,DRND SOL W/BONE",
    categories: [SEAFOOD as category],
  },
  {
    name: "TUNA,LT,CND IN OIL,WO/SALT,DRND SOL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "TUNA,LT,CND IN H2O,WO/SALT,DRND SOL",
    categories: [SEAFOOD as category],
  },
  {
    name: "TUNA,WHITE,CND IN OIL,WO/SALT,DRND SOL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "TUNA,WHITE,CND IN H2O,WO/SALT,DRND SOL",
    categories: [SEAFOOD as category],
  },
  {
    name: "BASS,FRESHWATER,MXD SP,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BASS,STRIPED,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BLUEFISH,COOKED,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "BURBOT,COOKED,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BUTTERFISH,CKD,DRY HEAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FISH,COD,PACIFIC,CKD,DRY HEAT (MAYBE PREVIOUSLY FROZEN)",
    categories: [SEAFOOD as category],
  },
  {
    name: "CUSK,COOKED,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH,MAHIMAHI,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "DRUM,FRESHWATER,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HALIBUT,GREENLAND,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HERRING,PACIFIC,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LING,COOKED,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LINGCOD,COOKED,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACKEREL,KING,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACKEREL,PACIFIC&JACK,MXD SP,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILKFISH,COOKED,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "MONKFISH,COOKED,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "PIKE,WALLEYE,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POLLOCK,ATLANTIC,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POUT,OCEAN,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROE,MXD SP,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SABLEFISH,COOKED,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,ATLANTIC,WILD,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,CHINOOK,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,CHUM,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,PINK,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "SCUP,COOKED,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEATROUT,MXD SP,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHAD,AMERICAN,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPOT,COOKED,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUCKER,WHITE,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNFISH,PUMPKIN SD,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "TROUT,MXD SP,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TUNA,SKIPJACK,FRSH,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "TUNA,YELLOWFIN,FRSH,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "TURBOT,EUROPEAN,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHITEFISH,MXD SP,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "WOLFFISH,ATLANTIC,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "YELLOWTAIL,MXD SP,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRAB,DUNGENESS,CKD,MOIST HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRAB,QUEEN,CKD,MOIST HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPINY LOBSTER,MXD SP,CKD,MOIST HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CUTTLEFISH,MXD SP,CKD,MOIST HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "OCTOPUS,COMMON,CKD,MOIST HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OYSTER,PACIFIC,CKD,MOIST HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROUGHY,ORANGE,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CATFISH,CHANNEL,WILD,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "CATFISH,CHANNEL,FARMED,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "CATFISH,CHANNEL,FARMED,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,ATLANTIC,FARMED,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,ATLANTIC,FARMED,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,COHO,FARMED,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,COHO,FARMED,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "TROUT,RAINBOW,FARMED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TROUT,RAINBOW,FARMED,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRAYFISH,MXD SP,FARMED,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "CRAYFISH,MXD SP,FARMED,CKD,MOIST HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "OYSTER,EASTERN,WILD,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OYSTER,EASTERN,FARMED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OYSTER,EASTERN,FARMED,CKD,DRY HEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALMON,COHO,WILD,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "CONCH,BAKED OR BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "USDA COMMODITY,SALMON NUGGETS,BREADED,FRZ,HTD",
    categories: [SEAFOOD as category],
  },
  {
    name: "USDA COMMODITY,SALMON NUGGETS,CKD AS PURCHASED,UNHTD",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,SOCKEYE,CND,TOTAL CAN CONTENTS",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,PINK,CND,DRND SOL",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,TILAPIA,RAW",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,TILAPIA,CKD,DRY HEAT",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,SOCKEYE,CND,DRND SOL,WO/ SKN & BONES",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,PINK,CND,DRND SOL,WO/ SKN & BONES",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,POLLOCK,ALASKA,RAW (NOT PREVIOUSLY FROZEN)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,POLLOCK,ALASKA,CKD (NOT PREVIOUSLY FROZEN)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,COD,PACIFIC,RAW (NOT PREVIOUSLY FROZEN)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,COD,PACIFIC,CKD (NOT PREVIOUSLY FROZEN)",
    categories: [SEAFOOD as category],
  },
  {
    name: "CRUSTACEANS,SHRIMP,RAW (NOT PREVIOUSLY FROZEN)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRUSTACEANS,SHRIMP,CKD (NOT PREVIOUSLY FROZEN)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH,TROUT,BROOK,RAW,NEW YORK STATE",
    categories: [SEAFOOD as category],
  },
  {
    name: "BEANS,ADZUKI,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,ADZUKI,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,ADZUKI,MATURE SEEDS,CND,SWTND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "YOKAN,PREP FROM ADZUKI BNS & SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "BEANS,BAKED,HOME PREPARED",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,BKD,CND,PLN OR VEGETARIAN",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,BKD,CND,W/BF",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,BKD,CND,W/FRANKS",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,BKD,CND,W/PORK",
    categories: [MEATS as category],
  },
  {
    name: "BEANS,BKD,CND,W/PORK&SWT SAU",
    categories: [MEATS as category],
  },
  {
    name: "BEANS,BKD,CND,W/PORK&TOMATO SAU",
    categories: [MEATS as category],
  },
  {
    name: "BEANS,BLACK,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,BLACK,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,BLACK TURTLE,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,BLACK TURTLE,MATURE SEEDS,CKD,BLD,WO/ SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,BLACK TURTLE,MATURE SEEDS,CND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,CRANBERRY (ROMAN),MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,CRANBERRY (ROMAN),MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,CRANBERRY (ROMAN),MATURE SEEDS,CND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,FRENCH,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,FRENCH,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,GREAT NORTHERN,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,GREAT NORTHERN,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,GREAT NORTHERN,MATURE SEEDS,CND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,ALL TYPES,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,ALL TYPES,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,ALL TYPES,MATURE SEEDS,CND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,CALIFORNIA RED,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,CALIFORNIA RED,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,RED,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,RED,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,RED,MATURE SEEDS,CND,SOL & LIQUIDS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,ROYAL RED,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,ROYAL RED,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,NAVY,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,NAVY,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,NAVY,MATURE SEEDS,CND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINK,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINK,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINTO,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINTO,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINTO,MATURE SEEDS,CND,SOL & LIQUIDS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,SML WHITE,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,SML WHITE,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,YEL,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,YEL,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,WHITE,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,WHITE,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,WHITE,MATURE SEEDS,CND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BROADBEANS (FAVA BEANS),MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BROADBEANS (FAVA BNS),MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BROADBEANS (FAVA BNS),MATURE SEEDS,CND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CAROB FLOUR",
    categories: [GRAINS as category],
  },
  {
    name: "CHICKPEAS (GARBANZO BNS,BENGAL GM),MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHICKPEAS ,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHICKPEAS (GARBANZO BNS,BENGAL GRAM),MATURE SDS,CND,SOL&LIQ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHILI WITH BEANS,CANNED",
    categories: [LEGUMES as category],
  },
  {
    name: "COWPEAS,CATJANG,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COWPEAS,CATJANG,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COWPEAS,COMMON (BLACKEYES,CROWDER,SOUTHERN),MTRE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COWPEAS,COMMON (BLKEYES,CRWDR,STHRN),MTURE,CKD,BLD,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COWPEAS,COMMON,MATURE SEEDS,CND,PLN",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COWPEAS,COMMON,MATURE SEEDS,CND W/PORK",
    categories: [MEATS as category],
  },
  {
    name: "HYACINTH BNS,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "HYACINTH BNS,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LENTILS,RAW",
    categories: [LEGUMES as category],
  },
  {
    name: "LENTILS,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,LRG,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,LRG,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,LRG,MATURE SEEDS,CND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,THIN SEEDED (BABY),MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,THIN SEEDED (BABY),MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LUPINS,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LUPINS,MATURE SEEDS,CKD,BLD,WO/ SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MOTHBEANS,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MOTHBEANS,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MUNG BNS,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MUNG BNS,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "NOODLES,CHINESE,CELLOPHANE OR LONG RICE (MUNG BNS),DEHYD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUNGO BNS,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MUNGO BNS,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEAS,GRN,SPLIT,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEAS,SPLIT,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEANUTS,ALL TYPES,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEANUTS,ALL TYPES,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEANUTS,ALL TYPES,OIL-ROASTED,W/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PEANUTS,ALL TYPES,DRY-ROASTED,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEANUTS,SPANISH,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEANUTS,SPANISH,OIL-ROASTED,W/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PEANUTS,VALENCIA,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEANUTS,VALENCIA,OIL-ROASTED,W/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PEANUTS,VIRGINIA,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEANUTS,VIRGINIA,OIL-ROASTED,W/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PEANUT BUTTER,CHUNK STYLE,W/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PEANUT BUTTER,SMOOTH STYLE,W/ SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PEANUT FLOUR,DEFATTED",
    categories: [GRAINS as category],
  },
  {
    name: "PEANUT FLOUR,LOW FAT",
    categories: [GRAINS as category],
  },
  {
    name: "PIGEON PEAS (RED GM),MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PIGEON PEAS (RED GM),MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "REFRIED BNS,CND,TRADITIONAL STYLE (INCLUDES USDA COMMODITY)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BACON,MEATLESS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MEAT EXTENDER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUSAGE,MEATLESS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYBEANS,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SOYBEANS,MATURE CKD,BLD,WO/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "SOYBEANS,MATURE SEEDS,RSTD,SALTED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SOYBEANS,MATURE SEEDS,DRY RSTD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MISO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NATTO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TEMPEH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOY FLOUR,FULL-FAT,RAW",
    categories: [GRAINS as category],
  },
  {
    name: "SOY FLR,FULL-FAT,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOY FLOUR,DEFATTED",
    categories: [GRAINS as category],
  },
  {
    name: "SOY FLOUR,LOW-FAT",
    categories: [GRAINS as category],
  },
  {
    name: "SOY MEAL,DEFATTED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYMILK,ORIGINAL & VANILLA,UNFORTIFIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOY PROT CONC,PRODUCED BY ALCOHOL EXTRACTION",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOY PROTEIN ISOLATE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOY SAU MADE FROM SOY&WHEAT (SHOYU)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOY SAU MADE FROM SOY (TAMARI)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOY SAU MADE FROM HYDROLYZED VEG PROT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOFU,FIRM,PREP W/CA SULFATE&MAGNESIUM CHLORIDE (NIGARI)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOFU,SOFT,PREP W/CA SULFATE&MAGNESIUM CHLORIDE (NIGARI)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOFU,DRIED-FROZEN (KOYADOFU)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOFU,FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OKARA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOFU,SALTED&FERMENTED (FUYU)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YARDLONG BNS,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "YARDLONG BNS,MATURE SEEDS,CKD,BLD,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "WINGED BNS,MATURE SEEDS,RAW",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "WINGED BNS,MATURE SEEDS,CKD,BLD,WO/ SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "HUMMUS,HOME PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FALAFEL,HOME-PREPARED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYMILK,ORIGINAL & VANILLA,W/ ADDED CA,VITAMINS A & D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LENTILS,PINK OR RED,RAW",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,KIDNEY,RED,MATURE SEEDS,CND,DRND SOL",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINTO,CND,DRND SOL",
    categories: [LEGUMES as category],
  },
  {
    name: "VEGGIE BURGERS OR SOYBURGERS  UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PEANUT SPRD,RED SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "PEANUT BUTTER,SMOOTH,RED FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PEANUT BUTTER,SMOOTH,VIT & MINERAL FORT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PEANUT BUTTER,CHUNKY,VITAMIN&MINERAL FORT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHICKPEA FLOUR (BESAN)",
    categories: [GRAINS as category],
  },
  {
    name: "HUMMUS,COMMERCIAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOFU,EX FIRM,PREP W/NIGARI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOFU,HARD,PREP W/NIGARI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORI-NU,TOFU,SILKEN,SOFT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORI-NU,TOFU,SILKEN,FIRM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORI-NU,TOFU,SILKEN,EX FIRM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORI-NU,TOFU,SILKEN,LITE FIRM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORI-NU,TOFU,SILKEN,LITE EX FIRM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYMILK,CHOC,UNFORTIFIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA CMDTY,PNUT BUTTER,SMOOTH",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SOYMILK,CHOC,W/ ADDED CA,VITAMINS A & D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "REFRIED BNS,CND,VEGETARIAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "REFRIED BNS,CND,FAT-FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRIJOLES ROJOS VOLTEADOS (REFRIED BNS,RED,CANNED)",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "TEMPEH,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S BRN SUGAR&BACON FLAV BKD BNS",
    categories: [SWEETS as category],
  },
  {
    name: "CAMPBELL'S PORK & BNS",
    categories: [MEATS as category],
  },
  {
    name: "PACE,TRADITIONAL REFRIED BNS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,SALSA REFRIED BNS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,SPICY JALAPENO REFRIED BNS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA,NASOYA LITE FIRM TOFU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA,ORGANIC NASOYA SUPER FIRM CUBED TOFU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA,ORGANIC NASOYA EX FIRM TOFU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA,ORGANIC NASOYA FIRM TOFU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA  ORGANIC NASOYA SILKEN TOFU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA,VITASOY ORGANIC CREAMY ORIGINAL SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA,VITASOY ORGANIC CLASSIC ORIGINAL SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA,VITASOY LT VANILLA SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYMILK (ALL FLAVORS),UNSWTND,W/ ADDED CA,VITAMINS A & D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYMILK (ALL FLAVORS),ENHANCED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYMILK,ORIGINAL & VANILLA,LT,W/ ADDED CA,VITAMINS A & D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYMILK,CHOC & OTHER FLAVORS,LT,W/ ADDED CA,VITAMINS A & D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYMILK,ORIGINAL & VANILLA,LT,UNSWTND,W/ ADDED CA,VIT A & D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYMILK (ALL FLAVORS),LOWFAT,W/ ADDED CA,VITAMINS A & D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYMILK (ALL FLAVORS),NONFAT,W/ ADDED CA,VITAMINS A & D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYMILK,CHOC,NONFAT,W/ ADDED CA,VITAMINS A & D",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK PLN,SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK VANILLA,SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK CHOC,SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK LT PLN,SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK LT VANILLA,SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK LT CHOC,SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK PLUS OMEGA-3 DHA,SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK PLUS FOR BONE HEALTH,SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK PLUS FIBER,SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK UNSWTND,SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK VERY VANILLA,SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK NOG,SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK CHAI,SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK MOCHA,SOYMILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK COFFEE,SOYMILK",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "SILK VANILLA SOY YOGURT (FAMILY SIZE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK VANILLA SOY YOGURT (SINGLE SERVING SIZE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK PLN SOY YOGURT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK STRAWBERRY SOY YOGURT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK RASPBERRY SOY YOGURT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK PEACH SOY YOGURT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK BLACK CHERRY SOY YOGURT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK BLUEBERRY SOY YOGURT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK KEY LIME SOY YOGURT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK BANANA-STRAWBERRY SOY YOGURT",
    categories: [FRUITS as category],
  },
  {
    name: "SILK ORIGINAL CREAMER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK FRENCH VANILLA CREAMER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SILK HAZELNUT CREAMER",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "VITASOY USA ORGANIC NASOYA,SOFT TOFU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA NASOYA,LITE SILKEN TOFU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA ORGANIC NASOYA,TOFU PLUS EX FIRM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA ORGANIC NASOYA,TOFU PLUS FIRM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA ORGANIC NASOYA SPROUTED,TOFU PLUS SUPER FIRM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA AZUMAYA,EX FIRM TOFU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA AZUMAYA,FIRM TOFU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITASOY USA AZUMAYA,SILKEN TOFU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HOUSE FOODS PREMIUM SOFT TOFU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HOUSE FOODS PREMIUM FIRM TOFU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEANS,ADZUKI,MATURE SD,CKD,BLD,W/SALT",
    categories: [LEGUMES as category],
  },
  {
    name: "BEANS,BLACK,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,BLACK,MATURE SEEDS,CND,LO NA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,BLACK TURTLE,MATURE SEEDS,CKD,BLD,W/ SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,CRANBERRY (ROMAN),MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,FRENCH,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,GREAT NORTHERN,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,GREAT NORTHERN,MATURE SEEDS,CND,LO NA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,ALL TYPES,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,CALIFORNIA RED,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,RED,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,RED,MATURE SEEDS,CND,DRND SOL,RINSED IN TAP H2O",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,ROYAL RED,MATURE SEEDS,CKD,BLD W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,KIDNEY,RED,MATURE SEEDS,CND,SOL & LIQ,LO NA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,NAVY,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINK,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINTO,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINTO,MATURE SEEDS,CND,DRND SOL,RINSED IN TAP H2O",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,SML WHITE,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,PINTO,MATURE SEEDS,CND,SOL & LIQUIDS,LO NA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,YEL,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BEANS,WHITE,MATURE SEEDS,CKD,BLD,W/ SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "BROADBEANS (FAVA BNS),MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHICKPEAS,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHICKPEAS,MAT SEEDS,CND,DRND SOL",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHICKPEAS,MATURE SEEDS,CND,DRND,RINSED IN TAP H2O",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CHICKPEAS,MATURE SEEDS,CND,SOL & LIQUIDS,LO NA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COWPEAS,CATJANG,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "COWPEAS,COMMON,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "HYACINTH BNS,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LENTILS,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,LRG,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LIMA BNS,THIN SEEDED (BABY),MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LUPINS,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MOTHBEANS,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MUNG BNS,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MUNGO BNS,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEAS,SPLIT,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEANUTS,ALL TYPES,OIL-ROASTED,WO/ SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PEANUTS,ALL TYPES,DRY-ROASTED,WO/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PEANUTS,SPANISH,OIL-ROASTED,WO/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PEANUTS,VALENCIA,OIL-ROASTED,WO/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PEANUTS,VIRGINIA,OIL-ROASTED,WO/SALT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PEANUT BUTTER,CHUNK STYLE,WO/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PEANUT BUTTER,SMOOTH STYLE,WO/SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PEANUT BUTTER W/ OMEGA-3,CREAMY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PIGEON PEAS (RED GM),MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "REFRIED BNS,CND,TRADITIONAL,RED NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOYBEANS,MATURE SEEDS,CKD,BLD,W/SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SOYBEANS,MATURE SEEDS,RSTED,NO SALT ADDED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SOY PROT CONC,PRODUCED BY ACID WASH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOY PROT ISOLATE,K TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOY SAU MADE FROM SOY&WHEAT (SHOYU),LO NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOY SAU,RED NA,MADE FROM HYDROLYZED VEG PROT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOFU,RAW,FIRM,PREP W/CA SULFATE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOFU,RAW,REG,PREP W/CA SULFATE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOFU,DRIED-FROZEN (KOYADOFU),PREP W/CA SULFATE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOFU,FRIED,PREP W/CA SULFATE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOFU,SALTED&FERMENTED (FUYU),PREP W/CA SULFATE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YARDLONG BNS,MATURE SEEDS,CKD,BLD,W/ SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "WINGED BNS,MATURE SEEDS,CKD,BLD,W/ SALT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "LOMA LINDA LITTLE LINKS,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LOMA LINDA LOFAT BIG FRANKS,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LOMA LINDA TENDER ROUNDS W/ GRAVY,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LOMA LINDA SWISS STAKE W/ GRAVY,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LOMA LINDA VEGE-BURGER,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LOMA LINDA REDI-BURGER,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LOMA LINDA TENDER BITS,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LOMA LINDA LINKETTS,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON CHILI,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON CHOPLETS,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON DICED CHIK,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON FRICHIK ORIGINAL,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON LOFAT FRI CHIK,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON LOFAT VEJA-LINKS,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON MULTIGRAIN CUTLETS,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON PRIME STAKES,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON SAUCETTES,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON SUPER LINKS,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON VEG SKALLOPS,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON VEG STEAKS,CND,UNPREP",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "WORTHINGTON VEGETARIAN BURGER,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON VEJA-LINKS,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON CHIC-KETTS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON MEATLESS CHICK ROLL,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON MEATLESS CORNED BF ROLL,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON DINNER RST,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON FRIPATS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON PROSAGE LINKS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON PROSAGE ROLL,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON SMOKED TURKEY ROLL,FRZ,UNPREP",
    categories: [MEATS as category],
  },
  {
    name: "WORTHINGTON STAKELETS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON STRIPPLES,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON WHAM (ROLL),FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS BRKFST PATTIE W/ ORGANIC SOY,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS BRKFST BACON STRIPS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS BRKFST SAUSAGE LINKS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS GRILLERS ORIGINAL,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS GRILLERS PRIME,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS ASIAN VEGGIE PATTIES,FRZ,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MORNINGSTAR FARMS MUSHROOM LOVER'S BURGER,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS TOMATO & BASIL PIZZA BURGER,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS BUFFALO WINGS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS CHIK'N NUGGETS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS CHIK PATTIES,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS ITALIAN HERB CHIK'N PATTIE,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS CORN DOG,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS CORN DOG MINI,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS SAUSAGE STYLE RECIPE CRUMBLES,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GARDENBURGER BLACK BEAN CHIPOTLE BURGER,FRZ,UNPREP",
    categories: [LEGUMES as category],
  },
  {
    name: "GARDENBURGER ORIGINAL,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GARDENBURGER FLAME GRILLED BURGER,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GARDENBURGER SAVORY PORTABELLA VEGGIE BURGER,FRZ,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "GARDENBURGER SUN-DRIED TOMATO BASIL BURGER,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GARDENBURGER VEGGIE MEDLEY BURGER,FRZ,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MORNINGSTAR FARMS BRKFST SAUSAGE PATTIES MPL FLAV,FRZ,UNPR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS CHIK'N GRILL VEGGIE PATTIES,FRZ,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MORNINGSTAR FARMS BBQ RIBLETS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON LEANIES,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS CALIFORNIA TURK'Y BURGER,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS HOT&SPICY VEGGIE SAUSGE PATTIES,FRZ,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MORNINGSTAR FARMS LASAGNA W/ VEGGIE SAUSAGE,FRZ,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MORNINGSTAR FARMS GRILLERS QRTR PND VEGGIE BRGR,FRZ,UNPRP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MORNINGSTAR FARMS SESAME CHIK'N ENTREE,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS GRILLERS CHIK'N VEGGIE PATTIES,FRZ,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MORNINGSTAR FARMS MEAL STARTERS VEGGIE MEATBALLS,FRZ,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MORNINGSTAR FARMS BRKFST BISCUIT SAUSAGE,EGG & CHS,FRZ,UNPRE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MORNINGSTAR FARMS MEDITERRANEAN CHICKPEA,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS BUFFALO CHIK PATTIES,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS CHIK PATTIES ORIGINAL,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS BRKFST PATTIE,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS RSTD GARLIC & QUINOA BURGER,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS PARMESAN GARLIC WINGS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNNGSTR FRMS BRKFST SNDWCH SSGE EGG&CHS ENG MUFF,FRZ,UNPRP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MORNNGSTR FRMS BRKFST SNDWCH SCRMBL&CHS ENG MUFF,FRZ,UNPRP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS CHIPOTLE BLACK BEAN CRUMBLES,FRZ,UNPREP",
    categories: [LEGUMES as category],
  },
  {
    name: "MORNINGSTAR FARMS GARDEN VEGGIE NUGGETS,FRZ,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MORNINGSTAR FARMS SPICY BLK BEAN ENCHILADA ENTREE,FRZ,UNPREP",
    categories: [LEGUMES as category],
  },
  {
    name: "MORNINGSTAR FARMS SPICY INDIAN VEGGIE BURGER,FRZ,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MORNINGSTAR FARMS TUSCAN GRNS & BNS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,AUSTRALIAN,RIB,RIB RST,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,COMP OF RTL CUTS,LN&FAT,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,COMP OF RTL CUTS,LN&FAT,1/4"FAT,CHOIC,CKD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,COMP OF RTL CUTS,LN,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,COMP OF RTL CUTS,LN,1/4"FAT,CHOIC,CKD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,COMP OF RTL CUTS,FAT,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,COMP OF RTL CUTS,FAT,1/4"FAT,CHOIC,CKD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,FORESHANK,LN&FAT,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,FORESHANK,LN&FAT,1/4"FAT,CHOIC,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,FORESHANK,LN,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,FORESHANK,LN,1/4"FAT,CHOIC,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,WHL (SHK&SIRL),LN&FAT,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,WHL (SHK&SIRL),LN&FAT,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,WHL (SHK&SIRL),LN,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,WHL (SHK&SIRL),LN,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,SHANK HALF,LN&FAT,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,SHANK HALF,LN&FAT,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,SHANK HALF,LN,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,SHANK HALF,LN,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,SIRLOIN HALF,LN&FAT,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,SIRLOIN HALF,LN&FAT,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,SIRLOIN HALF,LN,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,SIRLOIN HALF,LN,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LOIN,LN&FAT,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LOIN,LN&FAT,1/4"FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LOIN,LN&FAT,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LOIN,LN,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LOIN,LN,1/4"FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LOIN,LN,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,RIB,LN&FAT,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,RIB,LN&FAT,1/4"FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,RIB,LN&FAT,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,RIB,LN,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,RIB,LN,1/4"FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,RIB,LN,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/4"FAT,CHOIC,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/4"FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,WHL (ARM&BLD),LN,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,WHL (ARM&BLD),LN,1/4"FAT,CHOIC,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,WHL (ARM&BLD),LN,1/4"FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,WHL (ARM&BLD),LN,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,ARM,LN&FAT,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,ARM,LN&FAT,1/4"FAT,CHOIC,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,ARM,LN&FAT,1/4"FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,ARM,LN&FAT,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,ARM,LN,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,ARM,LN,1/4"FAT,CHOIC,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,ARM,LN,1/4"FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,ARM,LN,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,BLADE,LN&FAT,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,BLADE,LN&FAT,1/4"FAT,CHOIC,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,BLADE,LN&FAT,1/4"FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,BLADE,LN&FAT,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,BLADE,LN,1/4"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,BLADE,LN,1/4"FAT,CHOIC,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,BLADE,LN,1/4"FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,BLADE,LN,1/4"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,CUBED FOR STEW OR KABOB (LEG&SHLDR),LN,1/4"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,CUBED FOR STEW (LEG&SHLDR),LN,1/4"FAT,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,CUBED FOR STEW (LEG&SHLDR),LN,1/4"FAT,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,LN&FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,LN&FAT,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,LN,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,FAT,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FORE-SHANK,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FORE-SHANK,LN & FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FORE-SHANK,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FORE-SHANK,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LEG CHOP/STEAK,BONE-IN,LN & FAT,RAW",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "LAMB,NZ,IMP,FRZ,LEG,WHL (SHK&SIRL),LN&FAT,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LEG CHOP/STEAK,BONE-IN,LN,RAW",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "LAMB,NZ,IMP,FRZ,LEG,WHL (SHK&SIRL),LN,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LOIN CHOP,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FRZ,LOIN,LN&FAT,CKD,BRLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LOIN CHOP,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FRZ,LOIN,LN,CKD,BRLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,RACK - PARTLY FRENCHED,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,RACK - PARTLY FRENCHED,LN & FAT,CKD,FAST RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,RACK - PARTLY FRENCHED,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,RACK - PARTLY FRENCHED,LN,CKD,FAST RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,SQUARE-CUT SHLDR,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FRZ,SHLDR,WHL (ARM&BLD),LN&FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,SQUARE-CUT SHLDR,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FRZ,SHLDR,WHL (ARM&BLD),LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,COMP OF RTL CUTS,LN&FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,COMP OF RTL CUTS,LN&FAT,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,COMP OF RTL CUTS,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,COMP OF RTL CUTS,LN,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,COMP OF RTL CUTS,FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,COMP OF RTL CUTS,FAT,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LEG (TOP RND),LN&FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LEG (TOP RND),LN&FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LEG (TOP RND),LN&FAT,CKD,PAN-FRIED,BREADED",
    categories: [GRAINS as category],
  },
  {
    name: "VEAL,LEG (TOP RND),LN&FAT,CKD,PAN-FRIED,NOT BREADED",
    categories: [GRAINS as category],
  },
  {
    name: "VEAL,LEG (TOP RND),LN&FAT,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LEG (TOP RND),LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LEG (TOP RND),LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LEG (TOP RND),LN,CKD,PAN-FRIED,BREADED",
    categories: [GRAINS as category],
  },
  {
    name: "VEAL,LEG (TOP RND),LN,CKD,PAN-FRIED,NOT BREADED",
    categories: [GRAINS as category],
  },
  {
    name: "VEAL,LEG (TOP RND),LN,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LOIN,LN&FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LOIN,LN&FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LOIN,LN&FAT,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LOIN,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LOIN,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LOIN,LN,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,RIB,LN&FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,RIB,LN&FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,RIB,LN&FAT,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,RIB,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,RIB,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,RIB,LN,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,WHL (ARM&BLD),LN&FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,WHL (ARM&BLD),LN&FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,WHL (ARM&BLD),LN&FAT,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,WHL (ARM&BLD),LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,WHL (ARM&BLD),LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,WHL (ARM&BLD),LN,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,ARM,LN&FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,ARM,LN&FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,ARM,LN&FAT,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,ARM,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,ARM,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,ARM,LN,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,BLADE CHOP,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,BLADE,LN&FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,BLADE,LN&FAT,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,BLADE CHOP,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,BLADE,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,BLADE,LN,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SIRLOIN,LN&FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SIRLOIN,LN&FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SIRLOIN,LN&FAT,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SIRLOIN,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SIRLOIN,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SIRLOIN,LN,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,CUBED FOR STEW (LEG&SHLDR),LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,CUBED FOR STEW (LEG&SHLDR),LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,GROUND,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,GROUND,CKD,BRLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,ANTELOPE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,ANTELOPE,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,BEAR,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,BEAR,CKD,SIMMRD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BISON,GROUND,GRASS-FED,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BISON,GROUND,GRASS-FED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,BEAVER,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,BEAVER,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,BEEFALO,COMP OF CUTS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "GAME MEAT,BEEFALO,COMP OF CUTS,CKD,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "VEAL,AUSTRALIAN,FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,AUSTRALIAN,RIB,RIB RST,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,BISON,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,BISON,LN,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,BOAR,WILD,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,BOAR,WILD,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,BUFFALO,H2O,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,BUFFALO,H2O,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,CARIBOU,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,CARIBOU,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,DEER,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,DEER,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,ELK,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,ELK,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GOAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,GOAT,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,HORSE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,HORSE,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,MOOSE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,MOOSE,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,MUSKRAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,MUSKRAT,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,OPOSSUM,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,RABBIT,DOMESTICATED,COMP OF CUTS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,RABBIT,DOMESTICATED,COMP OF CUTS,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,RABBIT,DOMESTICATED,COMP OF CUTS,CKD,STWD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,RABBIT,WILD,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,RABBIT,WILD,CKD,STWD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,RACCOON,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,SQUIRREL,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,SQUIRREL,CKD,RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,BRAIN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,BRAIN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,BRAIN,CKD,PAN-FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,BRAIN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,BRAIN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,BRAIN,CKD,PAN-FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,HEART,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,HEART,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,HEART,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,HEART,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,KIDNEYS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,KIDNEYS,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,KIDNEYS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,KIDNEYS,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,LIVER,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,LIVER,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,LIVER,CKD,PAN-FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,LIVER,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,LIVER,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,LIVER,CKD,PAN-FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,LUNGS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,LUNGS,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,LUNGS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,LUNGS,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,MECHANICALLY SEPARATED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,PANCREAS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,PANCREAS,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,PANCREAS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,PANCREAS,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,SPLEEN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,SPLEEN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,SPLEEN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,SPLEEN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,THYMUS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,THYMUS,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,TONGUE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,VAR MEATS&BY-PRODUCTS,TONGUE,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,TONGUE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,VAR MEATS&BY-PRODUCTS,TONGUE,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,GROUND,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,GROUND,CKD,BRLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,COMP OF RTL CUTS,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,COMP OF RTL CUTS,LN&FAT,1/8"FAT,CHOIC,CKD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,FORESHANK,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,FORESHANK,LN&FAT,1/8"FAT,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,WHL (SHK&SIRL),LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,WHL (SHK&SIRL),LN&FAT,1/8"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,SHANK HALF,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,SHANK HALF,LN&FAT,1/8"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,SIRLOIN HALF,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LEG,SIRLOIN HALF,LN&FAT,1/8"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LOIN,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LOIN,LN&FAT,1/8"FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,LOIN,LN&FAT,1/8"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,RIB,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,RIB,LN&FAT,1/8"FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,RIB,LN&FAT,1/8"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/8"FAT,CHOIC,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/8"FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,WHL (ARM&BLD),LN&FAT,1/8"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,ARM,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,ARM,LN&FAT,1/8"FAT,CHOIC,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,ARM,LN&FAT,1/8"FAT,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,ARM,LN&FAT,1/8"FAT,CHOIC,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,BLADE,LN&FAT,1/8"FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,BLADE,LN&FAT,1/8"FAT,CHOIC,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,BLADE,LN&FAT,1/8"FAT,CHOIC,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,DOM,SHLDR,BLADE,LN&FAT,1/8"FAT,CHOIC,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,LN & FAT,1/8" FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,NZ,IMP,FRZ,COMP OF RTL CUTS,LN & FAT,1/8" FAT,CKD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,NZ,IMP,FRZ,FORESHANK,LN & FAT,1/8" FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,NZ,IMP,FRZ,FORESHANK,LN & FAT,1/8" FAT,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,NZ,IMP,FRZ,LEG,WHL (SHK&SIRL),LN & FAT,1/8" FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,NZ,IMP,FRZ,LEG,WHL (SHK&SIRL),LN & FAT,1/8",CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,NZ,IMP,FRZ,LOIN,LN & FAT,1/8" FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,NZ,IMP,FRZ,LOIN,LN & FAT,1/8" FAT,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,NZ,IMP,FRZ,RIB,LN&FAT,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,NZ,IMP,FRZ,RIB,LN & FAT,1/8" FAT,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,NZ,IMP,FRZ,SHLDR,WHL (ARM&BLD),LN & FAT,1/8",RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,NZ,IMP,FRZ,SHDR,WHL (ARM&BLD),LN & FAT,1/8",CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'GAME MEAT,BISON,TOP SIRLOIN,LN,0"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'GAME MEAT,BISON,RIBEYE,LN,0"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'GAME MEAT,BISON,SHLDR CLOD,LN,0"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,BREAST,FAT,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,BREAST,WHL,BNLESS,LN&FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,BREAST,WHL,BNLESS,LN&FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,BREAST,PLATE HALF,BNLESS,LN&FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,BREAST,POINT HALF,BNLESS,LN&FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,BREAST,WHL,BNLESS,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHANK (FORE&HIND),LN&FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHANK (FORE&HIND),LN&FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHANK (FORE&HIND),LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHANK (FORE&HIND),LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,COMP OF RTL CUTS,LN&FAT,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,COMP OF RTL CUTS,LN&FAT,1/8"FAT,CKD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,COMP OF RTL CUTS,LN,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,COMP OF RTL CUTS,LN,1/8"FAT,CKD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,AUS,IMP,FRSH,FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,AUS,IMP,FRSH,FAT,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,FORESHANK,LN&FAT,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,FORESHANK,LN&FAT,1/8"FAT,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,FORESHANK,LN,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,FORESHANK,LN,1/8"FAT,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,WHL (SHK&SIRL),LN&FAT,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,WHL (SHK&SIRL),LN&FAT,1/8"FAT,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,WHL (SHK&SIRL),LN,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,WHL (SHK&SIRL),LN,1/8"FAT,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,SHANK HALF,LN&FAT,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,SHANK HALF,LN&FAT,1/8"FAT,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,SHANK HALF,LN,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,SHANK HALF,LN,1/8"FAT,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,SIRLOIN HALF,BNLESS,LN&FAT,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,SIRL HLF,BNLESS,LN&FT,1/8"FAT,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,SIRLOIN HALF,BNLESS,LN,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,SIRL HALF,BNLESS,LN,1/8"FAT,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,SIRL CHOPS,BNLESS,LN&FAT,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,SIRL CHPS,BNLESS,LN&FT,1/8"FT,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,SIRLOIN CHOPS,BNLESS,LN,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,SIRL CHOPS,BNLESS,LN,1/8"FAT,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,CNTR SLICE,BONE-IN,LN&FAT,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,CNTR SLCE,BNE-IN,LN&FT,1/8"FT,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,CNTR SLICE,BONE-IN,LN,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,CNTR SLICE,BONE-IN,LN,1/8"FAT,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LOIN,LN&FAT,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LOIN,LN&FAT,1/8"FAT,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LOIN,LN,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LOIN,LN,1/8"FAT,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,RIB CHOP/RACK RST,FRENCHED,BONE-IN,LN & FT,1/8",RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,RIB CHOP,FRENCHED,BNE-IN,LN & FAT,1/8",GRILLED',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,RIB CHOP/RACK RST,FRENCHED,BONE-IN,LN,1/8",RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,RIB CHOP,FRNCHED,BONE-IN,LN,1/8",CKD,GRILLED',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,SHLDR,WHL (ARM&BLD),LN&FAT,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,SHLDR,WHL (ARM&BLD),LN&FAT,1/8"FAT,CKD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,SHLDR,WHL (ARM&BLD),LN,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,SHLDR,WHL (ARM&BLD),LN,1/8"FAT,CKD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,SHLDR,ARM,LN&FAT,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,SHLDR,ARM,LN&FAT,1/8"FAT,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,SHLDR,ARM,LN,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,SHLDR,ARM,LN,1/8"FAT,CKD,BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,SHLDR,BLADE,LN&FAT,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,SHLDR,BLADE,LN&FAT,1/8"FAT,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,SHLDR,BLADE,LN,1/8"FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,SHLDR,BLADE,LN,1/8"FAT,CKD,BRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT BISON,GROUND,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,BISON,GROUND,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: 'GAME MEAT BISON,TOP SIRLOIN,LN,1" STEAK,CKD,BRLD',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "GAME MEAT,BISON,CHUCK,SHLDR CLOD,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,BISON,CHUCK,SHLDR CLOD,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'GAME MEAT,BISON,RIBEYE,LN,1" STEAK,CKD,BRLD',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: 'GAME MEAT,BISON,TOP RND,LN,1" STEAK,CKD,BRLD',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: 'GAME MEAT,BISON,TOP RND,LN,1" STEAK,RAW',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "GAME MEAT,ELK,GROUND,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,ELK,GROUND,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "GAME MEAT,ELK,LOIN,LN,CKD,BRLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,ELK,RND,LN,CKD,BRLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,ELK,TENDERLOIN,LN,CKD,BRLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,DEER,GROUND,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,DEER,GROUND,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: 'GAME MEAT,DEER,LOIN,LN,1" STEAK,CKD,BRLD',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "GAME MEAT,DEER,SHLDR CLOD,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GAME MEAT,DEER,TENDERLOIN,LN,CKD,BRLD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'GAME MEAT,DEER,TOP RND,LN,1" STEAK,CKD,BRLD',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "VEAL,AUSTRALIAN,SHANK,FORE,BONE-IN,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,AUSTRALIAN,SHANK,FORE,BONE-IN,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,AUSTRALIAN,SHANK,HIND,BONE-IN,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,AUSTRALIAN,SHANK,HIND,BONE-IN,LN & FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,AUSTRALIAN,GROUND,85% LN / 15% FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,INTERMUSCULAR FAT,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,INTERMUSCULAR FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,SUBCUTANEOUS FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,BRAINS,CKD,SOAKED & FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,BRAINS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,BREAST,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,BREAST,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,CHUMP,BNLESS,LN,CKD,FAST RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,SUBCUTANEOUS FAT,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,CHUMP,BNLESS,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,KIDNEY,CKD,SOAKED & FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FLAP,BNLESS,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FLAP,BNLESS,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,KIDNEY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LIVER,CKD,SOAKED & FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LIVER,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,GROUND LAMB,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,GROUND LAMB,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,HEART,CKD,SOAKED & SIMMRD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,HEART,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,SWEETBREAD,CKD,SOAKED & SIMMRD",
    categories: [GRAINS as category],
  },
  {
    name: "LAMB,NZ,IMP,SWEETBREAD,RAW",
    categories: [GRAINS as category],
  },
  {
    name: "LAMB,NZ,IMP,TESTES,CKD,SOAKED & FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,TESTES,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,TONGUE - SWISS CUT,CKD,SOAKED & SIMMRD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,TONGUE - SWISS CUT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,TUNNEL-BNED LG,CHMP OFF,SHNK OFF,LN,CKD,SLW RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,TUNNEL-BONED LEG,CHUMP OFF,SHANK OFF,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,SQUARE-CUT SHLDR CHOPS,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,SQUARE-CUT SHLDR CHOPS,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,TENDERLOIN,LN,CKD,FAST FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,TENDERLOIN,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LOIN SADDLE,LN,CKD,FAST RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LOIN SADDLE,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LOIN,BNLESS,LN,CKD,FAST RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LOIN,BNLESS,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,HIND-SHANK,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,HIND-SHANK,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,NECK CHOPS,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,NECK CHOPS,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,NETTED SHLDR,ROLLED,BNLESS,LN,CKD,SLOW RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,NETTED SHLDR,ROLLED,BNLESS,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,RACK - FULLY FRENCHED,LN,CKD,FAST RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,RACK - FULLY FRENCHED,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LOIN CHOP,LN,CKD,FAST FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,SQUARE-CUT SHLDR,LN,CKD,SLOW RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LEG CHOP/STEAK,BONE-IN,LN,CKD,FAST FRIED",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "LAMB,NZ,IMP,FLAP,BNLESS,LN & FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,FLAP,BNLESS,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,HIND-SHANK,LN & FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,HIND-SHANK,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LEG CHOP/STEAK,BONE-IN,LN & FAT,CKD,FAST FRIED",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "LAMB,NZ,IMP,LOIN CHOP,LN & FAT,CKD,FAST FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LOIN SADDLE,LN & FAT,CKD,FAST RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LOIN SADDLE,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LOIN,BNLESS,LN & FAT,CKD,FAST RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,LOIN,BNLESS,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,NECK CHOPS,LN & FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,NECK CHOPS,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,NETTED SHLDR,ROLLED,BNLESS,L & F,CKD,SLOW RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,NETTED SHLDR,ROLLED,BNLESS,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,SQUARE-CUT SHLDR CHOPS,LN & FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,SQUARE-CUT SHLDR CHOPS,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,SQUARE-CUT SHLDR,LN & FAT,CKD,SLOW RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,TENDERLOIN,LN & FAT,CKD,FAST FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,RACK - FULLY FRENCHED,LN & FAT,CKD,FAST RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,RACK - FULLY FRENCHED,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,TUN-BND LG,CHMP OFF,SHNK OFF,L & F,CKD,SL RSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,TUNNEL-BONED LG,CHUMP OFF,SHANK OFF,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,NZ,IMP,TENDERLOIN,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,GROUND,CKD,PAN-FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LEG,TOP RND,CAP OFF,CUTLET,BNLESS,CKD,GRILLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LEG,TOP RND,CAP OFF,CUTLET,BNLESS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LOIN,CHOP,LN,CKD,GRILLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHANK,LN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,FORESHANK,OSSO BUCO,LN,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,BLADE CHOP,LN,CKD,GRILLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,EXTERNAL FAT ONLY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,EXTERNAL FAT ONLY,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SEAM FAT ONLY,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SEAM FAT ONLY,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHANK,LN & FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,FORESHANK,OSSO BUCO,LN & FAT,CKD,BRSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,LOIN,CHOP,LN & FAT,CKD,GRILLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEAL,SHLDR,BLADE CHOP,LN & FAT,CKD,GRILLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,BTTM,BNLESS,LN,1/8" FAT,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,LEG,HINDSHANK,HEEL ON,BONE-IN,LN,1/8",BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,LEG,HINDSHANK,HEEL ON,BONE-IN,LN,1/8" FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,TENDERLOIN,BNLESS,LN,1/8" FAT,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUSTRALIAN,IMP,FRSH,TENDERLOIN,BNLESS,LN,1/8" FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUSTRALIAN,IMP,FRSH,LEG,BTTM,BNLESS,LN,1/8" FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,LEG,TROTTER OFF,BONE-IN,LN,1/8" FAT,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,TROTTER OFF,BONE-IN,LN,1/8" FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,RACK,RST,FRNCHED,DNUDED,BONE-IN,LN,0",CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,RACK,RST,FRENCHED,BONE-IN,LN,1/8" FAT,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,AUSTRALIAN,IMP,FRSH,EXTERNAL FAT,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,AUSTRALIAN,IMP,FRSH,EXTERNAL FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,AUSTRALIAN,IMP,FRSH,SEAM FAT,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMB,AUSTRALIAN,IMP,FRSH,SEAM FAT,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,BTTM,BNLESS,LN & FAT,1/8" FAT,CKD,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,LEG,BTTM,BNLESS,LN & FAT,1/8" FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,LEG,HINDSHANK,HEEL ON,BNE-IN,LN & FT,1/8",BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,LEG,HINDSHANK,HEEL ON,BNE-IN,LN & FAT,1/8",RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,LEG,TROTTER OFF,BONE-IN,LN & FAT,1/8" FAT,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,LEG,TROTTER OFF,BONE-IN,LN & FAT,1/8" FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,TENDERLOIN,BNLESS,LN & FAT,1/8" FAT,RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,TENDERLOIN,BNLESS,LN & FAT,1/8" FAT,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,RIB CHOP,FRNCHED,DNUDED,BONE-IN,LN,0",GRILLED',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,RACK,RST,FRNCHED,DNUDED,BNE-IN,LN & FT,0",RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,FRSH,RACK,RST,FRENCHED,BNE-IN,LN & FT,1/8",RSTD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LAMB,AUS,IMP,FRSH,RIB CHOP,FRENCHED,DNUDED,BN-IN,L&F,0",GRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAGEL,PLN,TSTD, ENR W/CA PROP(INCLUDE ONION,POPPY,SESAME)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAGELS,PLN,ENR,W/ CA PROP (INCLUDES ONION,POPPY,SESAME),TSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAGELS,EGG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BAGELS,CINNAMON-RAISIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAGELS,CINNAMON-RAISIN,TSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAGELS,OAT BRAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BISCUITS,PLN OR BTTRMLK,FRZ,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BISCUITS,PLN OR BTTRMLK,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BISCUITS,PLN OR BTTRMLK,DRY MIX,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BISCUITS,PLN OR BTTRMLK,REFR DOUGH,LOWER FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BISCUITS,PLN OR BTTRMLK,REFR DOUGH,LOWER FAT,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BISCUIT, PLN OR BUTMLK, REFRI DOUGH, HIGHER FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BISCUITS,PLN OR BTTRMLK,REFR DOUGH,HIGHER FAT,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BISCUITS,PLN OR BTTRMLK,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BISCUITS,MXD GRAIN,REFR DOUGH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAD,BANANA,PREP FROM RECIPE,MADE W/MARGARINE",
    categories: [FRUITS as category],
  },
  {
    name: "BREAD,BOSTON BROWN,CANNED",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,CORNBREAD,DRY MIX,ENR (INCL CORN MUFFIN MIX)",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,CORNBREAD,DRY MIX,PREP W/ 2% MILK,80% MARGARINE,& EGGS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BREAD,CORNBREAD,PREP FROM RECIPE,MADE W/LOFAT (2%) MILK",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,CRACKED-WHEAT",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,EGG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BREAD,EGG,TOASTED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "Bread, french",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAD, FRENCH OR VIENNA, TSTD (IND SOURDOUGH)",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,IRISH SODA,PREP FROM RECIPE",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,ITALIAN",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,MULTI-GRAIN,TSTD (INCLUDES WHOLE-GRAIN)",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,OAT BRAN",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,OAT BRAN,TOASTED",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,OATMEAL",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,OATMEAL,TOASTED",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,PITA,WHITE,ENRICHED",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,PITA,WHOLE-WHEAT",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,PROT (INCL GLUTEN)",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,PUMPERNICKEL",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,PUMPERNICKEL,TSTD",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,RAISIN,ENRICHED",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,RAISIN,ENR,TSTD",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,RED-CAL,OAT BRAN",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,RED-CAL,OAT BRAN,TSTD",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,RED-CAL,OATMEAL",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,REDUCED-CALORIE,RYE",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,RED-CAL,WHEAT",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,RED-CAL,WHITE",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,RICE BRAN",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,RYE",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,RYE,TOASTED",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,WHEAT",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD, WHEAT, TSTD",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,WHEAT BRAN",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,WHITE,COMMLY PREP (INCL SOFT BREAD CRUMBS)",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,WHITE,COMMLY PREP,TSTD",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,WHITE,PREP FROM RECIPE,MADE W/NONFAT DRY MILK",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,WHITE,PREP FROM RECIPE,MADE W/LOFAT (2%) MILK",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,WHOLE-WHEAT,COMM. PREPARED",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD, WHOLE-WHEAT, COMMER PREP, TOASTED",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,WHOLE-WHEAT,PREP FROM RECIPE",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,WHOLE-WHEAT,PREP FROM RECIPE,TSTD",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD CRUMBS,DRY,GRATED,PLN",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD STICKS,PLAIN",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD STUFFING,BREAD,DRY MIX",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD STUFFING,BREAD,DRY MIX,PREP",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD STUFFING,CORNBREAD,DRY MIX",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD STUFFING,CORNBREAD,DRY MIX,PREP",
    categories: [GRAINS as category],
  },
  {
    name: "CAKE,ANGELFOOD,COMMLY PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,ANGELFOOD,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,ANGELFOOD,DRY MIX,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,BOSTON CRM PIE,COMMLY PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,PUDDING-TYPE,CARROT,DRY MIX",
    categories: [VEGGIES as category],
  },
  {
    name: "CAKE,CHERRY FUDGE W/CHOC FRSTNG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,CHOC,COMMLY PREP W/ CHOC FRSTNG,IN-STORE BAKERY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,PUDDING-TYPE,CHOC,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,CHOC,PREP FROM RECIPE WO/FRSTNG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,WHITE,PREP FROM RECIPE W/COCNT FRSTNG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COFFEECAKE,CHEESE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COFFEECAKE,CINN W/CRUMB TOPPING,COMMLY PREP,ENR",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "COFFEECAKE,CREME-FILLED W/CHOC FRSTNG",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "COFFEECAKE,FRUIT",
    categories: [FRUITS as category],
  },
  {
    name: "COFFEECAKE,CINN W/CRUMB TOPPING,DRY MIX",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "COFFEECAKE,CINN W/CRUMB TOPPING,DRY MIX,PREP",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "CAKE,FRUITCAKE,COMMLY PREP",
    categories: [FRUITS as category],
  },
  {
    name: "CAKE,PUDDING-TYPE,GERMAN CHOC,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,GINGERBREAD,DRY MIX",
    categories: [GRAINS as category],
  },
  {
    name: "CAKE,GINGERBREAD,PREP FROM RECIPE",
    categories: [GRAINS as category],
  },
  {
    name: "CAKE,PUDDING-TYPE,MARBLE,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,PNAPPL UPSIDE-DOWN,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,POUND,COMMLY PREP,BUTTER (INCLUDES FRSH & FROZEN)",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CAKE,POUND,COMMLY PREP,OTHER THAN ALL BUTTER,ENR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CAKE,SHORTCAKE,BISCUIT-TYPE,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,SNACK CAKES,CREME-FILLED,CHOC W/ FRSTNG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,SNACK CAKES,CREME-FILLED,SPONGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,WHITE,DRY MIX,SPL DIETARY (INCL LEMON-FLAVORED)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,SPONGE,COMMLY PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,SPONGE,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,PUDDING-TYPE,WHITE,ENR,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,WHITE,PREP FROM RECIPE WO/FRSTNG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,YEL,COMMLY PREP,W/ CHOC FRSTNG,IN-STORE BAKERY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,YEL,COMMLY PREP,W/VANILLA FRSTNG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,PUDDING-TYPE,YEL,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,YEL,ENR,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,YEL,PREP FROM RECIPE WO/FRSTNG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEESECAKE COMMLY PREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESECAKE PREP FROM MIX,NO-BAKE TYPE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COOKIES,BROWNIES,COMMLY PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,BROWNIES,DRY MIX,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,BROWNIES,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,BUTTER,COMMLY PREP,ENR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COOKIES,FUDGE,CAKE-TYPE (INCL TROLLEY CAKES)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOCOLATE WAFERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC CHIP,COMMLY PREP,REG,LOWER FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC CHIP,COMMLY PREP,REG,HIGHER FAT,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC CHIP,COMMLY PREP,SOFT-TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC CHIP,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC CHIP,REFR DOUGH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC CHIP,REFR DOUGH,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC CHIP,PREP FROM RECIPE,MADE W/MARGARINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC SNDWCH,W/CREME FILLING,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC SNDWCH,W/CREME FILLING,REG,CHOCOLATE-COATED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC SNDWCH,W/EX CREME FILLING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,FIG BARS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,FORTUNE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,GINGERSNAPS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,GRAHAM CRACKERS,PLN OR HONEY (INCL CINN)",
    categories: [SWEETS as category],
  },
  {
    name: "COOKIES,GRAHAM CRACKERS,CHOCOLATE-COATED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,LADYFINGERS,W/LEMON JUC&RIND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,MARSHMLLW,CHOCOLATE-COATED (INCL MARSHMLLW PIES)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,MOLASSES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,OATMEAL,COMMLY PREP,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,OATMEAL,COMMLY PREP,SOFT-TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,OATMEAL,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,OATMEAL,REFR DOUGH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,OATMEAL,REFR DOUGH,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,OATMEAL,PREP FROM RECIPE,W/RAISINS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,PNUT BUTTER,COMMLY PREP,REG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COOKIES,PNUT BUTTER,COMMLY PREP,SOFT-TYPE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COOKIES,PNUT BUTTER,REFR DOUGH",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COOKIES,PNUT BUTTER,REFR DOUGH,BKD",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COOKIES,PNUT BUTTER,PREP FROM RECIPE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COOKIES,PNUT BUTTER SNDWCH,REG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COOKIES,RAISIN,SOFT-TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,SHORTBREAD,COMMLY PREP,PLN",
    categories: [GRAINS as category],
  },
  {
    name: "COOKIES,SHORTBREAD,COMMLY PREP,PECAN",
    categories: [GRAINS as category],
  },
  {
    name: "COOKIES,BROWNIES,DRY MIX,SUGAR FREE",
    categories: [SWEETS as category],
  },
  {
    name: "COOKIES,CHOC CHIP,COMMLY PREP,SPL DIETARY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC SNDWCH,W/CREME FILLING,SPL DIETARY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,OATMEAL,COMMLY PREP,SPL DIETARY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,PNUT BUTTER SNDWCH,SPL DIETARY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COOKIES,SUGAR WAFER,W/ CREME FILLING,SUGAR FREE",
    categories: [SWEETS as category],
  },
  {
    name: "COOKIES,SUGAR,COMMLY PREP,REG (INCL VANILLA)",
    categories: [SWEETS as category],
  },
  {
    name: "COOKIES,SUGAR,REFR DOUGH",
    categories: [SWEETS as category],
  },
  {
    name: "COOKIES,SUGAR,REFR DOUGH,BKD",
    categories: [SWEETS as category],
  },
  {
    name: "COOKIES,SUGAR,PREP FROM RECIPE,MADE W/MARGARINE",
    categories: [SWEETS as category],
  },
  {
    name: "COOKIES,SUGAR WAFERS W/CREME FILLING,REG",
    categories: [SWEETS as category],
  },
  {
    name: "COOKIES,VANILLA SNDWCH W/CREME FILLING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUFF PASTRY,FRZ,RTB,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,VANILLA WAFERS,LOWER FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,VANILLA WAFERS,HIGHER FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,CHEESE,REGULAR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CRACKERS,CHS,SANDWICH-TYPE W/PNUT BUTTER FILLING",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CRACKERS,CRISPBREAD,RYE",
    categories: [GRAINS as category],
  },
  {
    name: "CRACKERS,MATZO,PLAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,MATZO,EGG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CRACKERS,MATZO,WHOLE-WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,MELBA TOAST,PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,MELBA TOAST,RYE (INCL PUMPERNICKEL)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,MELBA TOAST,WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,RUSK TOAST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,RYE,SANDWICH-TYPE W/CHS FILLING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,RYE,WAFERS,PLAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,RYE,WAFERS,SEASONED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,SALTINES (INCL OYSTER,SODA,SOUP)",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CRACKERS,STD SNACK-TYPE,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,STD SNACK-TYPE,SNDWCH,W/CHS FILLING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,STD SNACK-TYPE,SNDWCH,W/PNUT BUTTER FILLING",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CRACKERS,WHEAT,REGULAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,WHEAT,SNDWCH,W/CHS FILLING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,WHEAT,SNDWCH,W/PNUT BUTTER FILLING",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CRACKERS,WHOLE-WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKER MEAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CREAM PUFF SHELL,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CROISSANTS,BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CROISSANTS,APPLE",
    categories: [FRUITS as category],
  },
  {
    name: "CROISSANTS,CHEESE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CROUTONS,PLAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CROUTONS,SEASONED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DANISH PASTRY,CINN,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DANISH PASTRY,CHEESE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "DANISH PASTRY,FRUIT,ENR",
    categories: [FRUITS as category],
  },
  {
    name: "DANISH PASTRY,NUT (INCL ALMOND,RAISIN NUT,CINN NUT)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "DOUGHNUTS,CAKE-TYPE,PLN (INCLUDES UNSUGARED,OLD-FASHIONED)",
    categories: [SWEETS as category],
  },
  {
    name: "DOUGHNUTS,CAKE-TYPE,PLN,CHOCOLATE-COATED OR FRSTD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "DOUGHNUTS,CAKE-TYPE,PLN,SUGARED OR GLAZED",
    categories: [SWEETS as category],
  },
  {
    name: "DOUGHNUTS,CAKE-TYPE,CHOC,SUGARED OR GLAZED",
    categories: [SWEETS as category],
  },
  {
    name: "DOUGHNUTS,FRENCH CRULLERS,GLAZED",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "DOUGHNUTS,YEAST-LEAVENED,W/CREME FILLING",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "DOUGHNUTS, YEAST-LEAVENED, GLAZED, ENRICHED (INC HONEY BUNS)",
    categories: [SWEETS as category],
  },
  {
    name: "DOUGHNUTS,YEAST-LEAVENED,W/JELLY FILLING",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "ENGLISH MUFFIN, PLN,ENCHED.W/CA PROP (INCLD SOURDOUGH)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ENGLISH,MUFFIN,PLN,TSTD,ENR,W/CA PROP(INCL SOURDOUGH)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ENGLISH MUFFINS,MIXED-GRAIN (INCL GRANOLA)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ENGLISH MUFFINS,MIXED-GRAIN,TSTD (INCL GRANOLA)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ENGLISH MUFFINS,RAISIN-CINNAMON (INCLUDES APPLE-CINNAMON)",
    categories: [FRUITS as category],
  },
  {
    name: "ENGLISH MUFFINS,RAISIN-CINNAMON,TSTD (INCL APPLE-CINNAMON)",
    categories: [FRUITS as category],
  },
  {
    name: "ENGLISH MUFFINS,WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ENGLISH MUFFINS,WHEAT,TSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ENGLISH MUFFINS,WHOLE-WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ENGLISH MUFFINS,WHOLE-WHEAT,TSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRENCH TOAST,FRZ,RTH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRENCH TOAST,PREP FROM RECIPE,MADE W/LOFAT (2%) MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HUSH PUPPIES,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CRM CONES,CAKE OR WAFER-TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CRM CONES,SUGAR,ROLLED-TYPE",
    categories: [SWEETS as category],
  },
  {
    name: "MUFFINS,PLN,PREP FROM RECIPE,MADE W/LOFAT (2%) MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUFFINS,BLUEBERRY,COMMLY PREP (INCLUDES MINI-MUFFINS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUFFINS,BLUEBERRY,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUFFINS,BLUEBERRY,TOASTER-TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUFFINS,BLUEBERRY,PREP FROM RECIPE,MADE W/LOFAT (2%) MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUFFINS,CORN,COMMLY PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUFFINS,CORN,DRY MIX,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUFFINS,CORN,TOASTER-TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUFFINS,CORN,PREP FROM RECIPE,MADE W/LOFAT (2%) MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUFFINS,OAT BRAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUFFINS,WHEAT BRAN,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES PLN,FRZ,RTH (INCLUDES BUTTERMILK)",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PANCAKES,PLN,DRY MIX,COMPLETE (INCL BTTRMLK)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES,PLN,DRY MIX,COMPLETE,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES,PLN,DRY MIX,INCOMPLETE (INCL BTTRMLK)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES,PLN,DRY MIX,INCOMPLETE,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES,PLN,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES,BLUEBERRY,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES,BUCKWHEAT,DRY MIX,INCOMPLETE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES,SPL DIETARY,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES,WHOLE-WHEAT,DRY MIX,INCOMPLETE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES,WHOLE-WHEAT,DRY MIX,INCOMPLETE,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,APPL,COMMLY PREP,ENR FLR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,APPL,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,BANANA CRM,PREP FROM MIX,NO-BAKE TYPE",
    categories: [FRUITS as category],
  },
  {
    name: "PIE,BANANA CRM,PREP FROM RECIPE",
    categories: [FRUITS as category],
  },
  {
    name: "PIE,BLUEBERRY,COMMLY PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,BLUEBERRY,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,CHERRY,COMMLY PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,CHERRY,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,CHOC CREME,COMMLY PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,CHOC MOUSSE,PREP FROM MIX,NO-BAKE TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,COCNT CREME,COMMLY PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,COCNT CRM,PREP FROM MIX,NO-BAKE TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,COCNT CUSTARD,COMMLY PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,EGG CUSTARD,COMMLY PREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PIE,FRIED PIES,FRUIT",
    categories: [FRUITS as category],
  },
  {
    name: "PIE,LEMON MERINGUE,COMMLY PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,LEMON MERINGUE,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,MINCE,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,PEACH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,PECAN,COMMLY PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,PECAN,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,PUMPKIN,COMMLY PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,PUMPKIN,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,VANILLA CRM,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE CRUST,STANDARD-TYPE,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE CRUST,STANDARD-TYPE,DRY MIX,PREP,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE CRUST,STANDARD-TYPE,FRZ,RTB,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE CRUST,STANDARD-TYPE,FRZ,RTB,ENR,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE CRUST,STANDARD-TYPE,PREP FROM RECIPE,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUFF PASTRY,FRZ,RTB",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PHYLLO DOUGH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POPOVERS,DRY MIX,ENRICHED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS, DINNER, PLN,COMM PREPARED (INC BROWN -N- SERVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,DINNER,EGG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "ROLLS,DINNER,OAT BRAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,DINNER,RYE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,DINNER,WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,DINNER,WHOLE-WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,FRENCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,HAMBURGER OR HOTDOG,PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,HAMBURGER OR HOTDOG,MIXED-GRAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,HAMBURGER OR HOTDOG,RED-CAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,HARD (INCL KAISER)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STRUDEL,APPLE",
    categories: [FRUITS as category],
  },
  {
    name: "SWEET ROLLS,CHEESE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SWEET ROLLS,CINN,COMMLY PREP W/RAISINS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET ROLLS,CINN,REFR DOUGH W/FRSTNG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET ROLLS,CINN,REFR DOUGH W/FRSTNG,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TACO SHELLS, BAKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOASTER PASTRIES,BROWN-SUGAR-CINNAMON",
    categories: [SWEETS as category],
  },
  {
    name: "TOASTER PASTRIES,FRUIT",
    categories: [FRUITS as category],
  },
  {
    name: "TORTILLAS,RTB OR -FRY,CORN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TORTILLAS,RTB OR -FRY,FLR,REFR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WAFFLES,PLN,FRZ,RTH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WAFFLES,PLN,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WONTON WRAPPERS (INCL EGG ROLL WRAPPERS)",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "LEAVENING AGENTS,BAKING PDR,DOUBLE-ACTING,NA AL SULFATE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEAVENING AGENTS,BAKING PDR,DOUBLE-ACTING,STRAIGHT PO4",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEAVENING AGENTS,BAKING PDR,LOW-SODIUM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEAVENING AGENTS,BAKING SODA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEAVENING AGENTS,CRM OF TARTAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEAVENING AGENTS,YEAST,BAKER'S,COMPRESSED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEAVENING AGENTS,YEAST,BAKER'S,ACTIVE DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAD CRUMBS,DRY,GRATED,SEASONED",
    categories: [GRAINS as category],
  },
  {
    name: "COOKIES,OATMEAL,PREP FROM RECIPE,WO/RAISINS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC CHIP,PREP FROM RECIPE,MADE W/BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BREAD,PROT,(INCLUDES GLUTEN),TSTD",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,RICE BRAN,TOASTED",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,WHEAT GERM,TOASTED",
    categories: [GRAINS as category],
  },
  {
    name: "MUFFINS,BLUEBERRY,TOASTER-TYPE,TSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUFFINS,WHEAT BRAN,TOASTER-TYPE W/RAISINS,TSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES,BTTRMLK,PREP FROM RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,DINNER,PLN,PREP FROM RECIPE,MADE W/LOFAT (2%) MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE CRUST,COOKIE-TYPE,PREP FR RECIPE,GRAHAM CRACKER,CHILLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,MATZO,EGG&ONION",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PIE CRUST,COOKIE-TYPE,PREP FROM RECIPE,VANILLA WAFER,CHILLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE CRUST,STANDARD-TYPE,PREP FROM RECIPE,UNBAKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WAFFLES,PLN,FRZ,READY -TO-HEAT,TSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAGELS,PLN,ENR,WO/CA PROP (INCL ONION,POPPY,SESAME)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAGELS,PLN,UNENR,W/CA PROP (INCL ONION,POPPY,SESAME)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAGELS,PLN,UNENR,WO/CA PROP (INCL ONION,POPPY,SESAME)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAD,CORNBREAD,DRY MIX,UNENR (INCL CORN MUFFIN MIX)",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,PITA,WHITE,UNENR",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,RAISIN,UNENRICHED",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,WHITE,COMMLY PREP,LO NA,NO SALT",
    categories: [GRAINS as category],
  },
  {
    name: "COFFEECAKE,CINN W/CRUMB TOPPING,COMMLY PREP,UNENR",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "CAKE,POUND,COMMLY PREP,OTHER THAN ALL BUTTER,UNENR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CAKE,PUDDING-TYPE,WHITE,UNENR,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,YEL,UNENR,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,BUTTER,COMMLY PREP,UNENR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COOKIES,CHOC CHIP,COMMLY PREP,REG,HIGHER FAT,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,LADYFINGERS,WO/LEMON JUC&RIND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,MELBA TOAST,PLN,WO/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,SALTINES,LO SALT (INCL OYSTER,SODA,SOUP)",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CRACKERS,SALTINES,UNSALTED TOPS (INCL OYSTER,SODA,SOUP)",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CRACKERS,STD SNACK-TYPE,REG,LO SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,WHEAT,LOW SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,WHOLE-WHEAT,LO SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DANISH PASTRY,CINN,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DANISH PASTRY,FRUIT,UNENR (INCL APPL,CINN,RAISIN,STRAWBERRY)",
    categories: [FRUITS as category],
  },
  {
    name: "BREAD,WHITE,COMMLY PREP,TSTD,LO NA NO SALT",
    categories: [GRAINS as category],
  },
  {
    name: "DANISH PASTRY,LEMON,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,CHS,LO NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DANISH PASTRY,RASPBERRY,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DOUGHNUTS,YEAST-LEAVENED,GLAZED,UNENR (INCL HONEY BUNS)",
    categories: [SWEETS as category],
  },
  {
    name: "ENGLISH MUFFINS,PLN,ENR,WO/CA PROP (INCL SOURDOUGH)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ENGLISH MUFFINS,PLN,UNENR,W/CA PROP (INCL SOURDOUGH)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ENGLISH MUFFINS,PLN,UNENR,WO/CA PROP (INCL SOURDOUGH)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,APPL,COMMLY PREP,UNENR FLR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,FRIED PIES,CHERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,FRIED PIES,LEMON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE CRUST,STANDARD-TYPE,FRZ,RTB,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POPOVERS,DRY MIX,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TACO SHELLS,BKD,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TORTILLAS,RTB OR -FRY,CORN,WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TORTILLAS,RTB OR -FRY,FLR,WO/ CA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,POUND,COMMLY PREP,FAT-FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,YEL,LT,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,SALTINES,FAT-FREE,LOW-SODIUM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAKFAST TART,LOFAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,BLUEBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,FRSTD BLUEBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,BRWN SUGAR CINN",
    categories: [SWEETS as category],
  },
  {
    name: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TRTS,FRSTD BR SGR CIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,FRSTD CHERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,FRSTD CHOC FUDG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,FRSTD RASPBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,S'MORES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,STRAWBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOASTER PASTRIES,KELLOGG,KELLOG'S POP TARTS,FRSTD STRAWBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOASTER PASTRIES,KELLOGG,KELLOGG'S POP TARTS,FRSTD WLD BERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TSTR PSTRS,KELLOGG,KELLOGG'S LF POP TRTS,FRSTD BRWN SGR CINN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TSTR PSTRS,KELLOGG,KELLOGG'S LF POP TARTS,FRSTD STRAWBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG,KELLOGG'S EGGO,BTTRMLK PANCAKE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG,KELLOGG'S NUTRI-GRAIN CRL BARS,MXD BERRY",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "KELLOGG'S,EGGO,WAFFLES,HOMESTYLE,LOFAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,NUTRI-GRAIN,WAFFLES,LOFAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S EGGO LOWFAT BLUEBERRY NUTRI-GRAIN WAFFLES",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "ARCHWAY HOME STYLE COOKIES,SUGAR FREE OATMEAL",
    categories: [SWEETS as category],
  },
  {
    name: "ARCHWAY Home Style Cookies, Chocolate Chip Ice Box",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARCHWAY Home Style Cookies, Coconut Macaroon",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARCHWAY Home Style Cookies, Date Filled Oatmeal",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARCHWAY Home Style Cookies, Dutch Cocoa",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARCHWAY HOME STYLE COOKIES,FROSTY LEMON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARCHWAY Home Style Cookies, Iced Molasses",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARCHWAY Home Style Cookies, Iced Oatmeal",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARCHWAY Home Style Cookies, Molasses",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARCHWAY Home Style Cookies, Oatmeal",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARCHWAY Home Style Cookies, Oatmeal Raisin",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARCHWAY Home Style Cookies, Old Fashioned Molasses",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARCHWAY Home Style Cookies, Old Fashioned Windmill Cookies",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARCHWAY HOME STYLE COOKIES,PNUT BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "ARCHWAY HOME STYLE COOKIES,RASPBERRY FILLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARCHWAY Home Style Cookies, Strawberry Filled",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARCHWAY Home Style Cookies, Reduced Fat Ginger Snaps",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARTIFICIAL BLUEBERRY MUFFIN MIX,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KRAFT,STOVE TOP STUFFING MIX CHICKEN FLAVOR",
    categories: [MEATS as category],
  },
  {
    name: "GEORGE WESTON BAKER,BROWNBERRY SAGE & ONION STUFFING MIX,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,KEEBLER CHOC GRAHAM SELECTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,VANILLA WAFERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KRUSTEAZ ALMOND POPPYSEED MUFFIN MIX,ARTIFICIALLY FLAV,DRY",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "MCKEE BAKING,LITTL DEBBI NUT BAR,WAFER W/PNUT BUTE,CHOC COVE",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MARTHA WHITE FOODS,MARTHA WHITE'S CHEWY FUDGE BROWNIE MX,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARTHA WHITE FOODS,MARTHA WHITE'S BTTRMLK BISCUIT MIX,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MISSION FOODS,MISSION FLR TORTILLAS,SOFT TACO,8 INCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NABISCO,NABISCO GRAHAMS CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NABISCO,NABISCO OREO CRUNCHIES,COOKIE CRUMB TOPPING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NABISCO,NABISCO RITZ CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PILLSBURY,BTTRMLK BISCUITS,ART FLAVOR,REFR DOUGH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PILLSBURY,CHOC CHIP COOKIES,REFR DOUGH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PILLSBURY,CRUSTY FRENCH LOAF,REFR DOUGH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PILLSBURY,TRADITIONAL FUDGE BROWNIE MIX,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PILLSBURY GRANDS,BTTRMLK BISCUITS,REFR DOUGH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PILLSBURY GOLDEN LAYER BTTRMLK BISCUITS,ART FLAVOR,REFR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PILLSBURY,CINN ROLLS W/ ICING,REFR DOUGH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KRAFT FOODS,SHAKE 'N' BAKE ORIG RECIPE,COATING FOR PORK,DRY",
    categories: [MEATS as category],
  },
  {
    name: "GEORGE WESTON BAKERIES,THOMAS ENG MUFFINS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HEINZ,WEIGHT WATCHER,CHOC ECLAIR,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INTERSTATE BRANDS CORP,WONDER HAMBURGER ROLLS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GENERAL MILLS,BETTY CROCKER SUPERMOIST YEL CAKE MIX,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NABISCO,NABISCO SNACKWELL'S FAT FREE DEVIL'S FD COOKIE CAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,CHS,SANDWICH-TYPE W/ CHS FILLING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA CMDTY,BAKERY,FLR MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA CMDTY,BAKERY,FLR MIX LOW-FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WAFFLES,BTTRMLK,FRZ,RTH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WAFFLE,BTTRMLK,FRZ,RTH,TSTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WAFFLE,BTTRMLK,FRZ,RTH,MICROWAVED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WAFFLE,PLN,FRZ,RTH,MICROWAVE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES,PLN,FRZ,RTH,MICROWAVE(INC BUTTMLK)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOASTER PASTRIES,FRUIT,FRSTD",
    categories: [FRUITS as category],
  },
  {
    name: "TSTR PSTRS,FRT,TSTD (INCL APPL,BLUEBERRY,CHERRY,STRAWBERRY)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUFFIN,BLUEBERRY,COMMLY PREP,LOW-FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE CRUST,COOKIE-TYPE,GRAHAM CRACKER,READY CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE CRUST,COOKIE-TYPE,CHOC,READY CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE,DUTCH APPL,COMMLY PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE CRUST,DEEP DISH,FRZ,UNBAKED,MADE W/ ENR FLR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE CRUST,REFR,REG,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE CRUST,DEEP DISH,FRZ,BKD,MADE W/ ENR FLR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE CRUST,REFR,REG,UNBAKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,WHOLE-WHEAT,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,WHEAT,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WAFFLES,CHOC CHIP,FRZ,RTH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOSTADA SHELLS,CORN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAD,SALVADORAN SWT CHS (QUESADILLA SALVADORENA)",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,POUND CAKE TYPE,PAN DE TORTA SALVADORAN",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,PAN DULCE,SWT YEAST BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "KEIKITOS (MUFFINS),LATINO BAKERY ITEM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,POUND,BIMBO BAKERIES USA,PANQUE CASERO,HOME BKD STYLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PAN DULCE,LA RICURA,SALPORA DE ARROZ,COOKIE-LIKE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PASTRY,PASTELITOS DE GUAVA (GUAVA PASTRIES)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,SNACK,GOYA CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,CRM,GAMESA SABROSAS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,CRM,LA MODERNA RIKIS CRM CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GARLIC BREAD,FRZ",
    categories: [GRAINS as category],
  },
  {
    name: "CINNAMON BUNS,FRSTD (INCLUDES HONEY BUNS)",
    categories: [SWEETS as category],
  },
  {
    name: "CRACKERS,CHS,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,SALTINES,WHL WHEAT (INCLUDES MULTI-GRAIN)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAD,WHITE WHEAT",
    categories: [GRAINS as category],
  },
  {
    name: "BAGELS,WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CREAM PUFF,ECLAIR,CUSTARD OR CRM FILLED,ICED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TORTILLAS,RTB OR -FRY,FLR,SHELF STABLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAD,POTATO",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,CHS",
    categories: [GRAINS as category],
  },
  {
    name: "FOCACCIA,ITALIAN FLATBREAD,PLN",
    categories: [GRAINS as category],
  },
  {
    name: "KASHI,TLC,HONEY SESAME CRACKERS",
    categories: [SWEETS as category],
  },
  {
    name: "KASHI,TLC,ORIGINAL 7-GRAIN CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,TLC,COUNTRY CHEDDAR CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,TLC,TSTD ASIAGO CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,BLUEBERRY WAFFLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,H2H WOVEN WHEAT CRACKER,ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,ORIGINAL WAFFLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,TLC,FIRE RSTD VEG CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,H2H WOVEN WHEAT CRACKER,RSTD GARLIC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AUSTIN,CHEDDAR CHS ON WHEAT CRACKERS,SANDWICH-TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AUSTIN,CHEDDAR CHS ON CHS CRACKERS,SANDWICH-TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AUSTIN,CHOCOLATEY PNUT BUTTER CRACKERS,SANDWICH-TYPE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "AUSTIN,GRILLED CHS ON WAFER CRACKERS,SANDWICH-TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AUSTIN,CHEDDAR CHS ON CHS CRACKERS,SANDWICH-TYPE,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AUSTIN,PNUT BUTTER ON CHS CRACKERS,SANDWICH-TYPE,RED FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "AUSTIN,PNUT BUTTER ON TOASTY CRACKERS,SANDWICH-TYPE,RED FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "AUSTIN,PB & J CRACKERS,SANDWICH-TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BARBARA DEE,WNTR MINTS COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,BEANATURAL,ORIGINAL 3-BEAN CHIPS",
    categories: [LEGUMES as category],
  },
  {
    name: "BEAR NAKED,DOUBLE CHOC COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEAR NAKED,FRUIT & NUT COOKIES",
    categories: [FRUITS as category],
  },
  {
    name: "KELLOGG'S,EGGO,BISCUIT SCRAMBLERS,BACON,EGG & CHS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,BISCUIT SCRAMBLERS,EGG & CHS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,FRENCH TOASTER STKS,CINN",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,FRENCH TOASTER STKS,ORIGINAL",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,MINI MUFFIN TOPS,BLUEBERRY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SCHIFF,TIGER'S MILK BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,TOBLERONE,MILK CHOC W/ HONEY & ALMOND NOUGAT",
    categories: [SWEETS as category],
  },
  {
    name: "BEEF JERKY,CHOPD&FORMED",
    categories: [MEATS as category],
  },
  {
    name: "SNACKS,CORN-BASED,EXTRUDED,CHIPS,PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN-BASED,EXTRUDED,CHIPS,BARBECUE-FLAVOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN-BASED,EXTRUDED,CONES,PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,CORN-BASED,EXTRUDED,ONION-FLAVOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN-BASED,EXTRUDED,PUFFS OR TWISTS,CHEESE-FLAVOR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CORNNUTS,PLAIN",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CRISPED RICE BAR,CHOC CHIP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRUIT LEATHER,PIECES",
    categories: [FRUITS as category],
  },
  {
    name: "FRUIT LEATHER,ROLLS",
    categories: [FRUITS as category],
  },
  {
    name: "GRANOLA BARS,HARD,PLAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRANOLA BARS,HARD,ALMOND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRANOLA BARS,HARD,CHOC CHIP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRUIT SYRUP",
    categories: [FRUITS as category],
  },
  {
    name: "GRANOLA BARS,SOFT,UNCOATED,PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRANOLA BARS,SOFT,UNCOATED,PNUT BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "GRANOLA BARS,SOFT,UNCOATED,RAISIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRANOLA BARS,SOFT,COATD,MILK CHOC COATING,CHOC CHIP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,HONEY-COMBED,W/ PNUT BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "GRANOLA BARS,SOFT,COATD,MILK CHOC COATING,PNUT BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "GRANOLA BARS,SOFT,UNCOATED,PNUT BUTTER&CHOC CHIP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "TOPPING,SMUCKER'S MAGIC SHELL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUP,FRUIT FLAV",
    categories: [FRUITS as category],
  },
  {
    name: "ORIENTAL MIX,RICE-BASED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,GENERAL MILLS,CHEX MIX,TRADITIONAL FLAVOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POPCORN,AIR-POPPED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,POPCORN,OIL-POPPED,MICROWAVE,REG FLAVOR,NO TRANS FAT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "POPCORN,CAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POPCORN,CARAMEL-COATED,W/PNUTS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "POPCORN,CARAMEL-COATED,WO/PNUTS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "POPCORN,CHEESE-FLAVOR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PORK SKINS,PLAIN",
    categories: [MEATS as category],
  },
  {
    name: "POTATO CHIPS,BARBECUE-FLAVOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATO CHIPS,SOUR-CREAM-AND-ONION-FLAVOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATO CHIPS,MADE FROM DRIED POTATOES,LT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATO CHIPS,MADE FR DRIED POTATOES,SOUR-CREAM&ONION-FLAVOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PRETZELS,HARD,PLN,SALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PRETZELS,HARD,CONFECTIONER'S COATING,CHOCOLATE-FLAVOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,M&M MARS,COMBOS SNACKS CHEDDAR CHS PRETZEL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,PRETZELS,HARD,WHOLE-WHEAT INCL BOTH SALTED & UNSALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,RICE CRACKER BROWN RICE,PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE CAKES,BROWN RICE,BUCKWHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE CAKES,BROWN RICE,SESAME SD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TORTILLA CHIPS,PLAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Snacks, tortilla chips, nacho cheese",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,TORTILLA CHIPS,RANCH-FLAVOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TRAIL MIX,REGULAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TRAIL MIX,TROPICAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TRAIL MIX,REG,W/CHOC CHIPS,SALTED NUTS&SEEDS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "TORTILLA CHIPS,TACO-FLAVOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,TOOTSIE ROLL,CHOCOLATE-FLAVOR ROLL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,ALMOND JOY CANDY BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,TWIZZLERS CHERRY BITES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,NESTLE,BIT-O'-HONEY CANDY CHEWS",
    categories: [SWEETS as category],
  },
  {
    name: "CANDIES,NESTLE,BUTTERFINGER BAR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CANDIES,BUTTERSCOTCH",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CANDIES,CAROB,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,CARAMELS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,CARAMELLO CANDY BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES, CARAMELS, CHOCOLATE-FLAVOR ROLL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAKING CHOC,UNSWTND,LIQ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Baking chocolate, unsweetened, squares",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,CONFECTIONER'S COATING,YOGURT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,SEMISWEET CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,SWEET CHOCOLATE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,SWT CHOC COATD FONDANT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,HERSHEY'S GOLDEN ALMOND SOLITAIRES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,CONFECTIONER'S COATING,BUTTERSCOTCH",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CANDIES,CONFECTIONER'S COATING,PNUT BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CANDIES,WHITE CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,VANILLA,LT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,VANILLA,RICH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,FRENCH VANILLA,SOFT-SERVE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,YORK PEPPERMINT PATTIE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,TWIZZLERS NIBS CHERRY BITS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,SYMPHONY MILK CHOC BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DESSERTS,FLAN,CARAMEL CUSTARD,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,VANILLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,VANILLA,LT,SOFT-SERVE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SHERBET,ORANGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,5TH AVENUE CANDY BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,FONDANT,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,FUDGE,CHOC,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,FUDGE,CHOC,W/ NUTS,PREPARED-FROM-RECIPE",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CANDIES,FUDGE,PNUT BUTTER,PREPARED-FROM-RECIPE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CANDIES,FUDGE,VANILLA,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,FUDGE,VANILLA W/ NUTS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CANDIES,NESTLE,GOOBERS CHOC COVERED PNUTS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CANDIES,GUMDROPS,STARCH JELLY PIECES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,HARD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,JELLYBEANS",
    categories: [LEGUMES as category],
  },
  {
    name: "CANDIES,KIT KAT WAFER BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,KRACKEL CHOC BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,NESTLE,BABY RUTH BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,TWIZZLERS STRAWBERRY TWISTS CANDY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,TABLE BLENDS,PANCAKE,W/BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "ICE CREAMS,CHOC,LT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,MARS ALMOND BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARSHMALLOWS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,HALAVAH,PLAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,NESTLE,OH HENRY! BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,NESTLE,CHUNKY BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MILK CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,BANANA,DRY MIX,INST,PREP W/ 2% MILK",
    categories: [FRUITS as category],
  },
  {
    name: "PUDDINGS,BANANA,DRY MIX,REG,PREP W/ 2% MILK",
    categories: [FRUITS as category],
  },
  {
    name: "PUDDINGS,CHOC,DRY MIX,INST,PREP W/ 2% MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAKING CHOC,MEXICAN,SQUARES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHOCOLATE-FLAVORED HAZELNUT SPRD",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CANDIES,MILK CHOC COATD PNUTS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CANDIES,MILK CHOC COATD RAISINS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,TABLE BLENDS,PANCAKE,RED-CAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,TABLE BLENDS,PANCAKE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,HERSHEY'S POT OF GOLD ALMOND BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MILK CHOC,W/ALMONDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MILK CHOC,W/RICE CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,MILKY WAY BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,HERSHEY'S SKOR TOFFEE BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOPPINGS,STRAWBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,TRUFFLES,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAK CHOC,MARS SNACKFOOD US,M&M'S SEMISWT CHOC MINI BAK BITS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,M&M'S PNUT CHOC CANDIES",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,M&M'S MILK CHOC CANDIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MOUNDS CANDY BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MR. GOODBAR CHOC BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,NESTLE,100 GRAND BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,NESTLE,CRUNCH BAR&DSSRT TOPPING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAKING CHOC,MARS SNACKFOOD US,M&M'S MILK CHOC MINI BAK BITS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,PEANUT BAR",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CANDIES,PNUT BRITTLE,PREPARED-FROM-RECIPE",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CANDIES,NESTLE,RAISINETS CHOC COVERED RAISINS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,REESE'S PNUT BUTTER CUPS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CANDIES,REESE'S PIECES CANDY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,ROLO CARAMELS IN MILK CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,NESTLE,AFTER EIGHT MINTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,SESAME CRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,SNICKERS BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,STARBURST FRUIT CHEWS,ORIG FRUIT",
    categories: [FRUITS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,M&M'S MINIS MILK CHOC CANDIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,3 MUSKETEERS BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,TWIX CARAMEL COOKIE BARS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,TWIX PNUT BUTTER COOKIE BARS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CANDIES,WHATCHAMACALLIT CANDY BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEWING GUM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,SPL DK CHOC BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COCOA,DRY PDR,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COCOA,DRY PDR,UNSWTND,PROC W/ALKALI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DESSERTS,EGG CUSTARD,BKD,PREPARED-FROM-RECIPE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG CUSTARDS,DRY MIX",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG CUSTARDS,DRY MIX,PREP W/ WHL MILK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COCOA,DRY PDR,UNSWTND,HERSHEY'S EUROPEAN STYLE COCOA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GELATIN DSSRT,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GELATIN DSSRT,DRY MIX,PREP W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GELATIN DSSRT,DRY MIX,RED CAL,W/ ASPRT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GELATIN DSSRT,DRY MIX,RED CAL,W/ ASPRT,PREP W/ H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GELATINS,DRY PDR,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,YORK BITES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DESSERTS,MOUSSE,CHOC,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,CHOC,RTE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,CHOC,DRY MIX,INST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,CHOC,DRY MIX,INST,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DESSERTS,APPL CRISP,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FLAN,CARAMEL CUSTARD,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DESSERTS,PUDD,CHOC,DRY MIX,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,CHOC,DRY MIX,INST,PREP W/ WHOLE MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,CHOC,DRY MIX,REG,PREP W/ 2% MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,COCNT CRM,DRY MIX,INST,PREP W/ 2% MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Puddings, rice, ready-to-eat",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,RICE,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,RICE,DRY MIX,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,TAPIOCA,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,TAPIOCA,DRY MIX,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,VANILLA,RTE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,VANILLA,DRY MIX,INST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,VANILLA,DRY MIX,INST,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,LEMON,DRY MIX,INST,PREP W/ 2% MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EGG CUSTARDS,DRY MIX,PREP W/ 2% MILK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PUDDINGS,VANILLA,DRY MIX,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,VANILLA,DRY MIX,REG,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,RICE,DRY MIX,PREP W/ 2% MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,TAPIOCA,DRY MIX,PREP W/ 2% MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,VANILLA,DRY MIX,REG,PREP W/ 2% MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RENNIN,CHOC,DRY MIX,PREP W/ 2% MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RENNIN,VANILLA,DRY MIX,PREP W/ 2% MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,PRALINE,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZEN NOVELTIES,ICE TYPE,FRUIT,NO SUGAR ADDED",
    categories: [FRUITS as category],
  },
  {
    name: "PUDDINGS,TAPIOCA,RTE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,COCNT CRM,DRY MIX,REG,PREP W/ 2% MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DESSERTS,RENNIN,CHOC,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RENNIN,CHOC,DRY MIX,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DESSERTS,RENNIN,VANILLA,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RENNIN,VANILLA,DRY MIX,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DESSERTS,RENNIN,TABLETS,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROSTINGS,CHOC,CREAMY,RTE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROSTINGS,COCONUT-NUT,RTE",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "FROSTINGS,CRM CHEESE-FLAVOR,RTE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FROSTINGS,VANILLA,CREAMY,RTE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FLAN,CARAMEL CUSTARD,DRY MIX,PREP W/ 2% MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FLAN,CARAMEL CUSTARD,DRY MIX,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,VANILLA,RTE,FAT FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,TAPIOCA,RTE,FAT FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,CHOC,RTE,FAT FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,HERSHEY'S MILK CHOC W/ ALMOND BITES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,REESE'S BITES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,REESE'S NUTRAGEOUS CANDY BAR",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "FROSTINGS,CHOC,CREAMY,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROSTINGS,CHOC,CREAMY,DRY MIX,PREP W/ BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CANDIES,HEATH BITES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROSTINGS,VANILLA,CREAMY,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROSTINGS,WHITE,FLUFFY,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROSTINGS,WHITE,FLUFFY,DRY MIX,PREP W/H2O",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,HERSHEY'S,ALMOND JOY BITES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,HERSHEY,REESESTICKS CRISPY WAFERS,PNUT BUT,MILK CHOC",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CANDIES,HERSHEY,KIT KAT BIG KAT BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,REESE'S,FAST BREAK,MILK CHOC PNT BTR & SFT NUGTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,DOVE MILK CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,DOVE DK CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,MILKYWAYCARAML,MILKCHOCOV",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,MILKY WAY CARML. DKCHOCCOV",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,VANILLA,LT,NO SUGAR ADDED",
    categories: [SWEETS as category],
  },
  {
    name: "FROZEN NOVELTIES,FRUIT & JUC BARS",
    categories: [FRUITS as category],
  },
  {
    name: "ICE CREAMS,CHOC,LT,NO SUGAR ADDED",
    categories: [SWEETS as category],
  },
  {
    name: "CANDIES,DK CHOC COATD COFFEE BNS",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "SNACKS,GENERAL MILLS,BETTY CROCKER FRT RL UPS,BRY FLV,W/VT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,STRAWBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,FARLEY CANDY,FARLEY FRUIT SNACKS,W/VITAMINS A,C,&E",
    categories: [FRUITS as category],
  },
  {
    name: "SNACKS,SUNKIST,SUNKIST FRUIT ROLL,STRAWBERRY,W/VITMNS A,C,&E",
    categories: [FRUITS as category],
  },
  {
    name: "SNACKS,FRUIT LEATHER,PIECES,W/VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "CANDIES,MILK CHOC COATD COFFEE BNS",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "FROZEN NOVELTIES,ICE TYPE,LIME",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZEN NOVELTIES,ICE TYPE,ITALIAN,REST-PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZEN NOVELTIES,ICE TYPE,POP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,M&M'S CRISPY CHOC CANDIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZEN YOGURTS,VANILLA,SOFT-SERVE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRUIT BUTTERS,APPLE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,SNICKERS MUNCH BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HONEY",
    categories: [SWEETS as category],
  },
  {
    name: "JAMS AND PRESERVES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "JELLIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,FUDGE,CHOC MARSHMLLW,W/ NUTS,PREPARED-BY-RECIPE",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,SNICKERS ALMOND BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARMALADE,ORANGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOLASSES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,POP SNICKERS BITE SIZE CANDIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,POP MILKY WAY BITE SIZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACK US,POP'ABLES 3 MUSKETEERS BITE SIZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACK US,STARBURST FRUIT CHEWS,FRT&CREM",
    categories: [FRUITS as category],
  },
  {
    name: "PECTIN,UNSWTND,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE FILLINGS,APPL,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,STARBURST FRUIT CHEWS,TROP",
    categories: [FRUITS as category],
  },
  {
    name: "PIE FILLINGS,CND,CHERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,STARBURST SOUR FRUIT CHEWS",
    categories: [FRUITS as category],
  },
  {
    name: "PUDDINGS,BANANA,DRY MIX,INST",
    categories: [FRUITS as category],
  },
  {
    name: "PUDDINGS,BANANA,DRY MIX,INST,PREP W/ WHL MILK",
    categories: [FRUITS as category],
  },
  {
    name: "PUDDINGS,BANANA,DRY MIX,REG",
    categories: [FRUITS as category],
  },
  {
    name: "PUDDINGS,BANANA,DRY MIX,REG,PREP W/ WHL MILK",
    categories: [FRUITS as category],
  },
  {
    name: "DESSERTS,PUDD,COCNT CRM,DRY MIX,INST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,COCNT CRM,DRY MIX,INST,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,COCNT CRM,DRY MIX,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,COCNT CRM,DRY MIX,REG,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,COCOAVIA CHOC BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACK US,COCOAVIA BLUEBERRY & ALMOND CHOC BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,COCOAVIA CRISPY CHOC BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,LEMON,DRY MIX,INST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,LEMON,DRY MIX,INST,PREP W/ WHL MILK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,LEMON,DRY MIX,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDING,LEMON,DRY MIX,REG,PREP W/ SUGAR,EGG YOLK & H2O",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SUGARS,BROWN",
    categories: [SWEETS as category],
  },
  {
    name: "SUGARS,GRANULATED",
    categories: [SWEETS as category],
  },
  {
    name: "SUGARS,POWDERED",
    categories: [SWEETS as category],
  },
  {
    name: "SWEETENERS,TABLETOP,ASPRT,EQ,PACKETS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUGARS,MAPLE",
    categories: [SWEETS as category],
  },
  {
    name: "SYRUPS,CHOC,HERSHEY'S GENUINE CHOC FLAV LITE SYRUP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,CHOC,FUDGE-TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,CORN,DK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,CORN,LT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,CORN,HIGH-FRUCTOSE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,MALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,MAPLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,SORGHUM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,SNICKERS CRUNCHER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,TABLE BLENDS,PANCAKE,W/2% MAPLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,TABLE BLENDS,CANE&15% MAPLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,TABLE BLENDS,CORN,REFINER,&SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,SKITTLES WILD BERRY BITE SIZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOPPINGS,BUTTERSCOTCH OR CARAMEL",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "TOPPINGS,MARSHMLLW CRM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOPPINGS,PINEAPPLE",
    categories: [FRUITS as category],
  },
  {
    name: "TOPPINGS,NUTS IN SYRUP",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,SKITTLES TROPICAL BITE SIZE CAND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,SKITTLES SOURS ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,SKITTLES ORIGINAL BITE SIZE CAND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROSTINGS,VANILLA,CREAMY,DRY MIX,PREP W/ MARGARINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROSTINGS,CHOC,CREAMY,DRY MIX,PREP W/ MARGARINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROSTINGS,GLAZE,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,FUDGE,CHOC MARSHMLLW,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,TAFFY,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,TOFFEE,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,DIVINITY,PREPARED-FROM-RECIPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZEN NOVELTIES,ICE TYPE,PINEAPPLE-COCONUT",
    categories: [FRUITS as category],
  },
  {
    name: "FROZEN YOGURTS,CHOC,SOFT-SERVE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BANANA CHIPS",
    categories: [FRUITS as category],
  },
  {
    name: "CORNNUTS,BARBECUE-FLAVOR",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CRISPED RICE BAR,ALMOND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRANOLA BARS,SOFT,UNCOATED,CHOC CHIP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRANOLA BARS,SOFT,UNCOATED,CHOC CHIP,GRAHAM&MARSHMLLW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRANOLA BARS,SOFT,UNCOATED,NUT&RAISIN",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SNACKS,BF STKS,SMOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PORK SKINS,BARBECUE-FLAVOR",
    categories: [MEATS as category],
  },
  {
    name: "FROSTING,GLAZ,CHC,PREP-FRM-RCIP,W/ BUTR,NFSMI RECIP NO. C-32",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATO CHIPS,MADE FROM DRIED POTATOES,PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATO CHIPS,PLAIN,SALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATO CHIPS,MADE FROM DRIED POTATOES,CHEESE-FLAVOR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SNACKS,RICE CAKES,BROWN RICE,CORN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE CAKES,BROWN RICE,MULTIGRAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,POTATO STKS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE CAKES,BROWN RICE,RYE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SESAME STKS,WHEAT-BASED,SALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN CAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRANOLA BARS,HARD,PNUT BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "POTATO CHIPS,CHEESE-FLAVOR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SNACKS,POTATO CHIPS,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,POTATO CHIPS,FAT-FREE,MADE W/OLESTRA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,TORTILLA CHIPS,NACHO-FLAVOR,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TORTILLA CHIPS,LOFAT,BKD WO/FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEESE PUFFS & TWISTS,CORN BSD,BKD,LOFAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SNACKS,GRANOLA BAR,FRUIT-FILLED,NONFAT",
    categories: [FRUITS as category],
  },
  {
    name: "POPCORN,SUGAR SYRUP/CARAMEL,FAT-FREE",
    categories: [SWEETS as category],
  },
  {
    name: "POTATO CHIPS,FAT FREE,SALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,KELLOGG,KELLOGG'S RICE KRISPIES TREATS SQUARES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,KELLOGG'S LOFAT GRANOLA BAR,CRUNCHY ALMD/BRN SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "SNACKS,M&M MARS,KUDOS WHL GRAIN BARS,CHOC CHIP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,KELLOGG'S,NUTRI-GRAIN CRL BARS,FRUIT",
    categories: [FRUITS as category],
  },
  {
    name: "SNACKS,TORTILLA CHIPS,LOFAT,MADE W/OLESTRA,NACHO CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,POTATO CHIPS,FRM DRIED POTATOES,FAT-FREE,W/ OLESTRA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TARO CHIPS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,SEMISWEET CHOC,MADE W/BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "GELATIN DSSRT,DRY MIX,W/ ADDED VIT C,SODIUM-CITRATE & SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GELATIN DSSRT,DRY MIX,RED CAL,W/ ASPRT,ADDED P,K,NA,VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GELATIN DSSRT,DRY MIX,RED CAL,W/ ASPRT,NO ADDED NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,BANANA,DRY MIX,INST,W/ ADDED OIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PUDDINGS,BANANA,DRY MIX,REG,W/ ADDED OIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PUDDINGS,LEMON,DRY MIX,REG,W/ ADDED OIL,K,NA",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "PUDDINGS,TAPIOCA,DRY MIX,W/ NO ADDED SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,VANILLA,DRY MIX,REG,W/ ADDED OIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "JAMS&PRESERVES,APRICOT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,TABLE BLENDS,PANCAKE,W/2% MAPLE,W/ K",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN CAKES,VERY LO NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,CORN-BASED,EXTRDD,PUFFS OR TWISTS,CHEESE-FLAVOR,UNENR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SNACKS,CORN-BASE,EXTRUD,CHIPS,BARBECUE-FLAVOR,W/ENR MASA FLR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,POPCORN,AIR-POPPED (UNSALTED)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,POPCORN,OIL-POPPED,WHITE POPCORN,SALT ADDED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "POTATO CHIPS,PLN,MADE W/PART HYDR SOYBN OIL,SALTED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "POTATO CHIPS,PLN,MADE W/PART HYDR SOYBN OIL,UNSALTED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "POTATO CHIPS,PLN,UNSALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PRETZELS,HARD,PLN,MADE W/UNENR FLR,SALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PRETZELS,HARD,PLN,MADE W/UNENR FLR,UNSALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,PRETZELS,HARD,PLN,MADE W/ ENR FLR,UNSALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE CAKES,BROWN RICE,PLN,UNSALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE CAKES,BROWN RICE,BUCKWHEAT,UNSALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE CAKES,BROWN RICE,MULTIGRAIN,UNSALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE CAKES,BROWN RICE,SESAME SD,UNSALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SESAME STKS,WHEAT-BASED,UNSALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TRAIL MIX,REG,UNSALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TRAIL MIX,REG,W/CHOC CHIPS,UNSALTED NUTS&SEEDS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "POTATO CHIPS,WO/SALT,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TORTILLA CHIPS,LOFAT,UNSALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZEN NOVELTIES,JUC TYPE,POPSICLE SCRIBBLERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,TORTILLA CHIPS,NACHO-FLAVOR,MADE W/ENR MASA FLR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,SUGAR-COATED ALMONDS",
    categories: [SWEETS as category],
  },
  {
    name: "COCOA,DRY PDR,HI-FAT OR BRKFST,PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COCOA,DRY PDR,HI-FAT OR BRKFST,PROC W/ALKALI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,SOFT FRUIT & NUT SQUARES",
    categories: [FRUITS as category],
  },
  {
    name: "ICE CREAMS,VANILLA,FAT FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEETENERS,TABLETOP,SUCRALOSE,SPLENDA PACKETS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZEN NOVELTIES,NO SUGAR ADDED,FUDGSICLE POPS",
    categories: [SWEETS as category],
  },
  {
    name: "FROZ NOVELTIES,ICE TYPE,SUGAR FREE,ORNGE,CHRY,& GRP POPSICLE",
    categories: [SWEETS as category],
  },
  {
    name: "FRZ NVL, KLONDIKE,SLIM-A-BEAR FUDG BR,98% FT FR,NO SGR ADDED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,BREYERS,ALL NAT LT VANILLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,BREYERS,ALL NAT LT FRENCH VANILLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,BREYERS,98% FAT FREE VANILLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,BREYERS,ALL NAT LT VANILLA CHOC STRAWBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,BREYERS,ALL NAT LT MINT CHOC CHIP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,BREYERS,NO SUGAR ADDED,BUTTER PECAN",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "ICE CREAMS,BREYERS,NO SUGAR ADDED,FRENCH VANILLA",
    categories: [SWEETS as category],
  },
  {
    name: "ICE CREAMS,BREYERS,NO SUGAR ADDED,VANILLA",
    categories: [SWEETS as category],
  },
  {
    name: "ICE CREAMS,BREYERS,NO SUGAR ADDED,VANILLA FUDGE TWIRL",
    categories: [SWEETS as category],
  },
  {
    name: "ICE CREAMS,BREYERS,NO SUGAR ADDED,VANILLA CHOC STRAWBERRY",
    categories: [SWEETS as category],
  },
  {
    name: "FROZEN NOVELTIES,KLONDIKE,SLIM-A-BEAR CHOC CONE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZEN NOVELTIES,KLONDIKE,SLIM-A-BEAR VANILLA SNDWCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZEN NOVL,KLONDIKE,SLIM-A-BEAR,NO SGR ADDED,STICKLESS BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZEN NOVELTIES,NO SUGAR ADDED CREAMSICLE POPS",
    categories: [SWEETS as category],
  },
  {
    name: "FROZEN NOVELTIES,SUGAR FREE,CREAMSICLE POPS",
    categories: [SWEETS as category],
  },
  {
    name: "ICE CREAMS,BREYERS,ALL NAT LT FRENCH CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,BREYERS,98% FAT FREE CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,BREYERS,NO SUGAR ADDED,CHOC CARAMEL",
    categories: [SWEETS as category],
  },
  {
    name: "CANDIES,REESE'S FAST BREAK,CANDY BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,COCOAVIA CHOC COVERED ALMONDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,REG,LO CARBOHYDRATE,VANILLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ICE CREAMS,REG,LO CARBOHYDRATE,CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHOCOLATE,DK,45- 59% CACAO SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHOCOLATE,DK,60-69% CACAO SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHOCOLATE,DK,70-85% CACAO SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,CHOC,DK,NFS (45-59% CACAO SOL 90%; 60-69% CACAO SOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEETENERS,FOR BAKING,BROWN,CONTAINS SUGAR & SUCRALOSE",
    categories: [SWEETS as category],
  },
  {
    name: "SWEETENERS,FOR BAKING,CONTAINS SUGAR & SUCRALOSE",
    categories: [SWEETS as category],
  },
  {
    name: "SUGAR,TURBINADO",
    categories: [SWEETS as category],
  },
  {
    name: "SWEETENERS,SUGAR SUB,GRANULATED,BROWN",
    categories: [SWEETS as category],
  },
  {
    name: "CANDIES,CRISPY BAR W/ PNUT BUTTER FILLING",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SYRUP,MAPLE,CANADIAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Sweetener, syrup, agave",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Candies, NESTLE, BUTTERFINGER Crisp",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CANDIES,M&M MARS 3 MUSKETEERS TRUFFLE CRISP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,CHOC,HERSHEY'S SUGAR FREE,GENUINE CHOC FLAV,LITE SYRU",
    categories: [SWEETS as category],
  },
  {
    name: "CANDIES,M&M MARS PRETZEL CHOC CANDIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEETENER,HERBAL EXTRACT PDR FROM STEVIA LEAF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,FRUIT SNACKS,W/ HI VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "JAMS,PRESERVES,MARMALADES,SWTND W/ FRUIT JUC",
    categories: [FRUITS as category],
  },
  {
    name: "CANDIES,TAMARIND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,COCNT BAR,NOT CHOC COVERED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,HERSHEYS,PAYDAY BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUP,NESTLE,CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AMARANTH GRAIN,UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AMARANTH GRAIN,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARROWROOT FLOUR",
    categories: [GRAINS as category],
  },
  {
    name: "BARLEY,HULLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BARLEY,PEARLED,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BARLEY,PEARLED,COOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BUCKWHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BUCKWHEAT GROATS,RSTD,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BUCKWHEAT GROATS,RSTD,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BUCKWHEAT FLR,WHOLE-GROAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BULGUR,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BULGUR,COOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN GRAIN,YEL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN BRAN,CRUDE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN FLR,WHOLE-GRAIN,YEL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN FLR,MASA,ENR,WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN FLR,YEL,DEGERMED,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN FLR,MASA,UNENR,WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORNMEAL,WHOLE-GRAIN,YEL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORNMEAL,DEGERMED,ENR,YEL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORNMEAL,YEL,SELF-RISING,BOLTED,PLN,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORNMEAL,YEL,SELF-RISING,BOLTED,W/ WHEAT FLR ADDED,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORNMEAL,YEL,SELF-RISING,DEGERMED,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORNSTARCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COUSCOUS,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COUSCOUS,COOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HOMINY,CANNED,WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILLET,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILLET,COOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OAT BRAN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OAT BRAN,COOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "QUINOA,UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,BROWN,LONG-GRAIN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,BROWN,LONG-GRAIN,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OATS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,BROWN,MEDIUM-GRAIN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,BROWN,MEDIUM-GRAIN,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,BROWN,PARBLD,DRY,UNCLE BEN'S",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,LONG-GRAIN,REG,RAW,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,LONG-GRAIN,REG,ENR,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,LONG-GRAIN,PARBLD,ENR,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,LONG-GRAIN,PARBLD,ENR,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,LONG-GRAIN,PRECKD OR INST,ENR,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,LONG-GRAIN,PRECKD OR INST,ENR,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,MEDIUM-GRAIN,RAW,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,MEDIUM-GRAIN,ENR,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,SHORT-GRAIN,ENR,UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,SHORT-GRAIN,ENR,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,GLUTINOUS,UNENR,UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,GLUTINOUS,UNENR,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,STMD,CHINESE RESTAURANT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE BRAN,CRUDE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE FLR,WHITE,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RYE GRAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RYE FLOUR,DARK",
    categories: [GRAINS as category],
  },
  {
    name: "RYE FLOUR,MEDIUM",
    categories: [GRAINS as category],
  },
  {
    name: "RYE FLOUR,LIGHT",
    categories: [GRAINS as category],
  },
  {
    name: "SEMOLINA,ENRICHED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SORGHUM GRAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TAPIOCA,PEARL,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TRITICALE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TRITICALE FLR,WHOLE-GRAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT,HARD RED SPRING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT,HARD RED WINTER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT,SOFT RED WINTER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT,HARD WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT,SOFT WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT,DURUM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT BRAN,CRUDE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT GERM,CRUDE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLOUR,WHOLE-GRAIN",
    categories: [GRAINS as category],
  },
  {
    name: "WHEAT FLR,WHITE,ALL-PURPOSE,ENR,BLEACHED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE,ALL-PURPOSE,SELF-RISING,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE,BREAD,ENR",
    categories: [GRAINS as category],
  },
  {
    name: "WHEAT FLR,WHITE,CAKE,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE,TORTILLA MIX,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT,SPROUTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WILD RICE,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WILD RICE,COOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE FLOUR,BROWN",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,GLUTEN-FREE,CORN,DRY",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,GLUTEN-FREE,CORN,CKD",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,FRESH-REFRIGERATED,PLN,AS PURCHASED",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,FRESH-REFRIGERATED,PLN,CKD",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,FRESH-REFRIGERATED,SPINACH,AS PURCHASED",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,FRESH-REFRIGERATED,SPINACH,CKD",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,HOMEMADE,MADE W/EGG,CKD",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PASTA,HOMEMADE,MADE WO/EGG,CKD",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MACARONI,VEG,ENR,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACARONI,VEG,ENR,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NOODLES,EGG,DRY,ENRICHED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "NOODLES,EGG,ENR,CKD",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "NOODLES,EGG,SPINACH,ENR,DRY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "NOODLES,EGG,SPINACH,ENR,CKD",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "NOODLES,CHINESE,CHOW MEIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NOODLES,JAPANESE,SOBA,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NOODLES,JAPANESE,SOBA,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NOODLES,JAPANESE,SOMEN,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NOODLES,JAPANESE,SOMEN,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NOODLES,FLAT,CRUNCHY,CHINESE RESTAURANT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PASTA,DRY,ENR",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,CKD,ENR,WO/ ADDED SALT",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,WHOLE-WHEAT,DRY",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,WHOLE-WHEAT,CKD",
    categories: [GRAINS as category],
  },
  {
    name: "SPAGHETTI,SPINACH,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPAGHETTI,SPINACH,COOKED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLOURS,BREAD,UNENR",
    categories: [GRAINS as category],
  },
  {
    name: "BARLEY FLOUR OR MEAL",
    categories: [GRAINS as category],
  },
  {
    name: "BARLEY MALT FLR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OAT FLR,PART DEBRANNED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE NOODLES,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE NOODLES,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PASTA,WHL GRAIN,51% WHL WHEAT,REMAINING UNENR SEMOLINA,DRY",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,WHL GRAIN,51% WHL WHEAT,REMAINING UNENR SEMOLINA,CKD",
    categories: [GRAINS as category],
  },
  {
    name: "QUINOA,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT,KAMUT KHORASAN,UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT,KAMUT KHORASAN,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPELT,UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPELT,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TEFF,UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TEFF,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NOODLES,EGG,CKD,ENR,W/ SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CORN GRAIN,WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN FLR,WHOLE-GRAIN,BLUE (HARINA DE MAIZ MORADO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN FLR,WHOLE-GRAIN,WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN FLR,YEL,MASA,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORNMEAL,WHOLE-GRAIN,WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PASTA,CKD,ENR,W/ ADDED SALT",
    categories: [GRAINS as category],
  },
  {
    name: "CORNMEAL,DEGERMED,ENR,WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORNMEAL,WHITE,SELF-RISING,BOLTED,PLN,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORNMEAL,WHITE,SELF-RISING,BOLTED,W/ WHEAT FLR ADDED,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORNMEAL,WHITE,SELF-RISING,DEGERMED,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HOMINY,CANNED,YELLOW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,LONG-GRAIN,REG,CKD,ENR,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE,ALL-PURPOSE,ENR,CALCIUM-FORTIFIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NOODLES,EGG,DRY,UNENR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "NOODLES,EGG,UNENR,CKD,WO/ ADDED SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PASTA,DRY,UNENR",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,CKD,UNENR,WO/ ADDED SALT",
    categories: [GRAINS as category],
  },
  {
    name: "CORNMEAL,DEGERMED,UNENR,YEL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,LONG-GRAIN,REG,RAW,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,LONG-GRAIN,REG,UNENR,CKD WO/ SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,LONG-GRAIN,PARBLD,UNENR,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,LONG-GRAIN,PARBLD,UNENR,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,MEDIUM-GRAIN,RAW,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,MEDIUM-GRAIN,CKD,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,SHORT-GRAIN,RAW,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,SHORT-GRAIN,CKD,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEMOLINA,UNENRICHED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE,ALL-PURPOSE,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "NOODLES,EGG,CKD,UNENR,W/ SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PASTA,CKD,UNENR,W/ ADDED SALT",
    categories: [GRAINS as category],
  },
  {
    name: "CORNMEAL,DEGERMED,UNENR,WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPAGHETTI,PROTEIN-FORTIFIED,CKD,ENR (N X 6.25)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,WHITE,LONG-GRAIN,REG,CKD,UNENR,W/SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE,ALL-PURPOSE,ENR,UNBLEACHED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPAGHETTI,PROTEIN-FORTIFIED,DRY,ENR (N X 6.25)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE (INDUSTRIAL),9% PROT,BLEACHED,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE (INDUSTRIAL),9% PROT,BLEACHED,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE (INDUSTRIAL),10% PROT,BLEACHED,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE (INDUSTRIAL),10% PROT,BLEACHED,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE (INDUSTRIAL),10% PROT,UNBLEACHED,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE (INDUSTRIAL),11.5% PROT,BLEACHED,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE (INDUSTRIAL),11.5% PROT,BLEACHED,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE (INDUSTRIAL),11.5% PROT,UNBLEACHED,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE (INDUSTRIAL),13% PROT,BLEACHED,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE (INDUSTRIAL),13% PROT,BLEACHED,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE (INDUSTRIAL),15% PROT,BLEACHED,ENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHITE (INDUSTRIAL),15% PROT,BLEACHED,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILLET FLR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SORGHUM FLR,WHOLE-GRAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHEAT FLR,WHOLE-GRAIN,SOFT WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SORGHUM FLR,REFINED,UNENR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE,BROWN,PARBLD,CKD,UNCLE BENS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PASTA,WHL GRAIN,51% WHL WHEAT,REMAINING ENR SEMOLINA,CKD",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,WHL GRAIN,51% WHL WHEAT,REMAINING ENR SEMOLINA,DRY",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,GLUTEN-FREE,BROWN RICE FLR,CKD,TINKYADA",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,GLUTEN-FREE,CORN FLR & QUINOA FLR,CKD,ANCIENT HARVEST",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,GLUTEN-FREE,RICE FLR & RICE BRAN EXTRACT,CKD,DE BOLES",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA,GLUTEN-FREE,CORN & RICE FLR,CKD",
    categories: [GRAINS as category],
  },
  {
    name: "FAST FOODS  BISCUIT  W/ EGG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,BISCUIT,W/EGG&BACON",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,BISCUIT,W/EGG&HAM",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BREAKFAST ITEMS,BISCUIT W/EGG&SAUSAGE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,BISCUIT W/ EGG & STEAK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,BISCUIT,W/EGG,CHS,&BACON",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,BISCUIT,W/HAM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,BISCUIT,W/SAUSAGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,BISCUIT,W/ CRISPY CHICK FILLET",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,CROISSANT,W/EGG&CHS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CROISSANT,W/EGG,CHS,&BACON",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CROISSANT,W/EGG,CHS,&HAM",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CROISSANT,W/EGG,CHS,&SAUSAGE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,EGG,SCRAMBLED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,ENG MUFFIN,W/CHS&SAUSAGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,ENG MUFFIN,W/EGG,CHS,&CANADIAN BACON",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,ENG MUFFIN,W/EGG,CHS,&SAUSAGE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,FRENCH TOAST W/ BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,FRENCH TOAST STKS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,POTATOES,HASH BROWNS,RND PIECES OR PATTY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,VANILLA,LT,SOFT-SERVE ICE CRM,W/ CONE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,SUNDAE,CARAMEL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,SUNDAE,HOT FUDGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,SUNDAE,STRAWBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,SHRIMP,BREADED&FRIED",
    categories: [GRAINS as category],
  },
  {
    name: "FAST FOODS,BURRITO,W/BNS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,BURRITO,W/BNS&CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,BURRITO,W/ BNS & BF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,BURRITO,W/BNS,CHS,&BF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,NACHOS,W/CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,NACHOS,W/ CHS,BNS,GROUND BF,& TOMATOES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,TACO W/ BF,CHS & LETTUCE,HARD SHELL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,TACO SALAD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,CHEESEBURGER; SINGLE,REG PATTY; PLN",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CHEESEBURGER; SINGLE,REG PATTY,W/ CONDMNT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CHEESEBURGER; SINGLE,REG PATTY,W/ CONDMNT & VEG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CHEESEBURGER; DOUBLE,REG PATTY; PLN",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CHEESEBURGER; DOUBLE,REG PATTY,W/ CONDMNT & VEG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CHEESEBURGER,DOUBLE,REG PATTY & BUN,W/ CONDMNT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CHSEBURGER; DBLE,REG,PATTY & BN; W/ CONDMNT & VEG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,CHEESEBURGER; SINGLE,LRG PATTY; PLN",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CHESEBURGER; SINGLE,LRG PATTY; W/ CONDMNT & BACON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,CHEESEBURGER; SINGLE,LRG PATTY; W/ CONDMNT & VEG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CHSBURGER; SINGLE,LRG PATTY; W/ CONDMNT,VEG & HAM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,CHEESEBURGER; DOUBLE,LRG PATTY,W/ CONDMNT & VEG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CHEESEBURGER; TRIPLE,REG PATTY; PLN",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CHICK FILLET SNDWCH,PLN W/ PICKLES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,FISH SNDWCH,W/TARTAR SAU",
    categories: [SEAFOOD as category],
  },
  {
    name: "FAST FOODS,FISH SNDWCH,W/TARTAR SAU&CHS",
    categories: [SEAFOOD as category],
  },
  {
    name: "FAST FOODS,HAMBURGER; SINGLE,REG PATTY; PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HAMBURGER; SINGLE,REG PATTY; W/ CONDMNT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HAMBURGER; SINGLE,REG PATTY; W/ CONDMNT & VEG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HAMBURGER; DOUBLE,REG,PATTY; PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HAMBURGER; DOUBLE,REG PATTY; W/ CONDMNT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HAMBURGER; SINGLE,LRG PATTY; PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HAMBURGER; SINGLE,LRG PATTY; W/ CONDMNT & VEG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HAMBURGER; DOUBLE,LRG PATTY; W/ CONDMNT & VEG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HAMBURGER,LRG,TRIPLE PATTY,W/CONDMNT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HOTDOG,PLAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HOTDOG,W/CHILI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HOTDOG,W/CORN FLR COATING (CORNDOG)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,RST BF SNDWCH,PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,SUBMARINE SNDWCH,COLD CUT BRD W/ LETTUCE & TOMATO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,SUBMARINE SNDWCH,RST BF BREAD W/ LETTUCE & TOMATO",
    categories: [GRAINS as category],
  },
  {
    name: "FAST FOODS,SUBMARINE SNDWCH,TUNA BREAD W/ LETTUCE & TOMATO",
    categories: [SEAFOOD as category],
  },
  {
    name: "FAST FOODS, COLESLAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HUSH PUPPIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,ONION RINGS,BREADED&FRIED",
    categories: [GRAINS as category],
  },
  {
    name: "FST FOODS, POTATO, FRNCH FRIED IN VEG OIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FAST FOODS,POTATO,MASHED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SIDE DISHES,POTATO SALAD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURGER KING,VANILLA SHAKE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FD,BISCUIT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHICK-FIL-A,CHICK-N-STRIPS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHICK-FIL-A,HASH BROWNS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCHOOL LUNCH,PIZZA,BIG DADDY'S LS 16\" 51% WHL CHS PIZZA,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCHOOL LUNCH,PIZZA,BIG DADDY'S 51% WHL TRKY PEP PIZZA,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCHOOL LUNCH,PIZZA,TONY'S SMARTPIZZA PIZZA 50/50 CHS,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCHOOL LUNCH,PIZZA,TONY'S SMARTPIZZA PEP PIZZA 50/50 CHS,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCHOOL LUNCH,PIZZA,TONY'S BRKFST PIZZA SAUSAGE,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUBWAY,SWT ONION CHICK SUB WHT BRD LTTC,TMT & SWT ONION SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,SUB,SWT ONION CHICK WIT BRD W/ LTTC,TMT SWT ONION",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUBWAY,SUBWAY CLUB SUB ON WHITE BREAD W/ LETTUCE & TOMATO",
    categories: [GRAINS as category],
  },
  {
    name: "FAST FOODS,SUBMARINE SNDWCH,TRKY RST BF HM BRD W/ LTTC & TMT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,SUBMARINE SNDWCH,OVEN RSTD CHCK WHT BRD LTTC  TMT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,SUBMARINE SNDWCH,TRKY BRST WHT BRD LTTC & TMT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,SUBMARINE SNDWCH,HAM ON WHT BRD W/ LTTC & TMT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUBWAY,MEATBALL MARINARA SUB ON WHITE BREAD (NO TOPPINGS)",
    categories: [GRAINS as category],
  },
  {
    name: "FAST FOODS,SUBMARINE SNDWCH,MEATBALL MARINARA ON WHITE BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "SUBWAY,STEAK & CHS SUB ON WHT BRD W/ AMERICAN CHS,LTTC & TMT",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "FAST FOODS,SUBMARINE SNDWCH,STK CHS WHT BRD W/ CHS,LTTC TMT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUBWAY,B.L.T. SUB ON WHITE BREAD W/ BACON,LETTUCE & TOMATO",
    categories: [GRAINS as category],
  },
  {
    name: "FAST FOODS,SUBMARINE SNDWCH,BACON,LETTUCE,& TOMATO WHT BRD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HAMBURGER,LRG,SINGLE PATTY,W/CONDMNT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUBWAY,TURKEY BREAST SUB ON WHITE BREAD W/ LETTUCE & TOMATO",
    categories: [MEATS as category],
  },
  {
    name: "SUBWAY,BLACK FOREST HAM SUB ON WHITE BRD W/ LETTUCE & TOMATO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUBWAY,RST BF SUB ON WHITE BREAD W/ LETTUCE & TOMATO",
    categories: [GRAINS as category],
  },
  {
    name: "SUBWAY,OVEN RSTD CHICK SUB ON WHITE BRD W/ LETTUCE & TOMATO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUBWAY,COLD CUT SUB ON WHITE BREAD W/ LETTUCE & TOMATO",
    categories: [GRAINS as category],
  },
  {
    name: "SUBWAY,TUNA SUB ON WHITE BREAD W/ LETTUCE & TOMATO",
    categories: [SEAFOOD as category],
  },
  {
    name: "PIZZA,CHS TOPPING,REG CRUST,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIZZA,CHS TOPPING,RISING CRUST,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIZZA,MEAT & VEG TOPPING,REG CRUST,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIZZA,MEAT & VEG TOPPING,RISING CRUST,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,HAMBURGER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,CHICK,BREADED & FRIED,BNLESS PIECES,PLN",
    categories: [GRAINS as category],
  },
  {
    name: "FAST FOODS,CRISPY CHICK FILET SNDWCH,W/ LETTUCE & MAYO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S, FLT-O-FSH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S, CHEESEBURGER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MCDONALD'S,QUARTER POUNDER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,QUARTER POUNDER W/ CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,BIG MAC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,FRENCH FR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WENDY'S,CLASSIC SINGLE HAMBURGER,NO CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WENDY'S,CLASSIC SINGLE HAMBURGER,W/ CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WENDY'S,JR. HAMBURGER,WO/ CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WENDY'S,JR. HAMBURGER,W/ CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WENDY'S,CLASSIC DOUBLE,W/ CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WENDY'S,HOMESTYLE CHICK FILLET SNDWCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WENDY'S,ULTIMATE CHICK GRILL SNDWCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WENDY'S,CHICK NUGGETS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WENDY'S,FRENCH FR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WENDY'S,FROSTY DAIRY DSSRT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURGER KING,FRENCH FR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURGER KING,HAMBURGER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURGER KING, CHSBRGR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURGER KING,WHOPPER,NO CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURGER KING,WHOPPER,W/ CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURGER KING,DOUBLE WHOPPER,NO CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURGER KING,DOUBLE WHOPPER,W/ CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURGER KING,CHICK STRIPS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURGER KING,PREMIUM FISH SNDWCH",
    categories: [SEAFOOD as category],
  },
  {
    name: "BURGER KING,ORIGINAL CHICK SNDWCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TACO BELL,ORIGINAL TACO W/ BF,CHS & LETTUCE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TACO BELL,SOFT TACO W/ BF,CHS & LETTUCE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TACO BELL,SOFT TACO W/ CHICK,CHS & LETTUCE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TACO BELL,SOFT TACO W/ STEAK",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "TACO BELL,BEAN BURRITO",
    categories: [LEGUMES as category],
  },
  {
    name: "TACO BELL,BURRITO SUPREME W/ BF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TACO BELL,BURRITO SUPREME W/ CHICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TACO BELL,BURRITO SUPREME W/ STEAK",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "TACO BELL,NACHOS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TACO BELL,NACHOS SUPREME",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TACO BELL,TACO SALAD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'PIZZA HUT 12" CHS PIZZA,HAND-TOSSED CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'PIZZA HUT 12" CHS PIZZA,PAN CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIZZA HUT 12\" CHS PIZZA,THIN 'N CRISPY CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'PIZZA HUT 12" PEPPERONI PIZZA,HAND-TOSSED CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'PIZZA HUT 12" PEPPERONI PIZZA,PAN CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'PIZZA HUT 12" SUPER SUPREME PIZZA,HAND-TOSSED CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DOMINO'S 14\" CHS PIZZA,CLASSIC HAND-TOSSED CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DOMINO'S 14\" CHS PIZZA,ULTIMATE DEEP DISH CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DOMINO'S 14\" CHS PIZZA,CRUNCHY THIN CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DOMINO'S 14\" PEPPERONI PIZZA,CLASSIC HAND-TOSSED CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DOMINO'S 14\" PEPPERONI PIZZA,ULTIMATE DEEP DISH CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DOMINO'S 14\" EXTRAVAGANZZA FST PIZZA,CLSSIC HAND-TOSSED CRST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PAPA JOHN'S 14\" CHS PIZZA,ORIGINAL CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PAPA JOHN'S 14\" PEPPERONI PIZZA,ORIGINAL CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PAPA JOHN'S 14\" THE WORKS PIZZA,ORIGINAL CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PAPA JOHN'S 14\" CHS PIZZA,THIN CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LITTLE CAESARS 14" ORIGINAL RND CHS PIZZA,REG CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LITTLE CAESARS 14" ORIGINAL RND PEPPERONI PIZZA,REG CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LITTLE CAESARS 14" ORIGINAL RND MEAT & VEG PIZZA,REG CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LITTLE CAESARS 14" CHS PIZZA,LRG DEEP DISH CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LITTLE CAESARS 14" PEPPERONI PIZZA,LRG DEEP DISH CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'LITTLE CAESARS 14" CHS PIZZA,THIN CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'PIZZA HUT 14" CHS PIZZA,HAND-TOSSED CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'PIZZA HUT 14" CHS PIZZA,PAN CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIZZA HUT 14\" CHS PIZZA,THIN 'N CRISPY CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'PIZZA HUT 14" PEPPERONI PIZZA,HAND-TOSSED CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'PIZZA HUT 14" PEPPERONI PIZZA,PAN CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'PIZZA HUT 14" SUPER SUPREME PIZZA,HAND-TOSSED CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'FAST FD,PIZZA CHAIN,14" PIZZA,CHS TOPPING,REG CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'FAST FD,PIZZA CHAIN,14" PIZZA,CHS TOPPING,THICK CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'FAST FD,PIZZA CHAIN,14" PIZZA,CHS TOPPING,THIN CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'FAST FD,PIZZA CHAIN,14" PIZZA,PEPPERONI TOPPING,REG CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'FAST FD,PIZZA CHAIN,14" PIZZA,PEPPERONI TOPPING,THICK CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'FAST FD,PIZZA CHAIN,14" PIZZA,MEAT & VEG TOPPING,REG CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,GRIDDLE CAKE SNDWCH,EGG,CHS,& SAUSAGE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,GRIDDLE CAKE SNDWCH,SAUSAGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,GRIDDLE CAKE SNDWCH,EGG,CHS,& BACON",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MCDONALD'S,CHICK MCNUGGETS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,BARBEQUE SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,CREAMY RANCH SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,HOT MUSTARD SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,SPICY BUFFALO SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,SWT 'N SOUR SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,TANGY HONEY MUSTARD SAU",
    categories: [SWEETS as category],
  },
  {
    name: "MCDONALD'S,HASH BROWN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,HOTCAKES (PLAIN)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,BKD APPL PIE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,BACON,EGG & CHS MCGRIDDLES",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MCDONALD'S,SAUSAGE MCGRIDDLES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,SAUSAGE,EGG & CHS MCGRIDDLES",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MCDONALD'S,VANILLA RED FAT ICE CRM CONE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,STRAWBERRY SUNDAE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,HOT CARAMEL SUNDAE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,HOT FUDGE SUNDAE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,PNUTS (FOR SUNDAES)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MCDONALD'S,MCFLURRY W/ M&M'S CANDIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,MCFLURRY W/ OREO COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,SAUSAGE BURRITO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,BIG BRKFST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,LOFAT CARAMEL SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,DOUBLE CHEESEBURGER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MCDONALD'S,DOUBLE QUARTER POUNDER W/ CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,NEWMAN'S OWN COBB DRSNG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,NEWMAN'S OWN CREAMY CAESAR DRSNG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,NEWMAN'S OWN LOFAT BALSAMIC VINAIGRETTE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,NEWMAN'S OWN RANCH DRSNG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,BIG MAC (WITHOUT BIG MAC SAUCE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,MCCHICKEN SNDWCH",
    categories: [MEATS as category],
  },
  {
    name: "MCDONALD'S,MCCHICKEN SNDWCH (WITHOUT MAYONNAISE)",
    categories: [MEATS as category],
  },
  {
    name: "MCDONALD'S,EGG MCMUFFIN",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MCDONALD'S,SAUSAGE MCMUFFIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,SAUSAGE MCMUFFIN W/ EGG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MCDONALD'S,BACON EGG & CHS BISCUIT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MCDONALD'S,SAUSAGE BISCUIT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,SAUSAGE BISCUIT W/ EGG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MCDONALD'S,DELUXE BRKFST,W/ SYRUP & MARGARINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,HOTCAKES & SAUSAGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,HOTCAKES (WITH 2 PATS MARGARINE & SYRUP)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,BACON RANCH SALAD W/ GRILLED CHICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S BACON RANCH SALAD W/ CRISPY CHICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,BACON RANCH SALAD WO/ CHICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,SIDE SALAD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,FRUIT 'N YOGURT PARFAIT",
    categories: [FRUITS as category],
  },
  {
    name: "MCDONALD'S,FRUIT 'N YOGURT PARFAIT (WITHOUT GRANOLA)",
    categories: [FRUITS as category],
  },
  {
    name: "MCDONALD'S,FILET-O-FISH (WITHOUT TARTAR SAUCE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "BURGER KING,CROISSAN'WICH W/ SAUSAGE,EGG & CHS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BURGER KING,CROISSAN'WICH W/ SAUSAGE & CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURGER KING,CROISSAN'WICH W/ EGG & CHS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BURGER KING,FRENCH TOAST STKS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURGER KING,HASH BROWN ROUNDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,MINIATURE CINN ROLLS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HAMBURGER; DOUBLE,LRG PATY; W/ CONDMNT,VEG & MAYO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FT FDS, HAMBRGER; SIN, LRG PATTY; W/ CONDMNTS, VEG, MAYO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,HMBURGR; SNG,REG PTTY; DBL BN W/ CNDMNT & SPL SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,CHEESEBURGER; DOUBLE,REG PATTY; W/ CONDMNT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CHEESEBURGER; DOUBLE,LRG PATTY; W/ CONDMNT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,CHESEBRGER; SING,LRG PATY; W/ CONDMNT,VEG & MAYO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,CHEESEBURGER; SINGLE,LRG PATTY; W/ CONDMNT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FDS,CHSEBURGER; DOUBLE,LRG PATTY; W/ CONDMNT,VEG & MAYO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,CHSBURGR; DBL,RG PTTY; DBL BN W/ CNDMNT & SPL SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,CHICK TENDERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,PREMIUM GRILLED CHICK CLASSIC SNDWCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,PREMIUM CRISPY CHICK CLASSIC SNDWCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,PREMIUM GRILLED CHICK CLUB SNDWCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,PREMIUM CRISPY CHICK CLUB SNDWCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,PREMIUM GRILLED CHICK RANCH BLT SNDWCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,PREMIUM CRISPY CHICK RANCH BLT SNDWCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,BAGEL,W/ EGG,SAUSAGE PATTY,CHS,& CONDMNT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,BAGEL,W/ BRKFST STEAK,EGG,CHS,& CONDMNT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "LIGHT ICE CRM,SOFT SERVE,BLENDED W/ MILK CHOC CANDIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LIGHT ICE CRM,SOFT SERVE,BLENDED W/ COOKIE PIECES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POPEYES,BISCUIT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POPEYES,COLESLAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POPEYES,MILD CHICK STRIPS,ANALYZED 2006",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POPEYES,SPICY CHICK STRIPS,ANALYZED 2006",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,BISCUIT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,COLESLAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,CRISPY CHICK STRIPS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,POPCORN CHICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,FRIED CHICK,ORIGINAL RECIPE,SKN & BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "KFC,FRIED CHICK,ORIGINAL RECIPE,BREAST,MEAT NLY,SKN BRDNG RD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,FRIED CHICK,ORIGINAL RECIPE,DRUMSTK,MEAT ONLY,SKN BRG RD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,FRIED CHICK,ORIGINAL RECIPE,THIGH,MEAT ONLY,SKN BRDNG RD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,FRIED CHICK,ORIGINAL RECIPE,WING,MEAT ONLY,SKN BRDNG RD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,FRIED CHICK,EX CRISPY,SKN & BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "KFC,FRIED CHICK,EX CRISPY,BREAST,MEAT ONLY,SKN & BRDING RMVD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,FRIED CHICK,EX CRISPY,DRUMSTK,MEAT ONLY,SKN & BRDNG RMVD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,FRIED CHICK,EX CRISPY,THIGH,MEAT ONLY,SKN & BRDING RMVD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,FRIED CHICK,EX CRISPY,WING,MEAT ONLY,SKN & BRDING REMOVD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,FRIED CHICK,ORIGINAL RECIPE,BREAST,MEAT & SKN W/ BRDING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,FRIED CHICK,ORIGINAL RECIPE,DRUMSTK,MEAT & SKN W/ BRDING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KFC,FRIED CHICK,ORIGINAL RECIPE,THIGH,MEAT & SKN W/ BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "KFC,FRIED CHICK,ORIGINAL RECIPE,WING,MEAT & SKN W/ BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "KFC,FRIED CHICK,EX CRISPY,BREAST,MEAT & SKN W/ BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "KFC,FRIED CHICK,EX CRISPY,DRUMSTK,MEAT & SKN W/ BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "KFC,FRIED CHICK,EX CRISPY,THIGH,MEAT & SKN W/ BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "KFC,FRIED CHICK,EX CRISPY,WING,MEAT & SKN W/ BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "POPEYES, CHICK,MILD,BREAST,MEAT ONLY,SKN & BRDING REMOVED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POPEYES,FRIED CHICK,MILD,DRUMSTK,MEAT ONLY,SKN & BREADING RE",
    categories: [GRAINS as category],
  },
  {
    name: "POPEYES,FRIED CHICK,MILD,SKN & BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "POPEYES,FRIED CHCK,MILD,THIGH,MEAT ONLY,SKN & BRDING REMOVED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POPEYES,FRIED CHICK,MILD,WING,MEAT ONLY,SKN & BRDING REMOVED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POPEYES,FRIED CHICK,MILD,BREAST,MEAT & SKN W/ BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "POPEYES,FRIED CHICK,MILD,DRUMSTK,MEAT & SKN W/ BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "POPEYES,FRIED CHICK,MILD,THIGH,MEAT & SKN W/ BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "POPEYES,FRIED CHICK,MILD,WING,MEAT & SKN W/ BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "GRILLED CHICK,BACON & TOMO CLB SNDWCH,W/ CHS,LETTUCE,& MAYO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRISPY CHICK,BACON,& TOMATO CLUB SNDWCH,W/ CHS,LETUCE,& MAYO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT PARFAIT,LOWFAT,W/ FRUIT & GRANOLA",
    categories: [FRUITS as category],
  },
  {
    name: "FAST FOODS,FRIED CHICK,BREAST,MEAT ONLY,SKN & BRDING REMOVED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,FRIED CHICK,DRMSTK,MEAT ONLY,SKN & BRDING REMOVED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,FRIED CHICK,THIGH,MEAT ONLY,SKN & BREDING REMOVED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,FRIED CHICK,WING,MEAT ONLY,SKN & BREADING REMOVED",
    categories: [GRAINS as category],
  },
  {
    name: "FAST FOODS,FRIED CHICK,SKN & BREADING FROM ALL PIECES",
    categories: [GRAINS as category],
  },
  {
    name: "FAST FOODS,FRIED CHICK,BREAST,MEAT & SKN & BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "FAST FOODS,FRIED CHICK,DRUMSTK,MEAT & SKN W/ BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "FAST FOODS,FRIED CHICK,THIGH,MEAT & SKN & BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "FAST FOODS,FRIED CHICK,WING,MEAT & SKN & BREADING",
    categories: [GRAINS as category],
  },
  {
    name: "DIGIORNO PIZZA,CHS TOPPING,CHS STUFFED CRUST,FRZ,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DIGIORNO PIZZA,CHS TOPPING,RISING CRUST,FRZ,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DIGIORNO PIZZA,CHS TOPPING,THIN CRISPY CRUST,FRZ,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DIGIORNO PIZZA,PEPPERONI TOPPING,CHS STUFFED CRUST,FRZ,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DIGIORNO PIZZA,PEPPERONI TOPPING,RISING CRUST,FRZ,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DIGIORNO PIZZA,PEPPERONI TOPPING,THIN CRISPY CRUST,FRZ,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DIGIORNO PIZZA,SUPREME TOPPING,RISING CRUST,FRZ,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DIGIORNO PIZZA,SUPREME TOPPING,THIN CRISPY CRUST,FRZ,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'FAST FD,PIZZA CHAIN,14" PIZZA,SAUSAGE TOPPING,THICK CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'FAST FD,PIZZA CHAIN,14" PIZZA,SAUSAGE TOPPING,THIN CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'FAST FD,PIZZA CHAIN,14" PIZZA,SAUSAGE TOPPING,REG CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'FAST FD,PIZZA CHAIN,14" PIZZA,PEPPERONI TOPPING,THIN CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,TACO W/ BF,CHS & LETTUCE,SOFT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,TACO W/ CHICK,LETTUCE & CHS,SOFT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,QUESADILLA,W/ CHICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FDS,GRILLED CHICK FILET SNDWCH,W/ LETTUCE,TOMATO & SPRD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIZZA HUT 14\" PEPPERONI PIZZA,THIN 'N CRISPY CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DOMINO'S 14\" PEPPERONI PIZZA,CRUNCHY THIN CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DOMINO'S 14\" SAUSAGE PIZZA,CRUNCHY THIN CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DOMINO'S 14\" SAUSAGE PIZZA,CLASSIC HAND-TOSSED CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DOMINO'S 14\" SAUSAGE PIZZA,ULTIMATE DEEP DISH CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIZZA HUT 14\" SAUSAGE PIZZA,THIN 'N CRISPY CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'PIZZA HUT 14" SAUSAGE PIZZA,HAND-TOSSED CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'PIZZA HUT 14" SAUSAGE PIZZA,PAN CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI PIZZA,RSTD VEG,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI PIZZA,MUSHROOM TRIO & SPINACH,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI PIZZA,MARGHERITA,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI PIZZA,MEDITERRANEAN,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIZZA,CHS TOPPING,THIN CRUST,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURGER KING,DOUBLE CHEESEBURGER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "WENDY'S,DOUBLE STACK,W/ CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WEND'YS,CRISPY CHICK SNDWCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURGER KING,ONION RINGS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WENDY'S,DAVE'S HOT 'N JUICY 1/4 LB,SINGLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'FAST FD,PIZZA CHAIN,14" PIZZA,CHS TOPPING,STUFFED CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'PIZZA HUT 14" CHS PIZZA,STUFFED CRUST',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI PIZZA,GREEK TZATZIKI,SINGLE SERVE,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI PIZZA,TIKKA MASALA,SINGLE SERVE,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS PIZZA,BAJA BLACK BEAN,SINGLE SERVE,FRZ,UNP",
    categories: [LEGUMES as category],
  },
  {
    name: "KASHI PIZZA,MUSHROOM & SPINACH,SINGLE SERVE,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,CRISPY CHICK IN TORTILLA,W/ LTTC,CHS,& RANCH SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,GRILLED CHICK IN TORTILLA,W/ LTTC,CHS,& RANCH SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAST FOODS,BRKFST BURRITO,W/ EGG,CHS,& SAUSAGE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAST FOODS,BREADSTICK,SOFT,PREP W/ GARLIC & PARMESAN CHS",
    categories: [GRAINS as category],
  },
  {
    name: "FAST FOODS,STRWBY BANANA SMTH MADE W/ ICE & LOW-FAT YOGURT",
    categories: [FRUITS as category],
  },
  {
    name: "MCDONALD'S,SOUTHERN STYLE CHICK BISCUIT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,RANCH SNACK WRAP,CRISPY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MCDONALD'S,RANCH SNACK WRAP,GRILLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIZZA HUT,BREADSTICK,PARMESAN GARLIC",
    categories: [GRAINS as category],
  },
  {
    name: "CHICK-FIL-A,CHICK SNDWCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ARBY'S,RST BF SNDWCH,CLASSIC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCHOOL LUNCH,PIZZA,CHS TOPPING,THIN CRUST,WHL GRAIN,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCHOOL LUNCH,PIZZA,CHS TOPPING,THICK CRUST,WHL GRAIN,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCHOOL LUNCH,PIZZA,PEPPI TOPPING,THIN CRUST,WHL GRN,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCHOOL LUNCH,PIZZA,PEPP TOPPING,THICK CRUST,WHL GRN,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCHOOL LUNCH,PIZZA,SSAGE TOPPING,THIN CRST,WHL GRAIN,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCHOOL LUNCH,PIZZA,SAUSAGE TOP,THICK CRUST,WHL GRN,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCHOOL LUNCH,CHICK PATTY,WHL GRAIN BREADED",
    categories: [GRAINS as category],
  },
  {
    name: "SCHOOL LUNCH,CHICK NUGGETS,WHL GRAIN BREADED",
    categories: [GRAINS as category],
  },
  {
    name: "WORTHINGTON FOODS,MORNINGSTAR FARMS GARDEN VEGE PATTIES,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON FOODS,MORNINGSTAR FARMS DELI FRANKS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS GRILLERS BRGR STYL RECIPE CRMBL,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON FOODS,MORNINGSTAR FARMS BETTER'N BURGERS,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MORNINGSTAR FARMS BRKFST SAUSAGE PATTIES,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WORTHINGTON FOODS,MORNINGSTAR FARMS,SPICY BLACK BEAN BURGER",
    categories: [LEGUMES as category],
  },
  {
    name: "LOMA LINDA BIG FRANKS,CND,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACARONI & CHS,CND ENTREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPAGHETTI W/ MEAT SAU,FRZ ENTREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEEF MACARONI W/ TOMATO SAU,FRZ ENTREE,RED FAT",
    categories: [MEATS as category],
  },
  {
    name: "PASTA W/SLICED FRANKS IN TOMATO SAU,CND ENTREE",
    categories: [GRAINS as category],
  },
  {
    name: "TURKEY POT PIE,FRZ ENTREE",
    categories: [MEATS as category],
  },
  {
    name: "BEEF POT PIE,FRZ ENTREE,PREP",
    categories: [MEATS as category],
  },
  {
    name: "HOT POCKETS,CROISSANT POCKTS CHIK,BROC&CHDR STUFD SNDWCH,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HOT POCKETS HAM 'N CHS STUFFED SNDWCH,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RAVIOLI,CHEESE-FILLED,CND",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "RAVIOLI,MEAT-FILLED,W/ TOMATO SAU OR MEAT SAU,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TORTELLINI,PASTA W/ CHS FILLING,FRESH-REFRIGERATED",
    categories: [GRAINS as category],
  },
  {
    name: "PIZZA,MEAT TOPPING,THICK CRUST,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIZZA,PEPPERONI TOPPING,REG CRUST,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHILI CON CARNE W/BNS,CND ENTREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEEF STEW,CANNED ENTREE",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN POT PIE,FRZ ENTREE,PREP",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CORNED BF HASH,W/ POTATO,CND",
    categories: [MEATS as category],
  },
  {
    name: "LASAGNA,CHS,FRZ,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHILI,NO BNS,CND ENTREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPAGHETTI,W/ MEATBALLS IN TOMATO SAU,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PASTA W/ TOMATO SAU,NO MEAT,CND",
    categories: [GRAINS as category],
  },
  {
    name: "LASAGNA W/ MEAT & SAU,LOW-FAT,FRZ ENTREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LASAGNA W/ MEAT & SAU,FRZ ENTREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURRITO,BF & BEAN,FRZ",
    categories: [LEGUMES as category],
  },
  {
    name: "BURRITO, BEAN AND CHEESE, FROZEN",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MACARONI & CHS,CND,MICROWAVABLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BURRITO,BF & BEAN,MICROWAVED",
    categories: [LEGUMES as category],
  },
  {
    name: "CAMPBELL'S,SPAGHETTIOS,MINI BF RAVIOLI IN MEAT SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S,SPAGHETTIOS,SPAGHETTI IN TOMATO & CHS SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S,SPAGHETTIOS,SPAGHETTIOS ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S,SPAGHETTIOS,SPAGHETTIOS A TO Z'S",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S,SPAGHETTIOS,SPAGHETTIOS IN MEAT SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S,SPAGHETTIOS,SPAGHETTIOS PLUS CA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S,SPAGHETTIOS RAVIOLIOS BF RAVIOLI IN MEAT SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPAGHETTIOS,SPAGHETTIOS W/ MEATBALLS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SPAGHETTIOS,SPAGHETTIOS W/ SLICED FRANKS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S,SPAGHETTIOS,SPAGHETTIOS A TO Z'S W/ MEATBALLS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUPPER BAKES MEAL,CHEESY CHICK W/ PASTA (CHICK NOT INCLUDED)",
    categories: [GRAINS as category],
  },
  {
    name: "SUPPER BAKES MEAL KITS,CREAMY STROGANOFF SAU W/ PASTA",
    categories: [GRAINS as category],
  },
  {
    name: "SUPPER BAKES MEAL KITS,GARLIC CHICK W/ PASTA",
    categories: [GRAINS as category],
  },
  {
    name: "SUPPER BAKES MEAL KITS,HERB CHICK W/ RICE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUPPER BAKES MEAL KITS,LEMON CHICK W/ HERB RICE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUPPER MEAL KITS,SAVORY PORK CHOPS W/ HERB STUFFING",
    categories: [MEATS as category],
  },
  {
    name: "SUPPER BAKES MEAL KITS,SOUTHWESTERN-STYLE CHICK W/RICE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUPPER BAKES MEAL,CHICK W/ STUFFING (CHICK NOT INCLUDED)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWANSON,CHICK A LA KING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWANSON,CHICK & DUMPLINGS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EGG ROLLS,PORK,REFR,HTD",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG ROLLS,CHICK,REFR,HTD",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "EGG ROLLS,VEG,FRZ,PREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "LASAGNA,VEG,FRZ,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TKY,STUFFING,MSHD POTATO W/GRAVY,ASSORTED VEG,FRZ,MICROWAVE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE BOWL W/ CHICK,FRZ ENTREE,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACARONI & CHS DINNER W/ DRY SAU MIX,BOXED,UNCKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MAC & CHS,DRY MIX,PREP W/ 2% MILK & 80% STK MARGARINE DRY MX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HOT POCKETS,MEATBALLS & MOZZARELLA STUFFED SNDWCH,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEAN POCKETS,HAM N CHEDDAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LEAN POCKETS,MEATBALLS & MOZZARELLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S,SPAGHETTIOS ORIGINAL,EASY OPEN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S,SPAGHETTIOS,W/ MEATBALLS -",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHILI W/ BNS,MICROWAVABLE BOWLS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACARONI & CHS,FRZ ENTREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATO SALAD W/ EGG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PULLED PORK IN BARBECUE SAU",
    categories: [MEATS as category],
  },
  {
    name: "CORN DOGS,FRZ,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHICKEN,NUGGETS,DK & WHITE MEAT,PRECKD,FRZ,NOT REHTD",
    categories: [MEATS as category],
  },
  {
    name: "CHICKEN,NUGGETS,WHITE MEAT,PRECKD,FRZ,NOT REHTD",
    categories: [MEATS as category],
  },
  {
    name: "RAVIOLI,CHS W/ TOMATO SAU,FRZ,NOT PREP,INCL REG & LT ENTREES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LASAGNA W/ MEAT SAU,FRZ,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHICKEN TENDERS,BREADED,FRZ,PREP",
    categories: [MEATS as category],
  },
  {
    name: "KASHI BLACK BEAN MANGO,FRZ,UNPREP",
    categories: [LEGUMES as category],
  },
  {
    name: "KASHI,CHICK & CHIPOTLE BBQ SAU W/ MANGO,FRZ ENTREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,CHICK ENCHILADA W/ ANCHO SAU,FRZ ENTREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,STEAM MEAL,CHICK FETTUCCINE,FRZ ENTREE",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "KASHI,CHICK FLORENTINE,FRZ ENTREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,CHICK PASTA POMODORO,FRZ ENTREE",
    categories: [GRAINS as category],
  },
  {
    name: "KASHI,LEMONGRASS COCNT CHICK,FRZ ENTREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI MAYAN HARVEST BAKE,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI PESTO PASTA PRIMAVERA,FRZ,UNPREP",
    categories: [GRAINS as category],
  },
  {
    name: "KASHI,PILAF,7 WHL GRAIN,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,RED CURRY CHICK,FRZ ENTREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,STEAM MEAL,RSTD GARLIC CHICK FARFALLE,FRZ ENTREE",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "KASHI,STEAM MEAL,SESAME CHICK,FRZ ENTREE",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "KASHI,SOUTHWEST STYLE CHICK,FRZ ENTREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI SPICY BLACK BEAN ENCHILADA,FRZ,UNPREP",
    categories: [LEGUMES as category],
  },
  {
    name: "KASHI SPINACH ARTICHOKE PASTA,FRZ,UNPREP",
    categories: [GRAINS as category],
  },
  {
    name: "KASHI,SWT & SOUR CHICK,FRZ ENTREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI THREE CHS PENNE,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,TUSCAN VEGGIE BAKE,FRZ ENTREE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "RICE & VERMICELLI MIX,CHICK FLAVOR,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE & VERMICELLI MIX,CHICK FLAVOR,PREP W/ 80% MARGARINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,SHLDR POT RST OR STK,BNLS,LN & FAT,0" FAT,ALL GRDS,R',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STEAK,LN&FAT,1/8"FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LN,PRTRHS STK,LN & FAT,1/8" FAT,ALL GRDS,CKD,GRLLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STEAK,LN&FAT,1/8"FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,PRTRHS STK,L & F,1/8" F,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,T-BONE STEAK,LN&FAT,1/8"FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LN,T-BNE STEK,LN & FAT,1/8" FAT,ALL GRDS,CKD,GRLLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,T-BONE STEAK,LN&FAT,1/8"FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,T-BONE STEAK,LN & FAT,1/8" FAT,SEL,CKD,GRLLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,KNUCKLE,TIP SIDE,STEAK,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BF,RND,KNUCKLE,TIP SIDE,STEAK,LN & FAT,0" FAT,CH,CKD,GRILLED',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: 'BEEF,RND,KNUCKLE,TIP SIDE,STEAK,LN & FAT 0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BF,RND,KNUCKLE,TIP SIDE,STEAK,LN & FAT,0" FAT,SE,CKD,GRILLED',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: 'BF,CHK,CLOD,SHLDR TENDER,MEDALLION,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BF,CHK,CLOD,SHDR TNDR,MED,LN & FAT,0" FAT,CH,CKD,GRILLED',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BF,CHK,CLOD,SHLDR TENDER,MEDALLION,LN & FAT,0" FAT,SEL,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,CHUCK,SHLDR CLOD,TOP & CNTR ,STK,LN & FAT,0" FAT,CH,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BF,CHK,SHLDR CLOD,TOP & CNTR,STK,LN & FAT,0" FAT,CH,CKD,GRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BF,CHUCK,SHLDR CLOD, TOP & CNTR,STK,LN & FAT,0" FAT,SEL,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BF,CHK, CLOD,TOP & CNTR,STK,LN & FAT,0" FAT,SEL,CKD,GRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BF,CHK,SHLDR CLOD,TOP BLADE,STEAK,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: 'BF,CHK,CLOD,TOP BLADE,STEAK,LN & FAT,0" FAT,CH,CKD,GRILLED',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: 'BF,CHUCK,SHLDR CLOD,TOP BLADE,STEAK,LN & FAT,0" FAT,SEL,RAW',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: 'BF,CHK,CLOD,TOP BLADE,STEAK,LN & FAT,0" FAT,SEL,CKD,GRILLED',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: 'BEEF,RND,KNUCKLE,TIP CNTR,STEAK,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BF,RND,KNUCKLE,TIP CNTR,STK,LN & FAT,0" FAT,CHOIC,CKD,GRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,RND,KNUCKLE,TIP CNTR,STEAK,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BF,RND,KNUCKLE,TIP CNTR,STEAK,LN & FAT,0" FAT,SE,CKD,GRILLED',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: 'BF,RND,OUTSIDE RND,BTTM RND,STEAK,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: 'BF,RND,OUT RND,BTTM RND,STK,LN & FAT,0" FAT,CH,CKD,GRILLED',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,RND,OUTSIDE RND,BTTM RND,STEAK,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,OUT RND,BTTM RND,STK,LN & FAT,0" FAT,SEL,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BF,CHK,CLD,SHLDR TNDR,MEDALLION,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BF,CHK,CLD,SHDR TNDR,MED,LN & FAT,0" FAT,ALL GRDS,CK,GRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,RND,KNUCKLE,TIP SIDE,STEAK,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BF,RND,KNUCK,TIP SIDE,STK,LN & FAT,0" FAT,ALL GRDS,CKD,GRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BF,CHUCK,CLOD,TOP & CNTR,STEAK,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: 'BEEF,CHCK,CLOD,SHLDR TOP&CNTR STKS,LN & FT,0",ALL GRDS,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,CLOD,TOP BLADE,STEAK,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BF,CHUCK,CLOD,TOP BLADE,STK,LN & FAT,0" FAT,ALL,CKD,GRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,RND,KNUCKLE,TIP CNTR,STEAK,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BF,RND,KNUCKLE,TIP CNTR,STK,LN & FAT,0" FAT,ALL,CKD,GRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BF,RND,OUTSIDE RND,BTTM RND,STEAK,LN & FAT,0" FAT,ALL,RAW',
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: 'BF,RND,OUT RND,BTTM RND,STK,LN & FAT,0" FAT,ALL GRDS,CK,GRLD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BF,CHK, CLOD,SHLDR TENDER,MED,LN & FAT,0" FAT,SE,CKD,GRILLED',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,CHUCK,SHRT RIBS,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,SHRT RIBS,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,SHRT RIBS,BNLESS,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE COUNTRY-STYLE RIBS,BNLESS,LN,0" FAT,CHOIC,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE COUNTRY-STYLE RIBS,BNLESS,LN,0" FAT,SEL,CKD,B',
    categories: [MEATS as category],
  },
  {
    name: 'BF,CHK EYE CNTRY-STL RIBS,BNLS,LN,0" FAT,ALL GRDS, CKD, BRSD',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,CHUCK EYE COUNTRY-STYLE RIBS,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE COUNTRY-STYLE RIBS,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK EYE COUNTRY-STYLE RIBS,BNLS,LN,0" FAT,ALL GRDS, RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE STEAK,BNLESS,LN,0" FAT,CHOIC,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE STEAK,BNLESS,LN,0" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE STEAK,BNLESS,LN,0" FAT,ALL GRDS,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE STEAK,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE STEAK,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE STEAK,BNLESS,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR POT RST,BNLESS,LN,0" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR POT RST,BNLESS,LN,0" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR POT RST,BNLESS,LN,0" FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN,0" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN,0" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,MOCK TENDER STK,BNLS,LN,0" FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CHUCK FOR STEW,LN & FAT,ALL GRDS,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CHUCK FOR STEW,LN & FAT,SEL,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CHUCK FOR STEW,LN & FAT,CHOIC,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CHUCK FOR STEW,LN & FAT,ALL GRDS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CHUCK FOR STEW,LN & FAT,SEL,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CHUCK FOR STEW,LN & FAT,CHOIC,RAW",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,UNDER BLADE STEAK,BNLESS,LN,0" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,UNDER BLADE STEAK,BNLESS,LN,0" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,UND BL STEAK,BNLS,LN,0" FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UND BLD, POT RST,BNL,LN & FAT,0" FAT,ALL GR,CKD,BR',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STK,BNLES,LIP-ON,LN,1/8" FAT,ALL GRDS,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE RST,BONE-IN,LIP-ON,LN,1/8" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UND BL POT RST/STK,BNL,LN & FT,0" FT, All GR, raw',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UND BL POT RST OR STK,BNL,LN & FAT,0" FAT, CH, RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UND BL POT RST/STEAK,BNL,LN & FAT,0" FAT, SEL, RAW',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,CHK,UND BL CNTR STK,BNL,DEN CUT,LN & FAT, ALL GR, CKD",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UND BLE CNTR STK,BNL,DEN CT,LN&FT, 0" FT,CH,CKD,GLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UNDBL CNTR STK,BNL,DEN CT,LN&FAT, 0" FT,SEL,CKD,GLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UND BL CNTR STK,BNL,DEN CUT,LN & FT,0"FT,All Gr, RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UNDBLE CNTR STK,BNL,DENR CUT,LN & FAT,0"FAT, CH, RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,UND BLE CNTR STK,BNL,DEN CUT,LN & FT,0"FT, SEL,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR POT RST OR STEAK,BNLESS,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR POT RST OR STEAK,BNLESS,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK EYE RST,BNLS,A BF RST,LN & FAT,0",ALL GRD,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK EYE RST,BNLS,A BF RST,LN & FAT,0",CH,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHCK EYE RST,BNLS,A BF RST,LN & FAT,0",SEL,C,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,UNDER BLADE STEAK,BNLESS,LN & FAT,0" FAT,ALL GRDS',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,UNDER BLADE STEAK,BNLESS,LN & FAT,0" FAT,CHOIC,CK',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,UNDER BLADE STEAK,BNLESS,LN & FAT,0" FAT,SEL,CKD,',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,MOCK TNDR STK,BNL,LN & FAT,0" FAT,ALL GRDS, CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN & FAT,0" FAT,CHOIC,CK',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN & FAT,0" FAT,SEL,CKD,',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,MOCK TEN STK,BNL,LN & FAT,0" FAT,ALL GRDS, CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK,MOCK TENDER STEAK,BNLESS,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,MOCK TENDER STEAK,BNLESS,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,SHRT RIBS,BNLESS,LN & FAT,0" FAT,ALL GRDS,CKD,BRS',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,SHRT RIBS,BNLESS,LN & FAT,0" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,SHRT RIBS,BNLESS,LN & FAT,0" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,SHRT RIBS,BNLESS,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,SHRT RIBS,BNLESS,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,SHRT RIBS,BNLESS,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR POT RST,BNLESS,LN & FAT,0" FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR POT RST,BNLESS,LN & FAT,0" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR POT RST,BNLESS,LN & FAT,0" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK EYE CTRY-STYLE RIBS,BNL,LN & FAT,0" FAT,ALL GR, CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK EYE CNTRY-STYL RIBS,BNL,LN & FAT,0" FAT,CHOICE, CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK EYE CNTRY-STYLE RIBS,BNL,LN & FAT,0" FAT,SEL, CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK EYE CNTRY-STYLE RIBS,BNL,LN & FAT,0" FAT,ALL GR,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK EYE CNTRY-STYLE RIBS,BNL,LN & FAT,0" FAT,CHOICE,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK EYE CNTRY-STYLE RIBS,BNL,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE STEAK,BNLESS,LN & FAT,0" FAT,ALL GRDS,CKD,GR',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHK EYE STEAK,BNLESS,LN & FAT,0" FAT,CHOIC,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE STEAK,BNLESS,LN & FAT,0" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE STEAK,BNLESS,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE STEAK,BNLESS,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK EYE STEAK,BNLESS,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE RST,BNE-IN,LIP-ON,LN,1/8" FT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE RST,BONE-IN,LIP-ON,LN,1/8" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BNLES,LIP-ON,LN,1/8" FAT,CHOIC,CKD,GRILD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BNLESS,LIP-ON,LN,1/8" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STK/RST,BONE-IN,LIP-ON,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK/RST,BONE-IN,LIP-ON,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK/ROAST,BONE-IN,LIP-ON,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STK/RST,BNLESS,LIP-ON,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK/ROAST,BNLESS,LIP-ON,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK/ROAST,BNLESS,LIP-ON,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STK,BNE-IN,LIP-ON,LN,1/8" FAT,ALL GRDS,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BONE-IN,LIP-ON,LN,1/8" FAT,CHOIC,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BONE-IN,LIP-ON,LN,1/8" FAT,SEL,CKD,GRILD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE RST,BNLESS,LIP-ON,LN,1/8" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE RST,BNLESS,LIP-ON,LN,1/8" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE RST,BNLESS,LIP-ON,LN,1/8" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STK,BNLE,INSDE SKRT,LN,0" FAT,ALL GRDS,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEAK,BNLESS,INSIDE SKIRT,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STK,BNLES,INSIDE SKIRT,LN,0" FAT,CHOIC,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEAK,BNLESS,INSIDE SKIRT,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEAK,BNLESS,INSIDE SKIRT,LN,0" FAT,SEL,CKD,GRILD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEAK,BNLESS,INSIDE SKIRT,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STK,BNLES,OTSDE SKIRT,LN,0" FAT,ALL GRDS,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEAK,BNLESS,OUTSIDE SKIRT,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEAK,BNLS,OUTSIDE SKIRT,LN,0" FAT,CHOIC,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEAK,BNLESS,OUTSIDE SKIRT,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEAK,BNLESS,OUTSIDE SKIRT,LN,0" FAT,SEL,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEAK,BNLESS,OUTSIDE SKIRT,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN,0" FAT,ALL GRDS,CKD,GRI',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN,0" FAT,CHOIC,CKD,GRILLE',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN,0" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,BACK RIBS,BONE-IN,LN,0" FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,BACK RIBS,BONE-IN,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,BACK RIBS,BONE-IN,LN,0" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,BACK RIBS,BONE-IN,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,BACK RIBS,BONE-IN,LN,0" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,BACK RIBS,BONE-IN,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STK,BNE-IN,LIP-ON,LN & FT,1/8" FAT,CHOC,CKD,GRL',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STK,BNE-IN,LIP-ON,LN & FT,1/8" FAT,SEL,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STK,BN-IN,LIP-ON,LN & FT,1/8" FT,AL GDS,CKD,GRL',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE RST,BNE-IN,LIP-ON,LN & FAT,1/8" FT,CHC,CKD,RST',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE RST,BNE-IN,LIP-ON,LN & FAT,1/8" FAT,SEL,CKD,RST',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE RST,BNE-IN,LP-ON,LN & FT,1/8" FT,AL GRD,CKD,RST',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STK/RST,BNE-IN,IP-ON,LN & FT,1/8" FT,AL GRDS,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STK/RST,BNE-IN,LIP-ON,LN & FAT,1/8" FAT,CHC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STK/RST,BONE-IN,LIP-ON,LN & FAT,1/8" FAT,SEL,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BNLS,LIP-ON,LN & FAT,1/8" FAT,CHC,CKD,GRD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STK,BNLS,LIP-ON,LN & FAT,1/8" FAT,SEL,CKD,GILD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STK,BNLS,LIP-ON,LN & FT,1/8" FT,AL GRD,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE RST,BNLS,LP-ON,LN & FT,1/8" FT,ALL GRD,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE RST,BNLES,LIP-ON,LN & FAT,1/8" FAT,CHC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE RST,BNLES,LIP-ON,LN & FAT,1/8" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STK/RST,BNLS,LIP-ON,LN & FAT,1/8" FAT,AL GRD,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK/ROST,BNLS,LIP-ON,LN & FAT,1/8" FAT,CHC,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK/ROST,BNLS,LIP-ON,LN & FAT,1/8" FAT,SEL,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLTE STK,BNLS,INSD SKRT,LN & FAT,0" FAT,ALL GRD,CKD,GRL',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STK,BNLSS,INSDE SKRT,LN & FAT,0" FAT,CHC,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STK,BNLES,INSDE SKRT,LN & FAT,0" FAT,SEL,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEK,BNLS,INSDE SKRT,LN & FAT,0" FAT,ALL GRDS,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEAK,BNLESS,INSIDE SKIRT,LN & FAT,0" FAT,CHOC,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEAK,BNLESS,INSIDE SKIRT,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,UNSPEC FAT CONTENT,CKD",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLTE STK,BNLS,OUTSD SKRT,LN & FAT,0" FT,AL GRD,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STK,BNLS,OUTSD SKRT,LN & FAT,0" FT,CHC,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STK,BNLS,OTSDE SKRT,LN & FAT,0" FAT,SEL,CKD,GRILD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEK,BNLS,OUTSDE SKRT,LN & FAT,0" FAT,ALL GRDS,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEAK,BNLS,OUTSIDE SKRT,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE STEAK,BNLESS,OUTSIDE SKIRT,LN & FAT,0" FAT,SEL,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STK,BNLS,LIP OF,LN & FAT,0" FT,AL GRDS,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BNLS,LIP OFF,LN & FAT,0" FAT,CHC,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEK,BNLES,LIP OFF,LN & FAT,0" FAT,SEL,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN & FAT,0" FAT,ALL GRD,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB EYE STEAK,BNLESS,LIP OFF,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,BACK RIBS,BONE-IN,LN & FAT,0" FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,BACK RIBS,BONE-IN,LN & FAT,0" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,BACK RIBS,BONE-IN,LN & FAT,0" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,BACK RIBS,BONE-IN,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,BACK RIBS,BONE-IN,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,BACK RIBS,BONE-IN,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLIN PETITE RST,BNLS,LN,0" FAT,CHOC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLOIN PETITE RST/FILET,BNLS,LN,0" FAT,CHC,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLN CAP STK,BNLS,LN,1/8" FAT,AL GRDS,CKD,GLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLON CAP STK,BNLS,LN,1/8" FAT,CHOIC,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLOIN CAP STEK,BNLS,LN,1/8" FAT,SEL,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLOIN CAP STEK,BNLS,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLOIN CAP STEAK,BNLESS,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLOIN CAP STEAK,BNLESS,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN FILET,BNLESS,LN,1/8" FAT,ALL GRDS,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN FILET,BNLESS,LN,1/8" FAT,CHOIC,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN FILET,BNLESS,LN,1/8" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN PETITE RST,BNLSS,LN,1/8" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN PETITE RST,BNLESS,LN,1/8" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN PETITE RST,BNLESS,LN,1/8" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN PETITE RST/FILET,BNLS,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN PETITE ROAST/FILET,BNLESS,LN,1/8" FAT,CHOC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN PETITE ROAST/FILET,BNLESS,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLOIN FILET,BNLS,LN,0" FAT,ALL GRDS,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLOIN FILET,BNLESS,LN,0" FAT,CHOIC,CKD,GRILD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLOIN FILET,BNLESS,LN,0" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLON PTIT RST,BLS,LN,0" FAT,AL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLOIN PETITE RST,BNLS,LN,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SRLN PETIT RST/FILT,BNLS,LN,0" FAT,AL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLON PETITE RST/FILET,BNLS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE PETITE ROAST/FILET,BNLESS,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE PETITE ROAST/FILET,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE PETITE ROAST/FILET,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE CAP STEAK,BNLESS,LN,0" FAT,ALL GRDS,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE CAP STEAK,BNLESS,LN,0" FAT,CHOIC,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE CAP STEAK,BNLESS,LN,0" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE CAP STEAK,BNLESS,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE CAP STEAK,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE CAP STEAK,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE FILET,BNLESS,LN,0" FAT,ALL GRDS,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE FILET,BNLESS,LN,0" FAT,CHOIC,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE FILET,BNLESS,LN,0" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE PETITE RST,BNLESS,LN,0" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE PETITE RST,BNLESS,LN,0" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIBEYE PETITE RST,BNLESS,LN,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SRL CP STK,BNLS,LN & FT,1/8" FT,ALGDS,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SRLN CAP STK,BLS,LN & FAT,1/8" FAT,CHC,CKD,GLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SRLN CAP STK,BLS,LN & FAT,1/8" FAT,SEL,CKD,GLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLN CAP STK,BNLS,LN & FAT,1/8" FAT,AL GDS,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLOIN CAP STK,BNLS,LN & FAT,1/8" FAT,CHC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP SIRLOIN CAP STK,BNLS,LN & FAT,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN FILET,BNLS,LN & FAT,1/8" FAT,ALL GRDS,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN FILET,BNLESS,LN & FAT,1/8" FAT,CHOIC,CKD,GRILD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN FILET,BNLESS,LN & FAT,1/8" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN PET RST,BNLS,LN & FAT,1/8" FAT,AL GDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN PETI RST,BNLS,LN & FAT,1/8" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN PETITE RST,BNLS,LN & FAT,1/8" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN PETIT RST/FILT,BNS,LN & FAT,1/8" FAT,AL GRD,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN PETITE RST/FILET,BNLS,LN & FAT,1/8" FAT,CHC,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP LOIN PETITE RST/FILET,BNLS,LN & FAT,1/8" FAT,SEL,RW',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUSTRALIAN,IMP,GRASS-FED,GROUND,85% LN / 15% FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,GRSS-FED,LOIN,TENDERLN STK/RST,BNLESS,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,WGU,TENLN STK/RST,BNLESS,LN,MRB SCR 4/5,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUSTRALIAN,IMP,GRASS-FED,EXTERNAL FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUSTRALIAN,IMP,GRASS-FED,SEAM FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,WAGYU,EXTERNAL FAT,AUST. MARBLE SCORE 4/5,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUST,IMP,WAGYU,SEAM FAT,AUST. MARBLE SCORE 4/5,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUST,IMP,WAGYU,EXTERNAL FAT,AUST. MARBLE SCORE 9,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUSTRALIAN,IMP,WAGYU,SEAM FAT,AUST. MARBLE SCORE 9,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,GRSS-FED,TNDERLN STK/RST,BNLESS,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,GRSS-FED,TOP LOIN STK/RST,BNLESS,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AU,IMP,WGU,TDLN STK/RST,BNLES,LN & FAT, MRB SCR 4/5,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,GRSS-FED, TOP LOIN STK/RST,BNLESS,LN FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,GRSS-FD,TOP SIRLN CP-OFF STK/RST,BNLESS,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,GRSS-FD,RIBEYE STK/RST LIP-ON,BNLESS,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,GRSS-FD,BTTM RND STK/RST,BNLESS,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,GRSS-FD,RD,TP RND CAP-OFF STK/RST,BNLESS,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,WGU,LOIN,TENLN STK/RST,BNLESS,LN, MRB SCR 9,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,WGU,TOP LN STK/RST,BNLESS,LN,MRB SCR 4/5,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,WGU,TP LN STK/RST,BNLESS,LN,MARBLE SCORE 9,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,WGU,SMLENDRIB STK/RST,BNLESS, MRB SCR 4/5,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,WGU,SML END RIB STK/RST,BNLESS,MRB SCR 9,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,GRSS-FD,TP SIRLN CP-OFFSTK/RST,BNLES,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,GRSS-FD,RBEYE STK/RST LIP-ON,BNLESS,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,GRSS-FED,BTTM RND STK/RST,BNLESS,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,GRSS-FD,TP RNDCAP-OFF STK/RST,BNLESS,LN&FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,WGU,TP LN STK/RST,BNLES,LN & FAT,MRB SCR4/5,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,WGU,TP LN STK/RST,LN & FAT,MARBLE SCORE9,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,WGU,SMLEDRIB STK/RST,BNLES,LN&FAT,MRBSCR4/5,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AUS,IMP,WGU,SMLEDRIB STK/RST,BNLESS,LN&FAT,MRB SCR9,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,AU,IMP,WGU,TNLN, STK/RST,BNLESS,LN & FAT, MRB SCR 9,RAW",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND STEAK,BNLESS,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND STEAK,BNLESS,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND STEAK,BNLESS,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND RST,BNLESS,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND RST,BNLESS,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND RST,BNLESS,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND RST,BNLESS,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND RST,BNLESS,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND RST,BNLESS,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND STEAK,BNLESS,LN & FT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND STEAK,BNLESS LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND STEAK,BNLESS,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN RST,BNLESS,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN RST,BNLESS,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN RST,BNLESS,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP LOIN STK,BNLS,LIP OFF,LN & FAT,0" FT,ALLGRD,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP LOIN STK,BNLS,LIP OFF,LN & FAT,0" FT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP LOIN STEAK,BNLS,LIP OFF,LN & FAT,0" FAT,SEL,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN STEAK,BNLESS,L & F,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN STEAK,BNLESS,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN STEAK,BNLESS,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TNDRLN RST,BNLESS,L & F,0" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN RST,BNLESS,L & F,0" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN RST,BNLESS,LN & FAT,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND RST,BNLS,LN&FAT,0" FAT,ALLGRD,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND RST,BNLESS,LN & FAT,0" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND RST,BNLESS,LN & FAT,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND STK,BNLESS,L & F,0" F,A GRDS,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RD STEAK,BNLESS,L & F,0" FT,CHOIC,CK,GRLLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND STEAK,BNLS,LN & FAT,0" FAT,SEL,CKD,GRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND STEAK,BNLESS,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND STEAK,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND STEAK,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND RST,BNLESS,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND RST,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND RST,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND RST,BNLESS,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND RST,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND RST,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND STEAK,BNLESS,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND STEAK,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND STEAK,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN RST,BNLESS,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN RST,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN RST,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP LOIN STK,BNLS,LIP OFF,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP LOIN STEAK,BNLESS,LIP OFF,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP LOIN STEAK,BNLESS,LIP OFF,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN STEAK,BNLESS,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN STEAK,BNLESS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN STEAK,BNLESS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN RST,BNLESS,LN,0" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN RST,BNLESS,LN,0" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TENDERLOIN RST,LN,BNLESS,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND RST,BNLESS,LN,0" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND RST,BNLESS,LN,0" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND RST,BNLESS,LN,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND STEAK,BNLESS,LN,0" FT,A GRDS,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND STEAK,BNLESS,LN,0" FAT,CHOIC,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND STEAK,BNLESS,LN,0" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP LOIN STEAK,BNLESS,LIP-ON,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TOP LOIN STEAK,BNLESS,LIP-ON,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'Beef, ln, top ln stk, bneless lip-on, 1/8" fat all grdes raw',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,LN,TP LN STEAK,BNLESS,LIP-ON,LN & FAT,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LN,TP LN STK,BNLESS,LIPON,LN & FAT,1/8" FAT,ALL GRDS,RW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LN,TP LN STK,BNLESS,LIPON,L & F,1/8" FAT,CHOIC,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LN,TP LN STK,BNLESS,LIPON,L & F,1/8" FAT,SeL, CK GRLED',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,LN,TP LN STK,BNLESS,LIPON,L & F,1/8 FAT,A GRDS, GRILLED",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LON,TP LON STK,BNLSS,LIP-ON,LN,1/8" FAT,CHC,CKD,GRILLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LN,TOP LN STK,BNLESS,LIP-ON,LN,1/8" FAT,SEL,CKD,GRILLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LN,TOP LN STK,BNLSS,LIP-ON,LN,1/8" FAT,ALL GRDS,,GRLLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,LOIN,TP LN STK,BNLESS,LIP-ON,L&F,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,BOLAR BLADE,LN,CKD,FAST RSTD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,BOLAR BLADE,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,BRISKET NAVEL END,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,BRISKET NAVEL END,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,BRISKET POINT END,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,BRISKET POINT END,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,CHUCK EYE ROLL,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,CHUCK EYE ROLL,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,CUBE ROLL,LN,CKD,FAST RSTD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,CUBE ROLL,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,EYE RND,LN,CKD,SLOW RSTD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,EYE RND,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,FLANK,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,FLANK,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,FLAT,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,FLAT,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,VAR MEATS & BY-PRODUCTS,HEART,CKD,BLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,VAR MEATS & BY-PRODUCTS,HEART,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,HIND SHIN,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,HIND SHIN,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,INSIDE,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,INTERMUSCULAR FAT,CKD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,INTERMUSCULAR FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,VAR MEATS & BY-PRODUCTS,KIDNEY,CKD,BLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,KNUCKLE,CKD,FAST FRIED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,VAR MEATS & BY-PRODUCTS,KIDNEY,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,VAR MEATS & BY-PRODUCTS LIVER,CKD,BLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,VAR MEATS & BY-PRODUCTS,LIVER,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,MANUFACTURING BF,CKD,BLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,MANUFACTURING BF,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,OYSTER BLADE,LN,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,OYSTER BLADE,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,RIBS PREP,CKD,FAST RSTD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,RIBS PREP,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,RUMP CENTRE,LN,CKD,FAST FRIED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,STRIPLOIN,LN,CKD,FAST FRIED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,STRIPLOIN,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,SUBCUTANEOUS FAT,CKD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,SUBCUTANEOUS FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,SWEETBREAD,CKD,BLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,SWEETBREAD,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,TENDERLOIN,LN,CKD,FAST FRIED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,OYSTER BLADE,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,TENDERLOIN,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,VAR MEATS & BY-PRODUCTS,TONGUE,CKD,BLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,VAR MEATS & BY-PRODUCTS,TONGUE,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,VAR MEATS & BY-PRODUCTS,TRIPE CKD,BLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,VAR MEATS & BY-PRODUCTS,TRIPE UNCKD,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,BOLAR BLADE,LN & FAT,CKD,FAST RSTD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,BOLAR BLADE,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,BRISKET NAVEL END,LN & FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,BRISKET NAVEL END,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,BRISKET POINT END,LN & FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,BRISKET POINT END,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,CHUCK EYE ROLL,LN & FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,CHUCK EYE ROLL,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,CUBE ROLL,LN & FAT,CKD,FAST RSTD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,CUBE ROLL,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,EYE RND,LN & FAT,CKD,SLOW RSTD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,EYE RND,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,FLANK,LN & FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,FLANK,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,FLAT,LN & FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,FLAT,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,HIND SHIN,LN & FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,HIND SHIN,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,OYSTER BLADE,LN & FAT,CKD,BRSD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,RUMP CENTRE,LN & FAT,CKD,FAST FRIED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,RUMP CENTRE,LN,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,RUMP CENTRE,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,STRIPLOIN,LN & FAT,CKD,FAST FRIED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,STRIPLOIN,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,TENDERLOIN,LN & FAT,CKD,FAST FRIED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,NZ,IMP,TENDERLOIN,LN & FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,93% LN MEAT / 7% FAT",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,93% LN MEAT / 7% FAT,PATTY,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,93% LN MEAT /7% FAT,PATTY,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "BEEF,GROUND,93% LN MEAT / 7% FAT,LOAF,CKD,BKD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,93% LN MEAT / 7% FAT,CRUMBLES,CKD,PAN-BROWNED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,97% LN MEAT / 3% FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,97% LN MEAT / 3% FAT,PATTY,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,97% LN MEAT /3% FAT,PATTY,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "BEEF,GROUND,97% LN MEAT / 3% FAT,LOAF,CKD,BKD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,97% LN MEAT / 3% FAT,CRUMBLES,CKD,PAN-BROWNED",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN & FAT,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN,1/8" FAT,ALL GRDS,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF COMP,LN,1/8" FAT,CHOIC,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN & FAT,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN & FAT,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN,1/8" FAT,SEL,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,COMP OF RTL CUTS,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: "USDA COMMODITY,BF PATTIES W/VPP,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA COMMODITY,BF,GROUND BULK/COARSE GROUND,FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA COMMODITY,BF,PATTIES (100%),FRZ,CKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA COMMODITY,BF PATTIES W/VPP,FRZ,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA COMMODITY,BF,PATTIES (100%),FRZ,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "USDA COMMODITY,BF,GROUND,BULK/COARSE GROUND,FRZ,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: 'BEEF,CHUCK,MOCK TENDER STK,LN,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,TOP BLADE,LN ONLY,TO 0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,CLOD RST,LN,1/4" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,CLOD RST,LN,0" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,CLOD RST,LN ONLY,TO 1/4" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR STEAK,BNLESS,LN,0" FAT,ALL GRDS,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,CLOD STEAK,LN ONLY,TO 1/4" FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHCK,MCK TENDER STK,LN & FAT,0" FAT,USDA CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,MOCK TENDER STK,LN & FAT,0" FAT,USDA SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,TOP BLADE,LN & FAT,0" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,TOP BLADE,LN & FAT,0" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,CLOD RST,LN & FAT,0" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,CLOD RST,LN & FAT,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR STEAK,BNLESS,LN & FAT,0" FAT,CHOIC,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR STEAK,BNLESS,LN & FAT,0" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE,SKIRT STEAK,LN & FAT,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,PLATE,OUTSIDE SKIRT,LN & FAT,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SIRLOIN,TRI-TIP STK,LN & FAT,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,MOCK TENDER STK,LN & FAT,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,TOP BLADE,LN & FAT,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,CLOD RST,LN & FAT,0" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHLDR STEAK,BNLESS,LN & FAT,0" FAT,ALL GRDS,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,95% LN MEAT / 5% FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,95% LN MEAT / 5% FAT,PATTY,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,95% LN MEAT / 5% FAT,PATTY,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "BEEF,GROUND,95% LN MEAT / 5% FAT,CRUMBLES,CKD,PAN-BROWNED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,95% LN MEAT / 5% FAT,LOAF,CKD,BKD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,90% LN MEAT / 10% FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,90% LN MEAT / 10% FAT,PATTY,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,90% LN MEAT / 10% FAT,PATTY,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "BEEF,GROUND,90% LN MEAT / 10% FAT,CRUMBLES,CKD,PAN-BROWNED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,90% LN MEAT / 10% FAT,LOAF,CKD,BKD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,85% LN MEAT / 15% FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,85% LN MEAT / 15% FAT,PATTY,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,85% LN MEAT / 15% FAT,PATTY,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "BEEF,GROUND,85% LN MEAT / 15% FAT,CRUMBLES,CKD,PAN-BROWNED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,85% LN MEAT / 15% FAT,LOAF,CKD,BKD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,80% LN MEAT / 20% FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,80% LN MEAT / 20% FAT,PATTY,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,80% LN MEAT / 20% FAT,PATTY,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "BEEF,GROUND,80% LN MEAT / 20% FAT,CRUMBLES,CKD,PAN-BROWNED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,80% LN MEAT / 20% FAT,LOAF,CKD,BKD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,75% LN MEAT / 25% FAT,RAW",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,75% LN MEAT / 25% FAT,PATTY,CKD,BRLD",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,75% LN MEAT / 25% FAT,PATTY,CKD,PAN-BROILED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "BEEF,GROUND,75% LN MEAT / 25% FAT,CRUMBLES,CKD,PAN-BROWNED",
    categories: [MEATS as category],
  },
  {
    name: "BEEF,GROUND,75% LN MEAT / 25% FAT,LOAF,CKD,BKD",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,STEAK,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,TOP LOIN,STEAK,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN,1/8" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,STEAK,LN,1/8" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN,1/8" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,TOP LOIN,STEAK,LN,1/8" FAT,SEL,CKD,GRILLED',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND RST,LN,1/8" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND,RST,LN,1/8" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,STEAK,LN,1/8" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN,1/8" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,RST,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN,1/8" FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND,RST,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND,RST,LN,1/8" FAT,ALL GRDS,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,STEAK,LN,1/8" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,STEAK,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN,1/8" FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,RST,LN,1/8" FAT,ALL GRDS,CKD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN,1/8" FAT,ALL GRDS,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,TOP LOIN,STEAK,LN,1/8" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,TOP LOIN STEAK,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,STEAK,LN,1/8" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,STEAK,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN,1/8" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN,1/8" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN,1/8" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN,1/8" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND,RST,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,STEAK,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,RST,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,RST,LN,1/8" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND,RST,LN,1/8" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,STEAK,LN,1/8" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,STEAK,LN,1/8" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,STEAK,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN,1/8"FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,TOP LOIN,STEAK,LN,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TENDERLOIN,STEAK,LN,1/8" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,TOP SIRLOIN,STEAK,LN,1/8" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,SHRT LOIN,TOP LOIN,STEAK,LN,1/8" FAT,CHOIC,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,CHUCK,ARM POT RST,LN,1/8" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN,1/8" FAT,SEL,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,EYE OF RND,RST,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TOP RND,STEAK,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,BTTM RND,RST,LN,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RIB,SML END (RIBS 10-12),LN,1/8" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: "BEEF,VAR MEATS & BY-PRODUCTS,TRIPE,CKD,SIMMRD",
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BTTM SIRLOIN,TRI-TIP RST,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BTTM SIRLOIN,TRI-TIP RST,LN,0" FAT,CHOIC,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BTTM SIRLOIN,TRI-TIP RST,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BTTM SIRLOIN,TRI-TIP RST,LN,0" FAT,SEL,CKD,RSTD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BTTM SIRLOIN,TRI-TIP RST,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN,0" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,RND,TIP RND,RST,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,FLANK,STEAK,LN,0" FAT,ALL GRDS,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,FLANK,STEAK,LN,0" FAT,SEL,CKD,BRLD',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,FLANK,STEAK,LN,0" FAT,ALL GRDS,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,FLANK,STEAK,LN,0" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN & FAT,1/8" FAT,CHOIC,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN & FAT,1/8" FAT,SEL,RAW',
    categories: [MEATS as category],
  },
  {
    name: 'BEEF,BRISKET,FLAT HALF,LN & FAT,1/8" FAT,CHOIC,CKD,BRSD',
    categories: [MEATS as category],
  },
  {
    name: "POPCORN,OIL-POPPED,LOFAT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "POPCORN,OIL-POPPED,LOFAT",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SNACKS,CANDY ROLLS,YOGURT-COVERED,FRUIT FLAV W/ HI VIT C",
    categories: [FRUITS as category],
  },
  {
    name: "FORMULATE BAR,MAR SNACKFOO US,SNICKE MARATH CHE CHOC PNUT BA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "FORM BAR,MARS SNKF US,SNICKERS MARATHON MULTIGRNCRUNCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FORMULAT BAR,MARSNACKFOO US,SNICKE MARATHO DOUBL CHOC NUT BA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SNACKS,M&M MARS,KUDOS WHL GRAIN BARS,PNUT BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FORMULAT BAR,MAR SNACFOO US,SNICKER MARATHO HONE NUT OAT BAR",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SNACKS,M&M MARS,KUDOS WHL GRAIN BAR,M&M'S MILK CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FORM BAR,MARS SNACKFOOD US,COCOAVIA,CHOC ALMOND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,SWT POTATO CHIPS,UNSALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,FRITOLAY,SUNCHIPS,MULTIGRAIN SNACK,ORIGINAL FLAVOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,POPCORN,MICROWAVE,REG (BUTTER) FLAVOR, W/PARHYD OIL",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FORMBAR,MARSSNACK,SNICKERS MARATHONPROTPERFBAR,CARMELNUTRUSH",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "FORMUL BAR,MA SNACKFO US,SNICKE MARATH ENER BAR,ALL FLAVO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FORMULATED BAR,POWER BAR,CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FORM BAR,MARS SNACKFOOD US,COCOAVIA,CHOC BLUEBERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FORMULATED BAR,SLIM-FAST OPTIMA MEAL BAR,MILK CHOC PNUT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "FORMULATED BAR,LUNA BAR,NUTZ OVER CHOC",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "SNACKS,FRITOLAY,SUNCHIPS,MULTIGRAIN,FRENCH ONION FLAVOR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,FRITOLAY,SUNCHIPS,MULTIGRAIN,HARVEST CHEDDAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PRETZELS,SOFT,UNSALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,SOY CHIPS OR CRISPS,SALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Popcor, microwav, regula (butter) flavo, mad with pal oil",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,PLANTAIN CHIPS,SALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Tortilla chips, yellow, plain, salted",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,VEG CHIPS,HAIN CELESTIAL GROUP,TERRA CHIPS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FORM BAR,ZONE PERFECT CLASSIC CRUNCH BAR,MXD FLAVORS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,GRANOLA BAR,KASHI GOLEAN,CHEWY,MXD FLAVORS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,GRANOLA BAR,KASHI TLC BAR,CHEWY,MXD FLAVORS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,GRANOLA BAR,KASHI GOLEAN,CRUNCHY,MXD FLAVORS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,GRANOLA BAR,CHEWY,RED SUGAR,ALL FLAVORS",
    categories: [SWEETS as category],
  },
  {
    name: "SNACKS,GRANOLA BITES,MXD FLAVORS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,PITA CHIPS,SALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,GRANOLA BARS,SOFT,ALMOND,CONFECTIONERS COATING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,GRANOLA BARS,QUAKER OATMEAL TO GO,ALL FLAVORS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,VEG CHIPS,MADE FROM GARDEN VEG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,GRANOLA BAR,KASHI TLC BAR,CRUNCHY,MXD FLAVORS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,CANDY BITS,YOGURT COVERED W/ VIT C",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Formulated bar, high fiber, chewy, oats and chocolate",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,BAGEL CHIPS,PLN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,NUTRI-GRAIN FRUIT & NUT BAR",
    categories: [FRUITS as category],
  },
  {
    name: "SNACKS,YUCCA (CASSAVA) CHIPS,SALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Snacks, CLIF BAR, mixed flavors",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,GRANOLA BAR,QUAKER,CHEWY,90 CAL BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Snac, grano bar, GENER MILLS NATURE VALL, SWE&SAL NUT, peanu",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "Snack,gran bar,GENERAL MILLS, NATURE VALLEY, w yogu coati",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Snac, grano bar, GENER MILLS, NATUR VALLE, CHEWY TRAIL MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Snacks, granola bar, QUAKER, DIPPS, all flavors",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Snacks, brown rice chips",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACK,PRETZEL,HARD CHOC COATD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Snack, Mixed Berry Bar",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Snacks, potato chips, fr dried potatoes, multigrain",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,POTATO CHIPS,LIGHTLY SALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,PRETZELS,GLUTEN- FREE MADE W/ CORNSTARCH & POTATO FLR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,PEAS,RSTD,WASABI-FLAVORED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FORMULATED BAR,SOUTH BEACH PROT BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACK,BALANCE,ORIGINAL BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,SHRIMP CRACKER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,EGG DROP,CHINESE RESTAURANT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SOUP,HOT & SOUR,CHINESE RESTAURANT",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,WONTON,CHINESE RESTAURANT",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S CHNKY,HEALTHY REQUST MICROWAVBL ,CHICK NODLE SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "HLTHY RQST MCRWVBL BWL,GRLL CHICK SSAGE GMB",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S CHUNKY SOUPS,HEALTHY REQUES",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,CHICK BARLEY W/",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,ITALIAN STYLE W",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,PHINEAS & FERB SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE MICROWAVEABLE BOWLS,HEALTHY REQUEST ITA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE MICROWAVEABLE BOWLS,HEALTHY REQUEST MEX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE HARVEST TOMATO W/ BASIL SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S HOMESTYLE HR CHICK W/ WHL GRAIN PASTA SOUP",
    categories: [GRAINS as category],
  },
  {
    name: "CAMPBELL'S SOUP ON THE GO,HR CHICK W/ MINI NOODLES SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CAMPBELL'S SOUP ON THE GO,HEALTHY REQUEST CLASSIC TOMAT SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "PACE,PICO DE GALLO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,SALSA VERDE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,TEQUILA LIME SALSA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,TRIPLE PEPPER SALSA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S RED & WHITE,LENTIL SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "PREGO PASTA,HEART SMART- TRADITIONAL S",
    categories: [GRAINS as category],
  },
  {
    name: "CAMPBELL'S,98% FAT FREE CRM OF MUSHROOM SOUP,COND",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,RAMEN NOODLE,DRY,ANY FLAVOR,RED FAT,RED NA",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CLAM CHOWDER,NEW ENGLAND,CND,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CLAM CHOWDER,NEW ENGLAND,RED NA,CND,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,CHICK NOODLE,RED NA,CND,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SOUP,BF & VEG,RED NA,CND,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SAUCE,DUCK,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,SALSA,VERDE,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,STEAK,TOMATO BSD",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "SAUCE,TARTAR,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,SWT & SOUR,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,COCKTAIL,RTS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DIP,SALSA CON QUESO,CHS & SALSA- MED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DIP,OLD EL PASO,CHS 'N SALSA,MED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DIP,TOSTITOS,SALSA CON QUESO,MED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,BARBECUE,SWT BABY RAY'S,ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,BARBECUE,BULL'S-EYE,ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,BARBECUE,KC MASTERPIECE,ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,BARBECUE,OPEN PIT,ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,PNUT,MADE FROM PNUT BUTTER,H2O,SOY SAU",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SOUP,CHUNKY VEG,RED NA,CND,RTS",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "GRAVY,HEINZ HOME STYLE,CLASSIC CHICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,BF BARLEY,READY TO SERVE",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "SAUCE,ENCHILADA,RED,MILD,READY TO SERVE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WASABI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DIP,BEAN,ORIGINAL FLAVOR",
    categories: [LEGUMES as category],
  },
  {
    name: "SAUCE,HORSERADISH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SAUCE,OLD EL PASO,ENCHILADA,RED,MILD,READY TO SERVE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DIP,FRITO'S,BEAN,ORIGINAL FLAVOR",
    categories: [LEGUMES as category],
  },
  {
    name: "KELLOGG'S,EGGO,MINI MUFFIN TOPS,CHOC CHIP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,NUTRI-GRAIN FRZ FRUIT PIZZA,MXD BERRY GRANOLA",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,NUTRI-GRAIN FRZ FRUIT PIZZA,STRAWBERRY GRANOL",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,PANCAKES,BLUEBERRY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,PANCAKES,CHOC CHIP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,CINNABON,PANCAKES,CARAMEL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,CINNABON,PANCAKES,ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,EGGO,WAFFLERS,BROWN SUGAR CINN ROLL",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,WAFFLERS,STRAWBERRY STRUDEL",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,WAFFLES,BLUEBERRY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,WAFFLES,BTTRMLK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,WAFFLES,CINN TOAST",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,FIBERPLUS WAFFLES,BTTRMLK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,FIBERPLUS WAFFLES,CHOC CHIP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,WAFFLES,FRENCH TOAST",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,WAFFLES,HOMESTYLE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO PROT,WAFFLES,HOMESTYLE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KASHI,TLC,PITA CRISPS,SEA SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,EGGO,NUTRI-GRAIN,WAFFLES,BLUEBERRY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,NUTRI-GRAIN,WAFFLES,HONEY OAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KASHI,TLC,PITA CRISPS,ZESTY SALSA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,EGGO,NUTRI-GRAIN,WAFFLES,ORIGINAL",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO SEASONS,WAFFLES,PUMPKIN SPICE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,SIMPLY EGGO,ORIGINAL",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,WAFFLES,STRAWBERRY",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,THICK & FLUFFY,WAFFLES,BROWN SUGAR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,THICK & FLUFFY,WAFFLES,ORIGINAL",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAMOUS AMOS,CHOC CHIP COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAMOUS AMOS,CHOC CHIP PECAN COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GIRL SCOUTS,CARAMEL DULCE DE LECHE COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GIRL SCOUTS,CHALET COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GIRL SCOUTS,DO-SI-DOS COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GIRL SCOUTS,SAMOAS COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GIRL SCOUTS,TAGALONGS COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GIRL SCOUTS,THANK U BERRY MUNCH COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GIRL SCOUTS,THIN MINTS COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GIRL SCOUTS,TREFOILS COOKIES",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "JACKSON'S,OLD FASHIONED LEMON JUMBLE COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "JACKSON'S,OLD FASHIONED VANILLA WAFERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,TLC,HAPPY TRAIL MIX COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,TLC,OATMEAL DK CHOC COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI,TLC,OATMEAL RAISIN FLAX COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,ANIMALS,COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,ANIMALS,FRSTD COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,ANIMALS,ICED COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,ANIMALS,CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,BAKER'S TREASURES,CHOC CHIP COOKIE,SOFT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,BAKER'S TREASURES,OATMEAL RAISIN COOKIE,SOFT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CHS & CHEDDAR SNDWCH CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CLUB & CHEDDAR SNDWCH CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CHS ON WHEAT SNDWCH CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CHIPS DELUXE,CHOC LOVERS COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CHIPS DELUXE,CHOC MALT CHUNK COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CHIPS DELUXE,COCNT COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CHIPS DELUXE,DK CHOC CHUNK COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CHIPS DELUXE,MINI CHOC CHIP COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CHIPS DELUXE,OATMEAL CHOC CHIP COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CHIPS DELUXE,ORIGINAL CHOC CHIP COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CHIPS DELUXE,PNUT BUTTER CUPS COOKIES",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KEEBLER,CHIPS DELUXE,RAINBOW CHOC CHIP COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CHIPS DELUXE,RAINBOW CHOC CHIP COOKIES,BITE SIZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CHIPS DELUXE,SOFT 'N CHEWY CHOC CHIP COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CLUB,DASH OF SALT CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CLUB,MINIS ORIGINAL CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CLUB,MINIS MULTIGRAIN CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CLUB,MULTIGRAIN CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CLUB,ORIGINAL CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CLUB,RED FAT CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CLUB CRACKERS,SNACK STKS,HONEY WHEAT",
    categories: [SWEETS as category],
  },
  {
    name: "KEEBLER,CLUB CRACKERS,SNACK STKS,ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,COUNTRY STYLE OATMEAL COOKIES W/ RAISINS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,DANISH WEDDING COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,E.L. FUDGE,BUTTER FLAV COOKIES",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KEEBLER,E.L. FUDGE,DOUBLE STUFFED COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,CHEESECAKE MIDDLES,DK CHOC",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,CHEESECAKE MIDDLES,ORIGINAL GRAHAM COOK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,MINT CREME MIDDLES,CHOC GRAHAM COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,COCNT DREAMS COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,DELUXE GRAHAMS COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,CARAMEL FILLED COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,PNUT CREME FILLED COOKIES",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,TRIPLE FUDGE FILLED COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,FUDGE-DIPPED ICE CRM CUPS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,FUDGE GRAHAMS,1/2 DIPPED,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,FUDGE STKS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,FUDGE STRIPES,DK CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,FUDGE STRIPES,HOLIDAY/SPIDERMAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,FUDGE STRIPES,MINI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,FUDGE STRIPES,OATMEAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,FUDGE STRIPES,ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,GRASSHOPPER COOKIES,FUDGE MINT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,JUMBO FUDGE STKS,VANILLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,JUMBO FUDGE STKS,PNUT BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,MAGIC MIDDLES FUDGE FILLED COOKIES,ORIG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,MERRY MINT PATTIES,HOLIDAY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,MAGIC MIDDLES FUDGE FILLED COOKIES,PNUT",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "KEEBLER,FUDGE SHOPPE,FUDGE STKS,PNUT BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KEEBLER,CINN TOAST GRAHAMS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,GRIPZ,CHIPS DELUXE,CHOC CHIP COOKIES,BITE-SIZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,GRIPZ,CHIPS DELUXE,RAINBOW CHOC CHIP COOKIES,BITE-SI",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,GRIPZ,CHOC CHIP GRAHAMS,BITE-SIZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,GRIPZ,CINN GRAHAMS,BITE-SIZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,ALMOND CRESCENTS COOKIES,HOLIDAY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,GINGERBREAD MEN COOKIES,HOLIDAY",
    categories: [GRAINS as category],
  },
  {
    name: "KEEBLER,HOLIDAY JINGLES COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,ICED OATMEAL COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOAST & PNUT BUTTER SNDWCH CRACKERS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KEEBLER,READY CRUST,CHOC PIE CRUST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,READY CRUST,SHORTBREAD PIE CRUST",
    categories: [GRAINS as category],
  },
  {
    name: "KEEBLER,100 CAL RIGHT BITES,CHIPS DELUXE,CHOC CHIP COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,100 CAL RIGHT BITES,FUDGE SHOPPE,DK CHOC FUDGE STRIP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,100 CAL RIGHT BITES,FUDGE SHOPPE,FUDGE COVERED PRETZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,100 CAL RIGHT BITES,FUDGE SHOPPE,COOKIES 'N CREME",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,100 CAL RIGHT BITES,FUDGE SHOPPE,MINI BROWNIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,100 CAL RIGHT BITES,FUDGE SHOPPE,MINI FUDGE GRAHAMS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,100 CAL RIGHT BITES,FUDGE SHOPPE,MINI FUDGE STRIPES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,100 CAL RIGHT BITES,FUDGE SHOPPE,MINI MINTS GRASSHOP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,100 CAL RIGHT BITES,SANDIES SHORTBREAD COOKIES,FUDGE",
    categories: [GRAINS as category],
  },
  {
    name: "KEEBLER,100 CAL RIGHT BITES,SANDIES SHORTBREAD COOKIES",
    categories: [GRAINS as category],
  },
  {
    name: "KEEBLER,100 CAL RIGHT BITES,WHITE FUDGE DIPPED PRETZELS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,SANDIES,CASHEW SHORTBREAD COOKIES",
    categories: [GRAINS as category],
  },
  {
    name: "KEEBLER,SANDIES,CHOC CHIP & PECAN SHORTBREAD COOKIES",
    categories: [GRAINS as category],
  },
  {
    name: "KEEBLER,SANDIES,DK CHOC ALMOND SHORTBREAD COOKIES",
    categories: [GRAINS as category],
  },
  {
    name: "KEEBLER,SANDIES,PECAN SHORTBREAD COOKIES",
    categories: [GRAINS as category],
  },
  {
    name: "KEEBLER,SANDIES,PECAN SHORTBREAD COOKIES,BITE SIZE",
    categories: [GRAINS as category],
  },
  {
    name: "KEEBLER,SANDIES,PECAN SHORTBREAD COOKIES,RED FAT",
    categories: [GRAINS as category],
  },
  {
    name: "KEEBLER,SOFT BATCH,CHOC CHIP COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,SWT CREMES COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TSTD COCNT COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOASTEDS,BUTTERCRISPS CRACKERS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KEEBLER,TOASTEDS,PARTY PK CRACKER ASSORTMENT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOASTEDS,ONION CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOASTEDS,SESAME CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOASTEDS,WHEAT CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOWN HOUSE,BISTRO MULTIGRAIN CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOWN HOUSE,FLIPSIDES,PRETZEL CRACKERS,CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOWN HOUSE,FLIPSIDES,PRETZEL CRACKERS,GARLIC HERB",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOWN HOUSE,FLIPSIDES,PRETZEL CRACKERS,ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOWN HOUSE,ORIGINAL CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOWN HOUSE,RED FAT CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOWN HOUSE,FLIPSIDES,PRETZEL CRACKERS,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOWN HOUSE,TOPPERS,GARLIC HERB CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOWN HOUSE,TOPPERS,MULTIGRAIN CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOWN HOUSE,TOPPERS,ORIGINAL CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOWN HOUSE,WHEAT CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TOWN HOUSE,FLATBREAD CRISPS,SEA SALT & OLIVE OIL CRA",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "KEEBLER,TRADITIONS,ICED LEMONADE COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,TRADITIONS,ICED OATMEAL COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,VANILLA WAFERS MINIS,RAINBOW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,VIENNA FINGERS W/ CREME FILLING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,VIENNA FINGERS W/ CREME FILLING,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,WAFFLE BOWLS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,WAFFLE CONES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,WHEATABLES,HONEY WHEAT CRACKERS",
    categories: [SWEETS as category],
  },
  {
    name: "KEEBLER,WHEATABLES,NUT CRISP CRACKERS,RSTD ALMOND",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "KEEBLER,WHEATABLES,NUT CRISP CRACKERS,TSTD PECAN",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "KELLOGG'S,ALL-BRAN,GARLIC & HERB CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,ALL-BRAN,MULTIGRAIN CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,CORN FLAKES CRUMBS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,FRSTD APPL STRUDEL TOASTER PASTRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,FRSTD BLUEBERRY MUFFIN TOASTER PASTRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,CHOC CHIP COOKIE DOUGH TOASTER PASTRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,FRSTD CINN ROLL TOASTER PASTRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,FRSTD CONFETTI CAKE TOASTER PASTRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,FRSTD COOKIES & CREME TOASTER PASTRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,FRSTD ORANGE CRM TOASTER PASTRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,FRSTD PUMPKIN PIE TOASTER PASTRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,FRSTD SPRING BERRY TOASTER PASTRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,FRSTD SUGAR COOKIE TOASTER PASTRIES",
    categories: [SWEETS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,FRSTD WAFFLE CONE TOASTER PASTRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,FRSTD WILD FRUIT FUSION TOASTER PASTRIES",
    categories: [FRUITS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,FRSTD WILD GRAPE TOASTER PASTRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,FRSTD WILD STRAWBERRY TOASTER PASTRIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,ICE CRM SHOPPE FRSTD HOT FUDGE SUNDAE TO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,ICE CRM SHOPPE FRSTD ICE CREME SNDWCH TO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,ICE CRM SHOPPE FRSTD RAINBOW CHIP TOASTE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,ICE CRM SHOPPE FRSTD STRAWBERRY MILKSHAK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,ICE CRM SHOPPE FRSTD VANILLA MILKSHAKE T",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS MINI CRISPS,CINN BROWN SUGAR BKD BITES",
    categories: [SWEETS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS MINI CRISPS,FRSTD CHOC BKD BITES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS MINI CRISPS,FRSTD STRAWBERRY BKD BITES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,SPL K,CRACKER CHIPS,CHEDDAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,SPL K,CRACKER CHIPS,SEA SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,SPL K,CRACKER CHIPS,SOUR CRM & ONION",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,SPL K,CRACKER CHIPS,SOUTHWEST RANCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,SPL K,MULTIGRAIN CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,SPL K,SAVORY HERB CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,GINGERBREAD TOASTER PASTRIES",
    categories: [GRAINS as category],
  },
  {
    name: "KELLOGG'S,POP-TARTS,YUM-AZING VANILLA MILKSHAKE TOASTER PAST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,4TH OF JULY CIRCUS ANIMAL COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,CHOC CHIP COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,CIRCUS ANIMAL COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,COCNT COCADAS COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,DOUBLE FUDGE CREME SNDWCH COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,ENG TEA SNDWCH COOKIES",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "MOTHER'S,HALLOWEEN CIRCUS ANIMALS COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,HOLIDAY CIRCUS ANIMAL COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,ICED LEMONADE COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,ICED OATMEAL COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,JUNGLE ANIMAL COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,MACAROON COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,OLD FASHIONED CHOC CHIP COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,OLD FASHIONED ICED OATMEAL COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,PNUT BUTTER GAUCHOS COOKIES",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MOTHER'S,TAFFY SNDWCH COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,VANILLA SUGAR WAFER",
    categories: [SWEETS as category],
  },
  {
    name: "MURRAY,CHOCOLATEY CHIP THINS COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,COOKIE JAR CLASSICS,COCNT BARS COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,DUPLEX CREME SNDWCH COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,LEMON CREME SNDWCH COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,JACKS VANILLA WAFERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,OLD FASHIONED ICED OATMEAL COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,SOUTHERN KITCHEN,CHOC CHIP COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,SOUTHERN KITCHEN,COCNT COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,SOUTHERN KITCHEN,ICED OATMEAL COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,CHOC CHIP & PECAN COOKIES",
    categories: [SWEETS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,FUDGE DIPPED GRAHAMS",
    categories: [SWEETS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,FUDGE DIPPED MINT COOKIES",
    categories: [SWEETS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,FUDGE DIPPED WAFERS",
    categories: [SWEETS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,PNUT BUTTER COOKIES",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,PECAN SHORTBREAD COOKIES",
    categories: [GRAINS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,LEMON CREME SNDWCH COOKIES",
    categories: [SWEETS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,VANILLA CREME SNDWCH COOKIES",
    categories: [SWEETS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,SHORTBREAD COOKIES",
    categories: [GRAINS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,SHORTBREAD BITES",
    categories: [GRAINS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,VANILLA WAFER",
    categories: [SWEETS as category],
  },
  {
    name: "MURRAY,VANILLA SUGAR WAFER",
    categories: [SWEETS as category],
  },
  {
    name: "MURRAY,VANILLA WAFER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,ASIAGO CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,BABY SWISS CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,BIG CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,CHEDDAR JACK CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,COLBY CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,DUOZ SHARP CHEDDAR PARMESAN CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,DUOZ SMOKED CHEDDAR MONTEREY JACK CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,GRIPZ,CHEEZ-IT CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,GRIPZ,CHEEZ-IT MIXX & CHEESY PIZZA CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,HOT & SPICY CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,ITALIAN FOUR CHS CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,CRACKERS (MADE W/ WHL GRAIN)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,MOZZARELLA CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,PARMESAN GARLIC CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,PEPPER JACK CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,WHITE CHEDDAR,RED FAT CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,100 CAL RIGHT BITES,EX CHEESY PARTY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,100 CAL RIGHT BITES,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,SCRABBLE JR. CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,SNACK MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,SNACK MIX,WHITE CHEDDAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,ZESTA,EXPORT SODAS CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AUSTIN,PNUT BUTTER ON CHS CRACKERS,SANDWICH-TYPE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "AUSTIN,PNUT BUTTER ON TOASTY CRACKERS,SANDWICH-TYPE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "AUSTIN,CHEDDAR CHS ON WAFER CRACKERS,SANDWICH-TYPE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KELLOGG'S,EGGO MINIS,PANCAKES,BTTRMLK",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "KELLOGG'S,EGGO,WAFFLES,CHOC CHIP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FAMOUS AMOS,CHOC SNDWCH CREME COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FAMOUS AMOS,VANILLA SNDWCH CREME COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,GRAHAMS,CINN CRISP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,OATMEAL COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,CHS & PNUT BUTTER SNDWCH CRACKERS",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: 'KEEBLER,READY CRUST,GRAHAM PIE CRUST (10"),RED FAT',
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,SANDIES,SIMPLY SHORTBREAD COOKIES",
    categories: [GRAINS as category],
  },
  {
    name: "KEEBLER,SUGAR CONES",
    categories: [SWEETS as category],
  },
  {
    name: "MOTHER'S,OLD FASHIONED OATMEAL COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOTHER'S,VANILLA SNDWCH COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,COOKIE JAR CLASSICS,BUTTER COOKIES",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MURRAY,CHOC CREME SNDWCH COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,VANILLA CREME SNDWCH COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,HONEY GRAHAM",
    categories: [SWEETS as category],
  },
  {
    name: "MURRAY,OLD FASHIONED GINGERSNAPS COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,SOUTHERN KITCHEN,OATMEAL COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,CHOC CHIP COOKIES",
    categories: [SWEETS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,OATMEAL COOKIES",
    categories: [SWEETS as category],
  },
  {
    name: "MURRAY,SUGAR FREE,CHOC CREME SNDWCH COOKIES",
    categories: [SWEETS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,ORIGINAL CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,CHEEZ-IT,RED FAT CRACKERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SUNSHINE,KRISPY,SOUP & OYSTER CRACKERS (LARGE)",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "KEEBLER,ZESTA,SALTINES,ORIGINAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KEEBLER,ZESTA,SALTINES W/ WHL WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAD,CHAPATI OR ROTI,WHL WHEAT,COMMLY PREP,FRZ",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,PARATHA,WHL WHEAT,COMMLY PREP,FRZ",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,NAAN,WHL WHEAT,COMMLY PREP,REFR",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,ROLL,MEXICAN,BOLLILO",
    categories: [GRAINS as category],
  },
  {
    name: "COOKIE,VANILLA W/ CARAMEL,COCNT,& CHOC COATING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIE,W/ PNUT BUTTER FILLING,CHOCOLATE-COATED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COOKIES,ANIMAL,W/ FRSTNG OR ICING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,MULTIGRAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIE,BUTTER OR SUGAR,W/ CHOC ICING OR FILLING",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COOKIE,CHOC,W/ ICING OR COATING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TORTILLAS,RTB OR -FRY,WHL WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,SNK CAKES,CREME-FILLED,CHOC W/ FRSTNG,L-F,W/ ADD FIBER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAKE,SNK CAKES,NOT CHOC,W/ ICING OR FILLING,L-F,W/ ADD FIBER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,BROWNIES,COMMLY PREP,RED FAT,W/ ADDED FIBER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC SNDWCH,W/ CREME FILLING,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,OATMEAL SNDWCH,W/ CREME FILLING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,PNUT BUTTER,COMMLY PREP,SUGAR FREE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "COOKIES,GRAHAM CRACKERS,PLN OR HONEY,LOWFAT",
    categories: [SWEETS as category],
  },
  {
    name: "CRACKERS,CHS,WHL GRAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WAFFLES,WHL WHEAT,LOWFAT,FRZ,RTH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES,PLN,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAD,CHAPATI OR ROTI,PLN,COMMLY PREP",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,NAAN,PLN,COMMLY PREP,REFR",
    categories: [GRAINS as category],
  },
  {
    name: "CRACKERS,STD SNACK-TYPE,W/ WHL WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,COCNT MACAROON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,SHORTBREAD,RED FAT",
    categories: [GRAINS as category],
  },
  {
    name: "COOKIES,SUGAR WAFER,CHOCOLATE-COVERED",
    categories: [SWEETS as category],
  },
  {
    name: "ROLLS,HAMBURGER OR HOT DOG,WHEAT/CRACKED WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,HAMBURGER OR HOT DOG,WHL WHEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,SANDWICH-TYPE,PNUT BUTTER FILLED,RED FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BREAD,CINN",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,WHEAT,SPROUTED",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,WHEAT,SPROUTED,TSTD",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,FRENCH OR VIENNA,WHL WHEAT",
    categories: [GRAINS as category],
  },
  {
    name: "BAGELS,WHL GRAIN WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ENGLISH MUFFINS,WHL GRAIN WHITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,HAMBURGER,WHL GRAIN WHITE,CALCIUM-FORTIFIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BAGELS,MULTIGRAIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES,PLN,LOFAT,DRY MIX,INCOMPLETE (INCLUDES BUTTERMILK)",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PANCAKES,WHL WHEAT,DRY MIX,INCOMPLETE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,TOAST THINS,LO NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,WHL GRAIN,SANDWICH-TYPE,W/ PNUT BUTTER FILLING",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CRACKERS,H2O BISCUITS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC CHIP SNDWCH,W/ CREME FILLING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC,MADE W/ RICE CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,MARSHMLLW,W/ RICE CRL & CHOC CHIPS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,FLAV,FISH-SHAPED",
    categories: [SEAFOOD as category],
  },
  {
    name: "COOKIES,GLUTEN-FREE,CHOC SNDWCH,W/ CREME FILLING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,GLUTEN-FREE,CHOC WAFER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,GLUTEN-FREE,LEMON WAFER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,GLUTEN-FREE,VANILLA SNDWCH,W/ CREME FILLING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAD,GLUTEN-FREE,POTATO EXTRACT,RICE STARCH,& RICE FLOUR",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,GLUTEN-FREE,RICE FLOUR,CORN STARCH,AND/OR TAPIOCA",
    categories: [GRAINS as category],
  },
  {
    name: "BRD,GLUTEN-FREE,WHITE,MADE W/TAPIOCA STARCH & BRWN RICE FLR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAD,GLUTEN-FREE,WHL GRAIN,TAPIOCA STARCH & BROWN RICE FLR",
    categories: [GRAINS as category],
  },
  {
    name: "ROLLS,GLUTEN-FREE,BRW RICE FLR,TAPIOCA STARCH,&POTATO STARCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,GLUTEN-FREE,RICE FLR,RICE STARCH,& CORN STARCH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,GLUTEN-FREE,BRW RICE FLR,TAPIOCA STARCH,&SORGHUM FLR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,GLUTEN-FREE,WHL GRAIN,TAPIOCA STARCH & BROWN RICE FLR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,GLUTEN-FREE,MULTIGRAIN & VEG,MADE W/ CORN STARCH &",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKERS,GLUTEN-FREE,MULTI-SEEDED & MULTIGRAIN",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "WAFFLES,GLUTEN-FREE,FRZ,RTH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PANCAKES,GLUTEN-FREE,FRZ,RTH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,DINNER,SWT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,OATMEAL,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,CHOC CRM COVERED BISCUIT STKS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,MARIE BISCUIT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COOKIES,VANILLA SNDWCH W/ CREME FILLING,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ANDREA'S,GLUTEN FREE SOFT DINNER ROLL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRUNCHMASTER,MULTI-GRAIN CRISPS,SNACK CRACKERS,GLUTEN-FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GLUTINO,GLUTEN FREE COOKIES,CHOC VANILLA CREME",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GLUTINO,GLUTEN FREE COOKIES,VANILLA CREME",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GLUTINO,GLUTEN FREE WAFERS,LEMON FLAV",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GLUTINO,GLUTEN FREE WAFERS,MILK CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MARY'S GONE CRACKERS,ORIGINAL CRACKERS,ORGANIC GLUTEN FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERIDGE FARM,GOLDFISH,BKD SNACK CRACKERS,CHEDDAR",
    categories: [SEAFOOD as category],
  },
  {
    name: "PEPPERIDGE FARM,GOLDFISH,BKD SNACK CRACKERS,EXPLOSIVE PIZZA",
    categories: [SEAFOOD as category],
  },
  {
    name: "PEPPERIDGE FARM,GOLDFISH,BKD SNACK CRACKERS,ORIGINAL",
    categories: [SEAFOOD as category],
  },
  {
    name: "PEPPERIDGE FARM,GOLDFISH,BKD SNACK CRACKERS,PARMESAN",
    categories: [SEAFOOD as category],
  },
  {
    name: "PEPPERIDGE FARM,GOLDFISH,BKD SNACK CRACKERS,PIZZA",
    categories: [SEAFOOD as category],
  },
  {
    name: "RUDI'S,GLUTEN-FREE BAKERY,ORIGINAL SNDWCH BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "SAGE VALLEY,GLUTEN FREE VANILLA SNDWCH COOKIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCHAR,GLUTEN-FREE,CLASSIC WHITE ROLLS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCHAR,GLUTEN-FREE,WHEAT-FREE,CLASSIC WHITE BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "UDI'S,GLUTEN FREE,CLASSIC FRENCH DINNER ROLLS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "UDI'S,GLUTEN FREE,SOFT & DELICIOUS WHITE SNDWCH BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "UDI'S,GLUTEN FREE,SOFT & HEARTY WHL GRAIN BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "UDI'S,GLUTEN FREE,WHL GRAIN DINNER ROLLS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VAN'S,GLUTEN FREE,TOTALLY ORIGINAL PANCAKES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VAN'S,GLUTEN FREE,TOTALLY ORIGINAL WAFFLES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VAN'S,THE PERFECT 10,CRISPY SIX WHL GRAIN + FOUR SD BKD CRAC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERIDGE FARM,100% WHL WHEAT HAMBURGER BUNS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERIDGE FARM,CINN SWIRL BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,RAISIN CINN SWIRL BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,WHL GRAIN 15 GRAIN BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,FARMHOUSE HEARTY WHITE BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,FARMHOUSE OATMEAL BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,WHL GRAIN 100% WHL WHEAT BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,FARMHOUSE SOURDOUGH BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,JEWISH RYE BREAD (SEEDLESS)",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,PUMPERNICKEL BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,HAMBURGER BUNS W/SESAME",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERIDGE FARM,DELI SWIRL BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,WHITE BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,LT STYLE WHEAT BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,SEEDED JEWISH RYE BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,FARMHOUSE 100% WHL WHEAT BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,WHITE HOAGIE ROLL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERIDGE FARM,HAMBURGER BUN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERIDGE FARM,WHL GRAIN HONEY WHL WHEAT BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "PEPPERIDGE FARM,WHL GRAIN OATMEAL BREAD",
    categories: [GRAINS as category],
  },
  {
    name: "BREAD,MULTI-GRAIN (INCLUDES WHOLE-GRAIN)",
    categories: [GRAINS as category],
  },
  {
    name: "COOKIES,ANIMAL CRACKERS (INCL ARROWROOT,TEA BISCUITS,)",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "CAMPBELL'S,TOMATO JUC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S, TOMATO JUC,LO NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "V8 VEG JUC,ORGANIC V8",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S,ORGANIC TOMATO JUC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "HEALTHY REQUEST TOMATO JUC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CAMPBELL'S V8 100% VEG JUC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "V8 VEG JUC,ESSENTIAL ANTIOXIDANTS V8",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "V8 VEG JUC,CA ENR V8",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "V8 VEG JUC,LO NA V8",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "V8 VEG JUC,SPICY HOT V8",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,JALAPENOS NACHO SLICED PEPPERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PACE,DICED GRN CHILIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "V8 60% VEG JUC,V8 V-LITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "V8 VEG JUC,LO NA SPICY HOT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "V8 VEG JUC,HI FIBER V8",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAWEED,CANADIAN CULTIVATED EMI-TSUNOMATA,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAWEED,CANADIAN CULTIVATED EMI-TSUNOMATA,REHYDRATED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,HASH BROWN,REFR,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,HASH BROWN,REFR,PREP,PAN-FRIED IN CANOLA OIL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SWEET POTATOES,FRENCH FR,FRZ AS PACKAGED,SALT ADDED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATOES,FRENCH FR,CROSSCUT,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEET POTATO PUFFS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,YEL FLESHED,RSTD,SALT ADDED IN PROC,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,YEL FLESHED,FRENCH FR,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATO\\,YEL FLSH,HASH BRN,SHRD,SALT ADDED IN PROC,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRENCH FR,WEDGE CUT,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRENCH FR,STK CUT,SALT NOT ADDED IN PROC,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTATOES,FRENCH FR,CROSS CUT,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEGETABLE SMOOTHIE,NAKED JUC,KALE BLAZER",
    categories: [VEGGIES as category],
  },
  {
    name: "GINGER ROOT,PICKLED,CND,W/ ART SWTNR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEPPERS,HOT PICKLED,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEGETABLE JUC,BOLTHOUSE FARMS,DAILY GRNS",
    categories: [VEGGIES as category],
  },
  {
    name: "POTATOES,MSHD,RTE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE & VERMICELLI MIX,BF FLAVOR,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE & VERMICELLI MIX,BF FLAVOR,PREP W/ 80% MARGARINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE & VERMICELLI MIX,RICE PILAF FLAVOR,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE & VERMICELLI MIX,RICE PILAF FLAVOR,PREP W/ 80% MARGARIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACARONI & CHS,BOX MIX W/ CHS SAU,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACARONI & CHS,BOX MIX W/ CHS SAU,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TAQUITOS,FRZ,CHICK & CHS,OVEN-HEATED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TAQUITOS,FRZ,BF & CHS,OVEN-HEATED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PASTA MIX,CLASSIC CHEESEBURGER MACARONI,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "PASTA MIX,CLASSIC BF,UNPREP",
    categories: [GRAINS as category],
  },
  {
    name: "PASTA MIX,ITALIAN LASAGNA,UNPREP",
    categories: [GRAINS as category],
  },
  {
    name: "YELLOW RICE W/ SEASONING,DRY PACKET MIX,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIZZA ROLLS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "POTSTICKER OR WONTON,PORK & VEG,FRZ,UNPREP",
    categories: [MEATS as category],
  },
  {
    name: "MACARONI OR NOODLES W/ CHS,MADE FROM RED FAT PACKAGED MIX,UN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURNOVER,CHEESE-FILLED,TOMATO-BASED SAU,FRZ,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MACARONI OR NOODLES W/ CHS,MICROWAVEABLE,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PASTA MIX,ITALIAN FOUR CHS LASAGNA,UNPREP",
    categories: [GRAINS as category],
  },
  {
    name: "SPANISH RICE MIX,DRY MIX,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LASAGNA,CHS,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHICKEN,THIGHS,FRZ,BREADED,REHTD",
    categories: [MEATS as category],
  },
  {
    name: "SPANISH RICE MIX,DRY MIX,PREP (WITH CANOLA/VEGETABLE OIL BLE",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "KASHI THREE CHS RAVIOLI W/ MEDITERRANEAN TOMATO SAU,FRZ,UNPR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI MUSHROOM & ASPARAGUS RISOTTO,FRZ,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE MIX,CHS FLAVOR,DRY MIX,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DUMPLING,POTATO- OR CHEESE-FILLED,FRZ",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "TURNOVER,CHICKEN- OR TURKEY-,& VEGETABLE-FILLED,RED FAT,FRZ",
    categories: [MEATS as category],
  },
  {
    name: "TURNOVER,MEAT- & CHEESE-FILLED,TOMATO-BASED SAU,RED FAT,FRZ",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "TURNOVER,FILLED W/ EGG,MEAT & CHS,FRZ",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "RICE MIX,WHITE & WILD,FLAV,UNPREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "KASHI ITALIAN VEG MEDLEY PASTA,FRZ,UNPREP",
    categories: [GRAINS as category],
  },
  {
    name: "SALISBURY STEAK W/ GRAVY,FRZ",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "SAUSAGE,EGG & CHS BRKFST BISCUIT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "HUNGRY MAN,SALISBURY STEAK W/ GRAVY,FRZ,UNPREP",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BANQUET,SALISBURY STEAK W/ GRAVY,FAMILY SIZE,FRZ,UNPREP",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "JIMMY DEAN,SAUSAGE,EGG,& CHS BRKFST BISCUIT,FRZ,UNPREP",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "INF FORMULA, MEAD JOHNSON, ENFAMIL, PRM, NEWBORN, PWD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMIL,PREMIUM LIPIL,INFANT,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMU, MEA JOHN, ENFA, PRE LIPIL, INFA, LIQ CON, NOT REC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFA,PREM,INFANT,LIQ CONC,NOT REC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, MEAD JOHNS, ENFA, ENFA, GENTL, TODD, LIPI, POW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, GERBER, GOOD START, PROTECT PLUS,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,GERBER GOOD START 2,GENTLE PLUS,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, GERBER, GOOD START 2, PROTECT PLUS, PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, MEAD JOHNSON, ENFAMI,ENFAGR, SOY,TOD,LIPIL,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA, ABB NUTR, SIMIL, GO & GR, PDR, W/ ARA & DHA",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA, GERBER, GOOD START 2 SOY, W/ IRON,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMU,MEAD JOHNS,ENFAMIL,NUTRAMIG,AA LIPIL,PDR,NOT RECON",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMI,PREMATURE,20 CAL RTF LO IRON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAML,PREMATURE,24 CAL RTF LO IRON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMIL,PREMIUM,INFANT,RTF",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "INF FORMULA,MEAD JOHNSON,ENFAMIL,PREMIUM,INFANT,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,GERBER,BANANA W/ ORANGE MEDLEY",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FINGER SNACKS,GERB,GRADUAT,LIL CRUNCHI - MILD CHEDD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AGUTUK,FISH/BERRY W/ SEAL OIL (ICE CREAM) (ALASKA NATIVE)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "AGUTUK,MEAT-CARIBOU (ALASKAN ICE CREAM) (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ASCIDIANS (TUNUGHNAK) (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEAR,BLACK,MEAT (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEAR,POLAR,MEAT,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHALE,BELUGA,MEAT,DRIED (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHALE,BELUGA,EYES (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "Whale, beluga, meat, raw (Alaska Native)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHALE,BELUGA,FLIPPER,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHALE,BELUGA,LIVER,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,BELUGA,WHALE (ALASKA NATIVE)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "BLACKBERRIES,WILD,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH,BLACKFISH,WHL (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "BLUEBERRIES,WILD,FRZ (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARIBOU,BONE MARROW,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARIBOU,EYE,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARIBOU,LIVER,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STEW/SOUP,CARIBOU (ALASKA NATIVE)",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "CARIBOU,TONGUE,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHITON,LEATHERY,GUMBOOTS (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CLOUDBERRIES,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "COCKLES,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRANBERRIES,WILD,BUSH,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRANBERRY,LO BUSH OR LINGENBERRY,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH,DEVILFISH,MEAT (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FIREWEED,YOUNG LEAVES,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH,HERRING EGGS ON GIANT KELP,PACIFIC (ALASKA NATIVE)",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FISH,HERRING EGGS,PACIFIC,DRY (ALASKA NATIVE)",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FISH,HERRING EGGS,PACIFIC,PLN (ALASKA NATIVE)",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "FISH,HERRING,PACIFIC,FLSH,AIR-DRIED,PACK OIL (ALASKA NATIVE)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "HUCKLEBERRIES,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH,LINGCOD,MEAT,RAW (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,LINGCOD,LIVER (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "STEW,MOOSE (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOOSE,MEAT,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MASHU ROOTS,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOOSE,LIVER,BRSD (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MOUSE NUTS,ROOTS (ALASKA NATIVE)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "MOUSE NUTS,SEEDLINGS (ALASKA NATIVE)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "OCTOPUS (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAL,BEARDED (OOGRUK),MEAT,DRIED (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAL,BEARDED (OOGRUK),MEAT,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,BEARDED SEAL (OOGRUK) (ALASKA NATIVE)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "OOPAH (TUNICATE),WHL ANIMAL (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OWL,HORNED,FLESH,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH,PIKE,NORTHERN,LIVER (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "RHUBARB,WILD,LEAVES (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH,SALMON,TIPNUK,FERMENTED (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,KING,CHINOOK,KIPPERED,CND (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,KING,CHINOOK,SMOKED & CND (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,KING,CHINOOK,SMOKED,BRINED (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,KING,CHINOOK,LIVER (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "DUCK,SCOTER,WHITE-WINGED,MEAT (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEA CUCUMBER,YANE (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAL,RINGED,MEAT (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAL,RINGED,LIVER (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SOUP,FISH,HOMEMADE (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "SOURDOCK,YOUNG LEAVES (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUIRREL,GROUND,MEAT (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TEA,TUNDRA,HERB & LABORADOR COMBINATION (ALASKA NATIVE)",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "WALRUS,MEAT,DRIED (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DEER (VENISON),SITKA,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WALRUS,MEAT,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WALRUS,MEAT & SUBCUTANEOUS FAT RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WALRUS,LIVER,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,WALRUS (ALASKA NATIVE)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "WHALE,BOWHEAD,SUBCUTANEOUS FAT (BLUBBER) (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHALE,BOWHEAD,SKN & SUBCUTANEOUS FATMUKTUK(ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,WHALE,BOWHEAD (ALASKA NATIVE)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FISH,WHITEFISH,BROAD,LIVER (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,WHITEFISH,MXD SP,RAW (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,WHITEFISH,HEAD,EYES,CHEEKS & SOFT BONES (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "WILLOW,LEAVES IN OIL (ALASKA NATIVE)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "WILLOW,YOUNG LEAVES,CHOPD (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MUSH,BLUE CORN W/ ASH (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORNMEAL,BLUE (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MELON,BANANA (NAVAJO)",
    categories: [FRUITS as category],
  },
  {
    name: "CHILCHEN (RED BERRY BEVERAGE) (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,DRIED (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,WHITE,STMD (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORNMEAL,WHITE (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORNMEAL,YEL (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,INDIAN,RAW (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SQUASH,INDIAN,CKD,BLD (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAD,KNEEL DOWN (NAVAJO)",
    categories: [GRAINS as category],
  },
  {
    name: "MUTTON,CKD,RSTD (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRYBREAD,MADE W/ LARD (NAVAJO)",
    categories: [GRAINS as category],
  },
  {
    name: "TORTILLA,INCL PLN & FROM MUTTON SNDWCH (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STEW,DUMPLING W/ MUTTON (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STEW,HOMINY W/ MUTTON (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STEW,MUTTON,CORN,SQUASH (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TAMALES (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STEW,STMD CORN (NAVAJO)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH,HALIBUT,RAW,W/ SKN (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,COHO (SILVER),RAW (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,SOCKEYE (RED),RAW (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,CHUM,RAW (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,KING (CHINOOK),RAW (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMONBERRIES,RAW (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "BLUEBERRIES,WILD,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,SPOTTED SEAL (ALASKA NATIVE)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FISH,SALMON,RED,CND,BONES REMOVED (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,WHITEFISH,EGGS (ALASKA NATIVE)",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CARIBOU,RUMP MEAT,HALF DRIED (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARIBOU,SHLDR MEAT,DRIED (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARIBOU,HIND QUARTER MEAT,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEAL,BEARDED (OOGRUK),MEAT,DRIED,IN OIL (ALASKA NATIVE)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "FISH,WHITEFISH,DRIED (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,RED,(SOCKEYE),CND,SMOKED (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,RED,(SOCKEYE),KIPPERED (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SALMON,KING,W/ SKN,KIPPERED,(ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "FISH,SHEEFISH,RAW (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "SEAL,BEARDED (OOGRUK),MEAT,LO QUADRANT,RAW (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FISH,SALMON,CHUM,DRIED (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "ELK,FREE RANGE,GROUND,CKD PATTIES (SHOSHONE BANNOCK)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ELK,FREE RANGE,GROUND,RAW (SHOSHONE BANNOCK)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BUFFALO,FREE RANGE,TOP RND STEAK,RAW (SHOSHONE BANNOCK)",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "SEAL,BEARDED (OOGRUK),MEAT,PART DRIED (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BUFFALO,FREE RANGE,TOP RND STEAK,CKD (SHOSHONE BANNOCK)",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "ELK,FREE RANGE,RST,EYE OF RND,RAW (SHOSHONE BANNOCK)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ELK,FREE RANGE,RST,EYE OF RND,CKD (SHOSHONE BANNOCK)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHOKECHERRIES,RAW,PITTED (SHOSHONE BANNOCK)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STEELHEAD TROUT,DRIED,FLESH (SHOSHONE BANNOCK)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STEELHEAD TROUT,BLD,CND (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ACORN STEW (APACHE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CORN,DRIED,YEL (NORTHERN PLAINS INDIANS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SMELT,DRIED (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRYBREAD,MADE W/ LARD (APACHE)",
    categories: [GRAINS as category],
  },
  {
    name: "CORNED BF & POTATOES IN TORTILLA (APACHE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TENNIS BREAD,PLN (APACHE)",
    categories: [GRAINS as category],
  },
  {
    name: "FISH,HALIBUT,CKD,W/ SKN (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "SALMON,RED (SOCKEYE),FILETS W/ SKN,SMOKED (ALASKA NATIVE)",
    categories: [SEAFOOD as category],
  },
  {
    name: "AGAVE,RAW (SOUTHWEST)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AGAVE,CKD (SOUTHWEST)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AGAVE,DRIED (SOUTHWEST)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CATTAIL,NARROW LEAF SHOOTS (NORTHERN PLAINS INDIANS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMBSQUARTERS,RAW (NORTHERN PLAINS INDIANS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LAMBSQUARTERS,STMD (NORTHERN PLAINS INDIANS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PRICKLY PEARS,RAW (NORTHERN PLAINS INDIANS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PRICKLY PEARS,BRLD (NORTHERN PLAINS INDIANS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PRAIRIE TURNIPS,RAW (NORTHERN PLAINS INDIANS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PRAIRIE TURNIPS,BLD (NORTHERN PLAINS INDIANS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RASPBERRIES,WILD (NORTHERN PLAINS INDIANS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROSE HIPS,WILD (NORTHERN PLAINS INDIANS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHOKECHERRIES,RAW,PITTED (NORTHERN PLAINS INDIANS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STINGING NETTLES,BLANCHED (NORTHERN PLAINS INDIANS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PLUMS,WILD (NORTHERN PLAINS INDIANS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PINON NUTS,RSTD (NAVAJO)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CARIBOU,HIND QUARTER,MEAT,CKD (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "AGUTUK,FISH W/ SHORTENING (ALASKAN ICE CREAM) (ALASKA NATIVE",
    categories: [SEAFOOD as category],
  },
  {
    name: "SEA LION,STELLER,LIVER (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEA LION,STELLER,KIDNEY (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEA LION,STELLER,HEART (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEA LION,STELLER,MEAT (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEA LION,STELLER,MEAT W/ FAT (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SEA LION,STELLER,FAT (ALASKA NATIVE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WOCAS,DRIED SEEDS,OREGON,YEL POND LILY (KLAMATH)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "HAZELNUTS,BEAKED (NORTHERN PLAINS INDIANS)",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "PIKI BREAD,MADE FROM BLUE CORNMEAL (HOPI)",
    categories: [GRAINS as category],
  },
  {
    name: "WOCAS,TUBER,CKD,OREGON,YEL POND LILY (KLAMATH)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "STEW,PINTO BEAN & HOMINY,BADUFSUKI (HOPI)",
    categories: [LEGUMES as category],
  },
  {
    name: "TAMALES,MASA & PORK FILLING (HOPI)",
    categories: [MEATS as category],
  },
  {
    name: "TEA,HERBAL,BREWED,HOHOYSI (HOPI)",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "TORTILLA,BLUE CORN,SAKWAVIKAVIKI (HOPI)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAD,BLUE CORN,SOMIVIKI (HOPI)",
    categories: [GRAINS as category],
  },
  {
    name: "APPLEBEE'S,9 OZ HOUSE SIRLOIN STEAK",
    categories: [FRUITS as category],
  },
  {
    name: "APPLEBEE'S,DOUBLE CRUNCH SHRIMP",
    categories: [FRUITS as category],
  },
  {
    name: "APPLEBEE'S,FRENCH FR",
    categories: [FRUITS as category],
  },
  {
    name: "APPLEBEE'S,KRAFT,MACARONI & CHS,FROM KID'S MENU",
    categories: [FRUITS as category],
  },
  {
    name: "APPLEBEE'S,MOZZARELLA STKS",
    categories: [FRUITS as category],
  },
  {
    name: "APPLEBEE'S,CHICK TENDERS,FROM KIDS' MENU",
    categories: [FRUITS as category],
  },
  {
    name: "T.G.I. FRIDAY'S,FRIDAY'S SHRIMP,BREADED",
    categories: [GRAINS as category],
  },
  {
    name: "T.G.I. FRIDAY'S,FRENCH FR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "T.G.I. FRIDAY'S, fried mozzarella",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "T.G.I. FRIDAY'S,MACARONI & CHS,FROM KID'S MENU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "T.G.I. FRIDAY'S,CHICK FINGERS,FROM KIDS' MENU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "T.G.I. FRIDAY'S, classic sirloin steak (10 oz)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,FAMILY STYLE,FRIED MOZZARELLA STKS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,FAMILY STYLE,SIRLOIN STEAK",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "RESTAURANT,FAMILY STYLE,FRENCH FR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,FAMILY STYLE,CHICK FINGERS,FROM KID'S MENU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,FAMILY STYLE,SHRIMP,BREADED & FRIED",
    categories: [GRAINS as category],
  },
  {
    name: "RESTAURANT,FAMILY STYLE,MACARONI & CHS,FROM KIDS' MENU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APPLEBEE'S,FISH,HAND BATTERED",
    categories: [SEAFOOD as category],
  },
  {
    name: "APPLEBEE'S,CHILI",
    categories: [FRUITS as category],
  },
  {
    name: "T.G.I. FRIDAY'S,CHICK FINGERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "APPLEBEE'S,COLESLAW",
    categories: [FRUITS as category],
  },
  {
    name: "APPLEBEE'S,CRUNCHY ONION RINGS",
    categories: [FRUITS as category],
  },
  {
    name: "APPLEBEE'S,CHICK TENDERS PLATTER",
    categories: [FRUITS as category],
  },
  {
    name: "CRACKER BARREL,CHICK TENDERLOIN PLATTER,FRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKER BARREL,COLESLAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKER BARREL,ONION RINGS,THICK-CUT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DENNY'S,CHICK STRIPS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DENNY'S,COLESLAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DENNY'S,FISH FILLET,BATTERED OR BREADED,FRIED",
    categories: [SEAFOOD as category],
  },
  {
    name: "DENNY'S,HASH BROWNS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DENNY'S,ONION RINGS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DENNY'S,SPAGHETTI & MEATBALLS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,FAMILY STYLE,FISH FILLET,BATTERED OR BREAD,FRIED",
    categories: [SEAFOOD as category],
  },
  {
    name: "RESTAURANT,FAMILY STYLE,CHICK TENDERS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,FAMILY STYLE,COLESLAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,FAMILY STYLE,ONION RINGS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,FAMILY STYLE,CHILI W/ MEAT & BNS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,FAMILY STYLE,SPAGHETTI & MEATBALLS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,FAMILY STYLE,HASH BROWNS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKER BARREL,MACARONI N' CHS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,ITALIAN,LASAGNA W/ MEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OLIVE GARDEN,LASAGNA CLASSICO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARRABBA'S ITALIAN GRILL,LASAGNE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ON THE BORDER,MEXICAN RICE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ON THE BORDER,REFRIED BNS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,ITALIAN,SPAGHETTI W/ POMODORO SAU (NO MEAT)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OLIVE GARDEN,SPAGHETTI W/ POMODORO SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARRABBA'S ITALIAN GRILL,SPAGHETTI W/ POMODORO SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ON THE BORDER,CHS ENCHILADA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,MEXICAN,CHS ENCHILADA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ON THE BORDER,CHS QUESADILLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,MEXICAN,CHS QUESADILLA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARRABBA'S ITALIAN GRILL,CHS RAVIOLI W/ MARINARA SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OLIVE GARDEN,CHS RAVIOLI W/ MARINARA SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,ITALIAN,CHS RAVIOLI W/ MARINARA SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,MEXICAN,CHS TAMALES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARRABBA'S ITALIAN GRILL,CHICK PARMESAN WO/ CAVATAPPI PASTA",
    categories: [GRAINS as category],
  },
  {
    name: "OLIVE GARDEN,CHICK PARMIGIANA WO/ PASTA",
    categories: [GRAINS as category],
  },
  {
    name: "RESTAURANT,ITALIAN,CHICK PARMESAN WO/ PASTA",
    categories: [GRAINS as category],
  },
  {
    name: "ON THE BORDER,SOFT TACO W/ GROUND BF,CHS & LETTUCE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,MEXICAN,SOFT TACO W/ GROUND BF,CHS & LETTUCE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,LATINO,CHICK & RICE,ENTREE,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,LATINO,EMPANADAS,BF,PREP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,LATINO,ARROZ CON LECHE (RICE PUDDING)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,LATINO,ARROZ CON FRIJOLES NEGROS (RICE&BLACK BNS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "REST,LATINO,ARROZ CON ABICHUELAS COLORADOS (RICE&RED BNS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,LATINO,ARROZ CON GRANDULES (RICE & PIGEONPEAS)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,LATINO,PUPUSAS CON FRIJOLES (PUPUSAS,BEAN)",
    categories: [LEGUMES as category],
  },
  {
    name: "RESTAURANT,LATINO,PUPUSAS CON QUESO (PUPUSAS,CHEESE)",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "RESTAURANT,LATINO,PUPUSAS DEL CERDO (PUPUSAS,PORK)",
    categories: [MEATS as category],
  },
  {
    name: "RESTAURANT,LATINO,TAMALE,CORN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,LATINO,TAMALE,PORK",
    categories: [MEATS as category],
  },
  {
    name: "RESTAURANT,LATINO,BLACK BEAN SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "RESTAURANT,LATINO,TRIPE SOUP",
    categories: [SOUPS_AND_BROTHS as category],
  },
  {
    name: "RESTAURANT,LATINO,AREPA (UNLEAVENED CORNMEAL BREAD)",
    categories: [GRAINS as category],
  },
  {
    name: "RESTAURANT,LATINO,BUNUELOS (FRIED YEAST BREAD)",
    categories: [GRAINS as category],
  },
  {
    name: "RESTAURANT,MEXICAN,SPANISH RICE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,MEXICAN,REFRIED BNS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,CHINESE,EGG ROLLS,ASSORTED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "RESTAURANT,CHINESE,FRIED RICE,WO/ MEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,CHINESE,BF & VEG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKER BARREL,CHICK TENDERLOIN PLATTER,FRIED,FRM KID'S MENU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKER BARREL,COUNTRY FRIED SHRIMP PLATTER",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CRACKER BARREL,FARM RAISED CATFISH PLATTER",
    categories: [SEAFOOD as category],
  },
  {
    name: "CRACKER BARREL,STEAK FRIES",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "CRACKER BARREL,GRILLED SIRLOIN STEAK",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "CRACKER BARREL,MACARONI N' CHS PLATE,FROM KID'S MENU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DENNY'S,FRENCH FR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DENNY'S,MOZZARELLA CHS STKS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DENNY'S,GOLDEN FRIED SHRIMP",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DENNY'S,MACARONI & CHS,FROM KID'S MENU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DENNY'S,CHICK NUGGETS,STAR SHAPED,FROM KID'S MENU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "DENNY'S,TOP SIRLOIN STEAK",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "RESTAURANT,CHINESE,LEMON CHICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,CHINESE,GENERAL TSO'S CHICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,CHINESE,KUNG PAO CHICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,CHINESE,SHRIMP & VEG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,CHINESE,SWT & SOUR CHICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,CHINESE,SWT & SOUR PORK",
    categories: [MEATS as category],
  },
  {
    name: "RESTAURANT,CHINESE,CHICK CHOW MEIN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,CHINESE,VEG CHOW MEIN,WO/ MEAT OR NOODLES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,CHINESE,VEG LO MEIN,WO/ MEAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,CHINESE,CHICK & VEG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,CHINESE,ORANGE CHICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,ITALIAN,SPAGHETTI W/ MEAT SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OLIVE GARDEN,SPAGHETTI W/ MEAT SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CARRABBA'S ITALIAN GRILL,SPAGHETTI W/ MEAT SAU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RESTAURANT,CHINESE,SESAME CHICK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,GRENADINE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,FRUIT-FLAVORED DRK,DRY PDR MIX,LO CAL,W/ ASPRT",
    categories: [FRUITS as category],
  },
  {
    name: "PECTIN,LIQUID",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZ NOVLT,ICE CRM,VAN ICE CRM,LT,NO SUGAR ADDED,CHOC COATD",
    categories: [SWEETS as category],
  },
  {
    name: "CREAMY DRSNG,MADE W/SOUR CRM AND/OR BTTRMLK&OIL,RED CAL",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "IMITATION CHS,AMERICAN OR CHEDDAR,LO CHOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,BANANA JUC W/LOFAT YOGURT",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,MXD FRUIT JUC W/LOFAT YOGURT",
    categories: [FRUITS as category],
  },
  {
    name: "TURKEY HAM,SLICED,EX LN,PREPACKAGED OR DELI-SLICED",
    categories: [MEATS as category],
  },
  {
    name: "BOLOGNA,BF&PORK,LOFAT",
    categories: [MEATS as category],
  },
  {
    name: "MILK DSSRT,FRZ,MILK-FAT FREE,CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "WHIPPED TOPPING,FRZ,LOFAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CREAM SUB,PDR,LT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,PEPPERCORN DRSNG,COMM,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MAYONNAISE,RED-CAL OR DIET,CHOL-FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRANOLA BAR,SOFT,MILK CHOC COATD,PNUT BUTTER",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SALAD DRSNG,ITALIAN DRSNG,RED CAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CREAM SUB,LIQ,LT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,M&M'S PNUT BUTTER CHOC CANDIES",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BABYFOOD,APPL YOGURT DSSRT,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEGETABLE OIL-BUTTER SPRD,RED CAL",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SALAD DRSNG,BLUE OR ROQUEFORT CHS DRSNG,LT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEESE,MONTEREY,LOW FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CRMY DRSG,MDE W/ SOUR CRM AND/OR BTRMLK & OIL,RED CAL,FTFREE",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CREAMY DRSNG,W/SOUR CRM AND/OR BTTRMLK&OIL,RED CAL,CHOL-FREE",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "BOLOGNA,BEEF,LOW FAT",
    categories: [MEATS as category],
  },
  {
    name: "SALAD DRSNG,FRENCH DRSNG,RED CAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURKEY&PORK SAUSAGE,FRSH,BULK,PATTY OR LINK,CKD",
    categories: [MEATS as category],
  },
  {
    name: "MAYONNAISE,MADE WITH TOFU",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRANKFURTER,BF,LO FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,TWIX CHOC FUDGE COOKIE BARS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "YOGURT,FRZ,CHOC,NON-FAT MILK,W/LO CAL SWTNR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZEN YOGURTS,CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZEN YOGURTS,FLAVORS OTHER THAN CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,BTTRMLK,FLUID,CULTURED,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PORK SAUSAGE RICE LINKS,BROWN&SERVE,CKD",
    categories: [MEATS as category],
  },
  {
    name: "SALAD DRSNG,BLUE OR ROQUEFORT CHS DRSNG,FAT-FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,MAYONNAISE-LIKE,FAT-FREE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,MILKY WAY MIDNIGHT BAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PAPAD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RICE CAKE,CRACKER (INCL HAIN MINI RICE CAKES)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEESE,PAST PROCESS,CHEDDAR OR AMERICAN,FAT-FREE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CANDIES,MARS SNACKFOOD US,M&M'S ALMOND CHOC CANDIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,COLESLAW DRSNG,RED FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,FLAXSEED,COLD PRESSED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHEESE,COTTAGE,LOWFAT,1% MILKFAT,LACTOSE RED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CEREALS RTE,FRSTD OAT CRL W/MARSHMALLOWS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,WEETABIX WHL GRAIN CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,HONEY BUNCHES OF OATS,W/ ALMONDS",
    categories: [SWEETS as category],
  },
  {
    name: "MARGARINE-LIKE,VEG OIL SPRD,STK OR TUB,SWTND",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CHEESE PRODUCT,PAST PROCESS,CHEDDAR,RED FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SNACKS,POPCORN,HOME-PREPARED,OIL-POPPED,UNSALTED",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CEREALS RTE,POST,GREAT GRAINS CRUNCHY PECAN CRL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,GREAT GRAINS,RAISIN,DATE & PECAN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,JUC,APPLE-SWEET POTATO",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,JUC,ORANGE-CARROT",
    categories: [VEGGIES as category],
  },
  {
    name: "BEVERAGES,ORANGE JUC DRK",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GRANOLA BAR,W/COCNT,CHOC COATD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,VEG&BROWN RICE,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,PEAS&BROWN RICE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FRANKFURTER,MEAT & POULTRY,LO FAT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "GUMS,SD GUMS (INCL LOCUST BEAN,GUAR)",
    categories: [LEGUMES as category],
  },
  {
    name: "POTATO CHIPS,WHITE,RESTRUCTURED,BKD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,BKD PRODUCT,FINGER SNACKS CRL FORT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,BROWN RICE,DRY,INST",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,GRN BNS&TURKEY,STR",
    categories: [MEATS as category],
  },
  {
    name: "OIL,CORN AND CANOLA",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "MILK,FLUID,NONFAT,CA FORT (FAT FREE OR SKIM)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PEANUT BUTTER,RED NA",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CEREALS RTE,POST GREAT GRAINS BANANA NUT CRUNCH",
    categories: [FRUITS as category],
  },
  {
    name: "CHEESE,MUENSTER,LOW FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,MOZZARELLA,NON-FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MARGARINE-LIKE,BUTTER-MARGARINE BLEND,80% FAT,STK,WO/ SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MARGARINE-LIKE,VEG OIL-BUTTER SPRD,RED CAL,TUB,W/ SALT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BABYFOOD,CARROTS,TODDLER",
    categories: [VEGGIES as category],
  },
  {
    name: "BABYFOOD,DSSRT,BANANA PUDD,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,TUTTI FRUTTI,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,FRUIT,TUTTI FRUTTI,JR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,DINNER,CHICK&RICE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,CAESAR DRSNG,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRESSING,COLESLAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,GRN GODDESS,REG",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,SWT&SOUR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,BLUE OR ROQUEFORT CHS,LO CAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,CAESAR,LO CAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUPS,SUGAR FREE",
    categories: [SWEETS as category],
  },
  {
    name: "JELLIES,NO SUGAR (WITH NA SACCHARIN),ANY FLAVORS",
    categories: [SWEETS as category],
  },
  {
    name: "JAMS & PRESERVES,NO SUGAR (WITH NA SACCHARIN),ANY FLAVOR",
    categories: [SWEETS as category],
  },
  {
    name: "CANDIES,CHOC COVERED,CARAMEL W/NUTS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "CANDIES,NOUGAT,W/ ALMONDS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,GUM DROPS,NO SUGAR OR LO CAL (SORBITOL)",
    categories: [SWEETS as category],
  },
  {
    name: "CANDIES,HARD,DIETETIC OR LO CAL (SORBITOL)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CANDIES,CHOC COVERED,LO SUGAR OR LO CAL",
    categories: [SWEETS as category],
  },
  {
    name: "CHEWING GUM,SUGARLESS",
    categories: [SWEETS as category],
  },
  {
    name: "FLUID REPLCMNT,ELECTROLYTE SOLN (INCLUDE PEDIALYTE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGE,MILKSHAKE MIX,DRY,NOT CHOC",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PIE FILLINGS,CHERRY,LO CAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BREAKFAST BARS,OATS,SUGAR,RAISINS,COCNT (INCL GRANOLA BAR)",
    categories: [SWEETS as category],
  },
  {
    name: "PRETZELS,SOFT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEANS,CHILI,BARBECUE,RANCH STYLE,CKD",
    categories: [LEGUMES as category],
  },
  {
    name: "VERMICELLI,MADE FROM SOY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEANS,LIQ FROM STWD KIDNEY BNS",
    categories: [LEGUMES as category],
  },
  {
    name: "CHICKEN,MEATLESS",
    categories: [MEATS as category],
  },
  {
    name: "FRANKFURTER,MEATLESS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "LUNCHEON SLICES,MEATLESS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MEATBALLS,MEATLESS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEGETARIAN FILLETS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SANDWICH SPREAD,MEATLESS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEGETARIAN MEATLOAF OR PATTIES",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "RADISHES,HAWAIIAN STYLE,PICKLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,JAPANESE STYLE,FRSH,PICKLED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CABBAGE,MUSTARD,SALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EGGPLANT,PICKLED",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,COOKING",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,WINE,LT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEETENERS,TABLETOP,SACCHARIN (SODIUM SACCHARIN)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGE,INST BRKFST PDR,CHOC,NOT RECON",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BACON BITS,MEATLESS",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BUTTER REPLCMNT,WO/FAT,PDR",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "SALAD DRSNG,BTTRMLK,LITE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SWEETENERS,TABLETOP,FRUCTOSE,DRY,PDR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO SAU,CND,NO SALT ADDED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,ALPEN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,FAMILIA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,WHEAT&BRAN,PRESWEETENED W/NUTS&FRUITS",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGE,INST BRKFST PDR,CHOC,SUGAR-FREE,NOT RECON",
    categories: [SWEETS as category],
  },
  {
    name: "YOGURT,FRUIT VAR,NON-FAT",
    categories: [FRUITS as category],
  },
  {
    name: "WHIPPED CRM SUB,DIETETIC,MADE FROM PDR MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZEN NOVELTIES,ICE CRM TYPE,SUNDAE,PREPACKAGED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEESE,COTTAGE,W/VEG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,CREAM,LOW FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,PAST PROCESS,AMERICAN,LOFAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE SPRD,CRM CHS BASE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,AMERICAN CHEDDAR,IMITN",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "QUAIL,COOKED,TOTAL EDIBLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PHEASANT,CKD,TOTAL EDIBLE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "EGGS,SCRMBLD,FRZ MIXTURE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "DOVE,CKD (INCL SQUAB)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PORK,ORIENTAL STYLE,DEHYD",
    categories: [MEATS as category],
  },
  {
    name: "SOYBEAN,CURD CHEESE",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "POTATOES,CND,DRND SOL,NO SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VEGETABLES,MXD (CORN,LIMA BNS,PEAS,GRN BNS,CRRT) CND,NO SALT",
    categories: [VEGGIES as category],
  },
  {
    name: "PORK,CURED,HAM,BNLESS,LO NA,EX LN & REG,RSTD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,LO NA,LN & FAT,CKD",
    categories: [MEATS as category],
  },
  {
    name: "PORK,CURED,HAM,BNLESS,LO NA,EX LN (APPROXIMATLY 5% FAT),RSTD",
    categories: [MEATS as category],
  },
  {
    name: "SALAD DRSNG,MAYO & MAYONNAISE-TYPE,LO CAL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SALAD DRSNG,BACON&TOMATO",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEESE,PARMESAN,LO NA",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "JAMS,PRESERVES,MARMALADE,RED SUGAR",
    categories: [SWEETS as category],
  },
  {
    name: "BEVER,FRUIT-FLAV DRK,PDR,W/ HI VIT C W/ OTHER ADD VIT,LO CAL",
    categories: [FRUITS as category],
  },
  {
    name: "FROZEN NOVELTIES,JUC TYPE,ORANGE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEESE,COTTAGE,LOWFAT,1% MILKFAT,NO NA",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MAYONNAISE,LO NA,LO CAL OR DIET",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,TORTILLA CHIPS,UNSALTED,WHITE CORN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOMATO&VEG JUC,LO NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURKEY,WING,SMOKED,CKD,W/SKN,BONE REMOVED",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,DRUMSTK,SMOKED,CKD,W/SKN,BONE REMOVED",
    categories: [MEATS as category],
  },
  {
    name: "BEVERAGES,CHOCOLATE-FLAVORED DRK,WHEY & MILK BSD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,CHICK&NOODLE W/VEG,TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PORK,CURED,BACON,CKD,BRLD,PAN-FRIED OR RSTD,RED NA",
    categories: [MEATS as category],
  },
  {
    name: "CHEESE,PAST PROCESS,SWISS,LOFAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CRANBERRY JUC,UNSWTND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEEF,BOLOGNA,RED NA",
    categories: [MEATS as category],
  },
  {
    name: "TURNIP GRNS,CND,NO SALT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURKEY,LT OR DK MEAT,SMOKED,CKD,W/SKN,BONE REMOVED",
    categories: [MEATS as category],
  },
  {
    name: "TURKEY,LT OR DK MEAT,SMOKED,CKD,SKN & BONE REMOVED",
    categories: [MEATS as category],
  },
  {
    name: "HEARTS OF PALM,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,POST,SHREDDED WHEAT N' BRAN,SPOON-SIZE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEESE,COTTAGE,LOWFAT,1% MILKFAT,W/VEG",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CHEESE,PAST PROCESS,CHEDDAR OR AMERICAN,LO NA",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BEVERAGES,COFFEE,INST,W/ WHTNR,RED CAL",
    categories: [TEA_AND_COFFEE as category],
  },
  {
    name: "BEVERAGES,CRANBERRY-APPLE JUC DRK,LO CAL,W/ VIT C ADDED",
    categories: [FRUITS as category],
  },
  {
    name: "CHEESE,SWISS,LOW SODIUM",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "YEAST EXTRACT SPREAD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,JUICE,PEAR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHICKEN,MEATLESS,BREADED,FRIED",
    categories: [MEATS as category],
  },
  {
    name: "BABYFOOD,MEAT,BF W/ VEG,TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DINNER,MACARONI,BF&TOMATO SAU,TODD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ROLLS,PUMPERNICKEL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNACKS,CORN-BASED,EXTRUDED,CHIPS,UNSALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEANS,BKD,CND,NO SALT ADDED",
    categories: [LEGUMES as category],
  },
  {
    name: "FROZEN NOVELTIES,JUC TYPE,JUC W/ CRM",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TOFU YOGURT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "ALCOHOLIC BEV,RICE (SAKE)",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILLET,PUFFED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CEREALS RTE,OAT BRAN FLAKES,HEALTH VALLEY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "JELLYFISH,DRIED,SALTED",
    categories: [SEAFOOD as category],
  },
  {
    name: "ICE CRM BAR,CHOC OR CARAMEL COVERED,W/NUTS",
    categories: [NUTS_AND_SEEDS as category],
  },
  {
    name: "FRANKFURTER,LO NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROZEN NOVELTIES,ICE TYPE,POP,W/ LO CAL SWTNR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,MXD FRUIT YOGURT,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BEVERAGES,ABBOTT,ENSURE PLUS,RTD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,RICE&APPLS,DRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,JUC,APPL - CHERRY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DSSRT,PEACH YOGURT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DSSRT,BLUEBERRY YOGURT,STR",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,DSSRT,BANANA YOGURT,STR",
    categories: [FRUITS as category],
  },
  {
    name: "ICE CREAMS,CHOC,RICH",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MILK,IMITATION,NON-SOY",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,CRL,RICE W/ PEARS & APPL,DRY,INST FORT",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,BANANA NO TAPIOCA,STR",
    categories: [FRUITS as category],
  },
  {
    name: "BABYFOOD,BANANA APPL DSSRT,STR",
    categories: [FRUITS as category],
  },
  {
    name: "SNACKS,TORTILLA CHIPS,LT (BAKED W/ LESS OIL)",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "CEREALS RTE,POST,HONEY BUNCHES OF OATS,HONEY RSTD",
    categories: [SWEETS as category],
  },
  {
    name: "POPCORN,MICROWAVE,LOFAT&NA",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,FRUIT SUPREME DSSRT",
    categories: [FRUITS as category],
  },
  {
    name: "CHEESE,SWISS,LOW FAT",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "BREAKFAST BAR,CORN FLAKE CRUST W/FRUIT",
    categories: [FRUITS as category],
  },
  {
    name: "CHEESE,MOZZARELLA,LO NA",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "MAYONNAISE DRSNG,NO CHOL",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "OIL,CORN,PEANUT,AND OLIVE",
    categories: [OILS_AND_FATS as category],
  },
  {
    name: "SWEETENERS,TABLETOP,FRUCTOSE,LIQ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "CHEESE FOOD,IMITATION",
    categories: [DAIRY_AND_EGGS as category],
  },
  {
    name: "CELERY FLAKES,DRIED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,CHOC FLAVOR,LO CAL,INST,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BABYFOOD,GRAPE JUC,NO SUGAR,CND",
    categories: [SWEETS as category],
  },
  {
    name: "JELLIES,RED SUGAR,HOME PRESERVED",
    categories: [SWEETS as category],
  },
  {
    name: "PIE FILLINGS,BLUEBERRY,CND",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "BEVERAGES,COCKTAIL MIX,NON-ALCOHOLIC,CONCD,FRZ",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,CHOC FLAVOR,LO CAL,REG,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,ALL FLAVORS XCPT CHOC,LO CAL,REG,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "PUDDINGS,ALL FLAVORS XCPT CHOC,LO CAL,INST,DRY MIX",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "VITAL WHEAT GLUTEN",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "FROG LEGS,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "MACKEREL,SALTED",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SCALLOP,(BAY&SEA),CKD,STMD",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SYRUP,CANE",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "SNAIL,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
  {
    name: "TURTLE,GREEN,RAW",
    categories: [PANTRY_ESSENTIALS as category],
  },
];

export const getByCategory = (categoryString: category) =>
  INGREDIENTS.filter((ingredient) => ingredient.categories.includes(categoryString));
