// idokon_kursi/frontend/src/pages/AdminPanelPage.jsx

import React, { useState, useEffect } from "react";
import AdmingaKirish from "../sections/admin panel/adminga-kirish";
import MahsulotQabulQilish from "../sections/admin panel/1-bolim/mahsulot-qabul-qilish";
import BuyurtmalarSD from "../sections/admin panel/1-bolim/buyurtmalar-sd";
import NomenklaturaQaytaNarxlashTarix from "../sections/admin panel/1-bolim/nomenklatura-qaytanarxlash-tarix";
import TaminotchiHisobdanChiqarish from "../sections/admin panel/1-bolim/taminotchiqaytar-hisobchiqar";
import Inventarizatsiya from "../sections/admin panel/1-bolim/Inventarizatsiya-mahsulotlarnikochir";
import Bildirishnomalar from "../sections/admin panel/1-bolim/bildirishnomalar";

const adminSections = [
  { id: "adminga-kirish", name: "Adminga kirish", component: AdmingaKirish },
  {
    id: "mahsulot-qabul-qilish",
    name: "Mahsulotlar qabul qilish",
    component: MahsulotQabulQilish,
  },
  { id: "buyurtmalar-sd", name: "Buyurtmalar-SD", component: BuyurtmalarSD },
  {
    id: "nomenklatura-qaytanarxlash-tarix",
    name: "Nomenklatura, Qayta narxlash, Tarix",
    component: NomenklaturaQaytaNarxlashTarix,
  },
  {
    id: "tam-qayt-hisob-chiq",
    name: "Taminotchiga qaytarish, Hisobdan chiqarish",
    component: TaminotchiHisobdanChiqarish,
  },
  {
    id: "inventarizatsiya-mahsulotlari-koshirish",
    name: "Inventarizatsiya, Mahsulotlarni ko'shirish",
    component: Inventarizatsiya,
  },
  { id: "bildirishnomalar", name: "Bildirishnomalar", component: Bildirishnomalar },
];

const AdminPanelPage = () => {
  const [activeSection, setActiveSection] = useState("adminga-kirish");
  const [showNav, setShowNav] = useState(true);
  const ActiveComponent = adminSections.find(
    (s) => s.id === activeSection
  ).component;

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Toggle button for nav */}
      <div className="p-2 border-b bg-gray-50 flex items-center justify-between">
        <div>
          <button
            className="px-3 py-1 rounded text-xs bg-[#5d79b7] text-white mr-2"
            onClick={() => setShowNav((v) => !v)}
          >
            {showNav ? "Bo'limlarni yashirish" : "Bo'limlarni ko'rsatish"}
          </button>
          <span className="text-xs text-gray-500">Admin panel bo'limlari</span>
        </div>
        <span className="text-md font-bold text-[#000]">
          ADMIN: {adminSections.find(s => s.id === activeSection)?.name}
        </span>
      </div>
      {/* Top navigation bar */}
      {showNav && (
        <nav className="flex flex-row flex-wrap gap-2 p-2 bg-gray-50 border-b">
          {adminSections.map(({ id, name }) => (
            <button
              key={id}
              className={`px-3 py-1 rounded-lg font-semibold text-xs transition-colors duration-200 ${
                activeSection === id
                  ? "bg-[#5d79b7] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveSection(id)}
            >
              {name}
            </button>
          ))}
        </nav>
      )}
      {/* Main content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default AdminPanelPage;