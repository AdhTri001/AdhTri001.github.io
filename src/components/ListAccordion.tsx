import React, { useState } from "react";
import "./ListAccordion.css";

interface ListAccordionProps {
  title: string;
  items: string[];
}

const ListAccordion: React.FC<ListAccordionProps> = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`list-accordion-card${open ? " open" : ""}`}>
      <div className="list-accordion-header" onClick={() => setOpen((o) => !o)}>
        <span>{title}</span>
        <span className={`arrow${open ? " open" : ""}`}>▼</span>
      </div>
      <ul className="list-accordion-list" style={{ maxHeight: open ? 200 : 0, opacity: open ? 1 : 0 }}>
        {items.map((item) => (
          <li key={item} className="list-accordion-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListAccordion;
