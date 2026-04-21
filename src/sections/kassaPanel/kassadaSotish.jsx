import React from "react";
import VideoSection from "../../components/VideoSection";

export default function KassagaKirish() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg sm:rounded-lg md:rounded-xl shadow-md space-y-6 sm:space-y-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Kassaga sotuv jarayoni</h1>

      {/* Main White Card */}
      <div className="bg-white rounded-xl shadow p-6 max-w-4xl mx-auto">
        <VideoSection
          videoUrl="https://www.youtube.com/watch?v=1KtlORC-Te0"
          playlistUrl="https://www.youtube.com/playlist?list=PLNt3xrjLbs_hfUO2_2sN3lsaMAvtMmADq"
          title="Kassaga kirish"
          containerClassName="p-0 bg-transparent"
        />
      </div>
    </div>
  );
}
