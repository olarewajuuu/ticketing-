import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../hooks/InputField";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      localStorage.setItem("resetEmail", email); // Store email for verification
      navigate("/fp-popup"); // Redirect to the confirmation page
    } else {
      setError("Email not found. Please check your email or sign up.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white px-8 py-12 rounded-lg shadow-md text-[#494949]">
        <h2 className="text-2xl font-bold text-center mb-4">Forgotten your password?</h2>
        <p className="text-sm text-gray-600 mb-6">
          No worries! We’ll send you a reset link. Please enter the email address you use to log in.
        </p>

        <form onSubmit={handleReset} className="space-y-4">
          <InputField
            label="Your Email Address"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && <p className="text-center text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#55BFEA] text-white py-2 rounded hover:bg-[#55c0eaa2] cursor-pointer"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/signin" className="text-[#55BFEA] text-sm hover:underline">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
