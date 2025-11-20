import { useState } from "react";
import { useRecipes } from "../api/hooks/useAllRecipes";
import { Searchbar } from "../components/Searchbar";

function Recipes() {
  const { data: recipes = [], isLoading, error } = useRecipes({});
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const query = searchQuery.toLowerCase();
    const fieldsToSearch = [recipe.name];

    return fieldsToSearch.some(
      (field) => field && field.toLowerCase().includes(query)
    );
  });

  if (isLoading) return <div>Loading recipes...</div>;
  if (error instanceof Error)
    return <div>Error loading recipes: {error.message}</div>;

  return (
    <>
      <Searchbar onSearch={setSearchQuery} />
      <ul>
        {filteredRecipes.length === 0 ? (
          <li>No recipes found</li>
        ) : (
          filteredRecipes.map((recipe) => (
            <li key={recipe._id}>
              <h3>{recipe.name}</h3>
              <p>Author: {recipe.author}</p>
              <p>Ingredients: {recipe.ingredients.join(", ")}</p>
              <p>Method: {recipe.method}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default Recipes;
