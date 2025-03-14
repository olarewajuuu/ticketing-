const SelectTicket = ({ price }) => {
    return (
      <div className="border rounded-lg p-4 shadow-md bg-white">
        <h3 className="text-lg font-bold">Select Ticket</h3>
        <p className="text-gray-600 mt-2">Price: <span className="font-bold">{price}</span></p>
  
        <button className="mt-4 bg-[#55BFEA] text-white px-4 py-2 rounded w-full">
          Get Ticket
        </button>
      </div>
    );
  };
  
  export default SelectTicket;
  