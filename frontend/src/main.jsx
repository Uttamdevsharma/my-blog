import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Blogs from './pages/blogs/Blogs.jsx';
import AddBlog from './pages/blogs/addBlog/AddBlog.jsx';
import ManageBlog from './pages/blogs/manage-Blog/ManageBlog.jsx';
import UpdateBlog from './pages/blogs/manage-Blog/UpdateBlog.jsx';
import BlogDetails from './pages/blogs/BlogDetails.jsx';

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
        path : '/blogs/:id',
        element : <BlogDetails/>

      },
      {
        path: '/add-blog',
        element: <AddBlog/>
      },
      {
        path :'/manage-blog',
        element : <ManageBlog/>
      },
      {
        path:'/blogs/edit/:id',
        element:<UpdateBlog/>
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
