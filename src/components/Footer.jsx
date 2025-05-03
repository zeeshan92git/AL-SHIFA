import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';

function Footer() {
    const navigate = useNavigate();

    return (
        <div className="bg-sky-500 text-gray-300 py-5 px-6 rounded-md shadow-md mt-4 w-full mb-0 ">
            {/* Main Content Area */}
            <div className="flex flex-col items-center gap-10 mb-5">
                {/* Logo, Image and Description */}
                <div className="text-center flex flex-col items-center gap-2 ">
                    
                    {/* Footer Image */}
                    <img 
                        src="https://res.cloudinary.com/dophfzeep/image/upload/v1741950593/header_img_zqsvkx.png" 
                        alt="Healthcare Icon" 
                        className="w-24 h-24 rounded-full shadow-lg shadow-sky-950 bg-white"
                    />

                    <p className="text-white leading-4 max-w-md mx-auto mt-2 text-sm md:text-lg">
                        <span className="font-bold text-white">Al-SHIFA: </span> Empowering you to take control of your health with a comprehensive directory of doctors and a user-friendly booking system.
                    </p>
                </div>

                {/* Links Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 text-center md:text-left">
                    {/* Company Section */}
                    <div>
                        <p className="mb-2 font-bold text-gray-900 text-xl">Company</p>
                        <ul className="flex flex-col gap-2 text-sm text-gray-800">
                            <NavLink to="/" className="hover:text-white transition-colors">
                                <li onClick={() => scrollTo(0, 0)}>Home</li>
                            </NavLink>
                            <NavLink to="/about" className="hover:text-white transition-colors">
                                <li onClick={() => scrollTo(0, 0)}>About Us</li>
                            </NavLink>
                            <NavLink to="/contact" className="hover:text-white transition-colors">
                                <li onClick={() => scrollTo(0, 0)}>Contact Us</li>
                            </NavLink>
                            <li className="hover:text-white transition-colors">Privacy Policy</li>
                        </ul>
                    </div>

                    {/* Get In Touch Section */}
                    <div>
                        <p className="mb-2 font-bold text-gray-900 text-xl">Get In Touch</p>
                        <ul className="flex flex-col gap-2 text-sm text-gray-800">
                            <li className="hover:text-white transition-colors">+1-212-456-7890</li>
                            <li className="hover:text-white transition-colors">al-shifa@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="border-t border-gray-700 pt-5">
                <p className="text-xs md:text-sm text-gray-900 text-center">
                    © 2025 Al-SHIFA.dev - All Rights Reserved.
                </p>
            </div>

        </div>
    );
}

export default Footer;
