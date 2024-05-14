import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FArticles } from '../../features/FArticles';
import { FTopStories } from '../../features/FTopStories';
import { Basketball } from './Basketball';

jest.mock('../../features/FArticles', () => ({
    FArticles: jest.fn(() => <div data-testid="FArticles" />),
}));

jest.mock('../../features/FTopStories', () => ({
    FTopStories: jest.fn(() => <div data-testid="FTopStories" />),
}));

describe('Basketball Component', () => {
    it('should render headings correctly', () => {
        render(<Basketball />);

        expect(screen.getByText(/Basketball/i)).toBeInTheDocument();
        expect(screen.getByText(/Top Stories/i)).toBeInTheDocument();
    });

    it('should render FArticles and FTopStories with correct props', () => {
        render(<Basketball />);

        expect(FArticles).toHaveBeenCalledWith({ type: 'basketball', limit: 3 }, {});
        expect(FTopStories).toHaveBeenCalledWith({ type: 'basketball' }, {});
    });

    it('should render FArticles and FTopStories components', () => {
        render(<Basketball />);

        expect(screen.getByTestId('FArticles')).toBeInTheDocument();
        expect(screen.getByTestId('FTopStories')).toBeInTheDocument();
    });
});
