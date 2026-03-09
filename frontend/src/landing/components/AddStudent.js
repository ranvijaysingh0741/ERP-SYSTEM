import { useState } from "react";
import { indiaData } from "../indiaData";

export default function AddStudent() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "state") {
      setForm({ ...form, state: value, district: "" });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setDocuments({ ...documents, [name]: files[0] });
  };

  const handleSubmit = () => {
    if (!form.fullName || !form.email || !form.state) {
      alert("Please fill required fields ⚠️");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setStatus("Pending Approval");
      setAdminNotified(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#eef2ff] py-12 px-4">

  {/* Blob 1 */}
  <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-purple-300 rounded-full opacity-40 blur-[120px]"></div>

  {/* Blob 2 */}
  <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-indigo-300 rounded-full opacity-40 blur-[140px]"></div>

  {/* Blob 3 */}
  <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-pink-200 rounded-full opacity-30 blur-[120px]"></div>

  <div className="relative z-10"></div>

      {/* Abstract Background Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#dbe3f0] rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#dde6f5] rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#e6ecf8] rounded-full opacity-30 blur-2xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Add New Student
          </h1>
          <p className="text-gray-500 mt-2">
            Fill the details carefully before submission
          </p>
        </div>

        {/* Student Information Section */}
        <Section title="Student Information">
          <Input label="Full Name" name="fullName" onChange={handleChange} />
          <Input label="Email" name="email" type="email" onChange={handleChange} />
          <Input label="Phone" name="phone" onChange={handleChange} />
          <Input label="Date of Birth" name="dob" type="date" onChange={handleChange} />

          <Select label="Gender" name="gender" onChange={handleChange}>
            <option>Male</option>
            <option>Female</option>
          </Select>

          <Select label="State" name="state" value={form.state} onChange={handleChange}>
            {Object.keys(indiaData).map((state) => (
              <option key={state}>{state}</option>
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
              <option key={district}>{district}</option>
            ))}
          </Select>

          <Select label="Course" name="course" onChange={handleChange}>
            <option>B.Tech</option>
            <option>BCA</option>
            <option>BBA</option>
            <option>MCA</option>
          </Select>

          <Select label="Admission Type" name="admissionType" onChange={handleChange}>
            <option>Regular</option>
            <option>Management</option>
            <option>NRI</option>
            <option>Scholarship</option>
          </Select>
        </Section>

        {/* Mandatory Documents Section */}
        <Section title="Mandatory Documents">
          <FileInput label="Marksheet" name="marksheet" onChange={handleFileChange} />
          <FileInput label="Transfer Certificate" name="tc" onChange={handleFileChange} />
          <FileInput label="ID Proof" name="idProof" onChange={handleFileChange} />
          <FileInput label="Additional Document" name="additional" onChange={handleFileChange} />
        </Section>

        {/* Scholarship Section */}
        <Section title="Scholarship Details (Optional)">
          <Input label="Scholarship Type" name="scholarshipType" onChange={handleChange} />
          <Input label="Scholarship Amount" name="scholarshipAmount" onChange={handleChange} />
        </Section>

        {/* Status + Submit Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-gray-100">

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-700 font-medium">
              Status:
              <span className={`ml-3 px-3 py-1 rounded-full text-sm font-semibold ${
                status === "Pending Approval"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-gray-200 text-gray-600"
              }`}>
                {status}
              </span>
            </div>

            {adminNotified && (
              <div className="text-green-600 mt-3 md:mt-0">
                Admin Notified 🔔
              </div>
            )}
          </div>

          <div className="flex justify-end mt-8">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`px-8 py-3 rounded-xl font-semibold text-white transition duration-300 ${
                loading
                  ? "bg-gray-400"
                  : "bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg"
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

/* ================= Section Component ================= */

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-14 border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-3">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}

/* ================= Input Components ================= */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input
        {...props}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none transition bg-white"
      />
    </div>
  );
}

function Select({ label, children, ...props }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <select
        {...props}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none transition bg-white"
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
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input
        type="file"
        name={name}
        onChange={onChange}
        className="w-full border border-dashed border-gray-400 rounded-lg px-3 py-2 hover:border-indigo-500 transition cursor-pointer bg-white"
      />
    </div>
  );
}