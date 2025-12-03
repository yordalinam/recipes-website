import { StyledLoader } from "./styles";

interface LoaderProps {
  width?: string;
  height?: string;
  afterWidth?: string;
  afterHeight?: string;
}

export function Loader({
  width = "48px",
  height = "48px",
  afterWidth = "56px",
  afterHeight = "56px",
}: LoaderProps) {
  return (
    <StyledLoader
      $width={width}
      $height={height}
      $afterWidth={afterWidth}
      $afterHeight={afterHeight}
    />
  );
}
