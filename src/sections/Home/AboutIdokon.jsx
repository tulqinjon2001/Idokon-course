// idokon_kursi/frontend/src/sections/AboutIdokon.jsx

import React from "react";

const AboutIdokon = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Idokon qanday tizim?</h2>

      {/* YouTube videosi joyi */}
      <div className="video-container mb-6 rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Bu yerga kerakli video URL'ini qo'ying
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Qolgan ma'lumotlar joyi */}
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-2">IDOKON nima?</h3>
          <p className="text-gray-700">
            IDOKON — bu O‘zbekistonda ishlab chiqilgan savdo va biznes
            jarayonlarini avtomatlashtirish uchun mo‘ljallangan bulutli
            (cloud-based) platformadir. U turli savdo nuqtalari, agentlar, va
            kichik bizneslar uchun hisob-kitob, ombor, kassa va menejment
            funksiyalarini bir joyda boshqarish imkonini beradi.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">
            IDOKON dasturining asosiy imkoniyatlari:
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Xususiyatlar
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tavsifi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    🛒 Kassa tizimi
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Telefon yoki planshet orqali ishlaydigan mobil kassa. Kamera
                    orqali shtrix-kod skanerlash va mahsulot sotish imkoniyati
                    mavjud.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    📦 Ombor boshqaruvi
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Mahsulotlarni kiritish, chiqim qilish, qoldiqni kuzatish va
                    ombor harakatlarini tahlil qilish.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    📊 Hisobotlar
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Kunlik, oylik, mahsulot bo‘yicha, foyda va zarar
                    hisobotlari. Excelga eksport qilish mumkin.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    👥 Agentlar va kassirlar tizimi
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Har bir foydalanuvchiga alohida login-parol beriladi. Ular
                    o‘z faoliyatlariga qarab farqlanadi (agent, kassir, admin).
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    📱 Telegram integratsiyasi
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Buyurtmalarni yoki hisobotlarni Telegram orqali yuborish.
                    Ba’zi hollarda bot bilan bog‘lanish orqali ishlatiladi.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    📦 PLU orqali tovar qo‘shish
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Elektron tarozilardan keladigan PLU formatdagi ma'lumotlar
                    asosida tez mahsulot qo‘shish imkoniyati.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Kimlar uchun?</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
            <li>Do‘kon egalariga</li>
            <li>Agentlar va distributorlarga</li>
            <li>Marketlar, supermarketlar</li>
            <li>Kichik va o‘rta savdo korxonalariga</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">IDOKON sayti:</h3>
          <p className="text-gray-700">
            Rasmiy sayt — bu yerda siz tariflar, xizmatlar va qo‘llanmalarni
            topishingiz mumkin.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutIdokon;
