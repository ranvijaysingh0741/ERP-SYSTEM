import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

/* ---------- COMPONENTS ---------- */

import AnnouncementBar from "./landing/components/AnnouncementBar";
import Navbar from "./landing/components/Navbar";
import Hero from "./landing/components/Hero";
import About from "./landing/components/About";
import OurCourses from "./landing/components/OurCourses";
import Stats from "./landing/components/Stats";
import NoticesSection from "./landing/components/NoticesSection";
import LatestAnnouncements from "./landing/components/LatestAnnouncements";
import ContactInfoSection from "./landing/components/ContactInfoSection";
import Footer from "./landing/components/Footer";

/* ---------- LANDING PAGES ---------- */

import ContactPage from "./landing/pages/ContactPage";
import AcademicNotices from "./landing/pages/AcademicNotices";
import PublicNotices from "./landing/pages/PublicNotices";
import Timetable from "./landing/pages/Timetable";
import UpperPrimary from "./landing/pages/UpperPrimary";
import Secondary from "./landing/pages/Secondary";
import SeniorSecondary from "./landing/pages/SeniorSecondary";
import CentreEnquiry from "./landing/pages/CentreEnquiry";
import ChairmanMessage from "./landing/pages/ChairmanMessage";
import MissionVision from "./landing/pages/MissionVision";
import ResultPage from "./landing/pages/ResultPage";
import EmailVerification from "./landing/pages/EmailVerification";
import PostalVerification from "./landing/pages/PostalVerification";
import LoginPage from "./landing/pages/LoginPage";

/* ---------- STUDENT ---------- */

import StudentDashboard from "./student/pages/StudentDashboard";

/* ---------- CENTER PANEL ---------- */

import CenterDashboard from "./center/components/CenterDashboard";
import AddStudent from "./center/components/AddStudent";
import MyStudents from "./center/components/MyStudents";
import ApplicationStatus from "./center/components/ApplicationStatus";
import Notifications from "./center/components/Notifications";

/* ---------- ADMIN ---------- */
import AdminDashboard from "./admin/pages/AdminDashboard";
import AllStudents from "./admin/pages/AllStudents";
import ClassStudents from "./admin/pages/ClassStudents";
import StudentProfile from "./admin/pages/StudentProfile";
import StudentDetail from "./admin/pages/StudentDetail";

import Certificates from "./admin/pages/Certificates";
import CertificateClass from "./admin/pages/CertificateClass";
import CertificateStudents from "./admin/pages/CertificateStudents";
import CertificatePreview from "./admin/pages/CertificatePreview";

import Fees from "./admin/pages/Fees";
import FeeClass from "./admin/pages/FeeClass";
import FeeStudents from "./admin/pages/FeeStudents";
import FeeDetails from "./admin/pages/FeeDetails";

import EnrollmentRequests from "./admin/pages/EnrollmentRequests";
import RegionalReports from "./admin/pages/RegionalReports";
/* ---------- SUPER ADMIN ---------- */

import SuperAdminLayout from "./superadmin/components/layout/SuperAdminLayout";
import SuperAdminDashboard from "./superadmin/pages/superadmin/SuperAdminDashboard";
import AdminManagement from "./superadmin/pages/superadmin/AdminManagement";
import LocationManagement from "./superadmin/pages/superadmin/LocationManagement";
import EnrollmentManagement from "./superadmin/pages/superadmin/EnrollmentManagement";
import SchoolDetails from "./superadmin/pages/superadmin/SchoolDetails";
import Reports from "./superadmin/pages/superadmin/Reports";
import ActivityLogs from "./superadmin/pages/superadmin/ActivityLogs";
import Profile from "./superadmin/pages/superadmin/Profile";

/* ---------- Layout Wrapper ---------- */

