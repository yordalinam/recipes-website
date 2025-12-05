import { useMemo } from "react";
import { type AllRecipes } from "../../api/type";

export function useRecipeFilters(recipes: AllRecipes) {
  const uniqueTags = useMemo(
    () => Array.from(new Set(recipes.flatMap(r => r.tags || []))).sort(),
    [recipes]
  );

  const uniqueAllergens = useMemo(
    () => Array.from(new Set(recipes.flatMap(r => r.allergens || []))).sort(),
    [recipes]
  );

  const allIngredients = useMemo(
    () => Array.from(new Set(recipes.flatMap(r => r.ingredients))).sort(),
    [recipes]
  );

  return { uniqueTags, uniqueAllergens, allIngredients };
}
