import "./Profile.css";


interface ProfileProps {
  image: string;
  about: string[];
}

function Profile({ image, about }: ProfileProps) {
  return (
    <div className="profile">
      {/* Profile image */}
      <img src={image} alt="Profile" className="profile-img" />

      {/* Profile description */}
      {about.map((line, idx) => (
        <p key={idx} className="profile-desc">
          {line}
        </p>
      ))}
    </div>
  );
}

export default Profile;
