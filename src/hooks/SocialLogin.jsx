import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialLogin = ({ onSocialSignIn }) => {
  return (
    <div className="flex justify-center space-x-4 mt-2">
      <button
        onClick={() => onSocialSignIn("facebook")}
        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
      >
        <FaFacebook size={20} />
      </button>
      <button
        onClick={() => onSocialSignIn("google")}
        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
      >
        <FaGoogle size={20} />
      </button>
    </div>
  );
};

export default SocialLogin;
