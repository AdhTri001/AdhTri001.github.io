


import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import CategoryList from "../components/CategoryList";

import profileData from "../assets/profileData.json";
import profileImg from "../assets/Bday21.jpg";

function Home() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    setCategories(profileData);
  }, []);

  return (
    <div className="page home">
      <Profile image={profileImg} />
      {categories.map((cat, idx) => (
        <CategoryList key={idx} category={cat.category} items={cat.items} />
      ))}
    </div>
  );
}

export default Home;