'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navItems = [
  {
    label: 'Hotels & Resorts',
    href: '/hotels',
    dropdown: [
      { label: 'All Properties', href: '/hotels' },
      { label: 'Palace Hotels', href: '/hotels/palaces' },
      { label: 'Beach Resorts', href: '/hotels/beach' },
      { label: 'Mountain Retreats', href: '/hotels/mountain' },
      { label: 'City Hotels', href: '/hotels/city' },
      { label: 'Wildlife Resorts', href: '/hotels/wildlife' },
    ],
  },
  {
    label: 'Dining',
    href: '/dining',
    dropdown: [
      { label: 'All Restaurants', href: '/dining' },
      { label: 'Fine Dining', href: '/dining/fine-dining' },
      { label: 'Specialty Cuisine', href: '/dining/specialty' },
      { label: 'Bars & Lounges', href: '/dining/bars' },
      { label: 'High Tea', href: '/dining/high-tea' },
    ],
  },
  {
    label: 'Experiences',
    href: '/experiences',
    dropdown: [
      { label: 'All Experiences', href: '/experiences' },
      { label: 'Cultural Heritage', href: '/experiences/cultural' },
      { label: 'Adventure', href: '/experiences/adventure' },
      { label: 'Wildlife & Nature', href: '/experiences/wildlife' },
      { label: 'Timeless Weddings', href: '/experiences/weddings' },
      { label: 'Celebrations', href: '/experiences/celebrations' },
    ],
  },
  {
    label: 'Wellness',
    href: '/wellness',
    dropdown: [
      { label: 'J Wellness Circle', href: '/wellness' },
      { label: 'Ayurveda', href: '/wellness/ayurveda' },
      { label: 'Spa Treatments', href: '/wellness/spa' },
      { label: 'Yoga & Meditation', href: '/wellness/yoga' },
      { label: 'Fitness', href: '/wellness/fitness' },
    ],
  },
  {
    label: 'Offers',
    href: '/offers',
    dropdown: [
      { label: 'All Offers', href: '/offers' },
      { label: 'Stay Offers', href: '/offers/stay' },
      { label: 'Dining Offers', href: '/offers/dining' },
      { label: 'Celebration Packages', href: '/offers/celebrations' },
      { label: 'Early Bird', href: '/offers/early-bird' },
    ],
  },
  {
    label: 'Gift Cards',
    href: '/gifting',
    dropdown: [],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.transparent}`}>
        <div className={styles.navInner}>
          {/* Left Nav */}
          <nav className={styles.navLeft} role="navigation" aria-label="Primary navigation left">
            {navItems.slice(0, 3).map((item) => (
              <div
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                  {item.dropdown.length > 0 && (
                    <span className={styles.chevron}>&#8964;</span>
                  )}
                </Link>
                {item.dropdown.length > 0 && activeDropdown === item.label && (
                  <div className={styles.dropdown}>
                    {item.dropdown.map((sub) => (
                      <Link key={sub.label} href={sub.href} className={styles.dropdownItem}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Logo Center */}
          <Link href="/" className={styles.logoWrap} aria-label="Majesty Hotels - Home">
            <div className={styles.logoText}>
              <span className={styles.logoMain}>MAJESTY</span>
              <span className={styles.logoSub}>HOTELS · RESORTS · PALACES</span>
            </div>
          </Link>

          {/* Right Nav */}
          <nav className={styles.navRight} role="navigation" aria-label="Primary navigation right">
            {navItems.slice(3).map((item) => (
              <div
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                  {item.dropdown.length > 0 && (
                    <span className={styles.chevron}>&#8964;</span>
                  )}
                </Link>
                {item.dropdown.length > 0 && activeDropdown === item.label && (
                  <div className={styles.dropdown}>
                    {item.dropdown.map((sub) => (
                      <Link key={sub.label} href={sub.href} className={styles.dropdownItem}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA */}
            <div className={styles.navActions}>
              <Link href="/book" className={styles.bookBtn} id="nav-book-now">
                Book Now
              </Link>
            </div>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            id="mobile-menu-btn"
          >
            <span className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen3 : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.mobileOverlayOpen : ''}`}>
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileHeader}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className={styles.mobileLogo}>
              <span className={styles.mobileLogoMain}>MAJESTY</span>
              <span className={styles.mobileLogoSub}>HOTELS · RESORTS · PALACES</span>
            </Link>
            <button className={styles.closeBtn} onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              &times;
            </button>
          </div>
          <nav className={styles.mobileNav}>
            {navItems.map((item) => (
              <div key={item.label} className={styles.mobileNavItem}>
                <button
                  className={styles.mobileNavBtn}
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                >
                  <span>{item.label}</span>
                  {item.dropdown.length > 0 && (
                    <span className={`${styles.mobileChevron} ${mobileExpanded === item.label ? styles.mobileChevronOpen : ''}`}>
                      &#8964;
                    </span>
                  )}
                </button>
                {item.dropdown.length > 0 && mobileExpanded === item.label && (
                  <div className={styles.mobileDropdown}>
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className={styles.mobileDropdownItem}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className={styles.mobileActions}>
              <Link href="/book" className={styles.mobileBookBtn} onClick={() => setMobileMenuOpen(false)}>
                Book Now
              </Link>
              <Link href="/innercircle" className={styles.mobileInnerCircle} onClick={() => setMobileMenuOpen(false)}>
                Majesty Circle
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
