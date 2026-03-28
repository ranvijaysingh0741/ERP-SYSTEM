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

const DashboardCards = ({ stats }) => {

  const boys = stats.boys || 0;
  const girls = stats.girls || 0;

  const totalStudents = boys + girls;

  const boysPercent = totalStudents
    ? ((boys / totalStudents) * 100).toFixed(0)
    : 0;

  const girlsPercent = totalStudents
    ? ((girls / totalStudents) * 100).toFixed(0)
    : 0;

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

      <div className="card student-card">

        <div className="student-header">
          <h3>Students</h3>
          <h2 className="total-students">
            {totalStudents.toLocaleString()}
          </h2>
        </div>

        <div className="chart-wrapper">
          <Doughnut data={genderData} options={genderOptions} />

          <div className="center-icon">
            <FaMale color="#a0c7eb" size={22}/>
            <FaFemale color="#e99de0" size={22}/>
          </div>
        </div>

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