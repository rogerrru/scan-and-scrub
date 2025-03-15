import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import toolsData from "../data/tools.json";

import zoomInIcon from "../assets/procedures/ZoomInButton.svg";
import zoomOutIcon from "../assets/procedures/ZoomOutButton.svg";


const toolImages = import.meta.glob("../assets/tools/*.png", { eager: true });


const ToolDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isZoomed, setIsZoomed] = useState(false);

    const getToolImagePath = (imagePath) => {
        const fileName = imagePath.replace("/assets/tools/", "");
        return toolImages[`../assets/tools/${fileName}`]?.default || toolImages["../assets/tools/image-placeholder.png"]?.default;
    };

    const tool = toolsData.find((t) => t.id === parseInt(id));

    if (!tool) {
        return (
            <div className="text-center text-xl mt-20">
                <h1>Instrument not found.</h1>
            </div>
        );
    }

    return (
        <div className="w-screen min-h-screen flex flex-col">
            <Header />
            <div className="w-full bg-[#C0D2E5] flex-1">
                <div className="container mx-auto px-5 py-10">
                    {/* Back Button */}
                    <div className="max-w-6xl mx-auto">
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-[#FC8EAC] text-white px-9 py-2 rounded-md mb-6 cursor-pointer hover:bg-[#f97498]"
                        >
                            Back
                        </button>
                    </div>

                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-20">
                        <div className="w-full h-full relative flex-1 md:ml-0 flex-col justify-center">
                            {/* Tool Image */}
                            <div
                                className={`relative w-full h-full rounded-lg shadow transition-all duration-300 ${isZoomed ? "overflow-auto" : "overflow-hidden"}`}
                                style={{
                                    touchAction: isZoomed ? "pan-x pan-y" : "auto",
                                    WebkitOverflowScrolling: "touch",
                                }}
                            >
                                <img
                                    src={getToolImagePath(tool.image)}
                                    alt={tool.name}
                                    className={`rounded-lg transition-transform duration-300 ${isZoomed ? "scale-150 w-auto h-auto" : "scale-100 w-full h-full"
                                    } object-contain`}
                                    style={{
                                        minWidth: isZoomed ? "100%" : "100%",
                                        minHeight: isZoomed ? "100%" : "100%",
                                        transformOrigin: isZoomed ? "top left" : "center",
                                    }}
                                    draggable="false"
                                />
                            </div>

                            {/* Source Link */}
                            {tool.imageCitation && tool.imageUrl && (
                                <p className="mt-4 text-sm text-gray-500 text-center italic max-w-[500px]">
                                    Source:{" "}
                                    <a
                                        href={tool.imageUrl.startsWith("http") ? tool.imageUrl : `https://${tool.imageUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#FC8EAC] hover:text-[#f97498] cursor-pointer"
                                    >
                                        {tool.imageCitation}
                                    </a>
                                </p>
                            )}

                            {/* Zoom Button */}
                            <div
                                className="absolute top-[-15px] right-[-12px] w-14 h-14 bg-[#F4F5F9] rounded-full flex items-center justify-center">
                                <button
                                    onClick={() => setIsZoomed(!isZoomed)}
                                    className="bg-[#FC8EAC] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#f97498] transition"
                                    aria-label={isZoomed ? "Zoom Out" : "Zoom In"}
                                >
                                    <img src={isZoomed ? zoomOutIcon : zoomInIcon} alt="Zoom Icon" className="w-5 h-5"/>
                                </button>
                            </div>
                        </div>

                        {/* Tool Details */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-justify text-[#2D466A]">{tool.name}</h2>
                            <p className="text-lg mt-0.5 text-[#2D466A] italic uppercase text-justify">
                                <strong>{tool.other_names}</strong></p>
                            <p className="text-lg mt-5 text-[#2D466A] text-justify"><strong>Uses:</strong> {tool.uses}
                            </p>
                            <p className="text-lg mt-2 text-[#2D466A] text-justify">
                                <strong>Description:</strong> {tool.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTop/>
            <Footer/>
        </div>
    );
};

export default ToolDetails;
