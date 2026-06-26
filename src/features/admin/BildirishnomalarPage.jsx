import React from "react";
import { Bell, Plus, Search, Save, CheckCircle, Settings, MessageSquare, ExternalLink } from "lucide-react";

const Bildirishnomalar = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
      {/* Header */}
      <section className="group relative bg-gradient-to-br from-white via-primary-50/30 to-white rounded-2xl shadow-xl border-2 border-primary-200 p-6 sm:p-8 md:p-10 hover:border-primary-300 transition-all duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Bell className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Bildirishnomalar bo'limi
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Mahsulotlar soni belgilangan limitdan kam qolganda avtomatik eslatma xabarlarini olish
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="group relative bg-gradient-to-br from-white via-blue-50/30 to-white rounded-2xl shadow-xl border-2 border-blue-200 p-6 sm:p-8 hover:border-blue-300 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              <strong className="text-gray-900">Bildirishnomalar</strong> mahsulotlar soni belgilangan limitdan kam
              qolganda sizga avtomatik tarzda <strong className="text-gray-900">Telegram bot</strong> orqali eslatma
              xabarlarini yuborish imkonini beradi.
            </p>
          </div>
        </div>
      </section>

      {/* Qo'llash tartibi */}
      <section className="group relative bg-gradient-to-br from-white via-primary-50/20 to-white rounded-2xl shadow-xl border-2 border-primary-200 p-6 sm:p-8 hover:border-primary-300 transition-all duration-300">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
            <Settings className="w-5 h-5 text-white" />
          </div>
          Qo'llash tartibi
        </h3>
        <ol className="space-y-4 sm:space-y-6">
          {[
            {
              icon: Bell,
              color: "from-blue-500 to-blue-600",
              text: "Admin paneldan 1-menyu → Bildirishnomalar bo'limiga kiring.",
              image: "/assets/admin/1-bolim/bildirishnoma/bildirish.png",
              alt: "Bildirishnomalar bo'limi"
            },
            {
              icon: Plus,
              color: "from-green-500 to-green-600",
              text: "➕ \"Qo'shish\" tugmasini bosing.",
              image: "/assets/admin/1-bolim/bildirishnoma/qoshish.png",
              alt: "Qo'shish tugmasi"
            },
            {
              icon: Search,
              color: "from-purple-500 to-purple-600",
              text: "🔍 Kerakli mahsulotni izlash orqali toping, minimal qoldiq sonini kiriting va 💾 \"Saqlash\" tugmasini bosing.",
              image: "/assets/admin/1-bolim/bildirishnoma/qoldiq-saqlash.png",
              alt: "Qoldiqni kiritish va saqlash"
            },
            {
              icon: CheckCircle,
              color: "from-red-500 to-red-600",
              text: "✅ Belgilangan sondan kam qolsa, mahsulot qizil rangda ajratilib ko'rsatiladi.",
              image: "/assets/admin/1-bolim/bildirishnoma/qizilsonikam.png",
              alt: "Qizil soni bilan ajratilgan mahsulotlar"
            }
          ].map((step, index) => {
            const IconComponent = step.icon;
            return (
              <li key={index} className="group/item">
                <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl border-l-4 border-primary-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-md group-hover/item:scale-110 transition-transform`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform flex-shrink-0 mt-1`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium flex-1 pt-1">
                        {step.text}
                      </p>
                    </div>
                    {step.image && (
                      <div className="relative group/img">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl blur opacity-0 group-hover/img:opacity-20 transition-opacity"></div>
                        <img
                          src={step.image}
                          alt={step.alt}
                          className="relative w-full rounded-xl shadow-lg border-2 border-gray-200 hover:border-primary-300 transition-all duration-300"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Telegram botga ulash */}
      <section className="group relative bg-gradient-to-br from-white via-teal-50/30 to-white rounded-2xl shadow-xl border-2 border-teal-200 p-6 sm:p-8 hover:border-teal-300 transition-all duration-300">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          Telegram botga ulash
        </h3>
        <ol className="space-y-4 sm:space-y-6">
          {[
            {
              icon: Settings,
              color: "from-indigo-500 to-indigo-600",
              text: "Admin panel → 4-menyu → Savdo nuqtalari bo'limiga kiring va ✏️ qalamcha tugmasini bosing.",
              image: "/assets/admin/1-bolim/bildirishnoma/telnomer.png",
              alt: "Telefon raqamini kiritish"
            },
            {
              icon: Search,
              color: "from-cyan-500 to-cyan-600",
              text: "Telegram ilovada @idokonsmsbot ni qidiring.",
              image: "/assets/admin/1-bolim/bildirishnoma/smsbot.jpg",
              alt: "Idokon SMS Bot"
            }
          ].map((step, index) => {
            const IconComponent = step.icon;
            return (
              <li key={index} className="group/item">
                <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-teal-50 to-teal-100/50 rounded-xl border-l-4 border-teal-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-md group-hover/item:scale-110 transition-transform`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform flex-shrink-0 mt-1`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium flex-1 pt-1">
                        {step.text}
                      </p>
                    </div>
                    {step.image && (
                      <div className="relative group/img">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl blur opacity-0 group-hover/img:opacity-20 transition-opacity"></div>
                        <img
                          src={step.image}
                          alt={step.alt}
                          className="relative w-full rounded-xl shadow-lg border-2 border-gray-200 hover:border-teal-300 transition-all duration-300"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Bot bosqichlari */}
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                image: "/assets/admin/1-bolim/bildirishnoma/smsbotstart.jpg",
                alt: "Botda Start tugmasi",
                text: "Botga /start yoki Boshlash tugmasini bosing."
              },
              {
                image: "/assets/admin/1-bolim/bildirishnoma/smsbotraqamniulashish.jpg",
                alt: "Raqamni ulashish",
                text: "📲 \"Raqamni ulashish\" tugmasini bosing."
              },
              {
                image: "/assets/admin/1-bolim/bildirishnoma/smsbotkelganxabar.jpg",
                alt: "Telegram botdan kelgan xabar",
                text: "✅ Shundan so'ng bot sizga mahsulotlar belgilangan miqdordan kam qolganda avtomatik xabar yuboradi."
              }
            ].map((item, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white via-teal-50/30 to-white rounded-xl shadow-lg border-2 border-teal-200 p-4 hover:border-teal-300 transition-all duration-300">
                <div className="relative group/img mb-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg blur opacity-0 group-hover/img:opacity-20 transition-opacity"></div>
                  <div className="relative flex items-center justify-center bg-gray-50 rounded-lg p-2 min-h-[200px]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="rounded-lg shadow-md max-h-[200px] max-w-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-center text-gray-700 font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bildirishnomalar;
