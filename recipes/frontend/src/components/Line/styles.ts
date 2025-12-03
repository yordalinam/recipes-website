import styled from "styled-components";

export const HorizontalLine = styled.div<{$backgroundColor?: string}>`
  width: 100%;
  height: 0.05rem;
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "var(--primary-color)"};
  margin: 20px 0;
`;