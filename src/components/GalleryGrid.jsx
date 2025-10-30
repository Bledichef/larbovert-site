const placeholders = Array.from({ length: 12 }).map((_, i) => ({
	 id: i + 1,
	 src: `https://picsum.photos/seed/larbovert-${i + 1}/600/400`,
	 alt: `Réalisation ${i + 1}`,
}));

export default function GalleryGrid() {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
			{placeholders.map((img) => (
				<figure key={img.id} className="relative group overflow-hidden rounded-md border">
					<img src={img.src} alt={img.alt} loading="lazy" className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
					<figcaption className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></figcaption>
				</figure>
			))}
		</div>
	);
}


