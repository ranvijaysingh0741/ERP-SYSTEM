import React, { useState } from "react";
import "../../styles/superadmin.css";

const Profile = () => {

  const [profile, setProfile] = useState({
    name: "Super Admin",
    email: "superadmin@gmail.com",
    phone: "9876543210",
    role: "Super Administrator"
  });

  
  const handleProfileSave = () => {
    alert("Profile Updated Successfully!");
  };


  return (
    <div className="admin-page">

      <div className="admin-header">
        <h2>Profile Settings</h2>
      </div>

      {/* PROFILE CARD */}
      <div className="profile-card">

        <div className="profile-left">
          <div className="profile-avatar">
            SA
          </div>
        </div>

        <div className="profile-right">

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              value={profile.phone}
              onChange={(e) =>
                setProfile({ ...profile, phone: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input type="text" value={profile.role} disabled />
          </div>

          <button className="primary-btn" onClick={handleProfileSave}>
            Save Changes
          </button>

        </div>
      </div>

</div>
  );
};

export default Profile;