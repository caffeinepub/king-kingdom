export default function PortfolioSection() {
  const projects = [
    {
      title: 'Modern House Construction',
      location: 'Sujangarh, Rajasthan • Residential'
    },
    {
      title: 'Luxury Home Finishing',
      location: 'Sujangarh, Rajasthan • Finishing'
    },
    {
      title: 'Office & Shop Renovation',
      location: 'Rajasthan • Commercial'
    },
    {
      title: 'Interior & Ceiling Work',
      location: 'Residential • Interior'
    },
    {
      title: 'Tiles & Flooring Project',
      location: 'Residential • Flooring'
    },
    {
      title: 'Commercial Building Work',
      location: 'Rajasthan • Commercial'
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-20 px-4 sm:px-6 lg:px-[10%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-9">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2.5">Projects / Portfolio</h2>
          <p className="text-base text-muted-foreground">
            Some examples of our construction and finishing work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all">
              <div className="h-44 bg-gradient-to-br from-navy-light/40 to-navy-light/20 flex items-center justify-center text-navy font-extrabold text-lg tracking-wider">
                PROJECT
              </div>
              <div className="p-4.5">
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
