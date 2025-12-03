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
    <span className="flex items-center justify-center w-5 h-5">
      <i className={`fa-solid ${icons[type]} fa-fw text-sm`} />
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
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-50 border-r border-gray-200 z-30 transition-all duration-300
        md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
        w-72 shadow-lg md:shadow-none overflow-hidden flex flex-col`}
    >
      {/* Header with border */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <i className="fa-solid fa-book text-white text-sm"></i>
          </div>
          <span className="text-sm font-semibold text-gray-800">Idokon Docs</span>
        </div>
      </div>

      {/* Search bar - Optional */}
      <div className="px-6 py-3 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
          />
          <i className="fa-solid fa-search absolute right-3 top-2.5 text-gray-400 text-sm"></i>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-4">
        {navLinks.map((link) => {
          const hasSubmenu = link.submenu?.length > 0;
          const isOpenDropdown = openDropdown === link.name;
          const isActive =
            location.pathname === link.path ||
            link.submenu?.some((s) => location.pathname === s.path);

          return (
            <div key={link.name} className="mb-2">
              <button
                onClick={() =>
                  hasSubmenu &&
                  setOpenDropdown(isOpenDropdown ? null : link.name)
                }
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-green-50 text-green-700 border-l-4 border-green-500"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {renderIcon(link.icon)}
                <span className="flex-1 text-left">{link.name}</span>
                {hasSubmenu && (
                  <i
                    className={`fa-solid fa-chevron-${
                      isOpenDropdown ? "up" : "down"
                    } text-xs transition-transform`}
                  />
                )}
              </button>

              {hasSubmenu && isOpenDropdown && (
                <div className="mt-1 ml-2 space-y-1 border-l-2 border-gray-300 pl-4">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => window.innerWidth < 768 && toggleSidebar()}
                      className={`block px-3 py-1.5 text-xs rounded-lg transition-all duration-200
                        ${
                          location.pathname === sub.path
                            ? "bg-green-100 text-green-700 font-medium border-l-2 border-green-500 pl-2"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <p className="text-xs text-gray-500">
          © 2024 Idokon. All rights reserved.
        </p>
      </div>
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
