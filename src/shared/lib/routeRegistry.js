/**
 * Barcha sahifalar va ularning URL manzillari.
 * Sidebar (routes.js) va PageRouter shu ro'yxatdan foydalanadi.
 */
import { ROUTE_PATHS } from "./routes.js";

import KirishPage from "../../features/home/KirishPage.jsx";
import AboutPage from "../../features/home/AboutPage.jsx";
import UsingPage from "../../features/home/UsingPage.jsx";
import NewsPage from "../../features/home/NewsPage.jsx";

import AdmingaKirishPage from "../../features/admin/AdmingaKirishPage.jsx";
import MahsulotQabulPage from "../../features/admin/MahsulotQabulPage.jsx";
import BuyurtmalarSdPage from "../../features/admin/BuyurtmalarSdPage.jsx";
import InventarizatsiyaPage from "../../features/admin/InventarizatsiyaPage.jsx";
import NomenklaturaPage from "../../features/admin/NomenklaturaPage.jsx";
import GuruhlashPage from "../../features/admin/GuruhlashPage.jsx";
import MahsulotKochirPage from "../../features/admin/MahsulotKochirPage.jsx";
import TaroziPage from "../../features/admin/TaroziPage.jsx";
import CheklarPage from "../../features/admin/CheklarPage.jsx";
import BildirishnomalarPage from "../../features/admin/BildirishnomalarPage.jsx";

import KassaYuklashOrnatishPage from "../../features/kassa/KassaYuklashOrnatishPage.jsx";
import KassaVersiyalarPage from "../../features/kassa/KassaVersiyalarPage.jsx";
import KassadaSotishPage from "../../features/kassa/KassadaSotishPage.jsx";
import KassadaQaytarishPage from "../../features/kassa/KassadaQaytarishPage.jsx";
import KassaSozlamalarPage from "../../features/kassa/KassaSozlamalarPage.jsx";
import SinxronizatsiyaXatolariPage from "../../features/kassa/SinxronizatsiyaXatolariPage.jsx";

import BarcodePrinterPage from "../../features/devices/BarcodePrinterPage.jsx";
import CheckPrinterPage from "../../features/devices/CheckPrinterPage.jsx";
import TaroziDevicePage from "../../features/devices/TaroziPage.jsx";

import InventarizatsiyaFaqPage from "../../features/faq/InventarizatsiyaFaqPage.jsx";
import CheckChiqmayaptiPage from "../../features/faq/CheckChiqmayaptiPage.jsx";
import TolovQilishPage from "../../features/faq/TolovQilishPage.jsx";

import QuizPage from "../../features/quiz/QuizPage.jsx";

export const APP_ROUTES = [
  { path: ROUTE_PATHS.kirish, Component: KirishPage },
  { path: ROUTE_PATHS.homeAbout, Component: AboutPage },
  { path: ROUTE_PATHS.homeUsing, Component: UsingPage },
  { path: ROUTE_PATHS.homeNews, Component: NewsPage },

  { path: ROUTE_PATHS.adminKirish, Component: AdmingaKirishPage },
  { path: ROUTE_PATHS.adminMahsulotQabul, Component: MahsulotQabulPage },
  { path: ROUTE_PATHS.adminBuyurtmalar, Component: BuyurtmalarSdPage },
  { path: ROUTE_PATHS.adminInventarizatsiya, Component: InventarizatsiyaPage },
  { path: ROUTE_PATHS.adminNomenklatura, Component: NomenklaturaPage },
  { path: ROUTE_PATHS.adminGuruhlash, Component: GuruhlashPage },
  { path: ROUTE_PATHS.adminMahsulotKochir, Component: MahsulotKochirPage },
  { path: ROUTE_PATHS.adminTarozi, Component: TaroziPage },
  { path: ROUTE_PATHS.adminCheklar, Component: CheklarPage },
  { path: ROUTE_PATHS.adminBildirishnomalar, Component: BildirishnomalarPage },

  { path: ROUTE_PATHS.kassaYuklash, Component: KassaYuklashOrnatishPage },
  { path: ROUTE_PATHS.kassaVersiyalar, Component: KassaVersiyalarPage },
  { path: ROUTE_PATHS.kassaSotish, Component: KassadaSotishPage },
  { path: ROUTE_PATHS.kassaQaytarish, Component: KassadaQaytarishPage },
  { path: ROUTE_PATHS.kassaSozlamalar, Component: KassaSozlamalarPage },
  { path: ROUTE_PATHS.kassaSinxronizationError, Component: SinxronizatsiyaXatolariPage },

  { path: ROUTE_PATHS.qurilmalarBarcode, Component: BarcodePrinterPage },
  { path: ROUTE_PATHS.qurilmalarCheck, Component: CheckPrinterPage },
  { path: ROUTE_PATHS.qurilmalarTarozi, Component: TaroziDevicePage },

  { path: ROUTE_PATHS.savollarInventarizatsiya, Component: InventarizatsiyaFaqPage },
  { path: ROUTE_PATHS.savollarCheck, Component: CheckChiqmayaptiPage },
  { path: ROUTE_PATHS.savollarTolov, Component: TolovQilishPage },

  { path: ROUTE_PATHS.test, Component: QuizPage },
];

export function resolveRoute(pathname) {
  return APP_ROUTES.find(
    (r) => pathname === r.path || pathname.startsWith(r.path + "/"),
  );
}
