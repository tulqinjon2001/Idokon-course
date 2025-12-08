import { Component } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import QuizCom from "../../sections/Quiz/QuizCom.jsx";
import idokon_logo from "../../../public/assets/idokon_logo.png";

/* -------------------------------- NAVIGATSIYA -------------------------------- */
const navLinks = [
  {
    name: "Kirish",
    icon: "user",
    submenu: [
      { name: "IDOKON haqida", path: "/home/about" },
      { name: "Idokondan foydalanish", path: "/home/using" },
      { name: "Kerakli yangiliklar", path: "/home/news" },
    ],
  },
  {
    name: "Admin Panel",
    icon: "cog",
    submenu: [
      { name: "Adminga kirish", path: "/admin/adminga-kirish" },
      { name: "Mahsulot qabul qilish", path: "/admin/mahsulot-qabul" },
      { name: "Buyurtmalar SD", path: "/admin/buyurtmalar-sd" },
      { name: "Nomenklatura", path: "/admin/nomenklatura" },
      { name: "Qayta narx tarix", path: "/admin/qayta-narx-tarix" },
      {
        name: "Taminotchiga qaytarish",
        path: "/admin/taminotchiga-qaytarish",
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
    icon: "creditcard",
    submenu: [
      { name: "Kassani yuklash va o'rnatish", path: "/kassa/yuklash-ornatish" },
      { name: "Kassada sotish", path: "/kassa/sotish" },
      { name: "Qaytarish", path: "/kassa/qaytarish" },
      { name: "Sozlamalar", path: "/kassa/sozlamalar" },
    ],
  },
  {
    name: "Qurilmalar",
    icon: "device",
    submenu: [
      { name: "Barcode printer", path: "/qurilmalar/barcode" },
      { name: "Check printer", path: "/qurilmalar/check" },
    ],
  },
  {
    name: "Savollar",
    icon: "question",
    submenu: [
      { name: "Inventarizatsiya", path: "/savollar/inventarizatsiya" },
      { name: "Check chiqmayapti", path: "/savollar/checkproblem" },
      { name: "To'lov qilish", path: "/savollar/tolov" },
    ],
  },
  {
    name: "Test ishlash",
    icon: "checkcircle",
    submenu: [{ name: "Test ishlash", path: "/test" }],
  },
];

/* -------------------------------- ICONLAR -------------------------------- */
function renderIcon(type, isActive = false) {
  const icons = {
    user: "fa-user",
    cog: "fa-gear",
    creditcard: "fa-credit-card",
    device: "fa-mobile-screen-button",
    question: "fa-circle-question",
    checkcircle: "fa-circle-check",
  };
  return (
    <span className={`flex items-center justify-center w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-500"}`}>
      <i className={`fa-solid ${icons[type]} fa-fw text-base`} />
    </span>
  );
}

/* -------------------------------- SIDEBAR -------------------------------- */
export default function Sidebar({ isOpen, toggleSidebar, isCollapsed, setIsCollapsed }) {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    }
  }, []);

  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-50 border-r border-gray-200 z-30 transition-all duration-300
        md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
        ${isCollapsed ? "w-20" : "w-72"} shadow-lg md:shadow-none overflow-hidden flex flex-col`}
    >
      {/* Header with border */}
      <div className={`${isCollapsed ? "px-3" : "px-6"} py-4 border-b border-gray-200`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-book text-white text-sm"></i>
            </div>
            {!isCollapsed && (
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-900 truncate">Dastur Qo'llanmasi</span>
                <span className="text-xs text-gray-500 truncate">Mijozlar uchun</span>
              </div>
            )}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex p-2 hover:bg-gray-200 active:bg-gray-300 rounded-lg transition-all duration-200 items-center justify-center flex-shrink-0 group"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <i className={`fa-solid fa-chevron-${isCollapsed ? "right" : "left"} text-gray-600 group-hover:text-gray-800 text-sm transition-transform duration-200`}></i>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`flex-1 overflow-y-auto ${isCollapsed ? "px-2" : "px-3"} py-3`}>
        {navLinks.map((link) => {
          const hasSubmenu = link.submenu?.length > 0;
          const isOpenDropdown = openDropdown === link.name;
          const isActive =
            location.pathname === link.path ||
            link.submenu?.some((s) => location.pathname === s.path);

          return (
            <div key={link.name} className="mb-1">
              <button
                onClick={() => {
                  if (hasSubmenu && !isCollapsed) {
                    setOpenDropdown(isOpenDropdown ? null : link.name);
                  }
                }}
                className={`w-full flex items-center ${isCollapsed ? "justify-center" : ""} gap-2.5 ${isCollapsed ? "px-2" : "px-3"} py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                title={isCollapsed ? link.name : ""}
              >
                <div className="flex-shrink-0">
                  {renderIcon(link.icon, isActive)}
                </div>
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-left">{link.name}</span>
                    {hasSubmenu && (
                      <i
                        className={`fa-solid fa-chevron-${
                          isOpenDropdown ? "up" : "down"
                        } text-xs text-gray-400 transition-transform`}
                      />
                    )}
                  </>
                )}
              </button>

              {hasSubmenu && isOpenDropdown && !isCollapsed && (
                <div className="mt-1 ml-1 space-y-0.5 pl-8">
                  {link.submenu.map((sub) => {
                    const isSubActive = location.pathname === sub.path;
                    return (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => window.innerWidth < 768 && toggleSidebar()}
                        className={`flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-all duration-200
                          ${
                            isSubActive
                              ? "bg-blue-50 text-blue-700 font-medium"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                          }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${isSubActive ? "bg-blue-500" : "bg-gray-400"}`}></span>
                        <span>{sub.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <p className="text-xs text-gray-500">
            © 2024 Idokon. All rights reserved.
          </p>
        </div>
      )}
    </aside>
  );
}

/* 🔹 YUMSHOQ OCHILISH ANIMATSIYASI (Tailwind bilan) */
const style = document.createElement("style");
style.innerHTML = `
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-slide-down {
  animation: slideDown 0.25s ease-out;
}
`;
document.head.appendChild(style);
