export default function Courses() {
  return (
    <>
      <section className="py-24 md:py-32 bg-surface-container-low" id="courses">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="text-center mb-20 reveal">
      <span className="text-secondary font-label-lg text-label-lg tracking-widest uppercase mb-4 block">Programs</span>
      <h2 className="font-display-md text-display-md text-primary">Our Professional Courses</h2>
      <div className="w-24 h-px bg-secondary mx-auto mt-6"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
      {/* Course 1 */}
      <div className="bg-surface p-10 border border-outline-variant/20 hover:border-secondary transition-all duration-500 group reveal">
      <div className="mb-8 w-16 h-16 flex items-center justify-center bg-secondary-container/30 text-secondary transition-colors group-hover:bg-primary group-hover:text-on-primary">
      <span className="material-symbols-outlined text-4xl" data-icon="styler">styler</span>
      </div>
      <span className="font-label-sm text-label-sm text-outline uppercase tracking-tighter mb-2 block">Comprehensive</span>
      <h3 className="font-headline-md text-headline-md text-primary mb-4">Beginner to Advanced</h3>
      <p className="text-on-surface-variant mb-8 font-body-md">A total mastery program covering pattern drafting, garment construction, and fashion illustration from scratch to industry level.</p>
      <div className="flex items-center justify-between border-t border-outline-variant/30 pt-6 mt-auto">
      <span className="font-label-lg text-label-lg text-secondary">9 MONTHS</span>
      <a className="text-primary hover:translate-x-2 transition-transform" href="#enroll">
      <span className="material-symbols-outlined" data-icon="trending_flat">trending_flat</span>
      </a>
      </div>
      </div>
      {/* Course 2 */}
      <div className="bg-surface p-10 border border-outline-variant/20 hover:border-secondary transition-all duration-500 group reveal" style={{ transitionDelay: "100ms" }}>
      <div className="mb-8 w-16 h-16 flex items-center justify-center bg-secondary-container/30 text-secondary transition-colors group-hover:bg-primary group-hover:text-on-primary">
      <span className="material-symbols-outlined text-4xl" data-icon="palette">palette</span>
      </div>
      <span className="font-label-sm text-label-sm text-outline uppercase tracking-tighter mb-2 block">Foundation</span>
      <h3 className="font-headline-md text-headline-md text-primary mb-4">Beginner to Intermediate</h3>
      <p className="text-on-surface-variant mb-8 font-body-md">Master the essentials of sewing and basic pattern cutting. Perfect for hobbyists or those starting their entrepreneurial journey.</p>
      <div className="flex items-center justify-between border-t border-outline-variant/30 pt-6 mt-auto">
      <span className="font-label-lg text-label-lg text-secondary">6 MONTHS</span>
      <a className="text-primary hover:translate-x-2 transition-transform" href="#enroll">
      <span className="material-symbols-outlined" data-icon="trending_flat">trending_flat</span>
      </a>
      </div>
      </div>
      {/* Course 3 */}
      <div className="bg-surface p-10 border border-outline-variant/20 hover:border-secondary transition-all duration-500 group reveal" style={{ transitionDelay: "200ms" }}>
      <div className="mb-8 w-16 h-16 flex items-center justify-center bg-secondary-container/30 text-secondary transition-colors group-hover:bg-primary group-hover:text-on-primary">
      <span className="material-symbols-outlined text-4xl" data-icon="auto_awesome">auto_awesome</span>
      </div>
      <span className="font-label-sm text-label-sm text-outline uppercase tracking-tighter mb-2 block">Specialization</span>
      <h3 className="font-headline-md text-headline-md text-primary mb-4">Intermediate to Advanced</h3>
      <p className="text-on-surface-variant mb-8 font-body-md">Refine your techniques with advanced tailoring, corsetry, and evening wear. Designed for active designers seeking perfection.</p>
      <div className="flex items-center justify-between border-t border-outline-variant/30 pt-6 mt-auto">
      <span className="font-label-lg text-label-lg text-secondary">4 MONTHS</span>
      <a className="text-primary hover:translate-x-2 transition-transform" href="#enroll">
      <span className="material-symbols-outlined" data-icon="trending_flat">trending_flat</span>
      </a>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
