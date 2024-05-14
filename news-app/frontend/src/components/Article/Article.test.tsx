import React from "react";
import { render, screen } from "@testing-library/react";
import { Article } from "./Article";

describe("Article Component", () => {
    const mockArticle = {
        id: 1,
        type: "football",
        title: "Test Article",
        createdAt: "2022-05-12",
        description: "This is a test article description.",
    };

    it("should render article details correctly", () => {
        render(<Article articles={mockArticle} />);

        const titleElement = screen.getByText(mockArticle.title);
        const createdAtElement = screen.getByText(mockArticle.createdAt);
        const descriptionElement = screen.getByText(mockArticle.description);

        expect(titleElement).toBeInTheDocument();
        expect(createdAtElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
    });
});