import { useState, useEffect } from "react";
import EventData from "../utility/EventData";
import EventSearch from "../components/events/EventSearch";
import EventHero from "../components/events/EventHero";
import EventSort from "../components/events/EventSort";
import EventDisplay from "../components/events/EventDisplay";

const EventPage = () => {
  const [filteredEvents, setFilteredEvents] = useState(EventData);

  useEffect(() => {
    // Retrieve search term and location from local storage when component mounts
    const searchTerm = localStorage.getItem("searchTerm") || "";
    const location = localStorage.getItem("location") || "";

    handleSearch(searchTerm, location);
  }, []);

  const handleSearch = (searchTerm, location) => {
    let filtered = EventData.filter(
      (event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (location === "" || event.location.toLowerCase() === location.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleSort = (category) => {
    let sortedEvents = EventData;

    if (category === "today") {
      const today = new Date().toDateString();
      sortedEvents = EventData.filter((event) => new Date(event.date).toDateString() === today);
    } else if (category === "weekend") {
      sortedEvents = EventData.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getDay() === 6 || eventDate.getDay() === 0; // Saturday (6) or Sunday (0)
      });
    } else if (category === "online") {
      sortedEvents = EventData.filter((event) => event.location.toLowerCase() === "online");
    } else if (category === "free") {
      sortedEvents = EventData.filter((event) => event.price.toLowerCase() === "free");
    }

    setFilteredEvents(sortedEvents);
  };

  return (
    <div>
      <EventSearch onSearch={handleSearch} />
      <EventHero />
      <EventSort onSort={handleSort} />
      <EventDisplay events={filteredEvents} />
    </div>
  );
};

export default EventPage;
