import { SiWhatsapp } from 'react-icons/si';
import { CONTACT_INFO } from '@/config/contact';

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={CONTACT_INFO.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4.5 bottom-4.5 bg-[#25D366] text-white font-extrabold px-4 py-3.5 rounded-full shadow-2xl hover:-translate-y-0.5 transition-transform z-50 flex items-center gap-2"
      aria-label="Contact us on WhatsApp"
    >
      <SiWhatsapp className="w-5 h-5" />
      <span className="hidden sm:inline text-sm">WhatsApp</span>
    </a>
  );
}
