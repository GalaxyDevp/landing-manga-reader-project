import Hero from "./sections/Hero/hero";
import Collabs from "./sections/collabs/collabs";
import Features from "./sections/features/features";
import NavBar from "../components/navbar";
import Plans from "./sections/plans/plans";
import Reviews from "./sections/reviews/reviews";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Features />
      <Plans />
      <Reviews />
    </div>
  );
};

export default Home;
