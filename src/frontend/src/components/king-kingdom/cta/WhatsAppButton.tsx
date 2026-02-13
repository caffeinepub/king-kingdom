import { SiWhatsapp } from 'react-icons/si';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'default';
  className?: string;
}

export default function WhatsAppButton({ variant = 'primary', size = 'default', className }: WhatsAppButtonProps) {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  const sizeClasses = size === 'sm' ? 'text-sm px-3 py-2' : '';
  
  return (
    <a
      href="https://wa.me/917734920728"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseClasses, sizeClasses, 'inline-flex items-center gap-2', className)}
    >
      <SiWhatsapp className="w-4 h-4" />
      WhatsApp
    </a>
  );
}
