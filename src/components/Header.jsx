import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo-icon-1.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const getLinkClass = (path) => {
        if (path === "/") {
            return location.pathname === "/"
                ? "text-[#2E6AD9]"
                : "text-black hover:text-blue-500 hover:scale-110 transition duration-300";
        }
        if (path === "/procedures" && location.pathname.startsWith("/procedure")) {
            return "text-[#2E6AD9]";
        }
        return location.pathname.startsWith(path)
            ? "text-[#2E6AD9]"
            : "text-black hover:text-blue-500 hover:scale-110 transition duration-300";
    };

    return (
        <header className="font-sserif text-sm bg-[#F4F5F9] text-[#5A5959] w-full flex justify-between items-center md:py-3 md:px-6 lg:px-35 z-50 relative">
            <div className="w-full md:w-auto flex justify-between items-center bg-[#F4F5F9] py-3 px-10 md:py-0 px-6 md:px-0 z-50">
                <a href="/" className="flex items-center cursor-pointer hover:scale-105 transition duration-300">
                    <img src={logo} alt="Scan&Scrub Logo" className="h-15 w-auto" />
                    <div className="font-title text-xl text-black font-black pl-5 cursor-pointer">Scan&Scrub</div>
                </a>

                <button
                    className="md:hidden text-black text-3xl cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    ☰
                </button>
            </div>

            <nav
                className={`absolute md:static left-0 w-full md:w-auto bg-[#F4F5F9] md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-y-0" : "-translate-y-[150%]"} md:translate-y-0 md:flex justify-end top-[5rem] md:top-0 z-40`}
            >
                <ul className="flex flex-col text-lg font-extrabold md:flex-row items-center gap-6 md:gap-10 py-4 md:py-0">
                    <li><Link className={getLinkClass("/")} to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link className={getLinkClass("/procedures")} to="/procedures" onClick={() => setMenuOpen(false)}>Procedures</Link></li>
                    <li><Link className={getLinkClass("/tools")} to="/tools" onClick={() => setMenuOpen(false)}>Instruments</Link></li>
                    <li><Link className={getLinkClass("/about")} to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;