import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SuperAdminLayout from "./components/layout/SuperAdminLayout";
import SuperAdminDashboard from "./pages/superadmin/SuperAdminDashboard";
import AdminManagement from "./pages/superadmin/AdminManagement";
import LocationManagement from "./pages/superadmin/LocationManagement";
import EnrollmentManagement from "./pages/superadmin/EnrollmentManagement";
import SchoolDetails from "./pages/superadmin/SchoolDetails";
import Reports from "./pages/superadmin/Reports";
import ActivityLogs from "./pages/superadmin/ActivityLogs";
import Profile from "./pages/superadmin/Profile";
function App() {
  return (
    <Router>
      <SuperAdminLayout>
        <Routes>
          <Route path="/" element={<SuperAdminDashboard />} />
          <Route path="/admin-management" element={<AdminManagement />} />
       <Route path="/locations" element={<LocationManagement />} />
       <Route path="/enrollment" element={<EnrollmentManagement />} />
<Route path="/school/:id" element={<SchoolDetails />} />
      <Route path="/activity-logs" element={<ActivityLogs />} />
<Route path="/reports" element={<Reports />} />
<Route path="/profile" element={<Profile />} />
        </Routes>
      </SuperAdminLayout>
    </Router>
  );
}

export default App;
