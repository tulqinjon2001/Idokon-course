// idokon_kursi/frontend/src/App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import ModulePage from "./pages/ModulePage.jsx";
import SectionWrapper from "./pages/SectionWrapper.jsx";
import "./index.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex bg-gray-100 min-h-screen">
        {/* Sidebar bu yerda endi qotib turadi */}
        <div
          className={`transition-all duration-300 ${
            isSidebarOpen ? "w-64" : "w-20"
          } fixed top-0 left-0 h-full overflow-y-auto z-50`}
        >
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

        <div
          className={`flex-1 p-8 transition-all duration-300 ${
            isSidebarOpen ? "ml-56" : "ml-20"
          }`}
        >
          <Routes>
            <Route
              path="/"
              element={<HomePage toggleSidebar={toggleSidebar} />}
            />
            <Route path="/courses/:courseId" element={<CoursePage />} />
            <Route path="/modules/:moduleId" element={<ModulePage />} />
            <Route path="/sections/:sectionId" element={<SectionWrapper />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
