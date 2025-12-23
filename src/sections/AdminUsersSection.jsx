// idokon_kursi/frontend/src/sections/AdminUsersSection.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminUsersSection = () => {
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
