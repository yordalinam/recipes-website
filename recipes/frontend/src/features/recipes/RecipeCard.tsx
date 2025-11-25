import styled from "styled-components";
import ExampleDish from "../../assets/imgs/exampledish.png";
import { Line } from "../../components/Line";
import { type Recipe } from "../../api/api";

interface RecipeCardProps {
  recipe: Recipe;
}

const Container = styled.div`
  font-size: var(--small-font-size);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  //margin: 50px 0;
  padding: 1rem;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  max-width: 18rem;
  border-radius: 1rem;
  border: 2px solid var(--dark-green);
`;

const RecipeName = styled.span`
  font-size: var(--medium-font-size);
  font-weight: 500;
  text-transform: uppercase;
`;

const ImageContainer = styled.img`
  width: 18rem;
  max-height: 20rem;
`;

const RecipeDescription = styled.div`
  max-height: 70px;
  overflow-y: auto;
`;

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Container>
      <RecipeName>{recipe.name}</RecipeName>
      <Line />
      <ImageContainer src={recipe.image ?? ExampleDish} alt={recipe.name} />
      <Line />
      <RecipeDescription>
        {recipe.description ?? "No description available"}
      </RecipeDescription>
      <Line />
      <div>Servings: {recipe.servings ?? "N/A"}</div>
      <div>
        Cooking time: {recipe.cookingTime ? `${recipe.cookingTime} min` : "N/A"}
      </div>
      <div>Author: {recipe.author}</div>
      <div>View Recipe</div>
    </Container>
  );
}
