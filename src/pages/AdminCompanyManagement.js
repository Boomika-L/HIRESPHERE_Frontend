import React, { useEffect, useState } from "react";
import "../styles/AdminCompanyManagement.css";

const AdminCompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
  });

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch("https://hiresphere-backendrepo.onrender.com/api/admin/companies");
        const data = await res.json();
        setCompanies(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCompanies();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://hiresphere-backendrepo.onrender.com/api/admin/companies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) return alert(result.message || "Failed to add company");

      alert(result.message);
      setCompanies([...companies, result.company]);
      setFormData({ name: "", email: "", website: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="admin-company-container">
      <h2>Company Management</h2>

      {/* Companies Table */}
      <table className="companies-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Jobs Posted</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company._id}>
              <td>{company.name}</td>
              <td>{company.email}</td>
              <td>{company.website}</td>
              <td>{company.jobsPosted}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Company Form */}
      <div className="add-company-form-wrapper">
        <form className="add-company-form" onSubmit={handleSubmit}>
          <h3>Add New Company</h3>
          <input type="text" name="name" placeholder="Company Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="website" placeholder="Website" value={formData.website} onChange={handleChange} />
          <button type="submit">Add Company</button>
        </form>
      </div>
    </div>
  );
};

export default AdminCompanyManagement;
