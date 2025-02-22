import React, { useState } from "react";
import '../styles/index.css'

import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import proceduresData from "../data/procedures.json"

const Procedures = () => {
  const [searchProcedure, setSearchProcedure] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("major");

  return (
    <div>
      <Header />
      
      <div className="container mx-auto px-5 py-10">
        <h1 className="text-5xl md:text-6xl text-[#2E6AD9] font-bold text-center mb-6 mt-10">
          Operating Room Procedures
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center m-15 px-4">
          <div className="relative w-full max-w-md ">
            <input
              type="text"
              placeholder="Search for Procedures..."
              value={searchProcedure}
              onChange={(e) => setSearchProcedure(e.target.value)}
              className="border-2 border-[#2E6AD9] px-10 py-4 pr-16 rounded-full w-full font-semibold placeholder-[#716C68]"
            />
            <button className="bg-[#2E6AD9] absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-10 py-3 rounded-full hidden sm:block cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center gap-6 mb-6s">
          <button
            onClick={() => setSelectedCategory("major")}
            className={`px-6 py-2 rounded-md font-medium text-2xl cursor-pointer ${
              selectedCategory === "major"
                ? "bg-[#2E6AD9] text-white"
                : "bg-[white] text-[#2E6AD9] border-3 border-[#2E6AD9]"
            }`}
          >
            Major Procedures
          </button>
          <button
            onClick={() => setSelectedCategory("minor")}
            className={`px-6 py-2 rounded-md font-medium text-2xl cursor-pointer ${
              selectedCategory === "minor"
                ? "bg-[#2E6AD9] text-white"
                : "bg-[white] text-[#2E6AD9] border-3 border-[#2E6AD9]"
            }`}
          >
            Minor Procedures
          </button>
        </div>

        {/* Procedure Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mt-12 mb-15">
          {proceduresData[selectedCategory]
            .filter((procedure) =>
              procedure.name.toLowerCase().includes(searchProcedure.toLowerCase())
            )
            .map((procedure) => (
              <div
                key={procedure.id}
                className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
              >
                <img
                  src={procedure.image}
                  alt={procedure.name}
                  className="w-60 h-60 mb-4"
                />
                <p className="text-lg text-center">{procedure.name}</p>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Procedures;