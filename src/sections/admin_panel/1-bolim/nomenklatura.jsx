import React from "react";
import VideoSection from "../../../components/VideoSection";

// YouTube URL → embed URL konvertatsiya
function toEmbed(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }
    if (u.pathname.includes("/shorts/")) {
      return `https://www.youtube.com/embed/${u.pathname.split("/shorts/")[1]}`;
    }
    const v = u.searchParams.get("v");
    if (v) return `https://www.youtube.com/embed/${v}`;
  } catch {}
  return url;
}

function Nomenklatura() {
  const videoUrlNomenklatura = "https://www.youtube.com/watch?v=dptE4lRWTJA&list=PLNt3xrjLbs_hfUO2_2sN3lsaMAvtMmADq&index=12";
  const playlistUrlNomenklatura = "https://www.youtube.com/playlist?list=PLNt3xrjLbs_hfUO2_2sN3lsaMAvtMmADq";

  const stepsNomenklatura = [
    { 
      icon: "📦", 
      text: "Chap menyudan «Nomenklatura» bo'limiga o'ting — barcha mahsulotlar ro'yxati ochiladi." 
    },
    { 
      icon: "🔎", 
      text: "Qidiruvdan foydalanib mahsulotning nomi yoki shtrix-kodi bo'yicha toping " 
    },
    { 
      icon: "✏️", 
      text: "Mahsulot kartasida nomi, o'lchov birligi, kategoriya va boshqa xususiyatlarni ko'rishingiz mumkin. Siz Nomenklatura orqali mahsulotnning narxlari, muddati va QQSini o'zgartira olasiz." 
    },
  ];

  const stepsQaytaNarxlash = [
    { 
      icon: "📦", 
      text: "«Qayta Narxlash» bo'limiga kiring va narxini o'rgartirmoqchi bo'lgan mahsulotni toping." 
    },
    { 
      icon: "✏️", 
      text: "Mahsulot kartasida «Qalamchani» bosing sotish va optom narxini o'zgartiring." 
    },
    { 
      icon: "📊", 
      text: "Amallardagi ro'yxat belgisini bossangiz bu mahsulotning narxi o'zgarish tarixini ko'rishingiz mumkin." 
    },
  ];

  const stepsTarix = [
    { 
      icon: "🕘", 
      text: "«Tarix» bo'limiga kiring — barcha narx o'zgarishlari ro'yxati ko'rsatiladi." 
    },
    { 
      icon: "🔍", 
      text: "Mahsulot nomi yoki shtrix-kodi bo'yicha qidiruvdan foydalaning." 
    },
    { 
      icon: "📅", 
      text: "Har bir o'zgarishda sana, vaqt, eski narx, yangi narxning o'zgarishini ko'rsatiladi." 
    },
    { 
      icon: "📈", 
      text: "Tarixdan foydalanib, narx o'zgarishlarini tahlil qiling va solishtiring." 
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8">
      {/* Sarlavha */}
      <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Nomenklatura, Qayta narxlash va Tarix
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Mahsulotlarni boshqarish, qayta narxlash va narx o'zgarishlarini kuzatish bo'yicha to'liq qo'llanma
        </p>
      </section>

      {/* 1. Nomenklatura bo'limi */}
      <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <span className="w-7 h-7 sm:w-8 sm:h-8 bg-primary-500 text-white rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
            1
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            Nomenklatura
          </h2>
        </div>

        {/* Video */}
        <div className="mb-4 sm:mb-6">
          <VideoSection
            videoUrl={videoUrlNomenklatura}
            playlistUrl={playlistUrlNomenklatura}
            title="Nomenklatura"
          />
        </div>

        {/* Qadam-baqadam */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            📋 Qadam-baqadam
          </h3>
          <ol className="space-y-2 sm:space-y-3">
            {stepsNomenklatura.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </span>
                <div className="flex items-start gap-2 pt-0.5">
                  <span className="text-lg">{step.icon}</span>
                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {step.text}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 2. Qayta narxlash bo'limi */}
      <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <span className="w-7 h-7 sm:w-8 sm:h-8 bg-primary-500 text-white rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
            2
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            Qayta narxlash
          </h2>
        </div>

        {/* Qadam-baqadam */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            📋 Qadam-baqadam
          </h3>
          <ol className="space-y-2 sm:space-y-3">
            {stepsQaytaNarxlash.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </span>
                <div className="flex items-start gap-2 pt-0.5">
                  <span className="text-lg">{step.icon}</span>
                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {step.text}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. Tarix bo'limi */}
      <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <span className="w-7 h-7 sm:w-8 sm:h-8 bg-primary-500 text-white rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
            3
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            Tarix
          </h2>
        </div>

        {/* Qadam-baqadam */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            📋 Qadam-baqadam
          </h3>
          <ol className="space-y-2 sm:space-y-3">
            {stepsTarix.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </span>
                <div className="flex items-start gap-2 pt-0.5">
                  <span className="text-lg">{step.icon}</span>
                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {step.text}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Nomenklatura;
