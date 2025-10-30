import { useParams, Link } from "react-router-dom";
import posts from "../data/posts.json";

export default function BlogPost() {
	const { slug } = useParams();
	const post = posts.find((p) => p.slug === slug);

	if (!post) {
		return (
			<main className="max-w-3xl mx-auto px-4 py-10">
				<p>Article introuvable.</p>
				<Link className="text-green-700" to="/blog">← Retour au blog</Link>
			</main>
		);
	}

	return (
		<main className="max-w-3xl mx-auto px-4 py-10">
			<p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString("fr-FR")}</p>
			<h1 className="mt-1 text-3xl font-semibold">{post.title}</h1>
			<article className="prose prose-green mt-6 max-w-none">
				<p>{post.content}</p>
			</article>
			<div className="mt-8">
				<Link className="text-green-700" to="/blog">← Retour au blog</Link>
			</div>
		</main>
	);
}


