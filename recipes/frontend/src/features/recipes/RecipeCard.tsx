import styled from "styled-components";
import ExampleDish from "../../assets/imgs/exampledish.png";
//import { Line } from "../../components/Line";
import Card from "../../components/Card";
import { type SingleRecipe } from "../../api/api";

interface RecipeCardProps {
  recipe: SingleRecipe;
}

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
    <Card>
      {/* <Line /> */}
      <ImageContainer src={recipe.image ?? ExampleDish} alt={recipe.name} />
      {/* <Line /> */}
      {/* <RecipeDescription>
        {recipe.description ?? "No description available"}
      </RecipeDescription> */}
      {/* <Line /> */}
      <RecipeName>{recipe.name}</RecipeName>
      <div>Servings: {recipe.servings ?? "N/A"}</div>
      <div>
        Cooking time: {recipe.cookingTime ? `${recipe.cookingTime} min` : "N/A"}
      </div>
      <div>Author: {recipe.author}</div>
      {/* <div>View Recipe</div> */}
    </Card>
  );
}
