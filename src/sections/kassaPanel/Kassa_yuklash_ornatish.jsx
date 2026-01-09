import React from "react";
import TelegramPost from "../../components/layouts/TelegramPost";

const KassagaKirish = () => {
  const YT_VIDEO_ID = "3M2FNgUvKq0";
  const YT_URL = `https://www.youtube.com/watch?v=${YT_VIDEO_ID}`;
  const YT_PLAYLIST_URL =
    "https://www.youtube.com/playlist?list=PLNt3xrjLbs_hfUO2_2sN3lsaMAvtMmADq";
  const CassaVersionURL = "https://github.com/tulqinjon2001/Idokon-course/releases/download/idokonkassa1.2.2/Idokon1.2.3.x64.2.exe"

  const KASSA_URL = "https://example.com/downloads/IDOKON-Kassa-setup.exe";
  const MANUAL_URL = "https://example.com/docs/IDOKON-kassa-manual.pdf";

  const steps = [
    {
      icon: "💻",
      text: "Kompyuteringizda «IDOKON Kassa» dasturini ishga tushiring.",
    },
    {
      icon: "🔑",
      text: "Admin panelda yaratilgan kassir login va parolini kiriting.",
    },
    { icon: "🧾", text: "Login to'g'ri bo'lsa, kassa asosiy oynasi ochiladi." },
    {
      icon: "🛒",
      text: "Sotuv, to'lov va chek chiqarish amallarini bajaring.",
    },
    {
      icon: "⚠️",
      text: "Xatolik bo'lsa, login/parolni tekshiring yoki administratorga murojaat qiling.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg sm:rounded-lg md:rounded-xl shadow-md space-y-6 sm:space-y-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
        Kassaga kirish
      </h2>

      {/* YouTube video embed + fallback link */}
      <div className="bg-slate-100 rounded-lg p-3 sm:p-4 md:p-6">
        <div className="w-full max-w-2xl mx-auto aspect-video overflow-hidden rounded-lg">
          <iframe
            title="IDOKON kassa ko'rsatma video"
            src={`https://www.youtube.com/embed/${YT_VIDEO_ID}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            aria-label="IDOKON kassaga kirish video"
          />
        </div>

        {/* Qo'shimcha havolalar */}
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
            className="inline-block px-4 sm:px-5 py-2 sm:py-3 bg-primary-100 text-primary-700 rounded-md text-sm sm:text-base hover:bg-primary-200 transition text-center"
            aria-label="Playlistni ochish"
          >
            Playlistni ko'rish
          </a>
        </div>
      </div>

      {/* Yuklab olish va qo'llanma tugmalari */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          href={CassaVersionURL}
          download
          className="px-4 sm:px-5 py-3 bg-primary-600 text-white rounded-md text-sm sm:text-base hover:bg-primary-700 transition text-center font-medium"
          aria-label="IDOKON Kassa dasturini yuklab olish"
        >
          Kassani yuklab olish
        </a>

        <a
          href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Qollanmalar/Idokon.kassani.yuklab.olish.o.rnatish.va.kirish.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-5 py-3 bg-primary-600 text-white rounded-md text-sm sm:text-base hover:bg-primary-700 transition text-center font-medium"
          aria-label="IDOKON kassa qo'llanmasini PDF formatida ochish"
        >
          Qo'llanmani ochish (PDF)
        </a>
      </div>

      {/* Qadam-baqadam yo'riqnoma */}
      <section className="space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800">
          📋 Kassaga kirish bo'yicha yo'riqnoma
        </h3>
        <ol
          className="list-decimal list-inside space-y-2 text-slate-700 text-sm sm:text-base"
          aria-label="kassa qadamlar"
        >
          {steps.map((s, i) => (
            <li key={i} className="flex gap-2">
              <span className="flex-shrink-0" aria-hidden="true">
                {s.icon}
              </span>
              <span className="flex-1">{s.text}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default KassagaKirish;
