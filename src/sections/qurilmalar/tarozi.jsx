import React, { useState } from "react";

/**
 * Tarozilarning driverini o'rnatish bo'yicha qo'llanma
 */
export default function Tarozi() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-white rounded-xl shadow-lg max-w-4xl animate-fadeIn">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4 animate-slideDown">
        Tarozilarni Ulash va Sozlash
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6 animate-slideUp">
        Tarozilarni kompyuteringizga ulash uchun quyidagi driver va
        qo'llanmalarni yuklab oling.
      </p>

      {/* 1. Shtrix M Tarozi */}
      <div
        className={`bg-white dark:bg-white p-6 rounded-lg shadow-md mb-8 transition-all duration-300 transform ${
          hoveredCard === "shtrix"
            ? "shadow-xl scale-[1.02] border-2 border-primary-300 dark:border-primary-600"
            : "shadow-md hover:shadow-lg border-2 border-transparent"
        }`}
        onMouseEnter={() => setHoveredCard("shtrix")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-md transform transition-transform duration-300 hover:rotate-12">
            <i className="fa-solid fa-balance-scale text-white text-lg"></i>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            1. Shtrix M Tarozi
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
          Shtrix M tarozining toʻgʻri ishlashi uchun drayverni oʻrnatish shart.
          Shuningdek, tarozini sozlash bo'yicha PDF qo'llanmani ham yuklab
          olishingiz mumkin:
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Tarozi/Shtrix.M.scale.driver.2.exe"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setClickedButton("shtrix-driver")}
            className={`group relative inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 overflow-hidden ${
              clickedButton === "shtrix-driver"
                ? "ring-2 ring-primary-400 ring-offset-2"
                : ""
            }`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <i className="fa-solid fa-download relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px]"></i>
            <span className="relative z-10">
              Shtrix M Drayverni yuklab olish
            </span>
          </a>
          <a
            href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Qollanmalar/Shtrix.M.tarozini.ulash.qo.llanmasi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setClickedButton("shtrix-pdf")}
            className={`group relative inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 overflow-hidden ${
              clickedButton === "shtrix-pdf"
                ? "ring-2 ring-primary-400 ring-offset-2"
                : ""
            }`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <i className="fa-solid fa-file-pdf relative z-10 transition-transform duration-300 group-hover:scale-110"></i>
            <span className="relative z-10">
              Shtrix M Qo'llanmani yuklab olish (PDF)
            </span>
          </a>
        </div>
      </div>

      {/* 2. Kuanyi Tarozi */}
      <div
        className={`bg-white dark:bg-white p-6 rounded-lg shadow-md mb-8 transition-all duration-300 transform ${
          hoveredCard === "kuanyi"
            ? "shadow-xl scale-[1.02] border-2 border-primary-300 dark:border-primary-600"
            : "shadow-md hover:shadow-lg border-2 border-transparent"
        }`}
        onMouseEnter={() => setHoveredCard("kuanyi")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-md transform transition-transform duration-300 hover:rotate-12">
            <i className="fa-solid fa-balance-scale text-white text-lg"></i>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            2. Kuanyi Tarozi
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
          Kuanyi tarozining toʻgʻri ishlashi uchun drayverni oʻrnatish shart.
          Shuningdek, tarozini sozlash bo'yicha PDF qo'llanmani ham yuklab
          olishingiz mumkin:
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Tarozi/YesPOS.Barcode.08.03.2025.2.zip"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setClickedButton("kuanyi-driver")}
            className={`group relative inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 overflow-hidden ${
              clickedButton === "kuanyi-driver"
                ? "ring-2 ring-primary-400 ring-offset-2"
                : ""
            }`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <i className="fa-solid fa-download relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px]"></i>
            <span className="relative z-10">Kuanyi Drayverni yuklab olish</span>
          </a>
          <a
            href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Qollanmalar/Kuanyi.tarozini.ulash.qo.llanmasi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setClickedButton("kuanyi-pdf")}
            className={`group relative inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 overflow-hidden ${
              clickedButton === "kuanyi-pdf"
                ? "ring-2 ring-primary-400 ring-offset-2"
                : ""
            }`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <i className="fa-solid fa-file-pdf relative z-10 transition-transform duration-300 group-hover:scale-110"></i>
            <span className="relative z-10">
              Kuanyi Qo'llanmani yuklab olish (PDF)
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
