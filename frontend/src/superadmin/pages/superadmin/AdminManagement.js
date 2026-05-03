import React, { useState } from "react";
import "../../styles/superadmin.css";

const AdminManagement = () => {

  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: "Rahul Singh",
      email: "rahul@gmail.com",
      state: "Uttar Pradesh",
      centers: 3,
      status: "Active"
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya@gmail.com",
      state: "Delhi",
      centers: 2,
      status: "Inactive"
    }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
    centers: "",
    status: "Active"
  });

  // OPEN CREATE MODAL
  const openCreateModal = () => {
    setEditId(null);
    setFormData({
      name: "",
      email: "",
      state: "",
      centers: "",
      status: "Active"
    });
    setShowModal(true);
  };

  // OPEN EDIT MODAL
  const openEditModal = (admin) => {
    setEditId(admin.id);
    setFormData(admin);
    setShowModal(true);
  };

  // SAVE (CREATE OR UPDATE)
  const handleSave = () => {
    if (editId) {
      // UPDATE
      setAdmins(admins.map(admin =>
        admin.id === editId ? { ...formData, id: editId } : admin
      ));
    } else {
      // CREATE
      const newAdmin = {
        id: Date.now(),
        ...formData
      };
      setAdmins([...admins, newAdmin]);
    }

    setShowModal(false);
  };

  const handleDelete = (id) => {
    setAdmins(admins.filter(admin => admin.id !== id));
  };

  return (
    <div className="admin-page">

      <div className="admin-header">
        <h2>Admin Accounts Management</h2>
        <button onClick={openCreateModal}>+ Create Admin</button>
      </div>

      {/* TABLE */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>State</th>
              <th>Centers</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map(admin => (
              <tr key={admin.id}>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <td>{admin.state}</td>
                <td>{admin.centers}</td>
                <td>{admin.status}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => openEditModal(admin)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(admin.id)}
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
            <h3>{editId ? "Edit Admin" : "Create Admin"}</h3>

            <input
              type="text"
              placeholder="Admin Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })}
            />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })}
            />

            <input
              type="text"
              placeholder="State"
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })}
            />

            <input
              type="number"
              placeholder="Number of Centers"
              value={formData.centers}
              onChange={(e) =>
                setFormData({ ...formData, centers: e.target.value })}
            />

            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>

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

export default AdminManagement;
