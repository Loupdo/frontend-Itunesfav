import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import CreateMediaCard from "../component/createMediaCard";
import { AppProvider } from "../context/context";

const mockItem = {
  kind: "song",
  trackName: "Test Song",
  artistName: "Test Artist",
  artworkUrl100: "https://example.com/image.jpg",
  releaseYear: 2023,
  trackId: 12345,
};

describe("CreateMediaCard Component", () => {
  test("renders media card and toggles favorite state", () => {
    render(
      <AppProvider>
        <CreateMediaCard item={mockItem} />
      </AppProvider>
    );

    // Check if the media card is rendered
    expect(screen.getByText(/Test Song/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Artist/i)).toBeInTheDocument();

    // Click "Add to Favorite" button
    const favButton = screen.getByText(/add to favorite/i);
    fireEvent.click(favButton);

    // The button should now show "Remove from Favorite"
    expect(screen.getByText(/remove from favorite/i)).toBeInTheDocument();
  });
});
