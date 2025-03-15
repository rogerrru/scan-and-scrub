import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import teamData from "../data/team.json";

const teamImages = import.meta.glob("../assets/homepage/team/*.webp", { eager: true });

const getTeamImagePath = (imagePath) => {
    const fileName = imagePath.replace("/assets/homepage/team/", ""); // Extract filename
    return teamImages[`../assets/homepage/team/${fileName}`]?.default ||
        teamImages["../assets/homepage/team/team-placeholder.webp"]?.default;
};

const About = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col">
            <Header/>

            {/* Main Content */}
            <div className="w-full bg-[#2D466A]">
                <div className="container mx-auto px-5 2xl:px-100 sm:px-4 flex-1 bg-[#2D466A]">
                    <h1 className="text-lg md:text-3xl !text-[#FFFFFF] font-black text-center mt-10 mb-5 tracking-widest">
                        GET TO KNOW US
                    </h1>

                    {/* Who We Are */}
                    <div className="max-w-4xl mx-auto text-center px-5  text-gray-700 mb-10">
                        <h1 className="text-4xl md:text-6xl text-[#FC8EAC] font-black text-center mb-6">
                            Who We Are
                        </h1>
                        <div className="space-y-6">
                            <p className="text-sm md:text-xl leading-relaxed md:leading-10 !text-[#FFFFFF] text-justify">
                                We are a dedicated team of nursing students driven by a shared passion for enhancing
                                operating
                                room efficiency and improving patient safety. With firsthand experience in clinical
                                settings, we
                                understand the challenges surgical teams face—especially the stress, anxiety, and
                                inefficiencies
                                that arise when healthcare professionals are unfamiliar with surgical instruments,
                                procedures,
                                and protocols.
                            </p>
                            <p className="text-sm md:text-xl leading-relaxed md:leading-10 !text-[#FFFFFF] text-justify">
                                Recognizing the critical role of preparedness in the operating room, we are committed to
                                developing innovative solutions that support both new and experienced OR staff. We
                                believe
                                that
                                by bridging the knowledge gap through accessible, real-time resources, we can empower
                                student
                                nurses to perform with confidence, reduce surgical delays, and ultimately improve
                                patient
                                outcomes.
                            </p>
                            <p className="text-sm md:text-xl leading-relaxed md:leading-10 !text-[#FFFFFF] text-justify">
                                Our team envisions a future where every student nurse, regardless of experience level,
                                has
                                immediate
                                access to essential surgical knowledge at their fingertips. By integrating technology
                                with
                                comprehensive training tools, we aim to create a seamless learning experience that
                                enhances
                                both
                                individual competence and overall team efficiency. Through our efforts, we strive to
                                cultivate a
                                more prepared, confident, and efficient surgical environment—one that prioritizes both
                                healthcare professionals' well-being and optimal patient care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#C0D2E5] px-5 sm:px-4 py-16">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
                    {/* Our Mission */}
                    <div>
                        <h3 className="text-4xl md:text-6xl font-black  text-[#FC8EAC] mb-2">Our mission</h3>
                        <p className="text-gray-700 text-sm md:text-xl">To enhance operating room efficiency by
                            providing student nurses with instant access to essential surgical knowledge, improving
                            patient safety, reducing errors, and optimizing clinical outcomes.</p>
                    </div>

                    {/* Our Vision */}
                    <div>
                        <h3 className="text-4xl md:text-6xl font-black  text-[#2D466A] mb-2">Our vision</h3>
                        <p className="text-gray-700 text-sm md:text-xl">To cultivate a future where student nurses are
                            empowered with comprehensive tools, resources, and expertise, ensuring their capacity to
                            enhance operating room efficiency, elevate patient care, and drive sustainable improvements
                            in surgical practice.</p>
                    </div>

                    {/* Our Promise */}
                    <div>
                        <h3 className="text-4xl md:text-6xl font-black  text-[#FC8EAC] mb-2">Our promise</h3>
                        <p className="text-gray-700 text-sm md:text-xl">We are dedicated to delivering innovative,
                            reliable, and user-friendly solutions that support student nurses in enhancing their
                            clinical competence, fostering seamless teamwork, and ensuring the highest standards
                            of patient safety.</p>
                    </div>

                    {/* Our Task */}
                    <div>
                        <h3 className="text-4xl md:text-6xl font-black  text-[#2D466A] mb-2">Our task</h3>
                        <p className="text-gray-700 text-sm md:text-xl">We are committed to the continuous improvement
                            of our platform, ensuring its efficient integration into operating room workflows and its
                            alignment with the highest standards of clinical practice and patient safety.</p>
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
                                    index < 5 ? "bg-[#FFC1CC]" : "bg-[#C0D2E5]"
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

export default About;