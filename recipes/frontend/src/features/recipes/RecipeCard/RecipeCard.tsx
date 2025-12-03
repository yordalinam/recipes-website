import ExampleDish from "../../../assets/imgs/exampledish.png";
import Card from "../../../components/Card/Card.tsx";
import { type SingleRecipe } from "../../../api/type";
import {
  RecipeName,
  ImageContainer,
  RecipeContent,
  CookingTimeContainer,
} from "./styles.ts";

interface RecipeCardProps {
  recipe: SingleRecipe;
  backgroundColor?: string;
  cookingTimeColor?: string;
  cookingTimeBgColor?: string;
  color?: string;
}

export function RecipeCard({
  recipe,
  backgroundColor,
  color,
  cookingTimeColor,
  cookingTimeBgColor,
}: RecipeCardProps) {
  return (
    <Card backgroundColor={backgroundColor} color={color}>
      <ImageContainer src={recipe.image ?? ExampleDish} alt={recipe.name} />
      <RecipeContent>
        <RecipeName>{recipe.name}</RecipeName>
        <CookingTimeContainer
          $cookingTimeColor={cookingTimeColor}
          $cookingTimeBgColor={cookingTimeBgColor}
        >
          {recipe.cookingTime ? `${recipe.cookingTime} min` : "N/A"}
        </CookingTimeContainer>
      </RecipeContent>
    </Card>
  );
}
