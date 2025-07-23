import React from "react";
import "./Profile.css";

interface ProfileProps {
  image: string;
  description: string;
}

const Profile: React.FC<ProfileProps> = ({ image, description }) => (
  <div className="profile">
    <img src={image} alt="Profile" className="profile-img" />
    <p className="profile-desc">{description}</p>
  </div>
);

export default Profile;
