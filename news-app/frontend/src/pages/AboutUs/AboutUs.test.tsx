import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AboutUs } from './AboutUs';

describe('AboutUs Component', () => {
    it('should render the heading correctly', () => {
        render(<AboutUs />);
        const headingElement = screen.getByText(/About The App/i);
        expect(headingElement).toBeInTheDocument();
        expect(headingElement.tagName).toBe('H1');
    });

    it('should render the main content correctly', () => {
        render(<AboutUs />);
        const mainElement = screen.getByText(/This app is created as a practice program. Showcasing the use of Typescript, GraphQL, and ReactJs./i);
        expect(mainElement).toBeInTheDocument();
        expect(mainElement.tagName).toBe('P');
    });
});
