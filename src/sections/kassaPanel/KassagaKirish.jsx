import React from "react";

const KassagaKirish = () => {
  const steps = [
    { icon: "💻", text: "Kompyuteringizda «IDOKON Kassa» dasturini ishga tushiring." },
    { icon: "🔑", text: "Admin panelda yaratib bergan kassir login va parolini kiriting." },
    { icon: "🧾", text: "Login va parol to‘g‘ri kiritilsa, kassa dasturi asosiy oynasi ochiladi." },
    { icon: "🛒", text: "Kassa oynasida mahsulotlarni sotish, to‘lovlarni qabul qilish, va chek chiqarish mumkin." },
    { icon: "⚠️", text: "Agar login/parol noto‘g‘ri bo‘lsa, xatolik chiqadi — bu holda administratoringizdan tekshirib oling." },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Kassaga kirish</h2>

      {/* VIDEO — TEPA QISMDA */}
      <div className="bg-slate-100 rounded-lg overflow-hidden aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/iLP0_W_1cxg?rel=0&modestbranding=1"
          title="IDOKON — Kassaga kirish"
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
            <li>Kassaga faqat **admin panelda yaratilgan kassir foydalanuvchi** kira oladi.</li>
            <li>Internet ulanmagan bo‘lsa, tizim ishlamaydi.</li>
            <li>Login/parolni boshqalar bilan ulashmang — xavfsizlik uchun muhim.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default KassagaKirish;
