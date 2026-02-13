import { Phone, Mail, MapPin } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function TopBar() {
  return (
    <div className="bg-navy text-navy-light py-2.5 px-[10%] border-b border-navy-border">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm">
        <div className="flex flex-wrap items-center gap-4">
          <a href="tel:+917734920728" className="flex items-center gap-1.5 hover:underline transition-all">
            <Phone className="w-3.5 h-3.5" />
            <span>+91 7734920728</span>
          </a>
          <a href="https://wa.me/917734920728" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:underline transition-all">
            <SiWhatsapp className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
          <a href="mailto:kk5912618@gmail.com" className="flex items-center gap-1.5 hover:underline transition-all">
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">kk5912618@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-xs">Ricco Industrial Area, Sujangarh, Rajasthan - 331507</span>
        </div>
      </div>
    </div>
  );
}
