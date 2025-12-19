import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css"; 

const Admin = () => {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const email = localStorage.getItem("adminEmail");
        if (!email) {
          navigate("/login");
          return;
        }

        const response = await fetch(
          `https://hiresphere-backendrepo.onrender.com/api/admin/dashboard?email=${email}`
        );

        const result = await response.json();
        setAdmin(result);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchAdmin();
  }, [navigate]);

  if (!admin || !admin.stats) {
    return <h2>Loading Admin Dashboard...</h2>;
  }

  return (
    <div className="dashboardcontainer">
      <aside className="sidebar">
        <h2>Hiresphere Admin</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li onClick={() => navigate("/students")}>Students Management</li>
          <li onClick={() => navigate("/companies")}>Companies Management</li>
          <li onClick={() => navigate("/jobs")}>Job Listings</li>
          <li>Applications</li>
          <li>Results</li>
          <li>Settings</li>
          <li onClick={() => {
            localStorage.removeItem("adminEmail");
            navigate("/login");
          }}>Logout</li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <div className="left">
            <h1>Welcome, {admin.name}</h1>
            <p>Email: {admin.email}</p>
          </div>
        </div>

        <div className="summary-cards">
          <div className="card">
            <h3>{admin.stats.totalStudents}</h3>
            <p>Total Students</p>
          </div>
          <div className="card">
            <h3>{admin.stats.totalCompanies}</h3>
            <p>Total Companies</p>
          </div>
          <div className="card">
            <h3>{admin.stats.totalJobs}</h3>
            <p>Total Jobs</p>
          </div>
          <div className="card">
            <h3>{admin.stats.totalApplications}</h3>
            <p>Total Applications</p>
          </div>
          <div className="card">
            <h3>{admin.stats.offersReleased}</h3>
            <p>Offers Released</p>
          </div>
          <div className="card">
            <h3>{admin.stats.pendingApplications}</h3>
            <p>Pending Applications</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
