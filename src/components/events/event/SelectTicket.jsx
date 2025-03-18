import { useNavigate } from "react-router-dom";

const SelectTicket = ({ price, eventId }) => {
  const navigate = useNavigate();

  const handleGetTicket = () => {
    // Ensure price is treated as a number and check for free tickets correctly
    if (price === 0 || price.toString().toLowerCase() === "free") {
      navigate(`/ticket-card/${eventId}`); // Navigate to TicketCard for free tickets
    } else {
      navigate(`/ticket-summary/${eventId}`); // Navigate to TicketSummary for paid tickets
    }
  };

  return (
    <div>
      <h3 className="text-[19px] text-[#494949] font-[500] border-b-2 border-[#23222259] pb-2 mb-3">
        Select Ticket
      </h3>
      <div className="border border-[#494949] rounded-lg p-4 shadow-md bg-white flex flex-col items-center">
        <p className="text-gray-600 mt-2 font-bold text-[24px]">{price === "Free" ? "Free" : `₦${price}`}</p>
        <button
          className="mt-4 bg-[#55BFEA] text-white px-4 py-2 rounded w-full"
          onClick={handleGetTicket} // Handle navigation
        >
          Get Ticket
        </button>
      </div>
    </div>
  );
};

export default SelectTicket;
