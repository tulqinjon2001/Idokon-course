// idokon_kursi/frontend/src/pages/KassaPanelPage.jsx

import React, { useState } from "react";

// import your Qurilmalar sections/components here
// const subSections = [ ... ];
import barcodeprinter from "../sections/qurilmalar/barcodeprinter";
import checkprinter from "../sections/qurilmalar/checkprinter";

const subSections = [
  { id: "barcodeprinter", name: "Barcode Printer", component: barcodeprinter },
  { id: "checkprinter", name: "Check Printer", component: checkprinter },
];

const QurilmalarPage = () => {
  const [activeSection, setActiveSection] = useState(subSections[0]?.id || "");
  const [showNav, setShowNav] = useState(true);
  const ActiveComponent = subSections.find(
    (s) => s.id === activeSection
  )?.component;

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
          <span className="text-xs text-gray-500">Qurilmalar bo'limlari</span>
        </div>
        <span className="text-md font-bold text-[#000]">
          QURILMALAR:{" "}
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
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};

export default QurilmalarPage;
