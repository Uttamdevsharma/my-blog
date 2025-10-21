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
import { Provider } from 'react-redux';
import store from './redux/store.js';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';


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
        path: '/login',
        element : <Login/>
      },
      {
        path: '/register',
        element: <Register/>
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
        element:(
           <ProtectedRoute>
             <AddBlog/>
           </ProtectedRoute>
        ),
      },
      {
        path :'/manage-blog',
        element : (
          <ProtectedRoute>
            <ManageBlog/>
          </ProtectedRoute>
        ) 
      },
      {
        path:'/blogs/edit/:id',
        element:(
          <ProtectedRoute>
            <UpdateBlog/>
          </ProtectedRoute>
        )
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
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
