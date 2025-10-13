import React from "react";
import TelegramPost from "../../components/layouts/TelegramPost"; // yo'lni loyihangizga moslang

const KassagaKirish = () => {
	// Yangi: YouTube video va playlist
	const YT_VIDEO_ID = "r17SKvRUUpE";
	const YT_URL = `https://www.youtube.com/watch?v=${YT_VIDEO_ID}`;
	const YT_PLAYLIST_URL = "https://www.youtube.com/playlist?list=PLNt3xrjLbs_i6yQyJW5_ThvxC4YeR80zf";

	// Yangi: Kassa dasturi va qo'llanma (o'zingizga mos URL bilan almashtiring)
	const KASSA_URL = "https://example.com/downloads/IDOKON-Kassa-setup.exe"; // <-- replace with real download URL
	const MANUAL_URL = "https://example.com/docs/IDOKON-kassa-manual.pdf"; // <-- replace with real PDF URL

	const steps = [
		{ icon: "💻", text: "Kompyuteringizda «IDOKON Kassa» dasturini ishga tushiring." },
		{ icon: "🔑", text: "Admin panelda yaratilgan kassir login va parolini kiriting." },
		{ icon: "🧾", text: "Login to'g'ri bo'lsa, kassa asosiy oynasi ochiladi." },
		{ icon: "🛒", text: "Sotuv, to‘lov va chek chiqarish amallarini bajaring." },
		{ icon: "⚠️", text: "Xatolik bo‘lsa, login/parolni tekshiring yoki administratorga murojaat qiling." },
	];

	return (
		<div className="p-6 bg-white rounded-lg shadow-md space-y-6">
			<h2 className="text-2xl font-bold text-slate-800">Kassaga kirish</h2>

			{/* YouTube video embed + fallback link */}
			<div className="bg-slate-100 rounded-lg p-3">
				{/* Embed YouTube (aria-label va title qo'shildi) */}
				<div className="w-full">
					{/* Inline style ishlatildi — kerak bo'lsa Tailwind klasslari bilan almashtiring */}
					<iframe
						title="IDOKON kassa ko'rsatma video"
						src={`https://www.youtube.com/embed/${YT_VIDEO_ID}`}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						style={{ width: "100%", height: "480px", borderRadius: "8px", border: "0" }}
						aria-label="IDOKON kassaga kirish video"
					/>
				</div>

				{/* Qo'shimcha havolalar: to'liq video va playlist */}
				<div className="mt-3 flex flex-wrap gap-2">
					<a
						href={YT_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-3 py-2 bg-cyan-600 text-white rounded-md text-sm"
						aria-label="YouTube videoni yangi oynada ochish"
					>
						YouTube-da ochish
					</a>
					<a
						href={YT_PLAYLIST_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-3 py-2 bg-slate-200 text-slate-800 rounded-md text-sm"
						aria-label="Playlistni ochish"
					>
						Playlistni ko‘rish
					</a>
				</div>
			</div>

			{/* Yuklab olish va qo'llanma tugmalari */}
			<div className="flex flex-wrap gap-3">
				{/* Kassa dasturini yuklab olish */}
				<a
					href="https://github.com/tulqinjon2001/Idokon-course/releases/download/idokonkassa1.2.2/Idokon1.2.2.x64.exe"
					download
					className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-md text-sm"
					aria-label="IDOKON Kassa dasturini yuklab olish"
				>
					Kassani yuklab olish
				</a>

				{/* Qo'llanmani PDF sifatida ochish */}
				<a
					href="https://github.com/tulqinjon2001/Idokon-course/releases/download/Qollanmalar/Idokon.kassani.yuklab.olish.o.rnatish.va.kirish.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md text-sm"
					aria-label="IDOKON kassa qo'llanmasini PDF formatida ochish"
				>
					Qo'llanmani ochish (PDF)
				</a>
			</div>

			{/* Qadam-baqadam yo'riqnoma */}
			<section className="space-y-3">
				<h3 className="text-lg font-semibold text-slate-800">📋 Kassaga kirish bo'yicha yo‘riqnoma</h3>
				<ol className="list-decimal list-inside space-y-2 text-slate-700" aria-label="kassa qadamlar">
					{steps.map((s, i) => (
						<li key={i}>
							<span className="mr-2" aria-hidden="true">{s.icon}</span>
							<span>{s.text}</span>
						</li>
					))}
				</ol>
			</section>
		</div>
	);
};

export default KassagaKirish;
