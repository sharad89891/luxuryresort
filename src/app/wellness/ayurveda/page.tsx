import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Ayurveda | Aura Hotels',
  description: 'Rooted in 5,000 years of Indian wisdom, our Ayurvedic therapies restore balance to the doshas. Consult with our expert Vaidyas for a deeply personalized healing journey.',
};

export default function AyurvedaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/ayurveda_spa_treatment_1778416350069.png"
            alt="Ayurveda"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Discover</span>
          <h1 className={styles.title}>Ayurveda</h1>
          <div className={styles.goldLine} />
          <p className={styles.desc}>Experience the finest collection of ayurveda curated for our discerning guests.</p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Overview</span>
          <h2 className={styles.introTitle}>Ancient Healing</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Rooted in 5,000 years of Indian wisdom, our Ayurvedic therapies restore balance to the doshas. Consult with our expert Vaidyas for a deeply personalized healing journey.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {[{"name":"Panchakarma","location":"J Wellness Circle","desc":"A comprehensive 7-21 day detoxification and rejuvenation programme.","price":"Consultation Required","image":"/images/ayurveda_spa_treatment_1778416350069.png"},{"name":"Abhyanga","location":"J Wellness Circle","desc":"Traditional synchronized full-body massage using warm, medicated herbal oils.","price":"90 Minutes","image":"/images/spa_wellness_center_1778416130330.png"},{"name":"Shirodhara","location":"J Wellness Circle","desc":"A deeply relaxing therapy where warm oil is continuously poured over the forehead.","price":"60 Minutes","image":"/images/infinity_pool_view_1778416175800.png"}].map((item, idx) => (
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