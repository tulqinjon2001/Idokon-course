import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Kirish", icon: "user", path: "/" },
  { name: "Admin Panel", icon: "cog", path: "/admin" },
  { name: "Kassa Panel", icon: "creditcard", path: "/kassa" },
  { name: "Qurilmalar", icon: "device", path: "/qurilmalar" },
  { name: "Savollar", icon: "question", path: "/savollar" },
  { name: "Quiz test", icon: "checkcircle", path: "/quiz" },
];

function renderIcon(type) {
  switch (type) {
    case "user":
      return (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-2.761-3.582-5-8-5z"
          />
        </svg>
      );
    case "cog":
      return (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zm7.43-2.9l1.77-1.02a1 1 0 0 0 .37-1.37l-1.68-2.91a1 1 0 0 0-1.25-.46l-1.77 1.02a7.03 7.03 0 0 0-1.52-.88l-.27-1.93A1 1 0 0 0 14 4h-4a1 1 0 0 0-1 .84l-.27 1.93a7.03 7.03 0 0 0-1.52.88l-1.77-1.02a1 1 0 0 0-1.25.46l-1.68 2.91a1 1 0 0 0 .37 1.37l1.77 1.02c-.07.32-.13.65-.13.99s.06.67.13.99l-1.77 1.02a1 1 0 0 0-.37 1.37l1.68 2.91a1 1 0 0 0 1.25.46l1.77-1.02c.47.34.98.63 1.52.88l.27 1.93A1 1 0 0 0 10 20h4a1 1 0 0 0 1-.84l.27-1.93c.54-.25 1.05-.54 1.52-.88l1.77 1.02a1 1 0 0 0 1.25-.46l1.68-2.91a1 1 0 0 0-.37-1.37l-1.77-1.02c.07-.32.13-.65.13-.99s-.06-.67-.13-.99z"
          />
        </svg>
      );
    case "creditcard":
      return (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zm2 0v2h16V7H4zm0 4v6h16v-6H4zm2 2h2v2H6v-2z"
          />
        </svg>
      );
    case "device":
      return (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          />
        </svg>
      );
    case "question":
      return (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.75 15h-1.5v-1.5h1.5V17zm2.25-6.25c0 1.38-1.12 2.5-2.5 2.5h-.5v-1.5h.5a1 1 0 1 0-1-1V9a2.5 2.5 0 1 1 5 0c0 .83-.67 1.5-1.5 1.5z"
          />
        </svg>
      );
    case "checkcircle":
      return (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 15l-5-5 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 9z"
          />
        </svg>
      );
    default:
      return null;
  }
}

const Sidebar = ({ collapsed, onToggle }) => {
  const location = useLocation();

  return (
    <div
      className={`bg-[#eee] text-gray-900 flex flex-col min-h-screen transition-all duration-300 ${
        collapsed ? "w-[56px]" : "w-64"
      }`}
    >
      <div className="py-2 px-2">
        <div className="flex flex-col items-start">
          {!collapsed && (
            <img
              src="https://optim.tildacdn.one/tild6563-3735-4562-a136-303435623931/-/resize/412x/-/format/webp/-removebg-preview.png.webp"
              alt="Idokon Logo"
              className="h-10 transition-all duration-300 mb-2"
            />
          )}
          <button
            className="text-gray-700 focus:outline-none"
            onClick={onToggle}
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav className="py-1 px-1 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => {
              window.dispatchEvent(new CustomEvent("showChildSidebar"));
            }}
            className={`flex items-center p-3 rounded-lg transition-colors duration-200 font-bold ${
              location.pathname === link.path
                ? "bg-[#5d79b7] text-white"
                : "hover:bg-[#ccdbef]"
            } ${collapsed ? "justify-center" : "space-x-3"}`}
          >
            {renderIcon(link.icon)}
            {!collapsed && <span>{link.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
