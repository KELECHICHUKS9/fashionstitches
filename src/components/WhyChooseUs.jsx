import equipmentImage from '../assets/why-choose-equipment.jpeg';
import gownsImage from '../assets/why-choose-gowns.jpeg';

export default function WhyChooseUs() {
  return (
    <>
      <section className="py-24 md:py-32 bg-surface overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative reveal">
      <div className="grid grid-cols-2 gap-4">
      <div className="aspect-square bg-secondary-container/10 flex flex-col justify-center items-center p-8 text-center">
      <span className="material-symbols-outlined text-primary text-5xl mb-4" data-icon="precision_manufacturing">precision_manufacturing</span>
      <h4 className="font-label-lg text-label-lg text-primary uppercase">Modern Equipment</h4>
      </div>
      <div className="aspect-square relative overflow-hidden">
      <img className="w-full h-full object-cover" data-alt="Close-up of a high-end industrial sewing machine in a bright fashion studio, with soft morning light hitting the ivory metal surface. Elegant burgundy fabric with gold embroidery is being meticulously worked on, reflecting the premium editorial style and craftsmanship of the academy." src={equipmentImage}/>
      </div>
      <div className="aspect-square relative overflow-hidden">
      <img className="w-full h-full object-cover" data-alt="A rack of luxurious, avant-garde evening gowns in vibrant colors like deep burgundy and champagne gold, hanging in a minimalist studio space with white walls and natural lighting. The composition is clean and organized, suggesting a high-end pedagogical environment." src={gownsImage}/>
      </div>
      <div className="aspect-square bg-primary flex flex-col justify-center items-center p-8 text-center">
      <span className="material-symbols-outlined text-secondary-fixed text-5xl mb-4" data-icon="workspace_premium">workspace_premium</span>
      <h4 className="font-label-lg text-label-lg text-on-primary uppercase">Accredited Certificate</h4>
      </div>
      </div>
      </div>
      <div className="reveal">
      <span className="text-secondary font-label-lg text-label-lg tracking-widest uppercase mb-4 block">The Advantage</span>
      <h2 className="font-display-md text-display-md text-primary mb-8 leading-tight">Why Choose Slender Stitches?</h2>
      <div className="space-y-8">
      <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-px bg-secondary mt-3"></div>
      <div>
      <h4 className="font-headline-md text-[20px] text-primary mb-2">Hands-on Practical Training</h4>
      <p className="text-on-surface-variant font-body-md">We prioritize execution. You spend 80% of your time working on real garments and industry projects.</p>
      </div>
      </div>
      <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-px bg-secondary mt-3"></div>
      <div>
      <h4 className="font-headline-md text-[20px] text-primary mb-2">Expert Instructors &amp; Mentorship</h4>
      <p className="text-on-surface-variant font-body-md">Learn from established designers who understand the Nigerian and global fashion market dynamics.</p>
      </div>
      </div>
      <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-px bg-secondary mt-3"></div>
      <div>
      <h4 className="font-headline-md text-[20px] text-primary mb-2">Post-Graduation Support</h4>
      <p className="text-on-surface-variant font-body-md">We don't just teach; we help you launch. Enjoy mentorship and access to our professional network after graduation.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
