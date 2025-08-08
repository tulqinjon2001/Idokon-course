// idokon_kursi/frontend/src/sections/WhyIdokon.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBolt,
  faDollarSign,
  faShieldAlt,
  faBoxes,
  faMobileAlt,
  faPaperPlane,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

const WhyIdokon = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Nega IDOKON ni tanlash kerak?</h2>
      <p className="text-gray-700 mb-6">
        IDOKON dasturini tanlash uchun bir nechta asosli sabablari bor. Quyida
        “Nega aynan IDOKON?” degan savolga javob bo‘ladigan asosiy afzalliklar
        va ustunliklar keltirilgan:
      </p>

      <div className="space-y-6">
        <section>
          <div className="flex items-start mb-2">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 mr-3 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold">
                Mahalliylashtirilgan va O‘zbekistonga moslashtirilgan tizim
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>IDOKON — O‘zbekistonda ishlab chiqilgan.</li>
                <li>
                  Dastur mahalliy bozordagi ehtiyojlarga, soliq va savdo
                  qonunchiligiga moslashtirilgan.
                </li>
                <li>
                  Til — o‘zbek, rus tillarida mavjud (foydalanuvchi uchun
                  qulay).
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-start mb-2">
            <FontAwesomeIcon
              icon={faBolt}
              className="text-yellow-500 mr-3 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold">
                Tez va oson ishlash imkoniyati
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>
                  Dastur mobil telefon, planshet yoki kompyuterda ham ishlaydi.
                </li>
                <li>Foydalanish uchun katta texnik bilim talab qilinmaydi.</li>
                <li>O‘rnatilishi va sozlanishi oddiy.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-start mb-2">
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-green-600 mr-3 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold">
                Arzon narx va turli tariflar
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>IDOKON boshqa xorijiy analoglarga nisbatan ancha arzon.</li>
                <li>
                  Kichik biznesdan yirik savdo tarmoqlarigacha mos keladigan
                  moslashuvchan tarif rejalar mavjud.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-start mb-2">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-blue-500 mr-3 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold">
                Ma'lumotlar xavfsizligi va zaxira nusxasi
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>
                  Barcha ma’lumotlar bulutli serverda saqlanadi va yo‘qolishdan
                  himoyalangan.
                </li>
                <li>Har kuni avtomatik backup (zaxira nusxa) yaratiladi.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-start mb-2">
            <FontAwesomeIcon
              icon={faBoxes}
              className="text-purple-500 mr-3 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold">
                Savdoni, omborni va agentlarni to‘liq nazorat qilish
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>
                  Mahsulot qoldig‘i, Savdo hisobotlari, Foyda-zarar, Agentlar
                  faoliyati real vaqtda kuzatib boriladi.
                </li>
                <li>
                  Bu orqali biznesingizni xatolarsiz, aniq va nazorat ostida
                  yuritish imkoni yaratiladi.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-start mb-2">
            <FontAwesomeIcon
              icon={faMobileAlt}
              className="text-blue-400 mr-3 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold">
                Mobil kassa va kamera orqali skaner
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>
                  Telefon kamerasidan foydalanib shtrix-kodni skanerlash,
                  mahsulotni sotish va chek berish mumkin.
                </li>
                <li>Hech qanday qo‘shimcha uskuna talab qilmaydi.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-start mb-2">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-cyan-500 mr-3 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold">
                Telegram bilan integratsiya
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>
                  Telegram orqali buyurtmalar qabul qilish, foydalanuvchi
                  yuborgan ma’lumotlarni ko‘rish va hisobotlarni olish mumkin.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-start mb-2">
            <FontAwesomeIcon
              icon={faBrain}
              className="text-red-500 mr-3 mt-1"
            />
            <div>
              <h3 className="text-xl font-semibold">
                Doimiy qo‘llab-quvvatlash va o‘rganish imkoniyati
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>
                  Telegram guruhi, video darsliklar, telefon orqali yordam
                  mavjud.
                </li>
                <li>
                  IDOKON foydalanuvchilari uchun onlayn kurs platformasi ham
                  yaratilgan.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Xulosa qilib aytganda:</h3>
          <p className="text-gray-700">
            IDOKON — bu zamonaviy, oson, ishonchli va mahalliy biznes uchun
            to‘g‘ri tanlov!
          </p>
        </section>
      </div>
    </div>
  );
};

export default WhyIdokon;
