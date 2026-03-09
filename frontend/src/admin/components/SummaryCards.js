import React from "react";
import "../styles/summaryCards.css";

const SummaryCards = () => {

  const data = [
  {
    title: "Students",
    count: 124684,
    change: "+15%",
    color: "#fff8f8"
  },
  {
    title: "Teachers",
    count: 12379,
    change: "-3%",
    color: "#f7f7f7"
  },
  {
    title: "Staffs",
    count: 29300,
    change: "-3%",
    color: "#f0f0f0"
  },
  {
    title: "Centers",
    count: 185,
    change: "+8%",
    color: "#f2f2f2"
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

          <h2>{item.count.toLocaleString()}</h2>
          <p>{item.title}</p>

        </div>
      ))}

    </div>
  );
};

export default SummaryCards;