import styled from "styled-components";
import Close from "../../assets/svgs/Close";

interface CloseButtonProps {
  onClick: () => void;
  size?: number;
}

const StyledCloseButton = styled.button<{ size: number }>`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: none;
  //background-color: var(--dark-green);
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
    background-color: var(--dark-green);

    svg {
      fill: var(--secondary-color);
    }
  }
`;

export function CloseButton({ onClick, size = 20 }: CloseButtonProps) {
  return (
    <StyledCloseButton onClick={onClick} size={size} aria-label="Clear">
      <Close />
    </StyledCloseButton>
  );
}
