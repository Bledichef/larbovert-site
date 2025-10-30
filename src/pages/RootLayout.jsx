import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CookieBanner from "../components/CookieBanner.jsx";
import SkipLink from "../components/SkipLink.jsx";

export default function RootLayout() {
	return (
		<div className="min-h-screen flex flex-col bg-white text-gray-900">
			<SkipLink />
			<Header />
			<div id="main-content" className="flex-1" tabIndex={-1}>
				<Outlet />
			</div>
			<Footer />
			<CookieBanner />
		</div>
	);
}


