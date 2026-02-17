export default function PortfolioSection() {
  const projects = [
    {
      image: '/assets/generated/kk-project-01.dim_1600x900.jpg',
      title: 'Modern House Construction',
      location: 'Sujangarh, Rajasthan • Residential'
    },
    {
      image: '/assets/generated/kk-project-02.dim_1600x900.jpg',
      title: 'Luxury Home Finishing',
      location: 'Sujangarh, Rajasthan • Finishing'
    },
    {
      image: '/assets/generated/kk-project-03.dim_1600x900.jpg',
      title: 'Office & Shop Renovation',
      location: 'Rajasthan • Commercial'
    },
    {
      image: '/assets/generated/kk-project-04.dim_1600x900.jpg',
      title: 'Interior & Ceiling Work',
      location: 'Residential • Interior'
    },
    {
      image: '/assets/generated/kk-project-05.dim_1600x900.jpg',
      title: 'Tiles & Flooring Project',
      location: 'Residential • Flooring'
    },
    {
      image: '/assets/generated/kk-project-06.dim_1600x900.jpg',
      title: 'Commercial Building Work',
      location: 'Rajasthan • Commercial'
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-20 px-4 sm:px-6 lg:px-[10%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-9">
          <h2 className="section-title">Projects / Portfolio</h2>
          <p className="section-subtitle">
            Some examples of our construction and finishing work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm group hover:shadow-xl hover:-translate-y-1.5 transition-all">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h4 className="text-navy font-bold text-base mb-1.5">{project.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
