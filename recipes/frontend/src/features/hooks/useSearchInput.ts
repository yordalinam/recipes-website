import { useState } from "react";

interface UseSearchInputProps {
  onSearch: (query: string) => void;
}

export function useSearchInput({ onSearch }: UseSearchInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onSearch(value);
  };

  const clearInput = () => {
    setInputValue("");
    onSearch("");
  };

  return {
    inputValue,
    handleChange,
    clearInput,
  };
}
