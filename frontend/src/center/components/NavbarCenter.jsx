import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function NavbarCenter() {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const isStudentActive =
    location.pathname.includes("/center/add-student") ||
    location.pathname.includes("/center/students");
    
const navBtn = (active = false) =>
  `px-4 py-1.5 rounded-md text-[11px] md:text-[12px] font-bold tracking-[1px] uppercase transition ${
    active
      ? "bg-[#22c55e] text-white"
      : "bg-[#ef4444] text-white hover:bg-[#dc2626]"
  }`;
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto flex justify-center items-center gap-4 md:gap-6 py-3">
        <button
          onClick={() => navigate("/center/dashboard")}
          className={navBtn(location.pathname === "/center/dashboard")}
        >
          Dashboard
        </button>

        <div
          className="relative"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <button className={navBtn(isStudentActive)}>Student</button>

          {show && (
            <div className="absolute left-1/2 -translate-x-1/2 top-10 bg-white border border-gray-200 shadow-md min-w-[190px] z-50 rounded-md overflow-hidden">
              <div
                onClick={() => navigate("/center/add-student")}
                className="px-4 py-2.5 text-[13px] font-medium text-[#1f1f1f] hover:bg-[#f4f6fa] cursor-pointer"
              >
                Add Student
              </div>

              <div
                onClick={() => navigate("/center/students")}
                className="px-4 py-2.5 text-[13px] font-medium text-[#1f1f1f] hover:bg-[#f4f6fa] cursor-pointer border-t border-[#ececec]"
              >
                All Students List
              </div>
            </div>
          )}
        </div>

        <button className={navBtn(false)}>Download</button>
      </div>
    </div>
  );
}