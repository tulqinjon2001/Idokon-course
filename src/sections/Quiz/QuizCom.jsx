// src/components/QuizCom.jsx
import React, { useEffect, useMemo, useState, useRef } from "react";
import questionsData from "../../data/quiz-questions.json";

const DEFAULT_QUESTION_COUNT = 1;
const LS_KEY = "quiz_state_v1";
const PASS_RATE = 0.8;

// shuffle helper
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function hydrateQuestions(raw) {
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return raw.map((q) => {
    let choices = [];
    if (Array.isArray(q.options)) {
      choices = q.options.map((label, i) => ({
        key: LETTERS[i] || String(i),
        label,
      }));
    } else if (q.options && typeof q.options === "object") {
      choices = Object.entries(q.options).map(([key, label]) => ({
        key,
        label,
      }));
    }
    choices = shuffle(choices);

    let correctKey = q.correct ?? q.correct_option ?? q.correctOption ?? q.correct_answer;
    if (typeof correctKey === "number") {
      correctKey = choices[correctKey]?.key;
    }

    return {
      id: String(q.id ?? Math.random().toString(36).slice(2, 9)),
      text: q.text || q.question,
      choices,
      correct: correctKey,
    };
  });
}

// storage
function saveState(state) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch {}
}
function loadState() {
  try {
    const s = localStorage.getItem(LS_KEY);
    return s ? JSON.parse(s) : null;
  } catch {}
  return null;
}
function clearState() {
  try { localStorage.removeItem(LS_KEY); } catch {}
}

// fallback
const SAMPLE_QUESTIONS = [
  {
    id: "s1",
    text: "O'zbekistonda poytaxt qaysi shahar?",
    options: { A: "Samarqand", B: "Toshkent", C: "Buxoro", D: "Namangan" },
    correct: "B",
  },
  {
    id: "s2",
    text: "2 + 2 = ?",
    options: ["3", "4", "5", "22"],
    correct: 1,
  },
];

