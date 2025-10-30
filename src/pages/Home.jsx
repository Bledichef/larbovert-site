import Seo from "../seo/Seo.jsx";
import posts from "../data/posts.json";
import gallery from "../data/gallery.json";

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
			<section className="relative text-center py-20 rounded-xl overflow-hidden border">
				<div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url(/images/galerie/photo-1640664673122-e2b230cfa5de.webp)' }} />
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative px-4">
				<h1 className="text-3xl md:text-5xl font-semibold text-gray-900">L'Arbo'Vert — Entretien, Création, Taille & Soin</h1>
				<p className="mt-2 text-sm uppercase tracking-wide text-white/80">Depuis 2010</p>
				<p className="mt-1 text-white">Entretien / Création / Taille & Soin aux Arbres / Petits bricolages</p>
				<div className="mt-6 flex items-center justify-center gap-3">
					<a href="/contact" className="brand-button-primary">Demander un devis</a>
					<a href="/galerie" className="brand-button-outline bg-white/90">Voir la galerie</a>
				</div>
				</div>
			</section>

			{/* Services en avant */}
			<section className="mt-10">
				<h2 className="text-xl font-semibold">Nos prestations</h2>
				<div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
					<div className="p-4 border rounded-md">Création: gazon, plantation, clôture, terrasse</div>
					<div className="p-4 border rounded-md">Élagage, abattage, démontage par rétention</div>
					<div className="p-4 border rounded-md">Rognage de souche, arrachage de haie, rabattage</div>
					<div className="p-4 border rounded-md">Entretien: tonte, désherbage, taille, nettoyage</div>
				</div>
				<div className="mt-4">
					<a href="/prestations" className="text-primary-700 hover:underline">Voir toutes les prestations →</a>
				</div>
			</section>

			{/* Galerie aperçu */}
			<section className="mt-12">
				<h2 className="text-xl font-semibold">Galerie</h2>
				<div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
					{gallery.slice(0, 6).map((g, i) => (
						<img key={i} src={g.src} alt={g.alt} className="aspect-[3/2] w-full object-cover rounded-md border" loading="lazy" />
					))}
				</div>
				<div className="mt-4">
					<a href="/galerie" className="text-primary-700 hover:underline">Voir la galerie →</a>
				</div>
			</section>

			{/* Témoignages */}
			<section className="mt-12">
				<h2 className="text-xl font-semibold">Ce que nos clients disent de nous</h2>
				<div className="mt-4 grid md:grid-cols-3 gap-4 text-gray-700">
					<figure className="p-4 border rounded-md">« Grâce à l'Arbo'Vert, notre jardin est devenu un véritable havre de paix. Leur écoute, leur créativité et leur professionnalisme ont dépassé toutes nos attentes. Nous recommandons les yeux fermés !! »<figcaption className="mt-2 text-sm text-gray-500">Michel Forestier / Orgerus</figcaption></figure>
					<figure className="p-4 border rounded-md">« Je suis un témoignage. Cliquez pour me modifier et ajoutez du texte qui dit quelque chose de bien de vous et de vos services. »<figcaption className="mt-2 text-sm text-gray-500">Philbert Bureau / Plaisir</figcaption></figure>
					<figure className="p-4 border rounded-md">« Je suis un témoignage. Cliquez pour me modifier et ajoutez du texte qui dit quelque chose de bien de vous et de vos services. »<figcaption className="mt-2 text-sm text-gray-500">Cosette Blaise / Coignières</figcaption></figure>
				</div>
			</section>

			{/* Blog teaser */}
			<section className="mt-12">
				<h2 className="text-xl font-semibold">Nos articles de blog</h2>
				{posts[0] && (
					<article className="mt-4 p-4 border rounded-md">
						<p className="text-xs text-gray-500">{new Date(posts[0].date).toLocaleDateString("fr-FR")}</p>
						<h3 className="mt-1 font-semibold text-lg">{posts[0].title}</h3>
						<p className="mt-2 text-gray-700">{posts[0].excerpt}</p>
						<div className="mt-3"><a className="text-primary-700 hover:underline" href={`/blog/${posts[0].slug}`}>Lire l’article →</a></div>
					</article>
				)}
			</section>

			{/* CTA final */}
			<section className="mt-12 text-center">
				<h2 className="text-2xl font-semibold">Prêts à transformer votre extérieur ?</h2>
				<p className="mt-2 text-gray-600">Devis gratuit sous 24/48h.</p>
				<div className="mt-4">
					<a href="/contact" className="brand-button-primary">Demander un devis</a>
				</div>
			</section>
		</main>
	);
}


