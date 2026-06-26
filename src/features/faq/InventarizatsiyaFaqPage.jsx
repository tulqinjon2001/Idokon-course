import React from "react";
import { Link } from "react-router-dom";
import {
  HelpCircle,
  Package,
  AlertTriangle,
  CheckCircle2,
  Search,
  Save,
} from "lucide-react";
import VideoPlayer from "../../shared/components/media/VideoPlayer.jsx";
import { ROUTE_PATHS } from "../../shared/lib/routes.js";

const PROBLEMS = [
  {
    icon: Search,
    question: "Mahsulot ro'yxatda topilmayapti",
    answer:
      "Mahsulot nomi yoki shtrix-kodini to'g'ri kiritganingizga ishonch hosil qiling. Mahsulot boshqa omborda bo'lishi mumkin — admin paneldan ombor filtrini tekshiring.",
  },
  {
    icon: Package,
    question: "Haqiqiy miqdor va tizimdagi miqdor mos kelmayapti",
    answer:
      "Ombordagi haqiqiy sonni qayta sanab, inventarizatsiya oynasiga to'g'ri raqamni kiriting. Oldingi kirim-chiqim operatsiyalarini tekshiring.",
  },
  {
    icon: Save,
    question: "Saqlash tugmasi ishlamayapti",
    answer:
      "Barcha majburiy maydonlar to'ldirilganligini tekshiring. Internet aloqasi barqarorligini va admin panel sessiyasi tugamaganligini ko'ring.",
  },
  {
    icon: AlertTriangle,
    question: "Inventarizatsiyadan keyin qoldiq noto'g'ri ko'rsatilmoqda",
    answer:
      "Inventarizatsiyani yakunlaganingizdan so'ng sahifani yangilang. Muammo davom etsa, «Inventarizatsiyalanmaganlar» ro'yxatidan qolgan mahsulotlarni ham tekshiring.",
  },
];

const TIPS = [
  "Inventarizatsiyani ish vaqti tugaganda, do'kon yopilganda o'tkazing.",
  "Avval «Inventarizatsiyalanmaganlar» ro'yxatini ko'rib chiqing.",
  "Katta hajmdagi inventarizatsiyani bo'limlar bo'yicha qismlarga bo'ling.",
  "Yakunlagandan so'ng hisobotni Excelga eksport qilib saqlang.",
];

export default function InventarizatsiyaFaqPage({ isDarkMode = false }) {
  const card = isDarkMode
    ? "bg-gray-800 border-gray-700 text-gray-100"
    : "bg-white border-primary-200 text-gray-900";
  const sub = isDarkMode ? "text-gray-400" : "text-gray-600";

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
      <section className={`rounded-2xl shadow-xl border-2 p-6 sm:p-8 ${card}`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
            <HelpCircle className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold">
              Inventarizatsiya bo'yicha savollar
            </h1>
            <p className={`text-sm sm:text-base mt-1 ${sub}`}>
              Tez-tez uchraydigan muammolar va ularni hal qilish yo'llari
            </p>
          </div>
        </div>
        <p className={`leading-relaxed ${sub}`}>
          Batafsil qo'llanma uchun{" "}
          <Link
            to={ROUTE_PATHS.adminInventarizatsiya}
            className="text-primary-600 hover:underline font-medium"
          >
            Admin Panel → Inventarizatsiya
          </Link>{" "}
          bo'limiga o'ting.
        </p>
      </section>

      <section className={`rounded-2xl shadow-xl border-2 p-6 sm:p-8 ${card}`}>
        <h2 className="text-xl font-bold mb-4">Video qo'llanma</h2>
        <VideoPlayer
          videoUrl="https://www.youtube.com/watch?v=4vBQCT6g528"
          playlistUrl="https://www.youtube.com/playlist?list=PLNt3xrjLbs_jFOZW4S8WFBXG-i-DHhqWe"
          title="Inventarizatsiya video qo'llanma"
          isDarkMode={isDarkMode}
        />
      </section>

      <section className={`rounded-2xl shadow-xl border-2 p-6 sm:p-8 ${card}`}>
        <h2 className="text-xl font-bold mb-6">Tez-tez so'raladigan savollar</h2>
        <div className="space-y-4">
          {PROBLEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.question}
                className={`p-5 rounded-xl border-l-4 border-primary-500 ${
                  isDarkMode ? "bg-gray-700/50" : "bg-primary-50/50"
                }`}
              >
                <h3 className="font-bold flex items-center gap-2 mb-2">
                  <Icon className="w-5 h-5 text-primary-600" />
                  {item.question}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${sub}`}>
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className={`rounded-2xl shadow-xl border-2 p-6 sm:p-8 ${card}`}>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
          Foydali maslahatlar
        </h2>
        <ul className={`space-y-2 list-disc list-inside ${sub}`}>
          {TIPS.map((tip) => (
            <li key={tip} className="leading-relaxed">
              {tip}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
