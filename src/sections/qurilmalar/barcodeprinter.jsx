import React from "react";

/**
 * Barcode printerga ulanish va sozlash bo'yicha qo'llanma
 */
export default function BarcodePrinter() {
  return (
    <div className="container mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
        Barcode Printerga ulanish va sozlash
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
        Barcode printer qurilmasini kompyuteringizga ulash uchun quyidagi video
        qo‘llanmalarni ko‘ring va keyingi bosqichlarni bajaring.
      </p>

      {/* 1. Barcode printerni ulash video */}
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
          1. Barcode printerni ulash (video)
        </h2>
        <div
          className="relative w-full overflow-hidden rounded-lg"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/fxxjDpawRgw"
            title="Barcode printerni ulash videosi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* 2. Qog'oz razmerini sozlash video */}
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
          2. Qog‘oz razmerini sozlash (video)
        </h2>
        <div
          className="relative w-full overflow-hidden rounded-lg"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/hISTcdXwjU8"
            title="Barcode printer qog'oz razmerini sozlash videosi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* 3. Yuklab olish bo‘limi */}
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
          3. Yuklab olish
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Qurilmaning toʻgʻri ishlashi uchun drayverni oʻrnatish shart.
          Shuningdek, printer sozlash bo‘yicha PDF qo‘llanmani ham yuklab
          olishingiz mumkin:
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Barode_printer_driver/Xprinter_11.5.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Drayverni yuklab olish
          </a>
          <a
            href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Qollanmalar/Barcode.printerni.ulash.qo.llanmasi.docx.pdf"
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

      {/* 4. O‘rnatish bo‘yicha bosqichlar */}
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
          4. O‘rnatish bo‘yicha bosqichlar
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
