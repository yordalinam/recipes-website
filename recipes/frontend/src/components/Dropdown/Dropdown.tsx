import styled from "styled-components";
import { type AllRecipes } from "../../api/type";

interface DropdownProps {
  filteredRecipes: AllRecipes;
  searchQuery: string;
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
  overflow: hidden; /* ✅ Clips scrollbar to rounded corners */
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

export function Dropdown({ filteredRecipes, searchQuery }: DropdownProps) {
  if (!searchQuery || filteredRecipes.length === 0) return null;

  return (
    <DropdownContainer>
      <DropdownScroll>
        {filteredRecipes.map((recipe) => (
          <ResultItem key={recipe._id}>{recipe.name}</ResultItem>
        ))}
      </DropdownScroll>
    </DropdownContainer>
  );
}
