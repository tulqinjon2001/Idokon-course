import { Component } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import QuizCom from "../../sections/Quiz/QuizCom.jsx";

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
      { name: "Inventarizatsiya", path: "/admin/inventarizatsiya" },
    ],
  },
  {
    name: "Kassa Panel",
    icon: "creditcard",
    submenu: [
      { name: "Kassaga kirish", path: "/kassa/kirish" },
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
      { name: "To‘lov qilish", path: "/savollar/tolov" },
    ],
  },
  { 
    name: "Test ishlash", 
    icon: "checkcircle", 
    submenu: [
      { name: "Test ishlash", path: "/test" },
    ],
  }
];

/* -------------------------------- ICONLAR -------------------------------- */
function renderIcon(type) {
  const icons = {
    user: "fa-user",
    cog: "fa-gear",
    creditcard: "fa-credit-card",
    device: "fa-mobile-screen-button",
    question: "fa-circle-question",
    checkcircle: "fa-circle-check",
  };
  return (
    <span className="flex items-center justify-center w-6 h-6">
      <i className={`fa-solid ${icons[type]} fa-fw text-lg`} />
    </span>
  );
}

/* -------------------------------- SIDEBAR -------------------------------- */
export default function Sidebar({ collapsed, onToggle }) {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsed = () => {
    if (onToggle) onToggle();
    setIsCollapsed((v) => !v);
  };

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

  return (
    <div
      className={`bg-[#eee] text-gray-900 flex flex-col min-h-screen transition-all duration-300 ${
        isCollapsed ? "w-[60px]" : "w-64"
      }`}
    >
      {/* 🔹 LOGO + TOGGLE */}
      <div className="py-2 px-3 flex items-center justify-between">
        {!isCollapsed && (
          <img
            src="https://optim.tildacdn.one/tild6563-3735-4562-a136-303435623931/-/resize/412x/-/format/webp/-removebg-preview.png.webp"
            alt="IDOKON Logo"
            className="h-10"
          />
        )}
        <button onClick={toggleCollapsed} className="text-gray-700">
          <i className="fa-solid fa-bars text-lg"></i>
        </button>
      </div>

      {/* 🔹 ASOSIY MENYU */}
      <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
        {navLinks.map((link) => {
          const hasSubmenu = link.submenu && link.submenu.length > 0;
          const isOpen = openDropdown === link.name;
          const isActive =
            location.pathname === link.path ||
            link.submenu?.some((s) => location.pathname === s.path);

          return (
            <div key={link.name}>
              {/* BOSHQI MENU */}
              <button
                onClick={() =>
                  hasSubmenu
                    ? setOpenDropdown(isOpen ? null : link.name)
                    : setOpenDropdown(null)
                }
                className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 font-semibold ${
                  isActive
                    ? "bg-[#5d79b7] text-white"
                    : "hover:bg-[#d9e2f3] text-gray-800"
                } ${isCollapsed ? "justify-center" : "space-x-3"}`}
              >
                {renderIcon(link.icon)}
                {!isCollapsed && <span>{link.name}</span>}
                {!isCollapsed && hasSubmenu && (
                  <i
                    className={`fa-solid fa-chevron-${
                      isOpen ? "up" : "down"
                    } ml-auto text-xs`}
                  />
                )}
              </button>

              {/* SUBMENU */}
              {!isCollapsed && hasSubmenu && isOpen && (
                <div className="ml-6 mt-1 flex flex-col space-y-1 animate-slide-down">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className={`px-3 py-2 rounded-md text-sm transition-colors ${
                        location.pathname === sub.path
                          ? "bg-[#5d79b7] text-white"
                          : "hover:bg-[#e0e8f7]"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
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
