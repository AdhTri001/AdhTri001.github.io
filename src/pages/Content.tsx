


import PageLayout from "../components/PageLayout";

function Content() {
  return (
    <PageLayout title="Content" subtitle="Articles, notes, and creative explorations.">
      <div className="content-list">
        <div className="content-card">
          <h2>Why I Love Model Checking</h2>
          <p>A short essay on the beauty of verifying systems with logic and automata.</p>
        </div>
        <div className="content-card">
          <h2>Algorithmic Puzzles</h2>
          <p>My favorite algorithmic puzzles and how I approach them.</p>
        </div>
        <div className="content-card">
          <h2>Learning by Building</h2>
          <p>How building projects helps me understand theory and practice.</p>
        </div>
      </div>
    </PageLayout>
  );
}

export default Content;