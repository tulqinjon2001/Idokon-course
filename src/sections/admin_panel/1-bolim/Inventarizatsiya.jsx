import React, { useState, useEffect } from "react";

const Inventarizatsiya = () => {
  const [expandedSections, setExpandedSections] = useState({
    howItWorks: false,
    uninventoried: false,
    benefits: false,
  });
  const [isVisible, setIsVisible] = useState(false);

  const YT_VIDEO_ID = "4vBQCT6g528";
  const YT_URL = `https://www.youtube.com/watch?v=${YT_VIDEO_ID}`;
  const YT_PLAYLIST_URL = "https://www.youtube.com/playlist?list=PLNt3xrjLbs_jFOZW4S8WFBXG-i-DHhqWe";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div
      className={`p-6 bg-white rounded-lg shadow-md transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Video qo'llanma */}
      <div className="mb-8 animate-fade-in">
        <h3 className="text-xl font-semibold mb-4 text-slate-800 flex items-center gap-2">
          <span className="text-2xl">📹</span>
          Inventarizatsiya video qo'llanma
        </h3>
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${YT_VIDEO_ID}`}
              title="Inventarizatsiya video qo'llanma"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          {/* YouTube va Playlist tugmalari */}
          <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href={YT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary-600 text-white rounded-lg text-sm sm:text-base font-medium hover:bg-primary-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 active:scale-95"
              aria-label="YouTube videoni yangi oynada ochish"
            >
              <span>▶️</span>
              YouTube-da ochish
            </a>
            <a
              href={YT_PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-200 text-slate-800 rounded-lg text-sm sm:text-base font-medium hover:bg-slate-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300 active:scale-95"
              aria-label="Playlistni ko'rish"
            >
              <span>📋</span>
              Playlistni ko'rish
            </a>
          </div>
        </div>
      </div>

      {/* Matnli qo'llanma */}
      <div className="space-y-6">
        <div className="animate-slide-in-left">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 flex items-center gap-3">
            <span className="text-3xl">📦</span>
            Inventarizatsiya bo'limi
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 mb-6 border-l-4 border-primary-600 shadow-sm">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong className="text-slate-900">Inventarizatsiya</strong> — bu ombordagi mavjud mahsulotlarning
              haqiqiy holatini tekshirish, aniqlashtirish va kerak bo'lganda
              mahsulot qoldiqlarini to'g'rilash uchun mo'ljallangan kuchli vosita.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Ushbu bo'lim ombor hisoboti bilan amaldagi mahsulot zaxiralari
              o'rtasidagi farqni aniqlashda va inventarizatsiya (qayta hisob)
              o'tkazishda muhim ahamiyatga ega. Bu sizga omboringizning to'liq
              va aniq holatini nazorat qilish imkonini beradi.
            </p>
          </div>
        </div>

        {/* Qanday ishlaydi - Interactive Card */}
        <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slide-in-right">
          <button
            onClick={() => toggleSection("howItWorks")}
            className="w-full px-5 py-4 flex items-center justify-between bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
              <span className="text-2xl">⚙️</span>
              Qanday ishlaydi?
            </h3>
            <span
              className={`text-2xl transition-transform duration-300 ${
                expandedSections.howItWorks ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expandedSections.howItWorks ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 py-4 bg-white">
              <p className="text-slate-700 mb-4 leading-relaxed">
                Masalan, sizda qolgan <strong>"astatka"</strong> (noto'g'ri kirim qilingan yoki mavjud
                bo'lmagan) mahsulotlar bo'lsa, ularni 0 qilib chiqarish yoki nomini
                yangilash uchun quyidagi amallarni bajarasiz:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-slate-700">
                <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                  <strong className="text-slate-900">Qo'shish tugmasini bosish</strong> — "Inventarizatsiya" bo'limiga
                  o'ting va yangi inventarizatsiya oynasini oching.
                </li>
                <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                  <strong className="text-slate-900">Mahsulotni tanlash</strong> — ro'yxatdan kerakli mahsulotni toping va tanlang.
                </li>
                <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                  <strong className="text-slate-900">Haqiqiy miqdorni kiritish</strong> — omborda mavjud bo'lgan haqiqiy miqdorni kiriting.
                </li>
                <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                  <strong className="text-slate-900">Saqlash</strong> — ma'lumotlarni saqlang va inventarizatsiyani yakunlang.
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Inventarizatsiyalanmagan mahsulotlar - Interactive Card */}
        <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <button
            onClick={() => toggleSection("uninventoried")}
            className="w-full px-5 py-4 flex items-center justify-between bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
              <span className="text-2xl">🔍</span>
              Inventarizatsiyalanmagan mahsulotlarni ko'rish
            </h3>
            <span
              className={`text-2xl transition-transform duration-300 ${
                expandedSections.uninventoried ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expandedSections.uninventoried ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 py-4 bg-white">
              <p className="text-slate-700 mb-4 leading-relaxed">
                <strong className="text-slate-900">"Inventarizatsiyalanmaganlar"</strong> tugmasi yordamida hali qayta
                hisobdan o'tkazilmagan mahsulotlar ro'yxatini ko'rish mumkin. Bu sizga
                qaysi mahsulotlar hali tekshirilmaganini tezda aniqlash imkonini beradi.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors duration-200">
                  <strong className="text-slate-900">Hali tekshirilmagan mahsulotlarni aniqlash</strong> — ro'yxatdan qaysi mahsulotlar hali inventarizatsiyadan o'tkazilmaganini ko'ring.
                </li>
                <li className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors duration-200">
                  <strong className="text-slate-900">Mahsulotni ro'yxatga qo'shib yangi miqdor kiritish</strong> — tekshirilmagan mahsulotni tanlab, haqiqiy miqdorni kiriting.
                </li>
                <li className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors duration-200">
                  <strong className="text-slate-900">E'tibordan chetda qolgan mahsulotlarni chiqarib tashlash</strong> — mavjud bo'lmagan yoki noto'g'ri kiritilgan mahsulotlarni tizimdan olib tashlang.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Foydalari - Interactive Card */}
        <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slide-in-right">
          <button
            onClick={() => toggleSection("benefits")}
            className="w-full px-5 py-4 flex items-center justify-between bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Inventarizatsiyaning afzalliklari
            </h3>
            <span
              className={`text-2xl transition-transform duration-300 ${
                expandedSections.benefits ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expandedSections.benefits ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 py-4 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500 hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <span>📊</span>
                    Aniqlik
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Ombordagi mahsulotlarning haqiqiy holatini aniq bilish va nazorat qilish.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500 hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <span>⚡</span>
                    Tezlik
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Inventarizatsiyalanmagan mahsulotlarni tezda topish va ular bilan ishlash.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <span>🔧</span>
                    To'g'rilash
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Noto'g'ri kiritilgan yoki mavjud bo'lmagan mahsulotlarni tizimdan olib tashlash.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-lg border-l-4 border-cyan-500 hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <span>📈</span>
                    Hisobot
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Ombordagi mahsulotlar holati haqida to'liq va aniq hisobot olish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Inventarizatsiya;
