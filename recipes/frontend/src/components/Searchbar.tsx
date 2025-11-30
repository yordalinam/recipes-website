import { useState } from "react";
import styled from "styled-components";
import { CloseButton } from "./button/CloseButton";

type SearchbarProps = {
  onSearch: (query: string) => void;
  marginTop?: string;
};

const Wrapper = styled.div<{ marginTop?: string }>`
  position: relative;
  margin-top: ${({ marginTop }) => marginTop || 0};
`;

const Input = styled.input`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  width: 18rem;
  padding: 0.6rem;
  border-radius: 1rem;
  line-height: 1.5rem;

  font-size: var(--small-font-size);
  border: 1px solid var(--dark-green);
  outline: none;

  &::placeholder {
    color: var(--secondary-color);
    opacity: 0.6;
    line-height: 1.5rem; /* match line-height of input */
    padding-top: 0; /* optional to fine tune positioning */
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

export function Searchbar({ onSearch, marginTop }: SearchbarProps) {
  const [searchElement, setSearchElement] = useState("");

  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchElement(value);
    onSearch(value);
  }

  const clearInput = () => {
    setSearchElement("");
    onSearch("");
  };

  return (
    <Wrapper marginTop={marginTop}>
      <Input
        type="search"
        value={searchElement}
        placeholder="Search recipes or ingredients..."
        onChange={changeInput}
      />
      {searchElement && <CloseButton onClick={clearInput} />}
    </Wrapper>
  );
}
