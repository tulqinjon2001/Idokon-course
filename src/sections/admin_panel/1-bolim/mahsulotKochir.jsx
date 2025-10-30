import React from "react";

export default function MahsulotKochir() {
  return (
    <div className="container mx-auto p-6 rounded-xl shadow-lg mt-0 max-w-4xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Mahsulotlarni Ko‘chirish
      </h1>
      <p className="text-center mb-8">
        Bu bo‘lim orqali mahsulotlarni bir filial yoki do‘kondan boshqasiga
        ko‘chirish va qabul qilish jarayonlarini amalga oshirasiz.
      </p>

      {/* Video qo‘llanma */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          1. Video qo‘llanma
        </h2>
        <div
          className="relative w-full overflow-hidden rounded-lg"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // 🎥 Real YouTube linkni shu yerga qo‘yish mumkin
            title="Mahsulot ko‘chirish videosi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* PDF yuklab olish */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          2. Qo‘llanmani yuklab olish
        </h2>
        <a
          href="https://docs.google.com/document/d/14cUTh30XA1fPZCGTuDlktk1pFSnWMXhmAl7bf1Xo-mI/export?format=pdf" 
          download 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          📥 Qo‘llanmani yuklab olish (PDF)
        </a>
      </div>

      {/* Bosqichlar qo‘llanma */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          3. Bosqichma-bosqich ko‘rsatma
        </h2>
        <ol className="list-decimal list-inside space-y-3">
          <li>Ombor bo‘limiga o‘ting va <b>“Mahsulot ko‘chirish”</b> menyusini tanlang.</li>
          <li>
            <b>“Qo'shish”</b> tugmasini bosing va yangi hujjat yarating.
          </li>
          <li>Ko‘chiriladigan <b>filialni (jo‘natuvchi va qabul qiluvchi)</b> tanlang.</li>
          <li>Mahsulotlarni qidiruvdan nomini yozish yoki shtrix-kodini scanner qilish orqali tanlang.</li>
          <li>
            Ko'chirilmoqchi bo'lgan har bir mahsulot <b>miqdor</b>ini yozing.
          </li>
          <li>
            <b>Tugatish</b> tugmasini bosing. Shundan so'ng mahsulot ko‘chirish hujjati yaratiladi.
          </li>
          <li>
            Qabul qiluvchi do'kondan Mas’ul shaxs bu hujjatdagi ko'zchaga bosib kiradi va mahsulotlar sonini tasdiqlaydi.
            Shundan so'ng <b>“Qabul qilish”</b> tugmasini bosadi.
          </li>
          <li>
            Natijada mahsulot qoldig‘i jo‘natuvchi filialda kamayadi va qabul
            qiluvchi filialda ortadi.
          </li>
        </ol>
      </div>
    </div>
  );
}
