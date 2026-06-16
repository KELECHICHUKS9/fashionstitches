import heroImage from '../assets/img2.jpeg';

export default function Hero() {
  return (
    <>
      <header className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            alt="Fashion Academy Hero"
            className="w-full h-full object-cover block scale-105 animate-zoom-subtle"
            src={heroImage}
          />
        </div>
        <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary-fixed-dim font-label-lg text-label-lg tracking-[0.3em] uppercase mb-6 drop-shadow-sm">
              EST. 2024
            </span>
            <h1 className="font-display-lg text-display-lg md:text-[80px] text-white leading-tight mb-8">
              Master the Art of
              {' '}
              <span className="italic font-normal">Fashion Design</span>
            </h1>
            <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-xl leading-relaxed">
              Turn Your Passion for Fashion into a Successful Career with Expert Training and Hands-On Experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="bg-primary text-on-primary px-10 py-5 font-label-lg text-label-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2"
                href="#enroll"
              >
                Enroll Now
                <span className="material-symbols-outlined" data-icon="arrow_forward">
                  arrow_forward
                </span>
              </a>
              <a
                className="border border-secondary text-secondary-fixed px-10 py-5 font-label-lg text-label-lg hover:bg-secondary/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                href="https://wa.me/2348131582640"
              >
                Chat on WhatsApp
                <span className="material-symbols-outlined" data-icon="chat">
                  chat
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
