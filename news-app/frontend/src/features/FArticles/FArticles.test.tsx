import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FArticles } from './FArticles';
import { useGetArticles } from '../../hooks/useGetArticles';
import { useNavigate } from 'react-router-dom';
import { GenericError } from '../../components/GenericError';
import { ArticleItem } from '../../components/ArticleItem';
import { IArticle } from '../../common';

jest.mock('../../hooks/useGetArticles');

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

jest.mock('../../components/GenericError', () => ({
    GenericError: () => <div>Generic Error Component</div>,
}));

jest.mock('../../components/ArticleItem', () => ({
    ArticleItem: ({ articles, onClick }: { articles: IArticle, onClick: () => void }) => (
        <div onClick={onClick}>{articles.title}</div>
    ),
}));

describe('FArticles Component', () => {
    const mockNavigate = jest.fn();
    const mockUseGetArticles = useGetArticles as jest.Mock;
    const mockArticles = {
        articles: [
            { id: 1, title: 'Article 1', createdAt: '', description: '', type: '' },
            { id: 2, title: 'Article 2', createdAt: '', description: '', type: '' },
        ],
    };

    beforeEach(() => {
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render loading state', () => {
        mockUseGetArticles.mockReturnValue({ loading: true, data: null, error: null });

        render(<FArticles type="news" limit={5} />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should render error state', () => {
        mockUseGetArticles.mockReturnValue({ loading: false, data: null, error: true });

        render(<FArticles type="news" limit={5} />);

        expect(screen.getByText('Generic Error Component')).toBeInTheDocument();
    });

    it('should render articles and handles click', () => {
        mockUseGetArticles.mockReturnValue({ loading: false, data: mockArticles, error: null });

        render(<FArticles type="news" limit={5} />);

        const article1 = screen.getByText('Article 1');
        const article2 = screen.getByText('Article 2');

        expect(article1).toBeInTheDocument();
        expect(article2).toBeInTheDocument();

        fireEvent.click(article1);

        expect(mockNavigate).toHaveBeenCalledWith('/article/1');
    });
});
