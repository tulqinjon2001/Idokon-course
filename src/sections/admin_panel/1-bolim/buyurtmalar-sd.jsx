import React from "react";

const BuyurtmalarSD = () => {
  const steps = [
    { icon: "📋", text: "Chap menyudan «Buyurtmalar SD» bo‘limiga o‘ting." },
    { icon: "👁️", text: "Ro‘yxatda buyurtma raqami, sana, mijoz, summa va holatini ko‘rasiz." },
    { icon: "🔎", text: "Qidiruv va filtrlash orqali sana, mijoz yoki holat bo‘yicha tez toping." },
    { icon: "✏️", text: "Buyurtma ustiga bosing — tafsilotlarni ko‘rish/tahrirlash mumkin." },
    { icon: "✅", text: "Holatini belgilang: «Bajarildi», «Kutilmoqda» yoki «Bekor qilingan»." },
    { icon: "💾", text: "O‘zgarishlardan so‘ng «Saqlash» tugmasini bosing." },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Buyurtmalar SD</h2>

      {/* VIDEO — TEPA QISMDA */}
      <div className="bg-slate-100 rounded-lg overflow-hidden aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/CK4xgwh55v0?rel=0&modestbranding=1"
          title="IDOKON — Buyurtmalar SD"
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

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <div className="font-medium text-slate-800 mb-1">💡 Eslatma</div>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>Holatlarni to‘g‘ri belgilash hisobot va hisob-kitoblarda muhim.</li>
            <li>Filtrlardan foydalanish — kerakli buyurtmani tez topishga yordam beradi.</li>
            <li>Har bir tahrirdan so‘ng albatta «Saqlash»ni bosing.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BuyurtmalarSD;
