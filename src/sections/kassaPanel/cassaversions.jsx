import React from "react";
import {
  Download,
  Monitor,
  CheckCircle,
  Clock,
  HardDrive,
  Cpu,
  AlertCircle,
} from "lucide-react";

function CassaVersions() {
  // Bu yerda versiyalar ro'yxatini shakllantiramiz
  // Haqiqiy loyihada buni API orqali backenddan olish mumkin
  const versions = [
    {
      id: 1,
      version: "1.2.5",
      url: "https://github.com/tulqinjon2001/Idokon-course/releases/download/Kassa/Idokon1.2.5.x64.exe",
    },
    {
      id: 2,
      version: "1.3.4",
      url: "https://github.com/tulqinjon2001/Idokon-course/releases/download/Kassa/Idokon1.3.4.x64.exe",
    },
    {id: 3,
     version: "1.3.5",
     url: "https://github.com/tulqinjon2001/Idokon-course/releases/download/Kassa/Idokon1.3.5.x64.exe",
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg sm:rounded-lg md:rounded-xl shadow-md space-y-6 sm:space-y-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
        Kassaga Versiyalari
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {versions.map((version) => (
          <div key={version.id} className="bg-slate-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold">{version.version}</h3>
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

export default CassaVersions;
