import HeroSection from "../components/home/HeroSection"
import LatestEvents from "../components/home/LatestEvents"
import MobileAppSection from "../components/welcome/MobileAppSection"
import SubscribeSection from "../components/welcome/SubscribeSection"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LatestEvents />
      <MobileAppSection />
      <SubscribeSection />
    </div>
  );
};

export default Home;
