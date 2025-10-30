import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar.jsx";
import AllInOne from "./pages/AllInPages.jsx";
import "./index.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
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
        <main className="flex-1 ml-0 md:ml-64">
          {/* Mobile Header - Updated logo styling */}
          <div className="sticky top-0 z-10 md:hidden bg-white border-b px-4 py-2 flex items-center justify-between">
            <img
              src="https://optim.tildacdn.one/tild6563-3735-4562-a136-303435623931/-/resize/412x/-/format/webp/-removebg-preview.png.webp"
              alt="IDOKON Logo"
              className="h-5 w-auto max-w-[120px] object-contain"
            />
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <i className="fa-solid fa-bars text-xl" />
            </button>
          </div>

          <div className="p-4">
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
