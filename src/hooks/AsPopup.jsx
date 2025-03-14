import { Link } from "react-router-dom";

const AsPopup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-[#494949]">Account Created Successfully!</h2>
        <p className="text-gray-600 mt-4">
          Your account has been created successfully. You can now sign in to access your account.
        </p>

        <Link
          to="/signin"
          className="mt-6 inline-block bg-[#55BFEA] text-white py-2 px-6 rounded hover:bg-[#55c0eaa2]"
        >
          Go to Sign In
        </Link>
      </div>
    </div>
  );
};

export default AsPopup;
