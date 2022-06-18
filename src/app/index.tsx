/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { GlobalStyle } from '../styles/global-styles';

import { useTranslation } from 'react-i18next';
import MyRoutes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

export function App() {
  const { i18n } = useTranslation();
  return (
    <Router>
      <Helmet
        titleTemplate="sragiacom"
        defaultTitle="sragiacom"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="sragia.com" />
      </Helmet>

      <MyRoutes />
      <GlobalStyle />
    </Router>
  );
}
