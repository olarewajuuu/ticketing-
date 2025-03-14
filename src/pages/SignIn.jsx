import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../hooks/InputField";
import PasswordInput from "../hooks/PasswordInput";
import SocialLogin from "../hooks/SocialLogin";
import TermsPrivacy from "../hooks/TermsPrivacy";

const SignIn = ({ setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setError(""); // Clear error message when email or password changes
  }, [email, password]);

  const handleSignIn = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email);

    if (user) {
        if (user.password === password) {
            const userWithProfile = {
                ...user,
                profilePic: user.profilePic || "https://i.pravatar.cc/40", // Default avatar
            };

            localStorage.setItem("currentUser", JSON.stringify(userWithProfile));
            setCurrentUser(userWithProfile); // Update state
            navigate("/home");
        } else {
            setError("Incorrect password");
        }
    } else {
        setError("Email not registered. Please create an account.");
    }
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-20">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#494949]">Sign in or create an account</h2>

        <form onSubmit={handleSignIn}>
          <InputField
            label="Email address"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="text-right mt-2">
            <Link to="/forgot-password" className="text-sm text-[#55BFEA] hover:underline">
              Forgotten your password?
            </Link>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full mt-4 bg-[#55BFEA] text-white py-2 rounded hover:bg-[#55c0eaa2] cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <button
          onClick={() => navigate("/signup")}
          className="w-full mt-2 border border-[#55BFEA] text-[#55BFEA] py-2 rounded hover:bg-blue-100 cursor-pointer"
        >
          Create Account
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-sm text-gray-500">Or sign in with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <SocialLogin setCurrentUser={setCurrentUser} />
        <TermsPrivacy />
      </div>
    </div>
  );
};

export default SignIn;
