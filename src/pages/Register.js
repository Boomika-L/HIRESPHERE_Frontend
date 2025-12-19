import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmitHandler = async (data) => {
  try {
    const res = await fetch("http://localhost:9000/api/student/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      alert(result.message || "Registration failed");
      return;
    }

    alert(result.message || "Registered successfully");
    navigate("/login");
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};


  return (
    <div className="register-wrapper">
      <div className="register-box">
        <h1 className="title">HireSphere</h1>
        <p className="description">
          Centralized Placement Management System
        </p>

        <form onSubmit={handleSubmit(onSubmitHandler)} className="form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Roll Number</label>
            <input
              {...register("rollNo")}
              type="text"
              placeholder="Enter your roll number"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              {...register("email")}
              type="email"
              placeholder="name@institution.edu"
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="Enter mobile number"
              required
            />
          </div>

          <div className="form-group">
            <label>Degree / Branch</label>
            <input
              {...register("branch")}
              type="text"
              placeholder="B.Tech - Computer Science"
              required
            />
          </div>
           <div className="form-group">
            <label>Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="enter your password"
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Create Account
          </button>

          <div className="footer">
            <span>Already registered?</span>
            <button
              type="button"
              className="link-btn"
              onClick={() => navigate("/login")}
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
