import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar.jsx";
import AllInOne from "./pages/AllInPages.jsx";
import "./index.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Router>
      <div className="flex bg-gray-100 min-h-screen dark:bg-gray-900 overflow-x-hidden">
        {/* Sidebar - Hidden on mobile, visible on lg+ */}
        <div className="hidden lg:block fixed left-0 top-0 h-full z-40">
          <Sidebar isOpen={true} toggleSidebar={toggleSidebar} />
        </div>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
            onClick={closeSidebar}
            aria-hidden="true"
          />
        )}

        {/* Mobile Sidebar */}
        <div className="lg:hidden fixed left-0 top-0 h-full z-40">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full lg:ml-64 overflow-y-auto transition-all duration-300">
          {/* Mobile Header */}
          <div className="lg:hidden sticky top-0 z-20 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <img
              src="https://optim.tildacdn.one/tild6563-3735-4562-a136-303435623931/-/resize/412x/-/format/webp/-removebg-preview.png.webp"
              alt="IDOKON Logo"
              className="h-4 object-contain"
            />
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          <Routes>
            {/* ⬇️ Har qanday ichki yo'lni AllInOne boshqaradi */}
            <Route path="/*" element={<AllInOne toggleSidebar={closeSidebar} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
