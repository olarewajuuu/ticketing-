import { useLocation, useNavigate } from "react-router-dom";

const DisplayTicket = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return <p className="text-center text-red-500 font-semibold mt-6">❌ No ticket details found</p>;
    }

    const { event, quantity, formData } = state;

    const handleProceed = () => {
        const price = Number(event.price.toString().replace(/[^0-9.]/g, ""));

        if (price === 0) {
            // If event is free, skip payment and go to success page
            navigate('/success', { state: { event, quantity, formData, totalAmount: 0 } });
        } else {
            // Otherwise go to payment page
            navigate("/payment", { state: { event, quantity, formData } });
        }
    };

    return (
        <div className="flex justify-center items-start p-6 bg-gray-50 min-h-screen mt-20">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Guest Details Section */}
                <div className="md:col-span-2 bg-white shadow-md p-6 rounded-lg">
                    {formData.map((guest, index) => (
                        <div key={index} className="border-b pb-4 mb-4">
                            <h3 className="font-semibold text-lg">Guest Details [{index + 1}]</h3>
                            <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
                                <p><strong>Name:</strong> {guest.firstName} {guest.lastName}</p>
                                <p><strong>Email:</strong> {guest.email || "N/A"}</p>
                                <p><strong>Gender:</strong> {guest.gender}</p>
                                <p><strong>Nationality:</strong> {guest.nationality}</p>
                                <p><strong>Contact:</strong> {guest.contact}</p>
                                <p><strong>Booking ID:</strong> Lnk-{Math.floor(Math.random() * 100000)}-{index + 1}</p>
                            </div>
                        </div>
                    ))}

                    {/* Button changes based on price */}
                    <button 
                        className="w-full bg-[#55BFEA] text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
                        onClick={handleProceed}
                    >
                        {Number(event.price.toString().replace(/[^0-9.]/g, "")) === 0 ? "Reserve a Spot" : "Proceed to payment"}
                    </button>
                </div>

                {/* My Cart Section */}
                <div className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="font-semibold text-lg">My Cart</h3>
                    <div className="text-sm mt-4">
                        <p><strong>Event:</strong> {event.title}</p>
                        <p><strong>Guest:</strong> {quantity}</p>
                    </div>
                    
                    <hr className="my-4" />

                    <h4 className="font-semibold text-lg">Fare Summary</h4>
                    <div className="text-sm mt-2">
                        <p>{quantity}x Ticket <span className="float-right">₦{(event.price * quantity).toLocaleString()}</span></p>
                        <p>Discount <span className="float-right">₦0</span></p>
                        <p>Service Charge <span className="float-right">₦0</span></p>
                    </div>

                    <hr className="my-4" />

                    <h4 className="font-semibold text-lg">Total Ticket Payment</h4>
                    <p className="text-xl font-bold">₦{(event.price * quantity).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default DisplayTicket;
