import React from "react";

const DOC_ID = "1TuT6T_wz2hAUcH1wXurr5K5nIcgPwx2Y";
const DL_PDF = `https://docs.google.com/document/d/${DOC_ID}/export?format=pdf`;

export default function MahsulotQabulQilish() {
  return (
    <div className="flex-1 w-full bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
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

      {/* PDF yuklab olish */}
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

      <p className="text-slate-600 text-sm sm:text-base">
        Omborga kelgan tovarlarni yuk xati (nakladnoy) orqali tizimga kiritish
        bo'limi. Quyidagi bosqichlarni ketma-ket bajaring.
      </p>

      {/* Qo‘llanma iframe */}
      <div className="w-full">
        <iframe
          src={`https://docs.google.com/document/d/${DOC_ID}/preview`}
          className="w-full rounded-lg border border-slate-300"
          style={{ minHeight: "80vh", height: "100%" }}
          title="Qo'llanma"
        />
      </div>
    </div>
  );
}
