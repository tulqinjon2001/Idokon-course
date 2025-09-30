import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AdminPanelPage from "./pages/AdminPanelPage.jsx";
import KassaPanelPage from "./pages/Kassapanelpage.jsx"; // YANGI
import QurilmalarPage from "./pages/QurilmalarPage.jsx"; // YANGI
import SavollarPage from "./pages/SavollarPage.jsx"; // YANGI
import CombinedPages from "./pages/CombinedPages";
import "./index.css";
import QuizCom from "./sections/Quiz/QuizCom.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex bg-gray-100 min-h-screen">
        <div
          className={`transition-all duration-300 ${
            isSidebarOpen ? "w-64" : "w-20"
          } flex-shrink-0`}
        >
          <div className="fixed top-0 left-0 h-full">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>
        </div>

        <div
          className={`flex-1 overflow-y-auto transition-all duration-300 ${
            isSidebarOpen ? "ml-0" : "ml-0"
          }`}
        >
          <Routes>
            <Route
              path="/"
              element={<HomePage toggleSidebar={toggleSidebar} />}
            />
            <Route path="/admin" element={<CombinedPages />} />
            <Route path="/kassa" element={<KassaPanelPage />} /> // YANGI ROUTE
            <Route path="/qurilmalar" element={<CombinedPages />} /> // YANGI
            ROUTE
            <Route path="/savollar" element={<CombinedPages />} /> // YANGI ROUTE
            <Route path="/test" element={<QuizCom />} /> // YANGI ROUTE
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
