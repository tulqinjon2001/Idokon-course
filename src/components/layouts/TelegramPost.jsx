import React, { useEffect, useRef } from "react";

/**
 * Telegram public post embed (video post bo'lsa player ham chiqadi).
 * channel:  t.me/<channel>/<postId> dagi <channel>
 * postId:   xabarning raqami (string yoki number)
 * width:    '100%' tavsiya etiladi (piksel ham berish mumkin, masalan '600')
 * dark:     true bo'lsa, qorong'u tema
 */
export default function TelegramPost({ channel, postId, width = "100%", dark = false }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Hot-reload yoki prop o'zgarganda eski vidjetni tozalaymiz
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-post", `${channel}/${postId}`);
    script.setAttribute("data-width", String(width));
    if (dark) script.setAttribute("data-dark", "1");

    containerRef.current.appendChild(script);

    // ixtiyoriy cleanup
    return () => {
      containerRef.current && (containerRef.current.innerHTML = "");
    };
  }, [channel, postId, width, dark]);

  return <div ref={containerRef} />;
}
