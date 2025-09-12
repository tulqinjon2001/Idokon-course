const Bildirishnomalar = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">🔔 Bildirishnomalar bo‘limi</h2>

      <p className="mb-4">
        📣 <b>Bildirishnomalar</b> mahsulotlar soni belgilangan limitdan kam
        qolganda sizga avtomatik tarzda <b>Telegram bot</b> orqali eslatma
        xabarlarini yuborish imkonini beradi.
      </p>

      <h3 className="text-xl font-semibold mb-2">🛠 Qo‘llash tartibi</h3>
      <ol className="list-decimal list-inside space-y-4 mb-6">
        <li>
          Admin paneldan <b>1-menyu → Bildirishnomalar</b> bo‘limiga kiring.
          <img
            src="/assets/admin/1-bolim/bildirishnoma/bildirish.png"
            alt="Bildirishnomalar bo‘limi"
            className="mt-2 rounded-lg shadow-md"
          />
        </li>
        <li>
          ➕ “Qo‘shish” tugmasini bosing.
          <img
            src="/assets/admin/1-bolim/bildirishnoma/qoshish.png"
            alt="Qo‘shish tugmasi"
            className="mt-2 rounded-lg shadow-md"
          />
        </li>
        <li>
          🔍 Kerakli mahsulotni izlash orqali toping, minimal qoldiq sonini
          kiriting va 💾 “Saqlash” tugmasini bosing.
          <img
            src="/assets/admin/1-bolim/bildirishnoma/qoldiq-saqlash.png"
            alt="Qoldiqni kiritish va saqlash"
            className="mt-2 rounded-lg shadow-md"
          />
        </li>
        <li>
          ✅ Belgilangan sondan kam qolsa, mahsulot{" "}
          <span className="text-red-500 font-semibold">qizil rangda</span>{" "}
          ajratilib ko‘rsatiladi.
          <img
            src="/assets/admin/1-bolim/bildirishnoma/qizilsonikam.png"
            alt="Qizil soni bilan ajratilgan mahsulotlar"
            className="mt-2 rounded-lg shadow-md"
          />
        </li>
      </ol>

      <h3 className="text-xl font-semibold mb-2">🤖 Telegram botga ulash</h3>
      <ol className="list-decimal list-inside space-y-4">
        <li>
          Admin panel → <b>4-menyu → Savdo nuqtalari</b> bo‘limiga kiring va ✏️
          qalamchani bosing.
          <img
            src="/assets/admin/1-bolim/bildirishnoma/telnomer.png"
            alt="Telefon raqamini kiritish"
            className="mt-2 rounded-lg shadow-md"
          />
        </li>
        <li>
          Telegram ilovada <b>@idokonsmsbot</b> ni qidiring.
          <img
            src="/assets/admin/1-bolim/bildirishnoma/smsbot.jpg"
            alt="Idokon SMS Bot"
            className="mt-2 rounded-lg shadow-md"
          />
        </li>
        <li>
          Botga <code>/start</code> yoki <b>Boshlash</b> tugmasini bosing.
          <img
            src="/assets/admin/1-bolim/bildirishnoma/smsbotstart.jpg"
            alt="Botda Start tugmasi"
            className="mt-2 rounded-lg shadow-md"
          />
        </li>
        <li>
          📲 “Raqamni ulashish” tugmasini bosing.
          <img
            src="/assets/admin/1-bolim/bildirishnoma/smsbotraqamniulashish.jpg"
            alt="Raqamni ulashish"
            className="mt-2 rounded-lg shadow-md"
          />
        </li>
        <li>
          ✅ Shundan so‘ng bot sizga mahsulotlar belgilangan miqdordan kam
          qolganda avtomatik xabar yuboradi.
          <img
            src="/assets/admin/1-bolim/bildirishnoma/smsbotkelganxabar.jpg"
            alt="Telegram botdan kelgan xabar"
            className="mt-2 rounded-lg shadow-md"
          />
        </li>
      </ol>
    </div>
  );
};

export default Bildirishnomalar;
