// idokon_kursi/frontend/src/sections/QuizTestsSection.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const QuizTestsSection = ({ sectionId }) => {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        // Backenddan test ma'lumotlarini olish
        const response = await axios.get(
          `http://127.0.0.1:8000/api/sections/${sectionId}/`
        );
        setQuizData(response.data.quiz_data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchQuizData();
  }, [sectionId]);

  if (loading) {
    return (
      <div className="p-8 text-center">Test ma'lumotlari yuklanmoqda...</div>
    );
  }
  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        Xatolik yuz berdi: {error.message}
      </div>
    );
  }
  if (!quizData || quizData.questions.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        Bu bo'lim uchun test savollari topilmadi.
      </div>
    );
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">QUIZ testlar</h2>
      {/* Test savollarini ko'rsatish logikasi */}
      {quizData.questions.map((q, index) => (
        <div key={index} className="mb-4 p-4 border rounded-md">
          <p className="font-semibold mb-2">
            {index + 1}. {q.text}
          </p>
          <div className="space-y-2">
            {q.choices.map((choice, i) => (
              <label
                key={i}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={choice}
                  className="form-radio"
                />
                <span>{choice}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Natijalarni tekshirish
      </button>
    </div>
  );
};

export default QuizTestsSection;
