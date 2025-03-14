import heroImage from "../../assets/images/hero.svg"
const EventHero = () => {
    return (
      <div className="relative h-64 md:h-80 flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className=" bg-opacity-50 p-6 rounded">
          <h1 className="text-3xl md:text-4xl font-bold">Your Event Booking Journey Starts Here</h1>
          <p className="text-lg md:text-xl">Connect, discover, and create unforgettable experiences <br />with ease</p>
        </div>
      </div>
    );
  };
  
  export default EventHero;
  