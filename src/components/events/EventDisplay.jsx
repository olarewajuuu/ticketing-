import { useState } from "react";
import EventCard from "./EventCard";


const EventDisplay = ({ events }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.slice(0, visibleCount).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      {visibleCount < events.length && (
        <button onClick={() => setVisibleCount(visibleCount + 6)} className="mt-4 border border-[#55BFEA] text-[#55BFEA] px-4 py-2 w-full rounded">
          See More
        </button>
      )}
    </div>
  );
};

export default EventDisplay;
