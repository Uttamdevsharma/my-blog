import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element : <div>Home</div>
      },
      {
        path: '/blogs',
        element : <div>Blogs</div>
      },
      {
        path: '/about',
        element : <div>About page</div>
      },
      {
        path: '/contact',
        element : <div>contact page</div>
      },

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
