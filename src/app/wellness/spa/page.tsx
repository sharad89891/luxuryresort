import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Spa Treatments | Aura Hotels',
  description: 'Indulge in luxurious spa therapies that blend the best of Eastern wisdom and Western techniques. We use premium botanical ingredients to soothe, nourish, and revitalize.',
};

export default function SpaTreatmentsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/spa_wellness_center_1778416130330.png"
            alt="Spa Treatments"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Discover</span>
          <h1 className={styles.title}>Spa Treatments</h1>
          <div className={styles.goldLine} />
          <p className={styles.desc}>Experience the finest collection of spa treatments curated for our discerning guests.</p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Overview</span>
          <h2 className={styles.introTitle}>Ultimate Relaxation</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Indulge in luxurious spa therapies that blend the best of Eastern wisdom and Western techniques. We use premium botanical ingredients to soothe, nourish, and revitalize.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {[{"name":"Signature J Wellness","location":"All Spas","desc":"Our flagship massage combining multiple techniques to release deep muscular tension.","price":"120 Minutes","image":"/images/spa_wellness_center_1778416130330.png"},{"name":"Indian Aromatherapy","location":"All Spas","desc":"Gentle, flowing strokes using pure essential oils of jasmine, rose, and sandalwood.","price":"90 Minutes","image":"/images/ayurveda_spa_treatment_1778416350069.png"},{"name":"Couples Retreat","location":"All Spas","desc":"A shared journey of relaxation in our luxurious private couples' suites.","price":"120 Minutes","image":"/images/luxury_suite_interior_1778416076439.png"}].map((item, idx) => (
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