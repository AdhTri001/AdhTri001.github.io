import "./ActivityCard.css";

export interface ActivityCardProps {
  title: string;
  affiliation?: string;
  start: { month: string; year: number };
  end?: { month: string; year: number };
  description: string[];
  skills?: string[];
  links?: { text: string, url: string }[];
  isExpandable?: boolean;
}


import React, { useState } from "react";

function formatDate(date: { month: string; year: number }) {
  return `${date.month} ${date.year}`;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  affiliation,
  start,
  end,
  description,
  skills,
  links,
  isExpandable = false,
}) => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    if (isExpandable) setExpanded((e) => !e);
  };

  const dateString = `${formatDate(start)} — ${end ? formatDate(end) : "Present"}`;

  return (
    <div
      className={`activity-card`}
      onClick={handleToggle}
      style={!isExpandable ? { cursor: "default" } : {}}
    >
      <div className="activity-card-date">{dateString}</div>

      <div className="activity-card-title">{title} {affiliation && (
        <span className="activity-card-affiliation">@ {affiliation}</span>
      )}
      </div>

      <div className={`activity-card-description ${isExpandable ? "expandable" : "open"}${isExpandable && expanded ? " open" : ""}`}>
        {links && links.length > 0 && (
          <div className="activity-card-links">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="activity-card-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
        {description.map((desc, idx) => (
          <p key={idx} dangerouslySetInnerHTML={{ __html: desc }} />
        ))}
        {skills && skills.length > 0 && (
          <ul className="activity-card-skills">
            {skills.map((skill, idx) => (
              <li key={idx} className="bubble">{skill}</li>
            ))}
          </ul>
        )}
      </div>
    </div >
  );
};

export default ActivityCard;
