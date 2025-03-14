import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchSection = () => {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!keywords && !location) {
      setError("Please enter a keyword or select a location.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
      navigate("/signin"); // Redirect to sign-in page if user is not logged in
    } else {
      navigate(`/events?location=${location}`); // Navigate to events page with location
    }
  };

  return (
    <div className="bg-[#55BFEA80] p-8 lg:p-12 rounded-lg shadow-md lg:w-2/3 w-full mt-4">
      {/* Inputs and button in one row on desktop */}
      <div className="flex flex-col md:flex-row gap-2 w-full mb-2 md:mb-6">
        <input
          type="text"
          placeholder="Enter Keywords"
          value={keywords}
          onChange={(e) => {
            setKeywords(e.target.value);
            setError(""); // Clear error when user types
          }}
          className="border p-2 w-full bg-white text-[#23222259] rounded md:flex-1"
        />

        <select
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setError(""); // Clear error when user selects a location
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
      {/* Error Message (Always appears below) */}
      {error && <p className="bg-white text-red-500 p-2 text-sm mt-10 inline">{error}</p>}
    </div>
  );
};

export default SearchSection;
