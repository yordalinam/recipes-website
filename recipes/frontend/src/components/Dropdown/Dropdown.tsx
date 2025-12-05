import styled from "styled-components";
import { type AllRecipes } from "../../api/type";

interface DropdownProps {
  filteredRecipes?: AllRecipes;
  options?: string[];
  query: string;
  type: "name" | "ingredients" | "allergens" | "tags";
  limit?: number;
}

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--primary-color);
  border: 3px solid transparent;
  background-image: linear-gradient(var(--medium-green), var(--medium-green)),
    var(--border-gradient);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  outline: none;
  border-radius: 1rem;
  max-height: 200px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const DropdownScroll = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

const ResultItem = styled.div`
  color: var(--secondary-color);
  font-weight: 500;
  padding: 12px 16px 10px;
  cursor: pointer;
  position: relative;
  border-bottom: 2px solid transparent;
  background-image: linear-gradient(var(--primary-color), var(--primary-color)),
    var(--border-gradient);
  background-origin: border-box;
  background-clip: padding-box, border-box;

  &:hover {
    background-image: linear-gradient(
        var(--tetriary-color),
        var(--tetriary-color)
      ),
      var(--border-gradient);
  }

  &:last-child {
    border-bottom: none;
    background-image: linear-gradient(
      var(--primary-color),
      var(--primary-color)
    );
  }
`;

export function Dropdown({
  filteredRecipes,
  options,
  query,
  type,
  limit = 10,
}: DropdownProps) {
  if (!query) return null;

  const getItems = () => {
    if (type === "name" && filteredRecipes) {
      return filteredRecipes.slice(0, limit);
    }
    if (options && (type === "allergens" || type === "tags")) {
      return options
        .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
        .slice(0, limit);
    }
    if (type === "ingredients" && options) {
      return options
        .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
        .slice(0, limit);
    }
    return [];
  };

  const items = getItems();

  if (items.length === 0) return null;

  return (
    <DropdownContainer>
      <DropdownScroll>
        {items.map((item, idx) => (
          <ResultItem
            key={typeof item === "string" ? item : (item as any)._id || idx}
          >
            {typeof item === "string" ? item : item.name}
          </ResultItem>
        ))}
      </DropdownScroll>
    </DropdownContainer>
  );
}
