import Seo from "../seo/Seo.jsx";

export default function APropos() {
	return (
		<main className="max-w-6xl mx-auto px-4 py-10">
			<Seo title="À propos — L'Arbo'Vert" description="Paysagisme et aménagement extérieur: création, terrasses, entretien. Approche soignée, durable et harmonieuse avec l’écosystème." />
			<h1 className="text-2xl font-semibold">À propos de L'Arbo'Vert</h1>
			<p className="mt-4 text-gray-700">Bienvenue chez l'Arbo'Vert, votre partenaire de confiance pour tous vos projets de paysagisme et d’aménagement extérieur. Nous mettons notre créativité et notre expertise au service de vos envies pour transformer vos espaces en lieux uniques, fonctionnels et esthétiques. Passionnés par la nature, nous créons des environnements durables, harmonieux et respectueux de l’écosystème.</p>

			<section className="mt-10 grid md:grid-cols-2 gap-8 items-start">
				<div>
					<h2 className="text-xl font-semibold">Notre histoire</h2>
					<p className="mt-3 text-gray-700">Une passion qui fait pousser vos rêves. Depuis sa création, l'Arbo'Vert s’est forgée une réputation solide dans le paysagisme. Nous avons débuté avec l’ambition de proposer des solutions uniques, adaptées à chaque client. Grâce à notre engagement et à la confiance de nos clients, nous sommes devenus une référence locale pour la conception et la réalisation d’espaces extérieurs sur mesure.</p>
				</div>
				<div className="rounded-md border aspect-[3/2] bg-primary-50/40 flex items-center justify-center text-primary-700">Section image</div>
			</section>

			<section className="mt-10 grid md:grid-cols-2 gap-8 items-start">
				<div className="rounded-md border aspect-[3/2] bg-primary-50/40 flex items-center justify-center text-primary-700">Section image</div>
				<div>
					<h2 className="text-xl font-semibold">Notre expertise</h2>
					<p className="mt-3 text-gray-700">L’art de sublimer vos espaces extérieurs. Notre équipe met à votre service un savoir‑faire complet: création de jardins, pose de terrasses, entretien d’espaces verts et aménagements durables. Nous nous distinguons par notre approche personnalisée: chaque projet reflète vos goûts, vos besoins et l’identité de votre lieu. Chez l'Arbo'Vert, chaque détail compte.</p>
				</div>
			</section>

			<section className="mt-12">
				<h2 className="text-xl font-semibold">FAQ</h2>
				<div className="mt-4 divide-y border rounded-md">
					<details className="p-4" open>
						<summary className="font-medium cursor-pointer">Proposez‑vous un devis gratuit ?</summary>
						<p className="mt-2 text-gray-700">Oui, nous offrons un devis gratuit et personnalisé pour tous vos projets d’entretien ou d’aménagement extérieur.</p>
					</details>
					<details className="p-4">
						<summary className="font-medium cursor-pointer">Intervenez‑vous pour de petits jardins ?</summary>
						<p className="mt-2 text-gray-700">Absolument ! Nos prestations s’adaptent à tous types d’espaces, petits ou grands.</p>
					</details>
					<details className="p-4">
						<summary className="font-medium cursor-pointer">À quelle fréquence faites‑vous l’entretien ?</summary>
						<p className="mt-2 text-gray-700">Selon vos besoins: ponctuel, mensuel ou saisonnier. Nous définissons un rythme adapté à votre espace.</p>
					</details>
				</div>
			</section>
		</main>
	);
}


