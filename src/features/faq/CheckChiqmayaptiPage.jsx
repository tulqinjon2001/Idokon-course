import React from "react";
import { Link } from "react-router-dom";
import {
  Printer,
  AlertTriangle,
  Cable,
  Settings,
  RefreshCw,
  HelpCircle,
} from "lucide-react";
import VideoPlayer from "../../shared/components/media/VideoPlayer.jsx";
import { ROUTE_PATHS } from "../../shared/lib/routes.js";

const CHECKLIST = [
  {
    icon: Cable,
    title: "Printer ulanganligini tekshiring",
    steps: [
      "USB kabel yoki tarmoq (LAN) ulanishi mustahkam ekanligiga ishonch hosil qiling.",
      "Printer yoqilgan va qog'oz borligini tekshiring.",
      "Boshqa dastur printerdan foydalanmayotganiga qarang.",
    ],
  },
  {
    icon: Settings,
    title: "Kassa sozlamalarini tekshiring",
    steps: [
      "IDOKON Kassa → Sozlamalar → Printer bo'limiga kiring.",
      "To'g'ri printer modeli tanlanganligini tekshiring.",
      "Test chek chop etishni sinab ko'ring.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Drayver va dasturni qayta ishga tushiring",
    steps: [
      "Printer drayveri o'rnatilgan bo'lishi kerak (XPrinter yoki mos drayver).",
      "Kassa dasturini yopib, qayta oching.",
      "Kerak bo'lsa kompyuterni qayta yuklang.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Sinxronizatsiya xatolarini tekshiring",
    steps: [
      "Agar chek chiqsa, lekin ma'lumotlar saqlanmasa — internet aloqasini tekshiring.",
      "Sinxronizatsiya xatolari bo'lsa, SQLiteViewer yordamida loglarni ko'ring.",
    ],
  },
];

export default function CheckChiqmayaptiPage({ isDarkMode = false }) {
  const card = isDarkMode
    ? "bg-gray-800 border-gray-700 text-gray-100"
    : "bg-white border-primary-200 text-gray-900";
  const sub = isDarkMode ? "text-gray-400" : "text-gray-600";

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
      <section className={`rounded-2xl shadow-xl border-2 p-6 sm:p-8 ${card}`}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Printer className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold">
              Check chiqmayapti — nima qilish kerak?
            </h1>
            <p className={`text-sm sm:text-base mt-1 ${sub}`}>
              Chek printer va kassa sozlamalarini bosqichma-bosqich tekshiring
            </p>
          </div>
        </div>
      </section>

      <section className={`rounded-2xl shadow-xl border-2 p-6 sm:p-8 ${card}`}>
        <h2 className="text-xl font-bold mb-4">Printer sozlash videosi</h2>
        <VideoPlayer
          videoUrl="https://www.youtube.com/watch?v=LSZg_qKglKo"
          title="Check printerga ulanish"
          isDarkMode={isDarkMode}
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Check_printer/XPrinter.Driver.Setup.V7.77.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition"
          >
            Drayverni yuklab olish
          </a>
          <a
            href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Qollanmalar/Check.printerni.ulash.qo.llanmasi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2.5 rounded-lg text-sm font-medium border-2 transition ${
              isDarkMode
                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                : "border-primary-200 text-primary-700 hover:bg-primary-50"
            }`}
          >
            PDF qo'llanma
          </a>
          <Link
            to={ROUTE_PATHS.qurilmalarCheck}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium border-2 transition ${
              isDarkMode
                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                : "border-primary-200 text-primary-700 hover:bg-primary-50"
            }`}
          >
            To'liq printer qo'llanmasi →
          </Link>
        </div>
      </section>

      <section className={`rounded-2xl shadow-xl border-2 p-6 sm:p-8 ${card}`}>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-primary-600" />
          Tekshirish ro'yxati
        </h2>
        <div className="space-y-6">
          {CHECKLIST.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.title}
                className={`p-5 rounded-xl border-2 ${
                  isDarkMode ? "border-gray-600 bg-gray-700/30" : "border-primary-100"
                }`}
              >
                <h3 className="font-bold flex items-center gap-2 mb-3">
                  <Icon className="w-5 h-5 text-primary-600" />
                  {block.title}
                </h3>
                <ol className={`list-decimal list-inside space-y-2 text-sm sm:text-base ${sub}`}>
                  {block.steps.map((step) => (
                    <li key={step} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
        <p className={`mt-6 text-sm ${sub}`}>
          Sinxronizatsiya muammosi bo'lsa:{" "}
          <Link
            to={ROUTE_PATHS.kassaSinxronizationError}
            className="text-primary-600 hover:underline font-medium"
          >
            Kassa → Sinxronizatsiya xatolari
          </Link>
        </p>
      </section>
    </div>
  );
}
