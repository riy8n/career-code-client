
// export default router
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
import AddJob from '../Pages/AddJob/AddJob';
import MyPostedJob from '../MyPostedJobs/MyPostedJob';
import ViewApplications from '../ViewApplications/ViewApplications';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'jobs/:id',
        element: <JobsDetails />,
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: 'signin',
        element: <SingIn />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: 'jobapply/:id',
        element: (
          <PrivateRoutes>
            <JobsApply />
          </PrivateRoutes>
        )
      },
      {
        path: 'myApplications',
        element: (
          <PrivateRoutes>
            <MyApplications />
          </PrivateRoutes>
        )
      },
      {
        path: 'applications/:job_id',
        element: (
          <PrivateRoutes>
            <ViewApplications />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/applications/job/${params.job_id}`)
      },
      {
        path: 'addJob',
        element: (
          <PrivateRoutes>
            <AddJob />
          </PrivateRoutes>
        )
      },
      {
        path: 'myPostedJob',
        element: (
          <PrivateRoutes>
            <MyPostedJob />
          </PrivateRoutes>
        )
      },
    ]
  }
]);

export default router;
