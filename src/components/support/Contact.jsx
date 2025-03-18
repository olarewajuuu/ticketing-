import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setErrors({ ...errors, [field]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("✅ Support request submitted:", formData);
            setSubmitted(true);
            // Reset form or show success popup
            setFormData({ name: "", email: "", subject: "", message: "" });
        }
    };

    return (
        <div className="text-[#494949]">

            {/* Contact Form Section */}
            <div className="max-w-3xl mx-auto p-6 mt-8 bg-white rounded shadow-lg">
                {submitted && (
                    <p className="text-green-600 text-center mb-4 font-semibold">
                        ✅ Your message has been sent! We’ll get back to you shortly.
                    </p>
                )}
                <h2 className="text-2xl font-bold mb-6 text-center">We'd love to hear from you!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-semibold">Full Name *</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold">Email Address *</label>
                        <input
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold">Subject *</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded"
                            placeholder="Subject of your message"
                            value={formData.subject}
                            onChange={(e) => handleInputChange("subject", e.target.value)}
                        />
                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold">Message *</label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded h-32 resize-none"
                            placeholder="Write your message here"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="bg-[#55BFEA] w-full text-white p-3 rounded hover:bg-[#45aad2] transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
