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
            src="/images/gourmet_cuisine_dish_1778416264157.png"
            alt="Dining Offers"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>A Feast for the Senses</span>
          <div className={styles.goldLine} />
          <h1 className={styles.heroTitle}>Dining Offers</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <p className={styles.introText}>Savour the finest flavours with our exclusive culinary offers. From romantic dinners under the stars to indulgent weekend brunches, explore our world of gourmet delights.</p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            {/* Section 1 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Epicurean Journeys</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Indulge in a world of flavours with our chef-led culinary experiences. Our dining offers provide exceptional value at our award-winning restaurants, featuring everything from traditional regional specialities to global fine dining.</p>
            </div>
            
            {/* Section 2 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Curated Celebrations</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Make your special occasions even more memorable with our bespoke dining packages. Whether it is an anniversary, a birthday, or a corporate milestone, we create the perfect setting and menu for your celebration.</p>
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
              <h3 className={styles.featureTitle}>Gourmet Brunch</h3>
              <p className={styles.featureDesc}>Champagne weekend brunches with live music.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Chef\'s Table</h3>
              <p className={styles.featureDesc}>Private multi-course dinners with the Executive Chef.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Wine Pairing</h3>
              <p className={styles.featureDesc}>Curated wine selections for every course.</p>
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
