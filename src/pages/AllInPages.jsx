import React from "react";
import { useLocation, Link } from "react-router-dom";
import { NAV_LINKS, BREADCRUMB_ICONS, ROUTE_PATHS } from "../lib/routes";

/* 🏠 Home */
import AboutIdokon from "../sections/Home/AboutIdokon";
import UsingIdokon from "../sections/Home/UsingIdokon";
import NewsSection from "../sections/Home/NewsSection";
import Kirish from "../sections/Home/Kirish";

/* 🧰 Admin Panel */
import AdmingaKirish from "../sections/admin_panel/adminga-kirish";
import MahsulotQabulQilish from "../sections/admin_panel/1-bolim/mahsulot-qabul-qilish";
import BuyurtmalarSD from "../sections/admin_panel/1-bolim/buyurtmalar-sd";
import Inventarizatsiya from "../sections/admin_panel/1-bolim/Inventarizatsiya";
import Nomenklatura from "../sections/admin_panel/1-bolim/nomenklatura";
import Guruhlash from "../sections/admin_panel/1-bolim/guruhlash-toplam-aksiya";
import MahsulotKochir from "../sections/admin_panel/1-bolim/mahsulotKochir";
import TaroziAdmin from "../sections/admin_panel/1-bolim/tarozi";
import Cheklar from "../sections/admin_panel/1-bolim/cheklar";
import Bildirishnomalar from "../sections/admin_panel/1-bolim/bildirishnomalar";

/* 💰 Kassa Panel */
import KassagaKirish from "../sections/kassaPanel/Kassa_yuklash_ornatish";
import KassaVersions from "../sections/kassaPanel/cassaversions";
import KassadaSotish from "../sections/kassaPanel/kassadaSotish";
import KassadaQaytarish from "../sections/kassaPanel/kassadaQaytarish";
import KassaSozlamalari from "../sections/kassaPanel/kassaSozlamalari";
import SixronizationError from "../sections/kassaPanel/sixronizationError";

/* 🖨️ Qurilmalar */
import BarcodePrinter from "../sections/qurilmalar/barcodeprinter";
import CheckPrinter from "../sections/qurilmalar/checkprinter";
import TaroziQurilma from "../sections/qurilmalar/tarozi";

/* ❓ Savollar */
import Savollar_Inventarizatsiya from "../sections/savollar/inventarizatsiya";
import CheckChiqmayabdi from "../sections/savollar/checkchiqmayabdi";
import TolovQilish from "../sections/savollar/tolovqilish";

/* 🧩 Quiz */
import QuizCom from "../sections/Quiz/QuizCom";

/* ─── ROUTE XARITASI ─── */
const ROUTES = [
  /* Home */
  { path: "/kirish", Component: Kirish },
  { path: "/home/about", Component: AboutIdokon },
  { path: "/home/using", Component: UsingIdokon },
  { path: "/home/news", Component: NewsSection },

  /* Admin */
  { path: "/admin/adminga-kirish", Component: AdmingaKirish },
  { path: "/admin/mahsulot-qabul", Component: MahsulotQabulQilish },
  { path: "/admin/buyurtmalar-sd", Component: BuyurtmalarSD },
  { path: "/admin/inventarizatsiya", Component: Inventarizatsiya },
  { path: "/admin/nomenklatura-qayta-narx-tarix", Component: Nomenklatura },
  { path: "/admin/guruhlash", Component: Guruhlash },
  { path: "/admin/mahsulot-kochir", Component: MahsulotKochir },
  { path: "/admin/tarozi", Component: TaroziAdmin },
  { path: "/admin/cheklar", Component: Cheklar },
  { path: "/admin/bildirishnomalar", Component: Bildirishnomalar },

  /* Kassa */
  { path: "/kassa/yuklash-ornatish", Component: KassagaKirish },
  { path: "/kassa/versiyalar", Component: KassaVersions },
  { path: "/kassa/sotish", Component: KassadaSotish },
  { path: "/kassa/qaytarish", Component: KassadaQaytarish },
  { path: "/kassa/sozlamalar", Component: KassaSozlamalari },
  { path: ROUTE_PATHS.kassaSinxronizationError, Component: SixronizationError },

  /* Qurilmalar */
  { path: "/qurilmalar/barcode", Component: BarcodePrinter },
  { path: "/qurilmalar/check", Component: CheckPrinter },
  { path: "/qurilmalar/tarozi", Component: TaroziQurilma },

  /* Savollar */
  { path: "/savollar/inventarizatsiya", Component: Savollar_Inventarizatsiya },
  { path: "/savollar/checkproblem", Component: CheckChiqmayabdi },
  { path: "/savollar/tolov", Component: TolovQilish },

  /* Quiz */
  { path: "/test", Component: QuizCom },
];

/* ─── BREADCRUMB ─── */
function Breadcrumb({ isDarkMode }) {
  const location = useLocation();

  const getBreadcrumbs = () => {
    const root = { name: "IDOKON Docs", path: "/", icon: "fa-book" };
    const crumbs = [root];

    if (location.pathname === "/" || location.pathname === "") return crumbs;

    for (const link of NAV_LINKS) {
      /* Direct link */
      if (
        link.path &&
        (location.pathname === link.path ||
          location.pathname.startsWith(link.path + "/"))
      ) {
        crumbs.push({
          name: link.name,
          path: link.path,
          icon: BREADCRUMB_ICONS[link.name] ?? null,
        });
        break;
      }

      /* Submenu */
      if (link.submenu) {
        const sub = link.submenu.find(
          (s) =>
            location.pathname === s.path ||
            location.pathname.startsWith(s.path + "/"),
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
  };

  const breadcrumbs = getBreadcrumbs();
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

/* ─── ASOSIY KOMPONENT ─── */
export default function AllInOne({ isDarkMode }) {
  const location = useLocation();

  const match = ROUTES.find(
    (r) =>
      location.pathname === r.path ||
      location.pathname.startsWith(r.path + "/"),
  );

  const PageComponent = match
    ? match.Component
    : location.pathname === "/" || location.pathname === ""
      ? Kirish
      : () => (
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
