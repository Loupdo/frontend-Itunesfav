import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import SearchBar from "./searchBar";
import { AppProvider } from "../context/context";

describe("SearchBar Component", () => {
  test("renders search bar and allows input", () => {
    render(
      <AppProvider>
        <SearchBar />
      </AppProvider>
    );

    // Check if input field is present
    const inputElement = screen.getByPlaceholderText(/search in/i);
    expect(inputElement).toBeInTheDocument();

    // Simulate typing in the search input
    fireEvent.change(inputElement, { target: { value: "rock music" } });
    expect(inputElement.value).toBe("rock music");
  });
});
