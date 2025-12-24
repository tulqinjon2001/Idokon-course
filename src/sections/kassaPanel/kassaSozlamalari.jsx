import React from "react";

function KassaSozlamalari() {
  // YouTube video (berilgan ID)
  const YT_VIDEO_ID = "r17SKvRUUpE";
  const YT_URL = `https://www.youtube.com/watch?v=${YT_VIDEO_ID}`;
  // Qo'llanma PDF va misol konfiguratsiya URL'lari — o'zingizga moslang
  const MANUAL_URL = "https://example.com/docs/IDOKON-kassa-manual.pdf"; // <-- replace with real PDF URL

  // Misol konfiguratsiya (foydalanuvchi nusxa olishi yoki yuklab olishi mumkin)
  const sampleConfig = {
    terminalId: "TERM-001",
    server: {
      host: "https://kassa.example.com",
      port: 443,
      apiKey: "YOUR_API_KEY_HERE"
    },
    printer: {
      model: "EPSON-TM-T88V",
      connection: "USB",
      encoding: "UTF-8"
    },
    tax: {
      enabled: true,
      rate: 12
    },
    currency: "UZS",
    receipt: {
      header: "IDOKON Kassa",
      footer: "Rahmat!"
    }
  };

  const copyConfig = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(sampleConfig, null, 2));
      alert("Konfiguratsiya nusxalandi.");
    } catch (err) {
      alert("Nusxa olish muammosi. Iltimos, qo'lda nusxa oling.");
    }
  };

  const downloadConfig = () => {
    const blob = new Blob([JSON.stringify(sampleConfig, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "idokon-kassa-config.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Kassa sozlamalari</h2>

      {/* YouTube */}
      <div className="bg-slate-100 rounded-lg p-3">
        <div className="w-full">
          <iframe
            title="IDOKON kassa sozlamalari video"
            src={`https://www.youtube.com/embed/${YT_VIDEO_ID}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "480px", borderRadius: 8, border: 0 }}
            aria-label="IDOKON kassaga sozlamalar video"
          />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <a
            href={YT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-2 bg-primary-600 text-white rounded-md text-sm"
            aria-label="YouTube videoni yangi oynada ochish"
          >
            YouTube-da ochish
          </a>

          <a
            href={MANUAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-2 bg-primary-600 text-white rounded-md text-sm hover:bg-primary-700"
            aria-label="Qo'llanmani PDF sifatida ochish"
          >
            Qo'llanmani ochish (PDF)
          </a>

          <a
            href={MANUAL_URL}
            download
            className="inline-block px-3 py-2 bg-primary-600 text-white rounded-md text-sm hover:bg-primary-700"
            aria-label="Qo'llanmani yuklab olish"
          >
            Qo'llanmani yuklab olish
          </a>
        </div>
      </div>

      {/* Asosiy sozlamalar (previw / qo'llanma ichidan misol) */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
        <div className="font-medium text-slate-800 mb-2">🔧 Kerakli asosiy sozlamalar (misol)</div>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li><strong>Server URL:</strong> https://kassa.example.com (host va portni to'g'ri belgilang)</li>
          <li><strong>API kalit:</strong> Admin paneldan olingan API kalitini kiriting</li>
          <li><strong>Terminal ID:</strong> Har bir kassa uchun noyob terminal identifikatori</li>
          <li><strong>Printer:</strong> Model va ulanish turi (USB/Network), kodlash UTF-8</li>
          <li><strong>Soliq:</strong> Soliq stavkasi va yoqilganligi</li>
          <li><strong>Valyuta:</strong> Masalan "UZS"</li>
        </ul>

        <div className="mt-3 flex gap-3">
          <button
            onClick={copyConfig}
            className="px-4 py-2 bg-primary-600 text-white rounded-md text-sm hover:bg-primary-700"
            aria-label="Misol konfiguratsiyani nusxalash"
          >
            Konfiguratsiyani nusxalash
          </button>
          <button
            onClick={downloadConfig}
            className="px-4 py-2 bg-primary-100 text-primary-700 rounded-md text-sm hover:bg-primary-200"
            aria-label="Misol konfiguratsiyani yuklab olish"
          >
            Konfiguratsiyani yuklab olish (JSON)
          </button>
        </div>

        <div className="mt-4">
          <div className="text-sm text-slate-600">Quyidagi JSON namunasi qo'llanma ichidagi "Sozlamalar" bo'limiga mos keladi:</div>
          <pre className="mt-2 p-3 bg-white border rounded text-xs overflow-auto" style={{ maxHeight: 220 }}>
            {JSON.stringify(sampleConfig, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default KassaSozlamalari;