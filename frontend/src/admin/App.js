import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AllStudents from "./pages/AllStudents";
import ClassStudents from "./pages/ClassStudents";
import StudentProfile from "./pages/StudentProfile";
import StudentDetail from "./pages/StudentDetail";
import Certificates from "./pages/Certificates";
import CertificateClass from "./pages/CertificateClass";
import CertificateStudents from "./pages/CertificateStudents";
import CertificatePreview from "./pages/CertificatePreview";
import Fees from "./pages/Fees";
import FeeClass from "./pages/FeeClass";
import FeeStudents from "./pages/FeeStudents";
import FeeDetails from "./pages/FeeDetails";
import EnrollmentRequests from "./pages/EnrollmentRequests";
import RegionalReports from "./pages/RegionalReports";

import "./App.css";



function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <Sidebar />

        <div className="main-content">


          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/all-students" element={<AllStudents />} />
            <Route path="/class/:className" element={<ClassStudents />} />
            <Route path="/student-detail" element={<StudentDetail />} />
            <Route path="/student/:enrollNo" element={<StudentProfile />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/certificate/:type" element={<CertificateClass />} />
            <Route path="/certificate/:type/:className" element={<CertificateStudents />} />
            <Route path="/certificate-preview/:type/:className/:enroll" element={<CertificatePreview />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/fees/:session" element={<FeeClass />} />
            <Route path="/fees/:session/:className" element={<FeeStudents />} />
            <Route path="/fees-details/:session/:className/:enroll" element={<FeeDetails />} />
            <Route path="/admin/enrollments" element={<EnrollmentRequests />} />
            <Route path="/admin/reports" element={<RegionalReports />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
