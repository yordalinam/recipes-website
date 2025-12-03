import { Container } from "./styles";

interface CardProps {
  backgroundColor?: string;
  color?: string;
  children: React.ReactNode;
}

function Card({ backgroundColor, color, children }: CardProps) {
  return (
    <Container $backgroundColor={backgroundColor} $color={color}>
      {children}
    </Container>
  );
}

export default Card;
