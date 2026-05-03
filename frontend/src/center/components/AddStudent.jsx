import { useState } from "react";
import Swal from "sweetalert2";
import CenterLayout from "./CenterLayout";

export default function AddStudent() {
  const [form, setForm] = useState({
    course: "",
    admission_type: "",
    medium: "",
    exam_type: "",
    session: "2025-26",
    session_type: "",
    student_type: "Private",
    student_name: "",
    father_name: "",
    mother_name: "",
    aadhaar: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "Male",
    qualification: "",
    center: "1005 - MCA",
    category: "",
    address: ""
  });

  const courses = [
    "12TH Arts",
    "12TH Commerce",
    "12TH Science(PCB)",
    "12TH Science(PCM)",
    "10TH Common",
    "12TH Commerce (Computer)"
  ];

  const admissionTypes = [
    "New Admission",
    "Document Correction",
    "Duplicate Document",
    "Pending Marksheet"
  ];

  const mediums = ["Hindi", "English", "Other"];

  const examTypes = [
    "Full",
    "Supplementary",
    "TOC",
    "On Demand",
    "Vocational"
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.course ||
      !form.admission_type ||
      !form.medium ||
      !form.exam_type ||
      !form.student_name ||
      !form.father_name ||
      !form.mobile
    ) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Fill all Required fields"
      });
      return;
    }

    try {
      const res = await fetch("https://erp-backend-lrfi.onrender.com/api/center/add-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Student Added Successfully"
        });

        setForm({
          course: "",
          admission_type: "",
          medium: "",
          exam_type: "",
          session: "2025-26",
          session_type: "",
          student_type: "Private",
          student_name: "",
          father_name: "",
          mother_name: "",
          aadhaar: "",
          email: "",
          mobile: "",
          dob: "",
          gender: "Male",
          qualification: "",
          center: "1005 - MCA",
          category: "",
          address: ""
        });
      } else {
        Swal.fire("Error", data.message, "error");
      }
    } catch (err) {
      Swal.fire("Error", "Server Error", "error");
    }
  };

  const labelClass =
    "block text-[11px] md:text-[12px] font-extrabold tracking-[1.8px] uppercase text-[#0f172a] mb-2";

  const inputClass =
    "w-full rounded-[12px] border border-[#e9e9e9] bg-[#f3f3f3] px-4 py-3 text-[14px] text-[#1f2937] outline-none transition placeholder:text-[#6b7280] focus:border-[#3567b7] focus:bg-white";

  const sectionHeaderStyle = {
    background:
      "linear-gradient(90deg, #1f4b93 0%, #2a56a0 50%, #315fa8 100%)",
    backgroundImage: `
      radial-gradient(circle at 12% 20%, rgba(255,255,255,0.10) 0, rgba(255,255,255,0.10) 18%, transparent 18%),
      radial-gradient(circle at 58% 10%, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 16%, transparent 16%),
      radial-gradient(circle at 88% 40%, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 16%, transparent 16%)
    `
  };

  return (
    <CenterLayout title="STUDENT> ADD STUDENT">
      <div className="px-3 md:px-6 py-5">
        <form onSubmit={handleSubmit} className="mx-auto max-w-[1220px]">
          {/* STUDENT COURSE */}
          <div className="rounded-[24px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] overflow-hidden mb-6">
            <div
              className="px-8 py-5 text-black text-[15px] md:text-[16px] font-extrabold tracking-[1.8px] uppercase rounded-t-[24px]"
              style={sectionHeaderStyle}
            >
              Student Course
            </div>

            <div className="px-7 md:px-10 py-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className={labelClass}>Student Course </label>
                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select Course</option>
                    {courses.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Admission Type*</label>
                  <select
                    name="admission_type"
                    value={form.admission_type}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select Admission Type</option>
                    {admissionTypes.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Medium*</label>
                  <select
                    name="medium"
                    value={form.medium}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select Medium</option>
                    {mediums.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* STUDENT INFORMATION */}
          <div className="rounded-[24px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] overflow-hidden">
            <div
              className="px-8 py-5 text-black text-[15px] md:text-[16px] font-extrabold tracking-[1.8px] uppercase rounded-t-[24px]"
              style={sectionHeaderStyle}
            >
              Student Information
            </div>

            <div className="px-7 md:px-10 py-7">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
                <div>
                  <label className={labelClass}>Session *</label>
                  <select
                    name="session"
                    value={form.session}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="2025-26">2025-26</option>
                    <option value="2024-25">2024-25</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Session Type*</label>
                  <select
                    name="session_type"
                    value={form.session_type}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select Session Type</option>
                    <option>Annual</option>
                    <option>Supplementary</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Student Type *</label>
                  <select
                    name="student_type"
                    value={form.student_type}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option>Private</option>
                    <option>Regular</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Exam Type*</label>
                  <select
                    name="exam_type"
                    value={form.exam_type}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select Exam Type</option>
                    {examTypes.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Student Name*</label>
                  <input
                    name="student_name"
                    placeholder="Students Name"
                    value={form.student_name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Father Name*</label>
                  <input
                    name="father_name"
                    placeholder="Father Name"
                    value={form.father_name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Mother Name*</label>
                  <input
                    name="mother_name"
                    placeholder="Mother Name"
                    value={form.mother_name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Aadhaar No (Last 6 Digits)*</label>
                  <input
                    name="aadhaar"
                    placeholder="Aadhar No."
                    value={form.aadhaar}
                    onChange={handleChange}
                    maxLength={6}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    name="email"
                    placeholder="Email Id."
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Mobile</label>
                  <input
                    name="mobile"
                    placeholder="Mobile No."
                    value={form.mobile}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>D.O.B.*</label>
                  <input
                    type="date"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Gender*</label>
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Previous Qualification*</label>
                  <input
                    name="qualification"
                    placeholder="Previous Qualification"
                    value={form.qualification}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Centre *</label>
                  <select
                    name="center"
                    value={form.center}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option>1005 - MCA</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Student Category*</label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select Category</option>
                    <option>General</option>
                    <option>OBC</option>
                    <option>SC</option>
                    <option>ST</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className={labelClass}>Full Address*</label>
                <textarea
                  name="address"
                  placeholder="Address"
                  value={form.address}
                  onChange={handleChange}
                  className={`${inputClass} min-h-[88px] resize-none`}
                />
              </div>

              <p className="mt-7 text-[12px] font-extrabold tracking-[1.6px] uppercase text-[#111827]">
                * All Fields Are Required
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-6 pb-1">
            <button
              type="submit"
              className="bg-[#111111] hover:bg-[#000000] text-white px-8 py-3 rounded-[12px] text-[13px] font-extrabold tracking-[1.8px] uppercase shadow-md transition"
            >
              Save Student
            </button>
          </div>
        </form>
      </div>
    </CenterLayout>
  );
}
