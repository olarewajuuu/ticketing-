const Payments = () => {
    return (
      <div className="mt-14">
        <h1 className="text-3xl font-bold mb-4">Payments</h1>
        <p className="text-gray-600 mb-6">All your recent payment transactions.</p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Event</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">March 5, 2025</td>
                <td className="py-3 px-4">Web3 Global Conference</td>
                <td className="py-3 px-4">$120</td>
                <td className="py-3 px-4 text-green-600 font-medium">Paid</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Feb 20, 2025</td>
                <td className="py-3 px-4">Music Fest 2025</td>
                <td className="py-3 px-4">$60</td>
                <td className="py-3 px-4 text-green-600 font-medium">Paid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Payments;
  