import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Home,
  Checkout,
  Information,
  Payment,
  NotFound,
  Success,
} from '../Views';
import { Layout } from '../components/Layout/Layout';
import GlobalStyle from '../styles/GlobalStyle';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/checkout/payment', element: <Payment /> },
  { path: '/checkout/success', element: <Success /> },
  { path: '/checkout/information', element: <Information /> },
  { path: '*', element: <NotFound /> },
]);

export const App = () => (
  <Layout>
    <GlobalStyle />
    <RouterProvider router={router} />
  </Layout>
);
