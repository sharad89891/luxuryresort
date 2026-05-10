import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Fitness | Aura Hotels',
  description: 'Maintain your wellness routine with our state-of-the-art fitness centers, temperature-controlled pools, and personal training services available at all times.',
};

export default function FitnessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/infinity_pool_view_1778416175800.png"
            alt="Fitness"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Discover</span>
          <h1 className={styles.title}>Fitness</h1>
          <div className={styles.goldLine} />
          <p className={styles.desc}>Experience the finest collection of fitness curated for our discerning guests.</p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Overview</span>
          <h2 className={styles.introTitle}>Active Wellness</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Maintain your wellness routine with our state-of-the-art fitness centers, temperature-controlled pools, and personal training services available at all times.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {[{"name":"Personal Training","location":"City Hotels & Resorts","desc":"Bespoke workout regimens designed by our certified fitness experts.","price":"60 Minutes","image":"/images/hotel_lobby_grand_1778416389976.png"},{"name":"Aqua Aerobics","location":"Select Resorts","desc":"Low-impact, high-resistance workouts in our luxurious outdoor pools.","price":"45 Minutes","image":"/images/infinity_pool_view_1778416175800.png"},{"name":"Functional Fitness","location":"All Properties","desc":"24-hour access to gyms equipped with the latest cardio and strength training gear.","price":"Complimentary","image":"/images/spa_wellness_center_1778416130330.png"}].map((item, idx) => (
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