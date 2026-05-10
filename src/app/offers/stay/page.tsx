'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function OffersPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/luxury_suite_interior_1778416076439.png"
            alt="Stay Offers"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>The Luxury of Time</span>
          <div className={styles.goldLine} />
          <h1 className={styles.heroTitle}>Stay Offers</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <p className={styles.introText}>Extended stays, suite upgrades, and family escapes. Explore our range of stay-focused offers designed to provide the perfect backdrop for your memories.</p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            {/* Section 1 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Suite Surprises</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Experience our most opulent accommodations with our Suite Upgrade offers. Enjoy the space and elegance of our legendary suites with exclusive benefits like 24-hour butler service, private check-in, and access to executive lounges.</p>
            </div>
            
            {/* Section 2 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Family Getaways</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Create lasting bonds with our curated family packages. From kids activities and special menus to extra rooms and babysitting services, we ensure every member of the family has a truly magical stay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className={styles.featuresBanner}>
        <div className={styles.container}>
          <h2 className={styles.bannerTitle}>Inclusions</h2>
          <div className={styles.goldLineCenter} />
          <div className={styles.featuresGrid}>
                        <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Stay 3, Pay 2</h3>
              <p className={styles.featureDesc}>One complimentary night on every three-night stay.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Suite Upgrade</h3>
              <p className={styles.featureDesc}>Upgrade to the next category of luxury.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Royal Welcome</h3>
              <p className={styles.featureDesc}>In-room amenities and private airport transfers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Experience Exceptional Value</h2>
          <p className={styles.ctaDesc}>Take advantage of our exclusive offers and book your next Aura escape today.</p>
          <div className={styles.ctaButtons}>
            <Link href="/book" className={styles.btnPrimary}>View All Offers</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
