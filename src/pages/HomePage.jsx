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
  const [showNav, setShowNav] = useState(true);
  const ActiveComponent = subSections.find(
    (s) => s.id === activeSection
  ).component;

  useEffect(() => {
    const handler = () => setShowNav(true);
    window.addEventListener("showChildSidebar", handler);
    return () => window.removeEventListener("showChildSidebar", handler);
  }, []);

  return (
    <div className="flex flex-col h-screen w-full">
      <div className="p-2 border-b bg-gray-50 flex items-center justify-between">
        <div>
          <button
            className="px-3 py-1 rounded text-xs bg-[#5d79b7] text-white mr-2"
            onClick={() => setShowNav((v) => !v)}
          >
            {showNav ? "Bo'limlarni yashirish" : "Bo'limlarni ko'rsatish"}
          </button>
          <span className="text-xs text-gray-500">IDOKON bo'limlari</span>
        </div>
        <span className="text-md font-bold text-[#000]">
          KIRISH:{" "}
          {subSections.find((s) => s.id === activeSection)?.name}
        </span>
      </div>
      {showNav && (
        <nav className="flex flex-row flex-wrap gap-2 p-2 bg-gray-50 border-b">
          {subSections.map(({ id, name }) => (
            <button
              key={id}
              className={`px-3 py-1 rounded-lg font-semibold text-xs transition-colors duration-200 ${
                activeSection === id
                  ? "bg-[#5d79b7] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveSection(id)}
            >
              {name}
            </button>
          ))}
        </nav>
      )}
      <div className="flex-1 p-8 overflow-y-auto">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default HomePage;
    