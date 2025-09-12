// AboutIdokon.jsx
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
  Fuel,
  MoreHorizontal,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import imageidokon from "../../../public/assets/kirish/img2.jpg";

export default function AboutIdokon() {
  const imgRef = useRef(null);

  const openFullscreen = () => {
    if (imgRef.current?.requestFullscreen) {
      imgRef.current.requestFullscreen();
    } else if (imgRef.current?.webkitRequestFullscreen) {
      imgRef.current.webkitRequestFullscreen();
    } else if (imgRef.current?.msRequestFullscreen) {
      imgRef.current.msRequestFullscreen();
    }
  };

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
      title: "Ko‘p foydalanuvchilik",
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

  const benefits = [
    {
      emoji: "🛒",
      text: "Do‘kon boshqaruvini osonlashtirmoqchi bo‘lganlar uchun",
    },
    {
      emoji: "😌",
      text: "Stress va tartibsizlikdan qutulishni istaganlar uchun",
    },
    { emoji: "⏳", text: "Vaqtining qadriga yetadiganlar uchun" },
    { emoji: "📈", text: "Daromadini barqaror oshirishni xohlovchilar uchun" },
    {
      emoji: "🤝",
      text: "Mijozlariga tez va sifatli xizmat ko‘rsatishni istaganlar uchun",
    },
    {
      emoji: "🚀",
      text: "Biznesini zamonaviy texnologiyalar bilan rivojlantirmoqchi bo‘lganlar uchun",
    },
  ];

  const why = [
    "Tezkor va qulay ishlaydi",
    "Moliyaviy hisob-kitobni aniq qiladi",
    "Vaqt va mablag‘ni tejaydi",
    "Doimiy qo‘llab-quvvatlash mavjud",
  ];

  const categories = [
    { name: "Oziq-ovqat", icon: ShoppingBasket },
    { name: "Aksessuarlar", icon: Watch },
    { name: "O‘yinchoqlar", icon: Gamepad2 },
    { name: "Xo'jalik mollari", icon: Home },
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
          savdo jarayonlarini qulay, tezkor va samarali boshqarish imkonini
          beradi.
        </p>
      </header>

      {/* Categories */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <header className="mb-10 text-center">
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">
              IDOKON qaysi do‘konlarga mos?
            </h3>
            <p className="mt-2 text-slate-600 text-sm">
              Quyidagi yo‘nalishlar ideal yechim bera olamiz!
            </p>
          </header>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories.map((cat, i) => (
              <li key={i} className="relative group">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-tr from-cyan-200/50 via-cyan-100/30 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <button
                  type="button"
                  className="w-full h-full rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 p-6 flex flex-col items-center text-center"
                  aria-label={cat.name}
                >
                  <div className="mb-4 inline-flex items-center justify-center rounded-2xl p-3 bg-cyan-50 group-hover:bg-cyan-100 transition-colors ring-1 ring-inset ring-cyan-100">
                    <cat.icon className="w-8 h-8 text-cyan-600 group-hover:scale-105 transition-transform" />
                  </div>
                  <span className="font-semibold text-slate-800">
                    {cat.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
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
        <div className="order-1 md:order-2 overflow-hidden shadow rounded-xl">
          <div className="aspect-video">
            <img
              ref={imgRef}
              onClick={openFullscreen}
              src={imageidokon}
              alt="IDOKON taqdimot rasmi"
              className="w-full h-full cursor-zoom-in"
              style={{ objectFit: "contain" }}
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
              <span className="text-xl leading-none">{b.emoji}</span>
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
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <span className="text-gray-700">{w}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
