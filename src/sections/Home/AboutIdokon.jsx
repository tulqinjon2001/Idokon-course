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
    <div className="w-full max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-14">
      {/* 1. IDOKON Course Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-indigo-50 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/40 to-indigo-100/30 blur-3xl opacity-60" />
        <div className="relative space-y-4 sm:space-y-6 font-serif">
          {/* Sarlavha */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            IDOKON Dasturini <strong className="text-red-600">BEPUL</strong> To'liq O'zlashtirish Orqali{" "}
            <span className="text-cyan-700">Biznesingizni Optimallashtiring</span>
          </h1>

          {/* Asosiy matn */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2">
            <strong>IDOKON dasturi</strong> — bu shunchaki vosita emas, balki
            biznesingizni samarali boshqarish siri.
            <br />
            <strong>IDOKON-COURSE</strong> aynan siz uchun yaratilgan!
            <br />
            Bu platformada siz dasturning barcha <strong>chuqur imkoniyatlarini</strong> qisqa muddatda o'rganasiz. O'zlashtirilgan bilimingizni amalda
            qo'llang va biznesingizni <strong>yuqori darajaga</strong> olib chiqishni
            hoziroq boshlang. Shuningdek, bilimlaringizni <strong>testlar orqali sinab ko'rish</strong> imkoniyati ham mavjud.
          </p>
        </div>
      </section>

      {/* 2. Hero / Title */}
      <div className="text-center space-y-3 sm:space-y-4 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          IDOKON Dasturi
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          <strong>IDOKON</strong> — O'zbekistonda ishlab chiqilgan va savdo
          do'konlari uchun maxsus yaratilgan avtomatlashtirish platformasi. U
          savdo jarayonlarini qulay, tezkor va samarali boshqarish imkonini
          beradi.
        </p>
      </div>

      {/* 3. Categories (Kimlar uchun mos?) */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-slate-50 to-white rounded-2xl">
        <div className="w-full max-w-6xl mx-auto px-4">
          <header className="mb-8 sm:mb-10 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
              IDOKON qaysi do'konlarga mos?
            </h3>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm">
              Quyidagi yo'nalishlar ideal yechim bera olamiz!
            </p>
          </header>

          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {categories.map((cat, i) => (
              <li key={i} className="relative group">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-xl sm:rounded-2xl bg-gradient-to-tr from-cyan-200/50 via-cyan-100/30 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <button
                  type="button"
                  className="w-full h-full rounded-xl sm:rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 p-4 sm:p-5 md:p-6 flex flex-col items-center text-center"
                  aria-label={cat.name}
                >
                  <div className="mb-3 sm:mb-4 inline-flex items-center justify-center rounded-lg sm:rounded-2xl p-2 sm:p-3 bg-cyan-50 group-hover:bg-cyan-100 transition-colors ring-1 ring-inset ring-cyan-100">
                    <cat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600 group-hover:scale-105 transition-transform" />
                  </div>
                  <span className="font-semibold text-slate-800 text-xs sm:text-sm md:text-base">
                    {cat.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. What is IDOKON */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center px-4">
        <div className="order-2 md:order-1 space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            1️⃣ IDOKON nima?
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            IDOKON yordamida mahsulotlarni tizimga kiritish, sotish, omborni
            nazorat qilish, foydani tahlil qilish va hisobotlarni avtomatik
            olishgacha bo'lgan jarayonlarning barchasini{" "}
            <strong>bitta dastur</strong> orqali boshqarishingiz mumkin.
          </p>
        </div>
        <div className="order-1 md:order-2 overflow-hidden shadow rounded-lg sm:rounded-xl">
          <div className="aspect-video">
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

      {/* 5. Features (Asosiy imkoniyatlar) */}
      <section className="space-y-6 sm:space-y-8 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
          2️⃣ IDOKON dasturining asosiy imkoniyatlari
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 bg-white rounded-lg sm:rounded-2xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 text-indigo-600">
                {f.icon}
              </div>
              <h3 className="mt-3 sm:mt-4 font-semibold text-base sm:text-lg text-gray-900">
                {f.title}
              </h3>
              <p className="mt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Who is it for */}
      <section className="space-y-6 sm:space-y-8 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
          3️⃣ Kimlar uchun IDOKON kerak?
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <li
              key={i}
              className="p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 flex items-start gap-3"
            >
              <span className="text-lg sm:text-xl leading-none flex-shrink-0">{b.emoji}</span>
              <span className="text-gray-700 text-xs sm:text-sm md:text-base">{b.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 7. Why IDOKON */}
      <section className="space-y-6 sm:space-y-8 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
          4️⃣ Nega aynan IDOKON?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {why.map((w, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100"
            >
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 text-xs sm:text-sm md:text-base">{w}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
