import styled from "styled-components";

export const StyledCloseButton = styled.button<{ size: number }>`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    background-color: var(--tetriary-color);
  }
`;