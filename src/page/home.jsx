import Hero from "./sections/hero";
import Features from "./sections/features";
import Plans from "./sections/plans";
import Reviews from "./sections/reviews";
import NavBar from "../components/navbar";
import CTA from "./sections/cta";
import Footer from "./sections/footer";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Features />
      <Plans />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
