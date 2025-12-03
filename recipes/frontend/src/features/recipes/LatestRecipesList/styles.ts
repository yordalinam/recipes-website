import styled from "styled-components";

export const CardList = styled.div`
  margin: 50px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Title = styled.div`
  font-size: var(--largest-font-size);
  text-align: center;
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin: 24px 0;
`;

export const LoadingMessage = styled.span`
  color: var(--secondary-color);
  font-weight: 500;
  font-size: var(--medium-font-size);
`;

export const ErrorMessageContainer = styled.div`
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
