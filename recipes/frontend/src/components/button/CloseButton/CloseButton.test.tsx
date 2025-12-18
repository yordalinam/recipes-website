import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { CloseButton } from "./CloseButton";

const mockOnClick = vi.fn();
const user = userEvent.setup();

describe("CloseButton", () => {
  it("renders CloseButton with default size", () => {
    render(<CloseButton onClick={mockOnClick} />);
    expect(screen.getByTestId("close-button")).toBeInTheDocument();
  });

  it("renders CloseButton with custom size", () => {
    render(<CloseButton onClick={mockOnClick} size={30} />);
    expect(screen.getByTestId("close-button")).toHaveStyle(
      "width: 30px; height: 30px"
    );
  });

  it("calls onClick when button is clicked", async () => {
    render(<CloseButton onClick={mockOnClick} />);
    await user.click(screen.getByTestId("close-button"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
