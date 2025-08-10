// idokon_kursi/frontend/src/pages/AdminPanelPage.jsx

import React, { useState } from "react";
import AdmingaKirish from "../sections/admin panel/adminga-kirish";
// 1-bolim
import MahsulotQabulQilish from "../sections/admin panel/1-bolim/mahsulot-qabul-qilish";
import BuyurtmalarSD from "../sections/admin panel/1-bolim/buyurtmalar-sd";
import NomenklaturaQaytaNarxlashTarix from "../sections/admin panel/1-bolim/nomenklatura-qaytanarxlash-tarix";
import TaminotchiHisobdanChiqarish from "../sections/admin panel/1-bolim/taminotchiqaytar-hisobchiqar";

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
  // Boshqa admin bo'limlarini shu yerga qo'shing
];

const AdminPanelPage = () => {
  const [activeSection, setActiveSection] = useState("adminga-kirish");
  const ActiveComponent = adminSections.find(
    (s) => s.id === activeSection
  ).component;

  return (
    <div className="flex w-full h-screen">
      <div className="w-64 p-6 border-r bg-gray-50 flex-shrink-0 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Admin Paneli</h2>
        <nav className="space-y-2">
          {adminSections.map((section) => (
            <div
              key={section.id}
              className={`p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                activeSection === section.id
                  ? "bg-[#5d79b7] text-white"
                  : "hover:bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.name}
            </div>
          ))}
        </nav>
      </div>

      <div className="flex-1 p-8 overflow-y-auto">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default AdminPanelPage;
