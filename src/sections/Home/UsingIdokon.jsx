import React from "react";
import {
  PlayCircle,
  UserPlus,
  ShoppingCart,
  CreditCard,
  Download,
} from "lucide-react";

const steps = [
  {
    title: "Ro'yxatdan o'tish",
    number: 1,
    icon: UserPlus,
    color: "from-blue-500 to-blue-600",
    desc: (
      <>
        <p className="mb-3">
          <a
            href="https://admin.idokon.uz/#/register"
            target="_blank"
            rel="noreferrer"
            className="text-primary-600 hover:text-primary-700 font-semibold underline decoration-2 underline-offset-2 transition-colors"
          >
            admin.idokon.uz/#/register
          </a>{" "}
          manziliga kiring.
        </p>
        <ul className="space-y-2 list-disc list-inside text-gray-700">
          <li>
            Ma'lumotlarni to'ldirib,{" "}
            <strong className="text-gray-900">login va parol</strong> tanlang.
          </li>
          <li>
            Ko'rsatilgan tartibda{" "}
            <strong className="text-gray-900">to'lovni amalga oshiring</strong>.
          </li>
          <li>
            To'lov tasdiqlangandan so'ng, IDOKON xodimlari siz uchun account
            ochib berishadi.
          </li>
        </ul>
      </>
    ),
    video: (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/F6U6gbD2W-0"
            title="IDOKON Ro'yxatdan o'tish"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    ),
  },
  {
    title: "Admin panelga kirish",
    number: 2,
    icon: PlayCircle,
    color: "from-purple-500 to-purple-600",
    desc: (
      <>
        <ul className="space-y-2 list-disc list-inside text-gray-700">
          <li>
            Qurilmangizdan{" "}
            <strong className="text-gray-900">Google Chrome</strong> brauzerini
            oching.
          </li>
          <li>
            <a
              href="https://my.idokon.uz"
              target="_blank"
              rel="noreferrer"
              className="text-primary-600 hover:text-primary-700 font-semibold underline decoration-2 underline-offset-2 transition-colors"
            >
              my.idokon.uz
            </a>{" "}
            manziliga kiring.
          </li>
          <li>
            Ro'yxatdan o'tishda tanlagan{" "}
            <strong className="text-gray-900">login va parol</strong> orqali
            tizimga kiring.
          </li>
          <li>
            Ushbu sahifani bundan keyin{" "}
            <strong className="text-gray-900">Admin panel</strong> deb ataymiz.
          </li>
        </ul>
      </>
    ),
    video: (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/waknksArg8E?rel=0&modestbranding=1"
            title="IDOKON — Admin panelga kirish"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Kassir qo'shish",
    number: 3,
    icon: UserPlus,
    color: "from-green-500 to-green-600",
    desc: (
      <>
        <ul className="space-y-2 list-disc list-inside text-gray-700">
          <li>
            Admin panelga kirib, chap menyudan{" "}
            <strong className="text-gray-900">Mening foydalanuvchilarim</strong>{" "}
            bo'limini tanlang.
          </li>
          <li>
            Yuqoridagi <strong className="text-gray-900">"Qo'shish"</strong>{" "}
            tugmasini bosing.
          </li>
          <li>
            <strong className="text-gray-900">Rol</strong> maydonidan{" "}
            <strong className="text-gray-900">Kassir</strong>ni tanlang va
            kassir uchun ism, telefon, login va parol belgilang.
          </li>
          <li>
            Saqlagandan keyin kassir tanlangan login va parol bilan kassa
            dasturiga kira oladi.
          </li>
        </ul>
      </>
    ),
    video: (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/V1mcKNpba-A?rel=0&modestbranding=1"
            title="IDOKON — Kassir qo'shish"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Do'kon uchun kassa qo'shish",
    number: 4,
    icon: ShoppingCart,
    color: "from-orange-500 to-orange-600",
    desc: (
      <>
        <ul className="space-y-2 list-disc list-inside text-gray-700">
          <li>
            Admin panelga kirib, chap menyudan{" "}
            <strong className="text-gray-900">Savdo nuqtasi kassa</strong>{" "}
            bo'limini tanlang.
          </li>
          <li>
            Yuqoridagi <strong className="text-gray-900">"Qo'shish"</strong>{" "}
            tugmasini bosing.
          </li>
          <li>
            Bu joydan <strong className="text-gray-900">Kassa nomi</strong>ni
            kiriting, <strong className="text-gray-900">Savdo nuqtasi</strong>{" "}
            va <strong className="text-gray-900">Valyuta</strong>ni tanlang va{" "}
            <strong className="text-gray-900">Saqlash</strong> tugmasini bosing.
          </li>
        </ul>
        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
          <p className="text-sm text-gray-800">
            <strong className="text-yellow-700">⚠️ Eslatma:</strong> Bu kassa
            do'konda nechta joydan savdo qilishingizga qarab qo'shiladi.
          </p>
        </div>
      </>
    ),
    video: (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/eM_xCZ-0ONk?rel=0&modestbranding=1"
            title="IDOKON — Kassa qo'shish"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Kassaga kirish",
    number: 5,
    icon: CreditCard,
    color: "from-cyan-500 to-cyan-600",
    desc: (
      <>
        <ul className="space-y-2 list-disc list-inside text-gray-700 mb-4">
          <li>Kassa dasturini kompyuteringizga o'rnatishingiz kerak.</li>
          <li>
            Dastur faylini quyidagi havola orqali yuklab oling va o'rnatishni
            tugatgandan so'ng, kassir uchun berilgan login va parol bilan
            tizimga kiring.
          </li>
        </ul>
        <div className="mt-4">
          <a
            href="https://github.com/tulqinjon2001/Idokon-course/releases/download/idokonkassa1.2.2/Idokonv1.2.3.x64.exe"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span>📥 Kassani yuklab olish</span>
          </a>
        </div>
      </>
    ),
    video: (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/iLP0_W_1cxg?rel=0&modestbranding=1"
            title="IDOKON — Kassaga kirish"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    ),
  },
];

const UsingIdokon = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 shadow-lg">
            <PlayCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            IDOKONdan foydalanishni boshlash
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Qadam-baqadam qo'llanma orqali IDOKON dasturidan foydalanishni
            o'rganing
          </p>
        </div>

        {/* Test account ma'lumotlari */}
        <div className="mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative border-2 border-red-500 rounded-2xl bg-gradient-to-br from-red-50 to-red-100/50 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🔑</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-800">
                  Test account
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-white to-primary-50/30 rounded-xl p-5 border-2 border-red-200 shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <UserPlus className="w-5 h-5 text-primary-600" />
                    Admin
                  </p>
                  <div className="space-y-2 text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-700 min-w-[70px]">
                        Login:
                      </span>
                      <code className="flex-1 bg-gradient-to-r from-primary-50 to-primary-100 px-3 py-1.5 rounded-lg text-primary-700 font-mono font-bold border border-primary-200">
                        alisher1234
                      </code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-700 min-w-[70px]">
                        Password:
                      </span>
                      <code className="flex-1 bg-gradient-to-r from-primary-50 to-primary-100 px-3 py-1.5 rounded-lg text-primary-700 font-mono font-bold border border-primary-200">
                        alisher1234
                      </code>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white to-primary-50/30 rounded-xl p-5 border-2 border-red-200 shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary-600" />
                    Kassir
                  </p>
                  <div className="space-y-2 text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-700 min-w-[70px]">
                        Login:
                      </span>
                      <code className="flex-1 bg-gradient-to-r from-primary-50 to-primary-100 px-3 py-1.5 rounded-lg text-primary-700 font-mono font-bold border border-primary-200">
                        kassirtest1
                      </code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-700 min-w-[70px]">
                        Password:
                      </span>
                      <code className="flex-1 bg-gradient-to-r from-primary-50 to-primary-100 px-3 py-1.5 rounded-lg text-primary-700 font-mono font-bold border border-primary-200">
                        kassirtest1
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className={`group relative ${
                  idx % 2 === 0
                    ? "md:grid md:grid-cols-2 md:gap-12 items-center"
                    : "md:grid md:grid-cols-2 md:gap-12 items-center"
                }`}
              >
                {/* Video Section */}
                <div
                  className={`mb-8 md:mb-0 ${
                    idx % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  {step.video}
                </div>

                {/* Content Section */}
                <div
                  className={`${idx % 2 === 0 ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="bg-gradient-to-br from-white via-primary-50/20 to-gray-50 rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-300">
                    {/* Step Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-gray-500">
                            QADAM
                          </span>
                          <span className="text-2xl font-extrabold text-gray-400">
                            #{step.number}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Step Description */}
                    <div className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      {step.desc}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UsingIdokon;
