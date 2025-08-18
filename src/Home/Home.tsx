import Profile from "./Profile";
import Socials from "./Socials";
import CategoryList from "../components/CategoryList";
import PageLayout from "../components/PageLayout";
import homeData from "../assets/home.json";
import profileImg from "../assets/me.webp";

function Home() {
  return (
    <PageLayout title="Welcome" subtitle={`Hi! I'm ${homeData.name}`}>
      <Profile image={profileImg} about={homeData.about} />
      <div className="categories-section">
        {homeData["categories"].map((cat, idx) => (
          <CategoryList key={idx} category={cat.category} items={cat.items} />
        ))}
      </div>
      <Socials socials={homeData.socials} />
    </PageLayout>
  );
}

export default Home;
