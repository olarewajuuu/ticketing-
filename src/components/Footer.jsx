import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/Lynkkupplogo.svg";

const Footer = () => {
    return (
        <footer className="bg-[#292929] text-white py-10 px-6 md:px-20">
            <div className="container mx-auto">

                {/* Desktop Layout: Row | Mobile Layout: Column */}
                <div className="flex flex-col md:flex-row justify-between gap-8">

                    {/* Section 1 - Logo */}
                    <div className="md:w-1/5 ">
                        <img src={logo} alt="Lynkkupp Logo" className="w-[50px]" />
                    </div>

                    {/* Sections 2 to 6 - Menu Items */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full  md:text-left">

                        {/* Section 2 - Corporate */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Corporate</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><Link to="/affiliate">Lynkkupp Affiliate</Link></li>
                                <li><Link to="/workforce">Workforce</Link></li>
                            </ul>
                        </div>

                        {/* Section 3 - Countries */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Countries</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>Nigeria</li>
                                <li>Ghana</li>
                                <li>Rwanda</li>
                                <li>Uganda</li>
                                <li>South Africa</li>
                            </ul>
                        </div>

                        {/* Section 4 - Legal */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Legal</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><Link to="/terms">Terms & Conditions</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                            </ul>
                        </div>

                        {/* Section 5 - Social Media */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Social Media</h3>
                            <ul className="flex flex-col justify-center md:justify-start gap-4 md:gap-2">
                                <li>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        {/* <FaFacebookF />  */}
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        {/* <FaTwitter />  */}
                                        Twitter X
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        {/* <FaInstagram />  */}
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Section 6 - Support */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Support</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/faqs">FAQs</Link></li>
                                <li><Link to="/livechat">Live Chat</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
