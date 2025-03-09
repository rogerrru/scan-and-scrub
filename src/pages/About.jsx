import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import teamData from "../data/team.json";

const teamImages = import.meta.glob("../assets/homepage/team/*.png", { eager: true });

const getTeamImagePath = (imagePath) => {
    const fileName = imagePath.replace("/assets/homepage/team/", ""); // Extract filename
    return teamImages[`../assets/homepage/team/${fileName}`]?.default ||
        teamImages["../assets/homepage/team/team-placeholder.png"]?.default;
};

const About = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col">
            <Header />

            {/* Main Content */}
            <div className="container mx-auto px-5 py-10 flex-1">
                <h1 className="text-5xl md:text-6xl text-[#2E6AD9] font-bold text-center mb-6 mt-10">
                    About Us
                </h1>

                {/* Who We Are */}
                <div className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed mb-10">
                    <h2 className="text-3xl font-bold text-[#2E6AD9] mb-4">Who We Are</h2>
                    <p>
                        We are a dedicated team of healthcare professionals and technologists committed to enhancing operating room efficiency. By integrating QR code technology into surgical workflows, we empower nurses and surgical teams with instant access to critical instrument information, ensuring seamless procedures and improved patient outcomes.
                    </p>
                </div>

                {/* Our Mission */}
                <div className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed mb-10">
                    <h2 className="text-3xl font-bold text-[#2E6AD9] mb-4">Our Mission</h2>
                    <p>
                        We aim to revolutionize operating room efficiency by leveraging QR code technology, providing instant access to vital surgical instrument information to enhance patient care and optimize workflow.
                    </p>
                </div>

                {/* Our Vision */}
                <div className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed mb-10">
                    <h2 className="text-3xl font-bold text-[#2E6AD9] mb-4">Our Vision</h2>
                    <p>
                        Our vision is to create a future where every healthcare professional feels confident and well-equipped in the operating room, reducing surgical errors and improving overall efficiency.
                    </p>
                </div>

                {/* Our Promise */}
                <div className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed mb-10">
                    <h2 className="text-3xl font-bold text-[#2E6AD9] mb-4">Our Promise</h2>
                    <p>
                        We are dedicated to providing innovative, accessible, and reliable solutions that empower nurses and surgical teams to perform at their best in every procedure.
                    </p>
                </div>

                {/* Our Commitment */}
                <div className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed mb-10">
                    <h2 className="text-3xl font-bold text-[#2E6AD9] mb-4">Our Commitment</h2>
                    <p>
                        We continuously strive to improve and expand our platform to ensure seamless integration with existing OR workflows, making surgeries safer and more efficient for all involved.
                    </p>
                </div>
            </div>

            {/* Our Team Section */}
            <div className="container mx-auto py-20" style={{ backgroundColor: "#F4F5F9" }}>
                <h1 className="text-6xl font-bold text-[#2E6AD9] leading-tight my-3">Our Team</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 px-5">
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

export default About;