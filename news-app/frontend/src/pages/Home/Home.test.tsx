import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FArticles } from '../../features/FArticles';
import { FTopStories } from '../../features/FTopStories';
import { Home } from './Home';

jest.mock('../../features/FArticles', () => ({
    FArticles: jest.fn(() => <div data-testid="FArticles" />),
}));

jest.mock('../../features/FTopStories', () => ({
    FTopStories: jest.fn(() => <div data-testid="FTopStories" />),
}));

describe('Home Component', () => {
    it('should render headings correctly', () => {
        render(<Home/>);

        expect(screen.getByText(/Latest Articles/i)).toBeInTheDocument();
        expect(screen.getByText(/Top Stories/i)).toBeInTheDocument();
    });

    it('should render FArticles and FTopStories with correct props', () => {
        render(<Home />);

        expect(FArticles).toHaveBeenCalledWith({limit: 3 }, {});
        expect(FTopStories).toHaveBeenCalled();
    });

    it('should render FArticles and FTopStories components', () => {
        render(<Home/>);

        expect(screen.getByTestId('FArticles')).toBeInTheDocument();
        expect(screen.getByTestId('FTopStories')).toBeInTheDocument();
    });
});
