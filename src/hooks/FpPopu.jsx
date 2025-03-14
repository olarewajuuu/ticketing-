import { Link } from "react-router-dom";

const FpPopup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white px-8 py-12 rounded-lg shadow-md text-[#494949] text-center">
        <h2 className="text-2xl font-bold mb-4">Check your inbox</h2>
        <p className="text-sm text-gray-600 mb-6">
          In the next few minutes, you will receive an email with a link to reset your password. Please follow the link to proceed.
        </p>

        <Link
          to="/signin"
          className="block w-full bg-[#55BFEA] text-white py-2 rounded hover:bg-[#55c0eaa2] cursor-pointer"
        >
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default FpPopup;
