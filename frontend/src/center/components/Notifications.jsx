import { useEffect, useState } from "react";
import CenterLayout from "./CenterLayout";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    const res = await fetch("https://erp-backend-lrfi.onrender.com/api/center/notifications", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    const data = await res.json();
    setNotifications(data);
  };

  return (
    <CenterLayout title="NOTIFICATIONS">
      <div className="p-3 md:p-5">
        <div className="mx-auto max-w-[1000px] rounded-[20px] border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
          <h2 className="text-[16px] md:text-[18px] font-extrabold uppercase tracking-[2px] text-slate-900 mb-5">
            Notifications
          </h2>

          <div className="space-y-4">
            {notifications.map((n) => (
              <div
                key={n.id}
                className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-800"
              >
                {n.message}
              </div>
            ))}

            {notifications.length === 0 && (
              <div className="text-center text-slate-500 py-8">No notifications found</div>
            )}
          </div>
        </div>
      </div>
    </CenterLayout>
  );
}