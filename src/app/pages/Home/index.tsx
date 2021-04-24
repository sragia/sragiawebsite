import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Logo } from './components/Logo/Logo';

export function Home() {
  return (
    <>
      <Helmet>
        <title>sragiacom</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Logo />
    </>
  );
}
