import { StyledCloseButton } from "./styles";
import Close from "../../../assets/svgs/Close";

interface CloseButtonProps {
  onClick: () => void;
  size?: number;
  "data-testid"?: string;
}

export function CloseButton({ onClick, size = 20 }: CloseButtonProps) {
  return (
    <StyledCloseButton
      onClick={onClick}
      size={size}
      data-testid="close-button"
      aria-label="Clear"
    >
      <Close />
    </StyledCloseButton>
  );
}
