export default function Contact() {
  return (
    <>
      <section className="py-24 md:py-32 bg-surface border-t border-outline-variant/30" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid lg:grid-cols-2 gap-20">
      <div className="reveal">
      <h2 className="font-display-md text-display-md text-primary mb-12">Get in Touch</h2>
      <div className="space-y-10">
      <div className="flex gap-6">
      <span className="material-symbols-outlined text-secondary text-3xl" data-icon="location_on">location_on</span>
      <div>
      <p className="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-2">Location</p>
      <p className="text-on-surface-variant font-body-lg">26 Onitsha Road, Owerri, Imo State, Nigeria</p>
      <div className="mt-4 overflow-hidden rounded-[40px] border border-outline-variant/25 shadow-sm shadow-slate-400/10">
        <iframe
          title="Owerri Location"
          className="h-72 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Owerri,+Imo+State,+Nigeria&output=embed"
        ></iframe>
      </div>
      </div>
      </div>
      <div className="flex gap-6">
      <span className="material-symbols-outlined text-secondary text-3xl" data-icon="call">call</span>
      <div>
      <p className="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-2">Phone Numbers</p>
      <div className="space-y-1">
      <a className="block text-on-surface-variant font-body-lg hover:text-primary transition-colors" href="tel:08131582640">08131582640</a>
      <a className="block text-on-surface-variant font-body-lg hover:text-primary transition-colors" href="tel:09138244315">09138244315</a>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="bg-surface-container p-8 md:p-12 reveal">
      <h3 className="font-headline-md text-headline-md text-primary mb-8">Registration Inquiry</h3>
      <form action="https://wa.me/2348131582640" className="space-y-6" method="GET" onSubmit={(e) => {
        const name = e.currentTarget.querySelector('input[type="text"]')?.value || '';
        const phone = e.currentTarget.querySelector('input[type="tel"]')?.value || '';
        const email = e.currentTarget.querySelector('input[type="email"]')?.value || '';
        const course = e.currentTarget.querySelector('select')?.value || '';
        const message = e.currentTarget.querySelector('textarea')?.value || '';
        const text = `Hi! My name is ${name}. Phone: ${phone}, Email: ${email}. Course Interest: ${course}. Message: ${message}`;
        e.currentTarget.action = `https://wa.me/2348131582640?text=${encodeURIComponent(text)}`;
      }}
      >
        <div>
          <label className="block font-label-sm text-label-sm text-outline uppercase tracking-widest mb-2">Your Name</label>
          <input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-3 font-body-md transition-all" name="name" required type="text" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-label-sm text-label-sm text-outline uppercase tracking-widest mb-2">Phone Number</label>
            <input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-3 font-body-md transition-all" name="phone" required type="tel" />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-outline uppercase tracking-widest mb-2">Email Address</label>
            <input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-3 font-body-md transition-all" name="email" required type="email" />
          </div>
        </div>
        <div>
          <label className="block font-label-sm text-label-sm text-outline uppercase tracking-widest mb-2">Select Course</label>
          <select className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-3 font-body-md transition-all" name="course">
            <option>Beginner to Advanced (9 Months)</option>
            <option>Beginner to Intermediate (6 Months)</option>
            <option>Intermediate to Advanced (4 Months)</option>
          </select>
        </div>
        <div>
          <label className="block font-label-sm text-label-sm text-outline uppercase tracking-widest mb-2">Message</label>
          <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-3 font-body-md transition-all resize-none" name="message" rows="4" />
        </div>
        <button className="w-full bg-primary text-on-primary py-5 font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary-container transition-all" type="submit">Submit to WhatsApp</button>
      </form>
      </div>
      </div>
      </section>
      {/* Footer */}
    </>
  );
}
