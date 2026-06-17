export default function CallToAction() {
  return (
    <>
      <section className="py-24 md:py-32 bg-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-4 reveal">
      <span className="text-secondary-fixed font-label-lg text-label-lg tracking-widest uppercase mb-4 block">Success Stories</span>
      <h2 className="font-display-md text-display-md text-on-primary mb-8 leading-tight">Hear from Our Alumni</h2>
      <p className="text-on-primary/70 font-body-lg">Transforming lives through the lens of fashion. Discover the journeys of our successful graduates.</p>
      </div>
      <div className="lg:col-span-8 grid md:grid-cols-2 gap-8 reveal">
      <div className="bg-surface/90 backdrop-blur-md p-10 relative rounded-[40px] border border-outline-variant/40 shadow-sm overflow-hidden">
      <span className="material-symbols-outlined text-secondary text-4xl opacity-40 absolute top-8 right-8" data-icon="format_quote">format_quote</span>
      <p className="text-black font-body-lg italic mb-8 leading-relaxed">"Slender Stitches didn't just teach me to sew; they taught me to see. The focus on pattern architectural details changed how I approach my entire brand. I now run a successful atelier in Lagos."</p>
      <div>
      <p className="font-label-lg text-black uppercase tracking-widest">Amaka O. - Class of '23</p>
      <p className="text-black/70 font-label-sm uppercase">Creative Director, Amaka Luxury</p>
      </div>
      </div>
      <div className="bg-surface/90 backdrop-blur-md p-10 relative rounded-[40px] border border-outline-variant/40 shadow-sm overflow-hidden">
      <span className="material-symbols-outlined text-secondary text-4xl opacity-40 absolute top-8 right-8" data-icon="format_quote">format_quote</span>
      <p className="text-black font-body-lg italic mb-8 leading-relaxed">"The 9-month program is the best investment I've made for my career. The instructors are incredibly patient and the facilities are world-class. Highly recommended for serious designers."</p>
      <div>
      <p className="font-label-lg text-black uppercase tracking-widest">Chidi E. - Class of '22</p>
      <p className="text-black/70 font-label-sm uppercase">Founder, CE Designs</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
