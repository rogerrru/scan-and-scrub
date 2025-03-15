import React from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import teamData from "../data/team.json";

import tool_icon from "../assets/homepage/tools-placeholder-2.webp";
import nurse from "../assets/homepage/nurse.svg"
import lightGrayBlob from "../assets/homepage/light-gray-blob.svg"

const teamImages = import.meta.glob("../assets/homepage/team/*.webp", { eager: true });

const getTeamImagePath = (imagePath) => {
    const fileName = imagePath.replace("/assets/homepage/team/", ""); 
    return teamImages[`../assets/homepage/team/${fileName}`]?.default ||
        teamImages["../assets/homepage/team/team-placeholder.webp"]?.default;
};

const Home = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col">
            <Header />

            {/* Hero Section */}
            <div className="w-full bg-[#2D466A]">
                <div
                    className="container mx-auto px-5 mt-20 md:mt-47 flex flex-col md:flex-row items-center gap-1 ">
                    <div className="md:w-1/2 text-center md:text-left pb-10 md:pb-40">
                        <p className="text-3xl md:text-4xl font-bold text-[#FC8EAC]">Scan&Scrub</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] leading-tight">
                            The QR Code Solution <br/> for OR Efficiency
                        </h1>
                        <p className="text-lg md:text-2xl text-justify text-[#FFFFFF] mt-6 mb-8 md:mr-5">
                            By scanning a QR code, nurses could instantly access detailed information about the specific
                            instruments required for each operation, including their functions.
                        </p>
                        <Link
                            to="/procedures"
                            className="bg-[#FC8EAC] text-lg md:text-xl text-white px-6 py-3 rounded-md font-semibold inline-block
             transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#f97498]"
                        >
                            View Procedures
                        </Link>

                    </div>
                    <div className="relative w-4/5 lg:w-full xl:w-2/3 order-1 xl:order-2" >
                        <img src={lightGrayBlob} alt="Blob Design" className="my-12 md:-20 lg:m-20 xl:m-24 w-full lg:w-5/6 xl:w-5/6 max-w-[800px]" />
                        <img src={nurse} alt="Nurse" className="absolute bottom-[49px] left-16 md:bottom-[49px] md:left-[60px] lg:bottom-[80px] lg:left-[160px] xl:bottom-11/12 xl:top-0 w-4/5 lg:w-2/3 xl:w-2/3 max-w-[650px]" />
                    </div>
                </div>
            </div>


            {/* Why This Matters Section */}
            <div className="pt-5 pb-15 md:py-30 bg-[#C0D2E5]">
                <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
                    <div className="md:w-1/2 flex justify-center md:mr-10">
                        <img src={tool_icon} alt="Surgical Tools"
                             className="max-w-full h-auto rotate-270 md:rotate-none"/>
                    </div>
                    <div className="md:w-1/2 text-center md:text-left md:pt-8">
                        <p className="text-3xl md:text-4xl font-bold text-[#FC8EAC]">Project Significance</p>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#2D466A] leading-tight">
                            Why this matters?</h1>
                        <p className="text-lg md:text-2xl text-justify text-gray-700 mb-8">
                            Student nurses often experience high anxiety due to unfamiliarity with
                            surgical instruments,
                            procedures, and protocols. This anxiety can reduce efficiency, prolong surgeries, and
                            increase the risk of errors.
                        </p>
                        <Link to="/about"
                              className="bg-[#FC8EAC] text-lg md:text-xl text-white px-6 py-3 rounded-md font-semibold inline-block
             transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#f97498]"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Our Team Section */}
            <div className="w-full bg-[#FFFFFF]">
                <div className="container bg-[#FFFFFF] mx-auto py-4 md:py-20">
                    <h1 className="text-lg md:text-3xl !text-[#2D466A] font-black  text-center mt-2 md:mt-10 mb-5 tracking-widest">
                        CONNECT WITH US
                    </h1>
                    <h1 className="text-4xl md:text-6xl text-[#FC8EAC] font-black  text-center mb-1 md:mb-6">
                        Our Team
                    </h1>
                    <p className="text-sm md:text-lg !text-[#898585] font-semibold text-center px-5 pb-3 md:pb-5">For
                        inquiries about our
                        information, reach out to us:</p>
                    <div
                        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-10 gap-3 px-5"
                    >
                        {teamData.map((member, index) => (
                            <div
                                key={member.id}
                                className={`shadow-md rounded-lg p-4 flex flex-col items-center ${
                                    index % 2 === 0 ? "bg-[#FFC1CC]" : "bg-[#C0D2E5]"
                                }`}
                            >
                                <img
                                    src={getTeamImagePath(member.image)}
                                    alt={member.name}
                                    className="sm:w-50 sm:h-50 object-cover rounded-lg mb-3"
                                />
                                <p className="text-center font-black">{member.name}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <p className="text-sm md:text-lg !text-[#898585] font-semibold text-center px-5 pb-3 md:pb-5">
                            For inquiries about the website, reach out to us:
                        </p>
                        <div className="flex justify-center">
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <div>
                                    <p className="text-sm md:text-lg font-semibold text-gray-800">Haydee Shane
                                        Saguid</p>
                                    <a href="mailto:haydeeshanesaguid@gmail.com"
                                       className="text-sm md:text-lg font-semibold text-gray-800 underline">
                                        haydeeshanesaguid@gmail.com
                                    </a>
                                </div>

                                <div>
                                    <p className="text-sm md:text-lg font-semibold text-gray-800">Roger Jr. Chegyem</p>
                                    <a href="mailto:rhchegyem@gmail.com"
                                       className="text-sm md:text-lg font-semibold text-gray-800 underline">
                                        rhchegyem@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTop/>
            <Footer/>
        </div>
    );
};

export default Home;
