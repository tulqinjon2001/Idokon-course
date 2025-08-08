import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    name: "Kirish",
    icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
    path: "/",
  },
  {
    name: "Admin Panel",
    icon: "M12 2l-5.5 10L12 22l5.5-10L12 2zm0 14L8 8l4 8zm0 0l-4 8l4-8z",
    path: "/courses/1",
  },
  {
    name: "Kassa Panel",
    icon: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 14H8v-2h8v2zm0-4H8v-2h8v2z",
    path: "/assignments",
  },
  {
    name: "Qurilmalar",
    icon: "M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-.42 16.74c-.39-.14-.7-.4-.88-.75l-.94-1.85c-.17-.33-.5-.54-.87-.54h-1.88l-.94-1.85c-.17-.33-.5-.54-.87-.54h-1.88c-.39-.14-.7-.4-.88-.75L3.26 12c-.17-.33-.5-.54-.87-.54H1.4c-.39-.14-.7-.4-.88-.75L-.2 8.5c-.17-.33-.5-.54-.87-.54H-2.6c-.39-.14-.7-.4-.88-.75L-4.26 4c-.17-.33-.5-.54-.87-.54H-6.6c-.39-.14-.7-.4-.88-.75L-8.2 0H-10z",
    path: "/timetable",
  },
  {
    name: "Savollar",
    icon: "M21 15c0 1.1-.9 2-2 2H6.46l-4.47 4.47c-.32.32-.86.1-.86-.33V4c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v11zM19 14h-6v-2h6v2zm0-3h-9V9h9v2z",
    path: "/forum",
  },
  {
    name: "Quiz test",
    icon: "M19.4 12.98l-1.92-1.92c-.37-.37-.87-.55-1.4-.55h-3.4c-.53 0-1.03.18-1.4.55l-1.92 1.92c-.37.37-.55.87-.55 1.4v2.04c0 .53.18 1.03.55 1.4l1.92 1.92c.37.37.87.55 1.4.55h3.4c.53 0 1.03-.18 1.4-.55l1.92-1.92c.37-.37.55-.87.55-1.4v-2.04c0-.53-.18-1.03-.55-1.4zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
    path: "/settings",
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-[#eee] text-gray-900 flex flex-col min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <img
            src="https://optim.tildacdn.one/tild6563-3735-4562-a136-303435623931/-/resize/412x/-/format/webp/-removebg-preview.png.webp"
            alt="Idokon Logo"
            className="h-10"
          />
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`flex font-bold items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
              location.pathname === link.path
                ? "bg-[#5d79b7] text-white"
                : "hover:bg-[#ccdbef]"
            }`}
          >
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
                d={link.icon}
              />
            </svg>
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
