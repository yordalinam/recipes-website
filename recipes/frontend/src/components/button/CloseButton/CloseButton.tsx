import { StyledCloseButton } from "./styles";
import Close from "../../../assets/svgs/Close";

interface CloseButtonProps {
  onClick: () => void;
  size?: number;
}

export function CloseButton({ onClick, size = 20 }: CloseButtonProps) {
  return (
    <StyledCloseButton onClick={onClick} size={size} aria-label="Clear">
      <Close />
    </StyledCloseButton>
  );
}
