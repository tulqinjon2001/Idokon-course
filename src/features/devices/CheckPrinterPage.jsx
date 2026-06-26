import React from "react";
import VideoPlayer from "../../shared/components/media/VideoPlayer.jsx";

export default function CheckPrinterPage() {
  return (
    <div className="container mx-auto p-6 bg-white dark:bg-white rounded-xl shadow-lg mt-10 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-6">
        Chek Printerga ulanish va sozlash
      </h1>
      <p className="text-center mb-8">
        Chek printer qurilmasini kompyuteringizga ulash uchun quyidagi
        bosqichlarni bajaring.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-2">
          Ulanish bo'yicha video-qo'llanma
        </h2>
        <VideoPlayer
          videoUrl="https://www.youtube.com/watch?v=LSZg_qKglKo"
          title="Printerga ulanish videosi"
          containerClassName="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 sm:p-4"
        />

        <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
          <a
            href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Check_printer/XPrinter.Driver.Setup.V7.77.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 text-center"
          >
            Drayverni yuklab olish
          </a>

          <a
            href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Qollanmalar/Check.printerni.ulash.qo.llanmasi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 text-center"
          >
            Qo'llanmani yuklab olish (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
