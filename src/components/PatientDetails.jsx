import React, { useEffect, useState } from "react";
import './PatientDetails.css';
import BirthIcon from "../assets/BirthIcon.svg";
import GenderIcon from "../assets/FemaleIcon.svg";
import ContactNumberIcon from "../assets/PhoneIcon.svg";
import InsuranceIcon from "../assets/InsuranceIcon.svg";

const PatientDetails = () => {
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
        const filteredPatients = data.filter(
          (patient) => patient.name === "Jessica Taylor"
        );

        setPatients(filteredPatients);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPatients();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <div className="patientDetailsContainer">
      {patients.map((patient, index) => (
        <div key={index} className="patientDetailsCard">
          <img
            src={patient.profile_picture}
            alt={patient.name}
            className="patientDetailsImage"
          />
          <h2 className="patientDetailsName">{patient.name}</h2>
          <div className="patientInfoContainer">
            <div className="patientInfoItem">
              <span className="patientDetailsIcon"> <img src={BirthIcon} alt="Birth Icon" /></span>
              <div className="patientDetailsText">
                <span className="patientDetailsLabel">Date Of Birth</span>
                <span className="patientDetailsValue">{formatDate(patient.date_of_birth)}</span>
              </div>
            </div>


            <div className="patientInfoItem">
              <span className="patientDetailsIcon"><img src={GenderIcon} alt="Gender Icon" /></span>
              <div className="patientDetailsText">
                <span className="patientDetailsLabel">Gender</span>
                <span className="patientDetailsValue">{patient.gender}</span>
              </div>
            </div>

            <div className="patientInfoItem">
              <span className="patientDetailsIcon"><img src={ContactNumberIcon} alt="ContactNumberIcon" /></span>
              <div className="patientDetailsText">
                <span className="patientDetailsLabel">Contact Info</span>
                <span className="patientDetailsValue">{patient.phone_number}</span>
              </div>
            </div>

            <div className="patientInfoItem">
              <span className="patientDetailsIcon"><img src={ContactNumberIcon} alt="EContactNumberIcon" /></span>
              <div className="patientDetailsText">
                <span className="patientDetailsLabel">Emergency Contacts</span>
                <span className="patientDetailsValue">{patient.emergency_contact}</span>
              </div>
            </div>

            <div className="patientInfoItem">
              <span className="patientDetailsIcon"><img src={InsuranceIcon} alt="InsuranceIcon" /></span>
              <div className="patientDetailsText">
                <span className="patientDetailsLabel">Insurance Provider</span>
                <span className="patientDetailsValue">{patient.insurance_type}</span>
              </div>
            </div>
          </div>

          <button className="patientDetailsButton">Show All Information</button>
        </div>
      ))}
    </div>
  );
};

export default PatientDetails;
