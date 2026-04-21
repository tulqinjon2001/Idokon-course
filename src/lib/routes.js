/**
 * MARKAZLASHTIRILGAN NAVIGATSIYA MA'LUMOTLARI
 * Barcha route va nav ma'lumotlari shu yerdan boshqariladi.
 * Sidebar va AllInPages ikkisi ham shu fayldan import qiladi.
 */

import {
  User,
  Settings,
  CreditCard,
  Smartphone,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

/** --------------------------------------------------------
 * ROUTE XARITASI — path → component nomi (lazy import)
 * component emas, balki faqat path saqlanadi.
 * Komponentlar AllInPages da import qilinadi.
 * -------------------------------------------------------- */
export const ROUTE_PATHS = {
  kirish: "/kirish",
  homeAbout: "/home/about",
  homeUsing: "/home/using",
  homeNews: "/home/news",

  adminKirish: "/admin/adminga-kirish",
  adminMahsulotQabul: "/admin/mahsulot-qabul",
  adminBuyurtmalar: "/admin/buyurtmalar-sd",
  adminInventarizatsiya: "/admin/inventarizatsiya",
  adminNomenklatura: "/admin/nomenklatura-qayta-narx-tarix",
  adminGuruhlash: "/admin/guruhlash",
  adminMahsulotKochir: "/admin/mahsulot-kochir",
  adminTarozi: "/admin/tarozi",
  adminCheklar: "/admin/cheklar",
  adminBildirishnomalar: "/admin/bildirishnomalar",

  kassaYuklash: "/kassa/yuklash-ornatish",
  kassaVersiyalar: "/kassa/versiyalar",
  kassaSotish: "/kassa/sotish",
  kassaQaytarish: "/kassa/qaytarish",
  kassaSozlamalar: "/kassa/sozlamalar",
  kassaSinxronizationError: "/kassa/sixronizatsiya-xatolari",

  qurilmalarBarcode: "/qurilmalar/barcode",
  qurilmalarCheck: "/qurilmalar/check",
  qurilmalarTarozi: "/qurilmalar/tarozi",

  savollarInventarizatsiya: "/savollar/inventarizatsiya",
  savollarCheck: "/savollar/checkproblem",
  savollarTolov: "/savollar/tolov",

  test: "/test",
};

/** --------------------------------------------------------
 * NAVIGATSIYA MENYUSI — Sidebar uchun
 * -------------------------------------------------------- */
export const NAV_LINKS = [
  {
    name: "Kirish",
    icon: User,
    path: ROUTE_PATHS.kirish,
  },
  {
    name: "Admin Panel",
    icon: Settings,
    submenu: [
      { name: "Adminga kirish", path: ROUTE_PATHS.adminKirish },
      { name: "Mahsulot qabul qilish", path: ROUTE_PATHS.adminMahsulotQabul },
      { name: "Buyurtmalar SD", path: ROUTE_PATHS.adminBuyurtmalar },
      {
        name: "Nomenklatura, Qayta narxlash va Tarix",
        path: ROUTE_PATHS.adminNomenklatura,
      },
      { name: "Inventarizatsiya", path: ROUTE_PATHS.adminInventarizatsiya },
      { name: "Guruhlash", path: ROUTE_PATHS.adminGuruhlash },
      { name: "Mahsulot ko'chir", path: ROUTE_PATHS.adminMahsulotKochir },
      { name: "Tarozi", path: ROUTE_PATHS.adminTarozi },
      { name: "Cheklar", path: ROUTE_PATHS.adminCheklar },
      { name: "Bildirishnomalar", path: ROUTE_PATHS.adminBildirishnomalar },
    ],
  },
  {
    name: "Kassa Panel",
    icon: CreditCard,
    submenu: [
      {
        name: "Kassani yuklash va o'rnatish",
        path: ROUTE_PATHS.kassaYuklash,
      },
      { name: "Kassa versiyalari", path: ROUTE_PATHS.kassaVersiyalar },
      { name: "Kassada sotish", path: ROUTE_PATHS.kassaSotish },
      { name: "Qaytarish", path: ROUTE_PATHS.kassaQaytarish },
      { name: "Sozlamalar", path: ROUTE_PATHS.kassaSozlamalar },
      {
        name: "Sinxronizatsiya xatolari",
        path: ROUTE_PATHS.kassaSinxronizationError,
      },
    ],
  },
  {
    name: "Qurilmalar",
    icon: Smartphone,
    submenu: [
      { name: "Barcode printer", path: ROUTE_PATHS.qurilmalarBarcode },
      { name: "Check printer", path: ROUTE_PATHS.qurilmalarCheck },
      { name: "Tarozi", path: ROUTE_PATHS.qurilmalarTarozi },
    ],
  },
  {
    name: "Savollar",
    icon: HelpCircle,
    submenu: [
      {
        name: "Inventarizatsiya",
        path: ROUTE_PATHS.savollarInventarizatsiya,
      },
      { name: "Check chiqmayapti", path: ROUTE_PATHS.savollarCheck },
      { name: "To'lov qilish", path: ROUTE_PATHS.savollarTolov },
    ],
  },
  {
    name: "Test ishlash",
    icon: CheckCircle2,
    path: ROUTE_PATHS.test,
  },
];

/** --------------------------------------------------------
 * BREADCRUMB icon mapping
 * -------------------------------------------------------- */
export const BREADCRUMB_ICONS = {
  "IDOKON Docs": "fa-book",
  Kirish: "fa-user",
  "Admin Panel": "fa-gear",
  "Kassa Panel": "fa-credit-card",
  Qurilmalar: "fa-mobile-screen-button",
  Savollar: "fa-circle-question",
  "Test ishlash": "fa-circle-check",
  "IDOKON haqida": "fa-info-circle",
  "Idokondan foydalanish": "fa-play-circle",
  "Kerakli yangiliklar": "fa-newspaper",
  "Adminga kirish": "fa-sign-in-alt",
  "Mahsulot qabul qilish": "fa-box",
  "Buyurtmalar SD": "fa-shopping-cart",
  "Nomenklatura, Qayta narxlash va Tarix": "fa-list",
  Inventarizatsiya: "fa-clipboard-check",
  Guruhlash: "fa-layer-group",
  "Mahsulot ko'chir": "fa-exchange-alt",
  Tarozi: "fa-balance-scale",
  Cheklar: "fa-receipt",
  Bildirishnomalar: "fa-bell",
  "Kassani yuklash va o'rnatish": "fa-download",
  "Kassa versiyalari": "fa-code-branch",
  "Kassada sotish": "fa-cash-register",
  Qaytarish: "fa-undo-alt",
  Sozlamalar: "fa-cog",
  "Barcode printer": "fa-barcode",
  "Check printer": "fa-print",
  "To'lov qilish": "fa-money-bill",
  "Check chiqmayapti": "fa-print",
};
