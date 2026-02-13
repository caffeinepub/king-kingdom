import { Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube, SiLinkedin } from 'react-icons/si';
import { getActiveSocialLinks } from '../../config/socialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const activeSocialLinks = getActiveSocialLinks();
  
  const getAppIdentifier = () => {
    try {
      return encodeURIComponent(window.location.hostname || 'king-kingdom');
    } catch {
      return 'king-kingdom';
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const getSocialIcon = (name: string) => {
    const iconClass = "w-5 h-5";
    switch (name.toLowerCase()) {
      case 'facebook':
        return <SiFacebook className={iconClass} />;
      case 'instagram':
        return <SiInstagram className={iconClass} />;
      case 'youtube':
        return <SiYoutube className={iconClass} />;
      case 'linkedin':
        return <SiLinkedin className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-navy-dark text-navy-light py-12 px-[10%] mt-16">
      <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-8 mb-8">
        {/* About */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">King Kingdom</h4>
          <p className="text-sm leading-relaxed text-navy-light/90">
            King Kingdom is a professional construction company in Sujangarh, Rajasthan providing
            complete construction solutions including renovation, finishing, interior work, and
            construction material supply.
          </p>
          
          {/* Social Media Links */}
          {activeSocialLinks.length > 0 && (
            <div className="mt-6">
              <h5 className="text-white font-semibold text-sm mb-3">Follow Us</h5>
              <div className="flex items-center gap-3">
                {activeSocialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-navy-light hover:text-white transition-all duration-200 hover:scale-110"
                  >
                    {getSocialIcon(link.name)}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-4">Quick Links</h4>
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
                  className="text-sm text-navy-light/90 hover:text-white hover:underline transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-base mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a href="tel:+917734920728" className="text-sm text-navy-light/90 hover:text-white hover:underline transition-colors">
                +91 7734920728
              </a>
            </li>
            <li>
              <a href="mailto:kk5912618@gmail.com" className="text-sm text-navy-light/90 hover:text-white hover:underline transition-colors">
                kk5912618@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/917734920728" target="_blank" rel="noopener noreferrer" className="text-sm text-navy-light/90 hover:text-white hover:underline transition-colors">
                WhatsApp
              </a>
            </li>
          </ul>
          <p className="text-sm text-navy-light/90 leading-relaxed mt-4">
            Ricco Industrial Area, Sujangarh, Rajasthan - 331507
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 pt-6 text-center space-y-2">
        <p className="text-sm text-navy-light/70">
          © {currentYear} King Kingdom | Complete Construction Solutions. All Rights Reserved.
        </p>
        <p className="text-xs text-navy-light/60 flex items-center justify-center gap-1.5">
          Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${getAppIdentifier()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
