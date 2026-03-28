import { useNavigate } from "react-router-dom";
import CenterLayout from "./CenterLayout";

export default function CenterDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <CenterLayout title="DASHBOARD">
      <div className="flex flex-col items-center pt-1 pb-10">
        <h2 className="text-[13px] md:text-[15px] font-extrabold tracking-[1.8px] text-[#111827] text-center uppercase mb-4">
          Welcome Back Matoshree Computer Academy (Centre User)
        </h2>

        <div className="w-full max-w-[580px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border border-slate-200 rounded-tl-[18px] overflow-hidden bg-white shadow-sm">
              <div className="bg-[#1f4a97] text-white text-center py-3 text-[14px] font-bold tracking-[1px] uppercase">
                Students
              </div>

              <div
                onClick={() => navigate("/center/add-student")}
                className="cursor-pointer min-h-[110px] flex flex-col items-center justify-center bg-[#f9fbff] hover:bg-[#f2f7ff] transition"
              >
                <div className="mb-3">
                  <div className="w-[40px] h-[40px] border-[2px] border-[#334155] rounded-[10px] flex items-center justify-center text-[26px] font-semibold text-[#1e293b] leading-none">
                    +
                  </div>
                </div>
                <p className="text-[13px] md:text-[14px] font-extrabold tracking-[1.5px] uppercase text-slate-900">
                  Add Student
                </p>
              </div>
            </div>

            <div className="border border-slate-200 md:border-l-0 rounded-tr-[18px] overflow-hidden bg-white shadow-sm">
              <div className="bg-[#3368bf] text-white text-center py-3 text-[14px] font-bold tracking-[1px] uppercase">
                Download
              </div>

              <div className="cursor-pointer min-h-[110px] flex flex-col items-center justify-center bg-white hover:bg-slate-50 transition">
                <div className="mb-3 text-[#1e293b]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[40px] h-[40px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v1.2A1.8 1.8 0 0 0 6.8 20h10.4A1.8 1.8 0 0 0 19 18.2V17"
                    />
                  </svg>
                </div>

                <p className="text-[13px] md:text-[14px] font-extrabold tracking-[1.5px] uppercase text-slate-900">
                  Download Files
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[52%] mx-auto border border-slate-200 border-t-0 rounded-b-[18px] overflow-hidden bg-white shadow-sm">
            <div
              onClick={() => navigate("/center/students")}
              className="cursor-pointer min-h-[100px] flex flex-col items-center justify-center bg-white hover:bg-slate-50 transition"
            >
              <div className="mb-2 text-[#1e293b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[36px] h-[36px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7 12 4l8 3-8 3-8-3Zm0 5 8 3 8-3M4 17l8 3 8-3"
                  />
                </svg>
              </div>

              <p className="text-[13px] md:text-[14px] font-extrabold tracking-[1.5px] uppercase text-slate-900">
                All Students List
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 bg-[#f44a57] hover:bg-[#ea3847] text-white w-[82px] h-[82px] rounded-xl flex flex-col items-center justify-center font-extrabold text-[10px] tracking-[1.3px] uppercase transition shadow-sm"
        >
          <span className="text-[18px] leading-none mb-1">⏻</span>
          <span>Log Out</span>
        </button>
      </div>
    </CenterLayout>
  );
}