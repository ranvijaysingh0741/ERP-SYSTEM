import React from "react";
import "./ChairmanMessage.css";

function ChairmanMessage() {
  return (
    <section className="chairman-page">
      {/* Header Banner */}
      <div className="chairman-banner">
        <h1>MESSAGE FROM THE CHAIRMAN</h1>
      </div>

      {/* Content Card */}
      <div className="chairman-container">
        <div className="chairman-card">
          <h2>RESPECTED PARENTS AND DEAR STUDENTS,</h2>

          <p>
            I want to inform you that the Board of Vocational and Skills Higher
            Secondary Education is an autonomous educational board.
          </p>

          <p>
            With the passage of time, education has also changed. Today
            everybody wants to give his/her child a good education. A school is
            a place where students are imparted quality education with latest
            techniques so as to build up a respectable citizen.
          </p>

          <p>
            Board of Vocational and Skills Higher Secondary Education conducts
            Upper primary, secondary school certificate and senior secondary
            certificate examinations twice in a year regular as well as
            Private/ODL mode. The board examination is valid for higher studies.
          </p>

          <p>
            So, those students after passing the board’s examination can go to
            higher studies.
          </p>

          <p>I pray for your bright future.</p>

          <p className="signature">Yours Faithfully</p>
        </div>
      </div>
    </section>
  );
}

export default ChairmanMessage;
