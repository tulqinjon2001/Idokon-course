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
          <h3 className="text-lg font-semibold text-slate-800">↩️ Ta’minotchiga qaytarish</h3>
          <div className="space-y-2 text-slate-700">
            <div>📦 Ta’minotchiga qaytarish — bu bo‘lim mahsulot ko‘p kiritilganda, ta’minotchidan olingan tovarlarni qaytarish zarur bo‘lganda ishlatiladi.</div>
            <div className="font-semibold mt-2">🛠️ Qachon ishlatiladi?</div>
            <ul className="list-disc list-inside ml-4">
              <li>❌ Mahsulot omborga ko‘p miqdorda kiritilgan bo‘lsa</li>
              <li>🔄 Kerakli mahsulot o‘rniga boshqa mahsulot qabul qilingan bo‘lsa</li>
              <li>↩️ Ta’minotchidan olingan mahsulotni qaytarib berish zarur bo‘lganda</li>
            </ul>
            <div className="font-semibold mt-2">🔘 Qanday amalga oshiriladi?</div>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>➡️ “Ta’minotchiga qaytarish” bo‘limiga kiring</li>
              <li>➕ “Qo‘shish” tugmasini bosing</li>
              {/* Qo‘shish tugmasi ostiga rasm */}
              <div className="flex justify-center my-2">
                <img
                  src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/qoshim-tam-qayt.jpg"
                  alt="Qo‘shish tugmasi"
                  style={{ width: '60%' }}
                  className="rounded shadow"
                />
              </div>
              <li>🖥️ Yangi oynada quyidagi ma’lumotlarni kiriting:
                <ul className="list-disc list-inside ml-4">
                  <li>🏪 Savdo nuqtasi – mahsulot qayerdan qaytarilayotganini tanlang</li>
                  <li>🧑‍💼 Ta’minotchi – mahsulot kimdan olingan bo‘lsa, shuni tanlang</li>
                  <li>💱 Valyuta – mahsulot qaysi pul birligida qabul qilingan (UZS yoki USD)</li>
                  <li>💳 To‘lov uslubi – to‘lov naqdmi yoki o‘tkazmami</li>
                </ul>
              </li>
              <li>🔍 Mahsulotni izlash
                <ul className="list-disc list-inside ml-4">
                  <li>Mahsulot nomi yoki 📦 shtrix-kodini kiriting</li>
                  <li>Ro‘yxatdan kerakli mahsulotni topib, ➕ qo‘shish tugmasini bosing</li>
                </ul>
                {/* Izlash bosqichidan keyin rasm */}
                <div className="flex justify-center my-2">
                  <img
                    src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/izlash-tam-qayt.jpg"
                    alt="Izlash"
                    style={{ width: '60%' }}
                    className="rounded shadow"
                  />
                </div>
              </li>
              <li>🔢 Qaytariladigan miqdorni kiriting
                <ul className="list-disc list-inside ml-4">
                  <li>“Qaytish miqdori” katakchasiga qaytariladigan sonni yozing</li>
                  <li>Masalan: 50 dona qabul qilingan, aslida 30 bo‘lishi kerak → 20 dona qaytariladi</li>
                </ul>
              </li>
              <li>💾 Saqlash
                <ul className="list-disc list-inside ml-4">
                  <li>Pastdagi 💾 “Saqlash” tugmasini bosing</li>
                  <li>🟢 Mahsulot rasmiy tarzda qaytarilgan hisoblanadi va ombor qoldig‘idan olib tashlanadi</li>
                </ul>
                {/* Saqlash bosqichidan keyin rasm */}
                <div className="flex justify-center my-2">
                  <img
                    src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/saqlash-tam-qayt.jpg"
                    alt="Saqlash"
                    style={{ width: '60%' }}
                    className="rounded shadow"
                  />
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <div className="font-semibold mt-2">🛠️ Qachon ishlatiladi?</div>
      <ul className="list-disc list-inside ml-4">
        <li>❌ Mahsulot omborga ortiqcha kiritilgan bo‘lsa</li>
        <li>
          🔄 Kerakli mahsulot o‘rniga boshqa mahsulot qabul qilingan bo‘lsa
        </li>
        <li>↩️ Ta’minotchidan olingan mahsulotni qaytarish zarur bo‘lsa</li>
      </ul>
      <div className="font-semibold mt-2">🔘 Amalni bajarish tartibi</div>
      <ol className="list-decimal list-inside ml-4 space-y-1">
        <li>🟩 “Hisobdan chiqarish” bo‘limiga kiring</li>
        <li>
          ➕ “Qo‘shish” tugmasini bosing
          {/* Qo‘shish tugmasi ostiga rasm — tasvir <li> ichida bo‘lishi kerak */}
          <div className="flex justify-center my-2">
            <img
              src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/qoshim-hisob.jpg"
              alt="Qo‘shish tugmasi"
              style={{ width: '60%' }}
              className="rounded shadow"
            />
          </div>
        </li>
        <li>
          🖥️ Yangi oynada quyidagi ma’lumotlarni kiriting:
          <ul className="list-disc list-inside ml-4">
            <li>
              <div className="flex items-center justify-center my-2">
                🏪 <b className="ml-2">Savdo nuqtasi</b> – mahsulot qaysi do'kondan chiqarilayotganini tanlang
              </div>
              <div className="flex justify-center my-2">
                <img
                  src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/qoshim-hisob.jpg"
                  alt="Savdo nuqtasi misoli"
                  style={{ width: '60%' }}
                  className="rounded shadow"
                />
              </div>
            </li>
            <li>🔢 <b>Hisobdan chiqarishni nomerlash</b> – zaruratga qarab raqam berish mumkin</li>
            <li>🗒️ <b>Izoh</b> – hisobdan chiqarish sababi yoki boshqa qo‘shimcha ma’lumotlarni yozing</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default TaminotchiHisobdanChiqarish;
                