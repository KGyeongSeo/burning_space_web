import './global.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Blog from '/src/pages/Blog';
import Main from '/src/pages/Main';
import Project from '/src/pages/Project';

import { RouterPath } from './path';

const router = createBrowserRouter([
  {
    path: RouterPath.main.url,
    element: <Main />,
  },
  {
    path: RouterPath.blog.url,
    element: <Blog />,
  },
  {
    path: RouterPath.project.url,
    element: <Project />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
