const EditProfile = () => {
    return (
      <div className="mt-14">
        <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>
        <form className="bg-white p-6 rounded-lg shadow space-y-4 max-w-xl">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="+234..."
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Profile Picture</label>
            <input
              type="file"
              className="w-full border border-gray-300 p-2 rounded bg-white"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
          >
            Save Changes
          </button>
        </form>
      </div>
    );
  };
  
  export default EditProfile;
  