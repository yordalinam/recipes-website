import { RecipeCard } from "../RecipeCard/RecipeCard";
import { useRecipes } from "../../../api/endpoints/useAllRecipes";
import { Loader } from "../../../components/Loader/Loader";
import Error from "../../../assets/svgs/Error";
import { getLatestThreeRecipes } from "../../../utils/calculations";
import {
  CardList,
  LoaderContainer,
  LoadingMessage,
  Title,
  ErrorMessageContainer,
  ErrorMessage,
} from "./styles";

export function LatestRecipeList() {
  const { data: recipes, isLoading, error, isError } = useRecipes({});

  if (isLoading)
    return (
      <LoaderContainer>
        <Loader
          width="20px"
          height="20px"
          afterWidth="30px"
          afterHeight="30px"
        />
        <LoadingMessage>Loading recipes...</LoadingMessage>
      </LoaderContainer>
    );

  if (isError) {
    return (
      <ErrorMessageContainer>
        <Error />
        <ErrorMessage>
          Error loading recipes:{" "}
          {error?.message || "Unknown error. Please come back later"}
        </ErrorMessage>
      </ErrorMessageContainer>
    );
  }
  const latestThreeRecipes = getLatestThreeRecipes(recipes);

  return (
    <>
      <Title>
        <span>Our Latest Recipes:</span>
      </Title>
      <CardList>
        {latestThreeRecipes?.map((recipe) => (
          <RecipeCard
            key={recipe._id}
            recipe={recipe}
            backgroundColor="var(--secondary-color)"
            color="var(--dark-green)"
            cookingTimeColor="var(--dark-green)"
            cookingTimeBgColor="var(--secondary-color)"
          />
        ))}
      </CardList>
    </>
  );
}
