const MyEvents = () => {
    return (
      <div className="mt-14">
        <h1 className="text-3xl font-bold mb-4">My Events</h1>
        <p className="text-gray-600 mb-6">
          Here are the events you’ve booked or organized.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Web3 Global Conference</h3>
            <p>Date: March 30, 2025</p>
            <p>Location: Lagos</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Music Fest 2025</h3>
            <p>Date: April 10, 2025</p>
            <p>Location: Abuja</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default MyEvents;
  