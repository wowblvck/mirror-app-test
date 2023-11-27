import { Global, css } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import appRouter from './appRouter';
import 'normalize.css';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');

  body {
    font-family: 'Inter', sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <RouterProvider router={appRouter} fallbackElement={<p>Loading...</p>} />
  </React.StrictMode>
);
