import { useMemo } from "react";
import PageLayout from "../components/PageLayout";
import Project from "../components/Project";
import type { ProjectProps } from "../components/Project";
import worksDataRaw from "../assets/works.json";
import ListAccordion from "../components/ListAccordion";
import "../components/CategoryList.css";

function getAllSkills(projects: Array<{ skills?: string[] }>): string[] {
  const skills = new Set<string>();
  projects.forEach((p) => (p.skills || []).forEach((s) => skills.add(s)));
  return Array.from(skills);
}

// Helper to parse month string to number for sorting
const monthToNum = (m: string) => {
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "sept", "oct", "nov", "dec"];
  const idx = months.findIndex((x) => x === m.toLowerCase().replace("'", "").slice(0, 3));
  return idx === -1 ? 0 : idx;
};

// Convert description to array if not already
const worksData: ProjectProps[] = (worksDataRaw as any[]).map((p) => ({
  ...p,
  description: Array.isArray(p.description) ? p.description : p.description.split(/\n|\r|\r\n|\u2028|\u2029|\.|\!|\?/).map((s: string) => s.trim()).filter(Boolean)
}));

// Sort by start year, then month (descending)
worksData.sort((a, b) => {
  if (a.start.year !== b.start.year) return b.start.year - a.start.year;
  return monthToNum(b.start.month) - monthToNum(a.start.month);
});

const Works = () => {
  const allSkills = useMemo(() => getAllSkills(worksData), []);
  return (
    <PageLayout title="Works" subtitle="A showcase of my creative and technical work.">
      <ListAccordion title="All Skills" items={allSkills} />
      <hr className="projects-divider" />
      <div className="projects-list">
        {worksData.map((proj, idx) => (
          <Project key={proj.title + idx} {...proj} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Works;
