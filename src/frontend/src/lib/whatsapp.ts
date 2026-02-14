import { CONTACT_INFO } from '@/config/contact';

export function buildWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `${CONTACT_INFO.whatsapp.url}?text=${encodedMessage}`;
}

export function openWhatsApp(message: string): void {
  const url = buildWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
