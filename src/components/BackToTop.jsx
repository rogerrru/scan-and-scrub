import { useEffect, useState } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleScroll = () => {
        setIsVisible(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        setIsClicked(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => setIsClicked(false), 300);
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 bg-[#2E6AD9] text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 
      ${isVisible ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-75"} 
      ${isClicked ? "scale-90" : "hover:scale-110"} cursor-pointer`}
            aria-label="Back to Top"
            style={{ position: "fixed" }}
        >
            ↑
        </button>
    );
};

export default BackToTop;
