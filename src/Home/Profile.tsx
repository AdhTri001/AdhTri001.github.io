import "./Profile.css";

import githubIcon from "../assets/icons/github.svg?react";
import linkedinIcon from "../assets/icons/linkedin.svg?react";
import mailIcon from "../assets/icons/mail.svg?react";
import xIcon from "../assets/icons/x.svg?react";


interface ProfileProps {
  image: string;
  about: string[];
  socials?: {
    github?: string;
    linkedin?: string;
    mail?: string;
    x?: string;
  };
}

const SOCIALS_ICONS = {
  github: githubIcon,
  linkedin: linkedinIcon,
  mail: mailIcon,
  x: xIcon,
};

function Profile({ image, about, socials }: ProfileProps) {
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

      {/* Profile socials */}
      <div className="profile-socials">
        {socials &&
          Object.entries(socials).map(([key, value]) => {
            const Icon = SOCIALS_ICONS[key as keyof typeof SOCIALS_ICONS];
            return (
              value && (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="profile-social-icon" title={key} />
                </a>
              )
            );
          })}
      </div>
    </div>
  );
}

export default Profile;
