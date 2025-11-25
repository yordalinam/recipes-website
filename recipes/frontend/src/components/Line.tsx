import styled from "styled-components";

interface LineProps {
  backgroundColor?: string;
}
const HorizontalLine = styled.div<LineProps>`
  width: 100%;
  height: 0.05rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--primary-color)"};
  margin: 20px 0;
`;

export function Line({ backgroundColor }: LineProps) {
  return <HorizontalLine backgroundColor={backgroundColor}></HorizontalLine>;
}
