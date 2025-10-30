import React from "react";
import { useLocation } from "react-router-dom";

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
        <PageComponent />
      </div>
    </div>
  );
}
