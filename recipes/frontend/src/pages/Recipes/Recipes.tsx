import { useRecipes } from "../../api/endpoints/useAllRecipes";
import { RecipeCard } from "../../features/recipes/RecipeCard/RecipeCard";
import { Loader } from "../../components/Loader/Loader";
import Error from "../../assets/svgs/Error";
import { SearchField } from "../../features/recipes/SearchField";
import { useMultiFilter } from "../../features/hooks/useMultiFilter";
import { useRecipeFilters } from "../../features/hooks/useRecipeFilters";
import {
  LoaderContent,
  LoadingMessage,
  ErrorMessageContainer,
  ErrorMessage,
  RecipesWrap,
  NoRecipesMessage,
  RecipesContainer,
  FiltersContainer,
} from "./styles";
import styled from "styled-components";

const InputRecipesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px 24px;
`;

export function Recipes() {
  const { data: recipes = [], isLoading, error, isError } = useRecipes({});
  const { uniqueTags, uniqueAllergens, allIngredients } =
    useRecipeFilters(recipes);
  const { filters, filteredRecipes, updateFilter } = useMultiFilter({
    recipes,
  });
  if (isLoading)
    return (
      <LoaderContent>
        <Loader />
        <LoadingMessage>Loading recipes...</LoadingMessage>
      </LoaderContent>
    );
  if (isError)
    return (
      <ErrorMessageContainer>
        <Error />
        <ErrorMessage>Error loading recipes: {error?.message}</ErrorMessage>
      </ErrorMessageContainer>
    );

  return (
    <RecipesWrap>
      <SearchField
        type="name"
        query={filters.name}
        onSearch={(q) => updateFilter("name", q)}
        filteredRecipes={filteredRecipes}
      />
      <InputRecipesWrap>
        <FiltersContainer>
          <SearchField
            type="ingredients"
            query={filters.ingredients}
            onSearch={(q) => updateFilter("ingredients", q)}
            options={allIngredients}
          />
          <SearchField
            type="allergens"
            query={filters.allergens}
            onSearch={(q) => updateFilter("allergens", q)}
            options={uniqueAllergens}
            limit={5}
          />
          <SearchField
            type="tags"
            query={filters.tags}
            onSearch={(q) => updateFilter("tags", q)}
            options={uniqueTags}
            limit={5}
          />
        </FiltersContainer>

        {filteredRecipes.length === 0 ? (
          <NoRecipesMessage>
            Couldn't find any recipes matching your search.
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
      </InputRecipesWrap>
    </RecipesWrap>
  );
}
