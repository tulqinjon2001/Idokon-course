// idokon_kursi/frontend/src/pages/HomePage.jsx

import React, { useState, useEffect } from "react";
import AboutIdokon from "../sections/Home/AboutIdokon";
import WhyIdokon from "../sections/Home/WhyIdokon";
import UsingIdokon from "../sections/Home/UsingIdokon";
import NewsSection from "../sections/Home/NewsSection";

const subSections = [
  { id: "about", name: "IDOKON haqida", component: AboutIdokon },
  { id: "using", name: "Idokondan foydalanish", component: UsingIdokon },
  { id: "why", name: "Nega IDOKON ni tanlash kerak?", component: WhyIdokon },
  { id: "news", name: "Kerakli yangiliklar", component: NewsSection },
];

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [showSidebar, setShowSidebar] = useState(true);
  const ActiveComponent = subSections.find(
    (s) => s.id === activeSection
  ).component;

  useEffect(() => {
    const handler = () => setShowSidebar(true);
    window.addEventListener("showChildSidebar", handler);
    return () => window.removeEventListener("showChildSidebar", handler);
  }, []);

  return (
    <div className="flex h-screen w-full">
      <div
        className="w-64 p-6 border-r bg-gray-50 flex-shrink-0 overflow-y-auto relative"
        style={{ display: showSidebar ? "block" : "none" }}
      >
        <button
          onClick={() => setShowSidebar(false)}
          aria-label="Close sidebar"
          className="absolute top-3 right-3 z-50 h-8 w-8 rounded-full bg-white border shadow flex items-center justify-center hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="text-gray-700"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>

        <h2 className="text-xl font-bold mb-4">
          IDOKON ga kirish va yangiliklar
        </h2>
        <nav className="space-y-2">
          {subSections.map((section) => (
            <div
              key={section.id}
              className={`p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                activeSection === section.id
                  ? "bg-[#5d79b7] text-white"
                  : "hover:bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.name}
            </div>
          ))}
        </nav>
      </div>

      <div className="flex-1 p-8 overflow-y-auto">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default HomePage;
