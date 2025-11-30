import { useState } from "react";
import styled from "styled-components";
import { useRecipes } from "../api/hooks/useAllRecipes";
import { Searchbar } from "../components/Searchbar";
import { RecipeCard } from "../features/recipes/RecipeCard";
import { useDebounce } from "../api/hooks/useDebounce";
import { Loader } from "../components/Loader";
import Error from "../assets/svgs/Error";

const RecipesWrap = styled.div`
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecipesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 24px;
  flex-wrap: wrap;
  gap: 2rem;
`;

const NoRecipesMessage = styled.div`
  color: var(--tetriary-color);
  font-weight: 400;
  margin: 30px 0;
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const LoadingMessage = styled.span`
  color: var(--secondary-color);
  font-weight: 500;
  font-size: var(--medium-font-size);
`;

const ErrorMessageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const ErrorMessage = styled.span`
  color: var(--secondary-color);
  font-weight: 500;
  font-size: var(--medium-font-size);
`;

function Recipes() {
  const { data: recipes = [], isLoading, error } = useRecipes({});
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 700);

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

  if (isLoading)
    return (
      <LoaderContainer>
        <Loader />
        <LoadingMessage>Loading recipes...</LoadingMessage>
      </LoaderContainer>
    );

  if (error instanceof Error) {
    <>
      <ErrorMessageContainer>
        <Error />
        <ErrorMessage>Error loading recipes: {error.message} </ErrorMessage>
      </ErrorMessageContainer>
    </>;
  }

  return (
    <RecipesWrap>
      <Searchbar onSearch={setSearchQuery} marginTop="50px" />
      {filteredRecipes.length === 0 ? (
        <NoRecipesMessage>
          Couldn't find any recipes matching your search. Maybe try again?
        </NoRecipesMessage>
      ) : (
        <RecipesContainer>
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </RecipesContainer>
      )}
    </RecipesWrap>
  );
}

export default Recipes;
