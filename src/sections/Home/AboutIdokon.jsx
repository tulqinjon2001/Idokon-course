import React, { useRef } from "react";
import {
  Monitor, Warehouse, BarChart3, Users2, Send, Scale, CheckCircle2, Home, Watch,
  Gamepad2, ShoppingBasket, Laptop, Car, Hammer, Sofa, FlaskConical, Fuel, MoreHorizontal,
  GraduationCap, ArrowRight,
} from "lucide-react";

/**
 * IDOKON dasturi va kursi haqidagi asosiy ma'lumotlarni taqdim etuvchi komponent.
 * Tailwind CSS yordamida chiroyli va adaptiv tarzda yaratilgan.
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
      icon: <Monitor className="w-8 h-8" />,
      title: "Kassa tizimi",
      desc: "Kassirlarning hisob-kitobini yengillashtiradi, barcha tranzaksiyalarni kuzatadi.",
    },
    {
      icon: <Warehouse className="w-8 h-8" />,
      title: "Ombor boshqaruvi",
      desc: "Mahsulot qoldiqlarini kuzatish va samarali boshqarish imkoniyati.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Moliyaviy hisobotlar",
      desc: "Kunlik/oylik hisobotlar, foyda/zarar. Excelga eksport imkoniyati.",
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Ko'p foydalanuvchilik",
      desc: "Har bir foydalanuvchi uchun alohida rol va nazorat.",
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Telegram bot integratsiyasi",
      desc: "Qarz eslatmalari, chek yuborish va sodiqlik tizimi.",
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Elektron tarozilar",
      desc: "Kg mahsulotlarni tezkor va aniq sotish imkoniyati.",
    },
  ];

  /**
   * IDOKON kimlar uchun zarurligi.
   */
  const benefits = [
    {
      emoji: "🛒",
      text: "Do'kon boshqaruvini osonlashtirmoqchi bo'lganlar uchun",
    },
    {
      emoji: "😌",
      text: "Stress va tartibsizlikdan qutulishni istaganlar uchun",
    },
    { emoji: "⏳", text: "Vaqtining qadriga yetadiganlar uchun" },
    { emoji: "📈", text: "Daromadini barqaror oshirishni xohlovchilar uchun" },
    {
      emoji: "🤝",
      text: "Mijozlariga tez va sifatli xizmat ko'rsatishni istaganlar uchun",
    },
    {
      emoji: "🚀",
      text: "Biznesini zamonaviy texnologiyalar bilan rivojlantirmoqchi bo'lganlar uchun",
    },
  ];

  /**
   * IDOKONni tanlash sabablari (qisqa ro'yxat).
   */
  const why = [
    "Tezkor va qulay ishlaydi",
    "Moliyaviy hisob-kitobni aniq qiladi",
    "Vaqt va mablag'ni tejaydi",
    "Doimiy qo'llab-quvvatlash mavjud",
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
    <div className="w-full max-w-6xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 px-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-indigo-50 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8 lg:p-10 text-center">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight mb-3 sm:mb-4">
          IDOKON Dasturini <strong className="text-red-600">BEPUL</strong> To'liq O'zlashtirish Orqali{" "}
          <span className="text-cyan-700">Biznesingizni Optimallashtiring</span>
        </h1>
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2">
          <strong>IDOKON dasturi</strong> — bu shunchaki vosita emas, balki
          biznesingizni samarali boshqarish siri.
          <br />
          <strong>IDOKON-COURSE</strong> aynan siz uchun yaratilgan!
          <br />
          Bu platformada siz dasturning barcha <strong>chuqur imkoniyatlarini</strong> qisqa muddatda o'rganasiz. O'zlashtirilgan bilimingizni amalda
          qo'llang va biznesingizni <strong>yuqori darajaga</strong> olib chiqishni
          hoziroq boshlang. Shuningdek, bilimlaringizni <strong>testlar orqali sinab ko'rish</strong> imkoniyati ham mavjud.
        </p>
      </section>

      {/* IDOKON haqida */}
      <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          IDOKON haqida
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
          IDOKON dasturi haqida umumiy ma'lumot
        </p>
        
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
          IDOKON zamonaviy savdo-sotiq va do'kon boshqaruvi tizimi. Bu dastur orqali siz o'z biznesingizni oson va samarali boshqarishingiz mumkin.
        </p>

        {/* IDOKON imkoniyatlari */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-5 md:p-6 mt-4 sm:mt-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            IDOKON imkoniyatlari:
          </h2>
          <ol className="space-y-3">
            {[
              "Mahsulotlarni boshqarish va inventarizatsiya",
              "Savdo operatsiyalarini yuritish",
              "Moliyaviy hisobotlar va tahlillar",
              "Foydalanuvchilar va xodimlarni boshqarish",
              "Bir nechta do'kon va filiallarni boshqarish",
              "Real vaqtda statistika va tahlillar"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </span>
                <span className="text-gray-700 text-sm sm:text-base pt-0.5">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* IDOKON Dasturi */}
      <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3 sm:mb-4">
          IDOKON Dasturi
        </h2>
        <p className="text-gray-700 text-center text-sm sm:text-base leading-relaxed max-w-3xl mx-auto px-2">
          <strong>IDOKON</strong> — O'zbekistonda ishlab chiqilgan va savdo
          do'konlari uchun maxsus yaratilgan avtomatlashtirish platformasi. U
          savdo jarayonlarini qulay, tezkor va samarali boshqarish imkonini
          beradi.
        </p>
      </section>

      {/* 1. IDOKON nima? */}
      <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
            1
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            IDOKON nima?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            IDOKON yordamida mahsulotlarni tizimga kiritish, sotish, omborni
            nazorat qilish, foydani tahlil qilish va hisobotlarni avtomatik
            olishgacha bo'lgan jarayonlarning barchasini{" "}
            <strong>bitta dastur</strong> orqali boshqarishingiz mumkin.
          </p>
          <div className="overflow-hidden rounded-lg bg-gray-100 aspect-video flex items-center justify-center">
            <img
              ref={imgRef}
              onClick={openFullscreen}
              src="https://placehold.co/600x400/818CF8/FFFFFF?text=IDOKON+Ekrani"
              alt="IDOKON taqdimot rasmi"
              className="w-full h-full cursor-zoom-in object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://placehold.co/600x400/818CF8/FFFFFF?text=IDOKON+Ekrani';
              }}
            />
          </div>
        </div>
      </section>

      {/* 2. IDOKON dasturining asosiy imkoniyatlari */}
      <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <span className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
            2
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            IDOKON dasturining asosiy imkoniyatlari
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 text-blue-600 mb-3">
                {f.icon}
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Kimlar uchun IDOKON kerak? */}
      <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <span className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
            3
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            Kimlar uchun IDOKON kerak?
          </h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
          {benefits.map((b, i) => (
            <li
              key={i}
              className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm flex items-start gap-3"
            >
              <span className="text-2xl leading-none flex-shrink-0">{b.emoji}</span>
              <span className="text-gray-700 text-sm sm:text-base pt-1">{b.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Nega aynan IDOKON? */}
      <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <span className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
            4
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            Nega aynan IDOKON?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
          {why.map((w, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 text-sm sm:text-base">{w}</span>
            </div>
          ))}
        </div>
      </section>

      {/* IDOKON qaysi do'konlarga mos? */}
      <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
        <header className="mb-4 sm:mb-6 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
            IDOKON qaysi do'konlarga mos?
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">
            Quyidagi yo'nalishlar ideal yechim bera olamiz!
          </p>
        </header>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <li key={i}>
              <div className="w-full rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-5 flex flex-col items-center text-center">
                <div className="mb-3 inline-flex items-center justify-center rounded-lg p-2 bg-blue-50">
                  <cat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <span className="font-semibold text-gray-800 text-xs sm:text-sm">
                  {cat.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
