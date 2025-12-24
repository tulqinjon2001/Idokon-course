import React from "react";
import {
  Monitor,
  Smartphone,
  ExternalLink,
  Play,
  Lightbulb,
} from "lucide-react";

/* Extract YouTube video ID from URL */
function extractVideoId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.slice(1);
    }
    if (u.pathname.includes("/shorts/")) {
      return u.pathname.split("/shorts/")[1];
    }
    const v = u.searchParams.get("v");
    if (v) return v;
  } catch {
    // URL parsing failed, return original
  }
  return url;
}

/* Qayta ishlatiladigan bo'lim (matn + video yonma-yon) */
function Section({
  title,
  steps = [],
  note,
  videoUrl,
  vertical,
  playlistUrl,
  icon,
  color,
}) {
  const videoId = extractVideoId(videoUrl);
  const embed = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  const IconComponent = icon;

  return (
    <section className="group relative bg-gradient-to-br from-white via-primary-50/20 to-white rounded-2xl shadow-xl border-2 border-primary-200 p-6 sm:p-8 md:p-10 hover:border-primary-300 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 sm:mb-8">
        <div
          className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
        >
          <IconComponent className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
        {/* Matn qismi */}
        <div className="space-y-4 order-2 lg:order-1">
          {steps.length > 0 && (
            <div className="space-y-3">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl border-l-4 border-primary-500 hover:shadow-md transition-all group/item"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-md group-hover/item:scale-110 transition-transform">
                    {i + 1}
                  </span>
                  <div
                    className="text-gray-800 text-sm sm:text-base leading-relaxed flex-1 pt-0.5"
                    dangerouslySetInnerHTML={{ __html: s }}
                  />
                </div>
              ))}
            </div>
          )}

          {note && (
            <div className="relative group/note">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl blur opacity-20 group-hover/note:opacity-30 transition-opacity"></div>
              <div className="relative p-4 sm:p-5 bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-md">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <div className="font-bold text-yellow-800 text-sm sm:text-base">
                    Eslatma
                  </div>
                </div>
                <div className="text-yellow-900 text-xs sm:text-sm leading-relaxed">
                  {note}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Video qismi */}
        <div className="w-full order-1 lg:order-2 space-y-4">
          <div className="relative group/video">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-xl opacity-30 group-hover/video:opacity-50 transition-opacity`}
            ></div>
            <div
              className={`relative ${
                vertical
                  ? "mx-auto w-full max-w-xs sm:max-w-sm bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                  : "w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              }`}
            >
              <div
                className={
                  vertical ? "aspect-[9/16] w-full" : "aspect-video w-full"
                }
              >
                <iframe
                  className="w-full h-full rounded-lg"
                  src={embed}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>

          {/* YouTube and Playlist buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {videoUrl && (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105"
                aria-label="YouTube videoni yangi oynada ochish"
              >
                <Play className="w-4 h-4" />
                <span>YouTube-da ochish</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </a>
            )}
            {playlistUrl && (
              <a
                href={playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 font-semibold rounded-xl border-2 border-primary-300 shadow-md hover:shadow-lg hover:from-primary-200 hover:to-primary-300 transition-all duration-300 transform hover:scale-105"
                aria-label="Playlistni ko'rish"
              >
                <span>Playlistni ko'rish</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const AdmingaKirish = () => {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 px-4 sm:px-6 md:px-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 shadow-lg">
          <Monitor className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Admin panelga kirish
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Kompyuter yoki mobil qurilma orqali admin panelga kirish bo'yicha
          qo'llanma
        </p>
      </div>

      {/* 1) Kompyuter orqali kirish */}
      <Section
        title="Kompyuter orqali kirish"
        icon={Monitor}
        color="from-blue-500 to-blue-600"
        steps={[
          "Kompyuteringizda <b>Google Chrome</b>ni oching.",
          ` <a class="text-primary-600 hover:text-primary-700 font-semibold underline decoration-2 underline-offset-2 transition-colors" href="https://my.idokon.uz" target="_blank" rel="noreferrer">my.idokon.uz</a> manziliga kiring.`,
          "Ro'yxatdan o'tishda tanlagan <b>login</b> va <b>parol</b>ni kiriting.",
          "Kirgandan so'ng boshqaruv oynasi (Admin panel) ochiladi.",
        ]}
        note="Parolni unutib qo'ysangiz, 'Kalit so'zni unutdingizmi?' yozuviga bosish orqali qayta tiklash mumkin."
        videoUrl="https://www.youtube.com/watch?v=waknksArg8E&list=PLNt3xrjLbs_hfUO2_2sN3lsaMAvtMmADq&index=2"
        vertical={false}
      />

      {/* 2) Telefon orqali kirish */}
      <Section
        title="Telefon (mobil) orqali kirish"
        icon={Smartphone}
        color="from-purple-500 to-purple-600"
        steps={[
          "Telefoningizda <b>Chrome (Android)</b> yoki <b>Safari (iOS)</b>ni oching.",
          ` <a class="text-primary-600 hover:text-primary-700 font-semibold underline decoration-2 underline-offset-2 transition-colors" href="https://my.idokon.uz" target="_blank" rel="noreferrer">my.idokon.uz</a> manziliga kiring va login/parolni kiriting.`,
          "<b>iOS (Safari)</b>: Share → <b>Add to Home Screen</b> — tezkor kirish uchun.",
          "<b>Android (Chrome)</b>: ⋮ menyu → <b>Add to Home screen</b>.",
          "Jadval/keng oynalar to'liq ko'rinmasa, Chrome'da <b>⋮ → Desktop site</b> ni yoqing.",
        ]}
        videoUrl="https://youtube.com/shorts/e3XINvIcwOs"
        vertical={true}
      />
    </div>
  );
};

export default AdmingaKirish;
