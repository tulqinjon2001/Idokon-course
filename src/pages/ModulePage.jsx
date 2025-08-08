// idokon_kursi/frontend/src/pages/ModulePage.jsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ModulePage = () => {
  const { moduleId } = useParams();
  const [module, setModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Backenddan modul ma'lumotlarini olish
    const fetchModule = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/modules/${moduleId}/`
        );
        setModule(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchModule();
  }, [moduleId]);

  if (loading) {
    return (
      <div className="p-8 text-center">Modul ma'lumotlari yuklanmoqda...</div>
    );
  }
  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        Xatolik yuz berdi: {error.message}
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">{module.name} modul</h1>

      <h2 className="text-2xl font-semibold mb-4">Bo'limlar ro'yxati</h2>
      <div className="space-y-4">
        {module.sections.length > 0 ? (
          module.sections.map((section) => (
            <Link to={`/sections/${section.id}`} key={section.id}>
              <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                <h3 className="text-xl font-medium">
                  {section.order}. {section.name}
                </h3>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">Hozircha bu modulda bo'limlar yo'q.</p>
        )}
      </div>
    </div>
  );
};

export default ModulePage;
