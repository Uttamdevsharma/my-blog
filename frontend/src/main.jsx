import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Blogs from './pages/blogs/Blogs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element : <Home/>
      },
      {
        path: '/blogs',
        element : <Blogs/>
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
