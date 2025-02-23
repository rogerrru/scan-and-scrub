import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import proceduresData from "../data/procedures.json";
import toolsData from "../data/tools.json";

import zoomInIcon from "../assets/procedures/ZoomInButton.svg"
import zoomOutIcon from "../assets/procedures/ZoomOutButton.svg"

const ProcedureDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isZoomed, setIsZoomed] = useState(false);

    let procedureType = null;
    let procedure = null;

    // Find procedure and determine its type
    Object.entries(proceduresData).forEach(([type, procedures]) => {
        const foundProcedure = procedures.find(proc => proc.id === parseInt(id));
        if (foundProcedure) {
        procedure = foundProcedure;
        procedureType = type; // "major" or "minor"
        }
    });

    const procedureTools = procedure.tools
    .map(toolName => toolsData.find(tool => tool.name === toolName) || console.warn(`Tool not found: ${toolName}`))
    .filter(Boolean);

    if (!procedure) {
        return (
        <div className="text-center text-xl mt-20">
            <h1>Procedure not found.</h1>
        </div>
        );
    }
    

    return (
        <div className="w-screen h-screen flex flex-col">
            <Header />
            <div className="container mx-auto px-5 py-10v flex-1 mt-10">
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
                    {/*Procedure Image */}
                    <div className="relative flex-1 md:ml-0 flex justify-center">
                        <img
                            src={procedure.image}
                            alt={procedure.name}
                            className={`rounded-lg shadow transition-transform duration-300 ${
                                isZoomed ? "scale-150" : "scale-100"
                            } min-w-[300px] max-w-[500px] w-full`}
                        />

                        {/* Zoom Button*/}
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

                    {/* Procedure Details */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold ">{procedure.name}</h2>
                        <div className="bg-[#A6E5B4] w-fit px-4 py-1 flex justify-center items-center mt-2 rounded-full mx-auto md:mx-0">
                            <p className="text-sm text-white font-semibold">{procedureType === "major" ? "Major Procedure" : "Minor Procedure"}</p>
                        </div>
                        <p className="text-lg mt-4 text-gray-600">{procedure.description}</p>
                        
                        {/* Tools*/}
                        <div className="mt-8 mb-15">
                            <h3 className="text-xl font-bold mb-4">Tools</h3>
                            <div className="relative">
                                <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide w-[calc(3*10rem+2rem)]"> 
                                {procedureTools.map((tool) => (
                                    <div 
                                        key={tool.id} 
                                        className="flex-none w-40 bg-white shadow-md rounded-lg p-3 cursor-pointer"
                                        onClick={() => navigate(`/tools/${tool.id}`)}
                                    >
                                        <img 
                                            src={tool.image} 
                                            alt={tool.name} 
                                            className="w-full h-24 object-cover rounded-md mb-2" 
                                        />
                                        <p className="text-center text-sm font-semibold">{tool.name}</p>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
    };
  

export default ProcedureDetails;
