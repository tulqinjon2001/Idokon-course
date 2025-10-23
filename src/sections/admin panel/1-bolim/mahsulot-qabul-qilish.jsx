import React from "react";

const DOC_ID = "1TuT6T_wz2hAUcH1wXurr5K5nIcgPwx2Y";
const DL_PDF = `https://docs.google.com/document/d/${DOC_ID}/export?format=pdf`;

export default function MahsulotQabulQilish() {
  const steps = [
    { icon: "➕", text: "Mahsulotlar → Qabul qilish bo'limiga kiring va «Qo'shish» tugmasini bosing. Yangi yuk xati (nakladnoy) ochiladi." },
    { icon: "🏪", text: "Savdo nuqtasini tanlang (qaysi do'konga kirityapsiz — o'shani belgilang)." },
    { icon: "🧾", text: "Ta'minotchini tanlang. Agar yo'q bo'lsa, yangi ta'minotchi yarating (nomi, telefon) va saqlang." },
    { icon: "💱", text: "Valyuta (so'm yoki $) va to'lov holatini (To'langan/To'lanmagan) kiriting. Kerak bo'lsa qaytarish sanasini yozing." },
    { icon: "📦", text: "Mahsulot qo'shing: shtrix-kod (yoki avtomatik), nomi, o'lchov birligi, kategoriya." },
    { icon: "💾", text: "Pozitsiyalarni to'ldirib «Saqlash → Tasdiqlash» bilan yakunlang." },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg sm:rounded-lg md:rounded-xl shadow-md space-y-6 sm:space-y-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
        Mahsulotlar qabul qilish
      </h2>

      {/* Video */}
      <div className="bg-slate-100 rounded-lg overflow-hidden aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/SYjh8fQv9_8?rel=0&modestbranding=1"
          title="IDOKON — Mahsulotlarni qabul qilish"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      {/* PDF yuklab olish tugmasi */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <div className="flex-1">
          <div className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">
            Qo'llanma (PDF)
          </div>
          <div className="text-slate-600 text-xs sm:text-sm mt-1">
            Hujjatni faqat PDF ko'rinishda yuklab olishingiz mumkin.
          </div>
        </div>
        <a
          href={DL_PDF}
          className="flex-shrink-0 px-4 sm:px-5 py-2 sm:py-3 rounded-md bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition text-center text-sm sm:text-base whitespace-nowrap"
          target="_blank"
          rel="noreferrer noopener"
          download
          title="PDF ko'rinishda yuklab olish"
        >
          ⬇️ PDF-ni yuklab olish
        </a>
      </div>

      {/* Matn/yo'riqnoma */}
      <p className="text-slate-600 text-sm sm:text-base">
        Omborga kelgan tovarlarni yuk xati (nakladnoy) orqali tizimga kiritish bo'limi. Quyidagi
        bosqichlarni ketma-ket bajaring.
      </p>

      {/* Qadam-baqadam yo'riqnoma */}
      <section className="space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800">
          📋 Qadam-baqadam yo'riqnoma
        </h3>
        <ol className="list-decimal list-inside space-y-2 sm:space-y-3 text-slate-700 text-xs sm:text-sm md:text-base">
          {steps.map((s, i) => (
            <li key={i} className="flex gap-2">
              <span className="flex-shrink-0">{s.icon}</span>
              <span className="flex-1">{s.text}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
