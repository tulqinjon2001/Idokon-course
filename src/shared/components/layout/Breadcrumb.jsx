import React from "react";
import { useLocation, Link } from "react-router-dom";
import { NAV_LINKS, BREADCRUMB_ICONS } from "../../lib/routes.js";

function buildBreadcrumbs(pathname) {
  const root = { name: "IDOKON Docs", path: "/", icon: "fa-book" };
  const crumbs = [root];

  if (pathname === "/" || pathname === "") return crumbs;

  for (const link of NAV_LINKS) {
    if (
      link.path &&
      (pathname === link.path || pathname.startsWith(link.path + "/"))
    ) {
      crumbs.push({
        name: link.name,
        path: link.path,
        icon: BREADCRUMB_ICONS[link.name] ?? null,
      });
      break;
    }

    if (link.submenu) {
      const sub = link.submenu.find(
        (s) => pathname === s.path || pathname.startsWith(s.path + "/"),
      );
      if (sub) {
        crumbs.push({
          name: link.name,
          path: null,
          icon: BREADCRUMB_ICONS[link.name] ?? null,
        });
        crumbs.push({
          name: sub.name,
          path: sub.path,
          icon: BREADCRUMB_ICONS[sub.name] ?? null,
        });
        break;
      }
    }
  }

  return crumbs;
}

export default function Breadcrumb({ isDarkMode }) {
  const location = useLocation();
  const breadcrumbs = buildBreadcrumbs(location.pathname);
  const lastIdx = breadcrumbs.length - 1;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-6 rounded-xl px-4 py-2.5 border overflow-x-auto ${
        isDarkMode
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200 shadow-sm"
      }`}
    >
      <ol className="flex items-center space-x-1.5 text-sm min-w-max">
        {breadcrumbs.map((crumb, idx) => (
          <li key={idx} className="flex items-center">
            {idx > 0 && (
              <i
                className={`fa-solid fa-chevron-right mx-2 text-[10px] ${
                  isDarkMode ? "text-gray-600" : "text-gray-300"
                }`}
              />
            )}

            {crumb.path ? (
              <Link
                to={crumb.path}
                className={`flex items-center gap-1.5 transition-colors ${
                  idx === lastIdx
                    ? isDarkMode
                      ? "text-primary-300 font-semibold"
                      : "text-primary-700 font-semibold"
                    : isDarkMode
                      ? "text-gray-400 hover:text-gray-200"
                      : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {crumb.icon && (
                  <i
                    className={`fa-solid ${crumb.icon} text-xs ${
                      idx === lastIdx
                        ? isDarkMode
                          ? "text-primary-400"
                          : "text-primary-600"
                        : isDarkMode
                          ? "text-gray-500"
                          : "text-gray-400"
                    }`}
                  />
                )}
                <span
                  className={
                    idx === lastIdx
                      ? `px-2 py-0.5 rounded-md ${
                          isDarkMode ? "bg-primary-900/30" : "bg-primary-50"
                        }`
                      : ""
                  }
                >
                  {crumb.name}
                </span>
              </Link>
            ) : (
              <span
                className={`flex items-center gap-1.5 font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {crumb.icon && (
                  <i
                    className={`fa-solid ${crumb.icon} text-xs ${
                      isDarkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                  />
                )}
                {crumb.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
