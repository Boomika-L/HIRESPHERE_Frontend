import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About HireSphere</h1>

      <section className="about-section">
        <p>
          <strong>HireSphere</strong> is a centralized Placement Management
          System designed to simplify and streamline the campus recruitment
          process for students, placement administrators, and recruiting
          companies.
        </p>
      </section>

      <section className="about-section">
        <h2>Problem Statement</h2>
        <p>
          Traditional placement processes often rely on manual tracking and
          scattered communication channels. This leads to missed opportunities,
          lack of transparency, and difficulty in managing recruitment data
          efficiently.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Solution</h2>
        <p>
          HireSphere provides a single platform where job opportunities,
          applications, and recruitment updates are managed efficiently with
          role-based access and real-time tracking.
        </p>
      </section>

      <section className="about-section">
        <h2>User Roles</h2>
        <ul>
          <li>
            <strong>Students:</strong> View job listings, apply for positions,
            and track application status.
          </li>
          <li>
            <strong>Placement Admin:</strong> Manage students, recruiters, and
            monitor placement progress.
          </li>
          <li>
            <strong>Recruiters:</strong> Post job openings and shortlist
            candidates.
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Objectives</h2>
        <ul>
          <li>Improve transparency in placement activities</li>
          <li>Reduce manual administrative workload</li>
          <li>Enable real-time updates for students and recruiters</li>
          <li>Centralize placement-related information</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Benefits</h2>
        <ul>
          <li>Efficient and organized recruitment process</li>
          <li>Time-saving for students and placement officers</li>
          <li>Easy access to placement data</li>
          <li>Improved student engagement</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Technology Overview</h2>
        <p>
          The frontend of HireSphere is built using React, following modern UI
          design principles. The system is designed to be scalable and easily
          extendable with backend services and databases.
        </p>
      </section>

      <section className="about-section">
        <h2>Future Enhancements</h2>
        <ul>
          <li>Resume upload and verification</li>
          <li>Interview scheduling system</li>
          <li>Placement analytics dashboard</li>
          <li>Email and notification alerts</li>
        </ul>
      </section>

      <section className="about-section note">
        <p>
          This project is developed as an academic placement management system
          to demonstrate real-world application development using modern web
          technologies.
        </p>
      </section>
    </div>
  );
};

export default About;
