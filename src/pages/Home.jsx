import React from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import nurse_icon from "../assets/homepage/nurse-placeholder.png";
import tool_icon from "../assets/homepage/tools-placeholder.png";
import teamData from "../data/team.json";

// Import all images from the team directory
const teamImages = import.meta.glob("../assets/homepage/team/*.png", { eager: true });

// Function to retrieve the correct image path
const getTeamImagePath = (imagePath) => {
    const fileName = imagePath.replace("/assets/homepage/team/", ""); // Extract filename
    return teamImages[`../assets/homepage/team/${fileName}`]?.default ||
        teamImages["../assets/homepage/team/team-placeholder.png"]?.default;
};

const Home = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col">
            <Header />

            {/* Hero Section */}
            <div className="container mx-auto px-5 py-20 flex flex-col md:flex-row items-center gap-1" style={{ backgroundColor: "#F4F5F9" }}>
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-4xl font-bold my-5">Scan&Scrub</p>
                        <h1 className="text-6xl font-bold text-[#2E6AD9] leading-tight">
                            The QR Code Solution <br/> for OR Efficiency
                        </h1>
                        <p className="text-xl text-gray-700 mt-6 mb-2 mr-3">
                            By scanning a QR code, nurses could instantly access detailed information about the specific
                            instruments required for each operation, including their functions, handling procedures, and
                            sterilization protocols.
                        </p>
                        <Link to="/procedures"
                              className="bg-[#2E6AD9] text-xl text-white px-6 py-3 rounded-md font-semibold inline-block">
                            View Procedures
                        </Link>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src={nurse_icon} alt="Nurse with QR Code" className="max-w-full h-auto" />
                </div>
            </div>

            {/* Why This Matters Section */}
            <div className="bg-gray-100 py-20" style={{ backgroundColor: "#FFFAF1" }}>
                <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
                    <div className="md:w-1/2 flex justify-center">
                        <img src={tool_icon} alt="Surgical Tools" className="max-w-full h-auto" />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-[#2E6AD9]">Why this matters?</h2>
                        <p className="text-gray-700 my-5">
                            New OR staff and student nurses often experience high anxiety due to unfamiliarity with surgical instruments,
                            procedures, and protocols. This anxiety can reduce efficiency, prolong surgeries, and increase the risk of errors.
                        </p>
                        <Link to="/about" className="bg-[#2E6AD9] text-white px-6 py-3 rounded-md font-semibold inline-block">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Our Team Section */}
            <div className="container mx-auto py-20" style={{ backgroundColor: "#F4F5F9" }}>
                <h2 className="text-4xl font-bold text-[#2E6AD9] text-left px-5 mb-10">Our Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-5">
                    {teamData.map((member) => (
                        <div key={member.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img
                                src={getTeamImagePath(member.image)}
                                alt={member.name}
                                className="w-50 h-50 object-cover rounded-lg mb-3"
                            />
                            <p className="text-center font-semibold">{member.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
