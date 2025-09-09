// idokon_kursi/frontend/src/pages/KassaPanelPage.jsx

import React, { useState } from "react";

// import your Savollar sections/components here
// const subSections = [ ... ];
import inventarizatsiya from "../sections/savollar/inventarizatsiya";
import checkchiqmayabdi from "../sections/savollar/checkchiqmayabdi";
import TolovQilish from "../sections/savollar/tolovqilish";

const subSections = [
  { id: "inventarizatsiya", name: "Inventarizatsiya", component: inventarizatsiya },
  { id: "checkproblem", name: "Check Chiqmasligi", component: checkchiqmayabdi },
  { id: "payment-idokon", name: "To'lov qanday qilinadi", component: TolovQilish },
];

const SavollarPage = () => {
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
          <span className="text-xs text-gray-500">Savollar bo'limlari</span>
        </div>
        <span className="text-md font-bold text-[#000]">
          SAVOLLAR:{" "}
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

export default SavollarPage;
