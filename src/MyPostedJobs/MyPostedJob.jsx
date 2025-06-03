import React, { Suspense, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import JobsList from './JobsList';
import { jobsCreateByPromise } from '../api/jobsApi';

const MyPostedJob = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
             <Suspense>
                <JobsList jobsCreateByPromise={jobsCreateByPromise(user.email)}></JobsList>
             </Suspense>
        </div>
    );
};

export default MyPostedJob;