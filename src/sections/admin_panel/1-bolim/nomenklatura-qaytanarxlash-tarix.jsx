import React from "react";

// Har qanday YouTube watch/shorts → embed
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

const NomenklaturaQaytaNarxlashTarix = () => {
  const urlNomenklatura =
    "https://www.youtube.com/watch?v=8VN0d68SLfk&list=PLNt3xrjLbs_jFOZW4S8WFBXG-i-DHhqWe&index=21";
  const urlRepriceHistory =
    "https://www.youtube.com/watch?v=fBzWn08oCHg&list=PLNt3xrjLbs_jFOZW4S8WFBXG-i-DHhqWe&index=9";

  const embedNomenklatura = `${toEmbed(urlNomenklatura)}?rel=0&modestbranding=1`;
  const embedRepriceHistory = `${toEmbed(urlRepriceHistory)}?rel=0&modestbranding=1`;

  const stepsNomenklatura = [
    {
      icon: "📦",
      text: "Chap menyudan «Nomenklatura» bo‘limiga o‘ting — barcha mahsulotlar ro‘yxati ochiladi.",
    },
    {
      icon: "🔎",
      text: "Qidiruv/filtrdan foydalanib mahsulotni toping (nomi, shtrix-kodi, kategoriya bo‘yicha).",
    },
    {
      icon: "✏️",
      text: "Mahsulot kartasida nomi, o‘lchov birligi, kategoriya va boshqa xususiyatlarni tahrirlash mumkin.",
    },
    {
      icon: "🧾",
      text: "Shtrix-kod yo‘q bo‘lsa, avtomatik generator orqali kod berishingiz mumkin.",
    },
    {
      icon: "💾",
      text: "O‘zgarishlardan so‘ng «Saqlash» tugmasini bosishni unutmang.",
    },
  ];

  const stepsRepriceHistory = [
    {
      icon: "💲",
      text: "«Qayta narxlash» funksiyasini oching — yangi narx/ustama foizlarini kiriting.",
    },
    {
      icon: "📊",
      text: "«Tarix» bo‘limida har bir mahsulot bo‘yicha narx o‘zgarishlari, vaqt va foydalanuvchi ko‘rsatiladi.",
    },
    {
      icon: "⚖️",
      text: "Narxlarni ommaviy yangilashda filtrlardan foydalaning (kategoriya, brend va h.k.).",
    },
    {
      icon: "✅",
      text: "Yangi narxlarni tekshirib chiqing va tasdiqlang — savdoda yangi narxlar qo‘llanadi.",
    },
    {
      icon: "🗂️",
      text: "Kerak bo‘lsa tarixdan orqaga qarab tekshiruv va solishtirishlar qiling.",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-10">
      <h2 className="text-2xl font-bold text-slate-800">
        Nomenklatura, Qayta Narxlash, Tarix
      </h2>

      {/* 1) Nomenklatura */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-800">
          📦 Nomenklatura
        </h3>

        {/* Video tepada */}
        <div className="bg-slate-100 rounded-lg overflow-hidden aspect-video">
          <iframe
            className="w-full h-full"
            src={embedNomenklatura}
            title="IDOKON — Nomenklatura"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        {/* Qadam-baqadam */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-slate-800">
            📋 Qadam-baqadam
          </h4>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            {stepsNomenklatura.map((s, i) => (
              <li key={i}>
                <span className="mr-2">{s.icon}</span>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="font-medium text-slate-800 mb-1">💡 Eslatma</div>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>
                Mahsulot xususiyatlari o‘zgarsa, u barcha savdo nuqtalarida
                ko‘rinadi.
              </li>
              <li>Shtrix-kodni albatta saqlang — kassa tezda topadi.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2) Qayta narxlash & Tarix */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-800">
          💲 Qayta narxlash & 🕘 Tarix
        </h3>

        {/* Video tepada */}
        <div className="bg-slate-100 rounded-lg overflow-hidden aspect-video">
          <iframe
            className="w-full h-full"
            src={embedRepriceHistory}
            title="IDOKON — Qayta narxlash va Tarix"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        {/* Qadam-baqadam */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-slate-800">
            📋 Qadam-baqadam
          </h4>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            {stepsRepriceHistory.map((s, i) => (
              <li key={i}>
                <span className="mr-2">{s.icon}</span>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="font-medium text-slate-800 mb-1">💡 Eslatma</div>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>
                Narx o‘zgarishlari «Tarix»da avtomatik qayd etiladi (sana,
                eski→yangi narx, foydalanuvchi).
              </li>
              <li>Ommaviy narxlashdan oldin kichik toifada sinab ko‘ring.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NomenklaturaQaytaNarxlashTarix;
