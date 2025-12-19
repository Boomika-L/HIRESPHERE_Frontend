
import React from "react";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmitHandler = async (data) => {
    try {
      const url =
        data.role === "admin"
          ? "https://hiresphere-backendrepo.onrender.com/api/admin/login"
          : "https://hiresphere-backendrepo.onrender.com/api/student/login";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      const result = await res.json();
      console.log("Login result:", result);

      if (!res.ok) {
        alert(result.message || "Login failed");
        return;
      }

      // clear previous data
      localStorage.clear();

      if (data.role === "admin" && result.admin) {
        localStorage.setItem("admin", JSON.stringify(result.admin));
        localStorage.setItem("role", "admin");
        alert(result.message);
        navigate("/admin");
      } else if (data.role === "student" && result.student) {
        localStorage.setItem("student", JSON.stringify(result.student));
        localStorage.setItem("role", "student");
        alert(result.message);
        navigate("/student");
      } else {
        alert("Login data not received from server");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1 className="title">HireSphere</h1>
        <p className="description">Centralized Placement Management System</p>

        <form onSubmit={handleSubmit(onSubmitHandler)} className="form">
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
            <label>Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <label>Login As</label>
            <select {...register("role")} required>
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="btn-login">
            Sign In
          </button>

          <div className="footer">
            <span>New user?</span>
            <button
              type="button"
              className="link-btn"
              onClick={() => navigate("/register")}
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
