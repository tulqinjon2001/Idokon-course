import React from "react";
import VideoSection from "../../../components/VideoSection";
import { Package, Search, Edit, Clock, TrendingUp, History } from "lucide-react";

function Nomenklatura() {
  const videoUrlNomenklatura = "https://www.youtube.com/watch?v=dptE4lRWTJA&list=PLNt3xrjLbs_hfUO2_2sN3lsaMAvtMmADq&index=12";
  const playlistUrlNomenklatura = "https://www.youtube.com/playlist?list=PLNt3xrjLbs_hfUO2_2sN3lsaMAvtMmADq";

  const stepsNomenklatura = [
    { 
      icon: Package, 
      color: "from-blue-500 to-blue-600",
      text: "Chap menyudan «Nomenklatura» bo'limiga o'ting — barcha mahsulotlar ro'yxati ochiladi." 
    },
    { 
      icon: Search, 
      color: "from-purple-500 to-purple-600",
      text: "Qidiruvdan foydalanib mahsulotning nomi yoki shtrix-kodi bo'yicha toping " 
    },
    { 
      icon: Edit, 
      color: "from-green-500 to-green-600",
      text: "Mahsulot kartasida nomi, o'lchov birligi, kategoriya va boshqa xususiyatlarni ko'rishingiz mumkin. Siz Nomenklatura orqali mahsulotnning narxlari, muddati va QQSini o'zgartira olasiz." 
    },
  ];

  const stepsQaytaNarxlash = [
    { 
      icon: Package, 
      color: "from-orange-500 to-orange-600",
      text: "«Qayta Narxlash» bo'limiga kiring va narxini o'rgartirmoqchi bo'lgan mahsulotni toping." 
    },
    { 
      icon: Edit, 
      color: "from-red-500 to-red-600",
      text: "Mahsulot kartasida «Qalamchani» bosing sotish va optom narxini o'zgartiring." 
    },
    { 
      icon: TrendingUp, 
      color: "from-indigo-500 to-indigo-600",
      text: "Amallardagi ro'yxat belgisini bossangiz bu mahsulotning narxi o'zgarish tarixini ko'rishingiz mumkin." 
    },
  ];

  const stepsTarix = [
    { 
      icon: History, 
      color: "from-cyan-500 to-cyan-600",
      text: "«Tarix» bo'limiga kiring — barcha narx o'zgarishlari ro'yxati ko'rsatiladi." 
    },
    { 
      icon: Search, 
      color: "from-pink-500 to-pink-600",
      text: "Mahsulot nomi yoki shtrix-kodi bo'yicha qidiruvdan foydalaning." 
    },
    { 
      icon: Clock, 
      color: "from-teal-500 to-teal-600",
      text: "Har bir o'zgarishda sana, vaqt, eski narx, yangi narxning o'zgarishini ko'rsatiladi." 
    },
    { 
      icon: TrendingUp, 
      color: "from-emerald-500 to-emerald-600",
      text: "Tarixdan foydalanib, narx o'zgarishlarini tahlil qiling va solishtiring." 
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-6">
      {/* Sarlavha */}
      <section className="group relative bg-gradient-to-br from-white via-primary-50/30 to-white rounded-2xl shadow-xl border-2 border-primary-200 p-6 sm:p-8 md:p-10 hover:border-primary-300 transition-all duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                Nomenklatura, Qayta narxlash va Tarix
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Mahsulotlarni boshqarish, qayta narxlash va narx o'zgarishlarini kuzatish bo'yicha to'liq qo'llanma
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Nomenklatura bo'limi */}
      <section className="group relative bg-gradient-to-br from-white via-primary-50/20 to-white rounded-2xl shadow-xl border-2 border-primary-200 p-6 sm:p-8 md:p-10 hover:border-primary-300 transition-all duration-300">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
            1
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
            Nomenklatura
          </h2>
        </div>

        {/* Video */}
        <div className="mb-6 sm:mb-8">
          <div className="relative group/video">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur-xl opacity-20 group-hover/video:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <VideoSection
                videoUrl={videoUrlNomenklatura}
                playlistUrl={playlistUrlNomenklatura}
                title="Nomenklatura"
              />
            </div>
          </div>
        </div>

        {/* Qadam-baqadam */}
        <div className="space-y-4 sm:space-y-5">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <Package className="w-4 h-4 text-white" />
            </div>
            Qadam-baqadam
          </h3>
          <ol className="space-y-3 sm:space-y-4">
            {stepsNomenklatura.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <li key={index} className="group/item">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl border-l-4 border-primary-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                    <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-md group-hover/item:scale-110 transition-transform`}>
                      {index + 1}
                    </div>
                    <div className="flex items-start gap-3 flex-1 pt-1">
                      <div className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium flex-1">
                        {step.text}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 2. Qayta narxlash bo'limi */}
      <section className="group relative bg-gradient-to-br from-white via-orange-50/20 to-white rounded-2xl shadow-xl border-2 border-orange-200 p-6 sm:p-8 md:p-10 hover:border-orange-300 transition-all duration-300">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
            2
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
            Qayta narxlash
          </h2>
        </div>

        {/* Qadam-baqadam */}
        <div className="space-y-4 sm:space-y-5">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Edit className="w-4 h-4 text-white" />
            </div>
            Qadam-baqadam
          </h3>
          <ol className="space-y-3 sm:space-y-4">
            {stepsQaytaNarxlash.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <li key={index} className="group/item">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                    <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-md group-hover/item:scale-110 transition-transform`}>
                      {index + 1}
                    </div>
                    <div className="flex items-start gap-3 flex-1 pt-1">
                      <div className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium flex-1">
                        {step.text}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 3. Tarix bo'limi */}
      <section className="group relative bg-gradient-to-br from-white via-cyan-50/20 to-white rounded-2xl shadow-xl border-2 border-cyan-200 p-6 sm:p-8 md:p-10 hover:border-cyan-300 transition-all duration-300">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-2xl flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
            3
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
            Tarix
          </h2>
        </div>

        {/* Qadam-baqadam */}
        <div className="space-y-4 sm:space-y-5">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <History className="w-4 h-4 text-white" />
            </div>
            Qadam-baqadam
          </h3>
          <ol className="space-y-3 sm:space-y-4">
            {stepsTarix.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <li key={index} className="group/item">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-cyan-50 to-cyan-100/50 rounded-xl border-l-4 border-cyan-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                    <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-md group-hover/item:scale-110 transition-transform`}>
                      {index + 1}
                    </div>
                    <div className="flex items-start gap-3 flex-1 pt-1">
                      <div className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium flex-1">
                        {step.text}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Nomenklatura;
