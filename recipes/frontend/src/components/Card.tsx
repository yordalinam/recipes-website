import styled from "styled-components";

interface CardProps {
  backgroundColor?: string;
  color?: string;
  children: React.ReactNode;
}

const Container = styled.div<CardProps>`
  font-size: var(--small-font-size);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.backgroundColor || "var(--primary-color)"};
  color: ${(props) => props.color || "var(--secondary-color)"};
  max-width: 18rem;
`;

function Card({ backgroundColor, color, children }: CardProps) {
  return (
    <Container backgroundColor={backgroundColor} color={color}>
      {children}
    </Container>
  );
}

export default Card;
