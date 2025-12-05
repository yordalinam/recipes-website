import styled from "styled-components";

export const RecipesWrap = styled.div`
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RecipesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //margin: 50px 24px;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const NoRecipesMessage = styled.div`
  color: var(--tetriary-color);
  font-weight: 400;
  margin: 30px 0;
`;

export const LoaderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const LoadingMessage = styled.span`
  color: var(--secondary-color);
  font-weight: 500;
  font-size: var(--medium-font-size);
`;

export const ErrorMessageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const ErrorMessage = styled.span`
  color: var(--secondary-color);
  font-weight: 500;
  font-size: var(--medium-font-size);
`;

export const DropdownInputWrapper = styled.div`
  position: relative;
`;

export const FiltersContainer = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
`;