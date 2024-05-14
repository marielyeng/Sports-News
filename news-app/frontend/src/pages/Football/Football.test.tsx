import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FArticles } from '../../features/FArticles';
import { FTopStories } from '../../features/FTopStories';
import { Football } from './Football';

jest.mock('../../features/FArticles', () => ({
    FArticles: jest.fn(() => <div data-testid="FArticles" />),
}));

jest.mock('../../features/FTopStories', () => ({
    FTopStories: jest.fn(() => <div data-testid="FTopStories" />),
}));

describe('Football Component', () => {
    it('should render headings correctly', () => {
        render(<Football />);

        expect(screen.getByText(/Football/i)).toBeInTheDocument();
        expect(screen.getByText(/Top Stories/i)).toBeInTheDocument();
    });

    it('should render FArticles and FTopStories with correct props', () => {
        render(<Football />);

        expect(FArticles).toHaveBeenCalledWith({ type: 'football', limit: 3 }, {});
        expect(FTopStories).toHaveBeenCalledWith({ type: 'football' }, {});
    });

    it('should render FArticles and FTopStories components', () => {
        render(<Football/>);

        expect(screen.getByTestId('FArticles')).toBeInTheDocument();
        expect(screen.getByTestId('FTopStories')).toBeInTheDocument();
    });
});
