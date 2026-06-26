const DEFAULT_API_BASE = "https://idokon-course-backend.onrender.com";

/** Backend API bazaviy URL */
export function getApiBaseUrl() {
  const fromEnv = import.meta.env?.VITE_API_BASE_URL;
  return String(fromEnv || DEFAULT_API_BASE).replace(/\/+$/, "");
}

function isSupabaseApi() {
  return getApiBaseUrl().includes("supabase.co");
}

/** Supabase Edge Functions uchun headerlar */
function buildHeaders() {
  const headers = { "Content-Type": "application/json" };
  const anonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY;

  if (isSupabaseApi() && anonKey) {
    headers.apikey = anonKey;
    headers.Authorization = `Bearer ${anonKey}`;
  }

  return headers;
}

/** Quiz notify endpoint — Supabase va Express bilan mos */
export function getNotifyPath() {
  const custom = import.meta.env?.VITE_API_NOTIFY_PATH;
  if (custom) return custom.startsWith("/") ? custom : `/${custom}`;

  return isSupabaseApi() ? "/telegram-notify" : "/api/telegram-notify";
}

/** POST so'rov yuborish */
export async function postJson(path, body) {
  const url = `${getApiBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => `HTTP ${res.status}`);
    if (res.status === 404 && isSupabaseApi()) {
      throw new Error(
        "Supabase function topilmadi (404). Edge Functions deploy qilinganligini tekshiring.",
      );
    }
    throw new Error(text);
  }

  return res.json();
}
