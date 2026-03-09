import React from "react";
import "./Secondary.css";

function Secondary() {
  return (
    <div className="secondary-page">

      {/* HEADER SECTION */}
      <section className="secondary-hero">
        <h1>SECONDARY (CLASS-10th)</h1>
      </section>

      {/* CONTENT SECTION */}
      <section className="secondary-content">

        <h2>
          ABOUT BOARD OF VOCATIONAL AND SKILLS HIGHER SECONDARY EDUCATION 10TH CLASS SCHOOL EXAMINATION
        </h2>

        <p>
          “SSCE” stands for Secondary School Certificate Examination (High School i.e. X class).
          The examinations are conducted twice in a year in accordance with the syllabus prescribed
          by the Board. After passing the examination, a certificate of qualification is awarded by the Board.
        </p>

        <h3>DOCUMENT REQUIRED FOR (CLASS-10TH) ADMISSION</h3>

        <ul>
          <li>8th Class Pass or 9th Class Pass/Fail Report Card/ Certificate</li>
          <li>Passport Size Photo’s</li>
          <li>ID Proof</li>
          <li>DOB Certificate</li>
          <li>Admission Form with 20/- Rupee notary stamp paper ( Student Undertaking Form )</li>
        </ul>

      </section>

      {/* SCHEME SECTION */}
      <section className="scheme-section">

        <h2>
          THE SCHEME OF SECONDARY SCHOOL CERTIFICATE EXAMINATION (CLASS-10TH)
        </h2>

        <p>
          The Scheme of Secondary School Certificate Examinations for conducted by
         BOARD OF VOCATIONAL AND SKILLS HIGHER SECONDARY EDUCATION, shall be as laid down from time to time.
        </p>

        <table>
          <thead>
            <tr>
              <th>S.NO.</th>
              <th>SUBJECT</th>
              <th>NO. OF QUESTION PAPERS</th>
              <th>MAX. MARKS</th>
              <th>DURATION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Language I</td>
              <td>1</td>
              <td>100</td>
              <td>3 hours</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Language II</td>
              <td>1</td>
              <td>100</td>
              <td>3 hours</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mathematics</td>
              <td>1</td>
              <td>80+20*</td>
              <td>3 hours</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Science</td>
              <td>1</td>
              <td>60+20*+20**</td>
              <td>3 hours</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Social Science</td>
              <td>1</td>
              <td>80+20*</td>
              <td>3 hours</td>
            </tr>
          </tbody>
        </table>

        <div className="note">
          <p><strong>NOTE:</strong></p>
          <ul>
            <li>* Stand for Multiple Choice Question.</li>
            <li>** Stand for Practical Examination.</li>
          </ul>
        </div>

      </section>

      {/* ADDITIONAL SUBJECTS */}
      <section className="additional-subject">

        <h2>ADDITIONAL SUBJECT (IF OPTED)</h2>
        <p>Choose from Subject List</p>

        <table>
          <tbody>
            <tr>
              <td>Music</td>
              <td>40+60**</td>
              <td>3 hours</td>
            </tr>
            <tr>
              <td>Drawing & Painting</td>
              <td>30+70**</td>
              <td>3 hours</td>
            </tr>
            <tr>
              <td>Typewriting-(English)</td>
              <td>30+70**</td>
              <td>3 hours</td>
            </tr>
            <tr>
              <td>Information Technology</td>
              <td>80+20*</td>
              <td>3 hours</td>
            </tr>
            <tr>
              <td>Home Science</td>
              <td>40+60**</td>
              <td>3 hours</td>
            </tr>
          </tbody>
        </table>

      </section>

    </div>
  );
}

export default Secondary;