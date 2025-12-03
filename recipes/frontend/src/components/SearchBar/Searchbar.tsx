import { CloseButton } from "../button/CloseButton/CloseButton";
import { Wrapper, Input } from "./styles";
import { useSearchInput } from "../../features/hooks/useSearchInput";

type SearchbarProps = {
  onSearch: (query: string) => void;
};

export function Searchbar({ onSearch }: SearchbarProps) {
  const { inputValue, handleChange, clearInput } = useSearchInput({ onSearch });

  return (
    <Wrapper>
      <Input
        type="search"
        value={inputValue}
        placeholder="Search recipes or ingredients..."
        onChange={handleChange}
      />
      {inputValue && <CloseButton onClick={clearInput} />}
    </Wrapper>
  );
}
