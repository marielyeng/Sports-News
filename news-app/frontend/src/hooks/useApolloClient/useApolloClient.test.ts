import { renderHook } from '@testing-library/react-hooks';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useApolloClient } from './useApolloClient'; // Adjust the import path as needed
import { config } from '../../config';

jest.mock('@apollo/client', () => ({
    ApolloClient: jest.fn(),
    InMemoryCache: jest.fn(),
}));

jest.mock('../../config', () => ({
    GRAPHQL_URI: 'http://mocked-graphql-uri.com',
}));

describe('useApolloClient', () => {
    test('should initialize Apollo Client with correct configuration', () => {
        renderHook(() => useApolloClient());

        expect(ApolloClient).toHaveBeenCalledWith({
            uri: 'http://mocked-graphql-uri.com',
            cache: expect.any(InMemoryCache),
        });
    });
});
