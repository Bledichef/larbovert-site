import { useEffect } from "react";

export default function Seo({ title, description, jsonLd }) {
	useEffect(() => {
		if (title) document.title = title;
		if (description) {
			let meta = document.querySelector('meta[name="description"]');
			if (!meta) {
				meta = document.createElement("meta");
				meta.setAttribute("name", "description");
				document.head.appendChild(meta);
			}
			meta.setAttribute("content", description);
		}
		let script;
		if (jsonLd) {
			script = document.createElement("script");
			script.type = "application/ld+json";
			script.text = JSON.stringify(jsonLd);
			document.head.appendChild(script);
		}
		return () => {
			if (script) document.head.removeChild(script);
		};
	}, [title, description, jsonLd]);

	return null;
}


