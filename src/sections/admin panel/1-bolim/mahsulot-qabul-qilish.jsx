import React from "react";

const MahsulotQabulQilish = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">
        Mahsulotlar qabul qilish
      </h2>

      <p className="text-slate-600">
        Omborga kelgan tovarlarni nakladnoy orqali tizimga kiritish bo‘limi.
        Quyidagi bosqichlarni ketma-ket bajaring.
      </p>

      {/* QADAMLAR */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-800">
          Qadam-baqadam yo‘riqnoma
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-slate-700">
          <li>
            <b>Mahsulotlar → Qabul qilish</b> bo‘limiga o‘ting va{" "}
            <b>Qo‘shish</b> tugmasini bosing.
          </li>
          <li>
            <b>Yangi nakladnoy</b> yarating (avvalgi nakladnoylar ro‘yxati
            yuqorida ko‘rinadi).
          </li>
          <li>
            <b>Savdo nuqtasi</b>ni tanlang (bir nechta do‘kon bo‘lishi mumkin —
            qaysi biriga kirityapsiz, o‘shani tanlang).
          </li>
          <li>
            <b>*</b> belgilangan maydonlar <b>majburiy</b>: savdo nuqtasi,
            yetkazib beruvchi, valyuta va h.k.
          </li>
          <li>
            <b>Ta’minotchi</b>ni tanlang. Agar yo‘q bo‘lsa,{" "}
            <b>Yangi ta’minotchi</b> yarating (nomi, rasm/telefon) va saqlang —
            keyingi safar tayyor turadi.
          </li>
          <li>
            Agar to‘lovni keyin qaytarish rejangiz bo‘lsa,{" "}
            <b>Qaytarish sanasi / qarzdorlik</b> maydonlarini to‘ldiring. Naqd
            bo‘lsa — shart emas.
          </li>
          <li>
            <b>Valyuta</b>ni tanlang (So‘m yoki USD). USD bo‘lsa <b>kurs</b>{" "}
            kiriting va u avtomatik so‘mga hisoblanadi.
            <br />
            ❗️ Bir mahsulot <i>qachonlardir USDda</i> kiritilgan bo‘lsa, keyin
            uni so‘mda kiritib bo‘lmaydi (valyutada izchillik shart).
          </li>
          <li>
            <b>Nakladnoy holati</b>: To‘langan / To‘lanmagan. To‘lanmagan bo‘lsa
            ta’minotchiga qarzdorlik yoziladi.
          </li>
          <li>
            <b>To‘lov usuli</b>: Naqd / Pul o‘tkazma. Bu faqat “To‘langan” uchun
            ahamiyatli.
          </li>
          <li>
            Kerak bo‘lsa <b>nakladnoy raqami</b>ni kiriting. Takror kiritishni
            oldini oluvchi bildirishnoma chiqadi.
          </li>
          <li>
            <b>Ulgurji foiz</b>ni kiritsangiz, ulgurji narx avtomatik
            hisoblanadi (masalan 15%).
          </li>
          <li>
            <b>Chakana ustama</b> foizlarini kiriting (masalan 12%, 30%, 40% va
            h.k.).
          </li>
          <li>
            <b>Yo‘l/xarajat</b> kabi qo‘shimcha sarflarni kiriting — bu{" "}
            <i>tovar tannarxiga</i> qo‘shiladi.
          </li>
          <li>
            Pastki qismda <b>Tovarlar</b>ni qo‘shing:
            <ul className="list-disc list-inside ml-4">
              <li>
                <b>Yangi tovar</b> bo‘lsa: <b>Qo‘shish</b> → shtrix-kod
                skaner/qo‘l bilan, nomi, birligi (dona/kg/m), kategoriya
                ixtiyoriy.
              </li>
              <li>
                Shtrix-kod bo‘lmasa — “avtomatik shtrix-kod berish” tugmasidan
                foydalaning.
              </li>
              <li>
                <b>Oldingi tovar</b> bo‘lsa: <b>Izlash</b> orqali toping yoki
                shtrix-kodni skaner qiling.
              </li>
            </ul>
          </li>
          <li>
            Har bir pozitsiya uchun <b>soni</b>, <b>kelgan narx</b>,{" "}
            <b>sotish/ulgurji narx</b> va kerak bo‘lsa{" "}
            <b>amal qilish muddati</b>ni kiriting.
          </li>
          <li>
            Tugagach, <b>Saqlash → Tasdiqlash</b> ni bosing — tovarlar omborga
            qabul qilinadi.
          </li>
          <li>
            <b>Natija</b>: Nakladnoy bo‘yicha summalar, ta’minotchi va vaqt
            bo‘yicha hisobotlarda ko‘rinadi.
          </li>
        </ol>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <div className="font-medium text-slate-800 mb-1">💡 Eslatma</div>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>
              <b>*</b> bilan belgilangan maydonlar — majburiy.
            </li>
            <li>
              Valyutada izchillikni saqlang: USDda boshlangan mahsulot keyingi
              kirimlarda ham USDda davom etadi.
            </li>
            <li>
              Ulgurji/ustama foizlari kiritilsa, narxlar avtomatik hisoblanadi —
              lekin istasangiz qo‘lda ham o‘zgartirishingiz mumkin.
            </li>
          </ul>
        </div>
      </section>

      {/* VIDEO */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-800">
          Video yo‘riqnoma
        </h3>
        <div className="bg-slate-100 rounded-lg overflow-hidden aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/SYjh8fQv9_8?rel=0&modestbranding=1"
            title="IDOKON — Mahsulotlarni qabul qilish"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>
    </div>
  );
};

export default MahsulotQabulQilish;
