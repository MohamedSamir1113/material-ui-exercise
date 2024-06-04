import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Layout from './Layout';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, // This denotes the default child route
        element: <Home />,
      },
      {
        path: 'about', // Relative path
        element: <About />,
      },
      {
        path: 'contacts', // Relative path
        element: <Contacts />,
        children: [
          {
            path: 'tab1', // Relative path
            element: <Tab1 />,
          },
          {
            path: 'tab2', // Relative path
            element: <Tab2 />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
