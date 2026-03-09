import React from "react";
import "./CoursePage.css";

function SeniorSecondary() {
  return (
    <div className="course-page">

      {/* HERO SECTION */}
      <div className="course-hero">
        <h1>SENIOR SECONDARY (CLASS-12th)</h1>
      </div>

      <div className="course-wrapper">

        {/* ABOUT SECTION */}
        <h2>ABOUT BOARD OF VOCATIONAL AND SKILLS HIGHER SECONDARY EDUCATION</h2>
        <p>
          “SSSCE” stands for Senior Secondary School Certificate Examination (Intermediate i.e. XII Class).
          The examinations are conducted twice in a year in accordance with the syllabi prescribed by the Board.
          After passing the examination, a certificate of qualification is awarded by the Board.
        </p>

        {/* DOCUMENTS */}
        <h2>DOCUMENT REQUIRED FOR CLASS-12TH ADMISSION</h2>
        <ul>
          <li>10th Class Pass</li>
          <li>Passport Size Photo’s</li>
          <li>ID Proof</li>
          <li>DOB Certificate</li>
          <li>Admission Form with 20/- Rupee notary stamp paper</li>
        </ul>

        {/* SCHEME SECTION */}
        <div className="card-section">
          <h2>THE SCHEME OF SENIOR SECONDARY SCHOOL CERTIFICATE EXAMINATION (CLASS-12TH)</h2>

          <ol>
            <li>The Board shall conduct examination in all subjects except General Studies, Work Experience, Physical and Health Education.</li>
            <li>Each subject carries 100 marks for 3 hours.</li>
            <li>Practical subjects include theory and practical examinations.</li>
            <li>Private candidates may be exempted from certain internal subjects.</li>
          </ol>

          <h3>SUBJECT SCHEME :</h3>

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
                <td>Choose from Subject List (By Stream)</td>
                <td>100</td>
                <td>3 hours</td>
              </tr>
            </tbody>
          </table>

          {/* STREAMS */}
          <h2>ADDITIONAL SUBJECT (IF OPTED)</h2>

          <h3>SCIENCE STREAM :</h3>

          <p><strong>Non-Medical Branch</strong></p>
          <table>
            <tbody>
              <tr><td>Physics</td><td>100</td><td>3 hours</td></tr>
              <tr><td>Chemistry</td><td>100</td><td>3 hours</td></tr>
              <tr><td>Mathematics</td><td>100</td><td>3 hours</td></tr>
            </tbody>
          </table>

          <p><strong>Medical Branch</strong></p>
          <table>
            <tbody>
              <tr><td>Physics</td><td>100</td><td>3 hours</td></tr>
              <tr><td>Chemistry</td><td>100</td><td>3 hours</td></tr>
              <tr><td>Biology</td><td>100</td><td>3 hours</td></tr>
            </tbody>
          </table>

          <h3>COMMERCE STREAM :</h3>
          <table>
            <tbody>
              <tr><td>Business Studies</td><td>100</td><td>3 hours</td></tr>
              <tr><td>Accountancy</td><td>100</td><td>3 hours</td></tr>
              <tr><td>Economics / Mathematics</td><td>100</td><td>3 hours</td></tr>
            </tbody>
          </table>

          <h3>HUMANITIES / ARTS STREAM :</h3>
          <table>
            <tbody>
              <tr><td>History</td><td>100</td><td>3 hours</td></tr>
              <tr><td>Sociology</td><td>100</td><td>3 hours</td></tr>
              <tr><td>Geography / Economics / Philosophy / Public Administration</td><td>100</td><td>3 hours</td></tr>
            </tbody>
          </table>

          <h2>ADDITIONAL SUBJECT LIST</h2>
          <table>
            <tbody>
              <tr><td>I.T. (Information Technology)</td><td>Physical Education</td></tr>
              <tr><td>Yoga</td><td>Drawing & Painting</td></tr>
              <tr><td>Music</td><td>Dance</td></tr>
              <tr><td>Agriculture</td><td>Home Science</td></tr>
              <tr><td>Computer Science</td><td></td></tr>
            </tbody>
          </table>

          <p className="note">
            * Stand for Multiple Choice Question. <br />
            ** Stand for Practical Examination.
          </p>

        </div>
      </div>
    </div>
  );
}

export default SeniorSecondary;