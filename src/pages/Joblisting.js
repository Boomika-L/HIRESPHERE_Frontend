import React, { useState, useEffect } from "react";
import "./../styles/Joblisting.css";

const JobListing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("/joblist.json"); 
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching joblist data:", error);
      }
    };

    fetchApi();
  }, []);

  if (!data.length) {
    return <h2>Loading Jobs...</h2>;
  }

  return (
    <div className="joblisting">
      <div className="header">
        <h1>HireSphere</h1>
        <p>Centralized Placement Management System</p>
      </div>

      <div className="jobcontainer">
        <h2>Jobs Available Now</h2>

        <div className="jobcards">
          {data.map((job) => (
            <div className="jobcard" key={job.id}>
              <h3>{job.company}</h3>
              <p><strong>Role:</strong> {job.role}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Package:</strong> {job.package}</p>

              <button
                disabled={job.status !== "Open"}
                className={job.status === "Open" ? "apply-btn" : "closed-btn"}
              >
                {job.status === "Open" ? "Apply Now" : "Closed"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
