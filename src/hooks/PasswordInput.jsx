import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ label, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-[#494949]">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter a password"
          value={value}
          onChange={onChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
