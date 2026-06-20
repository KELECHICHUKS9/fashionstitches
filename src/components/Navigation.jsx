import { useState } from 'react';
import logoImage from '../assets/img3.jpeg';

const links = [
  { label: 'Academy', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-300 h-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img alt="Slender Stitches Logo" className="h-10 w-auto" src={logoImage} />
            <div className="flex flex-col">
              <span className="md:hidden font-label-lg text-label-lg text-primary tracking-wide uppercase">Slender Stitches</span>
              <span className="hidden md:block font-headline-md text-headline-md text-primary tracking-widest uppercase">
                SLENDER STITCHES
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
            <a
              className="bg-primary text-on-primary px-6 py-3 rounded-[40px] font-label-lg text-label-lg hover:bg-primary/90 transition-all shadow-sm"
              href="#enroll"
            >
              Enroll Now
            </a>
          </div>

          <button className="md:hidden text-primary" onClick={() => setIsDrawerOpen(true)} type="button">
            <span className="material-symbols-outlined text-3xl" data-icon="menu">
              menu
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-surface transition-transform duration-500 md:hidden flex flex-col p-6 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-drawer"
      >
        <div className="flex justify-between items-center mb-12">
          <img alt="Logo" className="h-10" src={logoImage} />
          <button onClick={closeDrawer} type="button">
            <span className="material-symbols-outlined text-3xl" data-icon="close">
              close
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-8">
          {links.map((link) => (
            <a
              className="font-headline-md text-headline-md text-primary"
              href={link.href}
              key={link.href}
              onClick={closeDrawer}
            >
              {link.label}
            </a>
          ))}
          <a
            className="bg-primary text-on-primary text-center py-4 rounded-sm font-label-lg text-label-lg"
            href="#enroll"
            onClick={closeDrawer}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </>
  );
}
