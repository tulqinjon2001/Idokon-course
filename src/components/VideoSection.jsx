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
  aspectRatio = "aspect-video",
  isShort = false,
}) {
  const videoId = extractVideoId(videoUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="bg-slate-100 rounded-lg p-3 sm:p-4 md:p-6">
      <div
        className={`w-full overflow-hidden rounded-lg ${
          isShort ? "mx-auto max-w-xs sm:max-w-sm" : ""
        }`}
      >
        <div className={`${aspectRatio} w-full`}>
          <iframe
            title={title}
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            aria-label={title}
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 sm:px-5 py-2 sm:py-3 bg-primary-600 text-white rounded-md text-sm sm:text-base hover:bg-primary-700 transition text-center"
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
            className="inline-block px-4 sm:px-5 py-2 sm:py-3 bg-slate-200 text-slate-800 rounded-md text-sm sm:text-base hover:bg-slate-300 transition text-center"
            aria-label="Playlistni ko'rish"
          >
            Playlistni ko'rish
          </a>
        )}
      </div>
    </div>
  );
}
