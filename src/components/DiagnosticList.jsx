import React, { useEffect, useState } from "react";
import './DiagnosticList.css';

const DiagnosticList = () => {
  const [diagnostics, setDiagnostics] = useState([]);

  useEffect(() => {

    const username = import.meta.env.VITE_APP_USERNAME;
    const password = import.meta.env.VITE_APP_PASSWORD;

    const headers = new Headers();
    headers.set("Authorization", "Basic " + btoa(`${username}:${password}`));

    const fetchDiagnostics = async () => {
      try {
        const DiagnosticListresponse = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          { method: "GET", headers }
        );
        if (!DiagnosticListresponse.ok) {
          throw new Error("Failed to fetch diagnostics");
        }
        const data = await DiagnosticListresponse.json();

        const filteredPatients = data.filter(
          (diagnostics) => diagnostics.name === "Jessica Taylor"
        );

        setDiagnostics(filteredPatients);
        console.log("Filtered Patients Details", filteredPatients);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDiagnostics();
  }, []);

  return (
    <div className="list-container">
      <h2 className="list-title">Diagnostic List</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th className="th">Problem/Diagnosis</th>
              <th className="th">Description</th>
              <th className="th">Status</th>
            </tr>
          </thead>
        </table>

        <div class="table-wrapper">
          <table class="table">
            <tbody>
              {diagnostics.map((patient, index) => (
                patient.diagnostic_list.map((diagnosis, diagIndex) => (
                  <tr key={`${index}-${diagIndex}`}>
                    <td className="td">{diagnosis.name}</td>
                    <td className="td">{diagnosis.description}</td>
                    <td className="td">{diagnosis.status}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
};

export default DiagnosticList;
