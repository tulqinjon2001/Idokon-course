// idokon_kursi/frontend/src/sections/NewsSection.jsx

import React from "react";

const NewsSection = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Kerakli yangiliklar</h2>

      <div className="space-y-4">
        <p className="text-gray-700">
          IDOKON tizimidagi yangiliklar, yangilanishlar va muhim e'lonlar bu
          yerda joylashtiriladi.
        </p>
        <p className="text-gray-700">
          Hozircha yangiliklar mavjud emas. Tez orada yangi ma'lumotlar qo'shiladi.
        </p>

        {/* Yangiliklarni joylashtirish uchun joy */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold">
            Yangi funksiya: Telegram integratsiyasi
          </h3>
          <p className="text-sm text-gray-500">07-Avgust, 2025</p>
          <p className="mt-2 text-gray-700">
            Endi siz IDOKON tizimini Telegram orqali boshqarishingiz mumkin.
            Buyurtmalar qabul qilish va hisobotlarni olish ancha osonlashdi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
