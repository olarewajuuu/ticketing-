import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../hooks/InputField";
import PasswordInput from "../hooks/PasswordInput";
import SocialLogin from "../hooks/SocialLogin";
import AuthFooter from "../hooks/AuthFooter";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.email === email)) {
      setError("Email already registered. Please sign in.");
      return;
    }

    const newUser = { email, password, profilePic: "https://i.pravatar.cc/40?img=3" };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/account-success"); // Redirect to success popup
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-20">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-[#494949]">Create an account</h2>

        <form onSubmit={handleSignUp} className="space-y-4 mt-4">
          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            label="Enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordInput
            label="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#55BFEA] text-white py-2 rounded hover:bg-[#55c0eaa2] cursor-pointer"
          >
            Create account
          </button>
        </form>

        <SocialLogin />
        <AuthFooter />
      </div>
    </div>
  );
};

export default SignUp;
