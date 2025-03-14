import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/Lynkkupplogo.svg";
import eventicon from "../assets/images/eventicon.svg";
import supporticon from "../assets/images/supporticon.svg";

const Navbar = ({ currentUser, setCurrentUser }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        // Retrieve user from localStorage on page load
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        setCurrentUser(storedUser);
    }, []);

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        setCurrentUser(null);
        navigate("/signin");
    };

    // Redirect if user is not signed in
    const handleProtectedNavigation = (path) => {
        if (!currentUser) {
            navigate("/signin"); // Redirect to sign-in
        } else {
            navigate(path); // Navigate to target page
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white text-[#494949] font-[500] py-4 px-4 lg:px-30 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo - Redirect based on auth status */}
                <button onClick={() => handleProtectedNavigation("/home")}>
                    <img src={logo} alt="logo" className="w-[50px]" />
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <button onClick={() => handleProtectedNavigation("/events")} className="hover:text-[#55BFEA]">
                            Event Page
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleProtectedNavigation("/support")} className="hover:text-[#55BFEA] flex items-center gap-2">
                            Support Page
                        </button>
                    </li>

                    {/* Profile or Sign In Button */}
                    {currentUser ? (
                        <li className="flex items-center gap-4">
                            <img
                                src={currentUser.profilePic || "https://i.pravatar.cc/40"}
                                alt="Profile"
                                className="w-10 h-10 rounded-full cursor-pointer"
                            />
                            <button onClick={handleLogout} className="text-red-500 hover:text-red-700">
                                Logout
                            </button>
                        </li>
                    ) : (
                        <li>
                            <Link to="/signin" className="border border-[#55BFEA] text-[#55BFEA] px-6 py-2 rounded-[5px] hover:bg-[#55BFEA] hover:text-white">
                                Sign In
                            </Link>
                        </li>
                    )}
                </ul>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    {currentUser && (
                        <img
                            src={currentUser.profilePic || "https://i.pravatar.cc/40"}
                            alt="Profile"
                            className="w-10 h-10 rounded-full"
                        />
                    )}
                    <button onClick={toggleMenu} className="text-[#494949] text-2xl">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    ref={menuRef}
                    className={`fixed top-0 right-0 w-2/4 h-full bg-white text-[#494949] p-5 transform ${
                        menuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden shadow-lg z-50`}
                >
                    <button onClick={toggleMenu} className="absolute top-5 right-5 text-2xl">
                        <FaTimes />
                    </button>
                    <ul className="space-y-6 mt-10 text-lg">
                        <li>
                            <button onClick={() => handleProtectedNavigation("/events")} className="flex items-center gap-2">
                                <img src={eventicon} alt="eventicon" className="lg:hidden" />
                                Event Page
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleProtectedNavigation("/support")} className="flex items-center gap-2">
                                <img src={supporticon} alt="supporticon" className="lg:hidden" />
                                Support Page
                            </button>
                        </li>

                        {/* Mobile Profile or Sign In Button */}
                        {currentUser ? (
                            <li className="flex flex-col items-center gap-2">
                                <button onClick={handleLogout} className="text-red-500 hover:text-red-700">
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <li>
                                <Link to="/signin" className="border border-[#55BFEA] text-[#55BFEA] px-6 py-2 rounded-[5px] hover:bg-[#55BFEA] hover:text-white">
                                    Sign In
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
