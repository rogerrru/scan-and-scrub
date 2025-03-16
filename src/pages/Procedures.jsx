import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import proceduresData from "../data/procedures.json";
import "../styles/index.css";

const procedureImages = import.meta.glob("../assets/procedures/*.webp", { eager: true });

const Procedures = () => {
  const [searchProcedure, setSearchProcedure] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("major");

  const getProcedureImagePath = (imagePath) => {
    const fileName = imagePath.replace("/assets/procedures/", "");
    return procedureImages[`../assets/procedures/${fileName}`]?.default || procedureImages["../assets/procedures/image-placeholder.webp"]?.default;
  };

  return (
    <div className="w-screen min-h-screen flex flex-col bg-[#C0D2E5]">
      <Header />

      {/* Main Content */}
      <div className="w-full flex-1">
        <div className="w-full bg-[#2D466A]">
          <div className="container mx-auto px-5 py-5 md:py-10">
            <h1 className="text-5xl md:text-6xl text-[#FFFFFF] font-black text-center mb-6 mt-0 md:mt-10">
              Operating Room Procedures
            </h1>

            {/* Search Bar */}
            <div className="flex justify-center my-6 px-4">
              <div className="relative w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search for Procedures..."
                    value={searchProcedure}
                    onChange={(e) => setSearchProcedure(e.target.value)}
                    className="bg-[#FFFFFF] border-2 border-[#FC8EAC] px-10 py-4 pr-16 rounded-full w-full font-bold placeholder-[#716C68]"
                />
                <button
                    className="font-bold bg-[#FC8EAC] absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-6 py-3 rounded-full hidden sm:block cursor-pointer">
                  Search
                </button>
              </div>
            </div>

            {/* Category Buttons */}
            <div className="flex justify-center gap-6 mb-8">
              <button
                  onClick={() => setSelectedCategory("major")}
                  className={`px-5 py-2 md:px-7 md:py-2 rounded-md font-black text-xl md:text-2xl cursor-pointer transition ${selectedCategory === "major"
                      ? "bg-[#FC8EAC] text-white"
                      : "bg-white text-[#C0D2E5] border-2 border-[#C0D2E5]"
                  }`}
              >
                Major Procedures
              </button>
              <button
                  onClick={() => setSelectedCategory("minor")}
                  className={`px-5 py-2 md:px-7 md:py-2 rounded-md font-black text-xl md:text-2xl cursor-pointer transition ${selectedCategory === "minor"
                      ? "bg-[#FC8EAC] text-white"
                      : "bg-white text-[#C0D2E5] border-2 border-[#C0D2E5]"
                  }`}
              >
                Minor Procedures
              </button>
            </div>
          </div>
        </div>

        <div className="h-full w-full bg-[#C0D2E5]">
          <div className="container mx-auto px-10 md:px-20">
            {/* Procedure Cards */}
            <div
                className={`grid ${
                    proceduresData[selectedCategory].filter((procedure) =>
                        procedure.name.toLowerCase().includes(searchProcedure.toLowerCase())
                    ).length === 0
                        ? "grid-cols-1"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                } gap-10 p-4 pt-6`}
            >
              {proceduresData[selectedCategory]
                  .filter((procedure) =>
                      procedure.name.toLowerCase().includes(searchProcedure.toLowerCase())
                  ).length === 0 ? (
                  <p className="text-lg text-center font-semibold !text-[#898585] col-span-1">
                    No procedures found.
                  </p>
              ) : (
                  proceduresData[selectedCategory]
                      .filter((procedure) =>
                          procedure.name.toLowerCase().includes(searchProcedure.toLowerCase())
                      )
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((procedure) => (
                          <Link to={`/procedure/${procedure.id}`} key={procedure.id}>
                            <div
                                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition">
                              <img
                                  src={getProcedureImagePath(procedure.image)}
                                  alt={procedure.name}
                                  className="w-110 h-60 object-cover rounded-md mb-4"
                              />
                              <p className="text-sm md:text-lg lg:text-xl font-bold text-center text-[#2D466A]">
                                {procedure.name}
                              </p>
                            </div>
                          </Link>
                      ))
              )}
            </div>
          </div>
        </div>
      </div>
      <BackToTop/>
      <Footer/>
    </div>
  );
};

export default Procedures;
