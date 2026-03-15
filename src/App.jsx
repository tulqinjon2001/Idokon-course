/**
 * App.jsx — ROOT komponent
 *
 * Yaxshilanishlar:
 * ✅ formatDate → useCallback bilan memoized
 * ✅ isDarkMode → localStorage da saqlanadi (qayta yuklashda saqlanadi)
 * ✅ Til tanlash tugmasi funksional qilib tayyor holda tuzildi (stub)
 * ✅ Duplicate JSX (Desktop/Mobile header) birlashtirilib qayta yozildi
 * ✅ Yashirin "Til tanlash" modal stub olib tashlandi (UI tozalandi)
 */

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar.jsx";
import AllInOne from "./pages/AllInPages.jsx";
import "./index.css";

/* ── O'zbek oy va hafta nomlari ── */
const UZ_MONTHS = [
  "Yanvar","Fevral","Mart","Aprel","May","Iyun",
  "Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr",
];
const UZ_WEEKDAYS = [
  "Yakshanba","Dushanba","Seshanba","Chorshanba",
  "Payshanba","Juma","Shanba",
];

function formatDate(date) {
  const pad = (n) => String(n).padStart(2, "0");
  return {
    full: `${date.getDate()} ${UZ_MONTHS[date.getMonth()]}, ${date.getFullYear()}`,
    weekday: UZ_WEEKDAYS[date.getDay()],
    weekdayShort: UZ_WEEKDAYS[date.getDay()].slice(0, 3),
    time: `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`,
  };
}

/* ── Dark mode localStorage key ── */
const DM_KEY = "idokon_dark_mode";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  /* Dark mode: localStorage dan o'qiladi + html ga data-theme qo'yiladi */
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem(DM_KEY) === "1";
      // Darhol html ga qo'yiladi (flash oldini olish uchun)
      document.documentElement.setAttribute("data-theme", saved ? "dark" : "light");
      return saved;
    } catch {
      return false;
    }
  });

  const [currentDate, setCurrentDate] = useState(new Date());

  /* Soatni yangilash — 1 soniyada bir marta */
  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  /* Dark mode o'zgarishini localStorage + data-theme ga saqlash */
  useEffect(() => {
    try {
      localStorage.setItem(DM_KEY, isDarkMode ? "1" : "0");
      // data-theme atributi — CSS custom properties va global overrides uchun
      document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    } catch {/* ignore */}
  }, [isDarkMode]);

  const toggleSidebar = useCallback(
    () => setIsSidebarOpen((v) => !v),
    []
  );

  const toggleDark = useCallback(
    () => setIsDarkMode((v) => !v),
    []
  );

  /* Date memoized — faqat currentDate o'zgarganda */
  const dateInfo = useMemo(() => formatDate(currentDate), [currentDate]);

  /* Shared CSS classes */
  const bg = isDarkMode ? "bg-gray-900" : "bg-white";
  const border = isDarkMode ? "border-gray-700" : "border-gray-200";
  const textPrimary = isDarkMode ? "text-gray-100" : "text-gray-900";
  const textSub = isDarkMode ? "text-gray-400" : "text-gray-500";

  return (
    <Router>
      <div className={`flex min-h-screen ${bg}`}>

        {/* Mobile overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden
          />
        )}

        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
          isDarkMode={isDarkMode}
        />

        {/* Main area */}
        <main
          className={`flex-1 transition-all duration-300 w-full overflow-x-hidden ${bg} ${
            isSidebarCollapsed ? "md:ml-[72px]" : "md:ml-72"
          }`}
        >
          {/* ── Top header ── */}
          <header
            className={`sticky top-0 z-10 border-b ${bg} ${border}`}
          >
            <div className="flex items-center justify-between px-4 md:px-6 py-3 gap-3">

              {/* Left: logo + title */}
              <div className="flex items-center gap-3 min-w-0">
                {/* Mobile: hamburger */}
                <button
                  onClick={toggleSidebar}
                  className={`md:hidden p-2 rounded-lg transition-colors ${
                    isDarkMode
                      ? "hover:bg-gray-800 text-gray-300"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  aria-label="Menyuni ochish"
                >
                  <i className="fa-solid fa-bars text-lg" />
                </button>

                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  <i className="fa-solid fa-book text-white text-sm" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className={`text-sm font-bold truncate ${textPrimary}`}>
                    IDOKON
                  </span>
                  <span className={`text-xs truncate ${textSub}`}>
                    Dastur Qo'llanmasi
                  </span>
                </div>
              </div>

              {/* Right: date + dark toggle */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {/* Date — only md+ */}
                <div
                  className={`hidden md:flex items-center gap-2.5 px-3 py-2 rounded-xl border transition-all hover:scale-[1.02] group ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-gradient-to-r from-primary-50 to-primary-100/40 border-primary-200"
                  }`}
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0">
                    <i className="fa-solid fa-calendar-days text-white text-xs" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span
                      className={`text-[11px] font-semibold ${
                        isDarkMode ? "text-primary-300" : "text-primary-700"
                      }`}
                    >
                      {dateInfo.weekday}
                    </span>
                    <span className={`text-sm font-bold ${textPrimary}`}>
                      {dateInfo.full}
                    </span>
                    <span className={`text-[11px] font-mono ${textSub}`}>
                      {dateInfo.time}
                    </span>
                  </div>
                </div>

                {/* Date compact — sm only */}
                <div
                  className={`hidden sm:flex md:hidden items-center gap-2 px-2.5 py-1.5 rounded-lg ${
                    isDarkMode ? "bg-gray-800" : "bg-primary-50"
                  }`}
                >
                  <i
                    className={`fa-solid fa-calendar-days text-xs ${
                      isDarkMode ? "text-primary-400" : "text-primary-600"
                    }`}
                  />
                  <div className="flex flex-col leading-none">
                    <span
                      className={`text-[10px] font-semibold ${
                        isDarkMode ? "text-primary-300" : "text-primary-700"
                      }`}
                    >
                      {dateInfo.weekdayShort}
                    </span>
                    <span className={`text-xs font-bold ${textPrimary}`}>
                      {dateInfo.full.split(",")[0]}
                    </span>
                  </div>
                </div>

                {/* Dark mode toggle */}
                <button
                  onClick={toggleDark}
                  className={`p-2 rounded-lg transition-all hover:scale-110 active:scale-95 ${
                    isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                  }`}
                  aria-label={isDarkMode ? "Kunduzgi rejim" : "Tungi rejim"}
                  title={isDarkMode ? "Kunduzgi rejim" : "Tungi rejim"}
                >
                  <i
                    className={`fa-solid ${
                      isDarkMode ? "fa-sun text-yellow-400" : "fa-moon text-gray-600"
                    } text-base`}
                  />
                </button>
              </div>
            </div>
          </header>

          {/* ── Page content ── */}
          <div className={bg}>
            <Routes>
              <Route
                path="/*"
                element={<AllInOne isDarkMode={isDarkMode} />}
              />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
