import styled from "styled-components";

export const RecipeName = styled.span`
  font-size: var(--medium-font-size);
  font-weight: 500;
  text-transform: uppercase;
`;

export const ImageContainer = styled.img`
  width: 16rem;
  min-height: 11rem;
`;

export const RecipeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

interface CookingTimeContainerProps {
  $cookingTimeColor?: string;
  $cookingTimeBgColor?: string;
}

export const CookingTimeContainer = styled.div<CookingTimeContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 3px;
  top: 3px;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  padding: 0;
  background-color: ${(props) =>
    props.$cookingTimeBgColor || "var(--secondary-color)"};
  color: ${(props) => props.$cookingTimeColor || "var(--primary-color)"};
  font-size: 0.7rem;
  font-weight: 500;
`;
