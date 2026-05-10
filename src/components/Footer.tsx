'use client';
import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  'Hotels & Resorts': [
    { label: 'All Properties', href: '/hotels' },
    { label: 'Palace Hotels', href: '/hotels/palaces' },
    { label: 'Beach Resorts', href: '/hotels/beach' },
    { label: 'Mountain Retreats', href: '/hotels/mountain' },
    { label: 'City Hotels', href: '/hotels/city' },
    { label: 'Wildlife Resorts', href: '/hotels/wildlife' },
  ],
  'Dining': [
    { label: 'All Restaurants', href: '/dining' },
    { label: 'Fine Dining', href: '/dining/fine-dining' },
    { label: 'Bars & Lounges', href: '/dining/bars' },
    { label: 'High Tea', href: '/dining/high-tea' },
    { label: 'Specialty Cuisine', href: '/dining/specialty' },
  ],
  'Experiences': [
    { label: 'Cultural Heritage', href: '/experiences/cultural' },
    { label: 'Adventure', href: '/experiences/adventure' },
    { label: 'Wildlife & Nature', href: '/experiences/wildlife' },
    { label: 'Timeless Weddings', href: '/experiences/weddings' },
    { label: 'Celebrations', href: '/experiences/celebrations' },
  ],
  'Wellness': [
    { label: 'J Wellness Circle', href: '/wellness' },
    { label: 'Ayurveda', href: '/wellness/ayurveda' },
    { label: 'Spa Treatments', href: '/wellness/spa' },
    { label: 'Yoga & Meditation', href: '/wellness/yoga' },
  ],
  'About Aura': [
    { label: 'Our Story', href: '/about' },
    { label: 'Majesty Circle', href: '/innercircle' },
    { label: 'Gift Cards', href: '/gifting' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press Room', href: '/press' },
  ],
};

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'f' },
  { label: 'Instagram', href: 'https://instagram.com', icon: '◉' },
  { label: 'Twitter', href: 'https://twitter.com', icon: '𝕏' },
  { label: 'YouTube', href: 'https://youtube.com', icon: '▶' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Newsletter Banner */}
      <div className={styles.newsletter}>
        <div className={styles.newsletterInner}>
          <div className={styles.newsletterText}>
            <h3 className={styles.newsletterTitle}>Majesty Circle</h3>
            <p className={styles.newsletterDesc}>
              Join our exclusive loyalty programme and earn points on every stay, dining, and spa experience.
            </p>
          </div>
          <div className={styles.newsletterForm}>
            <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
              <input
                type="email"
                placeholder="Enter your email address"
                className={styles.emailInput}
                id="newsletter-email"
                aria-label="Email for newsletter"
              />
              <button type="submit" className={styles.subscribeBtn} id="newsletter-submit">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className={styles.footerMain}>
        <div className={styles.footerInner}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.footerLogo} aria-label="Majesty Hotels">
              <span className={styles.logoMain}>MAJESTY</span>
              <span className={styles.logoSub}>HOTELS · RESORTS · PALACES</span>
            </Link>
            <p className={styles.brandDesc}>
              Soulful Luxury Since 1903. From the palaces of India to the world's 
              most coveted destinations, Majesty Hotels offers experiences that honour the 
              extraordinary.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.socialLink}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className={styles.awards}>
              <span className={styles.awardBadge}>★ Forbes Travel Guide</span>
              <span className={styles.awardBadge}>★ Condé Nast</span>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat} className={styles.linksCol}>
              <h4 className={styles.colTitle}>{cat}</h4>
              <ul className={styles.linkList}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} The Indian Hotels Company Limited (IHCL). All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms of Use</Link>
            <Link href="/cookies" className={styles.legalLink}>Cookie Policy</Link>
            <Link href="/sitemap" className={styles.legalLink}>Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
