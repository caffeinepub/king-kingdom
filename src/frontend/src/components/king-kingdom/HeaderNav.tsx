import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CallNowButton from './cta/CallNowButton';
import WhatsAppButton from './cta/WhatsAppButton';

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/90 backdrop-blur-sm'} border-b border-border`}>
      <div className="px-[10%] py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 flex-shrink-0">
              <img 
                src="/assets/generated/king-kingdom-logo-from-upload-1.dim_1024x1024.png" 
                alt="King Kingdom Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <h1 className="text-lg font-bold text-navy leading-tight whitespace-nowrap">King Kingdom</h1>
              <p className="text-xs text-muted-foreground whitespace-nowrap">Complete Construction Solutions</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block flex-1">
            <ul className="flex items-center justify-center gap-1">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="px-4 py-2 text-sm font-semibold text-foreground rounded-lg hover:bg-navy-hover transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <CallNowButton variant="outline" size="sm" />
            <WhatsAppButton variant="primary" size="sm" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors shrink-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 space-y-3">
            <nav>
              <ul className="space-y-2">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About', id: 'about' },
                  { label: 'Services', id: 'services' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Contact', id: 'contact' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-4 py-2.5 text-sm font-semibold text-foreground rounded-lg hover:bg-navy-hover transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-2 pt-2">
              <CallNowButton variant="outline" size="default" className="w-full" />
              <WhatsAppButton variant="primary" size="default" className="w-full" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
