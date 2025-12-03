import mainImage from "../../assets/imgs/main.png";
import Ballon from "../../assets/svgs/Balloon";
import {
  WrapHome,
  Intro,
  MainImage,
  SVGContainer,
  WelcomeText,
} from "./styles";
import { LatestRecipeList } from "../../features/recipes/LatestRecipesList/LatestRecipesList";

function Home() {
  return (
    <>
      <WrapHome>
        <Intro>
          <MainImage src={mainImage} loading="lazy" />
          <SVGContainer>
            <Ballon />
          </SVGContainer>
          <WelcomeText>
            Hey there! So glad you stopped by! Healthy cooking can be simple,
            tasty, and fun! Here, you'll find plenty of delicious recipes that
            make taking care of yourself feel like a treat!
          </WelcomeText>
        </Intro>

        {/* <div>Recipe of the day💗</div>
        <div>Our Newest Recipes</div>
        <div>Most Popular Recipes</div> */}
        <LatestRecipeList></LatestRecipeList>
      </WrapHome>
    </>
  );
}

export default Home;
