
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StudentDashboard.css";

const StudentDashboard = () => {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  const studentData = JSON.parse(localStorage.getItem("student"));
  const email = studentData?.email;

  useEffect(() => {
    if (!email) return;

    const fetchStudent = async () => {
      try {
        const res = await fetch(
          `https://hiresphere-backendrepo.onrender.com/api/student/dashboard?email=${email}`
        );
        const data = await res.json();

        if (data.message) {
          alert(data.message);
          navigate("/login");
          return;
        }

        setStudent(data);
      } catch (err) {
        console.error("Error fetching student data:", err);
        alert("Failed to load dashboard. Please login again.");
        navigate("/login");
      }
    };

    fetchStudent();
  }, [email, navigate]);

  if (!student) {
    return <h2>Loading Student Dashboard...</h2>;
  }

  return (
    <div className="dashboardcontainer">
      <aside className="sidebar">
        <h2>Hiresphere</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li onClick={() => navigate("/jobs")}>Job Listings</li>
          <li>Application Status</li>
          <li>Results</li>
          <li>Profile</li>
          <li onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}>Logout</li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <div className="left">
            <h1>Welcome, {student?.name || "Student"}</h1>
            <p>Roll No: {student?.rollNo || "-"}</p>
          </div>
          <div className="right">
            <img
              src={student?.avatar || "https://i.pravatar.cc/150"}
              alt="Student Avatar"
              className="avatar"
            />
          </div>
        </div>

        <div className="summary-cards">
          <div className="card">
            <h3>{student?.stats?.applications ?? 0}</h3>
            <p>Total Applications</p>
          </div>
          <div className="card">
            <h3>{student?.stats?.interviews ?? 0}</h3>
            <p>Interviews Scheduled</p>
          </div>
          <div className="card">
            <h3>{student?.stats?.offers ?? 0}</h3>
            <p>Offers Received</p>
          </div>
          <div className="card">
            <h3>{student?.stats?.pending ?? 0}</h3>
            <p>Pending Applications</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;

