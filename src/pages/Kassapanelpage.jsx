// idokon_kursi/frontend/src/pages/Kassapanelpage.jsx

import React, { useState, useEffect, useMemo } from "react";
import KassagaKirish from "../sections/kassaPanel/KassagaKirish.jsx";

const subSections = [
  { id: "entercassa", name: "Kassaga Kirish", component: KassagaKirish },
];

const KassaPanelPage = () => {
  const initialId = useMemo(() => {
    const fromHash = window.location.hash.replace("#", "");
    const fromLS = localStorage.getItem("kassa_active_section");
    const candidates = new Set(subSections.map((s) => s.id));
    if (candidates.has(fromHash)) return fromHash;
    if (candidates.has(fromLS)) return fromLS;
    return subSections[0]?.id || "";
  }, []);

  const [activeSection, setActiveSection] = useState(initialId);
  const [showNav, setShowNav] = useState(true);

  const ActiveComponent =
    subSections.find((s) => s.id === activeSection)?.component ||
    subSections[0]?.component ||
    (() => <div>Bo‘lim topilmadi</div>);

  // Active section o'zgarsa — URL hash va localStorage'ga yozamiz
  useEffect(() => {
    if (!activeSection) return;
    if (window.location.hash !== `#${activeSection}`) {
      history.replaceState(null, "", `#${activeSection}`);
    }
    localStorage.setItem("kassa_active_section", activeSection);
  }, [activeSection]);

  // URL hash o'zgarsa (masalan, tashqaridan navigatsiya)
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.replace("#", "");
      if (subSections.some((s) => s.id === id)) setActiveSection(id);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Toggle button for nav */}
      <div className="p-2 border-b bg-gray-50 flex items-center justify-between">
        <div>
          <button
            className="px-3 py-1 rounded text-xs bg-[#5d79b7] text-white mr-2"
            onClick={() => setShowNav((v) => !v)}
          >
            {showNav ? "Bo'limlarni yashirish" : "Bo'limlarni ko'rsatish"}
          </button>
          <span className="text-xs text-gray-500">Kassa panel bo'limlari</span>
        </div>
        <span className="text-md font-bold text-[#000]">
          KASSA: {subSections.find(s => s.id === activeSection)?.name}
        </span>
      </div>
      {/* Top navigation bar */}
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
      {/* Main content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default KassaPanelPage;
               