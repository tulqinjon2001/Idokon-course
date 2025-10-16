import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar.jsx";
import AllInOne from "./pages/AllInPages.jsx";
import "./index.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      <div className="flex bg-gray-100 min-h-screen dark:bg-gray-900">
        <div
          className={`transition-all duration-300 ${
            isSidebarOpen ? "w-64" : "w-20"
          } flex-shrink-0`}
        >
          <div className="fixed top-0 left-0 h-full">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto transition-all duration-300">
          <Routes>
            {/* ⬇️ Har qanday ichki yo‘lni AllInOne boshqaradi */}
            <Route path="/*" element={<AllInOne toggleSidebar={toggleSidebar} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
