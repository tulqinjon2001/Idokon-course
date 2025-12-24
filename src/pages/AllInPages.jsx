import React from "react";
import { useLocation, Link } from "react-router-dom";

/* 🏠 Home Page komponentlari */
import AboutIdokon from "../sections/Home/AboutIdokon";
import UsingIdokon from "../sections/Home/UsingIdokon";
import NewsSection from "../sections/Home/NewsSection";

/* 🧰 Admin Panel komponentlari */
import AdmingaKirish from "../sections/admin_panel/adminga-kirish";
import MahsulotQabulQilish from "../sections/admin_panel/1-bolim/mahsulot-qabul-qilish";
import BuyurtmalarSD from "../sections/admin_panel/1-bolim/buyurtmalar-sd";
import Inventarizatsiya from "../sections/admin_panel/1-bolim/Inventarizatsiya";
import Nomenklatura from "../sections/admin_panel/1-bolim/nomenklatura";
import Guruhlash from "../sections/admin_panel/1-bolim/guruhlash-toplam-aksiya";
import MahsulotKochir from "../sections/admin_panel/1-bolim//mahsulotKochir";
import Tarozi from "../sections/admin_panel/1-bolim/tarozi";
import Cheklar from "../sections/admin_panel/1-bolim/cheklar";
import Bildirishnomalar from "../sections/admin_panel/1-bolim/bildirishnomalar";

/* 💰 Kassa Panel komponentlari */
import KassagaKirish from "../sections/kassaPanel/Kassa_yuklash_ornatish";
import kassadasotish from "../sections/kassaPanel/kassadaSotish";
import kassadaQaytarish from "../sections/kassaPanel/kassadaQaytarish";
import kassaSozlamalari from "../sections/kassaPanel/kassaSozlamalari";

/* 🖨️ Qurilmalar komponentlari */
import barcodeprinter from "../sections/qurilmalar/barcodeprinter";
import checkprinter from "../sections/qurilmalar/checkprinter";

/* ❓ Savollar komponentlari */
import inventarizatsiya from "../sections/savollar/inventarizatsiya";
import checkchiqmayabdi from "../sections/savollar/checkchiqmayabdi";
import TolovQilish from "../sections/savollar/tolovqilish";

/* 🧩 Test (Quiz) komponenti */
import QuizCom from "../sections/Quiz/QuizCom";

/* -------------------------------- ROUTE XARITASI -------------------------------- */
const ROUTES = [
  /* 🏠 Home */
  { path: "/home/about", component: AboutIdokon },
  { path: "/home/using", component: UsingIdokon },
  { path: "/home/news", component: NewsSection },

  /* 🧰 Admin Panel */
  { path: "/admin/adminga-kirish", component: AdmingaKirish },
  { path: "/admin/mahsulot-qabul", component: MahsulotQabulQilish },
  { path: "/admin/buyurtmalar-sd", component: BuyurtmalarSD },
  { path: "/admin/inventarizatsiya", component: Inventarizatsiya },
  { path: "/admin/nomenklatura-qayta-narx-tarix", component: Nomenklatura },
  { path: "/admin/guruhlash", component: Guruhlash },
  { path: "/admin/mahsulot-kochir", component: MahsulotKochir },
  { path: "/admin/tarozi", component: Tarozi },
  { path: "/admin/cheklar", component: Cheklar },
  { path: "/admin/bildirishnomalar", component: Bildirishnomalar },

  /* 💰 Kassa Panel */
  { path: "/kassa/yuklash-ornatish", component: KassagaKirish },
  { path: "/kassa/sotish", component: kassadasotish },
  { path: "/kassa/qaytarish", component: kassadaQaytarish },
  { path: "/kassa/sozlamalar", component: kassaSozlamalari },

  /* 🖨️ Qurilmalar */
  { path: "/qurilmalar/barcode", component: barcodeprinter },
  { path: "/qurilmalar/check", component: checkprinter },

  /* ❓ Savollar */
  { path: "/savollar/inventarizatsiya", component: inventarizatsiya },
  { path: "/savollar/checkproblem", component: checkchiqmayabdi },
  { path: "/savollar/tolov", component: TolovQilish },

  /* 🧩 Test ishlash */
  { path: "/test", component: QuizCom },
];

