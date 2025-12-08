import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar.jsx";
import AllInOne from "./pages/AllInPages.jsx";
import "./index.css";
import idokon_logo from "../public/assets/idokon_logo.png";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      <div className="flex min-h-screen bg-white">
        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Single Sidebar Component */}
        <Sidebar 
          isOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />

        {/* Main Content */}
        <main className={`ml-0 ${isSidebarCollapsed ? "md:ml-20" : "md:ml-72"} flex-1 transition-all duration-300 w-full overflow-x-hidden`}>
          {/* Mobile Header */}
          <div className="sticky top-0 z-10 md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-book text-white text-sm"></i>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-900 truncate">Dastur Qo'llanmasi</span>
                <span className="text-xs text-gray-500 truncate">Mijozlar uchun</span>
              </div>
            </div>
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors flex items-center justify-center flex-shrink-0"
              aria-label="Open menu"
            >
              <i className="fa-solid fa-bars text-xl text-gray-700" />
            </button>
          </div>

          <div className="p-4 sm:p-6 md:p-8 w-full max-w-6xl mx-auto">
            <Routes>
              <Route path="/*" element={<AllInOne />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
