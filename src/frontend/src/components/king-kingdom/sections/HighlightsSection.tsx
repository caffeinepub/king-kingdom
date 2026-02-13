import { Building2, Award, Users, Clock } from 'lucide-react';

export default function HighlightsSection() {
  const highlights = [
    {
      icon: Building2,
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
    <section className="px-[10%] -mt-8 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="card-white p-5 hover:shadow-lg transition-shadow">
              <Icon className="w-8 h-8 text-navy mb-3" />
              <h4 className="text-base font-bold text-navy mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
