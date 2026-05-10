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
            src="/images/infinity_pool_view_1778416175800.png"
            alt="Yoga & Meditation"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Harmony of Mind and Body</span>
          <div className={styles.goldLine} />
          <h1 className={styles.heroTitle}>Yoga & Meditation</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <p className={styles.introText}>Reconnect with your inner self through the ancient practice of Yoga. Set amidst serene surroundings, our sessions guide you towards physical strength, mental clarity, and spiritual peace.</p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            {/* Section 1 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Guided Practices</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Whether you are a beginner or an advanced practitioner, our expert Yoga instructors offer personalized guidance. Choose from Hatha, Vinyasa, or restorative Yoga styles, tailored to your flexibility and goals.</p>
            </div>
            
            {/* Section 2 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Mindfulness & Meditation</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Calm the relentless chatter of the mind with our specialized meditation and Pranayama (breathwork) sessions. Learn techniques to manage stress, improve focus, and cultivate a deep sense of inner stillness.</p>
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
              <h3 className={styles.featureTitle}>Sunrise Yoga</h3>
              <p className={styles.featureDesc}>Start your day with energizing asanas at dawn.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Pranayama</h3>
              <p className={styles.featureDesc}>Master the art of conscious breathing.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Sound Bath Healing</h3>
              <p className={styles.featureDesc}>Deep relaxation through acoustic vibrations.</p>
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
