import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
     
      <nav className="navbar">
        <h1>HireSphere
       </h1>
        <div className="nav-links">
          <button onClick={() => navigate("/login")} className="nav-btn login-btn">Login</button>
          <button onClick={() => navigate("/register")} className="nav-btn register-btn">Register</button>
          <button onClick={() => navigate("/about")} className="nav-btn login-btn">About</button>
          <button onClick={() => navigate("/contact")} className="nav-btn login-btn">Contact</button>

        </div>
      </nav>

   
      <main className="portal-main">
        <h2 className="portal-title">Choose Your Portal</h2>
        <div className="portal-cards">
         
          <div className="portal-card student-card">
            <h3>Student Portal</h3>
            <p>View job listings, track applications, and check results.</p>
            <button onClick={() => navigate("/login")} className="portal-btn">Enter</button>
          </div>

      
          <div className="portal-card company-card">
            <h3>Company Portal</h3>
            <p>Post jobs, shortlist candidates, and manage recruitment.</p>
            <button onClick={() => navigate("/company")} className="portal-btn">Enter</button>
          </div>

        
          <div className="portal-card admin-card">
            <h3>Admin Portal</h3>
            <p>Manage students, companies, and placement process seamlessly.</p>
            <button onClick={() => navigate("/admin")} className="portal-btn">Enter</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