function Layout({ children }) {

  const location = useLocation();

  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <AnnouncementBar />}
      {!hideNavbar && <Navbar />}
      {children}
      {!hideNavbar && <Footer />}
    </>
  );
}

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (

    <Router>

      <Routes>

        {/* ---------- HOME ---------- */}

        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <About />
              <OurCourses />
              <Stats />
              <NoticesSection />
              <LatestAnnouncements />
              <ContactInfoSection />
            </Layout>
          }
        />

        {/* ---------- COURSE PAGES ---------- */}

        <Route path="/upper-primary" element={<Layout><UpperPrimary /></Layout>} />
        <Route path="/secondary" element={<Layout><Secondary /></Layout>} />
        <Route path="/senior-secondary" element={<Layout><SeniorSecondary /></Layout>} />

        {/* ---------- NOTICE PAGES ---------- */}

        <Route path="/academic-notices" element={<Layout><AcademicNotices /></Layout>} />
        <Route path="/public-notices" element={<Layout><PublicNotices /></Layout>} />
        <Route path="/timetable" element={<Layout><Timetable /></Layout>} />

        {/* ---------- OTHER PAGES ---------- */}

        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/courses" element={<Layout><OurCourses /></Layout>} />
        <Route path="/centre-enquiry" element={<Layout><CentreEnquiry /></Layout>} />
        <Route path="/message-from-chairman" element={<Layout><ChairmanMessage /></Layout>} />
        <Route path="/mission-vision" element={<Layout><MissionVision /></Layout>} />
        <Route path="/result" element={<Layout><ResultPage /></Layout>} />
        <Route path="/email-verification" element={<Layout><EmailVerification /></Layout>} />
        <Route path="/postal-verification" element={<Layout><PostalVerification /></Layout>} />

 {/* ---------- LOGIN  ---------- */}

<Route path="/login" element={<LoginPage />} />

{/* ---------- STUDENT  ---------- */}


<Route path="/student/dashboard" element={<StudentDashboard />} />

{/* ---------- redirect  ---------- */}

<Route path="/student" element={<Navigate to="/student/dashboard" />} />

{/* ---------- CENTER PANEL  ---------- */}


<Route path="/center/dashboard" element={<CenterDashboard />} />
<Route path="/center/add-student" element={<AddStudent />} />
<Route path="/center/students" element={<MyStudents />} />
<Route path="/center/status" element={<ApplicationStatus />} />
<Route path="/center/notifications" element={<Notifications />} />

{/* ---------- redirect  ---------- */}

<Route path="/center" element={<Navigate to="/center/dashboard" />} />

       {/* ---------- ADMIN ---------- */}
<Route path="/admin/dashboard" element={<AdminDashboard />} />
<Route path="/admin/all-students" element={<AllStudents />} />
<Route path="/admin/class/:className" element={<ClassStudents />} />
<Route path="/admin/student/:enrollNo" element={<StudentProfile />} />
<Route path="/admin/student-detail" element={<StudentDetail />} />

<Route path="/admin/certificates" element={<Certificates />} />
<Route path="/admin/certificate/:type" element={<CertificateClass />} />
<Route path="/admin/certificate/:type/:className" element={<CertificateStudents />} />
<Route path="/admin/certificate-preview/:type/:className/:enroll" element={<CertificatePreview />} />

<Route path="/admin/fees" element={<Fees />} />
<Route path="/admin/fees/:session" element={<FeeClass />} />
<Route path="/admin/fees/:session/:className" element={<FeeStudents />} />
<Route path="/admin/fees-details/:session/:className/:enroll" element={<FeeDetails />} />

<Route path="/admin/enrollments" element={<EnrollmentRequests />} />
<Route path="/admin/reports" element={<RegionalReports />} />

<Route path="/admin" element={<Navigate to="/admin/dashboard" />} />

        {/* ---------- SUPER ADMIN ---------- */}

        <Route path="/superadmin/*" element={<SuperAdminLayout />}>

          <Route index element={<SuperAdminDashboard />} />
          <Route path="admin-management" element={<AdminManagement />} />
          <Route path="locations" element={<LocationManagement />} />
          <Route path="profile" element={<Profile />} />
          <Route path="enrollment" element={<EnrollmentManagement />} />
          <Route path="school/:id" element={<SchoolDetails />} />
          <Route path="reports" element={<Reports />} />
          <Route path="activity-logs" element={<ActivityLogs />} />

        </Route>

        {/* ---------- 404 ---------- */}

        <Route
          path="*"
          element={
            <Layout>
              <h1 style={{ textAlign: "center", marginTop: "50px" }}>
                404 - Page Not Found
              </h1>
            </Layout>
          }
        />

      </Routes>

    </Router>

  );
}

export default App;