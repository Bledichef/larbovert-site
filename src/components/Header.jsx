import { Link, NavLink } from "react-router-dom";

export default function Header() {
	return (
		<header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
			<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
				<Link to="/" className="flex items-center gap-2">
					<img src="/images/logo/logo.png" alt="L'Arbo'Vert" className="h-8 w-auto" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
					<span className="font-semibold text-primary-700">L'Arbo'Vert</span>
				</Link>
				<nav className="flex items-center gap-4 text-sm">
					<NavLink to="/prestations" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>Prestations</NavLink>
					<NavLink to="/galerie" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>Galerie</NavLink>
					<NavLink to="/blog" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>Blog</NavLink>
					<NavLink to="/a-propos" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>À propos</NavLink>
					<NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>Contact</NavLink>
					<a href="/contact" className="ml-2 brand-button-primary">Demander un devis</a>
				</nav>
			</div>
		</header>
	);
}


