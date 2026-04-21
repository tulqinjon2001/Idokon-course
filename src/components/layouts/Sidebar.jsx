import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { NAV_LINKS } from "../../lib/routes";

export default function Sidebar({
  isOpen,
  toggleSidebar,
  isCollapsed,
  setIsCollapsed,
  isDarkMode,
}) {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  /* Mobil: navga bosganda sidebar yoqiladi */
  const handleNavClick = useCallback(() => {
    if (window.innerWidth < 1024) toggleSidebar();
  }, [toggleSidebar]);

  /* Submenu toggle */
  const toggleDropdown = useCallback(
    (name) => setOpenDropdown((prev) => (prev === name ? null : name)),
    [],
  );

  /* Collapse toggle */
  const toggleCollapse = useCallback(
    () => setIsCollapsed((c) => !c),
    [setIsCollapsed],
  );

  return (
    <aside
      className={[
        "fixed top-0 left-0 h-full z-30",
        "border-r transition-all duration-300 ease-in-out",
        "flex flex-col overflow-hidden",
        "shadow-2xl md:shadow-xl",
        isCollapsed ? "w-[72px]" : "w-72",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "md:translate-x-0",
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 border-gray-700"
          : "bg-gradient-to-b from-white via-white to-gray-50 border-gray-200",
      ].join(" ")}
    >
      {/* ── Header ── */}
      <div
        className={[
          "flex-shrink-0 border-b transition-all duration-300",
          isCollapsed ? "px-3 py-5" : "px-5 py-4",
          isDarkMode
            ? "border-gray-700 bg-gray-900"
            : "border-gray-200 bg-white",
        ].join(" ")}
      >
        {isCollapsed ? (
          /* Collapsed header */
          <div className="flex flex-col items-center gap-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
            </div>
            <button
              onClick={toggleCollapse}
              className={[
                "p-2 rounded-lg transition-all",
                isDarkMode
                  ? "hover:bg-gray-800 text-gray-400 hover:text-gray-200"
                  : "hover:bg-gray-100 text-gray-500 hover:text-gray-700",
              ].join(" ")}
              aria-label="Kengaytirish"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Expanded header */
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative group flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <span
                  className={`text-sm font-bold truncate leading-tight ${
                    isDarkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  IDOKON Docs
                </span>
                <span
                  className={`text-xs truncate flex items-center gap-1 leading-tight ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <Sparkles className="w-3 h-3 flex-shrink-0" />
                  Mijozlar uchun
                </span>
              </div>
            </div>

            {/* Collapse button — faqat desktop */}
            <button
              onClick={toggleCollapse}
              className={[
                "hidden md:flex p-2 rounded-lg transition-all flex-shrink-0",
                isDarkMode
                  ? "hover:bg-gray-800 text-gray-400 hover:text-gray-200"
                  : "hover:bg-gray-100 text-gray-500 hover:text-gray-700",
              ].join(" ")}
              aria-label="Qisqartirish"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* ── Navigation ── */}
      <nav
        className={[
          "flex-1 overflow-y-auto overflow-x-hidden py-3",
          isCollapsed ? "px-2" : "px-3",
        ].join(" ")}
      >
        <div className="space-y-0.5">
          {NAV_LINKS.map((link) => {
            const hasSubmenu =
              Array.isArray(link.submenu) && link.submenu.length > 0;
            const isDropdownOpen = openDropdown === link.name;
            const IconComponent = link.icon;

            /* Active state: direct path yoki submenu ichidagi path */
            const isActive =
              (link.path && location.pathname === link.path) ||
              (hasSubmenu &&
                link.submenu.some(
                  (s) =>
                    location.pathname === s.path ||
                    location.pathname.startsWith(s.path + "/"),
                ));

            const itemBase = [
              "group relative w-full flex items-center gap-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
              isCollapsed ? "justify-center px-2 py-3" : "px-3 py-2.5",
              isActive
                ? isDarkMode
                  ? "bg-gradient-to-r from-primary-900/50 to-primary-800/30 text-primary-300 shadow-lg"
                  : "bg-gradient-to-r from-primary-50 to-primary-100/60 text-primary-700 shadow-md"
                : isDarkMode
                  ? "text-gray-300 hover:bg-gray-800/60 hover:text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
            ].join(" ");

            const iconBox = [
              "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all",
              isActive
                ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-md"
                : isDarkMode
                  ? "bg-gray-800 text-gray-400 group-hover:bg-gray-700 group-hover:text-gray-200"
                  : "bg-gray-100 text-gray-500 group-hover:bg-primary-100 group-hover:text-primary-600",
            ].join(" ");

            const ActiveIndicator = () =>
              isActive ? (
                <span className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-primary-500 to-primary-600 rounded-r-full" />
              ) : null;

            return (
              <div key={link.name} className="mb-0.5">
                {/* Direct link (no submenu) */}
                {link.path && !hasSubmenu ? (
                  <Link
                    to={link.path}
                    onClick={handleNavClick}
                    className={itemBase}
                    title={isCollapsed ? link.name : ""}
                  >
                    <ActiveIndicator />
                    <span className={iconBox}>
                      <IconComponent className="w-4 h-4" />
                    </span>
                    {!isCollapsed && (
                      <span className="flex-1 text-left leading-tight">
                        {link.name}
                      </span>
                    )}
                  </Link>
                ) : (
                  /* Dropdown button */
                  <>
                    <button
                      onClick={() =>
                        !isCollapsed && hasSubmenu && toggleDropdown(link.name)
                      }
                      className={itemBase}
                      title={isCollapsed ? link.name : ""}
                      aria-expanded={isDropdownOpen}
                    >
                      <ActiveIndicator />
                      <span className={iconBox}>
                        <IconComponent className="w-4 h-4" />
                      </span>
                      {!isCollapsed && (
                        <>
                          <span className="flex-1 text-left leading-tight">
                            {link.name}
                          </span>
                          {hasSubmenu && (
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${
                                isDropdownOpen ? "rotate-180" : ""
                              } ${
                                isDarkMode ? "text-gray-500" : "text-gray-400"
                              }`}
                            />
                          )}
                        </>
                      )}
                    </button>

                    {/* Submenu */}
                    {hasSubmenu && isDropdownOpen && !isCollapsed && (
                      <div
                        className={`mt-0.5 ml-4 pl-5 space-y-0.5 border-l-2 animate-sidebar-slide-down ${
                          isDarkMode ? "border-gray-700" : "border-gray-200"
                        }`}
                      >
                        {link.submenu.map((sub) => {
                          const isSubActive =
                            location.pathname === sub.path ||
                            location.pathname.startsWith(sub.path + "/");
                          return (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => {
                                if (window.innerWidth < 768) toggleSidebar();
                              }}
                              className={[
                                "group flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200",
                                isSubActive
                                  ? isDarkMode
                                    ? "bg-primary-900/30 text-primary-300 font-semibold"
                                    : "bg-primary-50 text-primary-700 font-semibold"
                                  : isDarkMode
                                    ? "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                              ].join(" ")}
                            >
                              <span
                                className={`w-2 h-2 rounded-full flex-shrink-0 transition-all ${
                                  isSubActive
                                    ? "bg-primary-500 shadow-sm shadow-primary-500/50"
                                    : isDarkMode
                                      ? "bg-gray-600 group-hover:bg-gray-500"
                                      : "bg-gray-300 group-hover:bg-primary-400"
                                }`}
                              />
                              <span className="flex-1 leading-tight">
                                {sub.name}
                              </span>
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

      {/* ── Footer ── */}
      {!isCollapsed && (
        <div
          className={`flex-shrink-0 px-5 py-4 border-t ${
            isDarkMode
              ? "border-gray-700 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-md flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <p
              className={`text-xs ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              © 2026 IDOKON. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}
