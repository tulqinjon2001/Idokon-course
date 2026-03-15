/**
 * VideoPlayer — YouTube embed komponenti
 *
 * • Har qanday YouTube URL (watch, youtu.be, shorts) ni qabul qiladi
 * • Keng ekranda 16:9, shorts uchun 9:16 aspekt nisbati
 * • Fullscreen + YouTube-da ochish tugmalari
 * • Dark mode qo'llab-quvvatlash
 * • Loading placeholder (skeleton)
 */

import React, { useState } from "react";
import { ExternalLink, Play, Maximize2 } from "lucide-react";

/* ── YouTube ID extractor ── */
function extractVideoId(url = "") {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1).split("?")[0];
    if (u.pathname.includes("/shorts/")) return u.pathname.split("/shorts/")[1].split("?")[0];
    const v = u.searchParams.get("v");
    if (v) return v;
  } catch {
    /* ignore */
  }
  return url;
}

/* ── Vertical (shorts) detection ── */
function isVerticalUrl(url = "") {
  return url.includes("/shorts/");
}

export default function VideoPlayer({
  videoUrl,
  title = "Video",
  vertical = null,       // null = auto-detect; true/false = override
  playlistUrl,
  isDarkMode = false,
  accentColor = "from-primary-500 to-primary-600",
}) {
  const [loaded, setLoaded] = useState(false);
  const videoId = extractVideoId(videoUrl);
  const isVertical = vertical !== null ? vertical : isVerticalUrl(videoUrl);
  const embed = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  const directUrl = videoUrl || `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="space-y-3 w-full">
      {/* ── Video box ── */}
      <div className="relative group">
        {/* Glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${accentColor} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
        />

        {/* Container */}
        <div
          className={`relative overflow-hidden rounded-2xl shadow-2xl border-2 ${
            isDarkMode ? "border-gray-700 bg-gray-800" : "border-white bg-gray-100"
          } ${isVertical ? "mx-auto max-w-xs sm:max-w-sm" : "w-full"}`}
        >
          {/* Aspect box */}
          <div className={isVertical ? "aspect-[9/16]" : "aspect-video"}>
            {/* Skeleton loader */}
            {!loaded && (
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center gap-3 ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    isDarkMode
                      ? "bg-gray-700"
                      : "bg-gradient-to-br from-primary-500 to-primary-600"
                  } shadow-lg`}
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
                <div
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Yuklanmoqda…
                </div>
                {/* Animated bar */}
                <div className="w-32 h-1 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-600">
                  <div className="h-full bg-primary-500 animate-[loading_1.4s_ease-in-out_infinite]" />
                </div>
              </div>
            )}

            <iframe
              className={`w-full h-full transition-opacity duration-500 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              src={embed}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>

        {/* Fullscreen hint overlay (hover only) */}
        <a
          href={directUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="YouTube-da to'liq ekranda ochish"
          title="YouTube-da ochish"
        >
          <span
            className={`flex items-center justify-center w-9 h-9 rounded-xl backdrop-blur-sm shadow-lg ${
              isDarkMode ? "bg-black/60 text-white" : "bg-white/80 text-gray-800"
            } hover:scale-110 transition-transform`}
          >
            <Maximize2 className="w-4 h-4" />
          </span>
        </a>
      </div>

      {/* ── Action buttons ── */}
      <div className="flex flex-wrap gap-2">
        <a
          href={directUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl shadow-md transition-all duration-200 hover:scale-105 active:scale-95 ${
            isDarkMode
              ? "bg-primary-600 hover:bg-primary-500 text-white"
              : "bg-primary-600 hover:bg-primary-700 text-white"
          }`}
          aria-label="YouTube-da ko'rish"
        >
          <Play className="w-4 h-4" />
          YouTube-da ochish
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>

        {playlistUrl && (
          <a
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl border-2 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm ${
              isDarkMode
                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                : "border-primary-200 text-primary-700 hover:bg-primary-50"
            }`}
            aria-label="Playlistni ko'rish"
          >
            Playlistni ko'rish
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        )}
      </div>
    </div>
  );
}
