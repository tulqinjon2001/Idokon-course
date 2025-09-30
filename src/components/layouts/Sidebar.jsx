import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Kirish", icon: "user", path: "/" },
  { name: "Admin Panel", icon: "cog", path: "/admin" },
  { name: "Kassa Panel", icon: "creditcard", path: "/kassa" },
  { name: "Qurilmalar", icon: "device", path: "/qurilmalar" },
  { name: "Savollar", icon: "question", path: "/savollar" },
  { name: "Test ishlash", icon: "checkcircle", path: "/test" },
];

function renderIcon(type) {
  // Wrap icon in a flex container to ensure perfect vertical centering with text.
  // Use fa-fw for fixed-width Font Awesome icons and text-lg to control size.
  switch (type) {
    case "user":
      return (
        <span className="flex items-center justify-center w-6 h-6">
          <i className="fa-solid fa-user fa-fw text-lg" aria-hidden="true" />
        </span>
      );
    case "cog":
      return (
        <span className="flex items-center justify-center w-6 h-6">
          <i className="fa-solid fa-gear fa-fw text-lg" aria-hidden="true" />
        </span>
      );
    case "creditcard":
      return (
        <span className="flex items-center justify-center w-6 h-6">
          <i className="fa-solid fa-credit-card fa-fw text-lg" aria-hidden="true" />
        </span>
      );
    case "device":
      return (
        <span className="flex items-center justify-center w-6 h-6">
          <i className="fa-solid fa-mobile-screen-button fa-fw text-lg" aria-hidden="true" />
        </span>
      );
    case "question":
      return (
        <span className="flex items-center justify-center w-6 h-6">
          <i className="fa-solid fa-question-circle fa-fw text-lg" aria-hidden="true" />
        </span>
      );
    case "checkcircle":
      return (
        <span className="flex items-center justify-center w-6 h-6">
          <i className="fa-solid fa-circle-check fa-fw text-lg" aria-hidden="true" />
        </span>
      );
    default:
      return null;
  }
}

const Sidebar = ({ collapsed, onToggle, smallLogoSrc }) => {
  const location = useLocation();

  // internal collapse state used when parent doesn't control the component
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const isControlled = typeof collapsed === "boolean";
  const isCollapsed = isControlled ? collapsed : internalCollapsed;

  const toggleCollapsed = () => {
    // call parent handler if provided
    if (typeof onToggle === "function") onToggle();
    // if not controlled by parent, flip internal state
    if (!isControlled) setInternalCollapsed((v) => !v);
  };

  // ensure Font Awesome CSS is loaded (adds CDN link once)
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
        isCollapsed ? "w-[56px]" : "w-64"
      }`}
    >
      <div className="py-2 px-2">
        <div className={`flex flex-col ${isCollapsed ? "items-center" : "items-start"}`}>
          {isCollapsed ? (
            <img
              src={smallLogoSrc || "/assets/logo_mini.png"}
              alt="Idokon Logo Small"
              className="h-8 w-8 transition-all duration-300 mb-2"
            />
          ) : (
            <img
              src="https://optim.tildacdn.one/tild6563-3735-4562-a136-303435623931/-/resize/412x/-/format/webp/-removebg-preview.png.webp"
              alt="Idokon Logo"
              className="h-10 transition-all duration-300 mb-2"
            />
          )}
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleCollapsed}
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
            } ${isCollapsed ? "justify-center" : "space-x-3"}`}
          >
            {renderIcon(link.icon)}
            {!isCollapsed && <span>{link.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
