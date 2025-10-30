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
    <aside
      className={`fixed top-0 left-0 h-full bg-[#eee] z-30 transition-all duration-300
        md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
        w-64 shadow-lg`}
    >
      {/* Header - Updated height and logo size */}
      {/* <div className="h-12 px-3 flex items-center justify-between border-b border-gray-200">
        <img
          src="https://optim.tildacdn.one/tild6563-3735-4562-a136-303435623931/-/resize/412x/-/format/webp/-removebg-preview.png.webp"
          alt="IDOKON Logo"
          className="h-12 w-auto object-contain" // Reduced from h-8 to h-6
        />
        <button
          onClick={toggleSidebar}
          className="md:hidden p-1.5 hover:bg-gray-200 rounded-lg"
        >
          <i className="fa-solid fa-xmark text-lg" />
        </button>
      </div> */}

      {/* Navigation - Adjusted top spacing */}
      <nav className="p-4 overflow-y-auto h-[calc(100vh-3rem)]">
        {" "}
        {/* Updated from 3.5rem to 3rem */}
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
                className={`w-full flex items-center p-2 rounded-lg
                  ${isActive ? "bg-[#5d79b7] text-white" : "hover:bg-[#d9e2f3]"}
                  transition-colors duration-200`}
              >
                {renderIcon(link.icon)}
                <span className="ml-3 flex-1 text-left">{link.name}</span>
                {hasSubmenu && (
                  <i
                    className={`fa-solid fa-chevron-${
                      isOpenDropdown ? "up" : "down"
                    } text-xs`}
                  />
                )}
              </button>

              {hasSubmenu && isOpenDropdown && (
                <div className="ml-4 mt-1 border-l-2 border-[#5d79b7] pl-4 space-y-1">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => window.innerWidth < 768 && toggleSidebar()}
                      className={`block p-2 rounded-lg text-sm
                        ${
                          location.pathname === sub.path
                            ? "bg-[#3b5998] text-white"
                            : "hover:bg-[#8b9dc3]"
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
