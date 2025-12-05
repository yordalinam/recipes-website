import { useState } from "react";
import { useDebounce } from "./useDebounce";
import { type AllRecipes } from "../../api/type";

type FilterType = 'name' | 'ingredients' | 'allergens' | 'tags';

interface FilterState {
  name: string;
  ingredients: string;
  allergens: string;
  tags: string;
}

export function useMultiFilter({ recipes }: { recipes: AllRecipes }) {
  const [filters, setFilters] = useState<FilterState>({
    name: "", ingredients: "", allergens: "", tags: ""
  });

  const debouncedFilters = {
    name: useDebounce(filters.name, 600),
    ingredients: useDebounce(filters.ingredients, 600),
    allergens: useDebounce(filters.allergens, 600),
    tags: useDebounce(filters.tags, 600),
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const nameMatch = !debouncedFilters.name || 
      recipe.name.toLowerCase().includes(debouncedFilters.name.toLowerCase());
    
    const ingredientsMatch = !debouncedFilters.ingredients || 
      recipe.ingredients.some(ing => ing.toLowerCase().includes(debouncedFilters.ingredients.toLowerCase()));
    
    const allergensMatch = !debouncedFilters.allergens || 
      (!recipe.allergens?.some(a => a.toLowerCase().includes(debouncedFilters.allergens.toLowerCase())));
    
    const tagsMatch = !debouncedFilters.tags || 
      recipe.tags?.some(tag => tag.toLowerCase().includes(debouncedFilters.tags.toLowerCase()));

    return nameMatch && ingredientsMatch && allergensMatch && tagsMatch;
  });

  const updateFilter = (type: FilterType, value: string) => {
    setFilters(prev => ({ ...prev, [type]: value }));
  };

  return { filters, debouncedFilters, filteredRecipes, updateFilter };
}
