import mainImage from "../assets/imgs/main.png";
import Ballon from "../assets/svgs/Balloon";
import styled from "styled-components";
import { LatestRecipeList } from "../features/recipes/LatestRecipesList";
//import Heart from "../assets/svgs/Heart";

const WrapHome = styled.div`
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 24px;
`;

const SVGContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: 30rem;
`;

const WelcomeText = styled.p`
  font-size: var(--medium-font-size);
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 20rem;
  max-height: 20rem;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 400;
  margin-top: -1rem;
  margin-bottom: 0;
`;

function Home() {
  return (
    <>
      <WrapHome>
        <MainImage src={mainImage} loading="lazy" />
        <SVGContainer>
          <Ballon />
        </SVGContainer>
        <WelcomeText>
          Hey there! So glad you stopped by! Healthy cooking can be simple,
          tasty, and fun! Here, you'll find plenty of delicious recipes that
          make taking care of yourself feel like a treat!
        </WelcomeText>
        {/* <div>Recipe of the day💗</div>
        <div>Our Newest Recipes</div>
        <div>Most Popular Recipes</div> */}
      </WrapHome>
      <LatestRecipeList></LatestRecipeList>
    </>
  );
}

export default Home;
