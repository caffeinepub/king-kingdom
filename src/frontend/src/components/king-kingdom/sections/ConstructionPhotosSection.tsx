import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import GalleryLightbox from '../GalleryLightbox';

export default function ConstructionPhotosSection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const galleryImages = [
    {
      src: '/assets/generated/kk-gallery-01.dim_1600x900.jpg',
      alt: 'Construction site progress - King Kingdom project'
    },
    {
      src: '/assets/generated/kk-gallery-02.dim_1600x900.jpg',
      alt: 'Building structure work - King Kingdom construction'
    },
    {
      src: '/assets/generated/kk-gallery-03.dim_1600x900.jpg',
      alt: 'Interior finishing work - King Kingdom project'
    },
    {
      src: '/assets/generated/kk-gallery-04.dim_1600x900.jpg',
      alt: 'Completed residential project - King Kingdom'
    },
    {
      src: '/assets/generated/kk-gallery-05.dim_1600x900.jpg',
      alt: 'Commercial construction project - King Kingdom'
    },
    {
      src: '/assets/generated/kk-gallery-06.dim_1600x900.jpg',
      alt: 'Quality finishing details - King Kingdom work'
    }
  ];

  return (
    <>
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-[10%] bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-9">
            <h2 className="section-title">Construction Gallery</h2>
            <p className="section-subtitle">
              Real photos from our construction sites and completed projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className="premium-card overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all p-0 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <ImageIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <GalleryLightbox
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </>
  );
}
