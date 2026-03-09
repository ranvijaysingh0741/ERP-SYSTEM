import React from "react";
import { useParams, Link } from "react-router-dom";

const CertificateStudents = () => {

  const { type, className } = useParams();

  const students = [
    { enroll: "SCH1001", name: "Rahul Sharma" },
    { enroll: "SCH1002", name: "Priya Verma" },
    { enroll: "SCH1003", name: "Aman Singh" }
  ];

  return (
    <div style={{padding:"30px"}}>

      <h2>{decodeURIComponent(type)}</h2>
      <h3>{className} - Select Student</h3>

      <table style={{width:"100%", marginTop:"20px"}}>
        <thead>
          <tr>
            <th>Enrollment</th>
            <th>Name</th>
            <th>Generate</th>
          </tr>
        </thead>

        <tbody>
          {students.map((stu, index) => (
            <tr key={index}>
              <td>{stu.enroll}</td>
              <td>{stu.name}</td>
              <td>
                <Link
                  to={`/certificate-preview/${type}/${className}/${stu.enroll}`}
                >
                  Generate
                </Link>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default CertificateStudents;