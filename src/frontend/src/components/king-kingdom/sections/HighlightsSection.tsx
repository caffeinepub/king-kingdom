import { CheckCircle2, Award, Users, Clock } from 'lucide-react';
import FeatureIcon from '../FeatureIcon';

export default function HighlightsSection() {
  const highlights = [
    {
      icon: CheckCircle2,
      title: 'Complete Construction',
      description: 'From planning to final handover — everything managed professionally.'
    },
    {
      icon: Award,
      title: 'Premium Quality Work',
      description: 'Quality materials, skilled workers, and strong finishing standards.'
    },
    {
      icon: Users,
      title: 'Skilled Team',
      description: 'Experienced engineers, supervisors, and professional labor team.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Work completion with proper timeline and transparent communication.'
    }
  ];

  return (
    <div className="-mt-8 px-4 sm:px-6 lg:px-[10%] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white border border-border rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all">
              <FeatureIcon icon={item.icon} />
              <h4 className="text-navy font-bold text-base mb-1.5">{item.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
