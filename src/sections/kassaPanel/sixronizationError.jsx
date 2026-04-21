import React from "react";

export default function sixronizationError() {
  const versions = [
    {
      id: 1,
      version: "1",
      url: "https://github.com/tulqinjon2001/Idokon-course/releases/download/Kassa/SQLiteViewer.exe",
    },
  ];
  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg sm:rounded-lg md:rounded-xl shadow-md space-y-6 sm:space-y-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
        Sinxronizatsiya xatolari
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {versions.map((version) => (
          <div key={version.id} className="bg-slate-100 rounded-lg p-4">
            <a
              href={version.url}
              download
              className="text-blue-500 hover:text-blue-700"
            >
              Yuklab olish
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
