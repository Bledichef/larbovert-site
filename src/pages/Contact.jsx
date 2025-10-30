import ContactForm from "../components/ContactForm.jsx";
import Seo from "../seo/Seo.jsx";

export default function Contact() {
	return (
		<main className="max-w-screen-2xl mx-auto px-4 py-10">
			<Seo title="Contact — L'Arbo'Vert" description="Contactez-nous pour un devis gratuit: nom, prénom, email, téléphone, message." />
			<h1 className="text-2xl font-semibold">Contact</h1>
			<p className="mt-4 text-gray-600">Remplissez le formulaire ci‑dessous, nous reviendrons vers vous rapidement.</p>
			<div className="mt-6 grid md:grid-cols-3 gap-8">
				<div className="md:col-span-2">
					<ContactForm />
				</div>
				<aside className="md:col-span-1">
					<div className="rounded-md border p-4">
						<h2 className="font-semibold text-gray-800">Coordonnées</h2>
						<ul className="mt-3 space-y-2 text-gray-700">
							<li>
								<p className="text-sm text-gray-600">Horaires</p>
								<p>Du lundi au vendredi, de 10 à 19h</p>
							</li>
							<li>
								<p className="text-sm text-gray-600">Téléphone</p>
								<a className="text-primary-700 hover:underline" href="tel:+33651651937">06 51 65 19 37</a>
							</li>
							<li>
								<p className="text-sm text-gray-600">Email</p>
								<a className="text-primary-700 hover:underline" href="mailto:stephane@larbovert.fr">stephane@larbovert.fr</a>
							</li>
						</ul>
					</div>
				</aside>
			</div>
		</main>
	);
}


