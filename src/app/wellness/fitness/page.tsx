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
            src="/images/hotel_lobby_grand_1778416389976.png"
            alt="Fitness"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Active Wellbeing</span>
          <div className={styles.goldLine} />
          <h1 className={styles.heroTitle}>Fitness</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <p className={styles.introText}>Maintain your fitness regime while traveling with our state-of-the-art gymnasiums and personalized training programs. Elevate your heart rate in environments designed to inspire.</p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            {/* Section 1 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Modern Equipment</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Our fitness centers are equipped with the latest cardiovascular and strength-training technology from world-leading brands. Enjoy panoramic views as you work out in fully air-conditioned, beautifully appointed spaces.</p>
            </div>
            
            {/* Section 2 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Personal Training</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Maximize your workout with the guidance of our certified personal trainers. They will design customized routines based on your fitness level and goals, ensuring safe and effective progress during your stay.</p>
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
              <h3 className={styles.featureTitle}>Cardio Zone</h3>
              <p className={styles.featureDesc}>Latest treadmills, ellipticals, and stationary bikes.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Free Weights</h3>
              <p className={styles.featureDesc}>Comprehensive strength training equipment.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Aqua Aerobics</h3>
              <p className={styles.featureDesc}>Low-impact, high-resistance workouts in the pool.</p>
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
