// AboutIdokon.jsx
// ——— Quick setup notes ———
// 1) Install deps (once):
//    npm install swiper lucide-react
// 2) Make sure TailwindCSS is configured in your project.
// 3) Replace PLACEHOLDER links below: IMAGE_LINK_* and VIDEO_LINK_*.
// 4) Drop this component anywhere in your app. It’s self‑contained.

import React from "react";
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
  Fuel,
  MoreHorizontal,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AboutIdokon() {
  const slides = [
    {
      img: "data:image/jpeg;base64,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",
      title: "IDOKON — kassa ilovasi",
      desc: "Savdo do‘konlari uchun maxsus ishlab chiqilgan zamonaviy kassa dasturi.",
    },
    {
      img: "/images/slide2.png",
      title: "IDOKON — Ombor nazorati",
      desc: "Mahsulot qoldiqlarini kuzatish va samarali boshqarish imkoniyati.",
    },
    {
      img: "/images/slide3.png",
      title: "IDOKON — Moliyaviy hisobotlar",
      desc: "Kunlik va oylik daromadni avtomatik shakllantiruvchi tizim.",
    },
  ];

  const features = [
    {
      icon: <Monitor className="w-8 h-8" aria-hidden />,
      title: "Kassa tizimi",
      desc: "Kassirlarning hisob-kitobini yengillashtiradi, smena davomida barcha tranzaksiyalarni kuzatadi va doimiy nazoratni ta’minlaydi.",
    },
    {
      icon: <Warehouse className="w-8 h-8" aria-hidden />,
      title: "Ombor boshqaruvi",
      desc: "Mahsulot qoldiqlarini kuzatish, ombor harakatlarini tahlil qilish va samarali boshqarish imkoniyati.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" aria-hidden />,
      title: "Moliyaviy hisobotlar",
      desc: "Foyda/zarar, kunlik-oylik hisobotlar. Excel va boshqa formatlarga eksport qilish qo‘llab-quvvatlanadi.",
    },
    {
      icon: <Users2 className="w-8 h-8" aria-hidden />,
      title: "Ko‘p foydalanuvchilik tizim",
      desc: "Kassir, agent, tovar kirituvchi va administratorlar uchun alohida kirish huquqlari, ularning faoliyatini to‘liq nazorat qilish.",
    },
    {
      icon: <Send className="w-8 h-8" aria-hidden />,
      title: "Telegram bot integratsiyasi",
      desc: "Qarz eslatmalari, tovar qoldig‘i xabarnomalari, elektron chek va sodiqlik (loyalty) mexanizmlari.",
    },
    {
      icon: <Scale className="w-8 h-8" aria-hidden />,
      title: "Elektron tarozilar",
      desc: "Kg mahsulotlarni tezkor va aniq sotish. Masalan, Shtrix M va Kuanyi tarozilari bilan ishlaydi.",
    },
  ];

  const benefits = [
    {
      emoji: "🛒",
      text: "Do‘konini boshqarishni osonlashtirmoqchi bo‘lganlar uchun",
    },
    {
      emoji: "😌",
      text: "Doimiy stress va tartibsizlikdan qutulishni istaganlar uchun",
    },
    { emoji: "⏳", text: "O‘z vaqtining qadriga yetadiganlar uchun" },
    { emoji: "📈", text: "Daromadini barqaror oshirishni xohlovchilar uchun" },
    {
      emoji: "🤝",
      text: "Mijozlariga tez va sifatli xizmat ko‘rsatishni istaganlar uchun",
    },
    {
      emoji: "🚀",
      text: "Biznesini zamonaviy texnologiyalar bilan rivojlantirishni maqsad qilganlar uchun",
    },
  ];

  const why = [
    "Tezkor va qulay ishlaydi",
    "Moliyaviy hisob-kitobni aniq qiladi",
    "Vaqt va mablag‘ni tejaydi",
    "Doimiy qo'llab-quvvatlash turadi",
  ];

  const categories = [
    { name: "Hozmagazin", icon: Home },
    { name: "Aksessuarlar", icon: Watch },
    { name: "O‘yinchoqlar", icon: Gamepad2 },
    { name: "Oziq-ovqat", icon: ShoppingBasket },
    { name: "Texnika", icon: Laptop },
    { name: "Avto zapchast", icon: Car },
    { name: "Qurilish mollari", icon: Hammer },
    { name: "Mebel", icon: Sofa },
    { name: "Parfyum", icon: FlaskConical },
    { name: "Avtoximya", icon: Fuel },
    { name: "Boshqalar", icon: MoreHorizontal },
  ];

  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10 space-y-14 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm">
      {/* Hero / Title */}
      <header className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          IDOKON Dasturi
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          <strong>IDOKON</strong> — O‘zbekistonda ishlab chiqilgan va savdo
          do‘konlari uchun maxsus yaratilgan avtomatlashtirish platformasi. U
          savdo jarayonlarini qulay, tezkor va samarali boshqarish imkoniyatini
          beradi.
        </p>
      </header>

      {/* Slideshow */}
      <section className="py-10 px-5 lg:px-20">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            IDOKON Dasturi
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            <span className="font-semibold">IDOKON</span> — O‘zbekistonda ishlab
            chiqilgan va savdo do‘konlari uchun maxsus yaratilgan
            avtomatlashtirish platformasi. U savdo jarayonlarini qulay, tezkor
            va samarali boshqarish imkoniyatini beradi.
          </p>
        </div>

        {/* Swiper (Slide show) */}
        <div className="max-w-4xl mx-auto mb-12">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="rounded-2xl shadow-lg"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center p-6">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="h-60 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-700">
                    {slide.title}
                  </h3>
                  <p className="text-gray-500 mt-2">{slide.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            IDOKON qaysi do‘konlarga mos?
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, index) => (
              <div key={index} className="flex items-center gap-2">
                <cat.icon className="w-5 h-5" />
                <span>{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is IDOKON */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            1️⃣ IDOKON nima?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            IDOKON yordamida mahsulotlarni tizimga kiritish, sotish, omborni
            nazorat qilish, foydani tahlil qilish va hisobotlarni avtomatik
            olishgacha bo‘lgan jarayonlarning barchasini{" "}
            <strong>bitta dastur</strong> orqali boshqarishingiz mumkin.
          </p>
        </div>
        <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="VIDEO_LINK_1" // ← YouTube/loom/video link
              title="IDOKON taqdimot videosi"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          2️⃣ IDOKON dasturining asosiy imkoniyatlari
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 text-indigo-600">
                {f.icon}
                <span className="sr-only">icon</span>
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-900">
                {f.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who is it for */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          3️⃣ Kimlar uchun IDOKON kerak?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <li
              key={i}
              className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex items-start gap-3"
            >
              <span className="text-xl leading-none" aria-hidden>
                {b.emoji}
              </span>
              <span className="text-gray-700">{b.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Why IDOKON */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          4️⃣ Nega aynan IDOKON?
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {why.map((w, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <CheckCircle2 className="w-6 h-6 text-green-600" aria-hidden />
              <span className="text-gray-700">{w}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Site CTA */}
      <section className="text-center space-y-3">
        <h3 className="text-xl font-semibold text-gray-900">5️⃣ Rasmiy sayt</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Rasmiy sayt orqali tariflar, xizmatlar va foydalanuvchilar uchun video
          hamda matnli qo‘llanmalar bilan tanishishingiz mumkin.
        </p>
        {/* Ixtiyoriy: sayt skrinshoti */}
        <div className="mt-4 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow">
          <img
            src="IMAGE_LINK_WEBSITE" // ← Sayt skrinshoti linki
            alt="IDOKON rasmiy sayti"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
