import { useState, FormEvent } from 'react';
import { MapPin, Mail, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CONTACT_INFO } from '@/config/contact';
import { openWhatsApp } from '@/lib/whatsapp';
import PhoneNumberLinks from '@/components/king-kingdom/contact/PhoneNumberLinks';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.service.trim()) {
      newErrors.service = 'Service required is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      const message = `Hello King Kingdom,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService Required: ${formData.service}\n\nMessage: ${formData.message}`;
      
      openWhatsApp(message);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        service: '',
        message: ''
      });
      setErrors({});
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-[10%] bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-9">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2.5">Contact Us</h2>
          <p className="text-base text-muted-foreground">
            Call or WhatsApp us for free consultation, quotation and site visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Contact Info */}
          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-navy font-bold text-xl mb-2.5">King Kingdom</h3>
            <p className="font-semibold text-foreground mb-4">Complete Construction Solutions</p>
            
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">{CONTACT_INFO.address}</p>
              </div>

              <div className="flex items-start gap-3">
                <PhoneNumberLinks />
              </div>

              <div className="flex items-start gap-3">
                <SiWhatsapp className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-navy text-sm mb-1">WhatsApp</p>
                  <a 
                    href={CONTACT_INFO.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-navy text-sm"
                  >
                    {CONTACT_INFO.whatsapp.display}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-navy text-sm mb-1">Email</p>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-muted-foreground hover:text-navy text-sm"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-navy text-sm mb-1">Business Hours</p>
                  <p className="text-muted-foreground text-sm">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-5">
              <a
                href={CONTACT_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-navy to-navy-dark text-white px-5 py-2.5 rounded-xl font-bold hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                <SiWhatsapp className="w-4 h-4" />
                WhatsApp Now
              </a>
              <a
                href={CONTACT_INFO.phone.tel}
                className="bg-white border border-border text-navy px-5 py-2.5 rounded-xl font-bold hover:bg-navy-light/30 transition-all inline-flex items-center gap-2"
              >
                <SiWhatsapp className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-navy font-bold text-xl mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold text-navy">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`mt-1.5 rounded-xl ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-semibold text-navy">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`mt-1.5 rounded-xl ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <Label htmlFor="service" className="text-sm font-semibold text-navy">Service Required</Label>
                <Input
                  id="service"
                  type="text"
                  placeholder="Service Required (e.g. Construction, Renovation)"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`mt-1.5 rounded-xl ${errors.service ? 'border-red-500' : ''}`}
                />
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-semibold text-navy">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`mt-1.5 rounded-xl min-h-[120px] resize-y ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-br from-navy to-navy-dark text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50"
              >
                Send on WhatsApp
              </button>

              <p className="text-muted-foreground text-xs text-center">
                This form will send your message directly to WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
