import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from 'app/components/Header';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
    </>
  );
}
