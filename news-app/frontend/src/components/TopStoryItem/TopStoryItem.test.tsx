import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TopStoryItem } from "./TopStoryItem";

describe("TopStoryItem Component", () => {
    const mockArticle = {
        id: 1,
        type: "Test Type",
        title: "Test Article",
        createdAt: "2022-05-12",
        description: "This is a test article description.",
    };

    const mockOnClick = jest.fn();

    it("should render article title correctly", () => {
        render(<TopStoryItem articles={mockArticle} onClick={mockOnClick} />);

        const titleElement = screen.getByText(mockArticle.title);

        expect(titleElement).toBeInTheDocument();
    });

    it("should call onClick function with article id when clicked", () => {
        render(<TopStoryItem articles={mockArticle} onClick={mockOnClick} />);

        const titleElement = screen.getByText(mockArticle.title);
        fireEvent.click(titleElement);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(mockOnClick).toHaveBeenCalledWith(mockArticle.id);
    });
});
