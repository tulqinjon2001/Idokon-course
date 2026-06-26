import React from "react";
import { Link } from "react-router-dom";
import {
  Wallet,
  CreditCard,
  Banknote,
  Receipt,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import VideoPlayer from "../../shared/components/media/VideoPlayer.jsx";
import { ROUTE_PATHS } from "../../shared/lib/routes.js";

const PAYMENT_METHODS = [
  {
    icon: Banknote,
    title: "Naqd to'lov",
    color: "from-green-500 to-green-600",
    steps: [
      "Kassada mahsulotlarni skanerlang yoki qo'lda qo'shing.",
      "«To'lov» tugmasini bosing va <strong>Naqd</strong> usulini tanlang.",
      "Mijoz bergan summani kiriting — qaytim avtomatik hisoblanadi.",
      "Chek chop etiladi va sotuv yakunlanadi.",
    ],
  },
  {
    icon: CreditCard,
    title: "Karta orqali to'lov",
    color: "from-blue-500 to-blue-600",
    steps: [
      "To'lov usulidan <strong>Karta</strong> (Uzcard/Humo) ni tanlang.",
      "Terminal orqali to'lovni amalga oshiring.",
      "To'lov tasdiqlangach, chek avtomatik chiqadi.",
    ],
  },
  {
    icon: Wallet,
    title: "Qarzga sotish",
    color: "from-orange-500 to-orange-600",
    steps: [
      "Mijoz oldindan tizimga kiritilgan bo'lishi kerak.",
      "To'lov usulidan <strong>Qarz</strong> ni tanlang va mijozni tanlang.",
      "Qarz limiti yetarli ekanligini tekshiring.",
      "Sotuv yakunlangach, qarz balansi yangilanadi.",
    ],
  },
];

export default function TolovQilishPage({ isDarkMode = false }) {
  const card = isDarkMode
    ? "bg-gray-800 border-gray-700 text-gray-100"
    : "bg-white border-primary-200 text-gray-900";
  const sub = isDarkMode ? "text-gray-400" : "text-gray-600";

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
      <section className={`rounded-2xl shadow-xl border-2 p-6 sm:p-8 ${card}`}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Receipt className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold">
              Kassada to'lov qilish
            </h1>
            <p className={`text-sm sm:text-base mt-1 ${sub}`}>
              IDOKON Kassada naqd, karta va qarz orqali to'lov qilish tartibi
            </p>
          </div>
        </div>
      </section>

      <section className={`rounded-2xl shadow-xl border-2 p-6 sm:p-8 ${card}`}>
        <h2 className="text-xl font-bold mb-4">Video qo'llanma</h2>
        <VideoPlayer
          videoUrl="https://www.youtube.com/watch?v=1KtlORC-Te0"
          playlistUrl="https://www.youtube.com/playlist?list=PLNt3xrjLbs_hfUO2_2sN3lsaMAvtMmADq"
          title="Kassada sotish va to'lov"
          isDarkMode={isDarkMode}
        />
      </section>

      <section className={`rounded-2xl shadow-xl border-2 p-6 sm:p-8 ${card}`}>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-primary-600" />
          To'lov usullari
        </h2>
        <div className="space-y-6">
          {PAYMENT_METHODS.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.title}
                className={`p-5 rounded-xl border-l-4 border-primary-500 ${
                  isDarkMode ? "bg-gray-700/50" : "bg-primary-50/50"
                }`}
              >
                <h3 className="font-bold flex items-center gap-3 mb-4">
                  <span
                    className={`w-10 h-10 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </span>
                  {method.title}
                </h3>
                <ol className="space-y-2">
                  {method.steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-primary-600 text-white rounded-lg flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      <span
                        className={`text-sm sm:text-base leading-relaxed pt-0.5 ${sub}`}
                        dangerouslySetInnerHTML={{ __html: step }}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </section>

      <section
        className={`rounded-2xl shadow-xl border-2 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${card}`}
      >
        <div>
          <h2 className="font-bold mb-1">Boshqa qo'llanmalar</h2>
          <p className={`text-sm ${sub}`}>
            Kassani sozlash va sotuv jarayoni haqida batafsil ma'lumot
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to={ROUTE_PATHS.kassaSotish}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition"
          >
            Kassada sotish
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to={ROUTE_PATHS.kassaSozlamalar}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border-2 transition ${
              isDarkMode
                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                : "border-primary-200 text-primary-700 hover:bg-primary-50"
            }`}
          >
            Kassa sozlamalari
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
