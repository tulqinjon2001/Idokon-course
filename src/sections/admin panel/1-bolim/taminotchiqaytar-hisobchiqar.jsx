import React from "react";

const TaminotchiHisobdanChiqarish = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-12">
      {/* 1) Ta’minotchiga qaytarish */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Ta’minotchiga qaytarish
        </h2>

        {/* VIDEO */}
        <div className="bg-slate-100 rounded-lg overflow-hidden aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/XXXXXX?rel=0&modestbranding=1"
            title="IDOKON — Ta’minotchiga qaytarish"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        {/* YO'RIQNOMA */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">
            ↩️ Ta’minotchiga qaytarish
          </h3>
          <p className="text-slate-700">
            📦 Ta’minotchiga qaytarish — noto‘g‘ri yoki ortiqcha kirim qilingan
            mahsulotlarni ta’minotchiga qaytarish uchun ishlatiladi.
          </p>

          <div className="font-semibold mt-2">🛠️ Qachon ishlatiladi?</div>
          <ul className="list-disc list-inside ml-4">
            <li>❌ Mahsulot omborga ortiqcha kiritilgan bo‘lsa</li>
            <li>
              🔄 Kerakli mahsulot o‘rniga boshqa mahsulot qabul qilingan bo‘lsa
            </li>
            <li>↩️ Ta’minotchidan olingan mahsulotni qaytarish zarur bo‘lsa</li>
          </ul>

          <div className="font-semibold mt-2">🔘 Qanday amalga oshiriladi?</div>
          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li>➡️ “Ta’minotchiga qaytarish” bo‘limiga kiring</li>
            <li>
              ➕ “Qo‘shish” tugmasini bosing
              <div className="flex justify-center my-2">
                <img
                  src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/qoshim-tam-qayt.jpg"
                  alt="Qo‘shish tugmasi"
                  className="rounded shadow max-w-[60%]"
                />
              </div>
            </li>
            <li>
              🖥️ Yangi hujjatda quyidagilarni kiriting:
              <ul className="list-disc list-inside ml-6">
                <li>🏪 Savdo nuqtasi</li>
                <li>🧑‍💼 Ta’minotchi</li>
                <li>💱 Valyuta (UZS/USD)</li>
                <li>💳 To‘lov turi (naqd yoki o‘tkazma)</li>
              </ul>
            </li>
            <li>
              🔍 Mahsulotni izlash
              <ul className="list-disc list-inside ml-6">
                <li>Mahsulot nomi yoki 📦 shtrix-kodini yozing</li>
                <li>Topilganini tanlab ➕ bosing</li>
              </ul>
              <div className="flex justify-center my-2">
                <img
                  src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/izlash-tam-qayt.jpg"
                  alt="Mahsulotni izlash"
                  className="rounded shadow max-w-[60%]"
                />
              </div>
            </li>
            <li>🔢 Qaytariladigan miqdorni yozing</li>
            <li>
              💾 Saqlash tugmasini bosing
              <div className="flex justify-center my-2">
                <img
                  src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/saqlash-tam-qayt.jpg"
                  alt="Saqlash tugmasi"
                  className="rounded shadow max-w-[60%]"
                />
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 2) Hisobdan chiqarish */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">
          🗑️ Hisobdan chiqarish
        </h2>
        <p className="text-slate-700">
          📤 Bu bo‘lim orqali savdo uchun mo‘ljallanmagan yoki yaroqsiz
          mahsulotlarni ombor qoldig‘idan chiqarish mumkin.
        </p>

        <div className="font-semibold mt-2">🛠️ Qachon ishlatiladi?</div>
        <ul className="list-disc list-inside ml-4">
          <li>🍽️ Xodimlar tushligi uchun sarflangan mahsulotlarda</li>
          <li>⚠️ Buzilgan yoki yaroqsiz mahsulotlarda</li>
          <li>🆓 Ichki ehtiyoj/reklama uchun ishlatilgan mahsulotlarda</li>
        </ul>

        <div className="font-semibold mt-2">🔘 Amal tartibi</div>
        <ol className="list-decimal list-inside ml-4 space-y-2">
          <li>
            ➕ “Qo‘shish” tugmasini bosing
            <div className="flex justify-center my-2">
              <img
                src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/qosh-hisob.jpg"
                alt="Hisobdan chiqarish qo‘shish"
                className="rounded shadow max-w-[60%]"
              />
            </div>
          </li>
          <li>
            Yangi hujjatda ma’lumotlarni kiriting:
            <ul className="list-disc list-inside ml-6">
              <li>🏪 Savdo nuqtasi</li>
              <li>🔢 Hujjat raqami (ixtiyoriy)</li>
              <li>🗒️ Izoh (sababi)</li>
            </ul>
          </li>
          <li>
            🔍 Mahsulotni izlash va qo‘shish
            <div className="flex justify-center my-2">
              <img
                src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/izlash-hisob.jpg"
                alt="Izlash"
                className="rounded shadow max-w-[60%]"
              />
            </div>
          </li>
          <li>🔢 Miqdorni yozing</li>
          <li>
            💾 Saqlash tugmasini bosing
            <div className="flex justify-center my-2">
              <img
                src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/saqlash-hisob.jpg"
                alt="Saqlash (hisobdan chiqarish)"
                className="rounded shadow max-w-[60%]"
              />
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default TaminotchiHisobdanChiqarish;
