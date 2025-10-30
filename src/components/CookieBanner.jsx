import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent-v1";

export default function CookieBanner() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem(STORAGE_KEY);
		setVisible(stored !== "accepted");
	}, []);

	function accept() {
		localStorage.setItem(STORAGE_KEY, "accepted");
		setVisible(false);
	}

	if (!visible) return null;

	return (
		<div className="fixed inset-x-0 bottom-0 z-50">
			<div className="mx-auto max-w-screen-2xl px-4 pb-4">
				<div className="rounded-md border bg-white p-4 shadow">
					<p className="text-sm text-gray-700">
						Nous utilisons des cookies pour assurer une expérience de navigation fluide.
						En continuant, vous acceptez l'utilisation des cookies. <a className="text-green-700 underline" href="/cookies">En savoir plus</a>
					</p>
					<div className="mt-3 flex gap-2">
						<button onClick={accept} className="inline-flex items-center rounded-md bg-green-700 px-3 py-1.5 text-white hover:bg-green-800">Accepter</button>
						<a href="/cookies" className="inline-flex items-center rounded-md border border-green-700 px-3 py-1.5 text-green-700 hover:bg-green-50">Paramètres</a>
					</div>
				</div>
			</div>
		</div>
	);
}


