const EventBanner = ({ image }) => {
    return (
      <div className="w-full h-60 md:h-80">
        <img src={image} alt="Event Banner" className="w-full h-full object-cover" />
      </div>
    );
  };
  
  export default EventBanner;
  