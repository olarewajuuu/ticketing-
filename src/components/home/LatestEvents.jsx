import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons
import EventData from "../../utility/EventData";

const LatestEvents = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [eventsPerPage, setEventsPerPage] = useState(3);
  const navigate = useNavigate(); // Initialize navigation

  // Check screen size and update eventsPerPage
  useEffect(() => {
    const updateEventsPerPage = () => {
      setEventsPerPage(window.innerWidth < 768 ? 1 : 3); // 1 event on mobile, 3 on larger screens
    };

    updateEventsPerPage();
    window.addEventListener("resize", updateEventsPerPage);
    return () => window.removeEventListener("resize", updateEventsPerPage);
  }, []);

  const next = () => setStartIndex((prev) => Math.min(prev + eventsPerPage, EventData.length - eventsPerPage));
  const prev = () => setStartIndex((prev) => Math.max(prev - eventsPerPage, 0));

  // Handle event click (No login check)
  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`); // Redirect to the event details page
  };

  return (
    <div className="p-6 relative">
      <h2 className="text-2xl font-bold text-left">Latest Events</h2>

      {/* Event Container */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4 relative">
        {/* Back Button */}
        <button
          onClick={prev}
          disabled={startIndex === 0} // Disable if at the first event
          className={`absolute z-10 left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-[#55BFEA] p-2 rounded-full hover:bg-opacity-80 transition ${
            startIndex === 0 ? "opacity-0 cursor-not-allowed" : "opacity-100"
          }`}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Display Events */}
        {EventData.slice(startIndex, startIndex + eventsPerPage).map((event) => (
          <div
            key={event.id}
            className="relative w-full md:w-[550px] h-[300px] cursor-pointer"
            onClick={() => handleEventClick(event.id)} // Make event clickable
          >
            <img src={event.image} alt={event.title} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute bottom-0 text-white p-4 w-full bg-opacity-50 rounded-b-lg">
              <h3 className="text-[20px] md:text-[28px] font-[500]">{event.title}</h3>
              <p className="text-[16px] md:text-[19px] font-[500]">{event.date}</p>
            </div>
          </div>
        ))}

        {/* Next Button */}
        <button
          onClick={next}
          disabled={startIndex + eventsPerPage >= EventData.length} // Disable if at last event
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-[#55BFEA] p-2 rounded-full hover:bg-opacity-80 transition ${
            startIndex + eventsPerPage >= EventData.length ? "opacity-0 cursor-not-allowed" : "opacity-100"
          }`}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default LatestEvents;
