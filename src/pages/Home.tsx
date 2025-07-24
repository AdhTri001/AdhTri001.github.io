



import Profile from "../components/Profile";
import CategoryList from "../components/CategoryList";
import PageLayout from "../components/PageLayout";
import profileData from "../assets/profileData.json";
import profileImg from "../assets/me.jpg";

function Home() {
  return (
    <PageLayout title="Welcome!" subtitle="Hi, I'm Adheesh Trivedi.">
      <Profile image={profileImg} />
      <div className="categories-section">
        {profileData.map((cat, idx) => (
          <CategoryList key={idx} category={cat.category} items={cat.items} />
        ))}
      </div>
    </PageLayout>
  );
}

export default Home;