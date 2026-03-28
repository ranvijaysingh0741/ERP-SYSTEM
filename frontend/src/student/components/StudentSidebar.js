import { Link } from "react-router-dom";

function StudentSidebar() {
  return (
    <ul className="space-y-3">

      <li>
        <Link to="/student/dashboard">Dashboard</Link>
      </li>

      <li>
        <Link to="/student/status">My Status</Link>
      </li>

      <li>
        <Link to="/student/documents">Documents</Link>
      </li>

      <li>
        <Link to="/student/timetable">Timetable</Link>
      </li>

      <li>
        <Link to="/student/notifications">Notifications</Link>
      </li>

      <li>
        <Link to="/student/profile">Profile</Link>
      </li>

    </ul>
  );
}

export default StudentSidebar;