


import PageLayout from "../components/PageLayout";

function Hobbies() {
  return (
    <PageLayout title="Hobbies & Fun" subtitle="What I do when I'm not coding">
      <div className="hobbies-list">
        <div className="hobby-card">
          <h2>Music</h2>
          <p>I play the keyboard and enjoy composing short melodies. Music helps me relax and inspires my creativity.</p>
        </div>
        <div className="hobby-card">
          <h2>Typing</h2>
          <p>I'm passionate about fast and accurate typing. I love practicing on typing websites and challenging friends.</p>
        </div>
        <div className="hobby-card">
          <h2>Puzzles</h2>
          <p>Solving logic and math puzzles is my favorite way to unwind and keep my mind sharp.</p>
        </div>
      </div>
    </PageLayout>
  );
}

export default Hobbies;