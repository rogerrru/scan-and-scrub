import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col">
            <Header />

            {/* Main Content */}
            <div className="container mx-auto px-5 py-10 flex-1">
                <h1 className="text-5xl md:text-6xl text-[#2E6AD9] font-bold text-center mb-6 mt-10">
                    About Us
                </h1>
                <div className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
                    <p>
                        Our mission is to revolutionize operating room efficiency by
                        leveraging QR code technology. With our system, nurses can quickly
                        access critical information about surgical instruments, ensuring
                        optimal performance and patient safety.
                    </p>
                    <p className="mt-6">
                        Our team is committed to innovation, precision, and making a real
                        impact in healthcare.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
