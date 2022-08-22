import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client';

const typeDefs = gql`
  extend type Track {
    numberOfLikes: Int
  }
`;

const client = new ApolloClient({
  uri: 'https://odyssey-lift-off-server.herokuapp.com/',
  cache: new InMemoryCache({
    typePolicies: {
      Track: {
        fields: {
          numberOfLikes: {
            read() {
              return Math.floor(Math.random() * 100); // random number from 0 to 99
            },
          },
        },
      },
    },
  }),
  typeDefs,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
