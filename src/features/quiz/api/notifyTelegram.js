import { postJson, getNotifyPath } from "../../../shared/lib/api.js";

/** Quiz natijasini Telegram guruhiga yuborish */
export async function notifyTelegramQuizResult({ name, phone, score, total, passed }) {
  const percent = Math.round((score / total) * 100);
  return postJson(getNotifyPath(), {
    name,
    phone,
    score,
    total,
    percent,
    passed,
  });
}
