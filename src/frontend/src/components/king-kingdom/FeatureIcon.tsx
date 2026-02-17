import { LucideIcon } from 'lucide-react';

interface FeatureIconProps {
  icon: LucideIcon;
  className?: string;
}

export default function FeatureIcon({ icon: Icon, className = '' }: FeatureIconProps) {
  return (
    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-navy/10 to-navy/5 mb-3.5 ${className}`}>
      <Icon className="w-6 h-6 text-navy" strokeWidth={2} />
    </div>
  );
}
