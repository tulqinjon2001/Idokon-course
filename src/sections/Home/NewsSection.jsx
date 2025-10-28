import React from "react";

const NewsSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg sm:rounded-lg md:rounded-2xl shadow-md">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900">
        Kerakli yangiliklar
      </h2>

      <div className="space-y-4 sm:space-y-6">
        <p className="text-gray-700 text-sm sm:text-base md:text-lg">
          IDOKON tizimidagi yangiliklar, yangilanishlar va muhim e'lonlar bu
          yerda joylashtiriladi.
        </p>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg">
          Hozircha yangiliklar mavjud emas. Tez orada yangi ma'lumotlar qo'shiladi.
        </p>

        <div className="border-b pb-4 sm:pb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
            Yangi funksiya: Telegram integratsiyasi
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">07-Avgust, 2025</p>
          <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base md:text-lg">
            Endi siz IDOKON tizimini Telegram orqali boshqarishingiz mumkin.
            Buyurtmalar qabul qilish va hisobotlarni olish ancha osonlashdi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
