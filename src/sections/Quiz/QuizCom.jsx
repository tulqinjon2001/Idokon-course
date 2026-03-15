/**
 * QuizCom — IDOKON bilim testi
 *
 * Yaxshilanishlar:
 * ✅ isDarkMode prop qabul qilinadi va barcha UI ga tatbiq etildi
 * ✅ resetAll da phone ni PREFIX bilan to'g'ri reset qilindi
 * ✅ notifyStatus UI qaytarildi (comment olib tashlandi)
 * ✅ Vizual dizayn yaxshilandi (dark/light)
 */

import React, { useEffect, useMemo, useState, useRef, useCallback } from "react";
import questionsData from "../../data/quiz-questions.json";

const DEFAULT_QUESTION_COUNT = 20;
const LS_KEY = "quiz_state_v1";
const PASS_RATE = 0.8;
const PREFIX = "+998 ";

/* ── Shuffle ── */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── Hydrate questions (shuffle choices, remap correct key) ── */
function hydrateQuestions(raw) {
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return raw.map((q) => {
    let choicesRaw = [];
    if (Array.isArray(q.options)) {
      choicesRaw = q.options.map((label, i) => ({ label, originalIndex: i }));
    } else if (q.options && typeof q.options === "object") {
      choicesRaw = Object.entries(q.options).map(([key, label], i) => ({
        label,
        originalKey: key,
        originalIndex: i,
      }));
    }
    choicesRaw = shuffle(choicesRaw);
    const choices = choicesRaw.map((c, i) => ({
      key: LETTERS[i] || String(i),
      label: c.label,
      __origKey: c.originalKey,
      __origIndex: c.originalIndex,
    }));

    let correctKey = q.correct ?? q.correct_option ?? q.correctOption ?? q.correct_answer;
    if (typeof correctKey === "number") {
      const found = choices.find((c) => c.__origIndex === correctKey);
      correctKey = found ? found.key : undefined;
    } else if (typeof correctKey === "string") {
      const byOrigKey = choices.find((c) => c.__origKey === correctKey);
      if (byOrigKey) {
        correctKey = byOrigKey.key;
      } else {
        const idx = LETTERS.indexOf(correctKey.toUpperCase());
        if (idx >= 0) {
          const byIndex = choices.find((c) => c.__origIndex === idx);
          if (byIndex) correctKey = byIndex.key;
        }
      }
    }

    return {
      id: String(q.id ?? Math.random().toString(36).slice(2, 9)),
      text: q.text || q.question,
      choices: choices.map(({ key, label }) => ({ key, label })),
      correct: correctKey,
    };
  });
}

/* ── LocalStorage helpers ── */
function saveState(state) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch { /**/ }
}
function loadState() {
  try {
    const s = localStorage.getItem(LS_KEY);
    return s ? JSON.parse(s) : null;
  } catch { /**/ }
  return null;
}
function clearState() {
  try { localStorage.removeItem(LS_KEY); } catch { /**/ }
}

/* ── Fallback questions ── */
const SAMPLE_QUESTIONS = [
  {
    id: "s1",
    text: "O'zbekistonda poytaxt qaysi shahar?",
    options: { A: "Samarqand", B: "Toshkent", C: "Buxoro", D: "Namangan" },
    correct: "B",
  },
  { id: "s2", text: "2 + 2 = ?", options: ["3", "4", "5", "22"], correct: 1 },
];

/* ── Phone formatter ── */
function formatPhoneDigits(digits) {
  const a = digits.slice(0, 2);
  const b = digits.slice(2, 5);
  const c = digits.slice(5, 7);
  const d = digits.slice(7, 9);
  const parts = [];
  if (a) parts.push(`(${a})`);
  if (b) parts.push(b);
  if (c) parts.push(c);
  if (d) parts.push(d);
  return parts.join(" - ");
}

