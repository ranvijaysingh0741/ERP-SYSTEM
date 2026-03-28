import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import { FaMale, FaFemale } from "react-icons/fa";
import "../styles/genderChart.css";

ChartJS.register(ArcElement, Tooltip);

const StudentGenderChart = () => {

  const boys = 45414;
  const girls = 40270;

  const total = boys + girls;

  const boysPercent = ((boys / total) * 100).toFixed(0);
  const girlsPercent = ((girls / total) * 100).toFixed(0);

  const data = {
    datasets: [
      {
        data: [boys, girls],
        backgroundColor: ["#95cef1", "#5e3e5c"],
        borderWidth: 0,
        cutout: "70%"
      }
    ]
  };

  const options = {
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="gender-card">

      <h3>Students</h3>

      <div className="chart-wrapper">

        <Doughnut data={data} options={options} />

        {/* Center Icon */}
        <div className="center-icon">
          <FaMale color="#dc8787" size={28}/>
          <FaFemale color="#f4d35e" size={28}/>
        </div>

      </div>

      {/* Bottom Stats */}
      <div className="gender-stats">

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
  );
};

export default StudentGenderChart;