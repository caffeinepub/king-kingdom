import { SiWhatsapp } from 'react-icons/si';

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/917734920728"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-40 bg-whatsapp hover:bg-whatsapp-dark text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2 font-bold"
      aria-label="Contact us on WhatsApp"
    >
      <SiWhatsapp className="w-6 h-6" />
      <span className="hidden sm:inline text-sm">WhatsApp</span>
    </a>
  );
}
