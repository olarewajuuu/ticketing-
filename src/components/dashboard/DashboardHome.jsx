const DashboardHome = () => {
    return (
      <div className="mt-14">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Manage your events, payments, and profile all in one place.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-xl font-semibold">12</h2>
            <p className="text-gray-500">Total Events</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-xl font-semibold">$340</h2>
            <p className="text-gray-500">Payments Made</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-xl font-semibold">Verified</h2>
            <p className="text-gray-500">Profile Status</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardHome;
  