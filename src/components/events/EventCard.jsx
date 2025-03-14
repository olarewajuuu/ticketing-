import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="rounded-lg p-4 shadow-md text-[#494949] cursor-pointer"
      onClick={() => navigate(`/event/${event.id}`)}
    >
      {/* Clickable Image */}
      <img 
        src={event.image} 
        alt={event.title} 
        className="w-full h-40 object-cover rounded" 
      />

      <h3 className="text-[23px] font-bold mt-4">{event.title}</h3>
      <p className="text-[18px] mt-2"><strong>Date:</strong> {event.date}</p>
      <p className="text-[18px] mt-2"><strong>Time:</strong> {event.time}</p>
      <p className="text-[18px] mt-2"><strong>Location:</strong> {event.location}</p>

      <div className="flex justify-between w-full items-center mt-4">
        {/* Get Ticket Button */}
        <button 
          className="mt-2 bg-[#55BFEA] text-white px-4 py-2 rounded font-[500]"
          onClick={(e) => {
            e.stopPropagation(); // Prevents triggering card click event
            navigate(`/event/${event.id}`);
          }}
        >
          Get Ticket
        </button>
        <p className="text-[23px] font-[700]">{event.price}</p>
      </div>
    </div>
  );
};

export default EventCard;
