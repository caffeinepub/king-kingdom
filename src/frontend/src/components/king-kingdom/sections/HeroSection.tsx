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
    <section id="home" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-[10%] bg-gradient-to-br from-white via-navy-light/20 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-7 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-navy mb-4">
              Complete Construction Solutions Under One Roof
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
              King Kingdom provides professional construction, renovation, interior finishing, and
              material supply services with quality workmanship, trusted dealing, and on-time delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-0">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-br from-navy to-navy-dark text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all"
              >
                Get Free Quotation
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="bg-white border border-border text-navy px-6 py-3 rounded-xl font-bold hover:bg-navy-light/30 transition-all"
              >
                View Projects
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-navy to-navy-dark text-white p-6 sm:p-7 rounded-2xl shadow-xl">
            <h3 className="text-lg font-bold mb-3">What We Deliver</h3>
            <ul className="space-y-0">
              {[
                'House Construction & Renovation',
                'Interior & Exterior Finishing',
                'Electrical & Plumbing Work',
                'Material Supply & Site Support',
                'Professional Supervision & Quality'
              ].map((item, index) => (
                <li key={index} className="py-2.5 border-b border-white/10 last:border-b-0 text-sm text-white/90">
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
