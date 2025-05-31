import React, { Suspense, useContext } from 'react';
import ApplicationsStats from './ApplicationsStats';
import ApplicationList from './ApplicationList';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { myApplicationsPromise } from '../api/applicationsApi';
const MyApplications = () => {
    const {user}=useContext(AuthContext)
    return (
    
        <div>
           <ApplicationsStats></ApplicationsStats>
            <Suspense fallback={'loading your applications'}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;