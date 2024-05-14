import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ArticleItem } from "./ArticleItem";

describe("ArticleItem Component", () => {
    const mockArticle = {
        id: 1,
        type: "Test Type",
        title: "Test Article",
        createdAt: "2022-05-12",
        description: "This is a test article description.",
    };

    const mockOnClick = jest.fn();

    it("should render article details correctly", () => {
        render(<ArticleItem articles={mockArticle} onClick={mockOnClick} />);

        const titleElement = screen.getByText(mockArticle.title);
        const createdAtElement = screen.getByText(`DATE: ${mockArticle.createdAt}`);
        const descriptionElement = screen.getByText(mockArticle.description);

        expect(titleElement).toBeInTheDocument();
        expect(createdAtElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
    });

    it("should call onClick function when clicked", () => {
        render(<ArticleItem articles={mockArticle} onClick={mockOnClick} />);

        const articleItem: any = screen.getByText(mockArticle.title).closest('div');
        fireEvent.click(articleItem);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(mockOnClick).toHaveBeenCalledWith(mockArticle.id);
    });
});
