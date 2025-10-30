import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
			<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
				<Link to="/" className="flex items-center gap-2">
					<img src="/images/logo/logo.png" alt="L'Arbo'Vert" className="h-8 w-auto" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
					<span className="font-semibold text-primary-700">L'Arbo'Vert</span>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden md:flex items-center gap-4 text-sm">
					<NavLink to="/" end className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>Accueil</NavLink>
					<NavLink to="/prestations" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>Prestations</NavLink>
					<NavLink to="/galerie" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>Galerie</NavLink>
					<NavLink to="/blog" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>Blog</NavLink>
					<NavLink to="/a-propos" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>À propos</NavLink>
					<NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>Contact</NavLink>
					<a href="/contact" className="ml-2 brand-button-primary">Demander un devis</a>
				</nav>

				{/* Mobile hamburger */}
				<button aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center rounded-md border px-3 py-2 text-gray-700">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
				</button>
			</div>

			{/* Mobile menu panel */}
			{open && (
				<div className="md:hidden border-t bg-white">
					<nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
						<NavLink onClick={() => setOpen(false)} to="/" end className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>Accueil</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/prestations" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>Prestations</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/galerie" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>Galerie</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/blog" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>Blog</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/a-propos" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>À propos</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/contact" className={({ isActive }) => isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}>Contact</NavLink>
						<a href="/contact" className="brand-button-primary mt-2">Demander un devis</a>
					</nav>
				</div>
			)}
		</header>
	);
}


