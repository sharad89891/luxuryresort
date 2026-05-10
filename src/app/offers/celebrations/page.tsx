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
            src="/images/wedding_banquet_hall_1778416202576.png"
            alt="Celebration Packages"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Moments to Cherish</span>
          <div className={styles.goldLine} />
          <h1 className={styles.heroTitle}>Celebration Packages</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <p className={styles.introText}>From fairytale weddings to milestone birthdays, celebrate life\'s most precious moments with the legendary hospitality of Majesty Hotels. Our packages are designed to make every detail perfect.</p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            {/* Section 1 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Legendary Weddings</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Step into a world of timeless romance with our wedding packages. Our expert planners will assist you in every detail, from the choice of venue and menu to the floral arrangements and entertainment, ensuring your special day is truly unforgettable.</p>
            </div>
            
            {/* Section 2 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Milestone Events</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Celebrate your achievements and milestones with our customized event packages. From grand galas in our historic ballrooms to intimate gatherings in our private salons, we provide the perfect setting for your success.</p>
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
              <h3 className={styles.featureTitle}>Bridal Suite</h3>
              <p className={styles.featureDesc}>Complimentary stay in our most romantic suites.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Custom Menus</h3>
              <p className={styles.featureDesc}>Bespoke culinary creations for your guests.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Planning Services</h3>
              <p className={styles.featureDesc}>Dedicated event concierge for every detail.</p>
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
