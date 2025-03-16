import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import toolsData from "../data/tools.json";
import "../styles/index.css";
import proceduresData from "../data/procedures.json";

const toolImages = import.meta.glob("../assets/tools/*.webp", { eager: true });

const Tools = () => {
    const [searchTool, setSearchTool] = useState("");

    const getToolImagePath = (imagePath) => {
        const fileName = imagePath.replace("/assets/tools/", "");
        return toolImages[`../assets/tools/${fileName}`]?.default || toolImages["../assets/tools/image-placeholder.webp"]?.default;
    };

    return (
        <div className="w-screen min-h-screen flex flex-col">
            <Header />
            <div className="w-full flex-1 bg-[#C0D2E5]">
                {/* Main Content */}
                <div className="w-full flex-1">
                    <div className="w-full bg-[#2D466A] mx-auto px-5 py-5 md:py-10 flex-1 ">
                        <h1 className="text-5xl md:text-6xl text-[#FFFFFF] font-black text-center mb-6 mt-0 md:mt-10">
                            Operating Room Instruments
                        </h1>

                        {/* Search Bar */}
                        <div className="flex justify-center my-6 px-4">
                            <div className="relative w-full max-w-md">
                                <input
                                    type="text"
                                    placeholder="Search for Instruments..."
                                    value={searchTool}
                                    onChange={(e) => setSearchTool(e.target.value)}
                                    className="bg-[#FFFFFF] border-2 border-[#FC8EAC] px-10 py-4 pr-16 rounded-full w-full font-semibold placeholder-[#716C68]"
                                />
                                <button
                                    className="bg-[#FC8EAC] absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-6 py-3 rounded-full hidden sm:block cursor-pointer">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="h-full w-full bg-[#C0D2E5]">
                    <div className="container mx-auto px-10 md:px-20">
                        {/* Tools Cards */}
                        <div
                            className={`grid ${toolsData.filter((tool) =>
                                tool.name.toLowerCase().includes(searchTool.toLowerCase())
                            ).length === 0
                                    ? "grid-cols-1"
                                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
                                } gap-5 md:gap-10 p-4 mt-6`}
                        >
                            {toolsData.filter((tool) =>
                                tool.name.toLowerCase().includes(searchTool.toLowerCase())
                            ).length === 0 ? (
                                <p className="text-lg text-center font-semibold !text-[#898585] col-span-1">
                                    No instruments found.
                                </p>
                            ) : (
                                toolsData
                                    .filter((tool) =>
                                        tool.name.toLowerCase().includes(searchTool.toLowerCase())
                                    )
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .map((tool) => (
                                        <Link to={`/tools/${tool.id}`} key={tool.id}>
                                            <div
                                                className=" bg-white shadow-md rounded-lg p-6 flex flex-col items-center cursor-pointer hover:shadow-lg transition">
                                                <img
                                                    src={getToolImagePath(tool.image)}
                                                    alt={tool.name}
                                                    className="w-110 h-60 object-contain rounded-md mb-4"
                                                />
                                                <p className="text-sm md:text-lg lg:text-xl font-bold text-center text-[#2D466A]">
                                                    {tool.name}
                                                </p>
                                            </div>
                                        </Link>
                                    ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <BackToTop />
            <Footer />
        </div>
    );
};

export default Tools;
