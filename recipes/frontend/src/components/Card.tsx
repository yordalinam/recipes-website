import styled from "styled-components";

const Container = styled.div`
  font-size: var(--small-font-size);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // padding: 1rem;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  max-width: 18rem;
  //border-radius: 1rem;
  border: 2px solid var(--dark-green);
`;

function Card({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default Card;
