import React from "react";

/* Har qanday YouTube URL -> /embed/<id> */
function toEmbed(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be"))
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    if (u.pathname.includes("/shorts/"))
      return `https://www.youtube.com/embed/${u.pathname.split("/shorts/")[1]}`;
    const v = u.searchParams.get("v");
    if (v) return `https://www.youtube.com/embed/${v}`;
  } catch {}
  return url;
}

/* Qayta ishlatiladigan bo'lim (matn + video yonma-yon) */
function Section({ title, steps = [], note, videoUrl, vertical }) {
  const embed = `${toEmbed(videoUrl)}?rel=0&modestbranding=1`;
  return (
    <section className="bg-white rounded-lg sm:rounded-lg md:rounded-xl shadow-md p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 items-start">
        {/* Matn qismi */}
        <div className="space-y-3 sm:space-y-4 order-2 md:order-1">
          {steps.length > 0 && (
            <ol className="list-decimal list-inside space-y-2 text-slate-700 text-xs sm:text-sm md:text-base">
              {steps.map((s, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: s }} />
              ))}
            </ol>
          )}

          {note && (
            <div className="p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="font-medium text-slate-800 mb-1 text-sm sm:text-base">
                💡 Eslatma
              </div>
              <div className="text-slate-600 text-xs sm:text-sm">{note}</div>
            </div>
          )}
        </div>

        {/* Video qismi */}
        <div className="w-full order-1 md:order-2">
          <div
            className={
              vertical
                ? "mx-auto w-full max-w-xs sm:max-w-sm bg-slate-100 rounded-lg overflow-hidden"
                : "w-full bg-slate-100 rounded-lg overflow-hidden"
            }
          >
            <iframe
              className={
                vertical ? "w-full aspect-[9/16]" : "w-full aspect-video"
              }
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
    </section>
  );
}

const AdmingaKirish = () => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8 px-4">
      {/* 1) Kompyuter orqali kirish */}
      <Section
        title="💻 Kompyuter orqali kirish"
        steps={[
          "Kompyuteringizda <b>Google Chrome</b>ni oching.",
          ` <a class="text-cyan-600 underline font-medium" href="https://my.idokon.uz" target="_blank" rel="noreferrer">my.idokon.uz</a> manziliga kiring.`,
          "Ro'yxatdan o'tishda tanlagan <b>login</b> va <b>parol</b>ni kiriting.",
          "Kirgandan so'ng boshqaruv oynasi (Admin panel) ochiladi.",
        ]}
        note="Parolni unutib qo'ysangiz, 'Kalit so'zni unutdingizmi?' yozuviga bosish orqali qayta tiklash mumkin."
        videoUrl="https://www.youtube.com/watch?v=V1mcKNpba-A"
        vertical={false}
      />

      {/* 2) Telefon orqali kirish */}
      <Section
        title="📱 Telefon (mobil) orqali kirish"
        steps={[
          "Telefoningizda <b>Chrome (Android)</b> yoki <b>Safari (iOS)</b>ni oching.",
          ` <a class="text-cyan-600 underline font-medium" href="https://my.idokon.uz" target="_blank" rel="noreferrer">my.idokon.uz</a> manziliga kiring va login/parolni kiriting.`,
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
