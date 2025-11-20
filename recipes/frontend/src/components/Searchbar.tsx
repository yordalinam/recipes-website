import { useState } from "react";

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

  return (
    <input
      type="search"
      value={searchElement}
      placeholder="Search recipes or ingredients"
      onChange={changeInput}
    />
  );
}
