import { useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa"; // Import icons

const EventSort = ({ onSort }) => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [showFilters, setShowFilters] = useState(false); // State to toggle filter menu on mobile

    const handleSort = (filter) => {
        setActiveFilter(filter);
        onSort(filter);
        setShowFilters(false); // Close the menu after selecting a filter
    };

    return (
        <div className="p-6 text-left relative flex">
            {/* Mobile: FILTERS Button */}
            <div className="flex w-full items-center justify-between gap-4 md:hidden">
                <h2 className="text-xl font-bold">Events</h2>
                <button
                    onClick={() => setShowFilters(true)}
                    className="flex items-center text-[#55BFEA] font-bold border rounded p-2"
                >
                     <FaFilter /> FILTERS
                </button>

            </div>

            {/* Desktop: Title and Filters (always visible) */}
            <div className="hidden md:block">
                <h2 className="text-2xl font-bold">Events</h2>
                <div className="flex flex-wrap justify-start items-center gap-4 mt-4">
                    <h4>Sort by:</h4>
                    {["all", "today", "weekend", "online", "free"].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => handleSort(filter)}
                            className={`px-2 py-1  rounded relative ${activeFilter === filter ? "border-b-4 border-[#55BFEA]" : ""
                                }`}
                        >
                            {filter === "all" && "All Events"}
                            {filter === "today" && "Today"}
                            {filter === "weekend" && "This Weekend"}
                            {filter === "online" && "Online"}
                            {filter === "free" && "Free"}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile: Slide-in Filter Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 bg-white p-6 shadow-lg transform ${showFilters ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden z-50`}
            >
                {/* Close Button */}
                <button onClick={() => setShowFilters(false)} className="text-2xl absolute top-5 right-5">
                    <FaTimes />
                </button>

                <h2 className="text-xl font-bold mb-4">Sort by:</h2>

                <div className="flex flex-col gap-4">
                    {["all", "today", "weekend", "online", "free"].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => handleSort(filter)}
                            className={`px-4 py-2 bg-gray-200 rounded ${activeFilter === filter ? "border-b-4 border-[#55BFEA]" : ""
                                }`}
                        >
                            {filter === "all" && "All Events"}
                            {filter === "today" && "Today"}
                            {filter === "weekend" && "This Weekend"}
                            {filter === "online" && "Online"}
                            {filter === "free" && "Free"}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventSort;
