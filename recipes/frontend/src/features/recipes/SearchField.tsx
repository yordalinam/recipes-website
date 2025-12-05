import styled from "styled-components";
import { Input } from "../../components/Input/Input";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { useSearchInput } from "../../features/hooks/useSearchInput";
import { type AllRecipes } from "../../api/type";

export const DropdownInputWrapper = styled.div`
  position: relative;
`;

interface SearchFieldProps {
  type: "name" | "ingredients" | "allergens" | "tags";
  query: string;
  onSearch: (value: string) => void;
  options?: string[];
  limit?: number;
  filteredRecipes?: AllRecipes;
}

export function SearchField({
  type,
  query,
  onSearch,
  options,
  limit = 10,
  filteredRecipes,
}: SearchFieldProps) {
  const { inputValue } = useSearchInput({ onSearch });

  const placeholders = {
    name: "Search recipe names...",
    ingredients: "Search ingredients...",
    allergens: "Filter allergens...",
    tags: "Filter tags...",
  } as const;

  return (
    <DropdownInputWrapper>
      <Input
        value={query || inputValue}
        placeholder={placeholders[type]}
        onSearch={onSearch}
      />
      <Dropdown
        type={type}
        query={query}
        options={options}
        filteredRecipes={type === "name" ? filteredRecipes : undefined}
        limit={limit}
      />
    </DropdownInputWrapper>
  );
}
