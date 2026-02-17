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
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-[10%] bg-gradient-to-br from-navy via-navy to-navy-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-9">
          <h2 className="text-3xl md:text-4xl font-bold mb-2.5">Why Choose King Kingdom</h2>
          <p className="text-base text-white/80 max-w-2xl mx-auto">
            Trusted construction solutions with quality, professionalism, and transparent dealing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-3">
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h4 className="text-base font-bold mb-2">{reason.title}</h4>
                <p className="text-sm text-white/80 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
