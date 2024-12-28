import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ParallaxProvider } from 'react-scroll-parallax';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  </React.StrictMode>
);
