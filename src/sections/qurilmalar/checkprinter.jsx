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
        <div
          className="relative w-full overflow-hidden rounded-lg"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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
            href="https://drive.google.com/uc?export=download&id=1kv_Pc6rU8YM4klk7wUSidPIc3pBbvnT_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Drayverni yuklab olish
          </a>
          <a
            href="https://docs.google.com/document/d/1pqTDpW9LDnU-bAhqjUgQzLlCW2KdcNfM/export?format=pdf"
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
          <li>
            Drayver faylini ishga tushiring. Sichqonchaning o'ng tugmasini
            bosib, "Открыть" ni tanlang.
            <div className="mt-3 flex justify-center">
              <img
                src="assets/devices/checkprinter/10.jpg"
                alt="Drayver ishga tushirish"
                className="rounded-lg shadow-lg max-w-md"
              />
            </div>
          </li>

          <li>
            O‘rnatish oynasida "Да" tugmasini bosing.
            <div className="mt-3 flex justify-center">
              <img
                src="assets/devices/checkprinter/1.jpg"
                alt="Next bosqichi"
                className="rounded-lg shadow-lg max-w-md"
              />
            </div>
          </li>

          <li>
            Qaysi interfeysda davom etishni tanlang va OK tugmasini bosing.
            <div className="mt-3 flex justify-center">
              <img
                src="assets/devices/checkprinter/9.jpg"
                alt="Litsenziya oynasi"
                className="rounded-lg shadow-lg max-w-md"
              />
            </div>
          </li>

          <li>
            Litsenziya shartlarini qabul qiling va "Next" tugmasini bosing.
            <div className="mt-3 flex justify-center">
              <img
                src="assets/devices/checkprinter/8.jpg"
                alt="Yo‘l tanlash"
                className="rounded-lg shadow-lg max-w-md"
              />
            </div>
          </li>

          <li>
            Next tugmasini bosing va davom eting.
            <div className="mt-3 flex justify-center">
              <img
                src="assets/devices/checkprinter/7.jpg"
                alt="Model tanlash"
                className="rounded-lg shadow-lg max-w-md"
              />
            </div>
          </li>

          <li>
            O‘rnatishni davom ettirish uchun "Install" tugmasini bosing.
            <div className="mt-3 flex justify-center">
              <img
                src="assets/devices/checkprinter/6.jpg"
                alt="Next bosqichi"
                className="rounded-lg shadow-lg max-w-md"
              />
            </div>
          </li>

          <li>
            O‘rnatish yakunida “Finish” tugmasini bosing.
            <div className="mt-3 flex justify-center">
              <img
                src="assets/devices/checkprinter/5.jpg"
                alt="O‘rnatish jarayoni"
                className="rounded-lg shadow-lg max-w-md"
              />
            </div>
          </li>

          <li>
            Printer interfeysiga USB ni tanlang va modeliga <b>XP-80C</b> ni
            tanlang. Check USB Port tugmasini bosing.
            <div className="mt-3 flex justify-center">
              <img
                src="assets/devices/checkprinter/4.jpg"
                alt="Finish bosqichi"
                className="rounded-lg shadow-lg max-w-md"
              />
            </div>
          </li>

          <li>
            Bu joyda printeringiz qaysi portda ishlashini ko'rsatib bermoqda. Bu
            printer faqat shu portda ishlaydi
            <div className="mt-3 flex justify-center">
              <img
                src="assets/devices/checkprinter/3.jpg"
                alt="USB ulash"
                className="rounded-lg shadow-lg max-w-md"
              />
            </div>
          </li>

          <li>
            Install Now tugmasini bosish orqali bu printerning driverini
            o'rnatishni yakunlaymiz.
            <div className="mt-3 flex justify-center">
              <img
                src="assets/devices/checkprinter/2.jpg"
                alt="Test print"
                className="rounded-lg shadow-lg max-w-md"
              />
            </div>
          </li>

          <li>
            O'rnatish muvaffaqiyatli yakunlandi. "Да" tugmasini bosish orqali
            test qilishimiz mumkin. Agar test qo'g'ozni chiqarib bergan bo'lsa
            muommosiz ulandi.
            <div className="mt-3 flex justify-center">
              <img
                src="assets/devices/checkprinter/11.jpg"
                alt="Kassa sozlamalari"
                className="rounded-lg shadow-lg max-w-md"
              />
            </div>
          </li>

          <li>
            Endi printer tayyor! Chek chiqarish uchun IDOKON dasturining
            kassasidan sozlamalar bo'limiga kirib 3.2 Checkni chop etish uhcun
            printerga XP-80C yoki XP-80C (Copy) lardan eng oxirgisni tanlaymiz
            va sotishni boshlashimiz mumkin.
            <div className="mt-3 flex justify-center">
              <img
                src="assets/devices/checkprinter/12.jpg"
                alt="Chek chiqarish"
                className="rounded-lg shadow-lg max-w-md"
              />
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