export default function QuizCom({ questionCount = DEFAULT_QUESTION_COUNT }) {
  const [step, setStep] = useState("intro");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [score, setScore] = useState(null);

  const [congratsVisible, setCongratsVisible] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [failVisible, setFailVisible] = useState(false);

  // NEW: backendga yuborish holati
  const [notifyStatus, setNotifyStatus] = useState("idle"); // idle | sending | ok | err

  const total = questions.length || questionCount;
  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const progress = Math.round((answeredCount / Math.max(total, 1)) * 100);

  useEffect(() => {
    const s = loadState();
    if (!s) return;
    setStep(s.step || "intro");
    setName(s.name || "");
    setPhone(s.phone || "");
    setQuestions(s.questions || []);
    setAnswers(s.answers || {});
    setCurrent(s.current ?? 0);
    setScore(s.score ?? null);
  }, []);

  useEffect(() => {
    saveState({ step, name, phone, questions, answers, current, score });
  }, [step, name, phone, questions, answers, current, score]);

  async function startTest(e) {
    e?.preventDefault();
    setErr("");
    if (!name.trim() || !phone.trim()) {
      setErr("Ism va telefon raqamni kiriting.");
      return;
    }
    setLoading(true);
    const pool =
      Array.isArray(questionsData) && questionsData.length > 0
        ? questionsData
        : SAMPLE_QUESTIONS;
    const selectedRaw = shuffle(pool).slice(0, Math.min(questionCount, pool.length));
    const hydrated = hydrateQuestions(selectedRaw);
    setQuestions(hydrated);
    setAnswers({});
    setCurrent(0);
    setStep("quiz");
    setLoading(false);
  }

  function selectAnswer(qid, optKey) {
    setAnswers((prev) => ({ ...prev, [qid]: optKey }));
  }

  // NEW: backendga xabar yuborish helper
 // FRONTENDDAN BACKENDGA XABAR YUBORISH (env orqali)
async function notifyTelegram({ name, phone, score, total, passed }) {
  try {
    setNotifyStatus("sending");

    const percent = Math.round((score / total) * 100);

    // 🔧 Backend manzili env’dan olinadi (Vite)
    const API_BASE =
      (typeof import.meta !== "undefined" &&
        import.meta.env &&
        import.meta.env.VITE_API_BASE_URL) || ""; // bo'sh qolsa relative yo'l ishlatiladi

    const url = `https://idokon.uz/bot2/api/telegram-notify`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // ⚠️ Token/ChatID frontga yozilmaydi — ular backend env’da bo‘ladi
      body: JSON.stringify({ name, phone, score, total, percent, passed }),
      
    });

    if (!res.ok) throw new Error(await res.text());
    setNotifyStatus("ok");
  } catch (e) {
    console.error("Telegramga yuborishda xatolik:", e);
    setNotifyStatus("err");
  }
}


  async function submitAnswers() {
    let sc = 0;
    Object.entries(answers).forEach(([qid, userKey]) => {
      const q = questions.find((q) => q.id === qid);
      if (q && userKey === q.correct) sc++;
    });
    const passed = total > 0 && sc / total >= PASS_RATE;

    // 1) UI natijani chiqarish
    setScore(sc);
    setStep("result");
    clearState();

    // 2) BACKENDGA YUBORISH (frontend qismi)
    //    Keyingi bosqichda /api/telegram-notify ni server tomonda qo'shamiz.
    notifyTelegram({ name, phone, score: sc, total, passed });
  }

  function resetAll() {
    setStep("intro");
    setName("");
    setPhone("");
    setQuestions([]);
    setAnswers({});
    setCurrent(0);
    setScore(null);
    setNotifyStatus("idle");
    clearState();
  }

  const q = questions[current];
  const pillsRef = useRef(null);

  function handlePillsWheel(e) {
    const el = pillsRef.current;
    if (!el) return;
    const delta = e.deltaY * 1.5;
    if (Math.abs(delta) > 0 && el.scrollWidth > el.clientWidth) {
      el.scrollLeft += delta;
      e.preventDefault();
    }
  }

  function handlePillsKeyDown(e) {
    if (e.key === "ArrowLeft") {
      setCurrent((c) => Math.max(c - 1, 0));
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      setCurrent((c) => Math.min(c + 1, total - 1));
      e.preventDefault();
    } else if (e.key === "Home") {
      setCurrent(0);
      e.preventDefault();
    } else if (e.key === "End") {
      setCurrent(total - 1);
      e.preventDefault();
    }
  }

  useEffect(() => {
    const el = pillsRef.current;
    if (!el) return;
    const btn = el.children[current];
    if (btn && typeof btn.scrollIntoView === "function") {
      btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [current]);

  useEffect(() => {
    let t, g, f;
    if (step === "result" && score != null && total > 0) {
      const passed = score / total >= PASS_RATE;
      if (passed) {
        setFailVisible(false);
        t = setTimeout(() => setCongratsVisible(true), 200);
        g = setTimeout(() => {
          const colors = ["#EF4444","#F97316","#F59E0B","#10B981","#06B6D4","#6366F1","#EC4899"];
          const pieces = Array.from({ length: 28 }).map((_, i) => ({
            id: `c${Date.now()}_${i}`,
            left: Math.round(Math.random() * 100),
            delay: Number((Math.random() * 0.5).toFixed(2)),
            duration: Number((1.8 + Math.random() * 1.6).toFixed(2)),
            color: colors[Math.floor(Math.random() * colors.length)],
            rotate: Math.round(Math.random() * 360),
            w: 6 + Math.round(Math.random() * 8),
            h: 10 + Math.round(Math.random() * 10),
          }));
          setConfetti(pieces);
          setTimeout(() => setConfetti([]), 3800);
        }, 350);
      } else {
        setCongratsVisible(false);
        f = setTimeout(() => setFailVisible(true), 150);
      }
    } else {
      setCongratsVisible(false);
      setFailVisible(false);
    }
    return () => {
      clearTimeout(t);
      clearTimeout(g);
      clearTimeout(f);
      setConfetti([]);
    };
  }, [step, score, total]);

  return (
    <div className="mx-auto max-w-6xl p-4 md:p-6 pb-20">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Idokon bo'yicha bilim darajangizni tekshiring</h1>
          <p className="text-gray-500">
            Hurmatli mijoz sizga {questionCount} ta test beriladi.
          </p>
        </div>
        {step === "quiz" && (
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-sm text-gray-600">
              {answeredCount}/{total}
            </span>
            <div className="h-2 w-40 rounded-full bg-gray-200">
              <div
                className="h-full bg-indigo-600 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {err && (
        <div className="mb-4 rounded-md border bg-red-50 px-4 py-3 text-red-700">
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
                className="w-full rounded-lg border px-3 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Telefon raqam
              </label>
              <input
                className="w-full rounded-lg border px-3 py-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-white hover:bg-indigo-700"
            >
              {loading ? "Yuklanmoqda..." : "Testni boshlash"}
            </button>
          </div>
        </form>
      )}

      {step === "quiz" && q && (
        <div className="bg-white rounded-xl border p-5 shadow-sm space-y-4 ">
          {/* top nav: numbered pills */}
          <div className="flex items-center justify-between gap-4">
            <div
              className="flex gap-2 overflow-x-auto pb-1"
              ref={pillsRef}
              onWheel={handlePillsWheel}
              tabIndex={0}
              onKeyDown={handlePillsKeyDown}
              style={{
                WebkitOverflowScrolling: "touch",
                touchAction: "pan-y",
              }}
            >
              {questions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`px-3 py-1 rounded-md border text-sm font-semibold whitespace-nowrap ${
                    idx === current
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* question */}
          <div className="pt-2">
            <div className="mb-3 flex items-start gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                {current + 1}
              </span>
              <h2 className="text-lg font-semibold">{q.text}</h2>
            </div>

            <div className="space-y-3">
              {q.choices.map(({ key, label }) => {
                const selected = answers[q.id] === key;
                return (
                  <button
                    key={key}
                    onClick={() => selectAnswer(q.id, key)}
                    className={`w-full flex items-center gap-4 rounded-lg border px-4 py-3 text-left transition ${
                      selected
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center h-9 w-9 rounded-md font-bold ${
                        selected ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {key}
                    </div>
                    <div className="text-sm">{label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* footer */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
                className="rounded-lg border px-4 py-2 hover:bg-gray-50"
              >
                ← Oldingi
              </button>
              <button
                onClick={() => setCurrent((c) => Math.min(c + 1, total - 1))}
                className="rounded-lg border px-4 py-2 hover:bg-gray-50"
              >
                Keyingi →
              </button>
              <button
                onClick={submitAnswers}
                className="ml-2 rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
              >
                Yakunlash
              </button>
            </div>

            <div className="text-sm text-gray-600">
              {current + 1}/{total}
            </div>
          </div>
        </div>
      )}

      {/* RESULT */}
      {step === "result" && (
        <div className="mx-auto max-w-xl">
          {/* pass card */}
          {score != null && total > 0 && score / total >= PASS_RATE && (
            <div className={`mb-4 rounded-xl border bg-white p-6 text-center shadow-sm transform transition-all duration-700 ease-out relative overflow-visible ${congratsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div aria-hidden className="pointer-events-none absolute inset-0 overflow-visible">
                {confetti.map((p) => (
                  <span
                    key={p.id}
                    style={{
                      position: "absolute",
                      left: `${p.left}%`,
                      top: "-8%",
                      width: `${p.w}px`,
                      height: `${p.h}px`,
                      background: p.color,
                      transform: `rotate(${p.rotate}deg)`,
                      borderRadius: "2px",
                      display: "block",
                      animation: `confetti-fall ${p.duration}s ${p.delay}s cubic-bezier(.2,.8,.2,1) forwards`,
                      willChange: "transform, opacity",
                    }}
                  />
                ))}
              </div>

              <div className="text-green-700 text-2xl md:text-3xl font-extrabold mb-2">
                🎉 Tabriklaymiz{ name ? `, ${name}` : "" }!
              </div>
              <div className="text-gray-700 mb-4">
                Siz testdan {Math.round((score / total) * 100)}% natija bilan o'tdingiz.
              </div>
              <div className="text-gray-600">
                Siz Idokondan foydalanish uchun ro'yxatdan o'tishingiz mumkin.
              </div>
              <a
                href="https://admin.idokon.uz/#/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                Ro'yxatdan o'tish
              </a>

              <style>{`
                @keyframes confetti-fall {
                  0% { transform: translateY( -10% ) rotate(0deg); opacity: 1; }
                  60% { opacity: 1; }
                  100% { transform: translateY(120%) rotate(180deg); opacity: 0; }
                }
              `}</style>
            </div>
          )}

          {/* fail card */}
          {score != null && total > 0 && score / total < PASS_RATE && (
            <div className={`mb-4 rounded-xl border bg-red-50 p-6 text-center shadow-sm transform transition-all duration-500 ease-out ${failVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="text-red-700 text-xl font-bold mb-2">Afsuski, bu safar testdan o‘ta olmadingiz.</div>
              <div className="text-gray-700 mb-3">
                Lekin tashvishlanmang — biroz ko‘proq tayyorgarlik ko‘rib, qayta urinib ko‘ring! 💪
              </div>
            </div>
          )}

          {/* backendga yuborish statusi */}
          {/* {notifyStatus !== "idle" && (
            <div className="mb-3 text-center text-sm">
              {notifyStatus === "sending" && <span className="text-gray-500">Telegramga yuborilmoqda…</span>}
              {notifyStatus === "ok" && <span className="text-emerald-600">✅ Xabar yuborildi.</span>}
              {notifyStatus === "err" && <span className="text-red-600">⚠️ Xabar yuborilmadi (server tekshiring).</span>}
            </div>
          )} */}

          {/* original result card */}
          <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
            <h2 className="mb-1 text-xl font-semibold">Natija</h2>
            <p className="mb-2 text-gray-600">
              To‘plagan ballingiz:{" "}
              <span className="font-bold">
                {score}/{total}
              </span>
            </p>
            <button
              onClick={resetAll}
              className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              Qayta boshlash
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
