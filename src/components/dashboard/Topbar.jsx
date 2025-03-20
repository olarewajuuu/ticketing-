import { FiMenu } from "react-icons/fi";

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="fixed top-18 left-0 w-full flex items-center justify-between px-4 py-3 bg-white shadow-md z-40 md:hidden">
      <button onClick={toggleSidebar} className="text-3xl text-blue-700">
        <FiMenu />
      </button>
      <h2 className="text-xl font-bold text-blue-700">My Dashboard</h2>
    </div>
  );
};

export default Topbar;
