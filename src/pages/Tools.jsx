import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import toolsData from "../data/tools.json";
import "../styles/index.css";

const toolImages = import.meta.glob("../assets/tools/*.png", { eager: true });

const Tools = () => {
    const [searchTool, setSearchTool] = useState("");

    const getToolImagePath = (imagePath) => {
        const fileName = imagePath.replace("/assets/tools/", "");
        return toolImages[`../assets/tools/${fileName}`]?.default || toolImages["../assets/tools/image-placeholder.png"]?.default;
    };

    return (
        <div className="w-screen min-h-screen flex flex-col">
            <Header />

            {/* Main Content */}
            <div className="container mx-auto px-5 py-10 flex-1">
                <h1 className="text-5xl md:text-6xl text-[#2E6AD9] font-bold text-center mb-6 mt-10">
                    Operating Room Instruments
                </h1>

                {/* Search Bar */}
                <div className="flex justify-center my-6 px-4">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search for Tools..."
                            value={searchTool}
                            onChange={(e) => setSearchTool(e.target.value)}
                            className="border-2 border-[#2E6AD9] px-10 py-4 pr-16 rounded-full w-full font-semibold placeholder-[#716C68]"
                        />
                        <button
                            className="bg-[#2E6AD9] absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-6 py-3 rounded-full hidden sm:block cursor-pointer">
                            Search
                        </button>
                    </div>
                </div>

                {/* Tools Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mt-6">
                    {toolsData.filter((tool) =>
                        tool.name.toLowerCase().includes(searchTool.toLowerCase())
                    ).length === 0 ? (
                        <p className="text-lg text-center font-semibold">
                            No instruments found.
                        </p>
                    ) : (
                        toolsData
                            .filter((tool) =>
                                tool.name.toLowerCase().includes(searchTool.toLowerCase())
                            )
                            .map((tool) => (
                                <Link to={`/tools/${tool.id}`} key={tool.id}>
                                    <div
                                        className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center cursor-pointer hover:shadow-lg transition">
                                        <img
                                            src={getToolImagePath(tool.image)}
                                            alt={tool.name}
                                            className="w-110 h-60 object-contain rounded-md mb-4"
                                        />
                                        <p className="text-xl md:text-lg lg:text-xl text-center">{tool.name}</p>
                                    </div>
                                </Link>
                            ))
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Tools;
