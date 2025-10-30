import { useMemo, useState } from "react";
import Seo from "../seo/Seo.jsx";
import GalleryGrid from "../components/GalleryGrid.jsx";
import data from "../data/gallery.json";

const categories = [
	{ key: "all", label: "Tout" },
	{ key: "creation", label: "Création" },
	{ key: "elagage", label: "Élagage" },
	{ key: "entretien", label: "Entretien" },
	{ key: "avantapres", label: "Avant/Après" },
];

export default function Galerie() {
	const [active, setActive] = useState("all");
	const images = useMemo(() => {
		if (active === "all") return data;
		return data.filter((i) => i.category === active);
	}, [active]);

	return (
		<main className="max-w-6xl mx-auto px-4 py-10">
			<Seo title="Galerie — L'Arbo'Vert" description="Photos de réalisations: création, élagage, entretien, avant/après." />
			<h1 className="text-2xl font-semibold">Galerie</h1>
			<p className="mt-4 text-gray-600">Aperçu des réalisations (mock). Import des photos réelles à venir.</p>
			<div className="mt-6 flex flex-wrap gap-2">
				{categories.map((c) => (
					<button key={c.key} onClick={() => setActive(c.key)} className={"px-3 py-1.5 rounded-md border " + (active === c.key ? "bg-green-700 text-white border-green-700" : "text-green-700 border-green-700 hover:bg-green-50")}>
						{c.label}
					</button>
				))}
			</div>
			<div className="mt-6">
				<GalleryGrid images={images} />
			</div>
		</main>
	);
}


