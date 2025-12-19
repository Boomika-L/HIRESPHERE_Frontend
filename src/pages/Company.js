import React, { useEffect, useState } from "react";
import "./../styles/Company.css";

const CompanyPage = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/company")
      .then(res => res.json())
      .then(data => setCompanies(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="company-page">
      
      {/* Header */}
      <header className="company-header">
        <h1>HireSphere</h1>
        <p>Company Directory</p>
      </header>

      {/* Company List */}
      <div className="company-container">
        {companies.length === 0 ? (
          <p className="no-data">No companies available</p>
        ) : (
          companies.map(company => (
            <div className="company-card" key={company._id}>
              <h3>{company.name}</h3>
              <p><strong>Email:</strong> {company.email}</p>
              <p><strong>Industry:</strong> {company.industry || "—"}</p>
              <p><strong>Location:</strong> {company.location || "—"}</p>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default CompanyPage;
