import React from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import nurse_icon from "../assets/homepage/nurse-placeholder.png";
import tool_icon from "../assets/homepage/tools-placeholder.png";
import teamData from "../data/team.json";

const teamImages = import.meta.glob("../assets/homepage/team/*.png", { eager: true });

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
                        <p className="text-3xl md:text-4xl font-bold">Scan&Scrub</p>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#2E6AD9] leading-tight">
                            The QR Code Solution <br/> for OR Efficiency
                        </h1>
                        <p className="text-lg md:text-2xl text-justify text-gray-700 mt-6 mb-8 md:mr-5">
                            By scanning a QR code, nurses could instantly access detailed information about the specific
                            instruments required for each operation, including their functions, handling procedures, and
                            sterilization protocols.
                        </p>
                        <Link to="/procedures"
                              className="bg-[#2E6AD9] text-lg md:text-xl text-white px-6 py-3 rounded-md font-semibold inline-block">
                            View Procedures
                        </Link>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src={nurse_icon} alt="Nurse with QR Code" className="max-w-full h-auto" />
                </div>
            </div>

            {/* Why This Matters Section */}
            <div className="bg-gray-100 pt-5 pb-15 md:py-20" style={{ backgroundColor: "#FFFAF1" }}>
                <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
                    <div className="md:w-1/2 flex justify-center md:mr-10">
                        <img src={tool_icon} alt="Surgical Tools" className="max-w-full h-auto rotate-270 md:rotate-none" />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left md:pt-8">
                        <p className="text-3xl md:text-4xl font-bold">Project Significance</p>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#2E6AD9] leading-tight">
                            Why this matters?</h1>
                        <p className="text-lg md:text-2xl text-justify text-gray-700 mb-8">
                            New OR staff and student nurses often experience high anxiety due to unfamiliarity with
                            surgical instruments,
                            procedures, and protocols. This anxiety can reduce efficiency, prolong surgeries, and
                            increase the risk of errors.
                        </p>
                        <Link to="/about"
                              className="bg-[#2E6AD9] text-xl text-white px-6 py-3 rounded-md font-semibold inline-block">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Our Team Section */}
            <div className="container mh-100  mx-auto pt-5 pb-15 md:py-20" style={{backgroundColor: "#F4F5F9"}}>
                <h1 className="text-4xl md:text-6xl font-extrabold px-5 text-[#2E6AD9] leading-tight my-3">Our Team</h1>
                <div
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-10 gap-3 px-5">
                    {teamData
                        .filter((member) => member.id <= 10)
                        .map((member) => (
                            <div key={member.id}
                                 className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                                <img
                                    src={getTeamImagePath(member.image)}
                                    alt={member.name}
                                    className="sm:w-50 sm:h-50 object-cover rounded-lg mb-3"
                                />
                                <p className="text-center font-black">{member.name}</p>
                            </div>
                        ))}
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Home;
