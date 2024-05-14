import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FTopStories } from './FTopStories';
import { useGetTopStory } from '../../hooks/useGetTopStories';
import { useNavigate } from 'react-router-dom';
import { GenericError } from '../../components/GenericError';
import { TopStoryItem } from '../../components/TopStoryItem';
import { IArticle } from '../../common/types';

jest.mock('../../hooks/useGetTopStories');

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

jest.mock('../../components/GenericError', () => ({
    GenericError: () => <div>Generic Error Component</div>,
}));

jest.mock('../../components/TopStoryItem', () => ({
    TopStoryItem: ({ articles, onClick }: { articles: IArticle, onClick: () => void }) => (
        <div onClick={onClick}>{articles.title}</div>
    ),
}));

describe('FTopStories Component', () => {
    const mockNavigate = jest.fn();
    const mockUseGetTopStory = useGetTopStory as jest.Mock;

    const mockData = {
        trends: [
            { id: 1, title: 'Top Story 1', createdAt: '', description: '', type: '' },
            { id: 2, title: 'Top Story 2', createdAt: '', description: '', type: '' },
        ],
    };

    beforeEach(() => {
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render loading state', () => {
        mockUseGetTopStory.mockReturnValue({ loading: true, data: null, error: null });

        render(<FTopStories type="news" />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should render error state', () => {
        mockUseGetTopStory.mockReturnValue({ loading: false, data: null, error: true });

        render(<FTopStories type="news" />);

        expect(screen.getByText('Generic Error Component')).toBeInTheDocument();
    });

    it('should render top stories and handles click', () => {
        mockUseGetTopStory.mockReturnValue({ loading: false, data: mockData, error: null });

        render(<FTopStories type="news" />);

        const topStory1 = screen.getByText('Top Story 1');
        const topStory2 = screen.getByText('Top Story 2');

        expect(topStory1).toBeInTheDocument();
        expect(topStory2).toBeInTheDocument();

        fireEvent.click(topStory1);

        expect(mockNavigate).toHaveBeenCalledWith('/article/1');
    });
});
