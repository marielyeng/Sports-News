import './App.css';
import { Provider } from 'react-redux';
import {Link, Router} from 'react-router-dom';
import { store } from 'store';
import { ApolloProvider, useApolloClient } from '@apollo/client';
import React from 'react';
import { AppRoute } from 'AppRoute';


const App: React.FC = () => {
  const client = useApolloClient();
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div>
          <h1>Sports News</h1>
          <ul>
            <li><link href="/"></link></li>
            <li><link href='/basketball'>Basketball</link></li>
            <li><link href='/football'>football</link></li>
            <li><link href='/aboutus'>about Us</link></li>
          </ul>
        </div>
        <AppRoute />
      </Provider>
    </ApolloProvider>
  )
}

export default App;
