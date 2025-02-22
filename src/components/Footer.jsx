import React from "react";
import logo from "/logo-icon.png"; 

const Footer = () => {
  return (
    <footer className="bg-white text-center py-6 border-t border-gray-200">
      <div className="w-full h-[1px] bg-gray-300 mb-4"></div>

      <div className="flex justify-center mb-2">
        <img src={logo} alt="Scan&Scrub Logo" height="40" className="h-10" />
      </div>

      <p className="text-gray-600 text-sm">©2025 Scan&Scrub. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
