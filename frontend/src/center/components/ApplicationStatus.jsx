import { useEffect, useState } from "react";
import CenterLayout from "./CenterLayout";

export default function ApplicationStatus() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStatus();
  }, []);

  const loadStatus = async () => {
    const res = await fetch("https://erp-backend-lrfi.onrender.com/api/center/students", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    const data = await res.json();
    setStudents(data);
  };

  return (
    <CenterLayout title="APPLICATION STATUS">
      <div className="p-3 md:p-5">
        <div className="mx-auto max-w-[1000px] rounded-[20px] border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
          <h2 className="text-[16px] md:text-[18px] font-extrabold uppercase tracking-[2px] text-slate-900 mb-5">
            Application Status
          </h2>

          <div className="space-y-4">
            {students.map((s) => (
              <div key={s.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-bold text-slate-900">{s.full_name || s.student_name}</h3>
                <p className="mt-1 text-sm text-slate-700">Status: {s.status}</p>

                {s.status === "Rejected" && (
                  <p className="mt-2 text-sm font-medium text-red-600">
                    Reason: {s.rejection_reason}
                  </p>
                )}
              </div>
            ))}

            {students.length === 0 && (
              <div className="text-center text-slate-500 py-8">No application records found</div>
            )}
          </div>
        </div>
      </div>
    </CenterLayout>
  );
}