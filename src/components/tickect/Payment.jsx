import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import paymentImg from "../../assets/images/payment.png";

const Payment = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const [cardDetails, setCardDetails] = useState({
        name: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    if (!state) {
        return <p className="text-center text-red-500 font-semibold mt-6">❌ No payment details found</p>;
    }

    const { event, quantity } = state;

    // Parse price (in case it's a string like "₦2000" or "Free")
    const parsedPrice = parseFloat(
        (event?.price || "0").toString().replace(/[^0-9.]/g, "")
    ) || 0;

    const totalAmount = parsedPrice * quantity;

    const handleChange = (e) => {
        setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
    };

    const handlePayment = () => {
        console.log("Event received:", event);
        console.log("Parsed event price:", parsedPrice);
        alert("Processing Payment... (Integrate Paystack/Stripe here)");
        setTimeout(() => {
            navigate("/success", { state: { event, quantity, totalAmount } });
        }, 1000);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 mt-20">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 text-[#494949]">

                {/* Card Payment Form */}
                <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Input your card details</h2>

                    <div className="relative border-2 border-[#55BFEA] bg-blue-50 rounded-lg p-4 mb-6 w-fit">
                        <div className="flex flex-col items-center gap-3">
                            <img src={paymentImg} alt="Card Icons" className="w-12" />
                            <p className="text-[#55BFEA] font-semibold">Debit / Credit Card</p>
                        </div>
                        <div className="absolute top-[-8px] right-[-8px] bg-[#55BFEA] rounded-full p-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <form className="space-y-8 text-[#2322225]">
                        <input
                            type="text"
                            name="name"
                            value={cardDetails.name}
                            onChange={handleChange}
                            placeholder="Name on card"
                            className="w-full border border-[#23222259] p-3 rounded-lg"
                        />
                        <input
                            type="text"
                            name="cardNumber"
                            value={cardDetails.cardNumber}
                            onChange={handleChange}
                            placeholder="Card number"
                            className="w-full border border-[#23222259] p-3 rounded-lg"
                        />
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                name="expiryDate"
                                value={cardDetails.expiryDate}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                className="w-1/2 border border-[#23222259] p-3 rounded-lg"
                            />
                            <input
                                type="text"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleChange}
                                placeholder="CVV"
                                className="w-1/2 border border-[#23222259] p-3 rounded-lg"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handlePayment}
                            className="w-full bg-[#55BFEA] text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
                        >
                            {parsedPrice === 0 ? "Reserve a Spot" : "Place Order"}
                        </button>
                    </form>
                </div>

                {/* My Cart Summary */}
                <div className="bg-white p-6 rounded-lg shadow-md self-start">
                    <h3 className="font-semibold text-lg">My Cart</h3>
                    <div className="text-sm mt-4">
                        <p><strong>Event:</strong> {event.title}</p>
                        <p><strong>Guests:</strong> {quantity}</p>
                    </div>

                    <hr className="my-4" />

                    <h4 className="font-semibold text-lg">Fare Summary</h4>
                    <div className="text-sm mt-2">
                        <p>1x Ticket <span className="float-right">{parsedPrice === 0 ? "Free" : `₦${parsedPrice.toLocaleString()}`}</span></p>
                        <p>Discount <span className="float-right">₦0</span></p>
                        <p>Service Charge <span className="float-right">₦0</span></p>
                    </div>

                    <hr className="my-4" />

                    <h4 className="font-semibold text-lg">Total Ticket Payment</h4>
                    <p className="text-xl font-bold">{parsedPrice === 0 ? "Free" : `₦${totalAmount.toLocaleString()}`}</p>
                </div>
            </div>
        </div>
    );
};

export default Payment;
