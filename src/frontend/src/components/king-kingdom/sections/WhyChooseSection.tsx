import { Users, Award, DollarSign, Eye, Clock, Package } from 'lucide-react';

export default function WhyChooseSection() {
  const reasons = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Professional engineers, supervisors and skilled workers for every project.'
    },
    {
      icon: Award,
      title: 'Premium Quality Work',
      description: 'We follow proper construction standards and deliver clean finishing.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear quotation and fair pricing with honest communication.'
    },
    {
      icon: Eye,
      title: 'Site Supervision',
      description: 'Regular supervision, quality check, and work monitoring for best results.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We work with timeline planning and ensure proper project handover.'
    },
    {
      icon: Package,
      title: 'Material Supply Support',
      description: 'Quality construction materials supply with proper handling and site delivery.'
    }
  ];

  return (
    <section className="py-16 md:py-20 px-[10%] bg-gradient-to-br from-navy via-navy to-navy-dark text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose King Kingdom</h2>
        <p className="text-navy-light text-base md:text-lg max-w-2xl mx-auto">
          Trusted construction solutions with quality, professionalism, and transparent dealing.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <Icon className="w-8 h-8 text-white mb-4" />
              <h4 className="text-lg font-bold mb-3">{reason.title}</h4>
              <p className="text-sm text-navy-light leading-relaxed">{reason.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
