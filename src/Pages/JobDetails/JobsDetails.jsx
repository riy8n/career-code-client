import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { Link, useLoaderData } from 'react-router';

const JobsDetails = () => {
    const job =useLoaderData()
    console.log(job)
      const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
    _id
  } = job;

  const currencySymbols = {
    bdt: '৳',
    usd: '$',
    eur: '€'
  };
  const salary = `${currencySymbols[salaryRange.currency] || ''}${salaryRange.min} - ${salaryRange.max}`;

    return (
         <div className="max-w-3xl mx-auto p-4">
      <div className="card bg-base-100 shadow-md border">
        <div className="card-body">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="text-sm text-gray-500">{company}</p>
            </div>
           
          </div>

          {/* Image */}

          <img src={company_logo} alt="Team" className="w-full h-48 object-cover rounded-xl my-4" />

          {/* Overview */}
          <div className="border rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Overview</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <p><strong>Category:</strong> {category}</p>
              <p><strong>Job Type:</strong> {jobType}</p>
              <p><strong>Salary:</strong> {salary}</p>
              <p><strong>Deadline:</strong> {applicationDeadline}</p>
              <p><strong>Location:</strong> {location}</p>
              <p><strong>HR Contact:</strong> <a href={`mailto:${hr_email}`} className="text-blue-600">{hr_name}</a></p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700">About the Job</h3>
            <p className="text-sm mt-1">{description}</p>
          </div>

          {/* Responsibilities */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700">Responsibilities</h3>
            <ul className="list-disc list-inside text-sm ">
              {responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-4">
            <h3 className="font-semibold ">Requirements</h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {requirements.map((req, idx) => (
                <span key={idx} className="badge badge-outline badge-sm">{req}</span>
              ))}
            </ul>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-between items-center mt-4">
            <div className="space-x-2">
              <Link to={`/jobapply/${_id}`} className="btn btn-primary btn-sm">Apply Now</Link>
              <button className="btn btn-outline btn-sm">Save Job</button>
            </div>
            <div className="text-sm text-gray-400">Share: <span><FiFacebook></FiFacebook></span></div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default JobsDetails;