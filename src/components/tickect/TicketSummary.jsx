import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import EventData from "../../utility/EventData";
import EventBanner from "../events/event/EventBanner";
import EventInfo from "../events/event/EventInfo";
import EventTags from "../events/event/EventTags";

const TicketSummary = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const event = EventData.find((e) => e.id.toString() === id);

    const [quantity, setQuantity] = useState(1);

    if (!event) {
        return <p className="text-center text-red-500 font-semibold mt-6">❌ Event not found</p>;
    }

    // ✅ Ensure price is properly handled
    const isFree = typeof event.price === "string" && event.price.toLowerCase() === "free";
    const eventPrice = isFree ? 0 : Number(event.price) || 0; // Convert to number if it's not free
    const total = eventPrice * quantity;

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    // ✅ Ensure at least 1 ticket for free events
    const handleCheckout = () => {
        navigate(`/ticket-card/${event.id}`, {
            state: { event, quantity: isFree ? 1 : quantity }, // Ensure at least 1 ticket for free events
        });
    };

    return (
        <div>
            <EventBanner image={event.image} />
            <div className="p-6 flex flex-col md:flex-row gap-8">
                {/* Desktop Only - Event Details */}
                <div className="hidden md:block w-2/3">
                    <EventInfo event={event} />
                    <EventTags />
                </div>

                {/* Booking Summary */}
                <div className="w-full md:w-1/3 border border-gray-300 rounded-lg p-6 shadow-md bg-white self-start">
                    <h3 className="text-lg font-semibold border-b pb-2">Booking Summary</h3>
                    <p className="text-xl font-bold mt-3">{event.title}</p>
                    <p className="text-gray-600 mt-2">
                        Price: <strong>{isFree ? "Free" : `₦${eventPrice.toLocaleString()}`}</strong>
                    </p>

                    {/* Quantity Selector (Hide for Free Events) */}
                    {!isFree && (
                        <div className="flex items-center justify-between mt-4">
                            <span className="font-semibold">Tickets</span>
                            <div className="flex items-center border border-gray-300 rounded px-2">
                                <button onClick={decreaseQuantity} className="px-3 py-1 bg-gray-200 rounded-l">
                                    −
                                </button>
                                <span className="px-4">{quantity}</span>
                                <button onClick={increaseQuantity} className="px-3 py-1 bg-gray-200 rounded-r">
                                    +
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Total Price (Hide for Free Events) */}
                    {!isFree && (
                        <div className="flex justify-between font-bold text-lg mt-4">
                            <span>Total:</span>
                            <span>₦{total.toLocaleString()}</span>
                        </div>
                    )}

                    {/* Checkout Button */}
                    <button
                        onClick={handleCheckout}
                        className="mt-4 bg-[#55BFEA] text-white px-4 py-2 rounded w-full">
                        {isFree ? "Get Ticket" : "Checkout"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketSummary;
