import React from "react";
import TelegramPost from "../../components/layouts/TelegramPost"; // yo'lni loyihangizga moslang

const KassagaKirish = () => {
  // O'zingizning public post manzilingizni kiriting:
  // Masalan: https://t.me/idokon_channel/1234
  const CHANNEL = "idokonvideos";   // <— kanal nomi
  const POST_ID = "54";             // <— post raqami (string bo'lib tursa ham bo'ladi)
  const POST_URL = `https://t.me/${CHANNEL}/${POST_ID}`;

  const steps = [
    { icon: "💻", text: "Kompyuteringizda «IDOKON Kassa» dasturini ishga tushiring." },
    { icon: "🔑", text: "Admin panelda yaratilgan kassir login va parolini kiriting." },
    { icon: "🧾", text: "Login to‘g‘ri bo‘lsa, kassa asosiy oynasi ochiladi." },
    { icon: "🛒", text: "Sotuv, to‘lov va chek chiqarish amallarini bajaring." },
    { icon: "⚠️", text: "Xatolik bo‘lsa, login/parolni tekshiring yoki administratorga murojaat qiling." },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Kassaga kirish</h2>

      {/* Telegram video post — vidjet orqali (iframe emas) */}
      <div className="bg-slate-100 rounded-lg p-3">
        <TelegramPost channel={CHANNEL} postId={POST_ID} width="100%" />
      </div>

      {/* Fallback: agar vidjet bloklansa/adblock bo'lsa */}
      <p className="text-sm text-slate-600">
        Agar video ko‘rinmasa,{" "}
        <a
          className="text-cyan-600 underline"
          href={POST_URL}
          target="_blank"
          rel="noreferrer"
        >
          Telegramda ko‘ring
        </a>
        .
      </p>

      {/* Qadam-baqadam yo'riqnoma */}
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
            <li>Post **public** kanalda bo‘lishi shart. Private postlar vidjetda ko‘rinmaydi.</li>
            <li>Ba’zi brauzer kengaytmalari vidjet skriptini to‘sishi mumkin — fallback havola shu uchun.</li>
            <li>Agar baribir ko‘rinmasa, videoni `.mp4` qilib saytingizga yuklash yoki YouTube’dan embed qilishni ko‘rib chiqing.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default KassagaKirish;
