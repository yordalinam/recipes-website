import { type SingleRecipe } from "../api/type";


export function getLatestThreeRecipes(recipes: SingleRecipe[] | undefined): SingleRecipe[] | undefined {
  return recipes
    ?.slice()
    .sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 3);
}
