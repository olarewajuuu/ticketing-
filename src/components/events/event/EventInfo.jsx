const EventInfo = ({ event }) => {
  if (!event) {
    return <p className="text-center text-red-500">Event details not available.</p>;
  }

  return (
    <div>
      {/* Event Title */}
      <h1 className="text-2xl font-bold">{event.title}</h1>

      <div className="flex flex-col justify-start gap-4 mt-4">
        {/* Event Image */}
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-40 md:w-80 md:h-80 object-cover rounded-lg"
        />

        {/* Event Date & Time */}
        <div>
          <h3 className="mt-4 font-semibold">Date and Time</h3>
          <p className="text-gray-600">{event.date} | {event.time}</p>
        </div>

        {/* Event Location */}
        <div>
          <h3 className="mt-4 font-semibold">Location</h3>
          <p className="text-gray-600">{event.location}</p>
        </div>

        {/* About Event */}
        <div>
          <h3 className="mt-4 font-semibold">About this Event</h3>
          <p className="text-gray-600">Event lasts for 7 hours</p>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
