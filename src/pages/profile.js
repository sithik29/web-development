import React, { useState } from 'react';
import '../assets/css/profile.css'
const Profile = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [profileImage, setProfileImage] = useState(user.profileImage || 'default-profile-image.jpg'); // Provide a default image URL

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    // Save user information, for example, make an API request
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="profile-container">
          <div className="profile-picture">
            <img src={profileImage} alt="Profile" />
          </div>
          <h2 className="user-name">{name}</h2>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
