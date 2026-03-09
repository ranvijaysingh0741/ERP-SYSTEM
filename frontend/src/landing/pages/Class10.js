import React from "react";

function Class10() {
  return (
    <div className="class-page">
      <div className="page-hero">
        <h1>SECONDARY (CLASS-10th)</h1>
      </div>

      <div className="page-content">
        <h2>About Secondary School Examination</h2>
        <p>
          SSCE stands for Secondary School Certificate Examination (Class 10).
          The examination is conducted twice a year as per board guidelines.
        </p>

        <h2>Documents Required</h2>
        <ul>
          <li>8th Pass or 9th Pass/Fail Report Card</li>
          <li>Passport Size Photos</li>
          <li>ID Proof</li>
          <li>Admission Form with Notary Stamp</li>
        </ul>

        <h2>Scheme of Examination</h2>

        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Subject</th>
              <th>Max Marks</th>
              <th>Duration</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Language I</td>
              <td>100</td>
              <td>3 Hours</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Language II</td>
              <td>100</td>
              <td>3 Hours</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Mathematics</td>
              <td>100</td>
              <td>3 Hours</td>
            </tr>

            <tr>
              <td>4</td>
              <td>Science</td>
              <td>100</td>
              <td>3 Hours</td>
            </tr>

            <tr>
              <td>5</td>
              <td>Social Science</td>
              <td>100</td>
              <td>3 Hours</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Class10;
