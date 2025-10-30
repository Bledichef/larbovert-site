import { Link } from "react-router-dom";
import Seo from "../seo/Seo.jsx";
import posts from "../data/posts.json";

export default function Blog() {
	return (
		<main className="max-w-6xl mx-auto px-4 py-10">
			<Seo title="Blog — L'Arbo'Vert" description="Conseils et guides d'entretien: élagage, gazon, entretien saisonnier, création." />
			<h1 className="text-2xl font-semibold">Blog</h1>
			<p className="mt-4 text-gray-600">Conseils pour entretenir et valoriser vos espaces verts.</p>
			<ul className="mt-6 grid md:grid-cols-3 gap-4">
				{posts.map((p) => (
					<li key={p.slug} className="p-4 border rounded-md">
						<p className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString("fr-FR")}</p>
						<h2 className="mt-1 font-semibold text-lg">
							<Link className="hover:text-green-700" to={`/blog/${p.slug}`}>{p.title}</Link>
						</h2>
						<p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
						<div className="mt-3">
							<Link className="text-green-700" to={`/blog/${p.slug}`}>Lire l’article →</Link>
						</div>
					</li>
				))}
			</ul>
		</main>
	);
}


