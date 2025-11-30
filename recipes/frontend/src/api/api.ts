import type { paths, components } from "./types/type"


export type AllRecipes = paths["/api/recipes"]["get"]["responses"][200]["content"]["application/json"];

export type SingleRecipe = components["schemas"]["Recipe"];