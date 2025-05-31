import React, { use, useContext } from 'react';
import JobApplicationsRow from './JobApplicationsRow';

const ApplicationList = ({myApplicationsPromise}) => {
     const applications = use(myApplicationsPromise);
    return (
         <div>
            <h3 className="text-3xl">Jobs Applied so far:{applications.length} </h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <JobApplicationsRow
                                key={application._id}
                                index ={index}
                                application={application}
                            ></JobApplicationsRow>)
                        }
                    </tbody>
                    
                </table>
            </div>

        </div>
    );
};

export default ApplicationList;