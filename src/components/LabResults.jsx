import React, { useEffect, useState } from "react";
import "./LabResults.css";
import { FiDownload } from "react-icons/fi";

const LabResults = () => {
  const [labResults, setLabResults] = useState([]);

  useEffect(() => {
    const fetchLabResults = async () => {

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
          throw new Error("Failed to fetch lab results");
        }

        const data = await response.json();

        const patient = data.find((person) => person.name === "Jessica Taylor");

        if (patient && Array.isArray(patient.lab_results)) {
          setLabResults(patient.lab_results);
        } else {
          setLabResults([]);
        }
      } catch (error) {
        console.error("Error fetching lab results:", error);
      }
    };

    fetchLabResults();
  }, []);



  return (
    <div className="labResultsContainer">
      <h2 className="labResultsTitle">Lab Results</h2>
      {labResults.length === 0 ? (
        <p className="noLabResultsMessage">No lab results found.</p>
      ) : (
        <ul className="labResultsList">
          {labResults.map((result, index) => (
            <li key={index} className="labResultItem">
              <span className="labResultText">{result}</span>
              <button
                className="downloadLabResultButton"
              ><FiDownload />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LabResults;
