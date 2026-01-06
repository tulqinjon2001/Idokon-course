import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BookOpen,
  User,
  Settings,
  CreditCard,
  Smartphone,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

/* -------------------------------- NAVIGATSIYA -------------------------------- */
const navLinks = [
  {
    name: "Kirish",
    icon: User,
    path: "/kirish",
  },
  {
    name: "Admin Panel",
    icon: Settings,
    submenu: [
      { name: "Adminga kirish", path: "/admin/adminga-kirish" },
      { name: "Mahsulot qabul qilish", path: "/admin/mahsulot-qabul" },
      { name: "Buyurtmalar SD", path: "/admin/buyurtmalar-sd" },
      {
        name: "Nomenklatura, Qayta narxlash va Tarix",
        path: "/admin/nomenklatura-qayta-narx-tarix",
      },
      { name: "Inventarizatsiya", path: "/admin/inventarizatsiya" },
      { name: "Guruhlash", path: "/admin/guruhlash" },
      { name: "Mahsulot ko'chir", path: "/admin/mahsulot-kochir" },
      { name: "Tarozi", path: "/admin/tarozi" },
      { name: "Cheklar", path: "/admin/cheklar" },
      { name: "Bildirishnomalar", path: "/admin/bildirishnomalar" },
    ],
  },
  {
    name: "Kassa Panel",
    icon: CreditCard,
    submenu: [
      {
        name: "Kassani yuklash va o'rnatish",
        path: "/kassa/yuklash-ornatish",
      },
      { name: "Kassada sotish", path: "/kassa/sotish" },
      { name: "Qaytarish", path: "/kassa/qaytarish" },
      { name: "Sozlamalar", path: "/kassa/sozlamalar" },
    ],
  },
  {
    name: "Qurilmalar",
    icon: Smartphone,
    submenu: [
      { name: "Barcode printer", path: "/qurilmalar/barcode" },
      { name: "Check printer", path: "/qurilmalar/check" },
      { name: "Tarozi", path: "/qurilmalar/tarozi" },
    ],
  },
  {
    name: "Savollar",
    icon: HelpCircle,
    submenu: [
      { name: "Inventarizatsiya", path: "/savollar/inventarizatsiya" },
      { name: "Check chiqmayapti", path: "/savollar/checkproblem" },
      { name: "To'lov qilish", path: "/savollar/tolov" },
    ],
  },
  {
    name: "Test ishlash",
    icon: CheckCircle2,
    submenu: [{ name: "Test ishlash", path: "/test" }],
  },
];

