import React, { use } from 'react';
import { Link } from 'react-router';

const JobsList = ({jobsCreateByPromise}) => {
    const jobs=use(jobsCreateByPromise)
console.log(jobs)
    return (
        <div>
            <h2>Jobs created by you :{jobs.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Deadline</th>
        <th>View Applications</th>
      </tr>
    </thead>
    <tbody>
         {
          jobs.map((job,index)=>(
            <tr key={job._id}>
            <th>{index+1}</th>
            <td>{job.title}</td>
            <td>{job.deadline}</td>
            <td><Link to={`/applications/${job._id}`}>View Applications</Link></td>
            </tr>
          ))
            }
    </tbody>
    </table>
    </div>
           
        </div>
    );
};

export default JobsList;