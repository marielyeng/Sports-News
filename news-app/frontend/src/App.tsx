import { Provider } from 'react-redux';
import { store } from './store';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { AppRoute } from './AppRoute';
import { useApolloClient } from './hooks/useApolloClient';
import styled from 'styled-components';

const App: React.FC = () => {
  const client = useApolloClient();
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Main>
          <Heading>Sports News</Heading>
          <List>
            <Item><Link href="/">Home</Link></Item>
            <Item><Link href='/basketball'>Basketball</Link></Item>
            <Item><Link href='/football'>Football</Link></Item>
            <Item><Link href='/aboutus'>About Us</Link></Item>
          </List>
        </Main>
        <AppRoute />
      </Provider>
    </ApolloProvider>
  )
}

const Heading = styled.h1`
  padding: 2px;
  margin: 16px;
`;

const Link = styled.a`
  text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
`;

const Item = styled.li`
    padding-left: 24px;
    font-size: 20px;
`;

const List = styled.ul`
  margin: 16px;
  list-style-type: none;
  text-decoration: none;
  display: flex;
  justify-content: space-between;

`;

const Main = styled.div`
    background-color: #e0ffcd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px 8px gray;
   
`;
export default App;
