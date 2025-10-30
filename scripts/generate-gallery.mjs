import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const galleryDir = join(process.cwd(), "public", "images", "galerie");
const outFile = join(process.cwd(), "src", "data", "gallery.json");

const validExt = new Set([".jpg", ".jpeg", ".png", ".webp", ".svg"]);

function getExt(name) {
	const i = name.lastIndexOf(".");
	return i >= 0 ? name.slice(i).toLowerCase() : "";
}

function generate() {
	let files = [];
	try {
		files = readdirSync(galleryDir, { withFileTypes: true })
			.filter((d) => d.isFile() && validExt.has(getExt(d.name)))
			.map((d) => d.name)
			.sort();
	} catch (_) {
		files = [];
	}

	const items = files.map((name, idx) => ({
		id: idx + 1,
		src: `/images/galerie/${name}`,
		alt: `Réalisation ${idx + 1}`,
		category: "creation",
	}));

	writeFileSync(outFile, JSON.stringify(items, null, 2), "utf8");
}

generate();
console.log("gallery.json regenerated from public/images/galerie (", new Date().toISOString(), ")");


