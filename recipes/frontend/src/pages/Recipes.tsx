import { useState } from "react";
import styled from "styled-components";
import { useRecipes } from "../api/hooks/useAllRecipes";
import { Searchbar } from "../components/Searchbar";
import { RecipeCard } from "../features/recipes/RecipeCard";

const RecipesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 24px;
  flex-wrap: wrap;
  gap: 2rem;
`;

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
      {filteredRecipes.length === 0 ? (
        <span>No recipes found</span>
      ) : (
        <RecipesContainer>
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </RecipesContainer>
      )}
    </>
  );
}

export default Recipes;
