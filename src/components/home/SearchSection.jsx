import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchSection = () => {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!keywords && !location) {
      setError("Please enter a keyword or select a location.");
      return;
    }

    // Save search filters in localStorage for retrieval in EventPage.jsx
    localStorage.setItem("searchTerm", keywords);
    localStorage.setItem("location", location);

    // Navigate to EventPage.jsx ("/events")
    navigate("/events");
  };

  return (
    <div className="bg-[#55BFEA80] p-8 lg:p-12 rounded-lg shadow-md lg:w-2/3 w-full mt-4">
      <div className="flex flex-col md:flex-row gap-2 w-full mb-2 md:mb-6">
        <input
          type="text"
          placeholder="Enter Keywords"
          value={keywords}
          onChange={(e) => {
            setKeywords(e.target.value);
            setError("");
          }}
          className="border p-2 w-full bg-white text-[#23222259] rounded md:flex-1"
        />

        <select
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setError("");
          }}
          className="border p-2 w-full bg-white text-[#23222259] rounded md:flex-1"
        >
          <option value="">Select location</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Enugu">Enugu</option>
          <option value="Kano">Kano</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-[#55BFEA] text-white px-4 py-2 rounded w-full md:flex-1"
        >
          Get Ticket
        </button>
      </div>

      {error && <p className="bg-white text-red-500 p-2 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default SearchSection;
