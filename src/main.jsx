import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/about/About';
import Contact from './components/contacts/Contact';
import Header from './components/Header/Header';
import Userss from './components/Users/Userss';
import UserDetails from './components/UserDetails/UserDetails';
import Post from './components/Posts/Post';
import Postss from './components/postss/Postss';
import ErrorMessage from './components/errorMeassge/ErrorMessage';
import photos from './components/Allphotos/Allphoto';
import Allphoto from './components/Allphotos/Allphoto';
import SinglephotoDetails from './components/singlephotoDetails/DetaisPhoto';
import DetaisPhoto from './components/singlephotoDetails/DetaisPhoto';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    errorElement: <ErrorMessage/>,

    children : [
      {
          path: '/about',
          element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/header',
        element: <Header/>
      },
      {
        path: '/Userss',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Userss/>
      },
      {
        path: '/user/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails/>
      },
      {
        path: '/post',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Post/>
      },
      {
        path:'/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <Postss/>
      },
      {
        path: '/photos',
        loader: () => fetch('https://jsonplaceholder.typicode.com/photos'),
        element: <Allphoto></Allphoto>
      },
      {
        path: '/photo/:photoId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/photos/${params.photoId}`),

        element: <DetaisPhoto></DetaisPhoto>
      }

    ]
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
