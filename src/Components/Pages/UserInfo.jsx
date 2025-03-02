import React, { useState } from 'react';
import './UserInfo.css';

const UserInfo = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="user-info-container">
      <h2>User Information</h2>
      <div className="user-info-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          disabled={!isEditing}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          disabled={!isEditing}
        />

        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          disabled={!isEditing}
        />

        {!isEditing ? (
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
        ) : (
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
