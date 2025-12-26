import React from "react";
import { Package, Download, FileText, Play, ExternalLink } from "lucide-react";

const DOC_ID = "1TuT6T_wz2hAUcH1wXurr5K5nIcgPwx2Y";
const DL_PDF = `https://docs.google.com/document/d/${DOC_ID}/export?format=pdf`;

export default function MahsulotQabulQilish() {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
      {/* Header */}
      <section className="group relative bg-gradient-to-br from-white via-primary-50/30 to-white rounded-2xl shadow-xl border-2 border-primary-200 p-6 sm:p-8 md:p-10 hover:border-primary-300 transition-all duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Package className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Mahsulotlar qabul qilish
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Omborga kelgan tovarlarni yuk xati (nakladnoy) orqali tizimga kiritish bo'limi
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/SYjh8fQv9_8?rel=0&modestbranding=1"
              title="IDOKON — Mahsulotlarni qabul qilish"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <a
            href="https://www.youtube.com/watch?v=SYjh8fQv9_8"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105"
          >
            <Play className="w-4 h-4" />
            <span>YouTube-da ochish</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </a>
        </div>
      </section>

      {/* PDF yuklab olish */}
      <section className="group relative bg-gradient-to-br from-white via-yellow-50/30 to-white rounded-2xl shadow-xl border-2 border-yellow-200 p-6 sm:p-8 hover:border-yellow-300 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-base sm:text-lg md:text-xl mb-1">
                Qo'llanma (PDF)
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">
                Hujjatni faqat PDF ko'rinishda yuklab olishingiz mumkin.
              </div>
            </div>
          </div>
          <a
            href={DL_PDF}
            className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            target="_blank"
            rel="noreferrer noopener"
            download
            title="PDF ko'rinishda yuklab olish"
          >
            <Download className="w-4 h-4" />
            <span>PDF-ni yuklab olish</span>
          </a>
        </div>
      </section>

      {/* Qo'llanma iframe */}
      <section className="group relative bg-gradient-to-br from-white via-blue-50/30 to-white rounded-2xl shadow-xl border-2 border-blue-200 p-4 sm:p-6 hover:border-blue-300 transition-all duration-300">
        <div className="w-full rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
          <iframe
            src={`https://docs.google.com/document/d/${DOC_ID}/preview`}
            className="w-full"
            style={{ minHeight: "80vh", height: "100%" }}
            title="Qo'llanma"
          />
        </div>
      </section>
    </div>
  );
}
