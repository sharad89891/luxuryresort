import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Sustainability | Majesty Hotels',
  description: 'At Majesty Hotels, we believe that true luxury must be sustainable. Our environmental initiatives focus on renewable energy, water conservation, and supporting local artisan communities.',
};

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/cultural_experiences_1778416250752.png"
            alt="Sustainability"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Discover</span>
          <h1 className={styles.title}>Sustainability</h1>
          <div className={styles.goldLine} />
          <p className={styles.desc}>Experience the finest collection of sustainability curated for our discerning guests.</p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Overview</span>
          <h2 className={styles.introTitle}>A Commitment to Tomorrow</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            At Majesty Hotels, we believe that true luxury must be sustainable. Our environmental initiatives focus on renewable energy, water conservation, and supporting local artisan communities.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {[{"name":"Renewable Energy","location":"Operations","desc":"Over 50% of our power requirements are met through wind and solar energy.","price":"Eco-Friendly","image":"/images/infinity_pool_view_1778416175800.png"},{"name":"Zero Single-Use Plastic","location":"Operations","desc":"We have eliminated single-use plastics across our rooms, dining, and spa facilities.","price":"Eco-Friendly","image":"/images/beach_resort_view_1778416217181.png"},{"name":"Community Support","location":"Local Initiatives","desc":"Sourcing ingredients and materials locally to empower artisans and farmers.","price":"Social","image":"/images/cultural_experiences_1778416250752.png"}].map((item, idx) => (
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