import React, { useEffect, useState } from "react";
import "../styles/AdminStudentManagement.css";

const AdminStudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("https://hiresphere-backendrepo.onrender.com/api/admin/students");
        const data = await res.json();
        setStudents(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStudents();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://hiresphere-backendrepo.onrender.com/api/admin/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) return alert(result.message || "Failed to add student");

      alert(result.message);
      setStudents([...students, result.student]);
      setFormData({ name: "", rollNo: "", email: "", password: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="admin-student-container">
      <h2>Student Management</h2>

      {/* Students Table */}
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Student Form Centered */}
      <div className="add-student-form-wrapper">
        <form className="add-student-form" onSubmit={handleSubmit}>
          <h3>Add New Student</h3>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="rollNo" placeholder="Roll Number" value={formData.rollNo} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Add Student</button>
        </form>
      </div>
    </div>
  );
};

export default AdminStudentManagement;
