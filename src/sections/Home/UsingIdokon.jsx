// idokon_kursi/frontend/src/sections/UsingIdokon.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faCashRegister,
  faUserShield,
  faUserTie,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

const UsingIdokon = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        IDOKON’dan foydalanish tartibi
      </h2>

      <div className="space-y-8">
        <section>
          <div className="flex items-start mb-2">
            <FontAwesomeIcon
              icon={faSignInAlt}
              className="text-blue-500 mr-3 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold">1. Kirish (Login)</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>
                  Brauzerda https://idokon.uz saytiga kiring yoki IDOKON
                  ilovasini oching.
                </li>
                <li>Sizga berilgan login va parol bilan tizimga kiring.</li>
                <li>
                  Tizim avtomatik ravishda sizning rolingizni aniqlaydi
                  (masalan: Admin, Kassa, Agent).
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-start mb-2">
            <FontAwesomeIcon
              icon={faCashRegister}
              className="text-green-500 mr-3 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold">
                2. KASSA panelidan foydalanish (Kassirlar uchun)
              </h3>
              <p className="text-gray-700">
                Kassirlar odatda mahsulotni skanerlab yoki qo‘lda tanlab, sotuv
                amalga oshiradilar.
              </p>
              <p className="font-semibold mt-2">Asosiy funksiyalar:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>Kamera orqali shtrix-kod skanerlash</li>
                <li>Mahsulotni qo‘shish</li>
                <li>Narxni avtomatik hisoblash</li>
                <li>Chek chiqarish yoki QR-kod shaklida berish</li>
                <li>Kundalik savdo hisoboti olish</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Misol: Tuxum, non, pampers kabi donalik mahsulotlar uchun
                shtrix-kodsiz savdo funksiyasi mavjud.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-start mb-2">
            <FontAwesomeIcon
              icon={faUserShield}
              className="text-red-500 mr-3 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold">
                3. ADMIN panelidan foydalanish (Do‘kon egasi yoki boshqaruvchi
                uchun)
              </h3>
              <p className="text-gray-700">
                Admin panelda siz butun biznesni nazorat qilasiz:
              </p>
              <p className="font-semibold mt-2">Asosiy funksiyalar:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>Mahsulotlarni kiritish, tahrirlash, o‘chirish</li>
                <li>
                  Foydalanuvchilarni (kassir, agent) yaratish va rollar berish
                </li>
                <li>Ombor qoldiqlarini nazorat qilish</li>
                <li>Kunlik, oylik hisobotlar</li>
                <li>Sozlamalar (chek turi, narx belgisi, valyuta)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-start mb-2">
            <FontAwesomeIcon
              icon={faUserTie}
              className="text-purple-500 mr-3 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold">
                4. AGENT panelidan foydalanish (Agentlar uchun)
              </h3>
              <p className="text-gray-700">
                Agentlar turli joylarda savdo qiladi yoki buyurtma oladi.
              </p>
              <p className="font-semibold mt-2">Asosiy funksiyalar:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>Buyurtma qabul qilish</li>
                <li>Ombor/qoldiqni ko‘rish</li>
                <li>Telegram orqali ma’lumot yuborish</li>
                <li>Hisobot berish va topshirish</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-start mb-2">
            <FontAwesomeIcon
              icon={faChartBar}
              className="text-yellow-500 mr-3 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold">
                5. HISOBOTLAR bilan ishlash
              </h3>
              <p className="text-gray-700">
                IDOKON’da siz turli hisobotlarni Excel yoki PDF ko‘rinishida
                chiqarishingiz mumkin:
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Hisobot turi
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
                        🗓 Kunlik savdo
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        Har kuni olingan daromad
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                        📦 Ombor harakati
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        Kirim-chiqim, qoldiq
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                        👤 Foydalanuvchi hisobi
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        Har bir kassir/agent faoliyati
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                        💰 Foyda-zarar
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        Aniq moliyaviy tahlil
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-start mb-2">
            <FontAwesomeIcon
              icon={faTelegram}
              className="text-cyan-500 mr-3 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold">
                6. Telegram bilan bog‘lash (ixtiyoriy)
              </h3>
              <p className="text-gray-700">
                IDOKON’da Telegram orqali agent yoki kassir buyurtma yuborishi
                mumkin, admin hisoblarni olishi mumkin, mahsulot yoki
                foydalanuvchi haqida tezkor ma’lumotlar keladi.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Qo‘shimcha yordam:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
            <li>
              Agar siz Video darslik izlayotgan bo‘lsangiz — IDOKON Telegram
              guruhiga qo‘shiling.
            </li>
            <li>
              Mobil kassa ilovasini yuklamoqchi bo‘lsangiz — playmarketdan
              “IDOKON” deb qidiring.
            </li>
            <li>
              Telegram botni ishga tushirmoqchi bo‘lsangiz — men sizga tayyorlab
              beraman.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UsingIdokon;
