export default function ServicesSection() {
  const services = [
    {
      title: 'House Construction',
      description: 'Complete home construction with strong structure, modern planning, and quality finishing.'
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Upgrade your old house with modern design, new finishing, and smart space planning.'
    },
    {
      title: 'Grey Structure',
      description: 'Professional grey structure work with quality cement, steel, bricks and site supervision.'
    },
    {
      title: 'Interior Designing',
      description: 'Modern interior solutions including modular work, ceiling, wall panels, and decor finishing.'
    },
    {
      title: 'Tiles, Flooring & Paint',
      description: 'Premium paint finishing, wall textures, tile installation, and complete flooring solutions.'
    },
    {
      title: 'Electrical & Plumbing',
      description: 'Safe wiring, lighting, fittings, plumbing lines, bathroom fittings and water solutions.'
    },
    {
      title: 'Commercial Projects',
      description: 'Shop, office, plaza construction and finishing work with professional standards.'
    },
    {
      title: 'Construction Material Supply',
      description: 'Supply of quality materials including cement, sand, aggregate, bricks, steel and more.'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 px-4 sm:px-6 lg:px-[10%] bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-9">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2.5">Our Services</h2>
          <p className="text-base text-muted-foreground">
            Professional solutions for construction, renovation, finishing, and material supply.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-border rounded-2xl p-5.5 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all">
              <h3 className="text-navy font-bold text-lg mb-2.5">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
