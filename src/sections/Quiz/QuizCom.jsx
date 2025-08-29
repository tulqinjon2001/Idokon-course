// src/components/QuizCom.jsx
import React, { useEffect, useMemo, useState } from "react";

const API_BASE =
  (typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.VITE_API_URL) ||
  "http://127.0.0.1:8000";

export default function QuizCom() {
  const [step, setStep] = useState("intro"); // intro | quiz | result
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sessionId, setSessionId] = useState(null);

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({}); // { [questionId]: "A" | "B" | ... }
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const [score, setScore] = useState(null);

  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);

  async function startTest(e) {
    e?.preventDefault();
    setErr("");
    if (!name.trim() || !phone.trim()) {
      setErr("Ism va telefon raqamni kiriting.");
      return;
    }
    try {
      setLoading(true);
      // 1) Start session
      const resStart = await fetch(`${API_BASE}/start-test/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
      });
      if (!resStart.ok) {
        throw new Error("Sessiyani boshlashda xatolik.");
      }
      const { session_id } = await resStart.json();
      setSessionId(session_id);

      // 2) Get 30 random questions
      const resQ = await fetch(`${API_BASE}/get-questions/`);
      if (!resQ.ok) throw new Error("Savollarni olishda xatolik.");
      const data = await resQ.json();
      setQuestions(data);
      setAnswers({});
      setStep("quiz");
    } catch (e) {
      setErr(e.message || "Noma'lum xatolik.");
    } finally {
      setLoading(false);
    }
  }

  async function submitAnswers() {
    setErr("");
    if (!sessionId) {
      setErr("Sessiya topilmadi. Testni qayta boshlang.");
      return;
    }
    try {
      setLoading(true);
      // keys should be ints
      const normalized = {};
      Object.entries(answers).forEach(([qid, val]) => {
        normalized[Number(qid)] = val;
      });

      const res = await fetch(`${API_BASE}/submit-answers/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, answers: normalized }),
      });
      if (!res.ok) throw new Error("Natijani yuborishda xatolik.");
      const data = await res.json();
      setScore(data.score);
      setStep("result");
    } catch (e) {
      setErr(e.message || "Noma'lum xatolik.");
    } finally {
      setLoading(false);
    }
  }

  function resetAll() {
    setStep("intro");
    setName("");
    setPhone("");
    setSessionId(null);
    setQuestions([]);
    setAnswers({});
    setScore(null);
    setErr("");
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Quiz Test</h1>
        <p className="text-gray-500">
          300 savoldan 30 tasi tasodifiy beriladi.
        </p>
      </div>

      {/* Error */}
      {err ? (
        <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-700">
          {err}
        </div>
      ) : null}

      {/* Intro step */}
      {step === "intro" && (
        <form
          onSubmit={startTest}
          className="space-y-4 rounded-lg border bg-white p-6 shadow-sm"
        >
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Ism
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-0 focus:border-indigo-500"
              placeholder="Ismingiz"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Telefon raqam
            </label>
            <input
              type="tel"
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500"
              placeholder="+99890xxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-60"
            >
              {loading ? "Yuklanmoqda..." : "Testni boshlash"}
            </button>
            <span className="text-sm text-gray-500">
              Ma’lumotlar faqat sessiyani boshlash uchun olinadi.
            </span>
          </div>
        </form>
      )}

      {/* Quiz step */}
      {step === "quiz" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between rounded-md border bg-white px-4 py-3">
            <div className="text-sm text-gray-600">
              Javob berilgan:{" "}
              <span className="font-semibold">{answeredCount}</span> /{" "}
              {questions.length || 30}
            </div>
            <button
              onClick={submitAnswers}
              disabled={loading || answeredCount === 0}
              className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 disabled:opacity-60"
            >
              {loading ? "Yuborilmoqda..." : "Yakunlash"}
            </button>
          </div>

          <ul className="space-y-5">
            {questions.map((q, idx) => (
              <li
                key={q.id}
                className="rounded-lg border bg-white p-4 shadow-sm"
              >
                <div className="mb-3 flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <p className="text-gray-900">{q.text}</p>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  {Object.entries(q.options || {}).map(([key, label]) => {
                    const inputId = `${q.id}-${key}`;
                    return (
                      <label
                        key={key}
                        htmlFor={inputId}
                        className={`flex cursor-pointer items-start gap-2 rounded-md border px-3 py-2 ${
                          answers[q.id] === key
                            ? "border-indigo-500 bg-indigo-50"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          id={inputId}
                          type="radio"
                          name={`q-${q.id}`}
                          value={key}
                          checked={answers[q.id] === key}
                          onChange={() =>
                            setAnswers((prev) => ({ ...prev, [q.id]: key }))
                          }
                          className="mt-1"
                        />
                        <span className="text-sm text-gray-800">
                          <span className="font-semibold mr-1">{key}.</span>
                          {label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between rounded-md border bg-white px-4 py-3">
            <button
              onClick={() => setAnswers({})}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Javoblarni tozalash
            </button>
            <button
              onClick={submitAnswers}
              disabled={loading || answeredCount === 0}
              className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 disabled:opacity-60"
            >
              {loading ? "Yuborilmoqda..." : "Yakunlash"}
            </button>
          </div>
        </div>
      )}

      {/* Result step */}
      {step === "result" && (
        <div className="space-y-4 rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Natija</h2>
          <p className="text-gray-700">
            To‘plagan ballingiz:{" "}
            <span className="font-bold">
              {score}/{questions.length || 30}
            </span>
          </p>
          <p className="text-sm text-gray-500">
            Natija adminlarga Telegram orqali yuborildi.
          </p>
          <div className="flex gap-3">
            <button
              onClick={resetAll}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Qayta boshlash
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
