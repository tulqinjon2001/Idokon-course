import React, { useRef } from "react";
import {
  Monitor,
  Warehouse,
  BarChart3,
  Users2,
  Send,
  Scale,
  CheckCircle2,
  Home,
  Watch,
  Gamepad2,
  ShoppingBasket,
  Laptop,
  Car,
  Hammer,
  Sofa,
  FlaskConical,
  MoreHorizontal,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";

/**
 * IDOKON dasturi va kursi haqidagi asosiy ma'lumotlarni taqdim etuvchi komponent.
 * Zamonaviy va chiroyli dizayn bilan yaratilgan.
 */
export default function AboutIdokon() {
  const imgRef = useRef(null);

  /**
   * Rasmni to'liq ekran rejimida ochish funksiyasi.
   */
  const openFullscreen = () => {
    if (imgRef.current?.requestFullscreen) {
      imgRef.current.requestFullscreen();
    } else if (imgRef.current?.webkitRequestFullscreen) {
      imgRef.current.webkitRequestFullscreen();
    } else if (imgRef.current?.msRequestFullscreen) {
      imgRef.current.msRequestFullscreen();
    }
  };

  /**
   * IDOKON dasturining asosiy funksiyalari.
   */
  const features = [
    {
      icon: Monitor,
      title: "Kassa tizimi",
      desc: "Kassirlarning hisob-kitobini yengillashtiradi, barcha tranzaksiyalarni kuzatadi.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Warehouse,
      title: "Ombor boshqaruvi",
      desc: "Mahsulot qoldiqlarini kuzatish va samarali boshqarish imkoniyati.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: BarChart3,
      title: "Moliyaviy hisobotlar",
      desc: "Kunlik/oylik hisobotlar, foyda/zarar. Excelga eksport imkoniyati.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users2,
      title: "Ko'p foydalanuvchilik",
      desc: "Har bir foydalanuvchi uchun alohida rol va nazorat.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Send,
      title: "Telegram bot integratsiyasi",
      desc: "Qarz eslatmalari, chek yuborish va sodiqlik tizimi.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Scale,
      title: "Elektron tarozilar",
      desc: "Kg mahsulotlarni tezkor va aniq sotish imkoniyati.",
      color: "from-pink-500 to-pink-600",
    },
  ];

  /**
   * IDOKON kimlar uchun zarurligi.
   */
  const benefits = [
    {
      emoji: "🛒",
      text: "Do'kon boshqaruvini osonlashtirmoqchi bo'lganlar uchun",
      gradient: "from-blue-50 to-blue-100",
    },
    {
      emoji: "😌",
      text: "Stress va tartibsizlikdan qutulishni istaganlar uchun",
      gradient: "from-purple-50 to-purple-100",
    },
    {
      emoji: "⏳",
      text: "Vaqtining qadriga yetadiganlar uchun",
      gradient: "from-green-50 to-green-100",
    },
    {
      emoji: "📈",
      text: "Daromadini barqaror oshirishni xohlovchilar uchun",
      gradient: "from-orange-50 to-orange-100",
    },
    {
      emoji: "🤝",
      text: "Mijozlariga tez va sifatli xizmat ko'rsatishni istaganlar uchun",
      gradient: "from-cyan-50 to-cyan-100",
    },
    {
      emoji: "🚀",
      text: "Biznesini zamonaviy texnologiyalar bilan rivojlantirmoqchi bo'lganlar uchun",
      gradient: "from-pink-50 to-pink-100",
    },
  ];

  /**
   * IDOKONni tanlash sabablari.
   */
  const why = [
    { text: "Tezkor va qulay ishlaydi", icon: Zap },
    { text: "Moliyaviy hisob-kitobni aniq qiladi", icon: TrendingUp },
    { text: "Vaqt va mablag'ni tejaydi", icon: Shield },
    { text: "Doimiy qo'llab-quvvatlash mavjud", icon: Sparkles },
  ];

  /**
   * IDOKON mos keladigan savdo kategoriyalari.
   */
  const categories = [
    { name: "Oziq-ovqat", icon: ShoppingBasket },
    { name: "Aksessuarlar", icon: Watch },
    { name: "O'yinchoqlar", icon: Gamepad2 },
    { name: "Xo'jalik mollari", icon: Home },
    { name: "Texnika", icon: Laptop },
    { name: "Avto ehtiyot qismlar", icon: Car },
    { name: "Qurilish mollari", icon: Hammer },
    { name: "Mebel", icon: Sofa },
    { name: "Parfyum", icon: FlaskConical },
    { name: "Boshqalar", icon: MoreHorizontal },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 px-4 sm:px-6 md:px-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 text-center text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
            IDOKON Dasturini{" "}
            <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-lg inline-block transform -rotate-2">
              BEPUL
            </span>{" "}
            To'liq O'zlashtirish
          </h1>
          <p className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed opacity-95">
            <strong className="text-yellow-300">IDOKON dasturi</strong> — bu
            shunchaki vosita emas, balki biznesingizni samarali boshqarish siri.
            <br className="hidden sm:block" />
            <strong className="text-yellow-300">IDOKON-COURSE</strong> aynan siz
            uchun yaratilgan!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm sm:text-base">
              ✨ Chuqur imkoniyatlar
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm sm:text-base">
              📚 Qisqa muddatda o'rganish
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm sm:text-base">
              🎯 Testlar orqali sinash
            </div>
          </div>
        </div>
      </section>

      {/* IDOKON haqida */}
      <section className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              IDOKON haqida
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-1">
              Zamonaviy savdo-sotiq va do'kon boshqaruvi tizimi
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
          IDOKON zamonaviy savdo-sotiq va do'kon boshqaruvi tizimi. Bu dastur
          orqali siz o'z biznesingizni oson va samarali boshqarishingiz mumkin.
        </p>

        {/* IDOKON imkoniyatlari */}
        <div className="bg-gradient-to-br from-white via-primary-50/30 to-white rounded-xl border-2 border-primary-200 p-6 sm:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full"></div>
            IDOKON imkoniyatlari
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Mahsulotlarni boshqarish va inventarizatsiya",
              "Savdo operatsiyalarini yuritish",
              "Moliyaviy hisobotlar va tahlillar",
              "Foydalanuvchilar va xodimlarni boshqarish",
              "Bir nechta do'kon va filiallarni boshqarish",
              "Real vaqtda statistika va tahlillar",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-lg hover:shadow-md transition-all group"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-md group-hover:scale-110 transition-transform">
                  {index + 1}
                </span>
                <span className="text-gray-800 text-sm sm:text-base font-medium pt-1">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDOKON Dasturi */}
      <section className="bg-gradient-to-br from-white via-primary-50/20 to-white rounded-2xl shadow-xl border border-primary-200 p-8 sm:p-10 md:p-12 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 shadow-lg">
            <Monitor className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            IDOKON Dasturi
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            <strong className="text-primary-600">IDOKON</strong> — O'zbekistonda
            ishlab chiqilgan va savdo do'konlari uchun maxsus yaratilgan
            avtomatlashtirish platformasi. U savdo jarayonlarini qulay, tezkor
            va samarali boshqarish imkonini beradi.
          </p>
        </div>
      </section>

      {/* 1. IDOKON nima? */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 md:p-10">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-2xl sm:text-3xl font-bold text-white">1</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            IDOKON nima?
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              IDOKON yordamida mahsulotlarni tizimga kiritish, sotish, omborni
              nazorat qilish, foydani tahlil qilish va hisobotlarni avtomatik
              olishgacha bo'lgan jarayonlarning barchasini{" "}
              <strong className="text-primary-600 font-semibold">
                bitta dastur
              </strong>{" "}
              orqali boshqarishingiz mumkin.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                🎯 Bitta dastur
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                ⚡ Tezkor
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                📊 Tahlillar
              </span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-2xl border-4 border-white">
              <img
                ref={imgRef}
                onClick={openFullscreen}
                src="/assets/kirish/idokon ekrani.png"
                alt="IDOKON dastur ekrani"
                className="w-full h-auto cursor-zoom-in object-contain transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/600x400/818CF8/FFFFFF?text=IDOKON+Ekrani";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                  To'liq ko'rish uchun bosing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IDOKON dasturining asosiy imkoniyatlari */}
      <section className="bg-gradient-to-br from-white via-primary-50/20 to-white rounded-2xl shadow-xl border border-primary-200 p-6 sm:p-8 md:p-10">
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-2xl sm:text-3xl font-bold text-white">2</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            IDOKON dasturining asosiy imkoniyatlari
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const IconComponent = f.icon;
            return (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white to-primary-50/30 rounded-xl border-2 border-gray-200 p-6 shadow-md hover:shadow-2xl hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Kimlar uchun IDOKON kerak? */}
      <section className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 md:p-10">
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-2xl sm:text-3xl font-bold text-white">3</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Kimlar uchun IDOKON kerak?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${b.gradient} rounded-xl p-5 sm:p-6 border-2 border-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-4`}
            >
              <span className="text-3xl sm:text-4xl leading-none flex-shrink-0">
                {b.emoji}
              </span>
              <span className="text-gray-800 text-base sm:text-lg font-medium pt-1">
                {b.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Nega aynan IDOKON? */}
      <section className="bg-gradient-to-br from-white via-primary-50/20 to-white rounded-2xl shadow-xl border border-primary-200 p-6 sm:p-8 md:p-10">
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-2xl sm:text-3xl font-bold text-white">4</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Nega aynan IDOKON?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {why.map((w, i) => {
            const IconComponent = w.icon;
            return (
              <div
                key={i}
                className="group flex items-center gap-4 p-5 sm:p-6 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl border-2 border-primary-200 shadow-md hover:shadow-xl hover:border-primary-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-800 text-base sm:text-lg font-semibold">
                  {w.text}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* IDOKON qaysi do'konlarga mos? */}
      <section className="bg-gradient-to-br from-white via-primary-50/30 to-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 md:p-10">
        <header className="mb-8 sm:mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-4 shadow-lg">
            <ShoppingBasket className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            IDOKON qaysi do'konlarga mos?
          </h3>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Quyidagi yo'nalishlar ideal yechim bera olamiz!
          </p>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat, i) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={i}
                className="group relative bg-white rounded-xl border-2 border-gray-200 shadow-md hover:shadow-2xl hover:border-primary-400 transition-all duration-300 transform hover:-translate-y-2 p-5 sm:p-6 flex flex-col items-center text-center"
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <span className="font-bold text-gray-800 text-sm sm:text-base group-hover:text-primary-600 transition-colors">
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
