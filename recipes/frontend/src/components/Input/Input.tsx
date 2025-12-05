import { CloseButton } from "../button/CloseButton/CloseButton";
import { Wrapper, InputStyled } from "./styles";
import { useSearchInput } from "../../features/hooks/useSearchInput";

type SearchbarProps = {
  onSearch: (query: string) => void;
  isOpen?: boolean;
  placeholder?: string;
  value?: string;
};

export function Input({
  onSearch,
  value = "",
  placeholder = "Search recipes or ingredients...",
}: SearchbarProps) {
  const { inputValue, handleChange, clearInput } = useSearchInput({ onSearch });

  return (
    <Wrapper>
      <InputStyled
        type="search"
        value={value || inputValue}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {inputValue && <CloseButton onClick={clearInput} />}
    </Wrapper>
  );
}
