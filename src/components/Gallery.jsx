// Dynamically import all image assets in `src/assets` and exclude logo files.
const modules = import.meta.glob('../assets/*.{jpeg,jpg,png,webp}', { eager: true });
const images = Object.entries(modules)
  .filter(([path]) => !path.toLowerCase().includes('logo'))
  .map(([_, m]) => m && (m.default || m))
  .filter(Boolean);

const galleryItems = images.map((src, i) => ({
  src,
  alt: `Gallery image ${i + 1}`,
  delay: `${i * 75}ms`,
}));

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low" id="gallery">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
          <div className="max-w-xl">
            <span className="text-secondary font-label-lg text-label-lg tracking-widest uppercase mb-4 block">Couture Showcase</span>
            <h2 className="font-display-md text-display-md text-primary">Inside the Atelier</h2>
          </div>
          <div className="hidden md:block">
            <a className="font-label-lg text-label-lg text-secondary border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-all uppercase tracking-widest" href="#">View Full Portfolio</a>
          </div>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`gallery-item reveal ${index === 0 ? 'featured' : ''}`}
              style={{ transitionDelay: item.delay }}
            >
              <img
                alt={item.alt}
                loading="lazy"
                className="w-full h-full block object-cover"
                src={item.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
