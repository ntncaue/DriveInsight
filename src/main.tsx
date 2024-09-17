import React from 'react'
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './routes/Error/Error';
import Home from './routes/Home/Home';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);