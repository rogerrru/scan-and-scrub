import React from "react";
import logo from "/logo-icon-2.png"; 

const Footer = () => {
  return (
    <footer className="bg-[#2E6AD9] text-center py-4 border-t border-gray-200">
      <div className="flex justify-center">
        <div className="w-100 h-[5px] bg-white mb-4 "></div>
      </div>
      <div className="flex justify-center mb-2">
        <img src={logo} alt="Scan&Scrub Logo" height="40" className="h-15 w-auto" />
      </div>

      <p className="text-white font-light text-sm">©2025 Scan&Scrub. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
