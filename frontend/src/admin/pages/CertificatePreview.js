import React from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import "../styles/certificatePreview.css";
import { QRCodeCanvas } from "qrcode.react";

const CertificatePreview = () => {

  const { type, className, enroll } = useParams();

  const handlePrint = () => {
    window.print();
  };

  return (
    <AdminLayout>

      <div className="certificate-wrapper">

        <div className="certificate-box">

          <h1 className="school-name">
            Board of Vocational and Skill Higher Secondary Education
          </h1>

          <h2 className="cert-type">
            {decodeURIComponent(type)}
          </h2>

          <p className="cert-text">
            This is to certify that student with Enrollment No
            <b> {enroll} </b>
            of <b>{className}</b> is a bonafide student of this institution.
          </p>

          <p>Date: ____________</p>

          <div className="sign-section">
            <span>Authorized Signature</span>
          </div>

          <div style={{ marginTop: "20px" }}>
           <QRCodeCanvas
           value={`http://localhost:3000/verify/${enroll}`}
           size={100}
            />
            </div>

        </div>

        <button className="print-btn" onClick={handlePrint}>
          Print / Download PDF
        </button>

      </div>

    </AdminLayout>
  );
};

export default CertificatePreview;