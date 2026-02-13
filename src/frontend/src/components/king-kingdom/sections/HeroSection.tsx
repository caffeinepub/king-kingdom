import { ArrowRight, CheckCircle2 } from 'lucide-react';
import CallNowButton from '../cta/CallNowButton';
import WhatsAppButton from '../cta/WhatsAppButton';

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
    <section id="home" className="bg-gradient-to-br from-white via-navy-light/20 to-navy-light/30 py-16 md:py-20 px-[10%]">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-center">
        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] tracking-tight">
            Complete Construction Solutions Under One Roof
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            King Kingdom provides professional construction, renovation, interior finishing, and
            material supply services with quality workmanship, trusted dealing, and on-time delivery.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Free Quotation
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-outline inline-flex items-center gap-2"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Hero Card */}
        <div className="relative">
          <div className="card-navy p-6 md:p-7 space-y-4">
            <h3 className="text-xl font-bold text-white">What We Deliver</h3>
            <ul className="space-y-3">
              {[
                'House Construction & Renovation',
                'Interior & Exterior Finishing',
                'Electrical & Plumbing Work',
                'Material Supply & Site Support',
                'Professional Supervision & Quality'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-navy-light border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-white mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Hero Image Background */}
          <div className="absolute -z-10 -right-8 -bottom-8 w-64 h-64 opacity-10">
            <img 
              src="/assets/generated/king-kingdom-hero.dim_1600x900.jpg" 
              alt="" 
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
