import { useState, useEffect } from "react";
import { indiaData } from "../indiaData";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CenterDashboard() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Draft");
  const [adminNotified, setAdminNotified] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    state: "",
    district: "",
    course: "",
    admissionType: "Regular",
  });

  const [documents, setDocuments] = useState({});

  const districts = indiaData[form.state] || [];

  /* ================= AUTH CHECK ================= */

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }

  }, [navigate]);

  /* ================= FORM CHANGE ================= */

  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "state") {
      setForm({ ...form, state: value, district: "" });
    } else {
      setForm({ ...form, [name]: value });
    }

  };

  /* ================= FILE CHANGE ================= */

  const handleFileChange = (e) => {

    const { name, files } = e.target;

    setDocuments({
      ...documents,
      [name]: files[0],
    });

  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async () => {

    if (!form.fullName || !form.phone || !form.state) {
      alert("Please fill required fields ⚠️");
      return;
    }

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("full_name", form.fullName);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("dob", form.dob);
      formData.append("gender", form.gender);
      formData.append("state", form.state);
      formData.append("district", form.district);
      formData.append("course", form.course);
      formData.append("admission_type", form.admissionType);

      if (documents.marksheet) {
        formData.append("marksheet", documents.marksheet);
      }

      if (documents.tc) {
        formData.append("tc", documents.tc);
      }

      if (documents.idProof) {
        formData.append("id_proof", documents.idProof);
      }

      if (documents.additional) {
        formData.append("additional_doc", documents.additional);
      }

      await axios.post(
        "http://localhost:5000/api/center/students",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStatus("Pending Approval");
      setAdminNotified(true);

      alert("Student submitted successfully ✅");

    } catch (err) {

      console.log(err);
      alert("Submission failed ❌");

    }

    setLoading(false);

  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-[#eef2ff] py-12 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Add New Student
          </h1>
          <p className="text-gray-500 mt-2">
            Fill the details carefully before submission
          </p>
        </div>

        {/* Student Information */}

        <Section title="Student Information">

          <Input label="Full Name" name="fullName" onChange={handleChange} />

          <Input label="Email" name="email" type="email" onChange={handleChange} />

          <Input label="Phone" name="phone" onChange={handleChange} />

          <Input label="Date of Birth" name="dob" type="date" onChange={handleChange} />

          <Select label="Gender" name="gender" onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>

          <Select label="State" name="state" value={form.state} onChange={handleChange}>
            {Object.keys(indiaData).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>

          <Select
            label="District"
            name="district"
            value={form.district}
            onChange={handleChange}
            disabled={!form.state}
          >
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </Select>

          <Select label="Course" name="course" onChange={handleChange}>
            <option value="B.Tech">B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="MCA">MCA</option>
          </Select>

          <Select label="Admission Type" name="admissionType" onChange={handleChange}>
            <option value="Regular">Regular</option>
            <option value="Scholarship">Scholarship</option>
            <option value="Free Seat">Free Seat</option>
          </Select>

        </Section>

        {/* Documents */}

        <Section title="Mandatory Documents">

          <FileInput label="Marksheet" name="marksheet" onChange={handleFileChange} />

          <FileInput label="Transfer Certificate" name="tc" onChange={handleFileChange} />

          <FileInput label="ID Proof" name="idProof" onChange={handleFileChange} />

          <FileInput label="Additional Document" name="additional" onChange={handleFileChange} />

        </Section>

        {/* Status */}

        <div className="bg-white rounded-xl p-6 shadow-md">

          <div className="flex justify-between items-center">

            <div>
              Status :
              <span className="ml-2 text-yellow-600 font-semibold">
                {status}
              </span>
            </div>

            {adminNotified && (
              <div className="text-green-600">
                Admin Notified 🔔
              </div>
            )}

          </div>

          <div className="flex justify-end mt-6">

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

/* ================= COMPONENTS ================= */

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md mb-10">

      <h2 className="text-lg font-semibold mb-6">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>

    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm mb-1">
        {label}
      </label>

      <input
        {...props}
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  );
}

function Select({ label, children, ...props }) {
  return (
    <div>
      <label className="block text-sm mb-1">
        {label}
      </label>

      <select
        {...props}
        className="w-full border rounded-lg px-3 py-2"
      >
        <option value="">Select</option>
        {children}
      </select>

    </div>
  );
}

function FileInput({ label, name, onChange }) {
  return (
    <div>

      <label className="block text-sm mb-1">
        {label}
      </label>

      <input
        type="file"
        name={name}
        onChange={onChange}
        className="w-full border border-dashed rounded-lg px-3 py-2"
      />

    </div>
  );
}