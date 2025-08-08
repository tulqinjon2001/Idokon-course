// idokon_kursi/frontend/src/pages/HomePage.jsx

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AboutIdokon from "../sections/Home/AboutIdokon";
import WhyIdokon from "../sections/Home/WhyIdokon";
import UsingIdokon from "../sections/Home/UsingIdokon";
import NewsSection from "../sections/Home/NewsSection";

const subSections = [
  { id: "about", name: "IDOKON haqida", component: AboutIdokon },
  { id: "why", name: "Nega IDOKON ni tanlash kerak?", component: WhyIdokon },
  { id: "using", name: "Idokondan foydalanish", component: UsingIdokon },
  { id: "news", name: "Kerakli yangiliklar", component: NewsSection },
];

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("about");
  const ActiveComponent = subSections.find(
    (s) => s.id === activeSection
  ).component;

  return (
    <div className="flex h-screen w-full">
      {" "}
      {/* Asosiy konteynerni to'g'irlash */}
      {/* Bu qism endi qotib turadi */}
      <div className="w-64 p-6 border-r bg-gray-50 flex-shrink-0 overflow-y-auto">
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
      {/* Asosiy kontent maydoni endi scroll qilinadi */}
      <div className="flex-1 p-8 overflow-y-auto">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default HomePage;
