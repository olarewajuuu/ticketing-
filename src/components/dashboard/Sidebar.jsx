import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdEvent,
  MdPayment,
  MdPerson,
  MdPassword,
  MdNotificationsActive,
  MdLogout,
  MdAccountCircle,
} from "react-icons/md";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-30 md:top-20 left-0 h-full w-64 shadow-lg bg-white text-black p-6 z-30 transform transition-transform md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      <h2 className="text-2xl font-bold mb-10">My Dashboard</h2>
      <nav className="flex flex-col gap-6">
        <NavLink
          to="/dashboard/home"
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `flex items-center gap-2 ${isActive ? "text-blue-300" : "hover:text-blue-300"
            }`
          }
        >
          <MdDashboard /> Home
        </NavLink>
        <NavLink
          to="/dashboard/profile"
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `flex items-center gap-2 ${isActive ? "text-blue-300" : "hover:text-blue-300"
            }`
          }
        >
          <MdAccountCircle /> Profile
        </NavLink>
        <NavLink
          to="/dashboard/my-events"
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `flex items-center gap-2 ${isActive ? "text-blue-300" : "hover:text-blue-300"
            }`
          }
        >
          <MdEvent /> My Events
        </NavLink>

        <NavLink
          to="/dashboard/payments"
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `flex items-center gap-2 ${isActive ? "text-blue-300" : "hover:text-blue-300"
            }`
          }
        >
          <MdPayment /> Payments
        </NavLink>

        <NavLink
          to="/dashboard/change-password"
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `flex items-center gap-2 ${isActive ? "text-blue-300" : "hover:text-blue-300"
            }`
          }
        >
          <MdPassword /> Change Password
        </NavLink>
        <NavLink
          to="/dashboard/notifications"
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `flex items-center gap-2 ${isActive ? "text-blue-300" : "hover:text-blue-300"
            }`
          }
        >
          <MdNotificationsActive /> Notification
        </NavLink>
        <NavLink
          to="/dashboard/signout"
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `flex items-center gap-2 ${isActive ? "text-red-300" : "hover:text-red-300"
            }`
          }
        >
          <MdLogout /> Sign Out
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