/* -------------------------------- NAVIGATSIYA MA'LUMOTLARI -------------------------------- */
const navLinks = [
  {
    name: "Kirish",
    submenu: [
      { name: "IDOKON haqida", path: "/home/about" },
      { name: "Idokondan foydalanish", path: "/home/using" },
      { name: "Kerakli yangiliklar", path: "/home/news" },
    ],
  },
  {
    name: "Admin Panel",
    submenu: [
      { name: "Adminga kirish", path: "/admin/adminga-kirish" },
      { name: "Mahsulot qabul qilish", path: "/admin/mahsulot-qabul" },
      { name: "Buyurtmalar SD", path: "/admin/buyurtmalar-sd" },
      { name: "Nomenklatura, Qayta narxlash va Tarix", path: "/admin/nomenklatura-qayta-narx-tarix" },
      { name: "Taminotchiga qaytarish", path: "/admin/taminotchiga-qaytarish" },
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
    submenu: [
      { name: "Kassani yuklash va o'rnatish", path: "/kassa/yuklash-ornatish" },
      { name: "Kassada sotish", path: "/kassa/sotish" },
      { name: "Qaytarish", path: "/kassa/qaytarish" },
      { name: "Sozlamalar", path: "/kassa/sozlamalar" },
    ],
  },
  {
    name: "Qurilmalar",
    submenu: [
      { name: "Barcode printer", path: "/qurilmalar/barcode" },
      { name: "Check printer", path: "/qurilmalar/check" },
    ],
  },
  {
    name: "Savollar",
    submenu: [
      { name: "Inventarizatsiya", path: "/savollar/inventarizatsiya" },
      { name: "Check chiqmayapti", path: "/savollar/checkproblem" },
      { name: "To'lov qilish", path: "/savollar/tolov" },
    ],
  },
  {
    name: "Test ishlash",
    submenu: [{ name: "Test ishlash", path: "/test" }],
  },
];

/* -------------------------------- BREADCRUMB KOMPONENTI -------------------------------- */
function Breadcrumb({ isDarkMode }) {
  const location = useLocation();

  // Icon mapping funksiyasi
  const getIconForName = (name) => {
    const iconMap = {
      "IDOKON Docs": "fa-book",
      "Kirish": "fa-user",
      "Admin Panel": "fa-gear",
      "Kassa Panel": "fa-credit-card",
      "Qurilmalar": "fa-mobile-screen-button",
      "Savollar": "fa-circle-question",
      "Test ishlash": "fa-circle-check",
      // Submenu items
      "IDOKON haqida": "fa-info-circle",
      "Idokondan foydalanish": "fa-play-circle",
      "Kerakli yangiliklar": "fa-newspaper",
      "Adminga kirish": "fa-sign-in-alt",
      "Mahsulot qabul qilish": "fa-box",
      "Buyurtmalar SD": "fa-shopping-cart",
      "Nomenklatura, Qayta Narxlash va Tarix": "fa-list",
      "Taminotchiga qaytarish": "fa-undo",
      "Inventarizatsiya": "fa-clipboard-check",
      "Guruhlash": "fa-layer-group",
      "Mahsulot ko'chir": "fa-exchange-alt",
      "Tarozi": "fa-balance-scale",
      "Cheklar": "fa-receipt",
      "Bildirishnomalar": "fa-bell",
      "Kassani yuklash va o'rnatish": "fa-download",
      "Kassada sotish": "fa-cash-register",
      "Qaytarish": "fa-undo-alt",
      "Sozlamalar": "fa-cog",
      "Barcode printer": "fa-barcode",
      "Check printer": "fa-print",
    };
    return iconMap[name] || null;
  };

  // Breadcrumb items'ni topish
  const getBreadcrumbs = () => {
    const breadcrumbs = [{ name: "IDOKON Docs", path: "/", icon: "fa-book" }];

    // Hozirgi path'ni tekshirish
    if (location.pathname === "/" || location.pathname === "") {
      return breadcrumbs;
    }

    // NavLinks'dan parent va child topish
    for (const link of navLinks) {
      const submenuItem = link.submenu?.find((sub) => 
        location.pathname === sub.path || location.pathname.startsWith(sub.path)
      );
      
      if (submenuItem) {
        breadcrumbs.push({ 
          name: link.name, 
          path: null, 
          icon: getIconForName(link.name) 
        });
        breadcrumbs.push({ 
          name: submenuItem.name, 
          path: submenuItem.path, 
          icon: getIconForName(submenuItem.name) 
        });
        break;
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();
  const lastIndex = breadcrumbs.length - 1;

  return (
    <nav className={`mb-6 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg px-4 py-2.5 border ${isDarkMode ? "border-gray-700" : "border-gray-200"} shadow-sm overflow-x-auto`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm min-w-max">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <i className={`fa-solid fa-chevron-right ${isDarkMode ? "text-gray-500" : "text-gray-400"} mx-2 text-xs`}></i>
            )}
            {crumb.path ? (
              <Link
                to={crumb.path}
                className={`${isDarkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-900"} transition-colors flex items-center gap-1.5`}
              >
                {crumb.icon && (
                  <i className={`fa-solid ${crumb.icon} text-xs ${isDarkMode ? "text-gray-400" : "text-primary-600"}`}></i>
                )}
                {crumb.name}
              </Link>
            ) : (
              <span className={`${index === lastIndex ? `${isDarkMode ? "bg-primary-900/30 text-primary-300" : "bg-primary-50 text-primary-700"} px-2.5 py-1 rounded-md font-medium` : `${isDarkMode ? "text-gray-300" : "text-gray-900"} font-medium`} flex items-center gap-1.5`}>
                {crumb.icon && (
                  <i className={`fa-solid ${crumb.icon} text-xs ${index === lastIndex ? (isDarkMode ? "text-primary-300" : "text-primary-700") : (isDarkMode ? "text-gray-400" : "text-gray-600")}`}></i>
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

/* -------------------------------- ASOSIY KOMPONENT -------------------------------- */
export default function AllInOne({ isDarkMode }) {
  const location = useLocation();

  // 🔍 path'ni `startsWith` orqali qidirish
  const current = ROUTES.find((r) => location.pathname.startsWith(r.path));

  // 🧩 Komponent topilmasa, default yoki 404
  const PageComponent = current
    ? current.component
    : location.pathname === "/" || location.pathname === ""
    ? AboutIdokon
    : () => (
        <div className={`p-4 sm:p-6 md:p-8 text-center ${isDarkMode ? "text-red-400" : "text-red-500"} font-semibold`}>
          Sahifa topilmadi (404)
        </div>
      );

  return (
    <div className={`flex flex-col min-h-screen w-full ${isDarkMode ? "bg-gray-900" : "bg-white"} overflow-x-hidden`}>
      <div className="flex-1 px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 max-w-6xl mx-auto w-full">
        <Breadcrumb isDarkMode={isDarkMode} />
        <div className={isDarkMode ? "text-gray-100" : "text-gray-900"}>
          <PageComponent />
        </div>
      </div>
    </div>
  );
}
