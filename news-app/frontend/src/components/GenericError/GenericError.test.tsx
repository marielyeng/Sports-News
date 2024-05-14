import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { GenericError } from "./GenericError";

describe("GenericError Component", () => {
    it("should render error message and reload button", () => {
        render(<GenericError />);

        const errorMessage = screen.getByText("We had a problem loading this page.");
        const tryAgainMessage = screen.getByText("Try again shortly.");
        const reloadButton = screen.getByText("Reload");

        expect(errorMessage).toBeInTheDocument();
        expect(tryAgainMessage).toBeInTheDocument();
        expect(reloadButton).toBeInTheDocument();
    });

    it("should call window.location.reload when reload button is clicked", () => {
        const reloadSpy = jest.spyOn(window.location, 'reload');

        render(<GenericError />);
        const reloadButton = screen.getByText("Reload");
        fireEvent.click(reloadButton);

        expect(reloadSpy).toHaveBeenCalled();
        reloadSpy.mockRestore();
    });
});
