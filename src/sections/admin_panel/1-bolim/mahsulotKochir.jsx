import React from "react";
import { Package, Play, Download, FileText, ArrowRight, CheckCircle, ExternalLink, Plus, Search } from "lucide-react";

export default function MahsulotKochir() {
  const steps = [
    { icon: Package, color: "from-blue-500 to-blue-600", text: "Ombor bo'limiga o'ting va \"Mahsulot ko'chirish\" menyusini tanlang." },
    { icon: Plus, color: "from-green-500 to-green-600", text: "\"Qo'shish\" tugmasini bosing va yangi hujjat yarating." },
    { icon: ArrowRight, color: "from-purple-500 to-purple-600", text: "Ko'chiriladigan filialni (jo'natuvchi va qabul qiluvchi) tanlang." },
    { icon: Search, color: "from-orange-500 to-orange-600", text: "Mahsulotlarni qidiruvdan nomini yozish yoki shtrix-kodini scanner qilish orqali tanlang." },
    { icon: Package, color: "from-red-500 to-red-600", text: "Ko'chirilmoqchi bo'lgan har bir mahsulot miqdorini yozing." },
    { icon: CheckCircle, color: "from-emerald-500 to-emerald-600", text: "\"Tugatish\" tugmasini bosing. Shundan so'ng mahsulot ko'chirish hujjati yaratiladi." },
    { icon: ArrowRight, color: "from-indigo-500 to-indigo-600", text: "Qabul qiluvchi do'kondan Mas'ul shaxs bu hujjatdagi ko'zchaga bosib kiradi va mahsulotlar sonini tasdiqlaydi. Shundan so'ng \"Qabul qilish\" tugmasini bosadi." },
    { icon: CheckCircle, color: "from-teal-500 to-teal-600", text: "Natijada mahsulot qoldig'i jo'natuvchi filialda kamayadi va qabul qiluvchi filialda ortadi." }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
      {/* Header */}
      <section className="group relative bg-gradient-to-br from-white via-primary-50/30 to-white rounded-2xl shadow-xl border-2 border-primary-200 p-6 sm:p-8 md:p-10 hover:border-primary-300 transition-all duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
            <Package className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Mahsulotlarni Ko'chirish
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Bu bo'lim orqali mahsulotlarni bir filial yoki do'kondan boshqasiga ko'chirish va qabul qilish jarayonlarini amalga oshirasiz.
          </p>
        </div>
      </section>

      {/* Video qo'llanma */}
      <section className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative bg-gradient-to-br from-white via-primary-50/20 to-white rounded-2xl shadow-xl border-2 border-primary-200 p-6 sm:p-8 hover:border-primary-300 transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <Play className="w-5 h-5 text-white" />
            </div>
            Video qo'llanma
          </h2>
          <div className="relative group/video">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur-xl opacity-20 group-hover/video:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Mahsulot ko'chirish videosi"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-4 h-4" />
              <span>YouTube-da ochish</span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </section>

      {/* PDF yuklab olish */}
      <section className="group relative bg-gradient-to-br from-white via-yellow-50/30 to-white rounded-2xl shadow-xl border-2 border-yellow-200 p-6 sm:p-8 hover:border-yellow-300 transition-all duration-300">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          Qo'llanmani yuklab olish
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-gray-700 text-sm sm:text-base mb-2">
              Qo'llanmani PDF formatida yuklab oling va qulay joyda saqlang.
            </p>
          </div>
          <a
            href="https://docs.google.com/document/d/14cUTh30XA1fPZCGTuDlktk1pFSnWMXhmAl7bf1Xo-mI/export?format=pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            <span>PDF yuklab olish</span>
          </a>
        </div>
      </section>

      {/* Bosqichma-bosqich ko'rsatma */}
      <section className="group relative bg-gradient-to-br from-white via-primary-50/20 to-white rounded-2xl shadow-xl border-2 border-primary-200 p-6 sm:p-8 hover:border-primary-300 transition-all duration-300">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
            <Package className="w-5 h-5 text-white" />
          </div>
          Bosqichma-bosqich ko'rsatma
        </h2>
        <ol className="space-y-3 sm:space-y-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <li key={index} className="group/item">
                <div className={`flex items-start gap-4 p-4 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl border-l-4 border-primary-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}>
                  <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-md group-hover/item:scale-110 transition-transform`}>
                    {index + 1}
                  </div>
                  <div className="flex items-start gap-3 flex-1 pt-1">
                    <div className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium flex-1">
                      {step.text}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
