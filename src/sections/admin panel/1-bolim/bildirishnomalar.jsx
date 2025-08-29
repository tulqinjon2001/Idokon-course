import React from "react";

const Bildirishnomalar = () => {
  const steps = [
    { icon: "🔔", text: "Chap menyudan «Bildirishnomalar» bo‘limiga o‘ting." },
    { icon: "👁️", text: "Bu yerda tizim tomonidan yuborilgan barcha bildirishnomalarni ko‘rasiz." },
    { icon: "✅", text: "Bildirishnomani o‘qib bo‘lgach, uni «O‘qilgan» deb belgilashingiz mumkin." },
    { icon: "⚙️", text: "Sozlamalarda qaysi turdagi bildirishnomalarni olishni tanlashingiz mumkin (masalan, buyurtma, to‘lov, xatolik va h.k.)." },
    { icon: "📱", text: "Agar mobil ilova orqali ishlasangiz, push-bildirishnomalar ham keladi." },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Bildirishnomalar</h2>

      {/* VIDEO — TEPA QISMDA */}
      <div className="bg-slate-100 rounded-lg overflow-hidden aspect-video">
        <iframe
          className="w-full h-full"
          src="https://t.me/idokonvideos/54"
          title="IDOKON — Bildirishnomalar"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      {/* YO‘RIQNOMA */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-800">📋 Qadam-baqadam yo‘riqnoma</h3>
        <ol className="list-decimal list-inside space-y-2 text-slate-700">
          {steps.map((s, i) => (
            <li key={i}>
              <span className="mr-2">{s.icon}</span>
              <span>{s.text}</span>
            </li>
          ))}
        </ol>

        {/* ESLATMA */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <div className="font-medium text-slate-800 mb-1">💡 Eslatma</div>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>Bildirishnomalar tizimdagi eng so‘nggi yangiliklar va voqealarni eslatadi.</li>
            <li>Ularni muntazam tekshirib turing — muhim xabarlarni o‘tkazib yubormang.</li>
            <li>O‘qilmagan bildirishnomalar alohida belgilanadi.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Bildirishnomalar;
