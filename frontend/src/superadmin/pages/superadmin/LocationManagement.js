import React, { useState } from "react";
import "../../styles/superadmin.css";

const LocationManagement = () => {

  const indianStates = [
    "Madhya Pradesh",
    "Uttar Pradesh",
    "Maharashtra",
    "Delhi"
  ];

  const districtData = {
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior"],
    "Uttar Pradesh": ["Lucknow", "Kanpur"],
    "Maharashtra": ["Mumbai", "Pune"],
    "Delhi": ["Central Delhi", "South Delhi"]
  };

  const [locations, setLocations] = useState([
    { id: 1, state: "Madhya Pradesh", district: "Bhopal", center: "Center A" }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    state: "",
    district: "",
    center: ""
  });

  // ADD OR UPDATE
  const handleSave = () => {

    if (!formData.state || !formData.district || !formData.center) return;

    if (editId) {
      setLocations(
        locations.map(loc =>
          loc.id === editId ? { ...formData, id: editId } : loc
        )
      );
    } else {
      setLocations([
        ...locations,
        { id: Date.now(), ...formData }
      ]);
    }

    setShowModal(false);
    setEditId(null);
    setFormData({ state: "", district: "", center: "" });
  };

  const handleEdit = (location) => {
    setEditId(location.id);
    setFormData(location);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setLocations(locations.filter(loc => loc.id !== id));
  };

  return (
    <div className="admin-page">

      <div className="admin-header">
        <h2>Location Management</h2>
        <button onClick={() => setShowModal(true)}>
          + Add New
        </button>
      </div>

      {/* TABLE */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>District</th>
              <th>Center</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {locations.map(loc => (
              <tr key={loc.id}>
                <td>{loc.state}</td>
                <td>{loc.district}</td>
                <td>{loc.center}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(loc)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(loc.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{editId ? "Edit Location" : "Add Location"}</h3>

            {/* STATE */}
            <select
              value={formData.state}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  state: e.target.value,
                  district: ""
                })
              }
            >
              <option value="">Select State</option>
              {indianStates.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>

            {/* DISTRICT */}
            <select
              value={formData.district}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  district: e.target.value
                })
              }
              disabled={!formData.state}
            >
              <option value="">Select District</option>
              {districtData[formData.state]?.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>

            {/* CENTER */}
            <input
              type="text"
              placeholder="Center Name"
              value={formData.center}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  center: e.target.value
                })
              }
            />

            <div className="modal-actions">
              <button onClick={handleSave}>
                {editId ? "Update" : "Save"}
              </button>

              <button onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default LocationManagement;
