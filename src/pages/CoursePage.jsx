// idokon_kursi/frontend/src/pages/CoursePage.jsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CoursePage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Backenddan kurs ma'lumotlarini olish
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/courses/${courseId}/`
        );
        setCourse(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  if (loading) {
    return (
      <div className="p-8 text-center">Kurs ma'lumotlari yuklanmoqda...</div>
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
      <h1 className="text-3xl font-bold mb-6">{course.name}</h1>
      <p className="text-lg text-gray-600 mb-8">{course.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Modullar ro'yxati</h2>
      <div className="space-y-4">
        {course.modules.length > 0 ? (
          course.modules.map((module) => (
            <Link to={`/modules/${module.id}`} key={module.id}>
              <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                <h3 className="text-xl font-medium">
                  {module.order}. {module.name}
                </h3>
                <p className="text-gray-500">
                  Bu modul {module.sections.length} ta bo'limni o'z ichiga
                  oladi.
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">Hozircha bu kursda modullar yo'q.</p>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
