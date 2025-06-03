'use client';

import React, { useEffect, useState } from 'react';
import JobsCard from '../Shared/JobsCard';

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await fetch('http://localhost:3000/jobs', {
          credentials: 'include'
        });

        const data = await res.json();
        setJobs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };

    getJobs();
  }, []);

  if (loading) return <p>Loading hot jobs...</p>;

  return (
    <div>
      <h2>Hot Jobs</h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-1.5 gap-4 '>
          {jobs.map(job => (
         <JobsCard job={job} key={job._id}></JobsCard>
        ))}
      </div>
      
    </div>
  );
};

export default HotJobs;
