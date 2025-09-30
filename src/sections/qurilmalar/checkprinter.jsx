import React from "react";

export default function CheckPrinter() {
  return (
    <div className="container mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg mt-10 max-w-4xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Chek Printerga ulanish va sozlash
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Chek printer qurilmasini kompyuteringizga ulash uchun quyidagi
        bosqichlarni bajaring.
      </p>

      {/* Video-qo'llanma */}
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b-2 border-gray-200 dark:border-gray-600 pb-2">
          1. Ulanish bo'yicha video-qo'llanma
        </h2>
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/LSZg_qKglKo"
            title="Printerga ulanish videosi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Drayver va qo‘llanma yuklab olish */}
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b-2 border-gray-200 dark:border-gray-600 pb-2">
          2. Yuklab olish
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Check_printer/XPrinter.Driver.Setup.V7.77.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Drayverni yuklab olish
          </a>
          <a
            href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Qollanmalar/Check.printerni.ulash.qo.llanmasi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Qo‘llanmani yuklab olish (PDF)
          </a>
        </div>
      </div>

      {/* O'rnatish bosqichlari + rasmlar */}
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b-2 border-gray-200 dark:border-gray-600 pb-2">
          3. O'rnatish bo'yicha bosqichlar
        </h2>
        <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-6">
          {[
            {
              text: `Drayver faylini ishga tushiring. Sichqonchaning o'ng tugmasini bosib, "Открыть" ni tanlang.`,
              img: "10.jpg",
            },
            { text: `O‘rnatish oynasida "Да" tugmasini bosing.`, img: "1.jpg" },
            {
              text: `Qaysi interfeysda davom etishni tanlang va OK tugmasini bosing.`,
              img: "9.jpg",
            },
            {
              text: `Litsenziya shartlarini qabul qiling va "Next" tugmasini bosing.`,
              img: "8.jpg",
            },
            { text: `Next tugmasini bosing va davom eting.`, img: "7.jpg" },
            {
              text: `O‘rnatishni davom ettirish uchun "Install" tugmasini bosing.`,
              img: "6.jpg",
            },
            {
              text: `O‘rnatish yakunida “Finish” tugmasini bosing.`,
              img: "5.jpg",
            },
            {
              text: `Printer interfeysiga USB ni tanlang va modeliga XP-80C ni tanlang. Check USB Port tugmasini bosing.`,
              img: "4.jpg",
            },
            {
              text: `Bu joyda printeringiz qaysi portda ishlashini ko'rsatib bermoqda. Bu printer faqat shu portda ishlaydi`,
              img: "3.jpg",
            },
            {
              text: `Install Now tugmasini bosish orqali drayverni o‘rnatishni yakunlaymiz.`,
              img: "2.jpg",
            },
            {
              text: `O'rnatish muvaffaqiyatli yakunlandi. "Да" tugmasini bosish orqali test qilishimiz mumkin. Agar test qo'g'ozni chiqarib bergan bo'lsa muommosiz ulandi.`,
              img: "11.jpg",
            },
            {
              text: `Endi printer tayyor! Chek chiqarish uchun IDOKON dasturining kassasidan sozlamalar bo'limiga kirib 3.2 Checkni chop etish uchun printerga XP-80C yoki XP-80C (Copy) lardan eng oxirgisini tanlaymiz va sotishni boshlashimiz mumkin.`,
              img: "12.jpg",
            },
          ].map((step, i) => (
            <li key={i}>
              {step.text}
              <div className="mt-3 flex justify-center">
                <img
                  src={`assets/devices/checkprinter/${step.img}`}
                  alt={`Step ${i + 1}`}
                  className="rounded-lg shadow-lg max-w-md w-full object-contain"
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
