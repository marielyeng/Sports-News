import React from 'react';
import { render, screen } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { store } from './store';
import { useApolloClient } from './hooks/useApolloClient';

jest.mock('./hooks/useApolloClient');
jest.mock('./AppRoute', () => ({
  AppRoute: () => <div>App Route Component</div>,
}));

const mockUseApolloClient = useApolloClient as jest.Mock;

describe('App Component', () => {
  beforeEach(() => {
    mockUseApolloClient.mockReturnValue({
      uri: 'http://mocked-graphql-uri.com',
      cache: {},
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the heading', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Sports News')).toBeInTheDocument();
  });

  test('renders the navigation links', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Basketball')).toBeInTheDocument();
    expect(screen.getByText('Football')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  test('renders the AppRoute component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('App Route Component')).toBeInTheDocument();
  });
});
