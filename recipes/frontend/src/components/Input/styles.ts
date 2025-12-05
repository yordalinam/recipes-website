import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 50px;
  margin-bottom: 1px;
`;

export const InputStyled = styled.input`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  width: 18rem;
  padding: 0.6rem;
 border-radius: 1rem;
  border-bottom: 3px solid transparent;
    line-height: 1.5rem;
  font-size: var(--small-font-size);

  border: 3px solid transparent;
  background-image: linear-gradient(var(--primary-color), var(--primary-color)),
    linear-gradient(
      to right,
      var(--dark-green) 0%,
      rgba(9, 46, 14, 0.6) 0%,
      var(--tetriary-color) 100%
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
  outline: none;

  &::placeholder {
    color: var(--secondary-color);
    opacity: 0.6;
    line-height: 1.5rem;
    padding-top: 0;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`;