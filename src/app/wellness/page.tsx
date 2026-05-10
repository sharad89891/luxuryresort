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
            alt="J Wellness Circle"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>A Sanctuary for the Soul</span>
          <div className={styles.goldLine} />
          <h1 className={styles.heroTitle}>J Wellness Circle</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <p className={styles.introText}>Experience holistic healing and profound relaxation inspired by ancient Indian wellness traditions. The J Wellness Circle offers a seamless integration of body, mind, and spirit.</p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            {/* Section 1 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Our Philosophy</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>At J Wellness Circle, we believe that true luxury lies in absolute wellbeing. Our therapies are deeply rooted in the ancient Indian healing sciences of Ayurveda and Yoga, elevated by the finest natural ingredients and expert therapists. We invite you on a journey of self-discovery and rejuvenation.</p>
            </div>
            
            {/* Section 2 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Signature Therapies</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Discover our curated selection of signature therapies designed to restore balance and harmony. From the purifying Vishuddi body treatment to the deeply relaxing Sushupti sleep therapy, each experience is crafted to transport you to a state of profound tranquility.</p>
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
              <h3 className={styles.featureTitle}>Ayurveda</h3>
              <p className={styles.featureDesc}>Ancient holistic healing tailored to your dosha.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Spa Retreats</h3>
              <p className={styles.featureDesc}>Luxurious treatments using bespoke natural blends.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Yoga & Meditation</h3>
              <p className={styles.featureDesc}>Find inner peace with guided mindful practices.</p>
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
