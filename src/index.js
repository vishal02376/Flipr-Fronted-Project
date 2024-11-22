import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home/Home';
import AboutHome from './Components/About/AboutHome';
import Blog from './Components/BlogHome/Blog';

// Ensure you're using React 18 and above for createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

let allRoute = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },

    {
      path: '/Blog',
      element: <Blog/>
    },

    {
      path: '/about-us',
      element: <AboutHome />
    },
  ]
);

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoute}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
