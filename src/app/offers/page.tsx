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
            src="/images/special_offers_banner_1778416333572.png"
            alt="Exclusive Offers"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Exceptional Value, Legendary Experiences</span>
          <div className={styles.goldLine} />
          <h1 className={styles.heroTitle}>Exclusive Offers</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <p className={styles.introText}>Discover a curated collection of offers designed to elevate your stay at Majesty Hotels. From seasonal retreats to bespoke dining experiences, explore the perfect package for your next journey.</p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            {/* Section 1 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Timeless Luxury</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>At Majesty Hotels, we believe every stay should be extraordinary. Our exclusive offers are designed to provide you with the finest experiences, whether you are planning a family holiday, a romantic getaway, or a business trip. Immerse yourself in our world of soulful luxury.</p>
            </div>
            
            {/* Section 2 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Bespoke Inclusions</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Each of our packages is thoughtfully curated to include meaningful benefits, from spa credits and airport transfers to curated city tours and gourmet breakfast spreads. Experience the legend of Aura hospitality with added value.</p>
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
              <h3 className={styles.featureTitle}>Stay Packages</h3>
              <p className={styles.featureDesc}>Complimentary nights and upgrade offers.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Dining Delights</h3>
              <p className={styles.featureDesc}>Culinary credits and chef-curated menus.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Seasonal Retreats</h3>
              <p className={styles.featureDesc}>Exclusive benefits for your holiday escapes.</p>
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
