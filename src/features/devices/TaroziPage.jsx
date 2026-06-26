/**
 * TaroziQurilma — Tarozilarni ulash va sozlash bo'yicha qo'llanma
 *
 * ✅ Chiroyli card dizayn — rasm, tugmalar, qadamlar
 * ✅ Shtrix M: 1 rasm + driver + PDF
 * ✅ Kuanyi: 2 rasm gallery + driver + PDF
 * ✅ isDarkMode prop va CSS custom properties orqali theme
 * ✅ Responsive: desktop, tablet, mobil
 */

import React, { useState } from "react";
import { Download, FileText, Scale, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

/* ── Lightbox (rasm kattalashtirish) ── */
function Lightbox({ src, alt, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
        />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform text-xl font-bold"
          aria-label="Yopish"
        >
          ×
        </button>
        <p className="text-center text-white/70 text-sm mt-3">{alt}</p>
      </div>
    </div>
  );
}

/* ── Rasm galereyasi ── */
function ImageGallery({ images, isDarkMode }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, images.length - 1));

  const img = images[current];

  return (
    <div className="space-y-3">
      {/* Asosiy rasm */}
      <div className="relative group rounded-2xl overflow-hidden shadow-xl border-2 cursor-zoom-in"
        style={{ borderColor: isDarkMode ? "var(--border-color)" : "#e5e7eb" }}
        onClick={() => setLightbox(img)}
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* Zoom hint */}
        <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <span
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-sm shadow-lg"
            style={{ background: isDarkMode ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.85)", color: isDarkMode ? "white" : "#111" }}
          >
            <ZoomIn className="w-3.5 h-3.5" />
            Kattalashtirish
          </span>
        </div>

        <img
          src={img.src}
          alt={img.alt}
          className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          style={{
            maxHeight: "320px",
            background: isDarkMode ? "#1f2937" : "#f8fafc",
          }}
        />
      </div>

      {/* Navigatsiya (bir nechta rasm bo'lsa) */}
      {images.length > 1 && (
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all disabled:opacity-30 hover:scale-110 active:scale-95"
            style={{
              background: isDarkMode ? "var(--bg-card)" : "white",
              borderColor: isDarkMode ? "var(--border-color)" : "#e5e7eb",
              color: isDarkMode ? "var(--text-primary)" : "#374151",
            }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Thumbnails */}
          <div className="flex gap-2 flex-1 overflow-x-auto">
            {images.map((im, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                  idx === current ? "border-primary-500 scale-105 shadow-md" : "opacity-60 hover:opacity-90"
                }`}
                style={{ borderColor: idx === current ? "#00AEEF" : isDarkMode ? "var(--border-color)" : "#e5e7eb" }}
              >
                <img
                  src={im.src}
                  alt={im.alt}
                  className="w-14 h-14 object-contain"
                  style={{ background: isDarkMode ? "#1f2937" : "#f8fafc" }}
                />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === images.length - 1}
            className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all disabled:opacity-30 hover:scale-110 active:scale-95"
            style={{
              background: isDarkMode ? "var(--bg-card)" : "white",
              borderColor: isDarkMode ? "var(--border-color)" : "#e5e7eb",
              color: isDarkMode ? "var(--text-primary)" : "#374151",
            }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Caption */}
      <p className="text-center text-xs" style={{ color: isDarkMode ? "var(--text-faint)" : "#9ca3af" }}>
        {img.alt}
        {images.length > 1 && ` (${current + 1} / ${images.length})`}
      </p>

      {/* Lightbox */}
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </div>
  );
}

/* ── Yuklab olish tugmasi ── */
function DownloadBtn({ href, icon: Icon, label, variant = "primary" }) {
  const isPrimary = variant === "primary";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={isPrimary}
      className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-md hover:shadow-lg ${
        isPrimary
          ? "bg-primary-600 hover:bg-primary-700 text-white"
          : "bg-white hover:bg-gray-50 text-primary-700 border-2 border-primary-200"
      }`}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      {label}
    </a>
  );
}

/* ── ScaleCard — Har bir tarozi uchun karta ── */
function ScaleCard({ number, title, subtitle, color, images, steps, driver, pdf, isDarkMode }) {
  return (
    <div
      className="rounded-2xl border-2 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      style={{
        background: isDarkMode ? "var(--bg-card)" : "white",
        borderColor: isDarkMode ? "var(--border-color)" : "#e5e7eb",
      }}
    >
      {/* Card header */}
      <div className={`bg-gradient-to-r ${color} p-5 sm:p-6`}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-0.5">
              {number}-tarozi turi
            </div>
            <h2 className="text-white text-xl sm:text-2xl font-extrabold leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-white/80 text-sm mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

          {/* Rasm galereyasi */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: isDarkMode ? "var(--text-muted)" : "#6b7280" }}
            >
              Qurilma ko'rinishi
            </h3>
            <ImageGallery images={images} isDarkMode={isDarkMode} />
          </div>

          {/* Ma'lumot va yuklab olish */}
          <div className="space-y-5">
            {/* Qadamlar */}
            <div>
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-3"
                style={{ color: isDarkMode ? "var(--text-muted)" : "#6b7280" }}
              >
                Ulash bo'yicha yo'riqnoma
              </h3>
              <div className="space-y-2.5">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 sm:p-4 rounded-xl border-l-4 border-primary-500"
                    style={{
                      background: isDarkMode ? "rgba(0,174,239,0.08)" : "#f0faff",
                    }}
                  >
                    <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg flex items-center justify-center text-xs font-bold shadow-sm mt-0.5">
                      {i + 1}
                    </span>
                    <span
                      className="text-sm leading-relaxed pt-0.5"
                      style={{ color: isDarkMode ? "var(--text-secondary)" : "#374151" }}
                      dangerouslySetInnerHTML={{ __html: step }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Yuklab olish tugmalari */}
            <div>
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-3"
                style={{ color: isDarkMode ? "var(--text-muted)" : "#6b7280" }}
              >
                Yuklab olish
              </h3>
              <div className="flex flex-wrap gap-3">
                <DownloadBtn
                  href={driver.href}
                  icon={Download}
                  label={driver.label}
                  variant="primary"
                />
                <DownloadBtn
                  href={pdf.href}
                  icon={FileText}
                  label="PDF Qo'llanma"
                  variant="secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   ASOSIY KOMPONENT
   ══════════════════════════════════════════════════════ */
export default function TaroziQurilma({ isDarkMode = false }) {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">

      {/* ── Page header ── */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-5 shadow-lg">
          <Scale className="w-10 h-10 text-white" />
        </div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3"
          style={{ color: isDarkMode ? "var(--text-primary)" : "#111827" }}
        >
          Tarozilarni Ulash va Sozlash
        </h1>
        <p
          className="text-base sm:text-lg max-w-2xl mx-auto"
          style={{ color: isDarkMode ? "var(--text-muted)" : "#6b7280" }}
        >
          Quyida 2 xil tarozi modeli uchun driver, PDF qo'llanma va ulash bo'yicha
          yo'riqnoma mavjud.
        </p>
      </div>

      {/* ── 1. Shtrix M ── */}
      <ScaleCard
        number="1"
        title="Shtrix M Tarozi"
        subtitle="To'g'ri ishlashi uchun driver o'rnatish shart"
        color="from-blue-600 to-blue-700"
        isDarkMode={isDarkMode}
        images={[
          {
            src: "/assets/devices/scales/shtrixM.webp",
            alt: "Shtrix M tarozi — old ko'rinish",
          },
        ]}
        steps={[
          "Quyidagi tugmani bosib <b>Shtrix M drayverini</b> yuklab oling.",
          "Yuklab olingan <b>.exe</b> faylni ishga tushiring va o\u2019rnatishni yakunlang.",
          "O\u2019rnatish tugagach kompyuterni <b>qayta yoqing</b>.",
          "Tarozi kabeli orqali kompyuterga ulanganligini tekshiring.",
          "IDOKON dasturida tarozini <b>tanlab sozlang</b>.",
        ]}
        driver={{
          href: "https://github.com/tulqinjon2001/Idokon-course/releases/download/Tarozi/Shtrix.M.scale.driver.2.exe",
          label: "Shtrix M Driver yuklab olish",
        }}
        pdf={{
          href: "https://github.com/tulqinjon2001/Idokon-course/releases/download/Qollanmalar/Shtrix.M.tarozini.ulash.qo.llanmasi.pdf",
        }}
      />

      {/* ── 2. Kuanyi ── */}
      <ScaleCard
        number="2"
        title="Kuanyi Tarozi"
        subtitle="To'g'ri ishlashi uchun driver o'rnatish shart"
        color="from-primary-600 to-primary-700"
        isDarkMode={isDarkMode}
        images={[
          {
            src: "/assets/devices/scales/kuanyi-1.jpg",
            alt: "Kuanyi tarozi — old ko'rinish",
          },
          {
            src: "/assets/devices/scales/kuanyi-2.jpg",
            alt: "Kuanyi tarozi — yon ko'rinish",
          },
        ]}
        steps={[
          "Quyidagi tugmani bosib <b>Kuanyi drayver zip</b> faylini yuklab oling.",
          "Zip faylni <b>ekstract</b> qiling (ochiq joyga chiqaring).",
          "Ichidagi <b>Setup.exe</b> yoki <b>Install.exe</b>ni ishga tushiring.",
          "O\u2019rnatish tugagach kompyuterni <b>qayta yoqing</b>.",
          "Tarozi kabeli orqali ulab, IDOKON dasturida <b>portni sozlang</b>.",
        ]}
        driver={{
          href: "https://github.com/tulqinjon2001/Idokon-course/releases/download/Tarozi/YesPOS.Barcode.08.03.2025.2.zip",
          label: "Kuanyi Driver yuklab olish (ZIP)",
        }}
        pdf={{
          href: "https://github.com/tulqinjon2001/Idokon-course/releases/download/Qollanmalar/Kuanyi.tarozini.ulash.qo.llanmasi.pdf",
        }}
      />

      {/* ── Eslatma ── */}
      <div
        className="rounded-2xl border-2 p-5 sm:p-6 flex items-start gap-4"
        style={{
          background: isDarkMode ? "rgba(251,191,36,0.07)" : "#fefce8",
          borderColor: isDarkMode ? "rgba(251,191,36,0.3)" : "#fde68a",
        }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
          <i className="fa-solid fa-triangle-exclamation text-white text-sm" />
        </div>
        <div>
          <p
            className="font-bold text-base mb-1"
            style={{ color: isDarkMode ? "#fbbf24" : "#92400e" }}
          >
            Muhim eslatma
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: isDarkMode ? "#fcd34d" : "#78350f" }}
          >
            Har doim faqat o'z tarozi modelingiz drayverini o'rnating. Noto'g'ri
            driver tarazi xato ishlashiga yoki aniqlanmasligiga olib keladi.
            Qo'llanmada ko'rsatilgan qadamlarni tartib bilan bajaring.
          </p>
        </div>
      </div>

    </div>
  );
}
