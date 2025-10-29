import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

export const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* 🔹 Sidebar (mobil + desktop uchun bir xil komponent) */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* 🔹 Asosiy kontent */}
      <main className="flex-1 lg:pl-64 p-4 transition-all duration-300">
        {/* 🔹 Mobil menyu tugmasi (faqat kichik ekranlarda ko‘rinadi) */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 bg-white rounded-md p-2 shadow-md"
        >
          <i className="fa-solid fa-bars text-gray-700 text-lg"></i>
        </button>

        {children}
      </main>
    </div>
  );
};
