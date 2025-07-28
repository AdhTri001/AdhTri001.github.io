import "./Experience.css"

import PageLayout from "../components/PageLayout";
import ActivityCard from "../components/ActivityCard";
import experiencesDataRaw from "../assets/experiences.json";

function Experience() {
  return (
    <PageLayout title="Experiences" subtitle="My positions and internships">
      {Array.isArray(experiencesDataRaw) && experiencesDataRaw.length > 0 ? (
        experiencesDataRaw.map((section: any, idx: number) => (
          <div key={idx} className="experience-section">
            <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>{section.heading}</h2>
            {Array.isArray(section.experiences) && section.experiences.length > 0 ? (
              section.experiences.map((exp: any, i: number) => (
                <ActivityCard key={i} {...exp} />
              ))
            ) : (
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>No experiences found in this section.</p>
            )}
          </div>
        ))
      ) : (
        <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>No experiences data found.</p>
      )}
    </PageLayout>
  );
}

export default Experience;