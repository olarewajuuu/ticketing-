import { useState } from "react";

const EventSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm, location);
  };

  return (
    <div className="mt-20 bg-[#55BFEA] flex flex-col md:flex-row md:gap-10 gap-4 justify-center items-center px-8 py-4">
      <input
        type="text"
        placeholder="Event for..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-white p-2 rounded w-full md:w-1/3"
      />
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="bg-white p-2 rounded w-full md:w-1/3"
      >
        <option value="">Select Location</option>
        <option value="Lagos">Lagos</option>
        <option value="Abuja">Abuja</option>
        <option value="Enugu">Enugu</option>
        <option value="Kano">Kano</option>
        <option value="Port Harcourt">Port Harcourt</option>
      </select>
      <button onClick={handleSearch} className="bg-[#55BFEA] border text-white px-4 py-2 rounded md:w-1/3 w-full">
        Search
      </button>
    </div>
  );
};

export default EventSearch;
