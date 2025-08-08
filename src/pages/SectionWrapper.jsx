// idokon_kursi/frontend/src/pages/SectionWrapper.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Suspense, lazy } from "react";

// Dinamik import qilish uchun komponentlar map-i
// Bu yerda siz barcha bo'lim komponentlarini import qilishingiz kerak
const sectionComponents = {
  AdminUsersSection: lazy(() => import("../sections/AdminUsersSection")),
  // Qolgan komponentlarni ham shunday qo'shing
  QuizTestsSection: lazy(() => import("../sections/QuizTestsSection")),
  // ...
};

const SectionWrapper = () => {
  const { sectionId } = useParams();
  const [componentName, setComponentName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Backenddan shu sectionId uchun komponent nomini olish
    const fetchSectionComponentName = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/sections/${sectionId}/`
        );
        setComponentName(response.data.component_name);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchSectionComponentName();
  }, [sectionId]);

  if (loading) {
    return <div className="p-8 text-center">Bo'lim yuklanmoqda...</div>;
  }
  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        Xatolik: {error.message}
      </div>
    );
  }
  if (!componentName) {
    return (
      <div className="p-8 text-center text-gray-500">
        Bo'lim komponenti topilmadi.
      </div>
    );
  }

  const ComponentToRender = sectionComponents[componentName];

  if (!ComponentToRender) {
    return (
      <div className="p-8 text-center text-red-500">
        Noto'g'ri bo'lim komponenti: {componentName}
      </div>
    );
  }

  return (
    <Suspense
      fallback={<div className="p-8 text-center">Komponent yuklanmoqda...</div>}
    >
      <ComponentToRender sectionId={sectionId} />
    </Suspense>
  );
};

export default SectionWrapper;
