import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import toolsData from "../data/tools.json";

import zoomInIcon from "../assets/procedures/ZoomInButton.svg";
import zoomOutIcon from "../assets/procedures/ZoomOutButton.svg";

const ToolDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isZoomed, setIsZoomed] = useState(false);

    const tool = toolsData.find((t) => t.id === parseInt(id));

    if (!tool) {
        return (
            <div className="text-center text-xl mt-20">
                <h1>Tool not found.</h1>
            </div>
        );
    }

    return (
        <div className="w-screen h-screen flex flex-col">
            <Header />
            <div className="container mx-auto px-5 py-10 flex-1">
                {/* Back Button */}
                <div className="max-w-6xl mx-auto">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-[#2E6AD9] text-white px-9 py-2 rounded-md mb-6 cursor-pointer hover:bg-blue-700"
                    >
                        Back
                    </button>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-20">
                    {/* Tool Image */}
                    <div className="relative flex-1 md:ml-0 flex justify-center">
                        <img
                            src={tool.image}
                            alt={tool.name}
                            className={`rounded-lg shadow transition-transform duration-300 ${
                                isZoomed ? "scale-150" : "scale-100"
                            } min-w-[300px] max-w-[500px] w-full`}
                        />

                        {/* Zoom Button */}
                        <div className="absolute top-[-15px] right-[-12px] w-14 h-14 bg-[#F4F5F9] rounded-full flex items-center justify-center">
                            <button
                                onClick={() => setIsZoomed(!isZoomed)}
                                className="bg-[#2E6AD9] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition"
                                aria-label={isZoomed ? "Zoom Out" : "Zoom In"}
                            >
                                <img src={isZoomed ? zoomOutIcon : zoomInIcon} alt="Zoom Icon" className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Tool Details */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold ">{tool.name}</h2>
                        <p className="text-lg mt-0.5 text-[#716C68] italic uppercase"><strong>{tool.other_names}</strong></p>
                        <p className="text-lg mt-5 text-[#716C68]"><strong>Uses:</strong> {tool.uses}</p>
                        <p className="text-lg mt-2 text-[#716C68]"><strong>Description:</strong> {tool.description}</p>
                        <p className="text-lg mt-2 text-[#716C68]"><strong>Handling & Sterilization:</strong> {tool.handling}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ToolDetails;
