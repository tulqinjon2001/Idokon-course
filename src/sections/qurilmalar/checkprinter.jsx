import React from "react";

export default function CheckPrinter() {
  return (
    <div className="container mx-auto p-6 bg-white dark:bg-white rounded-xl shadow-lg mt-10 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-6">
        Chek Printerga ulanish va sozlash
      </h1>
      <p className="text-center mb-8">
        Chek printer qurilmasini kompyuteringizga ulash uchun quyidagi
        bosqichlarni bajaring.
      </p>

      {/* Video-qo'llanma */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-2">
          Ulanish bo'yicha video-qo'llanma
        </h2>
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 sm:p-4">
          <div className="w-full max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/LSZg_qKglKo"
              title="Printerga ulanish videosi"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          {/* YouTube va Playlist tugmalari */}
          <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
            <a
              href="https://www.youtube.com/watch?v=LSZg_qKglKo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 sm:px-5 py-2 sm:py-3 bg-primary-600 text-white rounded-md text-sm sm:text-base hover:bg-primary-700 transition text-center"
              aria-label="YouTube videoni yangi oynada ochish"
            >
              YouTube-da ochish
            </a>

            <a
              href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Check_printer/XPrinter.Driver.Setup.V7.77.exe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Drayverni yuklab olish
            </a>

            <a
              href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Qollanmalar/Check.printerni.ulash.qo.llanmasi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Qo'llanmani yuklab olish (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
