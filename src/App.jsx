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
          <div className="sticky top-0 z-10 md:hidden bg-white border-b px-4 py-3 flex items-center justify-between">
            <img
              src={idokon_logo}
              alt="IDOKON Logo"
              className="object-contain h-10"
            />
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <i className="fa-solid fa-bars text-xl" />
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
