export default function About() {
  return (
    <>
      <section className="py-24 md:py-32 bg-surface" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-7 reveal">
      <span className="text-secondary font-label-lg text-label-lg tracking-widest uppercase mb-4 block">The Academy</span>
      <h2 className="font-display-md text-display-md text-primary mb-8 leading-tight">Elevating Nigerian Couture through Pedagogical Excellence.</h2>
      <div className="space-y-6 text-on-surface-variant font-body-lg">
      <p>At Slender Stitches Fashion Academy, we believe that fashion is more than just clothing-it's an architectural dialogue between the body and the fabric. Our commitment to training next-gen designers is anchored in the fusion of traditional craftsmanship and modern editorial luxury.</p>
      <p>We provide an immersive environment where creative professionals can refine their technical skills under the guidance of industry veterans, ensuring every stitch tells a story of prestige and precision.</p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-8 border-t border-outline-variant/30 pt-12">
      <div>
      <span className="block font-display-md text-display-md text-primary">100+</span>
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Graduated Talents</span>
      </div>
      <div>
      <span className="block font-display-md text-display-md text-primary">12+</span>
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Industry Experts</span>
      </div>
      </div>
      </div>
      <div className="md:col-span-5 relative reveal">
      <div className="aspect-[4/5] overflow-hidden">
      <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" data-alt="A sophisticated Nigerian fashion atelier with elegant ivory walls, featuring a professional mannequin draped in rich burgundy silk and gold embroidery. High-key natural light pours through large windows, highlighting the luxurious textures and editorial aesthetic of the studio." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBryk9-E_zqWJHg7sS2ZgbvFTQ3tGKItHBLwpY2QkI0fNiYeZ1lhgj-7ceUDEQN_WYITb0oDJp67F-YZ15-PgQ16IdBFQkZbdsjXoCunjzc4s357uPP_mMyxNRWl_NaQVurmQ8vF4JH19gaqQAtnqwDo8pI9w99z6xFNLJ3PvVdwJbbc1gK6-wtnXbzoRh-F2HLOrRQLvdwi7tc9UgnsUQREpQT0Ezek0bBQ-4ALqrWJqjP1_-SiBa0TSy9P8xGnkZhtUjdeYGmnIm"/>
      </div>
      <div className="absolute -bottom-6 -left-6 bg-primary p-8 hidden lg:block">
      <span className="material-symbols-outlined text-on-primary text-4xl" data-icon="format_quote" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
      <p className="text-on-primary font-label-lg italic mt-4">Crafting the future of African Luxury.</p>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
