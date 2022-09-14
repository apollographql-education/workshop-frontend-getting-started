import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://workshop-catstronauts-api.herokuapp.com/',
  cache: new InMemoryCache({
    // typePolicies: {
    //   Track: {
    //     fields: {
    //       numberOfLikes: {
    //         read() {
    //           return 42; // hard-coded number
    //         },
    //       },
    //     },
    //   },
    // },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
