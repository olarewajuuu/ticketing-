import { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return alert("Please enter an email address");
    alert("Subscribed successfully!");
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-[#D9D9D94D] shadow-lg rounded-lg lg:py-10 lg:px-40 py-8 px-12 text-center w-full lg:w-2/3 text-[#494949]">
        <h2 className="text-2xl font-bold ">Interested in travel deals?</h2>
        <p className="text-sm mt-2">Enter your email, and we'll send them straight to your inbox.</p>
        
        {/* Input and Button */}
        <div className="mt-8 flex lg:flex-row flex-col gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white p-2 w-full rounded-[5px] focus:outline-none"
          />
          <button 
            onClick={handleSubscribe} 
            className="bg-[#55BFEA] text-white px-4 py-2 rounded-[5px] hover:bg-blue-600 transition"
          >
            Subscribe
          </button>
        </div>

        {/* Privacy Text */}
        <p className="text-xs text-gray-500 mt-2">
          We value your privacy. Rest assured, we won't spam you or share your information with third parties. 
          Check out our privacy policy. You can unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default SubscribeSection;
