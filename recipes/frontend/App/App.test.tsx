import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../src/api/queryClient";
import App from "./App";

describe("App", () => {
  it("renders the App component", () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </MemoryRouter>
    );
  });
});
