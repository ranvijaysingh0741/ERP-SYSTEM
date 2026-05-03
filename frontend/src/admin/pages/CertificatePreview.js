import React from "react";
import { useParams } from "react-router-dom";
import "../styles/certificatePreview.css";

const CertificatePreview = () => {

  const { type, className, enroll } = useParams();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="certificate-wrapper">

      <div className="certificate-box">

        <h1>ABC Public School</h1>
        <h3>{decodeURIComponent(type)}</h3>

        <p>
          This is to certify that student with Enrollment No <b>{enroll}</b>
          of <b>{className}</b> is a bonafide student of this institution.
        </p>

        <p>Date: ____________</p>

        <div className="sign-section">
          <span>Principal Signature</span>
        </div>

      </div>

      <button className="print-btn" onClick={handlePrint}>
        Print / Download PDF
      </button>

    </div>
  );
};

export default CertificatePreview;
