import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { CONTACT_INFO } from '@/config/contact';

export default function TopBar() {
  return (
    <div className="bg-navy text-white/90 py-2.5 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <a 
              href={CONTACT_INFO.phone.tel}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.phone.display}</span>
            </a>
            <a 
              href={CONTACT_INFO.phones[1].tel}
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.phones[1].display}</span>
            </a>
            <a 
              href={CONTACT_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <SiWhatsapp className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{CONTACT_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <div className="hidden lg:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.hours}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{CONTACT_INFO.address}</span>
              <span className="md:hidden">Sujangarh, Rajasthan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
