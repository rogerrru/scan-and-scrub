import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import proceduresData from "../data/procedures.json";
import toolsData from "../data/tools.json";

import zoomInIcon from "../assets/procedures/ZoomInButton.svg";
import zoomOutIcon from "../assets/procedures/ZoomOutButton.svg";
import clsx from "clsx";

const procedureImages = import.meta.glob("../assets/procedures/*.png", { eager: true });
const toolImages = import.meta.glob("../assets/tools/*.png", { eager: true });

const ProcedureDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isZoomed, setIsZoomed] = useState(false);

    let procedureType = null;
    let procedure = null;

    const getProcedureImagePath = (imagePath) => {
        const fileName = imagePath.replace("/assets/procedures/", "");
        return procedureImages[`../assets/procedures/${fileName}`]?.default || procedureImages["../assets/procedures/image-placeholder.png"]?.default;
    };

    const getToolImagePath = (imagePath) => {
        const fileName = imagePath.replace("/assets/tools/", "");
        return toolImages[`../assets/tools/${fileName}`]?.default || toolImages["../assets/tools/image-placeholder.png"]?.default;
    };

    Object.entries(proceduresData).forEach(([type, procedures]) => {
        const foundProcedure = procedures.find(proc => proc.id === parseInt(id));
        if (foundProcedure) {
            procedure = foundProcedure;
            procedureType = type;
        }
    });

    const procedureTools = procedure?.instruments?.map((toolName) => {
        return toolsData.find(tool => tool.name.trim().toLowerCase() === toolName.trim().toLowerCase());
    }).filter(Boolean) || [];

    if (!procedure) {
        return (
            <div className="text-center text-xl mt-20">
                <h1>Procedure not found.</h1>
            </div>
        );
    }


    console.log('Image Citation:', procedure.imageCitation);
    console.log('Image URL:', procedure.imageUrl);
    return (
        <div className="w-screen h-screen flex flex-col">
            <Header />
            <div className="container mx-auto px-5 py-10 flex-1">
                <div className="max-w-6xl mx-auto">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-[#2E6AD9] text-white px-9 py-2 rounded-md mb-6 cursor-pointer hover:bg-blue-700"
                    >
                        Back
                    </button>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-20">
                    <div className="w-full h-full relative flex-1 flex-col justify-center">
                        {/* Image*/}
                        <div
                            className={`relative w-full h-full rounded-lg shadow transition-all duration-300 overflow-hidden ${isZoomed ? "overflow-scroll" : "overflow-hidden"}`}
                            style={{
                                touchAction: isZoomed ? "pan-x pan-y" : "auto",
                                WebkitOverflowScrolling: "touch",
                                position: "relative",
                            }}
                        >
                            <img
                                src={getProcedureImagePath(procedure.image)}
                                alt={procedure.name}
                                className={`rounded-lg transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"} object-contain`}
                                style={{
                                    minWidth: isZoomed ? "100%" : "100%",
                                    minHeight: isZoomed ? "100%" : "100%",
                                    transformOrigin: isZoomed ? "top left" : "center",
                                }}
                                draggable="false"
                            />
                        </div>


                        {/* Source Link */}
                        {procedure.imageCitation && procedure.imageUrl && (
                            <p className="mt-4 text-sm text-gray-500 text-center italic max-w-[500px]">
                                Source:{" "}
                                <a
                                    href={procedure.imageUrl.startsWith("http") ? procedure.imageUrl : `https://${procedure.imageUrl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#2E6AD9] hover:text-blue-600 cursor-pointer"
                                >
                                    {procedure.imageCitation}
                                </a>
                            </p>
                        )}

                         {/* Instruments */}
                        <div className="mt-4 mb-15">
                            <div className=" w-full max-w-lg overflow-x-auto mx-auto">
                                <h3 className="text-xl font-bold mb-4 mt-5">Instruments</h3>
                                {procedureTools.length > 0 ? (
                                    <div className="overflow-hidden rounded-lg">
                                        <div className="overflow-x-auto">
                                            <div className="flex flex-nowrap gap-4 p-2">
                                                {procedureTools.map((tool, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex-none w-40 bg-white shadow-md rounded-lg p-3 cursor-pointer"
                                                        onClick={() => navigate(`/tools/${tool.id}`)}
                                                    >
                                                        <img
                                                            src={getToolImagePath(tool.image)}
                                                            alt={tool.name}
                                                            className="w-full h-24 object-cover rounded-md mb-2"
                                                        />
                                                        <p className="text-center text-sm font-semibold">{tool.name}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <p>No instruments available for this procedure.</p>
                                )}
                            </div>
                        </div>

                        {/* Zoom Button */}
                        <div className="absolute -top-5 -right-2 w-14 h-14 bg-[#F4F5F9] rounded-full flex items-center justify-center z-10">
                            <button
                                onClick={() => setIsZoomed(!isZoomed)}
                                className="bg-[#2E6AD9] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition"
                                aria-label={isZoomed ? "Zoom Out" : "Zoom In"}
                            >
                                <img src={isZoomed ? zoomOutIcon : zoomInIcon} alt="Zoom Icon" className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="w-full h-full flex-1 overflow-hidden">
                        <h2 className="text-3xl font-bold text-center md:text-left ">{procedure.name}</h2>
                        <div
                            className={clsx(
                                "w-fit px-4 py-1 flex justify-center items-center mt-2 rounded-full mx-auto md:mx-0",
                                procedureType === "major" ? "bg-[#A6E5B4]" : "bg-[#E5DCA6]"
                            )}
                        >
                            <p className="text-sm text-white font-semibold">
                                {procedureType === "major" ? "Major Procedure" : "Minor Procedure"}
                            </p>
                        </div>
                        <p className="text-justify text-lg mt-4 text-gray-600">{procedure.description}</p>
                        
                        <h3 className="text-xl font-bold mb-4 mt-5">Indications</h3>
                        <p className="text-justify text-lg mt-4 text-gray-600">{procedure.indications}</p>


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProcedureDetails;