import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useParams } from 'react-router-dom';
import { ArticlePage } from './Article';
import { useGetArticle } from '../../hooks/useGetArticle';
import { GenericError } from '../../components/GenericError';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));

jest.mock('../../hooks/useGetArticle');
jest.mock('../../components/GenericError', () => ({
    GenericError: () => <div>Generic Error Component</div>,
}));
jest.mock('./Article', () => ({
    Article: ({ articles }: { articles: any }) => <div>Article Component: {articles.title}</div>,
}));

describe('ArticlePage Component', () => {
    const mockArticleData = {
        article: {
            id: 1,
            title: "Test Article",
            content: "This is a test article.",
        },
    };

    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({ id: '1' });
    });

    it('should render loading state', () => {
        (useGetArticle as jest.Mock).mockReturnValue({ loading: true, data: undefined, error: undefined });

        render(<ArticlePage />);

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    it('should render Generic Error when error is encountered', () => {
        (useGetArticle as jest.Mock).mockReturnValue({ loading: false, data: undefined, error: true });

        render(<ArticlePage />);

        expect(screen.getByText(/Generic Error Component/i)).toBeInTheDocument();
    });

    it('should render article data on success', () => {
        (useGetArticle as jest.Mock).mockReturnValue({ loading: false, data: mockArticleData, error: undefined });

        render(<ArticlePage />);

        expect(screen.getByText(/Article/i)).toBeInTheDocument();
        expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
        expect(screen.getByText(/Article Component: Test Article/i)).toBeInTheDocument();
    });
});
