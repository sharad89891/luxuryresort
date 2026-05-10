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
            src="/images/ayurveda_spa_treatment_1778416350069.png"
            alt="Ayurveda"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>The Science of Life</span>
          <div className={styles.goldLine} />
          <h1 className={styles.heroTitle}>Ayurveda</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <p className={styles.introText}>Immerse yourself in authentic Ayurvedic healing. Our expert Vaidyas (physicians) curate personalized wellness programs designed to balance your doshas and restore optimal health.</p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            {/* Section 1 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Personalized Consultations</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Your Ayurvedic journey begins with a comprehensive consultation with our resident physician. Through pulse diagnosis and lifestyle assessment, we identify your unique constitution (Prakriti) and current imbalances (Vikriti) to design a bespoke healing pathway.</p>
            </div>
            
            {/* Section 2 */}
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>Panchakarma Detoxification</h2>
              <div className={styles.goldLineSmall} />
              <p className={styles.cardDesc}>Experience the ultimate physical and mental reset with our intensive Panchakarma therapies. This rigorous detoxification process purges deep-seated toxins, revives the immune system, and reverses the effects of stress and aging.</p>
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
              <h3 className={styles.featureTitle}>Abhyanga</h3>
              <p className={styles.featureDesc}>Therapeutic full-body massage with warm medicated oils.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Shirodhara</h3>
              <p className={styles.featureDesc}>Continuous flow of warm oil over the forehead to calm the mind.</p>
            </div>            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Pizhichil</h3>
              <p className={styles.featureDesc}>A royal treatment combining oil massage and heat therapy.</p>
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
