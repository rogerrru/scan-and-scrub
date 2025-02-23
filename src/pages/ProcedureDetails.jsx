import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import proceduresData from "../data/procedures.json";

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

    if (!procedure) {
        return (
        <div className="text-center text-xl mt-20">
            <h1>Procedure not found.</h1>
        </div>
        );
    }

    return (
        <div>
            <Header />
            <div className="container mx-auto px-5 py-10">
                
                {/* Back Button */}
                <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-[#2E6AD9] text-white px-9 py-2 rounded-md mb-6 cursor-pointer hover:bg-blue-700"
                >
                    Back
                </button>
                </div>

                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
                    {/*Procedure Image */}
                    <div className="relative flex-1 md:ml-0">
                        <img
                            src={procedure.image}
                            alt={procedure.name}
                            className={`rounded-lg shadow transition-transform duration-300 ${
                            isZoomed ? "scale-150" : "scale-100"
                            }`}
                        />

                        {/* Zoom Button - Overflowing the Corner */}
                        <div className="absolute top-[-10px] right-[-10px] w-14 h-14 bg-[#F4F5F9] rounded-full flex items-center justify-center">
                            <button
                            onClick={() => setIsZoomed(!isZoomed)}
                            className="bg-[#2E6AD9] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition"
                            >
                            <img
                                src={isZoomed ? zoomOutIcon : zoomInIcon}
                                alt="Zoom Icon"
                                className="w-5 h-5"
                            />
                            </button>
                        </div>
                    </div>

                    {/*Procedure Details */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold ">{procedure.name}</h2>
                        <div className="bg-[#A6E5B4] w-40 flex justify-center items-center pb-2 mt-2 rounded-full">
                            <p className="text-s text-white font-semibold mt-2">
                                {procedureType === "major" ? "Major Procedure" : "Minor Procedure"}
                            </p>
                        </div>
                        <p className="text-lg mt-4 text-gray-600">{procedure.description}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
    };
  

export default ProcedureDetails;
