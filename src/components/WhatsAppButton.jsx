export default function WhatsAppButton() {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-emerald-500 text-white flex items-center justify-center rounded-full shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:shadow-[0_0_30px_rgba(34,197,94,0.55)] border border-emerald-400/70 hover:border-emerald-300/90 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300/40 group" href="https://wa.me/2348131582640">
        <span className="material-symbols-outlined text-4xl animate-blink" data-icon="chat" style={{ fontVariationSettings: "'FILL' 1" }}>
          chat
        </span>
        <span className="absolute right-full mr-4 bg-white text-on-surface px-4 py-2 rounded-lg text-label-sm uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>
    </>
  );
}
