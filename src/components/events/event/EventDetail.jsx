import { useParams } from "react-router-dom";
import EventData from "../../../utility/EventData";
import EventBanner from "./EventBanner";
import EventInfo from "./EventInfo";
import EventTags from "./EventTags";
import SelectTicket from "./SelectTicket";

const EventDetail = () => {
  const { eventId } = useParams();
  const event = EventData.find((e) => e.id === parseInt(eventId));

  if (!event) return <div className="p-6 text-center text-red-500">Event not found</div>;

  return (
    <div className="p-6">
      <EventBanner image={event.image} />
      
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Left Section */}
        <div className="flex-1">
          <EventInfo event={event} />
          <EventTags />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3">
          <SelectTicket price={event.price} />
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
