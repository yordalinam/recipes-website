import styled from "styled-components";

export const Container = styled.div<{ $backgroundColor?: string; $color?: string }>`
  position: relative;
  font-size: var(--small-font-size);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$backgroundColor || "var(--primary-color)"};
  color: ${(props) => props.$color || "var(--secondary-color)"};
  max-width: 18rem;
  min-height: 13rem;
`;