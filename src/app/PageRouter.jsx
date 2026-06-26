import React from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../shared/components/layout/Breadcrumb.jsx";
import KirishPage from "../features/home/KirishPage.jsx";
import { resolveRoute } from "../shared/lib/routeRegistry.js";

function NotFoundPage({ isDarkMode }) {
  return (
    <div
      className={`p-8 text-center ${
        isDarkMode ? "text-red-400" : "text-red-500"
      } font-semibold text-lg`}
    >
      <p className="text-5xl mb-4">🔍</p>
      <p>Sahifa topilmadi (404)</p>
      <p
        className={`text-sm mt-2 ${
          isDarkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Chap menyudan to'g'ri bo'limni tanlang.
      </p>
    </div>
  );
}

export default function PageRouter({ isDarkMode }) {
  const location = useLocation();
  const pathname = location.pathname;

  const match = resolveRoute(pathname);
  const PageComponent =
    match?.Component ??
    (pathname === "/" || pathname === "" ? KirishPage : () => (
      <NotFoundPage isDarkMode={isDarkMode} />
    ));

  return (
    <div
      className={`flex flex-col min-h-screen w-full overflow-x-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="flex-1 px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 max-w-6xl mx-auto w-full">
        <Breadcrumb isDarkMode={isDarkMode} />
        <div className={isDarkMode ? "text-gray-100" : "text-gray-900"}>
          <PageComponent isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}
