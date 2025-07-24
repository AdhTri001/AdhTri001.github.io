import React, { useState } from "react";
import "./Project.css";

export interface ProjectProps {
  title: string;
  start: { month: string; year: number };
  end?: { month: string; year: number };
  description: string[];
  skills?: string[];
  source?: string;
  report?: string;
}

const Project: React.FC<ProjectProps> = ({ title, start, end, description, skills, source, report }) => {
  const [open, setOpen] = useState(false);
  const hasLinks = !!source || !!report;
  const hasSkills = !!skills && skills.length > 0;
  return (
    <div className="project-card">
      <div className="project-dates-row">
        <span className="project-dates">
          {start.month} {start.year} – {end ? `${end.month} ${end.year}` : "Present"}
        </span>
      </div>
      <div className="project-header" onClick={() => setOpen((o) => !o)}>
        <h2>{title}</h2>
      </div>
      {hasLinks && (
        <div className="project-links">
          {source && <a href={source} target="_blank" rel="noopener noreferrer">Source</a>}
          {report && <a href={report} target="_blank" rel="noopener noreferrer">Report</a>}
        </div>
      )}
      <div className={`project-description${open ? " open" : ""} ${!hasLinks ? "no-links" : ""}`}>
        <ul>
          {description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>
      {hasSkills && (
        <ul className="project-skills-list">
          {skills.map((skill) => (
            <li key={skill} className="project-skill-item">{skill}</li>
          ))}
        </ul>
      )}
      {!hasSkills && <div className="project-skills-placeholder" />}
    </div>
  );
};

export default Project;
