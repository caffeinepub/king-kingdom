import { Mail, MapPin } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { CONTACT_INFO } from '@/config/contact';
import PhoneNumberLinks from './contact/PhoneNumberLinks';

export default function TopBar() {
  return (
    <div className="bg-navy text-navy-light py-2.5 px-[10%] border-b border-navy-border">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm">
        <div className="flex flex-wrap items-center gap-4">
          <PhoneNumberLinks />
          <a href={CONTACT_INFO.whatsapp.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:underline transition-all">
            <SiWhatsapp className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-1.5 hover:underline transition-all">
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{CONTACT_INFO.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-xs">{CONTACT_INFO.address}</span>
        </div>
      </div>
    </div>
  );
}
