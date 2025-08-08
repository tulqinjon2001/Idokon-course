// idokon_kursi/frontend/src/sections/AdminUsersSection.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminUsersSection = ({ sectionId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Backenddan bu bo'limga tegishli ma'lumotlarni olish
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/sections/${sectionId}/`
        );
        // `admin_users_data` ma'lumotlarini to'g'ridan-to'g'ri olamiz
        setData(response.data.admin_users_data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [sectionId]);

  if (loading) {
    return <div className="p-8 text-center">Ma'lumotlar yuklanmoqda...</div>;
  }
  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        Xatolik yuz berdi: {error.message}
      </div>
    );
  }
  if (!data) {
    return (
      <div className="p-8 text-center text-gray-500">
        Bu bo'lim uchun ma'lumot topilmadi.
      </div>
    );
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Admin panel - Foydalanuvchilarni boshqarish
      </h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Video qo'llanma</h3>
        {/* Youtube videosini ID orqali ko'rsatish */}
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${data.video_id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video qo'llanma"
          className="rounded-lg"
        ></iframe>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Matnli qo'llanma</h3>
        <p className="text-gray-700 whitespace-pre-wrap">{data.text_content}</p>
      </div>
    </div>
  );
};

export default AdminUsersSection;
