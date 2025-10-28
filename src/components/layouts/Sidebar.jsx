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
      { name: "To'lov qilish", path: "/savollar/tolov" },
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
export default function Sidebar({ isOpen, toggleSidebar }) {
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
    <div
      className={`bg-[#eee] text-gray-900 flex flex-col h-screen transition-all duration-300 overflow-y-auto ${
        isOpen ? "w-64" : "w-0 lg:w-64"
      }`}
    >
      {/* 🔹 LOGO + TOGGLE */}
      <div className="py-3 px-4 flex items-center justify-between flex-shrink-0 border-b border-gray-200">
        {isOpen && (
          <img
            src="https://optim.tildacdn.one/tild6563-3735-4562-a136-303435623931/-/resize/412x/-/format/webp/-removebg-preview.png.webp"
            alt="IDOKON Logo"
            className="h-10 object-contain"
          />
        )}
        <button
          onClick={toggleSidebar}
          className="text-gray-700 hover:text-gray-900 transition-colors lg:hidden p-1"
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>
      </div>

      {/* 🔹 ASOSIY MENYU */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navLinks.map((link) => {
          const hasSubmenu = link.submenu && link.submenu.length > 0;
          const isOpenDropdown = openDropdown === link.name;
          const isActive =
            location.pathname === link.path ||
            link.submenu?.some((s) => location.pathname === s.path);

          return (
            <div key={link.name}>
              {/* BOSHQI MENU */}
              <button
                onClick={() =>
                  hasSubmenu
                    ? setOpenDropdown(isOpenDropdown ? null : link.name)
                    : setOpenDropdown(null)
                }
                className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 font-semibold ${
                  isActive
                    ? "bg-[#5d79b7] text-white"
                    : "hover:bg-[#d9e2f3] text-gray-800"
                } ${isOpen ? "space-x-3" : ""}`}
              >
                {renderIcon(link.icon)}
                {isOpen && (
                  <>
                    <span className="flex-1 text-left">{link.name}</span>
                    {hasSubmenu && (
                      <i
                        className={`fa-solid fa-chevron-${
                          isOpenDropdown ? "up" : "down"
                        } text-xs`}
                      />
                    )}
                  </>
                )}
              </button>

              {/* SUBMENU */}
              {isOpen && hasSubmenu && isOpenDropdown && (
                <div className="ml-3 mt-1 flex flex-col space-y-1 animate-slide-down border-l-2 border-[#5d79b7]">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={handleNavClick}
                      className={`px-3 py-2 rounded-md text-sm transition-colors ${
                        location.pathname === sub.path
                          ? "bg-[#3b5998] text-white" // Darker background for active submenu
                          : "hover:bg-[#8b9dc3] text-gray-800" // Darker hover background for submenu
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
