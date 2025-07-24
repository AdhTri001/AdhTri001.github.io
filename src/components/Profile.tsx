import githubIcon from "../assets/icons/github.svg?react";
import linkedinIcon from "../assets/icons/linkedin.svg?react";
import mailIcon from "../assets/icons/mail.svg?react";
import xIcon from "../assets/icons/x.svg?react";

import "./Profile.css";


interface ProfileProps {
  image: string;
}

const SOCIALS = [
  {
    url: "https://github.com/AdhTri001",
    icon: githubIcon,
    alt: "GitHub"
  },
  {
    url: "https://linkedin.com/in/AdhTri001",
    icon: linkedinIcon,
    alt: "LinkedIn"
  },
  {
    url: "mailto:adheesh22@iiserb.ac.in",
    icon: mailIcon,
    alt: "Mail"
  },
  {
    url: "https://x.com/AdhTri001",
    icon: xIcon,
    alt: "X"
  }
];

function Profile({ image }: ProfileProps) {
  return (
    <div className="profile">
      <img src={image} alt="Profile" className="profile-img" />
      <p className="profile-desc">
        I'm a Computer Science student at Indian Institute of Science Education and Research, Bhopal.
      </p>
      <div className="profile-socials">
        {SOCIALS.map((s, idx) => (
          <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer">
            <s.icon className="profile-social-icon" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Profile;
