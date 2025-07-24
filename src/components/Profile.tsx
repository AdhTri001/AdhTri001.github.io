import "./Profile.css";

import githubIcon from "../assets/icons/github.svg?react";
import linkedinIcon from "../assets/icons/linkedin.svg?react";
import mailIcon from "../assets/icons/mail.svg?react";
import xIcon from "../assets/icons/x.svg?react";


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
        I’m Adheesh Trivedi, a third‑year Computer Science & Engineering student at IISER Bhopal, driven by a deep love of theoretical computer science. I thrive on puzzles at the intersection of math, code, and impact.
      </p>
      <p className="profile-desc">
        Beyond Code, I like to do music and practice typing.
      </p>
      <div className="profile-socials">
        {SOCIALS.map((s, idx) => (
          <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" >
            <s.icon className="profile-social-icon" title={s.alt} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Profile;
