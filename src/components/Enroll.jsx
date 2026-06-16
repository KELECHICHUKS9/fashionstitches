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
      <div className="flex items-baseline gap-4 mb-10">
      <span className="font-label-lg text-label-lg text-outline uppercase tracking-widest">Application Form Fee:</span>
      <span className="font-display-md text-display-md text-primary">₦5,000</span>
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
