import { useEffect, useState } from "react";

export default function Topbar() {
  const [time, setTime] = useState("");
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div
      className="relative border-b border-[#e5e7eb]"
      style={{
        backgroundColor: "#f8fafc",
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(191,219,254,0.16) 0, rgba(191,219,254,0.16) 6%, transparent 6%),
          linear-gradient(135deg, rgba(148,163,184,0.05) 10%, transparent 10%)
        `,
        backgroundSize: "280px 280px, 420px 420px",
        backgroundPosition: "left top, center top",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/logo.png"
            alt="logo"
            className="h-9 w-9 md:h-10 md:w-10 object-contain shrink-0"
          />

          <div className="leading-tight min-w-0">
            <div className="text-[#1d3f87] font-semibold text-[12px] md:text-[14px] truncate">
              Board of Vocational and Skills Higher Secondary Education
            </div>
            <div className="text-[#1d3f87] font-medium text-[11px] md:text-[12px] truncate">
              Bhopal, Madhya Pradesh
            </div>
          </div>
        </div>

        <div className="relative shrink-0">
          <div
            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#1d4b9a] text-white flex items-center justify-center cursor-pointer text-[14px]"
            onClick={() => setShowMenu(!showMenu)}
          >
            👤
          </div>

          {showMenu && (
            <div className="absolute right-0 top-10 bg-white border border-gray-200 shadow-lg p-3 min-w-[140px] z-50 rounded-md">
              <button
                onClick={handleLogout}
                className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white py-2 font-bold uppercase text-xs transition rounded"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#d7cfbe]">
  <div className="max-w-[1400px] mx-auto px-4 py-1.5 flex flex-wrap justify-center items-center gap-2 text-[10px] md:text-[12px] font-bold uppercase tracking-[0.6px]">
    <span>{user?.center_code || "MCA45"} (User)</span>
    <span>IP: 2401:4900:88F2:124B:9503:8AA2:8618:6FBD</span>

    <span className="bg-black text-white px-2 py-[2px] text-[10px] md:text-[12px] normal-case">
      {time}
    </span>
  </div>
</div>
        
    </div>
  );
}