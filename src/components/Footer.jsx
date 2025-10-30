export default function Footer() {
	return (
		<footer className="border-t mt-12">
			<div className="max-w-screen-2xl mx-auto px-4 py-8 text-sm text-gray-600 grid md:grid-cols-3 gap-6">
				<div>
					<p className="font-semibold text-gray-800">L'Arbo'Vert</p>
					<p>Depuis 2010 — Entretien, Création, Élagage.</p>
				</div>
				<div>
					<p className="font-semibold text-gray-800">Contact</p>
					<ul className="space-y-1">
						<li><a href="tel:+33651651937" className="hover:text-primary-700">06 51 65 19 37</a></li>
						<li><a href="mailto:stephane@larbovert.fr" className="hover:text-primary-700">stephane@larbovert.fr</a></li>
						<li className="pt-2 text-xs text-gray-500">Mentions légales: <a href="/mentions" className="underline hover:text-primary-700">voir</a></li>
					</ul>
				</div>
				<div className="text-gray-500">
					<p>© {new Date().getFullYear()} L'Arbo'Vert</p>
					<p className="mt-2 text-xs">Site créé par <a href="https://www.guillaume-colin.com/" target="_blank" rel="noreferrer" className="underline hover:text-primary-700">Guillaume Colin</a></p>
				</div>
			</div>
		</footer>
	);
}


