import { useEffect } from 'react';
import About from './components/About.jsx';
import CallToAction from './components/CallToAction.jsx';
import Contact from './components/Contact.jsx';
import Courses from './components/Courses.jsx';
import Enroll from './components/Enroll.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Hero from './components/Hero.jsx';
import Navigation from './components/Navigation.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';

export default function App() {
  useEffect(() => {
    document.body.className = 'bg-surface text-on-surface font-body-md overflow-x-hidden';

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    reveals.forEach((reveal) => observer.observe(reveal));

    const nav = document.querySelector('nav');
    const handleScroll = () => {
      if (!nav) return;

      if (window.scrollY > 50) {
        nav.classList.add('h-20', 'shadow-sm');
        nav.classList.remove('h-16');
      } else {
        nav.classList.remove('h-20', 'shadow-sm');
        nav.classList.add('h-16');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      reveals.forEach((reveal) => observer.unobserve(reveal));
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <Gallery />
      <CallToAction />
      <Enroll />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
