import React from "react";

const DOC_ID = "1TuT6T_wz2hAUcH1wXurr5K5nIcgPwx2Y";
const DL_PDF = `https://docs.google.com/document/d/${DOC_ID}/export?format=pdf`;

export default function MahsulotQabulQilish() {
  const steps = [
    { icon: "➕", text: "Mahsulotlar → Qabul qilish bo‘limiga kiring va «Qo‘shish» tugmasini bosing. Yangi yuk xati (nakladnoy) ochiladi." },
    { icon: "🏪", text: "Savdo nuqtasini tanlang (qaysi do‘konga kirityapsiz — o‘shani belgilang)." },
    { icon: "🧾", text: "Ta’minotchini tanlang. Agar yo‘q bo‘lsa, yangi ta’minotchi yarating (nomi, telefon) va saqlang." },
    { icon: "💱", text: "Valyuta (so‘m yoki $) va to‘lov holatini (To‘langan/To‘lanmagan) kiriting. Kerak bo‘lsa qaytarish sanasini yozing." },
    { icon: "📦", text: "Mahsulot qo‘shing: shtrix-kod (yoki avtomatik), nomi, o‘lchov birligi, kategoriya." },
    { icon: "💾", text: "Pozitsiyalarni to‘ldirib «Saqlash → Tasdiqlash» bilan yakunlang." },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Mahsulotlar qabul qilish</h2>

      {/* Video tepada */}
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

      {/* 🔽 Faqat PDF yuklab olish tugmasi (ko‘rish/DOCX yo‘q) */}
      <div className="flex items-start justify-between gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg">
        <div>
          <div className="font-semibold text-slate-800">Qo‘llanma (PDF)</div>
          <div className="text-slate-600 text-sm">
            Hujjatni faqat PDF ko‘rinishda yuklab olishingiz mumkin.
          </div>
        </div>
        <a
          href={DL_PDF}
          className="px-4 py-2 rounded-md bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition"
          target="_blank"
          rel="noreferrer noopener"
          // download atributi cross-origin’da ba’zan e’tiborsiz qolinadi,
          // lekin PDF export linki baribir yuklab olishni ochadi:
          download
          title="PDF ko‘rinishda yuklab olish"
        >
          ⬇️ PDF-ni yuklab olish
        </a>
      </div>

      {/* Matn/yo‘riqnoma */}
      <p className="text-slate-600">
        Omborga kelgan tovarlarni yuk xati (nakladnoy) orqali tizimga kiritish bo‘limi. Quyidagi
        bosqichlarni ketma-ket bajaring.
      </p>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-800">📋 Qadam-baqadam yo‘riqnoma</h3>
        <ol className="list-decimal list-inside space-y-2 text-slate-700">
          {steps.map((s, i) => (
            <li key={i}>
              <span className="mr-2">{s.icon}</span>
              <span>{s.text}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
