import React from "react";

const steps = [
  {
    title: "1. Ro'yxatdan o'tish",
    desc: (
      <>
        <p>
          <a
            href="https://admin.idokon.uz/#/register"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 underline"
          >
            admin.idokon.uz/#/register
          </a>{" "}
          manziliga kiring.
        </p>
        <p>
          Ma'lumotlarni to'ldirib, <b>login va parol</b> tanlang.
        </p>
        <p>
          Ko'rsatilgan tartibda <b>to'lovni amalga oshiring</b>.
        </p>
        <p>
          To'lov tasdiqlangandan so'ng, IDOKON xodimlari siz uchun account ochib
          berishadi.
        </p>
      </>
    ),
    video: (
      <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 italic">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/F6U6gbD2W-0"
          title="IDOKON Ro'yxatdan o'tish"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ),
  },
  {
    title: "2. Admin panelga kirish",
    desc: (
      <>
        <p>
          Qurilmangizdan <b>Google Chrome</b> brauzerini oching.
        </p>
        <p>
          <a
            href="https://my.idokon.uz"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 underline"
          >
            my.idokon.uz
          </a>{" "}
          manziliga kiring.
        </p>
        <p>
          Ro'yxatdan o'tishda tanlagan <b>login va parol</b> orqali tizimga
          kiring.
        </p>
        <p>
          Ushbu sahifani bundan keyin <b>Admin panel</b> deb ataymiz.
        </p>
      </>
    ),
    video: (
      <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 italic">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/waknksArg8E?rel=0&modestbranding=1"
          title="IDOKON — Admin panelga kirish"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    ),
  },
  {
    title: "3. Kassir qo'shish",
    desc: (
      <>
        <p>
          Admin panelga kirib, chap menyudan <b>Mening foydalanuvchilarim</b>{" "}
          bo'limini tanlang.
        </p>
        <p>
          Yuqoridagi <b>"Qo'shish"</b> tugmasini bosing.
        </p>
        <p>
          <b>Rol</b> maydonidan <b>Kassir</b>ni tanlang va kassir uchun ism,
          telefon, login va parol belgilang.
        </p>
        <p>
          Saqlagandan keyin kassir tanlangan login va parol bilan kassa
          dasturiga kira oladi.
        </p>
      </>
    ),
    video: (
      <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 italic">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/V1mcKNpba-A?rel=0&modestbranding=1"
          title="IDOKON — Admin panelga kirish"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    ),
  },
  {
    title: "4. Do'kon uchun kassa qo'shish",
    desc: (
      <>
        <p>
          Admin panelga kirib, chap menyudan <b>Savdo nuqtasi kassa</b>{" "}
          bo'limini tanlang.
        </p>
        <p>
          Yuqoridagi <b>"Qo'shish"</b> tugmasini bosing.
        </p>
        <p>
          Bu joydan <b>Kassa nomi</b>ni kiriting, <b>Savdo nuqtasi</b> va{" "}
          <b>Valyuta</b>ni tanlang va <b>Saqlash</b> tugmasini bosing.
        </p>
        <p>
          <b>!!!Eslatma</b> Bu kassa do'konda nechta joydan savdo qilishingizga
          qarab qo'shiladi.
        </p>
      </>
    ),
    video: (
      <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 italic">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/eM_xCZ-0ONk?rel=0&modestbranding=1"
          title="IDOKON — Kassir qo'shish"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    ),
  },
  {
    title: "5. Kassaga kirish",
    desc: (
      <>
        <p>Kassa dasturini kompyuteringizga o'rnatishingiz kerak.</p>
        <p>
          Dastur faylini quyidagi havola orqali yuklab oling va o'rnatishni
          tugatgandan so'ng, kassir uchun berilgan login va parol bilan tizimga
          kiring.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/tulqinjon2001/Idokon-course/releases/download/idokonkassa1.2.2/Idokon1.2.1.x64.Rahmat.exe"
            download
            className="inline-block px-4 sm:px-5 py-2 sm:py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-700 transition text-sm sm:text-base"
          >
            📥 Kassani yuklab olish
          </a>
        </div>
      </>
    ),
    video: (
      <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 italic">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/iLP0_W_1cxg?rel=0&modestbranding=1"
          title="IDOKON video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    ),
  },
];

const UsingIdokon = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-8 sm:mb-10 md:mb-12">
          IDOKONdan qanday foydalaniladi?
        </h2>

        <div className="space-y-8 sm:space-y-10 md:space-y-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center bg-white rounded-lg sm:rounded-2xl shadow-md p-4 sm:p-5 md:p-6 hover:shadow-lg transition"
            >
              <div className={idx % 2 === 0 ? "" : "md:order-2"}>
                {step.video}
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <div className="text-slate-600 space-y-2 text-xs sm:text-sm md:text-base">
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsingIdokon;
