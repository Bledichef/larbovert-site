export default function GalleryGrid({ images }) {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
			{images.map((img) => (
				<figure key={img.id} className="relative group overflow-hidden rounded-md border">
					<img src={img.src} alt={img.alt} loading="lazy" className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
					<figcaption className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></figcaption>
				</figure>
			))}
		</div>
	);
}


