import React from "react";
import { ClipboardList, Eye, Search, Edit, CheckCircle, Save, Play, ExternalLink, Lightbulb } from "lucide-react";

const BuyurtmalarSD = () => {
  const steps = [
    { icon: ClipboardList, color: "from-blue-500 to-blue-600", text: "Chap menyudan «Buyurtmalar SD» bo'limiga o'ting." },
    {
      icon: Eye,
      color: "from-purple-500 to-purple-600",
      text: "Ro'yxatda buyurtma raqami, sana, mijoz, summa va holatini ko'rasiz.",
    },
    {
      icon: Search,
      color: "from-green-500 to-green-600",
      text: "Qidiruv va filtrlash orqali sana, mijoz yoki holat bo'yicha tez toping.",
    },
    {
      icon: Edit,
      color: "from-orange-500 to-orange-600",
      text: "Buyurtma ustiga bosing — tafsilotlarni ko'rish yoki tahrirlash mumkin.",
    },
    {
      icon: CheckCircle,
      color: "from-emerald-500 to-emerald-600",
      text: "Holatini belgilang: «Bajarildi», «Kutilmoqda» yoki «Bekor qilingan».",
    },
    { icon: Save, color: "from-indigo-500 to-indigo-600", text: "O'zgarishlardan so'ng «Saqlash» tugmasini bosing." },
  ];

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
      {/* Header */}
      <section className="group relative bg-gradient-to-br from-white via-primary-50/30 to-white rounded-2xl shadow-xl border-2 border-primary-200 p-6 sm:p-8 md:p-10 hover:border-primary-300 transition-all duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <ClipboardList className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Buyurtmalar SD
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Buyurtmalarni boshqarish va kuzatish bo'yicha qo'llanma
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/CK4xgwh55v0?rel=0&modestbranding=1"
              title="IDOKON — Buyurtmalar SD"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <a
            href="https://www.youtube.com/watch?v=CK4xgwh55v0"
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

      {/* YO'RIQNOMA */}
      <section className="group relative bg-gradient-to-br from-white via-primary-50/20 to-white rounded-2xl shadow-xl border-2 border-primary-200 p-6 sm:p-8 hover:border-primary-300 transition-all duration-300">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
            <ClipboardList className="w-5 h-5 text-white" />
          </div>
          Qadam-baqadam yo'riqnoma
        </h3>

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

        {/* Eslatma */}
        <div className="mt-6 relative group/note">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl blur opacity-20 group-hover/note:opacity-30 transition-opacity"></div>
          <div className="relative p-5 bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-md">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-yellow-900 text-base sm:text-lg">
                Eslatma
              </div>
            </div>
            <ul className="list-disc list-inside text-yellow-900 space-y-2 text-sm sm:text-base">
              <li>
                Holatlarni to'g'ri belgilash — hisobotlarda muhim ahamiyatga ega.
              </li>
              <li>
                Filtrlardan foydalanish kerakli buyurtmani tez topishga yordam beradi.
              </li>
              <li>Har bir tahrirdan so'ng albatta «Saqlash» tugmasini bosing.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyurtmalarSD;
