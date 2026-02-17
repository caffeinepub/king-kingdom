import TopBar from './components/king-kingdom/TopBar';
import HeaderNav from './components/king-kingdom/HeaderNav';
import HeroSection from './components/king-kingdom/sections/HeroSection';
import HighlightsSection from './components/king-kingdom/sections/HighlightsSection';
import AboutSection from './components/king-kingdom/sections/AboutSection';
import ServicesSection from './components/king-kingdom/sections/ServicesSection';
import PortfolioSection from './components/king-kingdom/sections/PortfolioSection';
import ConstructionPhotosSection from './components/king-kingdom/sections/ConstructionPhotosSection';
import WhyChooseSection from './components/king-kingdom/sections/WhyChooseSection';
import ProcessSection from './components/king-kingdom/sections/ProcessSection';
import ContactSection from './components/king-kingdom/sections/ContactSection';
import Footer from './components/king-kingdom/Footer';
import FloatingWhatsAppButton from './components/king-kingdom/FloatingWhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <HeaderNav />
      <main>
        <HeroSection />
        <HighlightsSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ConstructionPhotosSection />
        <WhyChooseSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
