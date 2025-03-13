import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegAddressCard, FaUserTie, FaRegCalendarAlt } from "react-icons/fa";

function GovtJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch jobs from Adzuna API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://api.adzuna.com/v1/api/jobs/gb/search/1", // Example Adzuna API endpoint
          {
            params: {
              app_id: "your_app_id", // Replace with your app_id
              app_key: "your_app_key", // Replace with your app_key
              results_per_page: 10,
              what: "government",
            },
          }
        );
        setJobs(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-blue-500 text-white py-16 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Latest Government Jobs</h1>
        </div>
      </section>

      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Latest Jobs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {loading ? (
              <p>Loading jobs...</p>
            ) : jobs.length > 0 ? (
              jobs.map((job) => (
                <div key={job.id} className="bg-white p-8 rounded-lg shadow-md text-left">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500">{job.title}</h3>
                  <div className="text-gray-700 mb-2 flex items-center">
                    <FaRegAddressCard className="mr-2" />
                    <span>{job.location.display_name}</span>
                  </div>
                  <div className="text-gray-700 mb-2 flex items-center">
                    <FaUserTie className="mr-2" />
                    <span>{job.contract_time}</span>
                  </div>
                  <div className="text-gray-700 mb-4 flex items-center">
                    <FaRegCalendarAlt className="mr-2" />
                    <span>Posted: {new Date(job.created).toLocaleDateString()}</span>
                  </div>
                  <a
                    href={job.redirect_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              ))
            ) : (
              <p>No jobs available at the moment.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default GovtJobs;
