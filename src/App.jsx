import { useState } from 'react'
import './App.css'
import Sidebar from "./components/Sidebar";
import PatientDetails from "./components/PatientDetails";
import Topbar from "./components/Topbar";
import LabResults from "./components/labResults";
import DiagnosticList from "./components/DiagnosticList";
import HealthOverview from "./components/HealthOverview";

function App() {


  return (
    <>
      <div>
        <Topbar />
        <Sidebar />
        <HealthOverview />
        < LabResults />
        < DiagnosticList />
        <PatientDetails />

      </div>
    </>
  )
}

export default App
