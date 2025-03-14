import HeroSection from "../components/welcome/HeroSection"
import LatestEvents from "../components/welcome/LatestEvents"
import MobileAppSection from "../components/welcome/MobileAppSection"
import SubscribeSection from "../components/welcome/SubscribeSection"


const Welcome = () => {
  return (
    <div className="mt-20">
            <HeroSection />
            <LatestEvents />
            <MobileAppSection />
            <SubscribeSection />
    </div>
  )
}

export default Welcome