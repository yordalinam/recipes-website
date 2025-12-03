import { useState } from "react";
import { CloseButton } from "../button/CloseButton/CloseButton";
import { Wrapper, Input } from "./styles";

type SearchbarProps = {
  onSearch: (query: string) => void;
};

export function Searchbar({ onSearch }: SearchbarProps) {
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
    <Wrapper>
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
