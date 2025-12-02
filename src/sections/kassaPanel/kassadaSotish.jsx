import React from "react";

export default function KassagaKirish() {
  return (
    <div className="w-full p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Kassaga kirish</h1>

      {/* Main White Card */}
      <div className="bg-white rounded-xl shadow p-6 max-w-4xl mx-auto">

        {/* YouTube Video */}
        <div className="w-full mb-6">
          <iframe
            className="w-full h-[420px] rounded-lg"
            src="https://www.youtube.com/embed/1KtlORC-Te0"
            title="Kassaga kirish"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="https://www.youtube.com/watch?v=1KtlORC-Te0"
            target="_blank"
            className="px-5 py-3 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0284C7] transition"
          >
            YouTube-da ochish
          </a>

          <a
            href="https://www.youtube.com/playlist?list=PLNt3xrjLbs_hfUO2_2sN3lsaMAvtMmADq"
            target="_blank"
            className="px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Playlisni ko‘rish
          </a>
        </div>
      </div>
    </div>
  );
}