/* ════════════════════════════════════════════════════════════ */
export default function QuizCom({
  questionCount = DEFAULT_QUESTION_COUNT,
  isDarkMode = false,
}) {
  const [step, setStep] = useState("intro");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(PREFIX);
  const phoneRef = useRef(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [score, setScore] = useState(null);
  const [notifyStatus, setNotifyStatus] = useState("idle"); // idle | sending | ok | err

  const [congratsVisible, setCongratsVisible] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [failVisible, setFailVisible] = useState(false);

  const total = questions.length || questionCount;
  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const progress = Math.round((answeredCount / Math.max(total, 1)) * 100);
  const percentScore = score != null && total > 0 ? Math.round((score / total) * 100) : 0;
  const passPercent = Math.round(PASS_RATE * 100);

  /* ── Load state on mount ── */
  useEffect(() => {
    const s = loadState();
    if (!s) return;
    setStep(s.step || "intro");
    setName(s.name || "");
    setPhone(s.phone || PREFIX);
    setQuestions(s.questions || []);
    setAnswers(s.answers || {});
    setCurrent(s.current ?? 0);
    setScore(s.score ?? null);
  }, []);

  /* ── Persist state ── */
  useEffect(() => {
    saveState({ step, name, phone, questions, answers, current, score });
  }, [step, name, phone, questions, answers, current, score]);

  /* ── Confetti on result ── */
  useEffect(() => {
    let t, g, f;
    if (step === "result" && score != null && total > 0) {
      const passed = score / total >= PASS_RATE;
      if (passed) {
        setFailVisible(false);
        t = setTimeout(() => setCongratsVisible(true), 200);
        g = setTimeout(() => {
          const colors = ["#EF4444","#F97316","#F59E0B","#10B981","#06B6D4","#6366F1","#EC4899"];
          setConfetti(
            Array.from({ length: 30 }).map((_, i) => ({
              id: `c${Date.now()}_${i}`,
              left: Math.round(Math.random() * 100),
              delay: Number((Math.random() * 0.6).toFixed(2)),
              duration: Number((1.8 + Math.random() * 1.6).toFixed(2)),
              color: colors[Math.floor(Math.random() * colors.length)],
              rotate: Math.round(Math.random() * 360),
              w: 6 + Math.round(Math.random() * 8),
              h: 10 + Math.round(Math.random() * 10),
            }))
          );
          setTimeout(() => setConfetti([]), 4000);
        }, 350);
      } else {
        setCongratsVisible(false);
        f = setTimeout(() => setFailVisible(true), 150);
      }
    } else {
      setCongratsVisible(false);
      setFailVisible(false);
    }
    return () => { clearTimeout(t); clearTimeout(g); clearTimeout(f); setConfetti([]); };
  }, [step, score, total]);

  /* ── Phone handlers ── */
  const handlePhoneChange = useCallback((e) => {
    let v = (e.target.value || "").replace(/^\+?998\s*/, "");
    const digits = v.replace(/\D/g, "").slice(0, 9);
    setPhone(PREFIX + formatPhoneDigits(digits));
  }, []);

  const handlePhoneFocus = useCallback(() => {
    setTimeout(() => {
      const el = phoneRef.current;
      if (el?.setSelectionRange) {
        const len = el.value.length;
        el.setSelectionRange(len, len);
      }
    }, 0);
  }, []);

  /* ── Start test ── */
  async function startTest(e) {
    e?.preventDefault();
    setErr("");
    if (!name.trim()) { setErr("Ismingizni kiriting."); return; }
    const digitsOnly = (phone || "").replace(/\D/g, "").replace(/^998/, "");
    if (digitsOnly.length !== 9) {
      setErr("Telefon raqamni to'g'ri kiriting (masalan: +998 (90) - 123 - 45 - 67).");
      return;
    }
    setLoading(true);
    const pool = Array.isArray(questionsData) && questionsData.length > 0
      ? questionsData : SAMPLE_QUESTIONS;
    const hydrated = hydrateQuestions(shuffle(pool).slice(0, Math.min(questionCount, pool.length)));
    setQuestions(hydrated);
    setAnswers({});
    setCurrent(0);
    setStep("quiz");
    setLoading(false);
  }

  /* ── Select answer ── */
  const selectAnswer = useCallback((qid, optKey) => {
    setAnswers((prev) => ({ ...prev, [qid]: optKey }));
  }, []);

  /* ── Telegram notify ── */
  async function notifyTelegram({ name, phone, score, total, passed }) {
    try {
      setNotifyStatus("sending");
      const percent = Math.round((score / total) * 100);
      const rawBase =
        typeof import.meta !== "undefined" &&
        import.meta.env?.VITE_API_BASE_URL
          ? import.meta.env.VITE_API_BASE_URL
          : "https://idokon-course-backend.onrender.com";
      const url = `${String(rawBase).replace(/\/+$/, "")}/api/telegram-notify`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, score, total, percent, passed }),
      });
      if (!res.ok) throw new Error(await res.text().catch(() => `HTTP ${res.status}`));
      setNotifyStatus("ok");
    } catch (e) {
      console.error("Telegramga yuborishda xatolik:", e);
      setNotifyStatus("err");
    }
  }

  /* ── Submit ── */
  async function submitAnswers() {
    let sc = 0;
    Object.entries(answers).forEach(([qid, userKey]) => {
      const q = questions.find((q) => q.id === qid);
      if (q && userKey === q.correct) sc++;
    });
    const passed = total > 0 && sc / total >= PASS_RATE;
    setScore(sc);
    setStep("result");
    clearState();
    notifyTelegram({ name, phone, score: sc, total, passed });
  }

  /* ── Reset ── */
  function resetAll() {
    setStep("intro");
    setName("");
    setPhone(PREFIX); // ✅ Prefix bilan reset
    setQuestions([]);
    setAnswers({});
    setCurrent(0);
    setScore(null);
    setNotifyStatus("idle");
    clearState();
  }

  /* ── Pills scroll ── */
  const pillsRef = useRef(null);
  useEffect(() => {
    const btn = pillsRef.current?.children[current];
    btn?.scrollIntoView?.({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [current]);

  function handlePillsWheel(e) {
    const el = pillsRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > 0 && el.scrollWidth > el.clientWidth) {
      el.scrollLeft += e.deltaY * 1.5;
      e.preventDefault();
    }
  }

  function handlePillsKeyDown(e) {
    const map = {
      ArrowLeft: () => setCurrent((c) => Math.max(c - 1, 0)),
      ArrowRight: () => setCurrent((c) => Math.min(c + 1, total - 1)),
      Home: () => setCurrent(0),
      End: () => setCurrent(total - 1),
    };
    if (map[e.key]) { map[e.key](); e.preventDefault(); }
  }

  const q = questions[current];

  /* ── Theme helpers ── */
  const card = isDarkMode
    ? "bg-gray-800 border-gray-700 text-gray-100"
    : "bg-white border-gray-200 text-gray-900";
  const inputCls = isDarkMode
    ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500/30"
    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-primary-200";
  const labelCls = isDarkMode ? "text-gray-300" : "text-gray-700";

  return (
    <div className="mx-auto max-w-4xl p-4 md:p-6 pb-20">
      {/* ── Page title ── */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className={`text-xl sm:text-2xl font-bold ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
            Bilim darajangizni tekshiring
          </h1>
          <p className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            Hurmatli mijoz, sizga {questionCount} ta test beriladi.
          </p>
        </div>

        {step === "quiz" && (
          <div className="flex items-center gap-3">
            <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              {answeredCount}/{total}
            </span>
            <div className="flex items-center gap-2">
              <div className={`h-2 w-32 sm:w-40 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                <div
                  className="h-full bg-primary-500 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className={`text-sm font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                {progress}%
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ── Error ── */}
      {err && (
        <div className="mb-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 text-sm">
          <i className="fa-solid fa-triangle-exclamation" />
          {err}
        </div>
      )}

      {/* ══════════════ INTRO ══════════════ */}
      {step === "intro" && (
        <div className={`rounded-2xl border p-6 sm:p-8 shadow-sm ${card}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-md">
              <i className="fa-solid fa-circle-question text-white" />
            </div>
            <div>
              <h2 className={`font-bold text-lg ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                Test boshlanishidan oldin
              </h2>
              <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                Ma'lumotlaringizni kiriting
              </p>
            </div>
          </div>

          <form onSubmit={startTest} className="space-y-4 max-w-md">
            <div>
              <label className={`block mb-1.5 text-sm font-medium ${labelCls}`}>
                Ismingiz <span className="text-red-500">*</span>
              </label>
              <input
                className={`w-full rounded-xl border px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 ${inputCls}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ism Familiya"
                autoComplete="name"
              />
            </div>

            <div>
              <label className={`block mb-1.5 text-sm font-medium ${labelCls}`}>
                Telefon raqam <span className="text-red-500">*</span>
              </label>
              <input
                ref={phoneRef}
                className={`w-full rounded-xl border px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 ${inputCls}`}
                value={phone}
                onChange={handlePhoneChange}
                onFocus={handlePhoneFocus}
                placeholder="+998 (90) - 123 - 45 - 67"
                inputMode="numeric"
                autoComplete="tel"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-white font-semibold text-sm hover:bg-primary-700 active:scale-95 transition-all shadow-md disabled:opacity-60"
            >
              {loading ? (
                <><i className="fa-solid fa-spinner fa-spin" /> Yuklanmoqda…</>
              ) : (
                <><i className="fa-solid fa-play" /> Testni boshlash</>
              )}
            </button>
          </form>
        </div>
      )}

      {/* ══════════════ QUIZ ══════════════ */}
      {step === "quiz" && q && (
        <div className={`rounded-2xl border shadow-sm space-y-5 ${card}`}>
          {/* Pills nav */}
          <div
            className={`px-5 pt-5 pb-0 flex gap-1.5 overflow-x-auto`}
            ref={pillsRef}
            onWheel={handlePillsWheel}
            tabIndex={0}
            onKeyDown={handlePillsKeyDown}
            role="tablist"
            aria-label="Savollar navigatsiyasi"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {questions.map((qItem, idx) => {
              const isCurrent = idx === current;
              const isAnswered = !!answers[qItem.id];
              return (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={isCurrent}
                  onClick={() => setCurrent(idx)}
                  title={isAnswered ? "Javoblangan" : "Javoblanmagan"}
                  className={[
                    "flex-shrink-0 px-3 py-1 rounded-lg border text-xs font-bold transition-all",
                    isCurrent
                      ? "bg-primary-500 border-primary-500 text-white shadow-md"
                      : isAnswered
                      ? isDarkMode
                        ? "bg-primary-900/40 border-primary-700 text-primary-300"
                        : "bg-primary-100 border-primary-200 text-primary-700"
                      : isDarkMode
                      ? "bg-gray-700 border-gray-600 text-gray-400 hover:bg-gray-600"
                      : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50",
                  ].join(" ")}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Question */}
          <div className="px-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white font-bold text-sm flex-shrink-0 shadow-sm">
                {current + 1}
              </span>
              <h2 className={`text-base sm:text-lg font-semibold leading-snug ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                {q.text}
              </h2>
            </div>

            {/* Choices */}
            <div className="space-y-2.5">
              {q.choices.map(({ key, label }) => {
                const selected = answers[q.id] === key;
                return (
                  <button
                    key={key}
                    onClick={() => selectAnswer(q.id, key)}
                    className={[
                      "w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-150 hover:shadow-sm active:scale-[0.99]",
                      selected
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 shadow-md"
                        : isDarkMode
                        ? "border-gray-700 hover:bg-gray-700/50 hover:border-gray-600"
                        : "border-gray-200 hover:bg-gray-50 hover:border-gray-300",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-lg font-bold text-sm transition-all",
                        selected
                          ? "bg-primary-600 text-white shadow-sm"
                          : isDarkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-700",
                      ].join(" ")}
                    >
                      {key}
                    </span>
                    <span className={`flex-1 leading-snug ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                      {label}
                    </span>
                    {selected && (
                      <i className="fa-solid fa-circle-check text-primary-500 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className={`flex items-center justify-between px-5 pb-5 pt-2 border-t ${isDarkMode ? "border-gray-700" : "border-gray-100"}`}>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
                disabled={current === 0}
                className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all disabled:opacity-40 ${
                  isDarkMode
                    ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                    : "border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                ← Oldingi
              </button>
              <button
                onClick={() => setCurrent((c) => Math.min(c + 1, total - 1))}
                disabled={current === total - 1}
                className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all disabled:opacity-40 ${
                  isDarkMode
                    ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                    : "border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Keyingi →
              </button>
              <button
                onClick={submitAnswers}
                className="ml-1 px-4 py-2 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 active:scale-95 transition-all shadow-md"
              >
                Yakunlash ✓
              </button>
            </div>
            <span className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              {current + 1} / {total}
            </span>
          </div>
        </div>
      )}

      {/* ══════════════ RESULT ══════════════ */}
      {step === "result" && (
        <div className="max-w-xl mx-auto space-y-4">
          {/* Pass card */}
          {score != null && score / total >= PASS_RATE && (
            <div
              className={`relative overflow-hidden rounded-2xl border p-6 text-center shadow-sm transition-all duration-700 ${
                congratsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
            >
              {/* Confetti */}
              <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
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
                      animation: `confetti-fall ${p.duration}s ${p.delay}s cubic-bezier(.2,.8,.2,1) forwards`,
                    }}
                  />
                ))}
              </div>

              <div className="text-4xl mb-3">🎉</div>
              <div className={`text-2xl font-extrabold mb-2 ${isDarkMode ? "text-green-400" : "text-green-700"}`}>
                Tabriklaymiz{name ? `, ${name}` : ""}!
              </div>
              <div className={`mb-3 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                Siz testdan <strong>{percentScore}%</strong> natija bilan o'tdingiz.
              </div>
              <div className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                O'tish uchun kerak: <strong>{passPercent}%</strong>
              </div>
              <a
                href="https://admin.idokon.uz/#/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-2.5 text-white font-semibold text-sm hover:bg-primary-700 active:scale-95 transition-all shadow-md"
              >
                <i className="fa-solid fa-user-plus" />
                Ro'yxatdan o'tish
              </a>

              <style>{`@keyframes confetti-fall{0%{transform:translateY(-10%) rotate(0deg);opacity:1}60%{opacity:1}100%{transform:translateY(120%) rotate(180deg);opacity:0}}`}</style>
            </div>
          )}

          {/* Fail card */}
          {score != null && score / total < PASS_RATE && (
            <div
              className={`rounded-2xl border p-6 text-center shadow-sm transition-all duration-500 ${
                failVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${isDarkMode ? "bg-red-900/20 border-red-800/50" : "bg-red-50 border-red-200"}`}
            >
              <div className="text-4xl mb-3">😔</div>
              <div className={`text-xl font-bold mb-2 ${isDarkMode ? "text-red-400" : "text-red-700"}`}>
                Bu safar testdan o'ta olmadingiz.
              </div>
              <div className={`text-sm mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Siz <strong>{percentScore}%</strong> to'pladingiz. O'tish uchun kerak: <strong>{passPercent}%</strong>.
              </div>
              <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Biroz ko'proq tayyorgarlik ko'rib, qayta urinib ko'ring! 💪
              </div>
            </div>
          )}

          {/* Telegram notify status */}
          {notifyStatus !== "idle" && (
            <div className={`rounded-xl px-4 py-3 text-sm text-center border ${
              notifyStatus === "sending"
                ? isDarkMode ? "bg-gray-800 border-gray-700 text-gray-400" : "bg-gray-50 border-gray-200 text-gray-500"
                : notifyStatus === "ok"
                ? isDarkMode ? "bg-green-900/20 border-green-800/40 text-green-400" : "bg-green-50 border-green-200 text-green-700"
                : isDarkMode ? "bg-red-900/20 border-red-800/40 text-red-400" : "bg-red-50 border-red-200 text-red-700"
            }`}>
              {notifyStatus === "sending" && <><i className="fa-solid fa-spinner fa-spin mr-2" />Telegramga yuborilmoqda…</>}
              {notifyStatus === "ok" && <><i className="fa-solid fa-circle-check mr-2" />Natijangiz yuborildi.</>}
              {notifyStatus === "err" && <><i className="fa-solid fa-triangle-exclamation mr-2" />Xabar yuborilmadi (tarmoq xatosi).</>}
            </div>
          )}

          {/* Score summary */}
          <div className={`rounded-2xl border p-6 text-center shadow-sm ${
            isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
              Natija
            </h2>
            <div className="mb-4">
              <div className={`text-5xl font-extrabold ${
                percentScore >= passPercent
                  ? isDarkMode ? "text-green-400" : "text-green-600"
                  : isDarkMode ? "text-red-400" : "text-red-600"
              }`}>
                {percentScore}%
              </div>
              <div className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                {score}/{total} to'g'ri javob
              </div>
            </div>
            {/* Progress bar */}
            <div className={`h-3 w-full rounded-full mb-4 ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}>
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  percentScore >= passPercent ? "bg-green-500" : "bg-red-500"
                }`}
                style={{ width: `${percentScore}%` }}
              />
            </div>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-2.5 text-white font-semibold text-sm hover:bg-primary-700 active:scale-95 transition-all shadow-md"
            >
              <i className="fa-solid fa-rotate-right" />
              Qayta boshlash
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
