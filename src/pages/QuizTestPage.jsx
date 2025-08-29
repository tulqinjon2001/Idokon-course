// idokon_kursi/frontend/src/pages/Kassapanelpage.jsx

import React, { useState, useEffect, useMemo } from "react";
import QuizCom from "../sections/Quiz/QuizCom";

const subSections = [{ id: "quiz", name: "Quiz", component: QuizCom }];

const QuizTestPage = () => {
  // Boshlang'ich bo'limni URL hash yoki localStorage'dan olamiz, bo'lmasa birinchi bo'lim
  const initialId = useMemo(() => {
    const fromHash = window.location.hash.replace("#", "");
    const fromLS = localStorage.getItem("kassa_active_section");
    const candidates = new Set(subSections.map((s) => s.id));
    if (candidates.has(fromHash)) return fromHash;
    if (candidates.has(fromLS)) return fromLS;
    return subSections[0]?.id || "";
  }, []);

  const [activeSection, setActiveSection] = useState(initialId);
  const [showSidebar, setShowSidebar] = useState(true);

  const ActiveComponent =
    subSections.find((s) => s.id === activeSection)?.component ||
    subSections[0]?.component ||
    (() => <div>Bo‘lim topilmadi</div>);

  // Sidebarni tashqi event bilan ko'rsatish
  useEffect(() => {
    const handler = () => setShowSidebar(true);
    window.addEventListener("showChildSidebar", handler);
    return () => window.removeEventListener("showChildSidebar", handler);
  }, []);

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
    <div className="flex h-screen w-full">
      {/* SIDEBAR */}
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

        <h2 className="text-xl font-bold mb-4">Quiz Page</h2>

        <nav className="space-y-2">
          {subSections.map((section) => {
            const active = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                  active
                    ? "bg-[#5d79b7] text-white"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
              >
                {section.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-8 overflow-y-auto relative">
        {!showSidebar && (
          <button
            onClick={() => setShowSidebar(true)}
            className="mb-4 inline-flex items-center gap-2 px-3 py-2 rounded-md border bg-white shadow hover:bg-gray-50"
            aria-label="Open sidebar"
          >
            {/* hamburger icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Menyu
          </button>
        )}
        <ActiveComponent />
      </div>
    </div>
  );
};

export default QuizTestPage;
