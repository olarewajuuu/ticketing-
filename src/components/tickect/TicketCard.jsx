import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import EventData from "../../utility/EventData";
import EventBanner from "../events/event/EventBanner";

const TicketCard = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();

    // ✅ Get event and quantity first
    const event = state?.event || EventData.find((e) => e.id.toString() === id);
    const quantity = state?.quantity ?? 1;

    // ✅ Declare your states BEFORE any return
    const [formData, setFormData] = useState(
        Array.from({ length: quantity }, () => ({
            title: "",
            firstName: "",
            lastName: "",
            email: "",
            dateOfBirth: "",
            nationality: "",
            gender: "",
            contact: "",
        }))
    );
    const [errors, setErrors] = useState([]);

    // ✅ Early return if event not found — this is safe now
    if (!event) {
        return <p className="text-center text-red-500 font-semibold mt-6">❌ Event not found</p>;
    }

    const isFree = event.price === 0;
    const totalPrice = isFree ? "Free" : `₦${(event.price * quantity).toLocaleString()}`;

    // ✅ Handle input change
    const handleInputChange = (index, field, value) => {
        const updatedForm = [...formData];
        updatedForm[index][field] = value;
        setFormData(updatedForm);
    };

    // ✅ Handle submit
    const handleSubmit = () => {
        let validationErrors = [];

        formData.forEach((guest, index) => {
            let guestErrors = {};
            if (!guest.title) guestErrors.title = "Title is required";
            if (!guest.firstName) guestErrors.firstName = "First Name is required";
            if (!guest.lastName) guestErrors.lastName = "Last Name is required";
            if (!guest.dateOfBirth) guestErrors.dateOfBirth = "Date of Birth is required";
            if (!guest.nationality) guestErrors.nationality = "Nationality is required";
            if (!guest.gender) guestErrors.gender = "Gender is required";
            if (!guest.contact) guestErrors.contact = "Contact is required";

            validationErrors[index] = guestErrors;
        });

        setErrors(validationErrors);

        // ✅ Only proceed if there are no validation errors
        if (validationErrors.every((guestError) => Object.keys(guestError).length === 0)) {
            if (isFree) {
                // Directly go to success page if event is free
                navigate("/display-ticket", {
                    state: {
                        event,
                        quantity,
                        formData,
                        successMessage: "Spot reserved successfully!", // Add a message if you like
                    },
                });
            } else {
                // If not free, proceed to payment page
                navigate("/payment", {
                    state: {
                        event,
                        quantity,
                        formData,
                    },
                });
            }
        }
    };

    return (
        <div className="text-[#494949]">
            <EventBanner image={event.image} />
            <h2 className="text-2xl font-bold mt-4 pl-10">{event.title}</h2>
            <div className=" p-6 flex flex-col md:flex-row gap-6 md:gap-96">
                {/* Guest details form */}
                <div className="w-full md:w-2/3 p-6 rounded-lg shadow-lg">
                    {formData.map((guest, i) => (
                        <div key={i} className="mb-6 pb-4">
                            <h3 className="text-lg font-bold mb-6">Guest Details [{i + 1}]</h3>
                            <div className="border border-[#23222259] p-6">
                                {/* Title, First Name, Last Name */}
                                <div className="flex flex-col md:flex-row gap-4 mt-6">
                                    {/* Title */}
                                    <div className="w-full md:w-1/3">
                                        <label className="block font-semibold">Title *</label>
                                        <select
                                            className="w-full p-2 border border-[#23222259] rounded"
                                            value={guest.title}
                                            onChange={(e) => handleInputChange(i, "title", e.target.value)}
                                        >
                                            <option value="">Select</option>
                                            <option>Mr</option>
                                            <option>Ms</option>
                                            <option>Mrs</option>
                                        </select>
                                        {errors[i]?.title && <p className="text-red-500 text-sm">{errors[i].title}</p>}
                                    </div>

                                    {/* First Name */}
                                    <div className="w-full md:w-1/2">
                                        <label className="block font-semibold">First Name *</label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border border-[#23222259] rounded"
                                            placeholder="Your first name"
                                            value={guest.firstName}
                                            onChange={(e) => handleInputChange(i, "firstName", e.target.value)}
                                        />
                                        {errors[i]?.firstName && <p className="text-red-500 text-sm">{errors[i].firstName}</p>}
                                    </div>

                                    {/* Last Name */}
                                    <div className="w-full md:w-1/2">
                                        <label className="block font-semibold">Last Name *</label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border border-[#23222259] rounded"
                                            placeholder="Your last name"
                                            value={guest.lastName}
                                            onChange={(e) => handleInputChange(i, "lastName", e.target.value)}
                                        />
                                        {errors[i]?.lastName && <p className="text-red-500 text-sm">{errors[i].lastName}</p>}
                                    </div>
                                </div>

                                {/* Email */}
                                <label className="block font-semibold mt-4">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full p-2 border border-[#23222259] rounded"
                                    placeholder="Johndoe@mail.com"
                                    value={guest.email}
                                    onChange={(e) => handleInputChange(i, "email", e.target.value)}
                                />

                                {/* DOB, Nationality, Gender */}
                                <div className="flex flex-col md:flex-row gap-4 mt-4">
                                    {/* DOB */}
                                    <div className="w-full md:w-1/3">
                                        <label className="block font-semibold">Date of Birth *</label>
                                        <input
                                            type="date"
                                            className="w-full p-2 border border-[#23222259] rounded"
                                            value={guest.dateOfBirth}
                                            onChange={(e) => handleInputChange(i, "dateOfBirth", e.target.value)}
                                        />
                                        {errors[i]?.dateOfBirth && <p className="text-red-500 text-sm">{errors[i].dateOfBirth}</p>}
                                    </div>

                                    {/* Nationality */}
                                    <div className="w-full md:w-1/3">
                                        <label className="block font-semibold">Nationality *</label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border border-[#23222259] rounded"
                                            value={guest.nationality}
                                            onChange={(e) => handleInputChange(i, "nationality", e.target.value)}
                                        />
                                        {errors[i]?.nationality && <p className="text-red-500 text-sm">{errors[i].nationality}</p>}
                                    </div>

                                    {/* Gender */}
                                    <div className="w-full md:w-1/3">
                                        <label className="block font-semibold">Gender *</label>
                                        <select
                                            className="w-full p-2 border border-[#23222259] rounded"
                                            value={guest.gender}
                                            onChange={(e) => handleInputChange(i, "gender", e.target.value)}
                                        >
                                            <option value="">Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                        {errors[i]?.gender && <p className="text-red-500 text-sm">{errors[i].gender}</p>}
                                    </div>
                                </div>

                                {/* Contact */}
                                <label className="block font-semibold mt-4">Contact *</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-[#23222259] rounded"
                                    placeholder="234 Phone number"
                                    value={guest.contact}
                                    onChange={(e) => handleInputChange(i, "contact", e.target.value)}
                                />
                                {errors[i]?.contact && <p className="text-red-500 text-sm">{errors[i].contact}</p>}
                            </div>
                        </div>
                    ))}

                    <button
                        className="mt-4 bg-[#55BFEA] text-white px-4 py-2 rounded w-full"
                        onClick={handleSubmit}
                    >
                        {isFree ? "Reserve a Spot" : "Proceed to Payment"}
                    </button>
                </div>

                {/* My Cart Section */}
                <div className="w-full md:w-1/3 border border-[#23222259] p-6 rounded-lg shadow bg-white mr-10 self-start">
                    <h3 className="text-lg font-bold">My Cart</h3>
                    <p className="text-xl mt-2 font-bold">{event.title}</p>
                    <p className="text-gray-600 mt-1">Guest: {quantity}</p>

                    <div className="mt-4 border-t pt-4">
                        <h4 className="text-lg font-bold">Fare Summary</h4>
                        <p className="flex justify-between mt-1">
                            <span>{quantity}x Ticket</span> <span>Standard fare</span>
                        </p>
                        <p className="flex justify-between mt-1">
                            <span>Discount</span> <span>₦0</span>
                        </p>
                        <p className="flex justify-between mt-1">
                            <span>Service Charge</span> <span>₦0</span>
                        </p>
                        <p className="flex justify-between mt-1 font-bold">
                            <span>Total Ticket Payment</span> <span>{totalPrice}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;

