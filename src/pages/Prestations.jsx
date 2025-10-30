export default function Prestations() {
	return (
		<main className="max-w-6xl mx-auto px-4 py-10">
			<h1 className="text-2xl font-semibold">Prestations</h1>
			<p className="mt-2 text-gray-600">Nos services pour vos espaces verts, de la création à l’entretien.</p>

			<section id="creation" className="mt-8">
				<h2 className="text-xl font-semibold">Création</h2>
				<ul className="mt-3 grid md:grid-cols-2 gap-3">
					<li className="p-4 border rounded-md">Gazon</li>
					<li className="p-4 border rounded-md">Plantation</li>
					<li className="p-4 border rounded-md">Clôture</li>
					<li className="p-4 border rounded-md">Terrasse</li>
				</ul>
			</section>

			<section id="elagage" className="mt-10">
				<h2 className="text-xl font-semibold">Élagage / Abattage</h2>
				<ul className="mt-3 grid md:grid-cols-2 gap-3">
					<li className="p-4 border rounded-md">Élagage</li>
					<li className="p-4 border rounded-md">Abattage</li>
					<li className="p-4 border rounded-md">Démontage par rétention</li>
				</ul>
			</section>

			<section id="rognage" className="mt-10">
				<h2 className="text-xl font-semibold">Rognage & Arrachage</h2>
				<ul className="mt-3 grid md:grid-cols-2 gap-3">
					<li className="p-4 border rounded-md">Rognage de souche</li>
					<li className="p-4 border rounded-md">Arrachage de haie</li>
					<li className="p-4 border rounded-md">Rabattage</li>
				</ul>
			</section>

			<section id="entretien" className="mt-10">
				<h2 className="text-xl font-semibold">Entretien d’espaces verts</h2>
				<ul className="mt-3 grid md:grid-cols-2 gap-3">
					<li className="p-4 border rounded-md">Tonte</li>
					<li className="p-4 border rounded-md">Désherbage</li>
					<li className="p-4 border rounded-md">Taille de haie et d’arbustes</li>
					<li className="p-4 border rounded-md">Découpe de bordure</li>
					<li className="p-4 border rounded-md">Nettoyage des allées et terrasses</li>
					<li className="p-4 border rounded-md">Etc.</li>
				</ul>
				<div className="mt-6">
					<a href="/contact" className="inline-flex items-center rounded-md bg-green-700 px-4 py-2 text-white hover:bg-green-800">Demander un devis</a>
				</div>
			</section>
		</main>
	);
}


