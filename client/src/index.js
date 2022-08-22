import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles';
import Pages from './pages';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <Pages />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
