import { HorizontalLine } from "./styles";

interface LineProps {
  backgroundColor?: string;
}

export function Line({ backgroundColor }: LineProps) {
  return <HorizontalLine $backgroundColor={backgroundColor}></HorizontalLine>;
}
