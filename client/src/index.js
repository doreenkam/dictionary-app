import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkModeProvider } from './context/DarkModeContext';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// apollo client set up
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </ApolloProvider>
);
