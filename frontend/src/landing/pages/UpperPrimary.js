import React from "react";
import "./CoursePage.css";

function UpperPrimary() {
  return (
    <div className="course-page">

      {/* HERO */}
      <div className="course-hero">
        <h1>UPPER PRIMARY (CLASS-8th)</h1>
      </div>

      <div className="course-wrapper">

        <h2>ABOUT UPPER PRIMARY EDUCATION (CLASS-8TH)</h2>

        <p>
          The Upper Primary Examination corresponds to Class 8th and forms
          a strong academic foundation for Secondary education.
        </p>

        <h3>DOCUMENT REQUIRED FOR (CLASS-8TH) ADMISSION</h3>

        <ul>
          <li>Previous Class Report Card</li>
          <li>Passport Size Photographs</li>
          <li>Birth Certificate</li>
          <li>Transfer Certificate (if applicable)</li>
          <li>ID Proof</li>
        </ul>

        <h2>SCHEME OF UPPER PRIMARY EXAMINATION</h2>

        <table>
          <thead>
            <tr>
              <th>S.NO.</th>
              <th>SUBJECT</th>
              <th>MAX. MARKS</th>
              <th>DURATION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Language I</td>
              <td>100</td>
              <td>3 hours</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Language II</td>
              <td>100</td>
              <td>3 hours</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mathematics</td>
              <td>100</td>
              <td>3 hours</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Science</td>
              <td>100</td>
              <td>3 hours</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Social Science</td>
              <td>100</td>
              <td>3 hours</td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default UpperPrimary;