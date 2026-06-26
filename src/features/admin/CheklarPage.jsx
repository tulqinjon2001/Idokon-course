import React from "react";
import { Link } from "react-router-dom";
import {
  Receipt,
  Search,
  Filter,
  Printer,
  Download,
  Calendar,
  CreditCard,
} from "lucide-react";
import VideoPlayer from "../../shared/components/media/VideoPlayer.jsx";
import { ROUTE_PATHS } from "../../shared/lib/routes.js";

const KASSA_PLAYLIST =
  "https://www.youtube.com/playlist?list=PLNt3xrjLbs_hfUO2_2sN3lsaMAvtMmADq";

const STEPS = [
  {
    icon: Receipt,
    color: "from-blue-500 to-blue-600",
    text: "Admin panel → 1-menyu → <strong>Cheklar</strong> bo'limiga kiring. Barcha sotuv cheklari ro'yxati ko'rsatiladi.",
  },
  {
    icon: Calendar,
    color: "from-purple-500 to-purple-600",
    text: "<strong>Sana oralig'ini</strong> tanlang — kunlik, haftalik yoki oylik hisobot uchun kerakli davrni belgilang.",
  },
  {
    icon: Filter,
    color: "from-green-500 to-green-600",
    text: "<strong>Filtr</strong> orqali kassir, savdo nuqtasi yoki to'lov turi (naqd, karta, qarz) bo'yicha cheklarni ajrating.",
  },
  {
    icon: Search,
    color: "from-orange-500 to-orange-600",
    text: "Chek raqami yoki mahsulot nomi bo'yicha <strong>qidiruv</strong>dan foydalanib kerakli chekni toping.",
  },
  {
    icon: Printer,
    color: "from-red-500 to-red-600",
    text: "Chek ustiga bosib <strong>batafsil ma'lumot</strong>ni ko'ring va kerak bo'lsa qayta chop eting.",
  },
  {
    icon: Download,
    color: "from-teal-500 to-teal-600",
    text: "Hisobot uchun cheklarni <strong>Excel yoki PDF</strong> formatida eksport qiling.",
  },
];

const FEATURES = [
  {
    title: "To'liq tarix",
    desc: "Har bir sotuv cheki saqlanadi: sana, vaqt, kassir, mahsulotlar va to'lov turi.",
  },
  {
    title: "Qayta chop etish",
    desc: "Mijoz chekini yo'qotgan bo'lsa, admin paneldan qayta chop etish mumkin.",
  },
  {
    title: "Moliyaviy nazorat",
    desc: "Kunlik tushum va kassirlar bo'yicha cheklarni solishtirib, farqlarni aniqlang.",
  },
];

export default function CheklarPage({ isDarkMode = false }) {
  const card = isDarkMode
    ? "bg-gray-800 border-gray-700 text-gray-100"
    : "bg-white border-primary-200 text-gray-900";
  const sub = isDarkMode ? "text-gray-400" : "text-gray-600";

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
      <section
        className={`group relative rounded-2xl shadow-xl border-2 p-6 sm:p-8 md:p-10 transition-all duration-300 overflow-hidden ${card}`}
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Receipt className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">
              Cheklar bo'limi
            </h1>
            <p className={`text-sm sm:text-base ${sub}`}>
              Barcha sotuv cheklarini ko'rish, filtrlash va hisobot olish
            </p>
          </div>
        </div>
      </section>

      <section className={`rounded-2xl shadow-xl border-2 p-6 sm:p-8 ${card}`}>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Video qo'llanma</h2>
        <VideoPlayer
          videoUrl="https://www.youtube.com/watch?v=1KtlORC-Te0"
          playlistUrl={KASSA_PLAYLIST}
          title="Kassada sotish va chek chiqarish"
          isDarkMode={isDarkMode}
        />
      </section>

      <section className={`rounded-2xl shadow-xl border-2 p-6 sm:p-8 ${card}`}>
        <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
          <CreditCard className="w-6 h-6 text-primary-600" />
          Ishlash tartibi
        </h2>
        <ol className="space-y-4">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={index}>
                <div
                  className={`flex items-start gap-4 p-5 rounded-xl border-l-4 border-primary-500 ${
                    isDarkMode ? "bg-gray-700/50" : "bg-gradient-to-r from-primary-50 to-primary-100/50"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-md`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex items-start gap-3 flex-1">
                    <Icon className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <p
                      className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
                      dangerouslySetInnerHTML={{ __html: step.text }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className={`rounded-2xl shadow-xl border-2 p-6 sm:p-8 ${card}`}>
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Asosiy imkoniyatlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className={`p-5 rounded-xl border-2 ${
                isDarkMode ? "border-gray-600 bg-gray-700/30" : "border-primary-100 bg-primary-50/50"
              }`}
            >
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className={`text-sm ${sub}`}>{item.desc}</p>
            </div>
          ))}
        </div>
        <p className={`mt-6 text-sm ${sub}`}>
          Chek chiqmayaptimi?{" "}
          <Link
            to={ROUTE_PATHS.savollarCheck}
            className="text-primary-600 hover:underline font-medium"
          >
            Savollar → Check chiqmayapti
          </Link>{" "}
          bo'limiga o'ting yoki{" "}
          <Link
            to={ROUTE_PATHS.qurilmalarCheck}
            className="text-primary-600 hover:underline font-medium"
          >
            Check printer sozlash
          </Link>{" "}
          qo'llanmasini ko'ring.
        </p>
      </section>
    </div>
  );
}
