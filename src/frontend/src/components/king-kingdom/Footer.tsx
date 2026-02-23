import { Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';
import { CONTACT_INFO } from '@/config/contact';
import { getActiveSocialLinks } from '@/config/socialLinks';

export default function Footer() {
  const getAppIdentifier = () => {
    try {
      return encodeURIComponent(window.location.hostname || 'complete-construction-solutions');
    } catch {
      return 'complete-construction-solutions';
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

  const activeSocialLinks = getActiveSocialLinks();

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'facebook':
        return <SiFacebook className="w-5 h-5" />;
      case 'instagram':
        return <SiInstagram className="w-5 h-5" />;
      case 'youtube':
        return <SiYoutube className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#07142e] text-white/80 pt-8 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
              <img 
                src="/assets/generated/ccs-logo-square.dim_1024x1024.png" 
                alt="CCS Logo" 
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-contain transition-all hover:scale-105"
                width="48"
                height="48"
              />
              <div>
                <p className="text-white/60 text-[10px] sm:text-[11px] font-medium leading-tight">Group of King Kingdom</p>
                <h4 className="text-white font-bold text-base sm:text-lg leading-tight">Complete Construction Solutions</h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Complete Construction Solutions (CCS) is a professional construction company under Group of King Kingdom in Sujangarh, Rajasthan providing
              complete construction solutions including renovation, finishing, interior work, and
              construction material supply.
            </p>
            {activeSocialLinks.length > 0 && (
              <div className="flex items-center gap-3 mt-4">
                {activeSocialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {getSocialIcon(link.name)}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4 className="text-white font-bold mb-2.5">Quick Links</h4>
            <div className="space-y-1.5">
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
                  className="block text-sm hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2.5">Contact</h4>
            <div className="space-y-1.5 text-sm">
              {CONTACT_INFO.phones.map((phone) => (
                <a 
                  key={phone.tel}
                  href={phone.tel} 
                  className="block hover:text-white transition-colors"
                >
                  {phone.display}
                </a>
              ))}
              <a href={`mailto:${CONTACT_INFO.email}`} className="block hover:text-white transition-colors">
                {CONTACT_INFO.email}
              </a>
              <a 
                href={CONTACT_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                WhatsApp: {CONTACT_INFO.whatsapp.display}
              </a>
              <p className="leading-relaxed pt-2">
                {CONTACT_INFO.address}
              </p>
              <p className="pt-2">
                {CONTACT_INFO.hours}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 space-y-2">
          <p className="text-xs text-center text-white/60">
            © {new Date().getFullYear()} Group of King Kingdom | Complete Construction Solutions (CCS). All Rights Reserved.
          </p>
          <p className="text-xs text-center text-white/50 flex items-center justify-center gap-1.5">
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
      </div>
    </footer>
  );
}
