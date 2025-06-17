// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Page2Main from './page2/Page2Main.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // wraps all routes with Lenis
    children: [
      { path: "/", element: <App /> },
      { path: "/portfolio", element: <Page2Main /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
