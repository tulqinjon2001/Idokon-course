/**
 * AdmingaKirish — Admin panelga kirish qo'llanmasi
 *
 * Yaxshilanishlar:
 * ✅ VideoPlayer komponenti ishlatildi
 * ✅ isDarkMode prop qo'shildi
 * ✅ Dizayn yaxshilandi
 */

import React from "react";
import { Monitor, Smartphone, Lightbulb } from "lucide-react";
import VideoPlayer from "../../components/layouts/VideoPlayer";

/* ── Section komponenti ── */
function Section({ title, steps = [], note, videoUrl, playlistUrl, vertical, icon, color, isDarkMode }) {
  const IconComponent = icon;

  return (
    <section
      className={`rounded-2xl border-2 p-6 sm:p-8 md:p-10 transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-800 border-gray-700 hover:border-gray-600"
          : "bg-gradient-to-br from-white via-primary-50/20 to-white border-primary-200 hover:border-primary-300 shadow-xl"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 sm:mb-8">
        <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
          <IconComponent className="w-7 h-7 text-white" />
        </div>
        <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
          {title}
        </h2>
      </div>

      {/* Grid: matn va video */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
        {/* Matn */}
        <div className="space-y-4 order-2 lg:order-1">
          {steps.length > 0 && (
            <div className="space-y-3">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-4 rounded-xl border-l-4 border-primary-500 ${
                    isDarkMode
                      ? "bg-gray-700/50"
                      : "bg-gradient-to-r from-primary-50 to-primary-100/50"
                  }`}
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-md">
                    {i + 1}
                  </span>
                  <div
                    className={`text-sm sm:text-base leading-relaxed flex-1 pt-0.5 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
                    dangerouslySetInnerHTML={{ __html: s }}
                  />
                </div>
              ))}
            </div>
          )}

          {note && (
            <div className={`relative p-4 sm:p-5 rounded-xl border-2 ${
              isDarkMode
                ? "bg-yellow-900/20 border-yellow-700/50"
                : "bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-yellow-300"
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-md">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <span className={`font-bold text-sm sm:text-base ${isDarkMode ? "text-yellow-400" : "text-yellow-800"}`}>
                  Eslatma
                </span>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-yellow-200" : "text-yellow-900"}`}>
                {note}
              </p>
            </div>
          )}
        </div>

        {/* Video */}
        <div className="order-1 lg:order-2">
          <VideoPlayer
            videoUrl={videoUrl}
            title={title}
            vertical={vertical}
            playlistUrl={playlistUrl}
            isDarkMode={isDarkMode}
            accentColor={color}
          />
        </div>
      </div>
    </section>
  );
}

/* ── Asosiy komponent ── */
export default function AdmingaKirish({ isDarkMode = false }) {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-14">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 shadow-lg">
          <Monitor className="w-10 h-10 text-white" />
        </div>
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
          Admin panelga kirish
        </h1>
        <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Kompyuter yoki mobil qurilma orqali admin panelga kirish bo'yicha qo'llanma
        </p>
      </div>

      {/* Kompyuter orqali kirish */}
      <Section
        title="Kompyuter orqali kirish"
        icon={Monitor}
        color="from-blue-500 to-blue-600"
        isDarkMode={isDarkMode}
        steps={[
          "Kompyuteringizda <b>Google Chrome</b>ni oching.",
          `<a class="text-primary-500 hover:text-primary-400 font-semibold underline decoration-2 underline-offset-2 transition-colors" href="https://my.idokon.uz" target="_blank" rel="noreferrer">my.idokon.uz</a> manziliga kiring.`,
          "Ro'yxatdan o'tishda tanlagan <b>login</b> va <b>parol</b>ni kiriting.",
          "Kirgandan so'ng boshqaruv oynasi (Admin panel) ochiladi.",
        ]}
        note="Parolni unutib qo'ysangiz, 'Kalit so'zni unutdingizmi?' yozuviga bosish orqali qayta tiklash mumkin."
        videoUrl="https://www.youtube.com/watch?v=waknksArg8E&list=PLNt3xrjLbs_hfUO2_2sN3lsaMAvtMmADq&index=2"
        vertical={false}
      />

      {/* Telefon orqali kirish */}
      <Section
        title="Telefon (mobil) orqali kirish"
        icon={Smartphone}
        color="from-purple-500 to-purple-600"
        isDarkMode={isDarkMode}
        steps={[
          "Telefoningizda <b>Chrome (Android)</b> yoki <b>Safari (iOS)</b>ni oching.",
          `<a class="text-primary-500 hover:text-primary-400 font-semibold underline decoration-2 underline-offset-2 transition-colors" href="https://my.idokon.uz" target="_blank" rel="noreferrer">my.idokon.uz</a> manziliga kiring va login/parolni kiriting.`,
          "<b>iOS (Safari)</b>: Share → <b>Add to Home Screen</b> — tezkor kirish uchun.",
          "<b>Android (Chrome)</b>: ⋮ menyu → <b>Add to Home screen</b>.",
          "Jadval/keng oynalar to'liq ko'rinmasa, Chrome'da <b>⋮ → Desktop site</b>ni yoqing.",
        ]}
        videoUrl="https://youtube.com/shorts/e3XINvIcwOs"
        vertical={true}
      />
    </div>
  );
}
