
import "./Socials.css";

import githubIcon from "../assets/icons/github.svg?react";
import linkedinIcon from "../assets/icons/linkedin.svg?react";
import mailIcon from "../assets/icons/mail.svg?react";
import xIcon from "../assets/icons/x.svg?react";
import DocsIcon from "../assets/icons/docs.svg?react";

interface SocialsProps {
  socials?: {
    github?: string;
    linkedin?: string;
    mail?: string;
    x?: string;
  },
  resumeUrl: string;
}

const SOCIALS_ICONS = {
  github: githubIcon,
  linkedin: linkedinIcon,
  mail: mailIcon,
  x: xIcon,
};

function Socials({ socials, resumeUrl }: SocialsProps) {
  return (
    <div className="socials">
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
                <Icon className="social-icon" title={key} />
              </a>
            )
          );
        })
      }

      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        <DocsIcon className="resume-icon" title="Resume" />
        Resume
      </a>
    </div >
  );
}

export default Socials;
