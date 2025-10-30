import GalleryGrid from "../components/GalleryGrid.jsx";

export default function Galerie() {
	return (
		<main className="max-w-6xl mx-auto px-4 py-10">
			<h1 className="text-2xl font-semibold">Galerie</h1>
			<p className="mt-4 text-gray-600">Aperçu des réalisations (images placeholder, import des photos à venir).</p>
			<div className="mt-6">
				<GalleryGrid />
			</div>
		</main>
	);
}


