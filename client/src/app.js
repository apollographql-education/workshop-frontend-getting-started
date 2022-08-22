import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles';
import Pages from './pages';

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Pages />
    </Router>
  );
}
