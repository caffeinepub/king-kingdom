import { Home, Wrench, Hammer, Palette, Droplet, Zap, Building, Package } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: 'House Construction',
      description: 'Complete home construction with strong structure, modern planning, and quality finishing.'
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Upgrade your old house with modern design, new finishing, and smart space planning.'
    },
    {
      icon: Hammer,
      title: 'Grey Structure',
      description: 'Professional grey structure work with quality cement, steel, bricks and site supervision.'
    },
    {
      icon: Palette,
      title: 'Interior Designing',
      description: 'Modern interior solutions including modular work, ceiling, wall panels, and decor finishing.'
    },
    {
      icon: Droplet,
      title: 'Tiles, Flooring & Paint',
      description: 'Premium paint finishing, wall textures, tile installation, and complete flooring solutions.'
    },
    {
      icon: Zap,
      title: 'Electrical & Plumbing',
      description: 'Safe wiring, lighting, fittings, plumbing lines, bathroom fittings and water solutions.'
    },
    {
      icon: Building,
      title: 'Commercial Projects',
      description: 'Shop, office, plaza construction and finishing work with professional standards.'
    },
    {
      icon: Package,
      title: 'Construction Material Supply',
      description: 'Supply of quality materials including cement, sand, aggregate, bricks, steel and more.'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 px-[10%] bg-accent/30">
      <div className="text-center mb-12">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Professional solutions for construction, renovation, finishing, and material supply.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="card-white p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Icon className="w-10 h-10 text-navy mb-4" />
              <h3 className="text-lg font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
