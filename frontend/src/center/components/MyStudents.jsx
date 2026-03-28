import { useEffect, useState, useCallback } from "react";
import CenterLayout from "./CenterLayout";

export default function MyStudents() {
  const [students, setStudents] = useState([]);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [center, setCenter] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setCenter(user.center || "1005 - BVSSE");
    }
  }, []);

  const loadStudents = useCallback(
    async (pageNo = 1) => {
      try {
        const res = await fetch(
          `https://erp-backend-lrfi.onrender.com/api/center/students?page=${pageNo}&search=${search}&status=${status}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        );

        const data = await res.json();
        setStudents(data);
      } catch (err) {
        console.log(err);
      }
    },
    [search, status]
  );

  useEffect(() => {
    loadStudents(page);
  }, [loadStudents, page]);

  const handleReset = () => {
    setStatus("");
    setSearch("");
    setPage(1);
  };

  const getStatusClass = (studentStatus) => {
    if (studentStatus === "Approved") {
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    }
    if (studentStatus === "Rejected") {
      return "bg-rose-100 text-rose-700 border border-rose-200";
    }
    return "bg-amber-100 text-amber-700 border border-amber-200";
  };

  const sectionHeaderStyle = {
    background:
      "linear-gradient(90deg, #1f4b93 0%, #2a56a0 50%, #315fa8 100%)",
    backgroundImage: `
      radial-gradient(circle at 12% 20%, rgba(255,255,255,0.10) 0, rgba(255,255,255,0.10) 18%, transparent 18%),
      radial-gradient(circle at 58% 10%, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 16%, transparent 16%),
      radial-gradient(circle at 88% 40%, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 16%, transparent 16%)
    `
  };

  const labelClass =
    "block text-[11px] md:text-[12px] font-extrabold tracking-[1.8px] uppercase text-[#0f172a] mb-2";

  const inputClass =
    "w-full rounded-[12px] border border-[#e9e9e9] bg-[#f3f3f3] px-4 py-3 text-[14px] text-[#1f2937] outline-none transition placeholder:text-[#6b7280] focus:border-[#3567b7] focus:bg-white";

  return (
    <CenterLayout title="STUDENT> ALL STUDENTS LIST">
      <div className="px-3 md:px-6 py-5 space-y-6">
        {/* SEARCH */}
        <div className="rounded-[24px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] overflow-hidden">
          <div
            className="w-full rounded-[12px]  bg-[#0a0a0a] px-8 py-5 text-black text-[15px] md:text-[16px] font-extrabold tracking-[1.8px] uppercase rounded-t-[24px]"
            style={sectionHeaderStyle}
          >
            Search
          </div>

          <div className="px-7 md:px-10 py-7">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-4">
                <label className={labelClass}>Search By</label>
                <select className={inputClass}>
                  <option>Center Name</option>
                  <option>Student Name</option>
                  <option>Father Name</option>
                  <option>Mobile</option>
                  <option>Email</option>
                </select>
              </div>

              <div className="lg:col-span-4">
                <label className={labelClass}>Centre</label>
                <select value={center} disabled className={inputClass}>
                  <option>{center}</option>
                </select>
              </div>

              <div className="lg:col-span-2">
                <label className={labelClass}>Search Value</label>
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="lg:col-span-1 flex items-end">
               <button
               onClick={() => loadStudents(1)}
               className="w-full rounded-[12px] bg-[#0a0a0a] px-4 py-3 text-[13px] font-extrabold uppercase tracking-[1.3px] text-red hover:bg-[#2d1e50] transition"
>
                  Search
                </button>
              </div>

              <div className="lg:col-span-1 flex items-end">
                <button
                  onClick={handleReset}
                  className="w-full rounded-[12px] bg-[#ff5252] px-4 py-3 text-[13px] font-extrabold uppercase tracking-[1.3px] text-white hover:bg-[#ef4444]"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ALL STUDENTS LIST */}
        <div className="rounded-[24px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] overflow-hidden">
         <div
  className="px-8 py-5 text-black text-[15px] md:text-[16px] font-extrabold tracking-[1.8px] uppercase rounded-t-[24px]"
  style={sectionHeaderStyle}
>
  All Students List
</div>

          <div className="px-7 md:px-10 py-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className={labelClass}>Select Session</label>
                <select className={inputClass}>
                  <option>Select Session</option>
                  <option>2025-26</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Select Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select Status</option>
                  <option>All Students</option>
                  <option>Pending Students</option>
                  <option>Pending Payment</option>
                  <option>Approved Payment</option>
                  <option>Rejected Payment</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => loadStudents(1)}
                  className="w-full rounded-[12px] bg-[#0f8b8d] px-4 py-3 text-[13px] font-extrabold uppercase tracking-[1.3px] text-white hover:bg-[#0b7274]"
                >
                  Filter
                </button>
              </div>
            </div>

            <div className="mt-7 border-t border-slate-200 pt-5">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">
                <div className="text-[#111827] font-extrabold tracking-[1.6px] uppercase text-[12px] md:text-[13px] leading-7">
                  <div>Total: {students.length} Results</div>
                  <div>Showing: {students.length} Results / Page</div>
                </div>

                <div className="flex gap-3 w-full lg:w-[520px]">
                  <input
                    type="text"
                    placeholder="Show Data i.e. 10"
                    className="flex-1 rounded-[12px] border border-[#e9e9e9] bg-[#f3f3f3] px-4 py-3 text-[14px] outline-none"
                  />
                  <button className="rounded-[12px] bg-[#111111] px-8 py-3 text-[13px] font-extrabold uppercase tracking-[1.3px] text-white">
                    Go
                  </button>
                </div>
              </div>

              <input
                type="text"
                placeholder="Search all data"
                className="w-full rounded-[12px] border border-[#e9e9e9] bg-[#f3f3f3] px-4 py-3 text-[14px] outline-none mb-5"
              />

              <p className="text-[11px] font-semibold text-red-500 mb-5">
                Block * - Student can't see their admit card and result.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[1300px] text-[13px]">
                  <thead className="bg-[#2e518f] text-white">
                    <tr>
                      <th className="px-4 py-4 text-left font-extrabold uppercase tracking-[1px]">ID</th>
                      <th className="px-4 py-4 text-left font-extrabold uppercase tracking-[1px]">Edit</th>
                      <th className="px-4 py-4 text-left font-extrabold uppercase tracking-[1px]">Session</th>
                      <th className="px-4 py-4 text-left font-extrabold uppercase tracking-[1px]">Roll No.</th>
                      <th className="px-4 py-4 text-left font-extrabold uppercase tracking-[1px]">Enrollment No.</th>
                      <th className="px-4 py-4 text-left font-extrabold uppercase tracking-[1px]">Student Name</th>
                      <th className="px-4 py-4 text-left font-extrabold uppercase tracking-[1px]">Father Name</th>
                      <th className="px-4 py-4 text-left font-extrabold uppercase tracking-[1px]">Center</th>
                      <th className="px-4 py-4 text-left font-extrabold uppercase tracking-[1px]">Block*</th>
                      <th className="px-4 py-4 text-left font-extrabold uppercase tracking-[1px]">Payment Status</th>
                      <th className="px-4 py-4 text-left font-extrabold uppercase tracking-[1px]">Ack Letter</th>
                      <th className="px-4 py-4 text-left font-extrabold uppercase tracking-[1px]">Add By</th>
                      <th className="px-4 py-4 text-left font-extrabold uppercase tracking-[1px]">Dated</th>
                    </tr>
                  </thead>

                  <tbody>
                    {students.length > 0 ? (
                      students.map((s, index) => (
                        <tr
                          key={s.id}
                          className={`border-b border-slate-100 ${
                            index % 2 === 0 ? "bg-white" : "bg-slate-50"
                          }`}
                        >
                          <td className="px-4 py-4 font-semibold">{s.id}</td>
                          <td className="px-4 py-4">
                            <button className="bg-green-500 text-white px-3 py-1 rounded text-xs font-bold">
                              Edit
                            </button>
                          </td>
                          <td className="px-4 py-4">2025-26</td>
                          <td className="px-4 py-4">-</td>
                          <td className="px-4 py-4">-</td>
                          <td className="px-4 py-4 font-semibold">{s.student_name}</td>
                          <td className="px-4 py-4">{s.father_name || "-"}</td>
                          <td className="px-4 py-4">{center}</td>
                          <td className="px-4 py-4">○</td>
                          <td className="px-4 py-4">
                            <span
                              className={`inline-flex rounded-full px-3 py-1 text-[12px] font-bold ${getStatusClass(
                                s.status
                              )}`}
                            >
                              {s.status}
                            </span>
                          </td>
                          <td className="px-4 py-4">-</td>
                          <td className="px-4 py-4">VBSE</td>
                          <td className="px-4 py-4">
                            {new Date(s.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="13"
                          className="px-6 py-12 text-center text-slate-500 font-medium"
                        >
                          No students found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center items-center gap-4 pt-6">
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                  className="rounded-[12px] bg-[#86d49c] px-6 py-3 text-[13px] font-extrabold text-white disabled:opacity-50"
                >
                  Prev
                </button>

                <span className="rounded-[12px] bg-white px-6 py-3 text-[13px] font-extrabold text-slate-800 border border-slate-200 shadow-sm">
                  Page {page}
                </span>

                <button
                  onClick={() => setPage(page + 1)}
                  className="rounded-[12px] bg-[#ef4444] px-6 py-3 text-[13px] font-extrabold text-white"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CenterLayout>
  );
}