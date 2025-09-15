import React from "react";

/**
 * Bu komponent barcode printerga ulanish va sozlash bo'yicha ko'rsatmalarni ko'rsatadi.
 * U Tailwind CSS yordamida zamonaviy interfeysga ega.
 */
export default function BarcodePrinter() {
  return (
    <div className="container mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg mt-10 max-w-4xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Barcode Printerga ulanish va sozlash
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Barcode printer qurilmasini kompyuteringizga ulash uchun quyidagi oddiy
        bosqichlarni bajaring.
      </p>

      {/* Video-qo'llanma bo'limi */}
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b-2 border-gray-200 dark:border-gray-600 pb-2">
          1. Ulanish bo'yicha video-qo'llanma
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Barcode printerni toʻgʻri ulash uchun quyidagi videoni koʻring.
        </p>
        <div
          className="relative w-full overflow-hidden rounded-lg"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // 🔗 Barcode printer uchun haqiqiy YouTube link qo'ying
            title="Barcode printerga ulanish videosi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Drayver va qo‘llanma yuklab olish bo‘limi */}
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b-2 border-gray-200 dark:border-gray-600 pb-2">
          2. Yuklab olish
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Qurilmaning toʻgʻri ishlashi uchun drayverni oʻrnatish shart.
          Shuningdek, printer sozlash bo‘yicha PDF qo‘llanmani ham yuklab
          olishingiz mumkin:
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://drive.google.com/uc?export=download&id=13MI600aOe2H5RUK14fChtep9SMiyVfTM" // 🔗 Barcode printer drayver ID
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Drayverni yuklab olish
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=YOUR_GUIDE_FILE_ID" // 🔗 Qo'llanma fayl ID ni qo'ying
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Qo‘llanmani yuklab olish (PDF)
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          ⚠️ Fayl katta bo‘lgani uchun Google Drive virusni tekshira olmaydi.
          Ochilgan oynada <strong>Download anyway</strong> tugmasini bosish
          kerak bo‘ladi.
        </p>
      </div>

      {/* O'rnatish bosqichlari bo'limi */}
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b-2 border-gray-200 dark:border-gray-600 pb-2">
          3. O'rnatish bo'yicha bosqichlar
        </h2>
        <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>
            Yuklab olingan <b>drayver faylini</b> oching va oʻrnatish jarayonini
            boshlang.
          </li>
          <li>
            Printerni <b>USB kabeli</b> orqali kompyuterga ulang.
          </li>
          <li>Oʻrnatish yakunlangandan soʻng, printerni yoqing.</li>
          <li>
            Sozlamalardan printerni tanlab, test shtrix-kodini chop etib
            koʻring.
          </li>
        </ol>
      </div>
    </div>
  );
}
