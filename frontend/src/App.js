import React, { useEffect } from "react";
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

/* ---------- PAGES ---------- */
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


import StudentDashboard from "./student/pages/student/StudentDashboard";
import CenterDashboard from "./center/components/CenterDashboard";

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

        {/* ---------- HOME PAGE ---------- */}

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

        {/* ---------- LOGIN PAGE ---------- */}

        <Route path="/login" element={<LoginPage />} />

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

       
<Route path="/student" element={<StudentDashboard />} />
<Route path="/center" element={  <CenterDashboard /> } />


      </Routes>

    </Router>
  );
}

export default App;