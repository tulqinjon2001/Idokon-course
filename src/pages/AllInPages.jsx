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
import TaminotchigaQaytar_hisobdanChiqar from "../sections/admin_panel/1-bolim//taminotchiqaytar-hisobchiqar";
import QaytaNarx_tarix from "../sections/admin_panel/1-bolim/qaytaNarx_tarix";
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
  { path: "/admin/nomenklatura", component: Nomenklatura },
  {
    path: "/admin/taminotchiga-qaytarish",
    component: TaminotchigaQaytar_hisobdanChiqar,
  },
  { path: "/admin/qayta-narx-tarix", component: QaytaNarx_tarix },
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
      { name: "Nomenklatura", path: "/admin/nomenklatura" },
      { name: "Qayta narx tarix", path: "/admin/qayta-narx-tarix" },
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
function Breadcrumb() {
  const location = useLocation();

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
        breadcrumbs.push({ name: link.name, path: null, icon: "fa-user" });
        breadcrumbs.push({ name: submenuItem.name, path: submenuItem.path, icon: null });
        break;
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className="mb-3 sm:mb-4 bg-white rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-200 shadow-sm overflow-x-auto" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 sm:space-x-1.5 text-xs sm:text-sm min-w-max">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <i className="fa-solid fa-chevron-right text-gray-400 mx-1.5 text-xs"></i>
            )}
            {crumb.path ? (
              <Link
                to={crumb.path}
                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1.5"
              >
                {crumb.icon && (
                  <i className={`fa-solid ${crumb.icon} text-xs`}></i>
                )}
                {crumb.name}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium flex items-center gap-1.5">
                {crumb.icon && (
                  <i className={`fa-solid ${crumb.icon} text-xs`}></i>
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
export default function AllInOne() {
  const location = useLocation();

  // 🔍 path'ni `startsWith` orqali qidirish
  const current = ROUTES.find((r) => location.pathname.startsWith(r.path));

  // 🧩 Komponent topilmasa, default yoki 404
  const PageComponent = current
    ? current.component
    : location.pathname === "/" || location.pathname === ""
    ? AboutIdokon
    : () => (
        <div className="p-4 sm:p-6 md:p-8 text-center text-red-500 font-semibold">
          Sahifa topilmadi (404)
        </div>
      );

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 overflow-x-hidden">
      <div className="flex-1 px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8">
        <Breadcrumb />
        <PageComponent />
      </div>
    </div>
  );
}
