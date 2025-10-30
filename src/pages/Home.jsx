import Seo from "../seo/Seo.jsx";

export default function Home() {
	return (
		<main className="max-w-6xl mx-auto px-4 py-10">
			<Seo
				title="L'Arbo'Vert — Entretien, Création, Élagage | Yvelines"
				description="Depuis 2010, entretien et création d'espaces verts, taille & soin aux arbres, élagage, interventions Yvelines. Devis gratuit."
				jsonLd={{
					"@context": "https://schema.org",
					"@type": "LocalBusiness",
					name: "L'Arbo'Vert",
					url: window.location.origin,
					areaServed: "Yvelines",
					image: window.location.origin + "/vite.svg",
					telephone: "",
					address: { "@type": "PostalAddress", addressLocality: "Yvelines", addressCountry: "FR" },
				}}
			/>
			<section className="text-center py-16">
				<h1 className="text-3xl md:text-5xl font-semibold text-gray-900">L'Arbo'Vert — Entretien, Création, Taille & Soin</h1>
				<p className="mt-4 text-gray-600">Devis gratuit — Orgerus, Plaisir, Coignières et alentours.</p>
				<div className="mt-6 flex items-center justify-center gap-3">
					<a href="/contact" className="inline-flex items-center rounded-md bg-green-700 px-4 py-2 text-white hover:bg-green-800">Demander un devis</a>
					<a href="/galerie" className="inline-flex items-center rounded-md border border-green-700 px-4 py-2 text-green-700 hover:bg-green-50">Voir la galerie</a>
				</div>
			</section>
		</main>
	);
}


