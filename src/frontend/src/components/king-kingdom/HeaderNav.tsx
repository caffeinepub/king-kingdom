import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { CONTACT_INFO } from '@/config/contact';

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/90 backdrop-blur-sm'} border-b border-border`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Brand */}
          <button onClick={() => scrollToSection('home')} className="flex items-center group shrink-0">
            <div className="logo-brand-wrapper">
              <img 
                src="/assets/generated/ccs-logo-square.dim_1024x1024.png" 
                alt="CCS Logo" 
                className="logo-image"
                width="44"
                height="44"
              />
              <div>
                <h1 className="text-[11px] sm:text-xs font-semibold text-muted-foreground leading-tight">Group of King Kingdom</h1>
                <p className="text-sm sm:text-base font-bold text-navy leading-tight">Complete Construction Solutions</p>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Projects', id: 'portfolio' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-navy hover:bg-navy-light/50 text-sm font-semibold transition-all px-2.5 py-2 rounded-xl"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2.5 min-w-[200px] justify-end">
            <a
              href={CONTACT_INFO.phone.tel}
              className="bg-white border border-border text-navy px-3.5 py-2.5 rounded-xl font-bold text-sm hover:bg-navy-light/30 transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={CONTACT_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-navy to-navy-dark text-white px-3.5 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <SiWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-navy p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav className="flex flex-col px-4 py-4 space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Projects', id: 'portfolio' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-navy hover:text-navy-dark text-left font-semibold py-2"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={CONTACT_INFO.phone.tel}
                className="bg-white border border-border text-navy px-5 py-2.5 rounded-xl font-bold text-center inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={CONTACT_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-navy to-navy-dark text-white px-5 py-2.5 rounded-xl font-bold text-center inline-flex items-center justify-center gap-2"
              >
                <SiWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
