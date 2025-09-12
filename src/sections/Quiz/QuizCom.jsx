// src/components/QuizCom.jsx
import React, { useEffect, useMemo, useState } from "react";
import questionsData from "../../data/quiz-questions.json";

const LS_KEY = "quiz_state_v1";

// Fisher–Yates
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// serverdan kelgan savollarni UI uchun tayyorlab (variantlarni aralashtirib) beramiz
function hydrateQuestions(raw) {
  return raw.map((q) => {
    const choices = shuffle(
      Object.entries(q.options || {}).map(([key, label]) => ({ key, label }))
    );
    return { id: q.id, text: q.text, choices, correct: q.correct }; // choices: [{key:"A",label:"..."}, ...] shuffled
  });
}

// localStorage ga yozish/oqish
function saveState(state) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  } catch {} // eslint-disable-next-line no-empty-statement
}
function loadState() {
  try {
    const s = localStorage.getItem(LS_KEY);
    return s ? JSON.parse(s) : null;
  } catch {
    // eslint-disable-next-line no-empty
  }
  return null;
}
function clearState() {
  try {
    localStorage.removeItem(LS_KEY);
  } catch {
    // eslint-disable-next-line no-empty
  }
}

export default function QuizCom() {
  const [step, setStep] = useState("intro"); // intro | quiz | result
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sessionId, setSessionId] = useState(null);

  const [questions, setQuestions] = useState([]); // [{id,text,choices:[{key,label}]}, ...]
  const [answers, setAnswers] = useState({}); // { [questionId]: "A" | "B" | ... }  (asl kalit)
  const [current, setCurrent] = useState(0);

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [score, setScore] = useState(null);

  const total = questions.length || 30;
  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const progress = Math.round((answeredCount / Math.max(total, 1)) * 100);

  // 1) Sahifa ochilganda oldingi holatni tiklash
  useEffect(() => {
    const s = loadState();
    if (!s) return;
    setStep(s.step || "intro");
    setName(s.name || "");
    setPhone(s.phone || "");
    setSessionId(s.sessionId || null);
    setQuestions(s.questions || []);
    setAnswers(s.answers || {});
    setCurrent(Math.min(s.current ?? 0, (s.questions || []).length - 1));
    setScore(s.score ?? null);
  }, []);

  // 2) Har o‘zgarishda localStorage ga saqlash (result bo‘lsa ham saqlaymiz)
  useEffect(() => {
    saveState({
      step,
      name,
      phone,
      sessionId,
      questions,
      answers,
      current,
      score,
    });
  }, [step, name, phone, sessionId, questions, answers, current, score]);

  async function startTest(e) {
    e?.preventDefault();
    setErr("");
    if (!name.trim() || !phone.trim()) {
      setErr("Ism va telefon raqamni kiriting.");
      return;
    }
    try {
      setLoading(true);
      // Local mode: Load and shuffle 30 questions from JSON
      const allQuestions = questionsData.map((q) => ({
        ...q,
        id: Number(q.id),
      }));
      const selectedIds = new Set();
      let selected = [];
      while (selected.length < 30 && selectedIds.size < allQuestions.length) {
        const randId = Math.floor(Math.random() * allQuestions.length);
        if (!selectedIds.has(randId)) {
          selectedIds.add(randId);
          selected.push(allQuestions[randId]);
        }
      }
      const hydrated = hydrateQuestions(selected); // <-- variantlar aralashtirildi
      setQuestions(hydrated);
      setAnswers({});
      setCurrent(0);
      setStep("quiz");
    } catch (e) {
      setErr(e.message || "Xatolik.");
    } finally {
      setLoading(false);
    }
  }

  function selectAnswer(qid, optKey) {
    setAnswers((prev) => ({ ...prev, [qid]: optKey }));
  }

  async function submitAnswers() {
    setErr("");
    try {
      setLoading(true);
      // Local scoring
      let score = 0;
      Object.entries(answers).forEach(([qid, userKey]) => {
        const q = questions.find((q) => q.id.toString() === qid);
        if (q && userKey === q.correct) {
          score++;
        }
      });
      setScore(score);
      setStep("result");
      clearState(); // natija chiqsa endi saqlab turish shart emas
    } catch (e) {
      setErr(e.message || "Yuborishda xatolik.");
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
    setCurrent(0);
    setScore(null);
    setErr("");
    clearState();
  }

  const q = questions[current];

  return (
    <div className="mx-auto max-w-6xl p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quiz Test</h1>
          <p className="text-gray-500">
            300 savoldan 30 tasi tasodifiy beriladi.
          </p>
        </div>
        {step === "quiz" && (
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-sm text-gray-600">
              {answeredCount}/{total}
            </span>
            <div className="h-2 w-40 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-indigo-600 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {err && (
        <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-700">
          {err}
        </div>
      )}

      {step === "intro" && (
        <form
          onSubmit={startTest}
          className="rounded-xl border bg-white p-6 shadow-sm max-w-xl"
        >
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Ism</label>
              <input
                className="w-full rounded-lg border px-3 py-2 focus:border-indigo-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Telefon raqam
              </label>
              <input
                className="w-full rounded-lg border px-3 py-2 focus:border-indigo-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-indigo-600 px-5 py-2.5 text-white hover:bg-indigo-700 disabled:opacity-60"
              >
                {loading ? "Yuklanmoqda..." : "Testni boshlash"}
              </button>
              <span className="text-sm text-gray-500">
                Ma’lumotlar faqat testni boshlash uchun olinadi.
              </span>
            </div>
          </div>
        </form>
      )}

      {step === "quiz" && (
        <div className="grid gap-6 md:grid-cols-[260px,1fr]">
          <aside className="rounded-xl border bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold">Savollar</h3>
              <span className="text-xs text-gray-500">
                {answeredCount}/{total}
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((item, idx) => {
                const active = idx === current;
                const done = answers[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrent(idx)}
                    className={[
                      "h-9 w-9 rounded-md text-sm font-semibold",
                      active
                        ? "bg-indigo-600 text-white"
                        : done
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                    ].join(" ")}
                    title={`Savol ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 h-px bg-gray-200" />
            <div className="mt-4 space-y-2">
              <button
                onClick={() => setAnswers({})}
                className="w-full rounded-md border px-3 py-2 text-sm hover:bg-gray-50"
              >
                Belgilarni tozalash
              </button>
              <button
                onClick={submitAnswers}
                disabled={loading || answeredCount === 0}
                className="w-full rounded-md bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-700 disabled:opacity-60"
              >
                Yakunlash
              </button>
            </div>
          </aside>

          <section className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-4 sm:hidden">
              <div className="mb-1 flex items-center justify-between text-sm text-gray-600">
                <span>
                  {answeredCount}/{total}
                </span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full bg-indigo-600 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {q ? (
              <>
                <div className="mb-4 flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    {current + 1}
                  </span>
                  <h2 className="text-lg font-semibold">{q.text}</h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {q.choices.map(({ key, label }) => {
                    const selected = answers[q.id] === key;
                    return (
                      <button
                        key={key}
                        onClick={() => selectAnswer(q.id, key)}
                        className={[
                          "flex items-start gap-3 rounded-lg border px-4 py-3 text-left transition",
                          selected
                            ? "border-indigo-500 bg-indigo-50"
                            : "border-gray-200 hover:bg-gray-50",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md text-sm font-bold",
                            selected
                              ? "bg-indigo-600 text-white"
                              : "bg-gray-200 text-gray-700",
                          ].join(" ")}
                        >
                          {key}
                        </span>
                        <span>{label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
                    className="rounded-lg border px-4 py-2 hover:bg-gray-50"
                  >
                    ← Oldingi
                  </button>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        setCurrent((c) => Math.min(c + 1, total - 1))
                      }
                      className="rounded-lg border px-4 py-2 hover:bg-gray-50"
                    >
                      Keyingi →
                    </button>
                    <button
                      onClick={submitAnswers}
                      disabled={loading || answeredCount === 0}
                      className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 disabled:opacity-60"
                    >
                      Yakunlash
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="animate-pulse">
                <div className="mb-3 h-6 w-2/3 rounded bg-gray-200" />
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="h-14 rounded bg-gray-200" />
                  <div className="h-14 rounded bg-gray-200" />
                  <div className="h-14 rounded bg-gray-200" />
                  <div className="h-14 rounded bg-gray-200" />
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      {step === "result" && (
        <div className="mx-auto max-w-xl rounded-xl border bg-white p-6 text-center shadow-sm">
          <div
            className={`mx-auto mb-4 h-12 w-12 grid place-items-center rounded-full ${
              score / total >= 0.7
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            } text-xl font-bold`}
          >
            {score}
          </div>
          <h2 className="mb-1 text-xl font-semibold">Natija</h2>
          <p className="mb-2 text-gray-600">
            To‘plagan ballingiz:{" "}
            <span className="font-bold">
              {score}/{total}
            </span>
          </p>
          <p
            className={`mb-4 text-lg font-bold ${
              score / total >= 0.7 ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {score / total >= 0.7 ? "Passed! 🎉" : "Failed. Try again."}
          </p>
          <p className="mb-4 text-sm text-gray-500">
            Foiz: {((score / total) * 100).toFixed(1)}%
          </p>
          {/* Answer breakdown */}
          <div className="mt-4 text-left max-h-96 overflow-y-auto">
            <h3 className="mb-2 font-semibold text-emerald-600">
              To'g'ri javoblar ({score}):
            </h3>
            <ul className="space-y-1 mb-4 text-sm">
              {questions.map((q, idx) => {
                const userAns = answers[q.id];
                if (userAns !== q.correct) return null;
                return (
                  <li key={q.id} className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-emerald-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Savol {idx + 1}: {q.text.substring(0, 50)}...
                  </li>
                );
              })}
            </ul>
            <h3 className="mb-2 font-semibold text-red-600">
              Noto'g'ri javoblar ({total - score}):
            </h3>
            <ul className="space-y-1 text-sm">
              {questions.map((q, idx) => {
                const userAns = answers[q.id];
                if (userAns === q.correct || !userAns) return null;
                return (
                  <li key={q.id} className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Savol {idx + 1}: {q.text.substring(0, 50)}...
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={resetAll}
            className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Qayta boshlash
          </button>
          <p className="mt-3 text-xs text-gray-500">
            Local quiz - no Telegram notification.
          </p>
        </div>
      )}
    </div>
  );
}
