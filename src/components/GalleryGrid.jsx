export default function GalleryGrid({ images, onClick }) {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
			{images.map((img, idx) => (
				<button key={img.id ?? idx} onClick={() => onClick(idx)} className="relative group overflow-hidden rounded-md border">
					<img src={img.src} alt={img.alt} loading="lazy" className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
					<span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
				</button>
			))}
		</div>
	);
}


