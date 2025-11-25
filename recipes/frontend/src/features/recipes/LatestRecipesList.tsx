import styled from "styled-components";
import { RecipeCard } from "./RecipeCard";
import { useRecipes } from "../../api/hooks/useAllRecipes";

const CardList = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Title = styled.div`
  font-size: 34px;
  text-align: center;
  margin-bottom: 50px;
`;

export function LatestRecipeList() {
  const { data: recipes, isLoading, isError } = useRecipes({});

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading recipes</div>;

  const latestThreeRecipes = recipes
    ?.slice()
    .sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 3);

  return (
    <>
      <Title>
        <span>Our Latest Recipes:</span>
      </Title>
      <CardList>
        {latestThreeRecipes?.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </CardList>
    </>
  );
}
