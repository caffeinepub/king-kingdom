import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CallNowButtonProps {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'default';
  className?: string;
}

export default function CallNowButton({ variant = 'outline', size = 'default', className }: CallNowButtonProps) {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  const sizeClasses = size === 'sm' ? 'text-sm px-3 py-2' : '';
  
  return (
    <a
      href="tel:+917734920728"
      className={cn(baseClasses, sizeClasses, 'inline-flex items-center gap-2', className)}
    >
      <Phone className="w-4 h-4" />
      Call Now
    </a>
  );
}
