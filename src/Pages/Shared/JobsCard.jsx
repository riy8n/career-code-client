import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const JobsCard = ({job}) => {
    const {
    title,
    location,
    jobType,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
    _id
  } = job;

  const formattedSalary = `${salaryRange.currency.toUpperCase()} ${salaryRange.min.toLocaleString()} - ${salaryRange.max.toLocaleString()}`;

  return (
    <div className="card w-80 bg-base-100 shadow-md border">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={company_logo} alt="Company Logo" className="w-8 h-8 rounded" />
            <div>
              <h2 className="font-bold text-sm">{company}</h2>
              <div className="flex items-center text-xs text-gray-500">
                <FaMapMarkerAlt className="mr-1" />
                {location}
              </div>
            </div>
          </div>
          <span className="text-green-500 text-xl">⚡</span>
        </div>

        <h3 className="text-md font-semibold mt-2">{title}</h3>

        <div className="flex text-xs text-gray-500 gap-4 mt-1">
          <div className="flex items-center gap-1">
            <FaClock />
            {jobType}
          </div>
          <div>• Apply by {applicationDeadline}</div>
        </div>

        <p className="text-sm mt-2 text-gray-600 line-clamp-2">
          {description}
        </p>

        <div className="flex gap-2 mt-2 flex-wrap">
          {requirements.map((tag) => (
            <div key={tag} className="badge badge-outline badge-sm">
              {tag}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-md font-bold text-blue-600">{formattedSalary}</span>
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-sm btn-primary">View details </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;