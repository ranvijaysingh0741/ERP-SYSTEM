import React from "react";
import { FaMale, FaFemale } from "react-icons/fa";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import "../styles/cards.css";

ChartJS.register(ArcElement, Tooltip);

const DashboardCards = () => {

  /* ===== STUDENT DATA ===== */
  const boys = 45414;
  const girls = 40270;

  const totalStudents = boys + girls;

  const boysPercent = ((boys / totalStudents) * 100).toFixed(0);
  const girlsPercent = ((girls / totalStudents) * 100).toFixed(0);

  /* ===== CHART DATA ===== */
  const genderData = {
    labels: ["Boys", "Girls"],
    datasets: [
      {
        data: [boys, girls],
        backgroundColor: ["#e8a5d4", "#91aeca"],
        borderWidth: 0,
        cutout: "75%"
      }
    ]
  };

  const genderOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="cards-container">

      {/* ========= STUDENT CARD ========= */}
      <div className="card student-card">

        {/* HEADER */}
        <div className="student-header">
          <h3>Students</h3>
          <h2 className="total-students">
            {totalStudents.toLocaleString()}
          </h2>
        </div>

        {/* CHART */}
        <div className="chart-wrapper">
          <Doughnut data={genderData} options={genderOptions} />

          <div className="center-icon">
            <FaMale color="#a0c7eb" size={22}/>
            <FaFemale color="#e99de0" size={22}/>
          </div>
        </div>

        {/* STATS */}
        <div className="gender-info">

          <div>
            <span className="dot boys"></span>
            <h4>{boys.toLocaleString()}</h4>
            <p>Boys ({boysPercent}%)</p>
          </div>

          <div>
            <span className="dot girls"></span>
            <h4>{girls.toLocaleString()}</h4>
            <p>Girls ({girlsPercent}%)</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardCards;
