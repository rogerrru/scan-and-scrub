import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo-icon-1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) =>
    location.pathname === path ? "text-[#2E6AD9]"
                                : "text-black hover:text-blue-500 hover:scale-110 transition duration-300";

  return (
      <header
          className="font-sserif text-sm text-[#5A5959] w-full flex justify-between items-center py-3 px-6 md:px-20 z-50">
          <a href="/" className="flex items-center cursor-pointer hover:scale-105 transition duration-300">
              <img src={logo} alt="Scan&Scrub Logo" className="h-15 w-auto"/>
              <div className="font-title text-xl text-black font-bold pl-5 cursor-pointer">
                  Scan&Scrub
              </div>
          </a>

          <button
              className="md:hidden text-black text-3xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
          >
              ☰
          </button>

          <nav className={`absolute md:static top-18 left-0 w-full md:w-auto bg-[#F4F5F9] md:bg-transparent shadow-md 
      md:shadow-none transition-all duration-300 ${menuOpen ? "block" : "hidden"} md:flex justify-end`}>
              <ul className="flex flex-col text-lg font-semibold md:flex-row items-center gap-6 md:gap-10 py-4 md:py-0">
                  <li><Link className={getLinkClass("/")} to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                  <li><Link className={getLinkClass("/procedures")} to="/procedures"
                            onClick={() => setMenuOpen(false)}>Procedures</Link></li>
                  <li><Link className={getLinkClass("/tools")} to="/tools"
                            onClick={() => setMenuOpen(false)}>Tools</Link></li>
                  <li><Link className={getLinkClass("/about")} to="/about"
                            onClick={() => setMenuOpen(false)}>About Us</Link></li>
              </ul>
          </nav>
      </header>
  );
};

export default Header;
