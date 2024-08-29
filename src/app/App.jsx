import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from '../pages/Main';
import Test from '../pages/Test';

function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/test',
    element: <Test />,
  },
]);

export default App;
