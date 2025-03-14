import SearchSection from "./SearchSection";
import heroImage from "../../assets/images/hero.svg"

const HeroSection = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[400px] md:h-[500px] mt-20"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold">Easy Booking, Easy Trip With LynKKupp</h1>
                <p className="mt-2 text-lg md:text-xl">Your perfect stop for flights, hotels, and tickets booking</p>
                <SearchSection />
            </div>
        </div>
    );
};

export default HeroSection;
