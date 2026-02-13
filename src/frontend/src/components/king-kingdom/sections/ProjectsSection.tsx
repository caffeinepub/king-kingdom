export default function ProjectsSection() {
  const projects = [
    {
      image: '/assets/generated/project-modern-house.dim_1200x800.jpg',
      title: 'Modern House Construction',
      location: 'Sujangarh, Rajasthan • Residential'
    },
    {
      image: '/assets/generated/project-luxury-finishing.dim_1200x800.jpg',
      title: 'Luxury Home Finishing',
      location: 'Sujangarh, Rajasthan • Finishing'
    },
    {
      image: '/assets/generated/project-office-renovation.dim_1200x800.jpg',
      title: 'Office & Shop Renovation',
      location: 'Rajasthan • Commercial'
    },
    {
      image: '/assets/generated/project-ceiling-work.dim_1200x800.jpg',
      title: 'Interior & Ceiling Work',
      location: 'Residential • Interior'
    },
    {
      image: '/assets/generated/project-tiles-flooring.dim_1200x800.jpg',
      title: 'Tiles & Flooring Project',
      location: 'Residential • Flooring'
    },
    {
      image: '/assets/generated/project-commercial-building.dim_1200x800.jpg',
      title: 'Commercial Building Work',
      location: 'Rajasthan • Commercial'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 px-[10%]">
      <div className="text-center mb-12">
        <h2 className="section-title">Projects / Portfolio</h2>
        <p className="section-subtitle">
          Some examples of our construction and finishing work.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="card-white overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="relative h-52 overflow-hidden bg-gradient-to-br from-navy-light/20 to-navy-light/40">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h4 className="text-base font-bold text-navy mb-2">{project.title}</h4>
              <p className="text-sm text-muted-foreground">{project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
