import { useRecipes } from "../../api/endpoints/useAllRecipes";
import { Searchbar } from "../../components/SearchBar/Searchbar";
import { RecipeCard } from "../../features/recipes/RecipeCard/RecipeCard";
import { useRecipeSearch } from "../../features/hooks/useRecipeSearch";
import { Loader } from "../../components/Loader/Loader";
import Error from "../../assets/svgs/Error";
import {
  LoaderContent,
  LoadingMessage,
  ErrorMessageContainer,
  ErrorMessage,
  RecipesWrap,
  NoRecipesMessage,
  RecipesContainer,
} from "./styles";

export function Recipes() {
  const { data: recipes = [], isLoading, error, isError } = useRecipes({});
  const { setSearchQuery, filteredRecipes } = useRecipeSearch({
    recipes,
  });

  if (isLoading)
    return (
      <LoaderContent>
        <Loader />
        <LoadingMessage>Loading recipes...</LoadingMessage>
      </LoaderContent>
    );

  if (isError) {
    return (
      <ErrorMessageContainer>
        <Error />
        <ErrorMessage>
          Error loading recipes: {error?.message || "Unknown error"}
        </ErrorMessage>
      </ErrorMessageContainer>
    );
  }

  return (
    <RecipesWrap>
      <Searchbar onSearch={setSearchQuery} />
      {filteredRecipes.length === 0 ? (
        <NoRecipesMessage>
          Couldn't find any recipes matching your search. Maybe try again?
        </NoRecipesMessage>
      ) : (
        <RecipesContainer>
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe._id}
              recipe={recipe}
              backgroundColor="var(--primary-color)"
              color="var(--secondary-color)"
              cookingTimeColor="var(--secondary-color)"
              cookingTimeBgColor="var(--primary-color)"
            />
          ))}
        </RecipesContainer>
      )}
    </RecipesWrap>
  );
}
