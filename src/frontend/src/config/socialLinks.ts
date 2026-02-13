/**
 * Social media links configuration for King Kingdom
 * Add URLs to enable social media icons in the footer
 */

export interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/profile.php?id=100034789162284',
    ariaLabel: 'Visit our Facebook page'
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/king_kingdom0055?igsh=MXBtNXptM2d2M3NybQ==',
    ariaLabel: 'Follow us on Instagram'
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@kingkingdomsolutions',
    ariaLabel: 'Subscribe to our YouTube channel'
  },
  {
    name: 'linkedin',
    url: '', // Add LinkedIn URL here when available
    ariaLabel: 'Connect with us on LinkedIn'
  }
];

/**
 * Returns only social links that have a valid URL configured
 */
export function getActiveSocialLinks(): SocialLink[] {
  return socialLinks.filter(link => link.url && link.url.trim() !== '');
}
