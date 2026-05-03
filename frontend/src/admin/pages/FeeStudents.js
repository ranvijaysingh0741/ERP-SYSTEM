import React from "react";
import { useParams, Link } from "react-router-dom";

const FeeStudents = () => {

  const { session, className } = useParams();

  const students = [
    { enroll: "SCH1001", name: "Rahul Sharma" },
    { enroll: "SCH1002", name: "Priya Verma" },
    { enroll: "SCH1003", name: "Aman Singh" }
  ];

  return (
    <div style={{padding:"30px"}}>

      <h2>{className} - Student Fees</h2>

      <table style={{width:"100%", marginTop:"20px"}}>
        <thead>
          <tr>
            <th>Enrollment</th>
            <th>Name</th>
            <th>View Fees</th>
          </tr>
        </thead>

        <tbody>
          {students.map((stu, index) => (
            <tr key={index}>
              <td>{stu.enroll}</td>
              <td>{stu.name}</td>
              <td>
                <Link to={`/fees-details/${session}/${className}/${stu.enroll}`}>
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default FeeStudents;
