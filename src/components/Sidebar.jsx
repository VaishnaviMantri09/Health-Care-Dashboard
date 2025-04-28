import React, { useEffect, useState } from "react";
import "./Sidebar.css";

const Navbar = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {

      const username = import.meta.env.VITE_APP_USERNAME;
      const password = import.meta.env.VITE_APP_PASSWORD;

      const headers = new Headers();
      headers.set("Authorization", "Basic " + btoa(`${username}:${password}`));

      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          { method: "GET", headers }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch patient data");
        }

        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="SidenavbarContainer">
      <nav className="sidenavbar">
        <h2>Patients</h2>
        <div className="side-search-icon"></div>
        <ul className="sidenavList">
          {patients.map((patient, index) => (
            <li key={index} className="SidenavItem">
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="side-avatar"
              />
              <div className="side-patient-info">
                <span className="side-patient-name">{patient.name}</span>
                <div className="side-patient-details">
                  <span className="side-patient-gender"> {patient.gender},</span>
                  <span className="side-patient-age"> {patient.age} </span>
                </div>
              </div>
              <span className="side-menu-icon"></span>
            </li>
          ))}

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
