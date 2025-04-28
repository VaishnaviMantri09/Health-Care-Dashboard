import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import "./HealthOverview.css";
import { FaCaretDown } from "react-icons/fa";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
import lungIcon from "../assets/LungIcon.svg";
import tempIcon from "../assets/Temperature.svg";
import heartIcon from "../assets/HeartIcon.svg";
import { FaCaretUp } from "react-icons/fa";


const bloodPressureData = [
  { month: "Oct, 2023", systolic: 110, diastolic: 90 },
  { month: "Nov, 2023", systolic: 150, diastolic: 70 },
  { month: "Dec, 2023", systolic: 130, diastolic: 110 },
  { month: "Jan, 2024", systolic: 120, diastolic: 100 },
  { month: "Feb, 2024", systolic: 140, diastolic: 80 },
  { month: "Mar, 2024", systolic: 160, diastolic: 78 },
];

const healthData = [
  {
    icon: lungIcon,
    title: "Respiratory Rate",
    value: "20",
    unit: "bpm",
    status: "Normal",
    bgColor: "bg-blue",
  },
  {
    icon: tempIcon,
    title: "Temperature",
    value: "98.6",
    unit: "°F",
    status: "Normal",
    bgColor: "bg-red",
  },
  {
    icon: heartIcon,
    title: "Heart Rate",
    value: "78",
    unit: "bpm",
    status: " Lower than Average",
    bgColor: "bg-pink",
  },
];

const chartData = {
  labels: bloodPressureData.map(item => item.month),
  datasets: [
    {
      label: 'Systolic',
      data: bloodPressureData.map(item => item.systolic),
      fill: false,
      borderColor: '#C26EB4',
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: '#E66FD2',
      borderWidth: 1,
    },
    {
      label: 'Diastolic',
      data: bloodPressureData.map(item => item.diastolic),
      fill: false,
      borderColor: '#6D4DD1',
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: '#6D4DD1',
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    tooltip: {
      backgroundColor: '#ccc',
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#072635',
        font: {
          family: 'Manrope',
          size: 10,
          weight: '20',
        },
      },
      grid: {
        drawOnChartArea: false,
      },
    },
    y: {
      min: 60,
      max: 180,
      ticks: {
        stepSize: 20,
        color: '#072635',
        font: {
          family: 'Manrope',
          size: 10,
          weight: 'normal',
        },
      },
      grid: {
        drawOnChartArea: true,
      },
    },
  },
};

const HealthOverview = () => {
  return (

    <div className="health-overview-container">

      <h2 className="health-title" > Diagnosis History</h2 >

      <div className="graph-container">

        <div className="graph-header">
          <h3>Blood Pressure</h3>
          <span className="dropdown">Last 6 months<IoIosArrowDown size={20} style={{ marginLeft: '5px', marginTop: '0px' }} /></span>
        </div>

        <div style={{ width: '70%', height: 250, marginBottom: '20px' }}>
          <Line data={chartData} options={chartOptions} />
        </div>


        <div className="stat">
          <div className="stat-item">
            <div className="stat-dot" style={{ backgroundColor: "#E66FD2" }}></div>
            <span className="stat-label">Systolic</span>
          </div>
          <div>
            <span className="stat-value">160</span>
            <br /><span className="stat-status"><FaCaretUp size={13} style={{ marginRight: '8px', color: 'black' }} />
              Higher than Average</span><br />
          </div>
          <div className="divider"></div>

          <div className="stat-item">
            <div className="stat-dot" style={{ backgroundColor: "#8C6FE6" }}></div>
            <span className="stat-label">Diastolic</span>
          </div>
          <div>
            <span className="stat-value" style={{ marginRight: '99px' }}>78</span>
            <br /><span className="stat-status">
              <FaCaretDown size={13} style={{ marginRight: '8px', color: 'black' }} />
              Lower than Average</span>
          </div>
        </div>
      </div>


      <div className="health-card-container">
        {healthData.map((card, index) => (
          <div key={index} className={`card ${card.bgColor}`}>
            <div className="health-card-icon">
              <img src={card.icon} alt={`${card.title} icon`} width="64px" height="64px" />
            </div>
            <h4 className="health-card-title">{card.title}</h4>
            <p className="stat-value">{card.value} {card.unit}</p>
            <p className="health-card-status">
              {card.status.includes("Lower than Average") && (
                <FaCaretDown style={{ marginRight: "8px" }} />
              )}
              {card.status}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthOverview;
