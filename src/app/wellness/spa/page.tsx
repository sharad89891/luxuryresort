'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function WellnessPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/spa_wellness_center_1778416130330.png"
            alt="Spa Treatments"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Indulgent Relaxation</span>
          <div className={styles.goldLine} />
          <h1 className={styles.heroTitle}>Spa Treatments</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <p className={styles.introText}>Surrender to the healing touch of our expert therapists. Our spa menu features a fusion of traditional Indian therapies and contemporary wellness techniques, using exclusive natural formulations.</p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            {/* Section 1 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Bespoke Therapies</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Our therapies are crafted to address your specific needs, whether you seek deep tissue relief, intense hydration, or pure relaxation. We use only the finest natural ingredients, including pure essential oils, exotic herbs, and mineral-rich clays.</p>
            </div>
            
            {/* Section 2 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Couples Retreat</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Share a journey of relaxation with your loved one in our exquisite couples suites. Enjoy side-by-side massages, private soaking tubs, and dedicated relaxation spaces designed for intimate tranquility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className={styles.featuresBanner}>
        <div className={styles.container}>
          <h2 className={styles.bannerTitle}>Highlights</h2>
          <div className={styles.goldLineCenter} />
          <div className={styles.featuresGrid}>
                        <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Signature Massages</h3>
              <p className={styles.featureDesc}>Deeply relaxing therapies to melt away tension.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Body Envelopments</h3>
              <p className={styles.featureDesc}>Nourishing wraps for radiant, silken skin.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Facial Rituals</h3>
              <p className={styles.featureDesc}>Rejuvenating treatments for a luminous complexion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Begin Your Wellness Journey</h2>
          <p className={styles.ctaDesc}>Book your stay or schedule an appointment with our expert therapists.</p>
          <div className={styles.ctaButtons}>
            <Link href="/book" className={styles.btnPrimary}>Book Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
