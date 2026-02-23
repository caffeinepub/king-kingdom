import { CONTACT_INFO } from '@/config/contact';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-[10%] overflow-hidden bg-gradient-to-br from-navy via-navy to-blue-900"
    >
      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-navy/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-7 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
              Welcome to King Kingdom
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 max-w-xl">
              Complete Construction Solutions Under One Roof
            </p>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 max-w-xl">
              Complete Construction Solutions (CCS), under Group of King Kingdom, provides professional construction, renovation, interior finishing, and
              material supply services with quality workmanship, trusted dealing, and on-time delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-0">
              <button
                onClick={() => scrollToSection('contact')}
                className="premium-btn-primary"
              >
                Get Free Quotation
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="premium-btn-secondary bg-white text-navy hover:bg-white/90"
              >
                View Projects
              </button>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm text-navy p-6 sm:p-7 rounded-2xl shadow-xl">
            <h3 className="text-lg font-bold mb-3">What We Deliver</h3>
            <ul className="space-y-0">
              {[
                'House Construction & Renovation',
                'Interior & Exterior Finishing',
                'Electrical & Plumbing Work',
                'Material Supply & Site Support',
                'Professional Supervision & Quality'
              ].map((item, index) => (
                <li key={index} className="py-2.5 border-b border-navy/10 last:border-b-0 text-sm text-navy/90">
                  ✔ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
