import React from "react";

const Inventarizatsiya = () => {
  const YT_VIDEO_ID = "4vBQCT6g528";
  const YT_URL = `https://www.youtube.com/watch?v=${YT_VIDEO_ID}`;
  const YT_PLAYLIST_URL = "https://www.youtube.com/playlist?list=PLNt3xrjLbs_jFOZW4S8WFBXG-i-DHhqWe";

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Video qo'llanma */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Video qo'llanma</h3>
        <div className="bg-slate-100 rounded-lg p-3 sm:p-4">
          <div className="w-full aspect-video rounded-lg overflow-hidden">
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
          <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
            <a
              href={YT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 sm:px-5 py-2 sm:py-3 bg-primary-600 text-white rounded-md text-sm sm:text-base hover:bg-primary-700 transition text-center"
              aria-label="YouTube videoni yangi oynada ochish"
            >
              YouTube-da ochish
            </a>
            <a
              href={YT_PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 sm:px-5 py-2 sm:py-3 bg-slate-200 text-slate-800 rounded-md text-sm sm:text-base hover:bg-slate-300 transition text-center"
              aria-label="Playlistni ko'rish"
            >
              Playlistni ko'rish
            </a>
          </div>
        </div>
      </div>

      {/* Matnli qo'llanma */}
      <h2 className="text-2xl font-bold mb-4">Inventarizatsiya bo'limi</h2>

      <p className="mb-2">
        Inventarizatsiya — bu bo'lim ombordagi mavjud mahsulotlarning
        real holatini tekshirish, aniqlashtirish va kerak bo'lsa, mahsulot
        qoldiqlarini to'g'rilash uchun mo'ljallangan.
      </p>
      <p className="mb-4">
        Ushbu bo'lim, ayniqsa, ombor hisoboti bilan amaldagi mahsulot
        zaxiralari o'rtasidagi tafovutni aniqlashda va inventarizatsiya (qayta
        hisob) o'tkazishda muhim ahamiyatga ega.
      </p>

      <h3 className="text-xl font-semibold mb-2">Qanday ishlaydi?</h3>
      <p className="mb-4">
        Masalan, sizda qolgan "astatka" (noto'g'ri kirim qilingan yoki mavjud
        bo'lmagan) mahsulotlar bo'lsa, ularni 0 qilib chiqarish yoki nomini
        yangilash uchun quyidagi amallarni bajarasiz:
      </p>
      <ol className="list-decimal list-inside space-y-2 mb-4">
        <li>
          <b>Qo'shish tugmasini bosish</b> — "Inventarizatsiya" bo'limiga
          o'ting va yangi inventarizatsiya oynasini oching.
        </li>
      </ol>

      <h3 className="text-xl font-semibold mb-2">
        Inventarizatsiyalanmagan mahsulotlarni ko'rish
      </h3>
      <p className="mb-2">
        <b>"Inventarizatsiyalanmaganlar"</b> tugmasi yordamida hali qayta
        hisobdan o'tkazilmagan mahsulotlar ro'yxatini ko'rish mumkin.
      </p>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>Hali tekshirilmagan mahsulotlarni aniqlash</li>
        <li>Mahsulotni ro'yxatga qo'shib yangi miqdor kiritish</li>
        <li>E'tibordan chetda qolgan mahsulotlarni chiqarib tashlash</li>
      </ul>
    </div>
  );
};

export default Inventarizatsiya;
