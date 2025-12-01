import { useState } from "react";
import { useDebounce } from "./useDebounce";

type AllRecipes = {
  _id?: string;
  name: string;
  ingredients: string[];
  method: string;
  author: string;
  description?: string;
  image?: string;
  tags?: string[];
  cookingTime?: number;
  servings?: number;
  allergens?: string[];
  createdAt?: string;
  updatedAt?: string;
}[];

interface UseRecipeSearchProps {
  recipes: AllRecipes;
}

export function useRecipeSearch({ recipes }: UseRecipeSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 600);

  const filteredRecipes = recipes.filter((recipe) => {
    const query = debouncedSearchQuery.toLowerCase();
    const fieldsToSearch = [
      recipe.name,
      recipe.description,
      recipe.ingredients?.join(" "),
    ];

    return fieldsToSearch.some(
      (field) => field && field.toLowerCase().includes(query)
    );
  });

  return {
    searchQuery,
    setSearchQuery,
    filteredRecipes,
    debouncedSearchQuery,
  };
}
