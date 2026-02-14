export default function ConstructionPhotosSection() {
  const photos = [
    {
      image: '/assets/generated/esko-construction-1.dim_1600x900.jpg',
      alt: 'Construction site showing building foundation and structural work'
    },
    {
      image: '/assets/generated/esko-construction-2.dim_1600x900.jpg',
      alt: 'Ongoing construction project with workers and equipment'
    },
    {
      image: '/assets/generated/esko-construction-3.dim_1600x900.jpg',
      alt: 'Building construction progress with concrete framework'
    },
    {
      image: '/assets/generated/esko-construction-4.dim_1600x900.jpg',
      alt: 'Construction site showing brick masonry and structural elements'
    },
    {
      image: '/assets/generated/esko-construction-5.dim_1600x900.jpg',
      alt: 'Construction work in progress with scaffolding and materials'
    },
    {
      image: '/assets/generated/esko-construction-6.dim_1600x900.jpg',
      alt: 'Construction site showing building development and finishing work'
    }
  ];

  return (
    <section className="py-16 md:py-20 px-[10%] bg-gradient-to-b from-background to-navy-light/5">
      <div className="text-center mb-12">
        <h2 className="section-title">Our Construction Work</h2>
        <p className="section-subtitle">
          Real photos from our construction sites and completed projects.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div key={index} className="card-white overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-navy-light/20 to-navy-light/40">
              <img 
                src={photo.image} 
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
