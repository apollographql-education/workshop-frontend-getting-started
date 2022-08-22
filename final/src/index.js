import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles';
import Pages from './pages';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://odyssey-lift-off-server.herokuapp.com/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyles />
        <Pages />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
