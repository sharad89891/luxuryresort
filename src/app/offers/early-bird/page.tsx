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
            src="/images/hero_palace_hotel_1778416060429.png"
            alt="Early Bird"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Plan Ahead for Perfection</span>
          <div className={styles.goldLine} />
          <h1 className={styles.heroTitle}>Early Bird</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <p className={styles.introText}>Reward your foresight with our Early Bird offers. Book your stay in advance to enjoy exclusive savings and guaranteed availability at our most iconic destinations.</p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            {/* Section 1 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Advanced Bookings</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Planning your holiday in advance has never been more rewarding. Secure your preferred dates at our most sought-after properties while enjoying significant savings on our best available rates.</p>
            </div>
            
            {/* Section 2 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Peace of Mind</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Enjoy the confidence of having your travel plans perfectly arranged. With our Early Bird packages, you can relax and look forward to your journey, knowing that every detail of your Aura experience is already taken care of.</p>
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
              <h3 className={styles.featureTitle}>Up to 25% Off</h3>
              <p className={styles.featureDesc}>Special savings on bookings made 30 days in advance.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Flexible Dates</h3>
              <p className={styles.featureDesc}>One-time date change option included.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Early Check-in</h3>
              <p className={styles.featureDesc}>Priority access to your room upon arrival.</p>
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
