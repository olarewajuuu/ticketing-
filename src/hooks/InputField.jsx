const InputField = ({ label, type, placeholder, value, onChange }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#494949]">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
        />
      </div>
    );
  };
  
  export default InputField;
  