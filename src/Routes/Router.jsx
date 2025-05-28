import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/RegisterSingIn/REgister';
import SingIn from '../Pages/RegisterSingIn/SingIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        index:true,
        element:<Home></Home> 

      },
      {

      },
      {
        path:'signin',
        element:<SingIn></SingIn>

      },
      {
        path:"register",
        element: <Register></Register>
      }
    ]
  },
]);

export default router