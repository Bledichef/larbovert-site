import { useEffect } from "react";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
	useEffect(() => {
		function onKey(e) {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") onPrev();
			if (e.key === "ArrowRight") onNext();
		}
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [onClose, onPrev, onNext]);

	if (index < 0) return null;
	const img = images[index];

	return (
		<div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" role="dialog" aria-modal="true">
			<button aria-label="Fermer" onClick={onClose} className="absolute top-3 right-3 text-white text-2xl">×</button>
			<button aria-label="Précédent" onClick={onPrev} className="absolute left-3 text-white text-2xl">‹</button>
			<img src={img.src} alt={img.alt} className="max-h-[90vh] max-w-[90vw] object-contain" />
			<button aria-label="Suivant" onClick={onNext} className="absolute right-3 text-white text-2xl">›</button>
		</div>
	);
}


