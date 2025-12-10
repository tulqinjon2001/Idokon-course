import React, { useState, useEffect } from "react";

const GuruhlashToplamAksiya = () => {
  const [expandedSections, setExpandedSections] = useState({
    guruhlash: false,
    toplam: false,
    aksiya: false,
    benefits: false,
  });
  const [isVisible, setIsVisible] = useState(false);

  // Video ID - foydalanuvchi o'zgartirishi mumkin
  const YT_VIDEO_ID = "YOUR_VIDEO_ID_HERE";
  const YT_URL = `https://www.youtube.com/watch?v=${YT_VIDEO_ID}`;
  const YT_PLAYLIST_URL = "https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID";
  const PDF_URL = "https://github.com/tulqinjon2001/Idokon-course/releases/download/Qollanmalar/Guruhlash-To.plam-Aksiya.pdf";

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
          Guruhlash, Toplam va Aksiya video qo'llanma
        </h3>
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${YT_VIDEO_ID}`}
              title="Guruhlash, Toplam va Aksiya video qo'llanma"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          {/* YouTube, Playlist va PDF tugmalari */}
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
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-red-600 text-white rounded-lg text-sm sm:text-base font-medium hover:bg-red-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 active:scale-95"
              aria-label="PDF qo'llanmani yuklab olish"
            >
              <span>📄</span>
              PDF qo'llanma yuklab olish
            </a>
          </div>
        </div>
      </div>

      {/* Matnli qo'llanma */}
      <div className="space-y-6">
        <div className="animate-slide-in-left">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 flex items-center gap-3">
            <span className="text-3xl">📦</span>
            Guruhlash, Toplam va Aksiya bo'limi
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 mb-6 border-l-4 border-primary-600 shadow-sm">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong className="text-slate-900">Guruhlash, Toplam va Aksiya</strong> — bu bo'lim mahsulotlarni
              guruhlash, toplamlar yaratish va aksiya tizimini boshqarish uchun mo'ljallangan
              kuchli vositalar to'plami.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Ushbu bo'lim orqali siz mahsulotlarni mantiqiy guruhlarga ajratishingiz,
              toplamlar yaratishingiz va aksiyalar tashkil qilishingiz mumkin. Bu sizga
              mahsulotlarni samarali tashkil etish va mijozlarga maxsus takliflar berish
              imkonini beradi.
            </p>
          </div>
        </div>

        {/* Guruhlash - Interactive Card */}
        <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slide-in-right">
          <button
            onClick={() => toggleSection("guruhlash")}
            className="w-full px-5 py-4 flex items-center justify-between bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
              <span className="text-2xl">🗂️</span>
              Guruhlash qanday ishlaydi?
            </h3>
            <span
              className={`text-2xl transition-transform duration-300 ${
                expandedSections.guruhlash ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expandedSections.guruhlash ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 py-4 bg-white">
              {/* Guruhlash nega kerak? */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span>❓</span>
                  Guruhlash nega kerak?
                </h4>
                <p className="text-slate-700 mb-3 leading-relaxed">
                  Ko'rinishi, hajmi va narxi bir xil lekin, <strong className="text-slate-900">shtrix kodi har xil</strong> bo'lgan mahsulotlarni guruhlab qo'yish orqali bu mahsulotning barcha turlarini <strong className="text-slate-900">bitta mahsulot sifatida boshqarish</strong> mumkin bo'ladi.
                </p>
                <p className="text-slate-700 mb-3 leading-relaxed">
                  Buning uchun mahsulotning bir turiga, qolgan turlari biriktirib qo'yiladi. Va u <strong className="text-slate-900">ota element</strong> deb ataladi.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-4">
                  <p className="text-slate-800 font-semibold mb-2 flex items-center gap-2">
                    <span>⚠️</span>
                    Muhim
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Guruhlangan mahsulotlarda <strong>qoldiq hisoboti</strong>, <strong>savdo hisoboti</strong>, <strong>mahsulot kelganlari</strong> va <strong>daromadni umumiy holda</strong> ko'ra olamiz.
                  </p>
                </div>
              </div>

              {/* Guruhlashni qanday amalga oshiramiz? */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span>🔧</span>
                  Guruhlashni qanday amalga oshiramiz?
                </h4>
                <ol className="list-decimal list-inside space-y-3 text-slate-700">
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Ota elementni kiritish</strong> — <strong>Mahsulotlar qabul qilish</strong> bo'limidan faqatgina ota elementni kiritib olamiz. Uni kiritish jarayonida:
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                      <li>Mahsulotning nomiga barcha turlari uchun bir xil nom beramiz</li>
                      <li>Shtrix kodiga ota elementning shtrix kodini yozamiz</li>
                      <li>Soniga barcha turlarining umumiy sonini yozamiz</li>
                      <li>Narxiga esa bittasining narxini yozib saqlab olamiz</li>
                    </ul>
                    <p className="text-sm mt-2 text-slate-600">Qolgan turlarini qo'shish shart emas, ularni Guruhlash bo'limidan ota elementga biriktiramiz.</p>
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Qo'shish tugmasini bosish</strong> — <strong>Guruhlash</strong> bo'limidan <strong>"Qo'shish"</strong> tugmasini bosamiz.
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Ota elementni tanlash</strong> — Chap tomondagi izlash orqali ota elementning shtrix kodini scanner qilish orqali yoki nomini yozish orqali topib olamiz.
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Bola elementlarni tanlash</strong> — Ota elementni tanlaganimizdan so'ng, o'ng tomondagi izlash qismi aktivlashadi. U joyga mahsulotning qolgan turlarini scanner qilib chiqamiz.
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Saqlash</strong> — <strong>"Saqlash"</strong> tugmasini bosamiz. Bu mahsulot muvaffaqiyatli guruhlandi.
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Kassa sozlamalarini yoqish</strong> — Kassada oxirgi sozlamalarni amalga oshirganimizdan so'ng bola elementlarni sotishimiz mumkin bo'ladi. Buning uchun kassaning sozlamalar bo'limidan <strong>"1.9 Mahsulotlarni guruhlash"</strong> ni yoqib qo'yamiz. Shundan keyin savdo qilishimiz mumkin.
                  </li>
                </ol>
              </div>

              {/* Guruhlangan mahsulotlar ro'yxati */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <span>📋</span>
                  Guruhlangan mahsulotlar ro'yxati
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Yuqoridagi amallarni bajarganimizdan so'ng bizda <strong>Guruhlash</strong> bo'limimizda guruhlangan mahsulotlar ro'yxati paydo bo'ladi. Uni istalgan vaqt <strong>qalamchani bosish</strong> orqali tahrirlashimiz mumkin, yoki <strong>x ni bosish</strong> orqali o'chirishimiz mumkin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Toplam - Interactive Card */}
        <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <button
            onClick={() => toggleSection("toplam")}
            className="w-full px-5 py-4 flex items-center justify-between bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
              <span className="text-2xl">📦</span>
              Toplam yaratish va boshqarish
            </h3>
            <span
              className={`text-2xl transition-transform duration-300 ${
                expandedSections.toplam ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expandedSections.toplam ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 py-4 bg-white">
              {/* To'plam tushunchasi */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span>💡</span>
                  To'plam tushunchasi
                </h4>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-lg">
                  <p className="text-slate-700 leading-relaxed mb-2">
                    <strong className="text-slate-900">Bir nechta mahsulotdan qo'shib yangi mahsulot hosil qilish</strong> IDOKONda to'plam deyiladi.
                  </p>
                  <p className="text-slate-600 text-sm">
                    <strong>Misol:</strong> Choynak, 6 ta payola, 2 ta likopcha, 6 ta qoshiq va pichoqni yig'ib <strong>"Oshxona idishlar to'plami"</strong> deyish mumkin. Bu mahsulotlar alohida ham sotiladi, yig'ib ham sotiladi.
                  </p>
                </div>
              </div>

              {/* To'plam yaratish */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span>➕</span>
                  To'plam yaratish
                </h4>
                <p className="text-slate-700 mb-3 leading-relaxed">
                  To'plam yaratish uchun <strong className="text-slate-900">Admin panelning 4-menusidagi "Mahsulotlar"</strong> bo'limidan yangi mahsulot yaratamiz.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 ml-2">
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Nomini yozamiz</strong> — to'plam uchun tushunarli nom kiriting (masalan: "Oshxona idishlar to'plami").
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Shtrix kod beramiz</strong> — to'plam uchun alohida shtrix kod yaratamiz.
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Belgilarni yoqamiz</strong> — 
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                      <li><strong>Mahsulot kirim</strong> — belgilab qo'yamiz</li>
                      <li><strong>Mahsulot faolligi</strong> — belgilab qo'yamiz</li>
                      <li><strong>To'plam</strong> — belgilab qo'yamiz (muhim!)</li>
                    </ul>
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Saqlash</strong> — <strong>"Saqlash"</strong> tugmasini bosamiz.
                  </li>
                </ol>
              </div>

              {/* To'plamni yig'ish jarayoni */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span>🔧</span>
                  To'plamni yig'ish jarayoni
                </h4>
                <ol className="list-decimal list-inside space-y-3 text-slate-700">
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">To'plamlar bo'limiga kirish</strong> — Admin panelning <strong>1-menusidagi "To'plamlar"</strong> bo'limiga kiramiz.
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Qo'shish tugmasini bosish</strong> — <strong>"Qo'shish"</strong> tugmasini bosamiz.
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">To'plamni tanlash</strong> — Ochilgan oynadagi mahsulotlar qismidan kerakli to'plamni (naborni) tanlaymiz.
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Savdo nuqtasini belgilash</strong> — To'plam qaysi savdo nuqtasida yig'ilishini belgilaymiz.
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">To'plam uchun mahsulotlarni tanlash</strong> — O'ng tomondan to'plam uchun mahsulotlarni tanlab, ulardan nechta qo'shishimizni <strong>"soni"</strong> degan joyiga yozamiz.
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Narxlarni belgilash</strong> — 
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                      <li><strong>Sotish narxi</strong> — bu to'plamni endi qanchaga sotishimiz kerakligini yozamiz</li>
                      <li><strong>Ulgurji narxi</strong> — ulgurji narxini belgilaymiz</li>
                    </ul>
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Miqdorni belgilash</strong> — Bu to'plamdan biz nechta sotmoqchiligimizni belgilaymiz.
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Saqlash</strong> — Barcha ma'lumotlarni to'g'ri kiritganimizdan so'ng <strong>"Saqlash"</strong> tugmasini bosamiz.
                  </li>
                </ol>
              </div>

              {/* Muhim eslatma */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                <p className="text-slate-800 font-semibold mb-2 flex items-center gap-2">
                  <span>⚠️</span>
                  Muhim
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Bu to'plam ichidagi mahsulotlarni yig'ib saqlash bosilgandan so'ng uni <strong>tahrirlab bo'lmaydi</strong>. Shuning uchun e'tiborli bo'lishingizni so'rab qolamiz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Aksiya - Interactive Card */}
        <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slide-in-right">
          <button
            onClick={() => toggleSection("aksiya")}
            className="w-full px-5 py-4 flex items-center justify-between bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Aksiya tashkil qilish
            </h3>
            <span
              className={`text-2xl transition-transform duration-300 ${
                expandedSections.aksiya ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expandedSections.aksiya ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 py-4 bg-white">
              {/* IDOKONda aksiya tushunchasi */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span>💡</span>
                  IDOKONda aksiya tushunchasi
                </h4>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4 rounded-lg">
                  <p className="text-slate-700 leading-relaxed">
                    Bizda aksiya qaysidir mahsulotdan <strong className="text-slate-900">qanchadur miqdorda olganda</strong> unga <strong className="text-slate-900">boshqa turdagi mahsulot qo'shib berish</strong> nazarda tutiladi.
                  </p>
                  <p className="text-slate-600 text-sm mt-2">
                    Masalan: 3 ta mahsulot olganda, 1 ta boshqa mahsulot bepul yoki chegirmali narxda beriladi.
                  </p>
                </div>
              </div>

              {/* Aksiya yaratish jarayoni */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span>🚀</span>
                  Aksiya yaratish jarayoni
                </h4>
                <ol className="list-decimal list-inside space-y-3 text-slate-700">
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Aksiyalar bo'limiga kirish</strong> — Admin panelning <strong>1-menusidagi "Aksiyalar"</strong> bo'limiga kiramiz.
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Yangi aksiya yaratish</strong> — <strong>"Qo'shish"</strong> tugmasi orqali aksiya yaratamiz.
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Savdo nuqtasini tanlash</strong> — Aksiya qaysi savdo nuqtasida amal qilishini belgilaymiz.
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Aksiya mahsulotlarini tanlash</strong> — 
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                      <li><strong>1-mahsulotni tanlaymiz</strong> — undan qancha miqdorda olganda aksiya amal qilishini belgilaymiz</li>
                      <li><strong>Keyingi mahsulotni tanlaymiz</strong> — aksiyaga qancha miqdorda berishimizni yoqib qo'yamiz</li>
                    </ul>
                    <p className="text-sm mt-2 text-slate-600">
                      Masalan: 1-mahsulotdan 3 ta olganda, 2-mahsulotdan 1 ta bepul beriladi.
                    </p>
                  </li>
                  <li className="bg-slate-50 p-3 rounded-lg border-l-4 border-primary-500">
                    <strong className="text-slate-900">Saqlash</strong> — Barcha ma'lumotlarni to'g'ri kiritganimizdan so'ng <strong>"Saqlash"</strong> tugmasini bosamiz va aksiya muvaffaqiyatli yaratiladi.
                  </li>
                </ol>
              </div>

              {/* Muhim eslatma */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <span>ℹ️</span>
                  Qo'shimcha ma'lumot
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Aksiya yaratilgandan so'ng, uni istalgan vaqt <strong>tahrirlash</strong> yoki <strong>o'chirish</strong> mumkin. Aksiya faollashtirilgandan keyin kassada avtomatik ravishda amal qiladi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Foydalari - Interactive Card */}
        <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <button
            onClick={() => toggleSection("benefits")}
            className="w-full px-5 py-4 flex items-center justify-between bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Bo'limning afzalliklari
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
                    <span>🗂️</span>
                    Tashkil etish
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Mahsulotlarni mantiqiy guruhlarga ajratish va tizimli boshqarish imkoniyati.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500 hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <span>📦</span>
                    Toplamlar
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Bir nechta mahsulotlarni birlashtirib, qulay takliflar yaratish imkoniyati.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <span>🎯</span>
                    Aksiyalar
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Mijozlarni jalb qilish va sotishni oshirish uchun aksiyalar tashkil qilish.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-lg border-l-4 border-cyan-500 hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <span>📈</span>
                    Sotish oshishi
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Toplamlar va aksiyalar orqali sotish ko'rsatkichlarini sezilarli darajada oshirish.
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

export default GuruhlashToplamAksiya;
