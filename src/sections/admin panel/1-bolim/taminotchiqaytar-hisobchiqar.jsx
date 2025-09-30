import React from "react";

const TaminotchiHisobdanChiqarish = () => {
  const stepsReturn = [
    { icon: "↩️", text: "Ombor → «Ta’minotchiga qaytarish» bo‘limiga o‘ting." },
    { icon: "➕", text: "«Yangi qaytarish» tugmasini bosing va qaytarish hujjatini yarating." },
    { icon: "🏪", text: "Savdo nuqtasini tanlang (qaysi ombor/do‘kondan qaytarilyapti)." },
    { icon: "🤝", text: "Ta’minotchini belgilang. Agar yo‘q bo‘lsa — yangi ta’minotchi qo‘shing." },
    { icon: "📦", text: "Qaytariladigan tovarlarni tanlang (shtrix-kod skaner yoki qidiruv orqali)." },
    { icon: "✍️", text: "Miqdor, narx va qaytarish sababini kiriting (masalan: yaroqsiz, muddati o‘tgan)." },
    { icon: "💳", text: "Qaytarish summasini tekshiring (qarzdorlik yoki qayta to‘lov hisoblanadi)." },
    { icon: "✅", text: "«Saqlash → Tasdiqlash» bilan yakunlang. Hujjat statusi «Tasdiqlangan» bo‘ladi." },
  ];

  const stepsWriteOff = [
    { icon: "🗃️", text: "Ombor → «Hisobdan chiqarish» bo‘limiga o‘ting." },
    { icon: "🧾", text: "«Yangi hujjat» yarating: sana, javobgar shaxs va izohni kiriting." },
    { icon: "📦", text: "Hisobdan chiqariladigan mahsulotlarni tanlang: shtrix-kod yoki qidiruv orqali." },
    { icon: "✍️", text: "Miqdor va sababini kiriting (yaroqsiz, yo‘qolgan, shikastlangan va h.k.)." },
    { icon: "📉", text: "Natija summasini tekshiring: bu yo‘qotish sifatida hisobotlarda aks etadi." },
    { icon: "✅", text: "«Saqlash → Tasdiqlash» bilan yakunlang. Tovar qoldig‘i kamayadi." },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-12">
      {/* 1) Ta’minotchiga qaytarish */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">Ta’minotchiga qaytarish</h2>

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

        {/* Yangi YO'RIQNOMA */}
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

      {/* 2) Hisobdan chiqarish */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">🗑️ Hisobdan chiqarish</h2>
        <div className="space-y-3 text-slate-700">
          <div className="font-semibold">📤 Hisobdan chiqarish — bu bo‘lim orqali savdo uchun mo‘ljallanmagan, bepul ishlatilgan yoki ichki ehtiyojlar uchun sarflangan mahsulotlarni ombor qoldig‘idan chiqarish mumkin.</div>
          <div className="font-semibold mt-2">🛠️ Qachon ishlatiladi?</div>
          <ul className="list-disc list-inside ml-4">
            <li>🍽️ Ishchilarga tushlik (obet) uchun sarflangan mahsulotlarda</li>
            <li>⚠️ Buzilgan yoki foydalanishga yaroqsiz mahsulotlarda</li>
            <li>🆓 Korxona ichida tekin ishlatilgan mahsulotlarda (reklama namunasi, ichki iste’mol va hokazo)</li>
          </ul>
          <div className="font-semibold mt-2">🔘 Amalni bajarish tartibi</div>
          <ol className="list-decimal list-inside ml-4 space-y-1">
            <li>🟩 “Hisobdan chiqarish” bo‘limiga kiring</li>
            <li>➕ “Qo‘shish” tugmasini bosing</li>
            {/* Qo‘shish tugmasi ostiga rasm */}
            <div className="flex justify-center my-2">
              <img
                src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/qoshim-hisob.jpg"
                alt="Qo‘shish tugmasi"
                style={{ width: '60%' }}
                className="rounded shadow"
              />
            </div>
            <li>🖥️ Yangi oynada quyidagi ma’lumotlarni kiriting:
              <ul className="list-disc list-inside ml-4">
        
              <li>
                <div className="flex justify-center my-2">
                  🏪 <b>Savdo nuqtasi</b> – mahsulot qaysi do'kondan chiqarilayotganini tanlang
                  </div>
                            <img
                              src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/qoshim-hisob.jpg"
                              alt="Izlash"
                              style={{ width: '60%' }}
                              className="rounded shadow"
                            />
              </li>
            <li>🔢 <b>Hisobdan chiqarishni nomerlash</b> – zaruratga qarab raqam berish mumkin</li>
            <li>🗒️ <b>Izoh</b> – hisobdan chiqarish sababi yoki boshqa qo‘shimcha ma’lumotlarni yozing</li>
  </ul>
            </li>


           
            <li>🏪 Savdo nuqtasini tanlash
              <div>Mahsulot aynan qaysi filial yoki do‘kondan chiqarilayotganini belgilang.</div>
            </li>
            <li>🔍 Mahsulotni izlash va qo‘shish
              <div>“Izlash” maydoniga mahsulot nomi yoki 📦 shtrix-kodini kiriting. Topilgan mahsulot yonidagi ➕ belgisini bosib ro‘yxatga qo‘shing.</div>
              {/* Izlash bosqichidan keyin rasm */}
              <div className="flex justify-center my-2">
                <img
                  src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/izlash-hisob.jpg"
                  alt="Izlash"
                  style={{ width: '60%' }}
                  className="rounded shadow"
                />
              </div>
            </li>
            <li>🔢 Miqdorni kiritish
              <div>“Miqdor” katakchasiga chiqarilishi kerak bo‘lgan sonni yozing. Masalan: 🍽️ ishchilar tushligi uchun 3 dona sarflangan bo‘lsa → “3”</div>
            </li>
            <li>💾 Saqlash
              <div>Pastki qismdagi 💾 “Saqlash” tugmasini bosing. 🟢 Mahsulot rasmiy tarzda ombordagi qoldiqdan chiqariladi va tizimda qayd etiladi.</div>
              {/* Saqlash bosqichidan keyin rasm */}
              <div className="flex justify-center my-2">
                <img
                  src="/assets/admin/1-bolim/tam-qayt-hisob-chiq/saqlash-hisob.jpg"
                  alt="Saqlash"
                  style={{ width: '60%' }}
                  className="rounded shadow"
                />
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default TaminotchiHisobdanChiqarish;
