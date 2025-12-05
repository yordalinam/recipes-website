import { useQuery } from '@tanstack/react-query';
import type { AllRecipes } from "../type";

async function fetchRecipes(filters: {
  tags?: string[];
  includeIngredients?: string[];
  allergens?: string[];
}) {
  const params = new URLSearchParams();

  if (filters.tags?.length) {
    params.append('tags', filters.tags.join(','));
  }

  if (filters.includeIngredients?.length) {
    params.append('includeIngredients', filters.includeIngredients.join(','));
  }

  if (filters.allergens?.length) {
    params.append('allergens', filters.allergens.join(','));
  }

  const url = params.toString() ? `/api/recipes?${params.toString()}` : '/api/recipes';

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }
  const data: AllRecipes = await response.json();
  return data;
}

export function useRecipes(filters: {
  tags?: string[];
  includeIngredients?: string[];
  allergens?: string[];
}) {
  return useQuery({
    queryKey: ['Allrecipes', filters],
    queryFn: () => fetchRecipes(filters),
  });
}
