import React from "react";
import "../styles/summaryCards.css";

const SummaryCards = ({ stats }) => {

  const data = [
    {
      title: "Students",
      count: stats.students,
      change: "+15%",
      color: "#d9ebf4"
    },
    {
      title: "Centers",
      count: stats.centers,
      change: "+8%",
      color: "#d9ebf4"
    },
    {
      title: "Pending",
      count: stats.pending,
      change: "-3%",
      color: "#d9ebf4"
    },
    {
      title: "Approved",
      count: stats.approved,
      change: "+10%",
      color: "#d9ebf4"
    }
  ];

  return (
    <div className="summary-container">

      {data.map((item, index) => (
        <div
          key={index}
          className="summary-card"
          style={{ background: item.color }}
        >

          <div className="summary-top">
            <span
              className={
                item.change.includes("+")
                  ? "badge up"
                  : "badge down"
              }
            >
              {item.change}
            </span>

            <span className="dots">•••</span>
          </div>

          <h2>{Number(item.count || 0).toLocaleString()}</h2>
          <p>{item.title}</p>

        </div>
      ))}

    </div>
  );
};

export default SummaryCards;