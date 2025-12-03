import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar.jsx";
import AllInOne from "./pages/AllInPages.jsx";
import "./index.css";
import idokon_logo from "../public/assets/idokon_logo.png";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className="ml-0 md:ml-72 flex-1">
          {/* Mobile Header - Updated logo styling */}
          <div className="sticky top-0 z-10 md:hidden bg-white border-b border-gray-200 px-3 py-2 flex items-center justify-between">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-book text-white text-sm"></i>
                </div>
                <span className="text-sm font-semibold text-gray-800">Idokon Docs</span>
              </div>
            </div>
            {/* <img
              src={idokon_logo}
              alt="IDOKON Logo"
              className="object-contain h-7"
            /> */}
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-200 active:bg-gray-300 rounded-lg transition-colors flex items-center justify-center"
              aria-label="Open menu"
            >
              <i className="fa-solid fa-bars text-2xl text-gray-800" />
            </button>
          </div>

          <div className="p-6 md:p-8 max-w-6xl">
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
