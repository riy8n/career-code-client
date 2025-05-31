import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/RegisterSingIn/REgister';
import SingIn from '../Pages/RegisterSingIn/SingIn';
import JobsDetails from '../Pages/JobDetails/JobsDetails';
import PrivateRoutes from '../Routes/PrivateRoutes';
import JobsApply from '../Pages/JobsApply/JobsApply';
import MyApplications from '../MyApplications/MyApplications';

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
        path:'jobs/:id',
        element:<JobsDetails></JobsDetails>,
        loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)

      },
      {
        path:'signin',
        element:<SingIn></SingIn>

      },
      {
        path:"register",
        element: <Register></Register>
      },
      {
        path:'jobapply/:id',
        element:<PrivateRoutes>
          <JobsApply></JobsApply>
        </PrivateRoutes>
      },
      {
        path: 'myApplications',
        element: <PrivateRoutes>
          <MyApplications></MyApplications>
        </PrivateRoutes>
      }
    ]
  },
]);

export default router