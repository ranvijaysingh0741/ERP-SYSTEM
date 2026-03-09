import React from "react";
import "./MissionVision.css";

function MissionVision() {
  return (
    <section className="mission-page">
      {/* Banner */}
      <div className="mission-banner">
        <h1>MISSION AND VISION</h1>
      </div>

      {/* Content Card */}
      <div className="mission-container">
        <div className="mission-card">
          <h2>MISSION AND VISION</h2>

          <p className="quote">
            “To achieve national distinction for creativity, innovation, and
            excellence.”
          </p>

          <p>
            Hundreds of people work behind the Board of Vocational and Skills
            Higher Secondary Education ensuring that it fulfills all mandates
            set down by the mission and vision.
          </p>

          <ul>
            <li>
              Our primary aim is to move forward the frontiers of human
              knowledge and enrich and elevate the citizens of the state, the
              nation, and the world.
            </li>
            <li>
              The board teaches students how to develop education and career
              goals, decision-making skills needed to manage their professional
              and academic pursuits.
            </li>
            <li>
              The students of the board will have clarity of purpose and solid
              decision-making abilities to be confident and competitive.
            </li>
            <li>
              Providing the academic and administrative services and facilities
              needed to facilitate research excellence and knowledge transfer.
            </li>
            <li>
              Ensuring that research activities are exploited and disseminated
              for the benefit of society and the economy.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
