import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/config/contact';
import { cn } from '@/lib/utils';

interface PhoneNumberLinksProps {
  className?: string;
  iconClassName?: string;
  separator?: string;
  showIcon?: boolean;
}

export default function PhoneNumberLinks({ 
  className, 
  iconClassName,
  separator = ' / ',
  showIcon = true 
}: PhoneNumberLinksProps) {
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      {showIcon && <Phone className={cn('w-3.5 h-3.5 flex-shrink-0', iconClassName)} />}
      <div className="flex flex-wrap items-center gap-1">
        {CONTACT_INFO.phones.map((phone, index) => (
          <span key={phone.tel} className="flex items-center">
            <a href={phone.tel} className="hover:underline transition-all">
              {phone.display}
            </a>
            {index < CONTACT_INFO.phones.length - 1 && (
              <span className="mx-1">{separator}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
