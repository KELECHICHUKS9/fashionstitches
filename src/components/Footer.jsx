import logoImage from '../assets/logo.png';

export default function Footer() {
  return (
    <>
      <footer className="bg-primary pt-20 pb-12">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
      <img alt="Footer Logo" className="h-16 mx-auto mb-10" src={logoImage}/>
      <h2 className="font-headline-md text-on-primary tracking-[0.4em] uppercase mb-12">SLENDER STITCHES</h2>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
      <a className="font-label-lg text-on-primary/70 hover:text-secondary-fixed transition-colors uppercase tracking-widest" href="#about">About Us</a>
      <a className="font-label-lg text-on-primary/70 hover:text-secondary-fixed transition-colors uppercase tracking-widest" href="#courses">Programs</a>
      <a className="font-label-lg text-on-primary/70 hover:text-secondary-fixed transition-colors uppercase tracking-widest" href="#gallery">Portfolio</a>
      <a className="font-label-lg text-on-primary/70 hover:text-secondary-fixed transition-colors uppercase tracking-widest" href="#">Terms</a>
      <a className="font-label-lg text-on-primary/70 hover:text-secondary-fixed transition-colors uppercase tracking-widest" href="#">Privacy</a>
      </div>
      <div className="flex justify-center gap-8 mb-16">
      <a className="w-12 h-12 flex items-center justify-center border border-on-primary/20 rounded-full hover:bg-secondary-fixed hover:text-primary transition-all text-on-primary" href="#">
      <span className="material-symbols-outlined" data-icon="facebook">face_nod</span>
      </a>
      <a className="w-12 h-12 flex items-center justify-center border border-on-primary/20 rounded-full hover:bg-secondary-fixed hover:text-primary transition-all text-on-primary" href="#">
      <span className="material-symbols-outlined" data-icon="camera">camera</span>
      </a>
      <a className="w-12 h-12 flex items-center justify-center border border-on-primary/20 rounded-full hover:bg-secondary-fixed hover:text-primary transition-all text-on-primary" href="#">
      <span className="material-symbols-outlined" data-icon="mail">mail</span>
      </a>
      </div>
      <div className="pt-12 border-t border-on-primary/10">
      <p className="font-label-sm text-label-sm text-on-primary/40 tracking-widest uppercase">© 2024 SLENDER STITCHES FASHION ACADEMY. ALL RIGHTS RESERVED.</p>
      </div>
      </div>
      </footer>
    </>
  );
}
