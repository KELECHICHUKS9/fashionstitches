export default function WhatsAppButton() {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white flex items-center justify-center rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group" href="https://wa.me/2348131582640">
      <span className="material-symbols-outlined text-4xl" data-icon="chat" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
      <span className="absolute right-full mr-4 bg-white text-on-surface px-4 py-2 rounded-lg text-label-sm uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Chat with us</span>
      </a>
    </>
  );
}
