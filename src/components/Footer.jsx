import React from "react";
import logo from "/logo-icon-4.png";

const Footer = () => {
  return (
    <footer className="bg-[#2D466A] text-center py-4 border-t border-gray-200">
      <div className="flex justify-center mb-2">
        <img src={logo} alt="Scan&Scrub Logo" height="40" className="h-15 w-auto" />
      </div>

      <p className="text-white font-light text-sm">©2025 Scan&Scrub. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
