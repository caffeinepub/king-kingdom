import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { CONTACT_INFO } from '@/config/contact';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const messageText = `Hello King Kingdom,

Name: ${formData.name}
Phone: ${formData.phone}
Service Required: ${formData.service}

Message: ${formData.message}`;

    const url = buildWhatsAppUrl(messageText);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-[10%]">
      <div className="text-center mb-12">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Call or WhatsApp us for free consultation, quotation and site visit.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="card-white p-7 space-y-5">
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">King Kingdom</h3>
            <p className="text-base font-semibold text-foreground">Complete Construction Solutions</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                {CONTACT_INFO.address}
              </p>
            </div>
            {CONTACT_INFO.phones.map((phone) => (
              <div key={phone.tel} className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-navy flex-shrink-0" />
                <a href={phone.tel} className="text-sm font-semibold text-navy hover:underline">
                  {phone.display}
                </a>
              </div>
            ))}
            <div className="flex items-center gap-3">
              <SiWhatsapp className="w-5 h-5 text-navy flex-shrink-0" />
              <a href={CONTACT_INFO.whatsapp.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-navy hover:underline">
                {CONTACT_INFO.phones[1].display}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-navy flex-shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-semibold text-navy hover:underline">
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <a href={CONTACT_INFO.whatsapp.url} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <SiWhatsapp className="w-4 h-4" />
              WhatsApp Now
            </a>
            <a href={CONTACT_INFO.phone.tel} className="btn-outline inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card-white p-7">
          <h3 className="text-xl font-bold text-navy mb-5">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="service">Service Required</Label>
              <Input
                id="service"
                type="text"
                placeholder="e.g. Construction, Renovation"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                required
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="mt-1.5 min-h-[120px]"
              />
            </div>
            <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2">
              <SiWhatsapp className="w-4 h-4" />
              Send on WhatsApp
            </button>
            <p className="text-xs text-muted-foreground text-center">
              This form will send your message directly to WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
