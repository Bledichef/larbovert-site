export default function Footer() {
	return (
		<footer className="border-t mt-12">
			<div className="max-w-screen-2xl mx-auto px-4 py-8 text-sm text-gray-600 grid md:grid-cols-3 gap-6">
				<div>
					<p className="font-semibold text-gray-800">L'Arbo'Vert</p>
					<p>Depuis 2010 — Entretien, Création, Élagage.</p>
				</div>
				<div>
					<p className="font-semibold text-gray-800">Navigation</p>
					<ul className="space-y-1">
						<li><a href="/mentions" className="hover:text-primary-700">Mentions légales</a></li>
						<li><a href="/confidentialite" className="hover:text-primary-700">Politique de confidentialité</a></li>
						<li><a href="/cookies" className="hover:text-primary-700">Cookies</a></li>
					</ul>
				</div>
				<div className="text-gray-500">© {new Date().getFullYear()} L'Arbo'Vert</div>
			</div>
		</footer>
	);
}


