import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Yoga & Meditation | Aura Hotels',
  description: 'Find stillness and flexibility through the ancient discipline of Yoga. Our expert practitioners guide you through asanas, pranayama, and meditation tailored to your level.',
};

export default function YogaMeditationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/spa_wellness_center_1778416130330.png"
            alt="Yoga & Meditation"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Discover</span>
          <h1 className={styles.title}>Yoga & Meditation</h1>
          <div className={styles.goldLine} />
          <p className={styles.desc}>Experience the finest collection of yoga & meditation curated for our discerning guests.</p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Overview</span>
          <h2 className={styles.introTitle}>Inner Peace</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Find stillness and flexibility through the ancient discipline of Yoga. Our expert practitioners guide you through asanas, pranayama, and meditation tailored to your level.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {[{"name":"Sunrise Asanas","location":"Beach & Mountain Resorts","desc":"Invigorating morning yoga sessions surrounded by breathtaking natural beauty.","price":"Complimentary","image":"/images/infinity_pool_view_1778416175800.png"},{"name":"Mindfulness Meditation","location":"All Properties","desc":"Guided sessions to reduce stress, improve focus, and cultivate inner calm.","price":"60 Minutes","image":"/images/spa_wellness_center_1778416130330.png"},{"name":"Private Instruction","location":"All Properties","desc":"One-on-one sessions addressing specific physical or mental wellness goals.","price":"90 Minutes","image":"/images/cultural_experiences_1778416250752.png"}].map((item, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardImgWrap}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={styles.cardOverlay} />
                  <span className={styles.cardLocation}>{item.location}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardPrice}>{item.price}</span>
                    <Link href="/book" className={styles.cardBtn}>
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}