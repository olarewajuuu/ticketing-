const EventInfo = ({ event }) => {
    return (
      <div>
        <h1 className="text-2xl font-bold">{event.title}</h1>
        <div className="flex items-center gap-4 mt-4">
          <img src={event.image} alt={event.title} className="w-16 h-16 object-cover rounded-lg" />
          <div>
            <p className="text-gray-600">{event.date} | {event.time}</p>
            <p className="text-gray-500">{event.location}</p>
          </div>
        </div>
  
        <h3 className="mt-6 font-semibold">About this event</h3>
        <p className="text-gray-600">Event lasts for 7 hours</p>
      </div>
    );
  };
  
  export default EventInfo;
  