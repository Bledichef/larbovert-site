import { Link, NavLink } from "react-router-dom";

export default function Header() {
	return (
		<header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
			<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
				<Link to="/" className="font-semibold text-green-700">L'Arbo'Vert</Link>
				<nav className="flex items-center gap-4 text-sm">
					<NavLink to="/prestations" className={({ isActive }) => isActive ? "text-green-700" : "text-gray-700 hover:text-green-700"}>Prestations</NavLink>
					<NavLink to="/galerie" className={({ isActive }) => isActive ? "text-green-700" : "text-gray-700 hover:text-green-700"}>Galerie</NavLink>
					<NavLink to="/blog" className={({ isActive }) => isActive ? "text-green-700" : "text-gray-700 hover:text-green-700"}>Blog</NavLink>
					<NavLink to="/a-propos" className={({ isActive }) => isActive ? "text-green-700" : "text-gray-700 hover:text-green-700"}>À propos</NavLink>
					<NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-700" : "text-gray-700 hover:text-green-700"}>Contact</NavLink>
					<a href="/contact" className="ml-2 inline-flex items-center rounded-md bg-green-700 px-3 py-1.5 text-white hover:bg-green-800">Demander un devis</a>
				</nav>
			</div>
		</header>
	);
}


