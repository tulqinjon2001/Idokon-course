import React from "react";

const Inventarizatsiya = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* 🎥 Video eng yuqorida */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">🎥 Video qo‘llanma</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-96 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/4vBQCT6g528?list=PLNt3xrjLbs_jFOZW4S8WFBXG-i-DHhqWe"
            title="Inventarizatsiya video qo‘llanma"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* 📊 Matnli qo‘llanma */}
      <h2 className="text-2xl font-bold mb-4">📊 Inventarizatsiya bo‘limi</h2>

      <p className="mb-2">
        📁 <b>Inventarizatsiya</b> — bu bo‘lim ombordagi mavjud mahsulotlarning
        real holatini tekshirish, aniqlashtirish va kerak bo‘lsa, mahsulot
        qoldiqlarini to‘g‘rilash uchun mo‘ljallangan.
      </p>
      <p className="mb-4">
        📌 Ushbu bo‘lim, ayniqsa, ombor hisoboti bilan amaldagi mahsulot
        zaxiralari o‘rtasidagi tafovutni aniqlashda va inventarizatsiya (qayta
        hisob) o‘tkazishda muhim ahamiyatga ega.
      </p>

      <h3 className="text-xl font-semibold mb-2">🔁 Qanday ishlaydi?</h3>
      <p className="mb-4">
        🛠️ Masalan, sizda qolgan “astatka” (noto‘g‘ri kirim qilingan yoki mavjud
        bo‘lmagan) mahsulotlar bo‘lsa, ularni 0 qilib chiqarish yoki nomini
        yangilash uchun quyidagi amallarni bajarasiz:
      </p>
      <ol className="list-decimal list-inside space-y-2 mb-4">
        <li>
          ➕ <b>Qo‘shish tugmasini bosish</b> — “Inventarizatsiya” bo‘limiga
          o‘ting va yangi inventarizatsiya oynasini oching.
        </li>
      </ol>

      <h3 className="text-xl font-semibold mb-2">
        📦 Inventarizatsiyalanmagan mahsulotlarni ko‘rish
      </h3>
      <p className="mb-2">
        ▶️ <b>“Inventarizatsiyalanmaganlar”</b> tugmasi yordamida hali qayta
        hisobdan o‘tkazilmagan mahsulotlar ro‘yxatini ko‘rish mumkin.
      </p>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>📦 Hali tekshirilmagan mahsulotlarni aniqlash</li>
        <li>➕ Mahsulotni ro‘yxatga qo‘shib yangi miqdor kiritish</li>
        <li>❌ E’tibordan chetda qolgan mahsulotlarni chiqarib tashlash</li>
      </ul>
    </div>
  );
};

export default Inventarizatsiya;
