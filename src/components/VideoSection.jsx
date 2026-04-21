import React from "react";

/**
 * Extract YouTube video ID from various URL formats
 */
function extractVideoId(url) {
  if (!url) return null;
  
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
  } catch {}
  
  return url;
}

/**
 * Reusable video section component with YouTube and Playlist buttons
 * @param {string} videoUrl - Full YouTube URL or video ID
 * @param {string} playlistUrl - Playlist URL
 * @param {string} title - Video title
 * @param {string} aspectRatio - Aspect ratio class (default: aspect-video)
 * @param {boolean} isShort - Whether it's a short (vertical) video
 */
export default function VideoSection({
  videoUrl,
  playlistUrl,
  title = "Video qo'llanma",
  isShort = false,
  heightClass = "h-[420px]",
  containerClassName = "bg-slate-100 rounded-lg p-3 sm:p-4 md:p-6",
}) {
  const videoId = extractVideoId(videoUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const youtubeWatchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className={containerClassName}>
      <div
        className={`w-full overflow-hidden rounded-lg ${
          isShort ? "mx-auto max-w-xs sm:max-w-sm" : ""
        }`}
      >
        <iframe
          title={title}
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={`w-full rounded-lg ${isShort ? "h-[560px]" : heightClass}`}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          aria-label={title}
        />
      </div>

      {/* Action buttons */}
      <div className="mt-3 sm:mt-4 flex flex-wrap gap-3">
        {videoUrl && (
          <a
            href={youtubeWatchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0284C7] transition"
            aria-label="YouTube videoni yangi oynada ochish"
          >
            YouTube-da ochish
          </a>
        )}
        {playlistUrl && (
          <a
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            aria-label="Playlistni ko'rish"
          >
            Playlistni ko'rish
          </a>
        )}
      </div>
    </div>
  );
}
