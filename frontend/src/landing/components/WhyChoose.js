import React from "react";
import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why">
      <h2>Why Choose BVSHSE?</h2>
      <div className="card-container">
        <div className="card">
          <h3>Flexible Timing</h3>
          <p>Study at your own pace.</p>
        </div>
        <div className="card">
          <h3>Wide Subject Choice</h3>
          <p>Diverse subjects for career growth.</p>
        </div>
        <div className="card">
          <h3>Nationwide Centres</h3>
          <p>Support across India.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