/* -------------------------------- SIDEBAR -------------------------------- */
export default function Sidebar({
  isOpen,
  toggleSidebar,
  isCollapsed,
  setIsCollapsed,
  isDarkMode,
}) {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800 border-gray-700"
          : "bg-gradient-to-b from-white to-gray-50 border-gray-200"
      } border-r z-30 transition-all duration-300
        md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
        ${
          isCollapsed ? "w-20" : "w-72"
        } shadow-2xl md:shadow-xl overflow-hidden flex flex-col`}
    >
      {/* Header */}
      <div
        className={`${isCollapsed ? "px-3" : "px-6"} py-5 border-b ${
          isDarkMode
            ? "border-gray-700 bg-gradient-to-r from-gray-900 to-gray-800"
            : "border-gray-200 bg-gradient-to-r from-white to-gray-50"
        }`}
      >
        {isCollapsed ? (
          <div className="flex flex-col items-center gap-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
            </div>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`p-2 ${
                isDarkMode
                  ? "hover:bg-gray-800 active:bg-gray-700"
                  : "hover:bg-gray-100 active:bg-gray-200"
              } rounded-lg transition-all duration-200 items-center justify-center flex-shrink-0 group`}
              aria-label="Expand sidebar"
            >
              <ChevronRight
                className={`w-4 h-4 ${
                  isDarkMode
                    ? "text-gray-400 group-hover:text-gray-200"
                    : "text-gray-500 group-hover:text-gray-700"
                } transition-colors`}
              />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <span
                  className={`text-sm font-bold truncate ${
                    isDarkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  Dastur Qo'llanmasi
                </span>
                <span
                  className={`text-xs truncate flex items-center gap-1 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  Mijozlar uchun
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`hidden md:flex p-2 ${
                isDarkMode
                  ? "hover:bg-gray-800 active:bg-gray-700"
                  : "hover:bg-gray-100 active:bg-gray-200"
              } rounded-lg transition-all duration-200 items-center justify-center flex-shrink-0 group`}
              aria-label="Collapse sidebar"
            >
              <ChevronLeft
                className={`w-4 h-4 ${
                  isDarkMode
                    ? "text-gray-400 group-hover:text-gray-200"
                    : "text-gray-500 group-hover:text-gray-700"
                } transition-colors`}
              />
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav
        className={`flex-1 overflow-y-auto ${
          isCollapsed ? "px-2" : "px-4"
        } py-4 ${isDarkMode ? "bg-gray-900/50" : "bg-transparent"}`}
      >
        <div className="space-y-1">
          {navLinks.map((link) => {
            const hasSubmenu = link.submenu?.length > 0;
            const isOpenDropdown = openDropdown === link.name;
            const isActive =
              location.pathname === link.path ||
              link.submenu?.some((s) => location.pathname === s.path);
            const IconComponent = link.icon;

            return (
              <div key={link.name} className="mb-1">
                {link.path ? (
                  <Link
                    to={link.path}
                    onClick={handleNavClick}
                    className={`group relative w-full flex items-center ${
                      isCollapsed ? "justify-center" : ""
                    } gap-3 ${
                      isCollapsed ? "px-2" : "px-3"
                    } py-3 rounded-xl text-sm font-semibold transition-all duration-200
                      ${
                        isActive
                          ? isDarkMode
                            ? "bg-gradient-to-r from-primary-900/40 to-primary-800/30 text-primary-300 shadow-lg shadow-primary-900/20"
                            : "bg-gradient-to-r from-primary-50 to-primary-100/50 text-primary-700 shadow-md shadow-primary-200/50"
                          : isDarkMode
                          ? "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    title={isCollapsed ? link.name : ""}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-600 rounded-r-full"></div>
                    )}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-md"
                          : isDarkMode
                          ? "bg-gray-800 text-gray-400 group-hover:bg-gray-700 group-hover:text-gray-300"
                          : "bg-gray-100 text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-600"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    {!isCollapsed && (
                      <span className="flex-1 text-left">{link.name}</span>
                    )}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        if (hasSubmenu && !isCollapsed) {
                          setOpenDropdown(isOpenDropdown ? null : link.name);
                        }
                      }}
                      className={`group relative w-full flex items-center ${
                        isCollapsed ? "justify-center" : ""
                      } gap-3 ${
                        isCollapsed ? "px-2" : "px-3"
                      } py-3 rounded-xl text-sm font-semibold transition-all duration-200
                        ${
                          isActive
                            ? isDarkMode
                              ? "bg-gradient-to-r from-primary-900/40 to-primary-800/30 text-primary-300 shadow-lg shadow-primary-900/20"
                              : "bg-gradient-to-r from-primary-50 to-primary-100/50 text-primary-700 shadow-md shadow-primary-200/50"
                            : isDarkMode
                            ? "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                      title={isCollapsed ? link.name : ""}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-600 rounded-r-full"></div>
                      )}
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-md"
                            : isDarkMode
                            ? "bg-gray-800 text-gray-400 group-hover:bg-gray-700 group-hover:text-gray-300"
                            : "bg-gray-100 text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-600"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      {!isCollapsed && (
                        <>
                          <span className="flex-1 text-left">{link.name}</span>
                          {hasSubmenu && (
                            <div
                              className={`transition-transform duration-200 ${
                                isOpenDropdown ? "rotate-180" : ""
                              }`}
                            >
                              <ChevronDown
                                className={`w-4 h-4 ${
                                  isDarkMode ? "text-gray-500" : "text-gray-400"
                                }`}
                              />
                            </div>
                          )}
                        </>
                      )}
                    </button>

                    {hasSubmenu && isOpenDropdown && !isCollapsed && (
                      <div className="mt-2 ml-3 space-y-1 pl-6 border-l-2 border-gray-200 dark:border-gray-700 animate-slide-down">
                        {link.submenu.map((sub) => {
                          const isSubActive = location.pathname === sub.path;
                          return (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() =>
                                window.innerWidth < 768 && toggleSidebar()
                              }
                              className={`group flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all duration-200
                                ${
                                  isSubActive
                                    ? isDarkMode
                                      ? "bg-primary-900/30 text-primary-300 font-semibold shadow-md"
                                      : "bg-primary-50 text-primary-700 font-semibold shadow-sm"
                                    : isDarkMode
                                    ? "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                }`}
                            >
                              <div
                                className={`w-2 h-2 rounded-full transition-all ${
                                  isSubActive
                                    ? "bg-primary-500 shadow-sm shadow-primary-500/50"
                                    : isDarkMode
                                    ? "bg-gray-600 group-hover:bg-gray-500"
                                    : "bg-gray-300 group-hover:bg-primary-400"
                                }`}
                              ></div>
                              <span className="flex-1">{sub.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div
          className={`px-6 py-4 border-t ${
            isDarkMode
              ? "border-gray-700 bg-gradient-to-r from-gray-900 to-gray-800"
              : "border-gray-200 bg-gradient-to-r from-white to-gray-50"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <p
              className={`text-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              © 2024 Idokon. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}

/* 🔹 YUMSHOQ OCHILISH ANIMATSIYASI */
const style = document.createElement("style");
style.innerHTML = `
@keyframes slideDown {
  from { 
    opacity: 0; 
    transform: translateY(-8px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
.animate-slide-down {
  animation: slideDown 0.3s ease-out;
}
`;
if (!document.querySelector("style[data-sidebar-animations]")) {
  style.setAttribute("data-sidebar-animations", "true");
  document.head.appendChild(style);
}
