import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/config/contact';

interface PhoneNumberLinksProps {
  className?: string;
  showIcon?: boolean;
  separator?: string;
}

export default function PhoneNumberLinks({ 
  className = '', 
  showIcon = true,
  separator = ' / '
}: PhoneNumberLinksProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showIcon && <Phone className="w-5 h-5 text-navy flex-shrink-0" />}
      <div className="flex flex-wrap items-center gap-1">
        {CONTACT_INFO.phones.map((phone, index) => (
          <span key={phone.tel} className="flex items-center">
            <a 
              href={phone.tel} 
              className="text-muted-foreground hover:text-navy text-sm transition-colors"
            >
              {phone.display}
            </a>
            {index < CONTACT_INFO.phones.length - 1 && (
              <span className="text-muted-foreground text-sm mx-1">{separator}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
