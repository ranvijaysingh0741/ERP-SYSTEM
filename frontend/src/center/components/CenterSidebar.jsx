import { Link, useNavigate } from "react-router-dom";

export default function CenterSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="w-64 bg-white border-r border-slate-200 min-h-screen p-6 flex flex-col justify-between shadow-sm">
      <div>
        <h2 className="text-[20px] font-extrabold text-slate-900 mb-8 uppercase tracking-[1.5px]">
          Center Panel
        </h2>

        <div className="space-y-3">
          <Link
            to="/center/dashboard"
            className="block rounded-lg px-4 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium"
          >
            Dashboard
          </Link>

          <Link
            to="/center/add-student"
            className="block rounded-lg px-4 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium"
          >
            Add Student
          </Link>

          <Link
            to="/center/students"
            className="block rounded-lg px-4 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium"
          >
            My Students
          </Link>

          <Link
            to="/center/status"
            className="block rounded-lg px-4 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium"
          >
            Application Status
          </Link>

          <Link
            to="/center/notifications"
            className="block rounded-lg px-4 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium"
          >
            Notifications
          </Link>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-lg mt-10 font-semibold"
      >
        Logout
      </button>
    </div>
  );
}