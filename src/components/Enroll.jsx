export default function Enroll() {
  return (
    <>
      <section className="py-24 md:py-32 bg-surface" id="enroll">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="bg-secondary-container/20 p-8 md:p-20 relative overflow-hidden reveal">
      <div className="absolute -right-20 -bottom-20 opacity-10">
      <span className="material-symbols-outlined text-[300px] text-secondary" data-icon="styler">styler</span>
      </div>
      <div className="relative z-10 max-w-2xl">
      <span className="inline-block bg-primary text-on-primary px-4 py-1 font-label-sm text-label-sm uppercase tracking-widest mb-6">July Batch Registration</span>
      <h2 className="font-display-md text-display-md text-primary mb-6">Join Our Next Cohort</h2>
      <p className="text-on-surface-variant font-body-lg mb-8">Secure your spot in the most sought-after fashion academy in Owerri. Limited slots available to ensure personalized attention for every student.</p>
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-10">
      <div className="rounded-[40px] border border-outline-variant/40 bg-white/90 px-6 py-5 shadow-sm min-w-[220px]">
      <span className="block font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-2">Application fee</span>
      <span className="block font-display-lg text-display-lg text-primary">₦<span className="text-[2.3rem] leading-none">5,000</span></span>
      </div>
      <p className="max-w-xl text-on-surface-variant leading-relaxed">Complete your application with this one-time fee and receive priority review for the next intake.</p>
      </div>
      <a className="inline-block bg-primary text-on-primary px-12 py-5 font-label-lg text-label-lg hover:bg-primary-container transition-all uppercase tracking-widest" href="#contact">Register Now</a>
      </div>
      </div>
      </div>
      </section>
      {/* Contact & Registration Form */}
    </>
  );
}
